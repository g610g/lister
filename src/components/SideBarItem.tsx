import React from "react";
interface DataItem {
  name: string;
  icon: React.JSX.Element;
}
interface BarItemProps {
  data: DataItem;
  index: number;
}
export default function SideBarItem({ data, index }: BarItemProps) {
  return (
    <button
      className="flex items-center space-between w-full bg-[#ad9f8e] rounded-[.5rem] px-3 py-1 space-x-3 hover:bg-[#637f40]"
      key={index}
    >
      <div>{data.icon} </div>
      <p className="font-micro text-[1.5rem]">{data.name}</p>
    </button>
  );
}
