import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
	<div className="hero min-h-screen bg-[#191919]">
	<div className="hero-content text-center">
	  <div className="max-w-md">
		<h1 className="text-xl font-bold">Hello there 👋🏻</h1>
		<h1 className="text-3xl font-semibold text-center text-gray-300">
		  <span className="text-blue-500 text-5xl font-bold"> Slidethru</span>
		</h1>
		<p className="py-6">
		  Join the conversation, meet new people, and make connections in one
		  shared room.
		</p>
		<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
			<div>
			  <input
				type="text"
				placeholder="Enter username"
				className="w-full input input-bordered h-10"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			  />
			</div>
  
			<div>
			  <input
				type="password"
				placeholder="Enter Password"
				className="w-full input input-bordered h-10"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			  />
			</div>
			<Link
			  to="/signup"
			  className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
			>
			  {"Don't"} have an account?
			</Link>
  
			<div>
			  <button className="btn btn-block btn-sm mt-2 bg-cyan-900" disabled={loading}>
				{loading ? (
				  <span className="loading loading-spinner "></span>
				) : (
				  "Login"
				)}
			  </button>
			</div>
		  </form>
	  </div>
	</div>
  </div>
  );
};
export default Login;


