import * as actionTypes from "../Actions/ModalActionTypes";

const initialState = false;

const modalReducer =(state = initialState, { type, payload })=> {
  switch (type) {
    case actionTypes.OPEN_MODAL:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };
    case actionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
export default modalReducer;

//Modals' visibility is controlled with boolean values "true" & "false".
//So that, reducer's payload carries boolean values.
//We work with switch-case structure for dyanmically detecting the proper action type and behaving up to this.
//At external usages, we should specify payload as type-props pairs.
