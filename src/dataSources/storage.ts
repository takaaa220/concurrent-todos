export class Storage<T> {
  private key: "todos";

  constructor(key: "todos") {
    this.key = key;
  }

  public getValue(): T | undefined {
    const value = localStorage.getItem(this.key);

    if (!value) return undefined;

    return JSON.parse(value) as T;
  }

  public setValue(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}
