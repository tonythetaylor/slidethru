import React from "react";
import MessageInput from "../../messages/MessageInput";
import MessageContainer from "../../messages/MessageContainer";
import NavBar from "../../navbar/Navbar";
import Messages from "./MainMessages";
const MessageStage = () => {
  return (
    <>
    {/* <div className="flex flex-col absolute top-0 p-0  w-full">
    <NavBar />
    </div> */}
      <div className="flex flex-col flex-auto h-full p-0 top-7">
    

        <div className="flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">

            {/* SECTION: messages */}
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                
                <Messages />

              </div>
            </div>

            {/* SECTION: Input */}
            <div className="px-4">
                <MessageInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageStage;
