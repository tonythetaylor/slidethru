import React, { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { MdMenuOpen } from "react-icons/md";
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* <button
        className={`${
          open ? "rotate-180" : "rotate-0"
        }  p-1 absolute cursor-pointer top-2 w-7 z-50
			rounded-btn items-center text-center left-[10px] bg-[#191919] shadow-lg shadow-zinc-400/5`}
        onClick={() => setOpen(!open)}
      > */}
        {/* {open ? <MdMenuOpen /> : ">>"} */}
		<MdMenuOpen size={30}  className={`${
          open ? "rotate-180" : "rotate-0"
        }  p-1 absolute cursor-pointer top-2 z-50
			rounded-btn items-center text-center left-[10px] bg-[#191919] shadow-lg shadow-[#191919]-400/15`}
        onClick={() => setOpen(!open)}/>
      {/* </button> */}

      <div
        className={`${
          open ? "w-80" : "hidden"
        } border-r-2 border-r-zinc-700 border-t-2 border-t-zinc-700 p-4 flex flex-col`}
      >
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <div className="fixed bottom-20 left-28">
          {/* <span> */}
            <LogoutButton />
			{/* {"Logout"} */}
          {/* </span> */}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
