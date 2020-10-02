import { ADDDATE, CLOSEPOP } from "../vars/datReducerV";

const InitialState = {
  isOpen: false,
  cred: {
    month: "",
    day: ""
  },
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case ADDDATE:
      return {
        isOpen: !state.isOpen,
        cred: {
          month: action.cred.month,
          day: action.cred.day,
        },
      };

      case CLOSEPOP :
      return {
        ...state, isOpen: false
      };

    default:
      return state;
  }
};
