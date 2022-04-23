import { AnyAction } from "redux";
import { PurshaceDTO } from "../../models/PurshaceDTO";

const INITIAL_STATE = {
    auth: {
        listName: '',
        itemName: '',
        description: '',
        value: '',
        file: '',
      },
}

const purshaceReducer = (state: PurshaceDTO = INITIAL_STATE, action: AnyAction) => {
    if (action.type === "SET_REQUEST") {
      return {
        ...state,
        listName: action.listName,
        itemName: action.itemName,
        description: action.description,
        value: action.value,
        file: action.file,
      };
    }
  
    return state;
  };
  
  export default purshaceReducer;