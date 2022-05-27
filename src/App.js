import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";


function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    
	return (
		<div className="App">
			{isLoggedIn ? (
				<Home
					listTransactions={listTransactions}
					setListTransactions={setListTransactions}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
			) : (
				<WelcomePage isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
			)}
		</div>
	);
}

export default App;
