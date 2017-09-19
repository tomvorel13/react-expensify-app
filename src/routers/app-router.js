import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

//Components
import AddExpensePage from "../components/add-expense";
import EditExpensePage from "../components/edit-expense";
import ExpenseDashboardPage from "../components/expense-dashboard";
import NotFoundPage from "../components/404";
import HelpPage from "../components/help";
import Header from "../components/header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
