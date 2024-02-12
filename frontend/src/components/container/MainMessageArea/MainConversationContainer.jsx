import React from "react";
import MessageStage from "./MessageStage";
import SideBarContainer from "../SideBarContainer";
// import NavBar from "../../navbar/Navbar";
// import MessageContainer from "../../messages/MessageContainer";

const MainConversationContainer = () => {
  return (
    <div className="flex h-screen  w-full antialiased text-gray-800">
    <div className="flex flex-row h-full w-full overflow-x-hidden">
        <SideBarContainer />
        <MessageStage />
        {/* <MessageContainer /> */}
      </div>
    </div>
  );
};

export default MainConversationContainer;
