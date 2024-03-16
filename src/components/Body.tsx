import SideNav from "./SideNav";
import Lists from "./Lists";
export default function Body() {
  return (
    <div className="mt-10 flex  mx-[2rem] max-h-full h-full flex-1">
      <SideNav />
      <Lists />
    </div>
  );
}
