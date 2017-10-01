import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

//Components
import AddExpensePage from "../components/add-expense";
import EditExpensePage from "../components/edit-expense";
import ExpenseDashboardPage from "../components/expense-dashboard";
import NotFoundPage from "../components/404";
import HelpPage from "../components/help";
import LoginPage from "../components/login-page";
import PrivateRoute from "./private-route";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
