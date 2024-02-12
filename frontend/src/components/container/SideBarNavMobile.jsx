import React from "react";
import useGetConversations from "../../hooks/useGetConversations";
import SideBarConversation from "./SideBarConversation";
import LogoutButton from "../sidebar/LogoutButton";
import SideBarConversationMobile from "./SideBarConversationMobile";

export const SideBarNavMobile = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations.length);
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          {conversations.map((conversation, idx) => (
            <SideBarConversationMobile
              key={conversation._id}
              conversation={conversation}
              // emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};
