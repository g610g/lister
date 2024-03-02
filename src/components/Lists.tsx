// import { createContext, useState } from "react";
import SearchBar from "./SearchBar";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { db } from "@/utils/supabase";
import { useEffect } from "react";
import { useTodoListStore } from "@/utils/store";
export default function Lists() {
  const setList = useTodoListStore((state) => state.setList);
  useEffect(() => {
    fetchTodo();
  }, []);
  const fetchTodo = async () => {
    const { data, error } = await db.todos().select("*");
    data ? setList(data) : console.log(error);
  };
  return (
    <div className="flex-grow ml-[10rem] p-4 overflow-auto flex flex-col h-full">
      <h1 className="text-[3rem] font-bold text-white font-micro">
        Things To Do:
      </h1>
      <div className="flex space-x-3 items-center">
        <SearchBar />
        <NewTask />
      </div>
      <TaskList />
    </div>
  );
}
