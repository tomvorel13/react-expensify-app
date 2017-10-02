import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expense-list-item";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div className="container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-larger">Expense</div>
      <div className="show-for-larger">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
