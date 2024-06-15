import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
      <nav className=" px-10 py-5 flex items-center justify-between ">
        <div className="flex items-center gap-3" >
          <MdOutlineMapsHomeWork size={30} />
          <h1 className="text-xl font-bold">Allstate</h1>
        </div>
        <div className="flex text-md text-slate-700 items-center bg-white px-8 py-3 rounded-3xl gap-8" >
            <p>About us</p>
            <p>Projects</p>
            <p>Agents</p>
            <p>Services</p>
            <p>Listings</p>
            <CiSearch  />
        </div>

        <div></div>
      </nav>
    </>
  );
};

export default NavBar;
