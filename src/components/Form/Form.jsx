import { useState } from "react";
import "./form.css"

function Form({ listTrasactions, setListTransactions }) {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState(0);
	const [type, setType] = useState("Entrada");


	function handleTransaction(event) {

		event.preventDefault();

		if(type === "Entrada") {
			const transaction = {
				description,
				value,
				type
			};
			setListTransactions([...listTrasactions, transaction])
		} else {
			const transaction = {
				description,
				value: -value,
				type
			};
			setListTransactions([...listTrasactions, transaction])
		}
	}

	return (
		<form onSubmit={(event) => handleTransaction(event)}>
			<label htmlFor="">
				Descrição
				<input
					type="text"
					name="description"
					placeholder="Descrição"
					value={description}
					required
					onChange={(event) => setDescription(event.target.value)}
				/>
				<span>Ex: compra de Roupa</span>
			</label>
			<div className="inputContainer">
				<label htmlFor="">
					Valor
					<input className="inputValue"
						type="number"
						name="value"
						placeholder="1"
						value={value}
						required
						onChange={(event) => setValue(event.target.value)}
						/>
				</label>
				<label htmlFor="">
					Tipo de Valor
					<select
						name="type"
						id="selectType"
						onChange={(event) => setType(event.target.value)}
					>
						<option value="entrada">Entrada</option>
						<option value="saida">Saida</option>
					</select>
				</label>
			</div>
			<button className="submitBtn" type="submit">Inserir Valor</button>
		</form>
	);
}

export default Form;
