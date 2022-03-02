import {
  TIM_CHUYEN_BAY,
  THONG_TIN_CHUYEN_BAY,
  RESET_STORE_TRANG_CHU
} from "./actionTypes"

export const timKiem = (params) => ({
  type: TIM_CHUYEN_BAY,
  payload: params,
})

export const thongtinChuyenBay = (thongtin) => ({
  type: THONG_TIN_CHUYEN_BAY,
  payload: thongtin,
})

export const resetStoreTrangChu = () => ({
  type: RESET_STORE_TRANG_CHU
})