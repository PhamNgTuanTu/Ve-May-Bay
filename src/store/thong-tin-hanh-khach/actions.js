import TaskActionTypes from './actionTypes';

export const capNhatBaoGiaHanhKhach = (params) => ({
  type: TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH,
  payload: params,
})

export const capNhatBaoGiaHanhKhachSuccess = (response, id) => ({
  type: TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const capNhatBaoGiaHanhKhachFail = thongBaoThatBai => ({
  type: TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH_FAIL,
  payload: thongBaoThatBai,
})

export const chapNhanCapNhatHanhKhach = (params) => ({
  type: TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH,
  payload: params,
})

export const chapNhanCapNhatHanhKhachSuccess = (response, id) => ({
  type: TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const chapNhanCapNhatHanhKhachKhachFail = thongBaoThatBai => ({
  type: TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH_FAIL,
  payload: thongBaoThatBai,
})

export const capNhatPhiThayDoiThongTin = (params) => ({
  type: TaskActionTypes.CAP_NHAT_PHI_THAY_DOI,
  payload: params,
})

export const capNhatPhiThayDoiThongTinSuccess = (response, id) => ({
   type: TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_SUCCESS,
  payload: { data: response.data ? response.data : {}, code: response.code, message: response.message, id: id },
})

export const capNhatPhiThayDoiThongTinFail = (thongBaoThatBai) => ({
   type: TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_FAIL,
  payload: thongBaoThatBai,
})

export const layThongTinHanhKhachBb = (params) => ({
  type: TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB,
  payload: params,
})

export const layThongTinHanhKhachBbSuccess = (response, id) => ({
  type: TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const layThongTinHanhKhachBbFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB_FAIL,
  payload: thongBaoThatBai,
})

export const postThongTinHanhKhach = (params) => ({
  type: TaskActionTypes.POST_THONG_TIN_HANH_KHACH,
  payload: params,
})

export const postThongTinHanhKhachSuccess = (response, id) => ({
  type: TaskActionTypes.POST_THONG_TIN_HANH_KHACH_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const postThongTinHanhKhachFail = thongBaoThatBai => ({
  type: TaskActionTypes.POST_THONG_TIN_HANH_KHACH_FAIL,
  payload: thongBaoThatBai,
})

export const saveDataForm = (data) => ({
  type: TaskActionTypes.SAVE_DATA_FORM,
  payload: data,
})
