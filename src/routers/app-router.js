import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

//Components
import AddExpensePage from "../components/add-expense";
import EditExpensePage from "../components/edit-expense";
import ExpenseDashboardPage from "../components/expense-dashboard";
import NotFoundPage from "../components/404";
import LoginPage from "../components/login-page";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
