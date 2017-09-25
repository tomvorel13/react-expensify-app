import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/expense-list";
import expenses from "../fixtures/expenses";

test("should render expense list with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expenselist with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
