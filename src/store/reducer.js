const initialState = {
  counter: 2
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

export default reducer;
