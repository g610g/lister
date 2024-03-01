import Search from '../assets/search.svg?react';

export default function SearchBar() {
  return (
    <div className="border-2 px-5 py-3 rounded-[.5rem] flex-1 font-micro flex space-x-3 border-[#ad9f8e]">
        <input type="text" id="search_bar" className="bg-transparent flex-1 border-none outline-none" placeholder="Search" />
        <Search className="text-[#ad9f8e]"/>
    </div>
  )
}
