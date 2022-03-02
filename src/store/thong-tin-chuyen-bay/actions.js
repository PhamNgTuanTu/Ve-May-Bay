import TaskActionTypes from './actionTypes';

export const layDSChuyenBayMoi = (params) => ({
  type: TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI,
  payload: params,
})

export const layDSChuyenBayMoiSuccess = (response, id) => ({
  type: TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI_SUCCESS,
  payload: { data: response.data ? response.data : {}, code: response.code, message: response.message, id: id },
})

export const layDSChuyenBayMoiFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI_FAIL,
  payload: thongBaoThatBai,
})

export const capNhatBaoGiaHanhTrinh = (params) => ({
  type: TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH,
  payload: params,
})

export const capNhatBaoGiaHanhTrinhSuccess = (response, id) => ({
  type: TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const capNhatBaoGiaHanhTrinhFail = thongBaoThatBai => ({
  type: TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH_FAIL,
  payload: thongBaoThatBai,
})

export const capNhatThemChang = (params) => ({
  type: TaskActionTypes.CAP_NHAT_THEM_CHANG,
  payload: params,
})

export const capNhatThemChangSuccess = (response, id) => ({
  type: TaskActionTypes.CAP_NHAT_THEM_CHANG_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const capNhatThemChangFail = thongBaoThatBai => ({
  type: TaskActionTypes.CAP_NHAT_THEM_CHANG_FAIL,
  payload: thongBaoThatBai,
})

export const  capNhatPhiThayDoiChuyenBay = (params) => ({
  type: TaskActionTypes.CAP_NHAT_PHI_THAY_DOI,
  payload: params,
})

export const  capNhatPhiThayDoiChuyenBaySuccess = (response, id) => ({
   type: TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_SUCCESS,
  payload: { data: response.data ? response.data : {}, code: response.code, message: response.message, id: id },
})

export const  capNhatPhiThayDoiChuyenBayFail = (thongBaoThatBai) => ({
   type: TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_FAIL,
  payload: thongBaoThatBai,
})