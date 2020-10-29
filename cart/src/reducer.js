import { act } from "react-dom/test-utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR-ALL":
      return { ...state, cart: [] };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "TOGGLE":
      let tempCart = state.cart
        .map((cartItem) => {
          if (action.payload.id === cartItem.id) {
            if (action.payload.type === "inc") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((item) => item.amount > 0);
      return { ...state, cart: tempCart };

    case "TOTAL":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = amount * price;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    default:
      return state;
  }
};
export default reducer;
