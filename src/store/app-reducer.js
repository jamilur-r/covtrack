const initState = {
  isAuth: false,
  user: null,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
