import { useState } from "react";
import Card from "../Card/Card";
import './list.css'

function List({ listTransactions, setListTransactions }) {
	// const [filterTransactions, setFilterTransactions] = useState([])
	
	// function filterCashIn () {
	// 	const cashIn = listTransactions.filter((transaction) => {
	// 		console.log(transaction);
	// 		if (transaction.type === "Entrada") {
	// 			return transaction;
	// 		}
	// 	});
	// 	setFilterTransactions([...filterTransactions, cashIn]);
	// }

	// function filterCashOut () {
	// 	const cashOut = listTransactions.filter((transaction) => {
	// 		if (transaction.type === "saida") {
	// 			return transaction;
	// 		}
	// 	});
	// 	setFilterTransactions([...filterTransactions, cashOut]);
	// }
	// console.log(filterTransactions)
	return (
		<aside>
			<div className="aside_header">
				<h2 className="aside_title">Resumo Financeiro</h2>
				{/* <div className="aside_filterContainer">
					<button className="allFilter">Todos</button>
					<button onClick={filterCashIn} className="cashInFilter">
						Entrada
					</button>
					<button onClick={filterCashOut} className="cashOutFilter">
						Saída
					</button>
				</div> */}
			</div>
			<div className="listContainer">
				{listTransactions.map(({ description, value, type }, index) => {
					return (
						<Card
							key={index}
							description={description}
							value={value}
							type={type}
						/>
					);
				})}
			</div>
		</aside>
	);
}

export default List;
