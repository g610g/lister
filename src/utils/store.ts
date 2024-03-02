import { create } from "zustand";
import { Todo } from "./interface";

interface ListState {
  list: Array<Todo>;
  setList: (new_list: Array<Todo>) => void;
}
export const useTodoListStore = create<ListState>()((set) => ({
  list: [],
  setList: (new_list: Array<Todo>) => set((state: any) => ({ list: new_list })),
}));
