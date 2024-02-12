import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r-2 border-r-zinc-700 border-t-2 border-t-zinc-700 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<div className="fixed bottom-20">
			<span><LogoutButton /> Logout</span>

			</div>
		</div>
	);
};
export default Sidebar;
