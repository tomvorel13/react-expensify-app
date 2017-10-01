import React from "react";
import ExpenseList from "./expense-list";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./expenses-summary";
import LoginPage from "./login-page";

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
