export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add-to-Cart":
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return { ...state, cart: [...state.cart] };
      break;
    case "Remove-from-Cart":
      const newCart = [...state.cart];
      const index = newCart.findIndex((cartItem) => cartItem.id === action.id);
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return { ...state, cart: newCart };
      break;
    case "Increase":
      state.cart[state.cart.findIndex((item) => item.id === action.id)]
        .quantity++;
      return { ...state, cart: [...state.cart] };
      break;
    case "Decrease":
      const cartDecrease = [...state.cart];
      const ind = cartDecrease.findIndex(
        (cartItem) => cartItem.id == action.id
      );
      console.log(ind);
      if (cartDecrease[ind].quantity == 1) {
        cartDecrease.splice(ind, 1);
      } else {
        cartDecrease[ind].quantity--;
      }
      return {
        ...state,
        cart: cartDecrease,
      };
      break;
    case "Clear":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export default reducer;
