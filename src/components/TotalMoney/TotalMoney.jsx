import './totalMoney.css';

function TotalMoney({ listTransactions }) {
  const allMoney = listTransactions.reduce((acc, { value }) => acc + +value, 0);
  return (
    <section className='section_total'>
      <div className='totalValue'>
        <h3>Valor Total:</h3>
        <h3 className='value'>R$ {allMoney}</h3>
      </div>
      <span className='section_span'>O valor referente ao saldo</span>
    </section>
  );
}

export default TotalMoney;
