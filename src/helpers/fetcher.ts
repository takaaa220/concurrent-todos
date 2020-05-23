type FetcherValue<F> = F extends Fetcher<infer T> ? T : never;

type State<T> =
  | {
      state: "pending";
      promise: Promise<T>;
    }
  | {
      state: "fulfilled";
      value: T;
    }
  | {
      state: "rejected";
      error: unknown;
    };

export class Fetcher<T> {
  private state: State<T>;

  constructor(fetch: () => Promise<T>) {
    const promise = fetch().then(
      (value) => {
        this.state = {
          state: "fulfilled",
          value,
        };

        return value;
      },
      (error) => {
        this.state = {
          state: "rejected",
          error,
        };

        throw error;
      },
    );

    this.state = {
      state: "pending",
      promise,
    };
  }

  public get(): T {
    switch (this.state.state) {
      case "pending":
        throw this.state.promise;
      case "rejected":
        throw this.state.error;
      default:
        return this.state.value;
    }
  }

  // static race<T extends Fetcher<any>[]>(fetchers: T): Fetcher<FetcherValue<T[number]>> {
  //   for (const f of fetchers) {
  //     if (f.state.state === "fulfilled") {
  //       const result = new Fetcher<any>(() => Promise.resolve());
  //       result.state = {
  //         state: "fulfilled",
  //         value: f.state.value,
  //       };
  //       return result;
  //     } else if (f.state.state === "rejected") {
  //       const result = new Fetcher<any>(() => Promise.resolve());
  //       result.state = {
  //         state: "rejected",
  //         error: f.state.error,
  //       };
  //     }
  //   }

  //   return new Fetcher(() => Promise.race(fetchers.map((f) => (f as any).promise)));
  // }
}
