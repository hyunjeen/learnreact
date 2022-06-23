import "./ExpenseItem.css";
function ExpenseItem({title, amount, date}) {
  const month = date.toLocaleString('ko-KR', { month: 'long' })
  const day = date.getDay()
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
