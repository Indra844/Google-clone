export const initialState = {
  item: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
