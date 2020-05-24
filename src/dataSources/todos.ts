import { sleep } from "~/utils/sleep";
import { Todo } from "~/components/Todos";
import { Storage } from "./storage";

type A_TODO = { [key: string]: Todo };

export class todoApi {
  private storage: Storage<A_TODO>;

  constructor(storage: Storage<A_TODO>) {
    this.storage = storage;
  }

  public fetchAll = async (): Promise<Todo[]> => {
    const todos = this.storage.getValue();
    await sleep(500);

    if (!todos) return [];

    return Object.values(todos);
  };

  public fetch = async (id: string): Promise<Todo> | never => {
    await sleep(300);

    const todos = this.storage.getValue();
    const todo = todos?.[id];
    if (!todo) throw new Error("id is invalid");

    return todo;
  };

  public write = async (args: { title: string }): Promise<Todo> => {
    await sleep(300);

    const todos = this.storage.getValue() ?? {};

    const todo = {
      ...args,
      id: `id-${Object.keys(todos).length}`,
    };
    todos[todo.id] = todo;

    this.storage.setValue(todos);

    return todo;
  };
}
