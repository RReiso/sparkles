const cartReducer = (state, action) => {
  switch (action.type) {
    case "updateCategory":
      return { ...state, currentCategory: action.payload.category };
    default:
      return state;
  }
};

export { cartReducer };
