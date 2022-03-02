import {
  LAY_DS_CHUYEN_BAY,
  LAY_DS_CHUYEN_BAY_SUCCESS,
  LAY_DS_CHUYEN_BAY_FAIL,
  SELECTED_FILTERS,
  CHUYEN_BAY_DI_DA_CHON,
  CHUYEN_BAY_VE_DA_CHON,
  HANH_KHACH_NGUOI_LON,
  HANH_KHACH_TRE_EM,
  HANH_KHACH_EM_BE,
  THONG_TIN_HANH_KHACH,
  SELECT_SEAT,
  LAY_DS_GHE_CHUYEN_DI_VJ,
  LAY_DS_GHE_CHUYEN_DI_VJ_SUCCESS,
  LAY_DS_GHE_CHUYEN_VE_VJ,
  LAY_DS_GHE_CHUYEN_VE_VJ_SUCCESS,
  DAT_VE_VJ,
  DAT_VE_VJ_SUCCESS,
  TINH_PHI_VE,
  TINH_PHI_VE_SUCCESS,
  LAY_DS_GHE_CHUYEN_DI_BB,
  LAY_DS_GHE_CHUYEN_DI_BB_SUCCESS,
  XAC_NHAN_GIA_VE_BB,
  XAC_NHAN_GIA_VE_BB_SUCCESS,
  DAT_VE_BB,
  DAT_VE_BB_SUCCESS,
  THEM_VE_VAO_DAT_CHO,
  THEM_VE_VAO_DAT_CHO_SUCCESS,
  BO_QUA_DAT_CHO,
  BO_QUA_DAT_CHO_SUCCESS,
  THEM_HANH_KHACH_VAO_VE,
  THEM_HANH_KHACH_VAO_VE_SUCCESS,
  DAT_VE_VN,
  DAT_VE_VN_SUCCESS,
  XUAT_VE_VJ,
  XUAT_VE_VJ_SUCCESS,
  TINH_PHI_VE_CHON_GHE,
  TINH_PHI_VE_CHON_GHE_SUCCESS,
  SAVE_NAME_SEAT_CHOOSE_MOT_CHIEU,
  SAVE_ARR_SEAT_CHOOSE_MOT_CHIEU,
  SAVE_AFTER_ARR_SEAT_CHOOSE_MOT_CHIEU,
  SAVE_NAME_SEAT_CHOOSE_HAI_CHIEU,
  SAVE_ARR_SEAT_CHOOSE_HAI_CHIEU,
  SAVE_AFTER_ARR_SEAT_CHOOSE_HAI_CHIEU,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_DI,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_DI_SUCCESS,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_VE,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_VE_SUCCESS,
  SAVE_DATA_PHU_TRO_CHUYEN_DI_VJ,
  SAVE_DATA_PHU_TRO_CHUYEN_VE_VJ,
  SAVE_DATA_PHU_TRO_THUC_AN_VJ_DI,
  SAVE_DATA_PHU_TRO_THUC_AN_VJ_VE,
  GET_DS_BAO_HIEM_VJ_CHUYEN_DI,
  GET_DS_BAO_HIEM_VJ_CHUYEN_DI_SUCCESS,
  GET_DS_BAO_HIEM_VJ_CHUYEN_VE,
  GET_DS_BAO_HIEM_VJ_CHUYEN_VE_SUCCESS,
  SAVE_NAME_BAO_HIEM_MOT_CHIEU,
  SAVE_NAME_BAO_HIEM_HAI_CHIEU,
  SAVE_ARR_BAO_HIEM_MOT_CHIEU,
  SAVE_ARR_BAO_HIEM_HAI_CHIEU,
  LAY_DS_PHU_TRO_CHUYEN_DI_BB,
  LAY_DS_PHU_TRO_CHUYEN_DI_BB_SUCCESS,
  LAY_DS_PHU_TRO_CHUYEN_VE_BB,
  LAY_DS_PHU_TRO_CHUYEN_VE_BB_SUCCESS,
  LAY_DS_HANH_LY_CHUYEN_DI_BB,
  LAY_DS_HANH_LY_CHUYEN_DI_BB_SUCCESS,
  LAY_DS_HANH_LY_CHUYEN_VE_BB,
  LAY_DS_HANH_LY_CHUYEN_VE_BB_SUCCESS,
  SAVE_DATA_HANH_LY_CHUYEN_DI,
  SAVE_DATA_HANH_LY_CHUYEN_VE
} from "./actionTypes"

