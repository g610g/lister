import ListCheck from "../assets/list-checks.svg?react";
import Done from "../assets/check-square.svg?react";
import Delete from "../assets/delete.svg?react";
import Close from "../assets/close.svg?react";
import SideBarItem from "./SideBarItem";
export default function SideNav() {
  const side_bar_items = [
    {
      name: "Tasks",
      icon: <ListCheck />,
    },
    {
      name: "Done",
      icon: <Done />,
    },
    {
      name: "Deleted",
      icon: <Delete />,
    },
  ];
  return (
    <div className="py-4 px-6 max-w-52 bg-[#926c4d] rounded-[.5rem] h-full overflow-hidden">
      <div className="flex justify-between items-center border-b-2 mb-2">
        <p className="font font-bold text-white font-micro text-[2rem]">
          ToDo List
        </p>
        <button className="p-1 text-white bg-gray-500 rounded-[.5rem]">
          <Close />
        </button>
      </div>
      <div className="space-y-4">
        {side_bar_items.map((value, index) => {
          return <SideBarItem data={value} index={index} />;
        })}
      </div>
    </div>
  );
}
