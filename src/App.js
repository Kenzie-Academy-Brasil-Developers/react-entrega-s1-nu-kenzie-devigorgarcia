import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";


function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log(listTransactions)
	function deleteTransaction(selectedTransaction) {
		const remainTransactions = listTransactions.filter(transaction => selectedTransaction !== transaction.description && transaction)
		setListTransactions(remainTransactions)
	}

	return (
		<div className="App">
			{isLoggedIn ? (
				<Home
					listTransactions={listTransactions}
					setListTransactions={setListTransactions}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					deleteTransaction={deleteTransaction}
				/>
			) : (
				<WelcomePage
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
			)}
		</div>
	);
}

export default App;
