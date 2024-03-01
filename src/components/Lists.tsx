import { createContext, useState } from "react";
import SearchBar from "./SearchBar";
import NewTask from "./NewTask";
export const levelContext = createContext<any>(1);
export default function Lists() {
  return (
    <div className="flex-grow ml-[10rem] p-4">
      <h1 className="text-[3rem] font-bold text-white font-micro">
        Things To Do:
      </h1>
      <div className="flex space-x-3 items-center">
        <SearchBar />
        <NewTask />
      </div>
      <div></div>
    </div>
  );
}
