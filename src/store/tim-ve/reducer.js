import {
  TIM_CHUYEN_BAY,
  THONG_TIN_CHUYEN_BAY,
  RESET_STORE_TRANG_CHU
} from "./actionTypes"

const INIT_STATE = {
  params: {},
  thongTin: {}
}

const TimVe = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TIM_CHUYEN_BAY:
      return {
        ...state,
        params: action.payload,
      }
    case THONG_TIN_CHUYEN_BAY:
      return {
        ...state,
        thongTin: action.payload,
      }
    case RESET_STORE_TRANG_CHU:
      return {
        ...state,
        params: {},
        thongTin: {}
      }
    default:
      return state
  }
}

export default TimVe
