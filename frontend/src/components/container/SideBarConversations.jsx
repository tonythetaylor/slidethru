import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import SideBarConversation from "./SideBarConversation";

const SideBarConversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations.length);
  return (
    <>
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        {/* SUB SECTION: active count */}
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          {conversations.length}
        </span>
      </div>

      <div className="flex flex-col space-y-1 mt-4 -mx-2  h-48 overflow-y-auto">
        {conversations.map((conversation, idx) => (
          <SideBarConversation
            key={conversation._id}
            conversation={conversation}
            // emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}

        {loading ? (
          <span className="loading loading-spinner mx-auto"></span>
        ) : null}
      </div>
    </>
  );
};
export default SideBarConversations;
