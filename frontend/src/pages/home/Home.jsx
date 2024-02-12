import React, { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	const [open, setOpen] = useState(true);

	return (
		<div className='flex h-screen w-screen fixed  top-14  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
	
			{/* <div className={` ${
			open
			  ? "w-80"
			  : "w-0"
		  } duration-300`}>
				<button
        className={`${open ? "-right-0" : "-right-3"} absolute cursor-pointer top-2 w-7 z-50
			border-2 rounded-btn text-center`}
        onClick={() => setOpen(!open)}
      >
        {open ? "<<" : ">>"}
      </button> */}
			<Sidebar />
			{/* </div> */}
			<MessageContainer />
		</div>
	);
};
export default Home;
