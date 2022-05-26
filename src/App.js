import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";


function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [filterEntrada, setFilterEntrada] = useState(listTransactions);
	const [filterSaida, setFilterSaida] = useState(listTransactions);
  
	return (
		<div className="App">
			{isLoggedIn ? (
				<Home
					listTransactions={listTransactions}
					setListTransactions={setListTransactions}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					filterEntrada={filterEntrada}
					setFilterEntrada={setFilterEntrada}
					filterSaida={filterSaida}
					setFilterSaida={setFilterSaida}
				/>
			) : (
				<div>Olocomeu</div>
			)}
		</div>
	);
}

export default App;
