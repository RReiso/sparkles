const shopReducer = (state, action) => {
  switch (action.type) {
    case "updateCategory":
      return { ...state, currentCategory: action.payload.category };
    case "addToBag":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + Number(action.payload.price),
      };
    case "removeFromBag":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
        totalPrice: state.totalPrice - Number(action.payload.price),
      };
    default:
      return state;
  }
};

export { shopReducer };
