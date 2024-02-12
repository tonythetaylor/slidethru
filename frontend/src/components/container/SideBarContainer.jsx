import React, { useState } from "react";
// import SideBarConversations from "./SidebarConversations";
import SideBarBio from "./SideBarBio";
// import SideBarArchived from "./SideBarArchived";
// import NavBar from "../navbar/Navbar";
import { SideBarNav } from "./SideBarNav";
import LogoutButton from "../sidebar/LogoutButton";
import { SideBarNavMobile } from "./SideBarNavMobile";

const SideBarContainer = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open
          ? "w-80"
          : "transition-transform -translate-x-full sm:translate-x-0"
      } flex flex-col  bg-gray-800 p-5 pt-8 relative duration-300`}
    >
      <button
        className={`${open ? "-right-0" : "-right-3"} absolute cursor-pointer top-2 w-7 z-50
			border-2 rounded-btn bg-gray-800 text-center`}
        onClick={() => setOpen(!open)}
      >
        {open ? "<<" : ">>"}
      </button>

      {open ? (
        <aside
          id="default-sidebar"
          className={`${
            open
              ? " w-80"
              : "transition-transform -translate-x-full sm:translate-x-0"
          }flex flex-col relative left-0 z-40 duration-300 `}
          // className="flex flex-col fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className=" flex px-3 py-4 bg-gray-50 dark:bg-gray-800  top-0 relative justify-center">
            <SideBarBio />
          </div>
          <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 relative">
            <span className="font-bold">Active Conversations</span>
            <SideBarNav />
          </div>
          <div className="flex flex-col flex-1 fixed bottom-3 items-center bg-gray-800">
            <LogoutButton />
          </div>
        </aside>
      ) : (
        <aside className="flex flex-col items-center">
          <SideBarNavMobile />
        </aside>
      )}
    </div>
  );
};

export default SideBarContainer;
