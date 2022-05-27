import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import TotalMoney from "../../components/TotalMoney/TotalMoney";
import "./home.css";

function Home({
	listTransactions,
	setListTransactions,
	isLoggedIn,
	setIsLoggedIn,
}) {
	function handleLoggin(){
		setIsLoggedIn(false)
	}
	return (
		<div>
			<header className="header">
				<div className="logoContainer">
					<h1 className="title">
						<span className="titleNu">Nu</span> Kenzie
					</h1>
				</div>
				<button onClick={handleLoggin} className="initBtn">Inicio</button>
			</header>
			<main className="main">
				<section className="main_section">
					<Form
						listTrasactions={listTransactions}
						setListTransactions={setListTransactions}
					/>
					<TotalMoney listTransactions={listTransactions} />
				</section>
				<List listTransactions={listTransactions} />
			</main>
		</div>
	);
}

export default Home;
