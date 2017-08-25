// Redux new Object
return Object.assign({}, myObj, {
    myProperty: newValue
});

return {
    ...myObj,
    myProperty: newValue
};

// Combine reducers
combineReducers({
    firstReducer: myFirstReducer,
    secondReducer: mySecondReducer
});
