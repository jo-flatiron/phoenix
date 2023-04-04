import { v4 as uuidv4 } from "uuid";

const formInitStat = {
  // id: uuidv4(),
  emailAddress: "",
  password: "",
};

const borrowerProfileReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_BORROWER_PROFILE_STATE":
      return action.payload;
    case "UPDATE_BORROWER_PROFILE_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;

    case "CLEAR_BORROWER_PROFILE_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default borrowerProfileReducer;
