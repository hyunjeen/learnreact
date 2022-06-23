import ExpenseItem from "./ExpenseItem";
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
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    </div>
   );
};

export default ExpenseList;