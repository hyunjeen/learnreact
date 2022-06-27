import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"
function ExpenseList() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },    
  ];
  return ( 
    <Card className="expense-list">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    </Card>
   );
};

export default ExpenseList;