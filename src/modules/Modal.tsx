const SHOW_MODAL = "modal/SHOW_MODAL";
const HIDE_MODAL = "modal/HIDE_MODAL";

export const showModal = (item: any) => ({ type: SHOW_MODAL, payload: item });
export const hideModal = () => ({ type: HIDE_MODAL });

const initialState = {
  show: false, // 모달 표시 여부
  element: null, // 모달 Component
};
/*
      Reducer
  */
export default function snackbar(state = initialState, action: any) {
  console.log(action);
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true };
    case HIDE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
}
