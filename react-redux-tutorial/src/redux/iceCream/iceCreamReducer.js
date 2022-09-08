import { BUY_ICECREAM } from "./iceCreamTypes";

const inititalState = {
  numberOfIceCream: 20,
};

const iceCreamReducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
