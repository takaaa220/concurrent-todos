import { sleep } from "../utils/sleep";

export type Todo = {
  id: string;
  title: string;
};

class todoApi {
  private _todos: { [key: string]: Todo } = {};

  public async fetchAll(): Promise<Todo[]> {
    const [response, _]: [any, unknown] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/todos/`),
      sleep(800),
    ]);
    const body: Todo[] = await response.json();

    const todos = body.slice(0, 5);
    this._todos = todos.reduce((acc, { id, title }) => {
      acc[id] = { id, title };

      return acc;
    }, {} as { [key: string]: Todo });

    return Object.values(this._todos);
  }

  public async fetch(id: string): Promise<Todo> | never {
    await sleep(300);

    const todo = this._todos[id];
    if (!todo) throw new Error("id is invalid");

    return todo;
  }

  public async write(args: { title: string }): Promise<Todo> {
    await sleep(300);

    const todo = {
      ...args,
      id: `id-${this._todos.length}`,
    };
    this._todos[todo.id] = todo;

    return todo;
  }
}

export const TodoAPI = new todoApi();
