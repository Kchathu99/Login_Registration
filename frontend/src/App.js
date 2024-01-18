import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/UserProfile";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/profile" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
	);
}

export default App;
