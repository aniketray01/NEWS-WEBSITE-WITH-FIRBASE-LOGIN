import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import "./App.css";
import News from "./components/News/News";



function App() {
const [userName, setUserName] = useState("");

useEffect(() => {
auth.onAuthStateChanged((user) => {
if (user) {
setUserName(user.displayName);
} else setUserName("");
});
}, []);

return (
<div className="App">
<Router>
<Routes>
<Route path="/" element={<Signup />} />
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/news" element={<News />} />
</Routes>
</Router>
</div>
);
}

export default App;