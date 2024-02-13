import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import NavBar from "./components/navbar/NavBar";
// import MainContainer from "./components/container/mainContainer";
// import MainSidebarContainer from "./components/container/SideBarContainer";
// import MainConversationContainer from "./components/container/MainMessageArea/MainConversationContainer";
// import SideBarBio from "./components/container/SideBarBio";
// import SideBarConversations from "./components/container/SidebarConversations";
// import SideBarContainer from "./components/container/SideBarContainer";
// import MessageStage from "./components/container/MainMessageArea/MessageStage";
// import MessageContainer from "./components/container/messages/MessageContainer";

function App() {
  const { authUser } = useAuthContext();
  return (
      <div className="flex flex-col justify-start min-h-screen h-screen bg-[#191919]">
		{ authUser && <NavBar/>}
        <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
        <Toaster />
      </div>
  );
}

export default App;
