import { AnyAction } from "redux";
import { PurchaseDTO } from "../../models/PurchaseDTO";

const INITIAL_STATE = {
    auth: {
        listName: '',
        itemName: '',
        description: '',
        value: '',
        file: '',
      },
}

const purchaseReducer = (state: PurchaseDTO = INITIAL_STATE, action: AnyAction) => {
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
  
  export default purchaseReducer;