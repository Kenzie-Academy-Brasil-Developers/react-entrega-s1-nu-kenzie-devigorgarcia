import './card.css'
import { FiTrash2 } from "react-icons/fi"

function Card({ description, value, type, deleteTransaction }) {
	
	if (value > 0) {
		return (
			<div className="cardContainer positive">
				<div className="card_content">
					<h3>{description}</h3>
					<span>R$ {value}</span>
					<button onClick={() => deleteTransaction(description)}>
						<FiTrash2 />
					</button>
				</div>
				<span className="cardContainer_span">{type}</span>
			</div>
		);
	} else {
		return (
			<div className="cardContainer negative">
				<div className="card_content">
					<h3>{description}</h3>
					<span>R$ {Math.abs(value)}</span>
					<button onClick={() => deleteTransaction(description)}>
						<FiTrash2 />
					</button>
				</div>
				<span className="cardContainer_span">{type}</span>
			</div>
		);
	}
}

export default Card;
