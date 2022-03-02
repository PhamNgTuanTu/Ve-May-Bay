import TaskActionTypes from './actionTypes';

// action tỉnh
export const layDSTinh = (params) => ({
  type: TaskActionTypes.LAY_DS_TINH,
  payload: params,
})

export const layDSTinhSuccess = responseData => ({
  type: TaskActionTypes.LAY_DS_TINH_SUCCESS,
  payload: responseData,
})

export const layDSTinhFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_DS_TINH_FAIL,
  payload: thongBaoThatBai,
})

//action khu vực
export const layDSKhuVuc = (params) => ({
  type: TaskActionTypes.LAY_DS_KHU_VUC,
  payload: params,
})

export const layDSKhuVucSuccess = responseData => ({
  type: TaskActionTypes.LAY_DS_KHU_VUC_SUCCESS,
  payload: responseData,
})

export const layDSKhuVucFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_DS_KHU_VUC_FAIL,
  payload: thongBaoThatBai,
})

//action quốc gia
export const layDSQuocGia = (params) => ({
  type: TaskActionTypes.LAY_DS_QUOC_GIA,
  payload: params,
})

export const layDSQuocGiaSuccess = responseData => ({
  type: TaskActionTypes.LAY_DS_QUOC_GIA_SUCCESS,
  payload: responseData,
})

export const layDSQuocGiaFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_DS_QUOC_GIA_FAIL,
  payload: thongBaoThatBai,
})

//action sân bay
export const layDSSanBay = (params) => ({
  type: TaskActionTypes.LAY_DS_SAN_BAY,
  payload: params,
})

export const layDSSanBaySuccess = responseData => ({
  type: TaskActionTypes.LAY_DS_SAN_BAY_SUCCESS,
  payload: responseData,
})

export const layDSSanBayFail = thongBaoThatBai => ({
  type: TaskActionTypes.LAY_DS_SAN_BAY_FAIL,
  payload: thongBaoThatBai,
})