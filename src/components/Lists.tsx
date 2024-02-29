import { createContext } from "react";
import Search from '../assets/search.svg?react';
export const levelContext = createContext<any>(1);
export default function Lists({children}:any) {
  return (
    <div className="flex-grow ml-[10rem] p-4">
      <h1 className="text-[3rem] font-bold text-white font-micro">Things To Do:</h1>
      <div className="flex space-x-3 items-center">
        {/* <label htmlFor="search_bar">Search </label> */}
        <div className="border-2 px-5 py-3 rounded-[.5rem] flex-1 font-micro flex space-x-3 border-[#ad9f8e]">
          <input type="text" id="search_bar" className="bg-transparent flex-1 border-none outline-none" placeholder="Search" />
          <Search className="text-[#ad9f8e]"/>
        </div>
      <div><button>New task</button></div>
      </div>
    </div>
  )
}
