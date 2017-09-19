import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
      default:
        return state;
    }
};

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 6000 }));
const expense2 = store.dispatch(addExpense({ description: "Coffee", amount: 50 }));

store.dispatch(removeExpense({ id: expense1.expense.id }));

const demoState = {
    expenses: [{
        id: 'odpasldp',
        description: 'July - Rent',
        note: 'I had to sell my kidney.',
        amount: 6000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};