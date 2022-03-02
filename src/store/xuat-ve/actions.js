import TaskActionTypes from './actionTypes';

export const layDSDatChoDaChon = (params) => ({
  type: TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON,
  payload: params,
})

export const layDSChoDaChonSuccess = (response, id) => ({
  type: TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const layDSChoDaChonFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON_FAIL,
  payload: thongBaoThatBai,
})

export const xuatVeDaChon = (params) => ({
  type: TaskActionTypes.POST_XUAT_VE,
  payload: params,
})

export const xuatVeDaChonSuccess = (response, id) => ({
  type: TaskActionTypes.POST_XUAT_VE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const xuatVeDaChonFail = thongBaoThatBai => ({
  type: TaskActionTypes.POST_XUAT_VE_FAIL,
  payload: thongBaoThatBai,
})

export const layThongTinGiaVe = (params) => ({
  type: TaskActionTypes.LAY_THONG_TIN_GIA_VE,
  payload: params,
})

export const layThongTinGiaVeSuccess = (response, id) => ({
  type: TaskActionTypes.LAY_THONG_TIN_GIA_VE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const layThongTinGiaVeFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_THONG_TIN_GIA_VE_FAIL,
  payload: thongBaoThatBai,
})

export const xuatVeBb = (params) => ({
  type: TaskActionTypes.POST_XUAT_VE_BB,
  payload: params,
})

export const xuatVeBbSuccess = (response, id) => ({
  type: TaskActionTypes.POST_XUAT_VE_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const layThongTinPhiVe = id => ({
  type: TaskActionTypes.LAY_THONG_TIN_PHI_VE,
  payload: {id: id},
})

export const layThongTinPhiVeSuccess = (response, id) => ({
  type: TaskActionTypes.LAY_THONG_TIN_PHI_VE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const layThongTinPhiVeFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_THONG_TIN_PHI_VE_FAIL,
  payload: thongBaoThatBai,
})