import { useState } from "react";
import Card from "../Card/Card";
import "./list.css";

function List({ listTransactions, deleteTransaction }) {
	const [filterTransactions, setFilterTransactions] = useState([]);

	function filterCashIn() {
		const cashIn = listTransactions.filter((transaction) => {
			console.log(transaction);
			if (transaction.type === "entrada") {
				return transaction;
			}
		});
		setFilterTransactions(cashIn);
	}

	function filterCashOut() {
		const cashOut = listTransactions.filter((transaction) => {
			if (transaction.type === "saida") {
				return transaction;
			}
		});
		setFilterTransactions(cashOut);
	}

	function filterAll() {
		setFilterTransactions(listTransactions);
	}
	return (
		<aside>
			<div className="aside_header">
				<h2 className="aside_title">Resumo Financeiro</h2>
				<div className="aside_filterContainer">
					<button onClick={filterAll} className="allFilter">
						Todos
					</button>
					<button onClick={filterCashIn} className="cashInFilter">
						Entrada
					</button>
					<button onClick={filterCashOut} className="cashOutFilter">
						Saída
					</button>
				</div>
			</div>

			<div className="listContainer">
				{filterTransactions.length === 0
					? listTransactions.map(
							({ description, value, type }, index) => {
								return (
									<Card
										key={index}
										description={description}
										value={value}
										type={type}
										deleteTransaction={deleteTransaction}
									/>
								);
							}
					  )
					: filterTransactions.map(
							({ description, value, type }, index) => {
								return (
									<Card
										key={index}
										description={description}
										value={value}
										type={type}
										deleteTransaction={deleteTransaction}
									/>
								);
							}
					  )}
			</div>
		</aside>
	);
}

export default List;