//lấy danh sách chuyến bay
export const layDSChuyenBay = (params) => ({
  type: LAY_DS_CHUYEN_BAY,
  payload: params,
})

export const layDSChuyenBaySuccess = (response, id) => ({
  type: LAY_DS_CHUYEN_BAY_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const layDSChuyenBayFail = thongBaoThatBai => ({
  type: LAY_DS_CHUYEN_BAY_FAIL,
  payload: thongBaoThatBai,
})

//lọc ghế
export const selectedFilters = (array) => ({
  type: SELECTED_FILTERS,
  payload: array,
})

// chọn chuyến bay đi
export const chuyenBayDiDaChon = (chuyenBayDi) => ({
  type: CHUYEN_BAY_DI_DA_CHON,
  payload: chuyenBayDi,
})

//chọn chuyến bay về
export const chuyenBayVeDaChon = (chuyenBayVe) => ({
  type: CHUYEN_BAY_VE_DA_CHON,
  payload: chuyenBayVe,
})

//thông tin khách hàng người lớn
export const hanhKhachNguoiLon = (array) => ({
  type: HANH_KHACH_NGUOI_LON,
  payload: array,
})

//thông tin khách hàng trẻ em
export const hanhKhachTreEm = (array) => ({
  type: HANH_KHACH_TRE_EM,
  payload: array,
})

//Thông tin khách hàng em bé
export const hanhKhachEmBe = (array) => ({
  type: HANH_KHACH_EM_BE,
  payload: array,
})

//thông tin tất cả hành khách
export const setThongTinHanhKhach = (array) => ({
  type: THONG_TIN_HANH_KHACH,
  payload: array,
})

//lấy ds ghế chuyến đi
//Vj
export const layDSGheChuyenDiVj = (params) => ({
  type: LAY_DS_GHE_CHUYEN_DI_VJ,
  payload: params,
})

export const layDSGheChuyenDiVjSuccess = (response, id) => ({
  type: LAY_DS_GHE_CHUYEN_DI_VJ_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

//Bb
export const layDSGheChuyenDiBb = (params) => ({
  type: LAY_DS_GHE_CHUYEN_DI_BB,
  payload: params,
})

export const layDSGheChuyenDiBbSuccess = (response, id) => ({
  type: LAY_DS_GHE_CHUYEN_DI_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

//lấy ds ghế chuyến về
export const layDSGheChuyenVeVj = (params) => ({
  type: LAY_DS_GHE_CHUYEN_VE_VJ,
  payload: params,
})

export const layDSGheChuyenVeVjSuccess = (response, id) => ({
  type: LAY_DS_GHE_CHUYEN_VE_VJ_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

//ghế đã chọn
export const seatChoose = (array) => ({
  type: SELECT_SEAT,
  payload: array,
})
//lưu tên ghế đã chọn 
export const saveNameSeatChooseMotChieu = (array) => ({
  type: SAVE_NAME_SEAT_CHOOSE_MOT_CHIEU,
  payload: array,
})
export const saveNameSeatChooseHaiChieu = (array) => ({
  type: SAVE_NAME_SEAT_CHOOSE_HAI_CHIEU,
  payload: array,
})
//lưu mảng ghế đã chọn
export const saveArrSeatChooseMotChieu = (array) => ({
  type: SAVE_ARR_SEAT_CHOOSE_MOT_CHIEU,
  payload: array,
})
export const saveArrSeatChooseHaiChieu = (array) => ({
  type: SAVE_ARR_SEAT_CHOOSE_HAI_CHIEU,
  payload: array,
})
//lưu tên bảo hiểm
export const saveNameBaoHiemMotChieu = (array) => ({
  type: SAVE_NAME_BAO_HIEM_MOT_CHIEU,
  payload: array,
})
export const saveNameBaoHiemHaiChieu = (array) => ({
  type: SAVE_NAME_BAO_HIEM_HAI_CHIEU,
  payload: array,
})
//lưu mảng bảo hiểm
export const saveArrBaoHiemMotChieu = (array) => ({
  type: SAVE_ARR_BAO_HIEM_MOT_CHIEU,
  payload: array,
})
export const saveArrBaoHiemHaiChieu = (array) => ({
  type: SAVE_ARR_BAO_HIEM_HAI_CHIEU,
  payload: array,
})

//lưu mảng ghế đã chọn sau khi chọn ghế
export const saveAfterArrSeatChooseMotChieu = (array) => ({
  type: SAVE_AFTER_ARR_SEAT_CHOOSE_MOT_CHIEU,
  payload: array,
})
export const saveAfterArrSeatChooseHaiChieu = (array) => ({
  type: SAVE_AFTER_ARR_SEAT_CHOOSE_HAI_CHIEU,
  payload: array,
})

// đặt vé
//vj
export const guiThongTinDatVeVj = (paramsDatVe) => ({
  type: DAT_VE_VJ,
  payload: paramsDatVe,
})

export const DatVeVjSuccess = (response, id) => ({
  type: DAT_VE_VJ_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.status, message: response.message, id: id },
})

//bb
export const guiThongTinDatVeBb = (paramsDatVe) => ({
  type: DAT_VE_BB,
  payload: paramsDatVe,
})

export const DatVeBbSuccess = (response, id) => ({
  type: DAT_VE_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.status, message: response.message, id: id },
})
//vn
export const guiThongTinDatVeVn = (paramsDatVe) => ({
  type: DAT_VE_VN,
  payload: paramsDatVe,
})

export const DatVeVnSuccess = (response, id) => ({
  type: DAT_VE_VN_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.status, message: response.message, id: id },
})

//tính phí vé
export const tinhPhiVe = (params) => ({
  type: TINH_PHI_VE,
  payload: params,
})

export const tinhPhiVeSuccess = (response, id) => ({
  type: TINH_PHI_VE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

//tính phí vé khi chọn ghế
export const tinhPhiVeChonGhe = (params) => ({
  type: TINH_PHI_VE_CHON_GHE,
  payload: params,
})

export const tinhPhiVeChonGheSuccess = (response, id) => ({
  type: TINH_PHI_VE_CHON_GHE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

//xác nhận giá vé BB
export const xacNhanGiaVeBB = (params) => ({
  type: XAC_NHAN_GIA_VE_BB,
  payload: params,
})

export const xacNhanGiaVeBBSuccess = (response, id) => ({
  type: XAC_NHAN_GIA_VE_BB_SUCCESS,
  payload: { data: response ? response : [], id: id },
})

//dịch vụ đặt vé vietnam
export const themVeVaoDatCho = (params) => ({
  type: THEM_VE_VAO_DAT_CHO,
  payload: params,
})
export const themVeVaoDatChoSuccess = (response, id) => ({
  type: THEM_VE_VAO_DAT_CHO_SUCCESS,
  payload: { code: response.code, message: response.message, id: id },
})

//bỏ qua đặt chỗ
export const boQuaDatCho = (params) => ({
  type: BO_QUA_DAT_CHO,
  payload: params,
})
export const boQuaDatChoSuccess = (response, id) => ({
  type: BO_QUA_DAT_CHO_SUCCESS,
  payload: { code: response.code, message: response.message, id: id },
})

// thêm hành khách vào đặt chỗ
export const themHanhKhachVaoDatCho = (params) => ({
  type: THEM_HANH_KHACH_VAO_VE,
  payload: params,
})
export const themHanhKhachVaoDatChoSuccess = (response, id) => ({
  type: THEM_HANH_KHACH_VAO_VE_SUCCESS,
  payload: { code: response.code, message: response.message, id: id },
})

// thêm hành khách vào đặt chỗ
export const xuatVeVjThanhToan = (params) => ({
  type: XUAT_VE_VJ,
  payload: params,
})
export const xuatVeVjThanhToanSuccess = (response, id) => ({
  type: XUAT_VE_VJ_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.status, message: response.message, id: id },
})

//lấy danh sách dịch vụ Vj chuyến đi
export const layDsPhuTroChuyenDi = (params) => ({
  type: LAY_DANH_SACH_PHU_TRO_CHUYEN_DI,
  payload: params,
})
export const layDsPhuTroChuyenDiSuccess = (response, id) => ({
  type: LAY_DANH_SACH_PHU_TRO_CHUYEN_DI_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.status, message: response.message, id: id },
})

//lấy danh sách dịch vụ Vj chuyến về
export const layDsPhuTroChuyenVe = (params) => ({
  type: LAY_DANH_SACH_PHU_TRO_CHUYEN_VE,
  payload: params,
})
export const layDsPhuTroChuyenVeSuccess = (response, id) => ({
  type: LAY_DANH_SACH_PHU_TRO_CHUYEN_VE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.status, message: response.message, id: id },
})

//lưu danh sách phụ trợ chuyến đi vj
export const saveDataPhuTroChuyenDiVj = (params) => ({
  type: SAVE_DATA_PHU_TRO_CHUYEN_DI_VJ,
  payload: params,
})
export const saveDataPhuTroChuyenVeVj = (params) => ({
  type: SAVE_DATA_PHU_TRO_CHUYEN_VE_VJ,
  payload: params,
})

export const saveDataHanhLyChuyenDi = (params) => ({
  type: SAVE_DATA_HANH_LY_CHUYEN_DI,
  payload: params,
})
export const saveDataHanhLyChuyenVe = (params) => ({
  type: SAVE_DATA_HANH_LY_CHUYEN_VE,
  payload: params,
})

//lưu thức ăn chuyến đi
export const saveDataPhuTroThucAnChuyenDiVj = (params) => ({
  type: SAVE_DATA_PHU_TRO_THUC_AN_VJ_DI,
  payload: params,
})

//lưu thức ăn chuyến về
export const saveDataPhuTroThucAnChuyenVeVj = (params) => ({
  type: SAVE_DATA_PHU_TRO_THUC_AN_VJ_VE,
  payload: params,
})

//lấy ds bảo hiểm
export const getDsBaoHiemVjChuyenDi = (params) => ({
  type: GET_DS_BAO_HIEM_VJ_CHUYEN_DI,
  payload: params,
})

export const getDsBaoHiemVjChuyenDiSuccess = (response, id) => ({
  type: GET_DS_BAO_HIEM_VJ_CHUYEN_DI_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const getDsBaoHiemVjChuyenVe = (params) => ({
  type: GET_DS_BAO_HIEM_VJ_CHUYEN_VE,
  payload: params,
})

export const getDsBaoHiemVjChuyenVeSuccess = (response, id) => ({
  type: GET_DS_BAO_HIEM_VJ_CHUYEN_VE_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const getDsPhuTroBbChuyenDi = (params) => ({
  type: LAY_DS_PHU_TRO_CHUYEN_DI_BB,
  payload: params,
})

export const getDsPhuTroBbChuyenDiSuccess = (response, id) => ({
  type: LAY_DS_PHU_TRO_CHUYEN_DI_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const getDsHanhLyBbChuyenDi = (params) => ({
  type: LAY_DS_HANH_LY_CHUYEN_DI_BB,
  payload: params,
})

export const getDsHanhLyBbChuyenDiSuccess = (response, id) => ({
  type: LAY_DS_HANH_LY_CHUYEN_DI_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const getDsPhuTroBbChuyenVe = (params) => ({
  type: LAY_DS_PHU_TRO_CHUYEN_VE_BB,
  payload: params,
})

export const getDsPhuTroBbChuyenVeSuccess = (response, id) => ({
  type: LAY_DS_PHU_TRO_CHUYEN_VE_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})

export const getDsHanhLyBbChuyenVe = (params) => ({
  type: LAY_DS_HANH_LY_CHUYEN_VE_BB,
  payload: params,
})

export const getDsHanhLyBbChuyenVeSuccess = (response, id) => ({
  type: LAY_DS_HANH_LY_CHUYEN_VE_BB_SUCCESS,
  payload: { data: response.data ? response.data : [], code: response.code, message: response.message, id: id },
})