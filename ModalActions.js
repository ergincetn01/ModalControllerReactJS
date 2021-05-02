import * as actionTypes from "./ModalActionTypes";

export const openModal = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.OPEN_MODAL, payload });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: actionTypes.CLOSE_MODAL, payload: false });
};

//We fetch types from ModalActionTypes file and process them in this phase.

