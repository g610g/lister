import SideNav from "./SideNav";
import Lists from "./Lists";
  export default function Body() {
  return (
    <div className='mt-10 flex justify-between mx-[2rem] '>
      <SideNav/>
      <Lists/>      
    </div>
  )
}
