import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const SideBarConversationMobile = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const profilePic = "";
  return (
    <>
      <div
        className={`flex flex-row items-center  hover:bg-gray-700  w-full p-2 cursor-pointer
				${isSelected ? "bg-gray-700" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
            <img
              src={!profilePic ? "/profile.png" : profilePic}
              alt="user avatar"
            />
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default SideBarConversationMobile;
