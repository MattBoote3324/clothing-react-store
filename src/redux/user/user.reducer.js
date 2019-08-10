const INITIAL_STATE = {
  cuurentUser: null
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  //If currentState is undefined then it will use INITIAL STATE
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...currentState,
        currentUser: action.payload
      };

    default:
      return currentState; //we dont want to render
  }
};

export default userReducer;
