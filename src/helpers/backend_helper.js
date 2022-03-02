import axios from "axios"
import { del, get, post, put, getWithParams } from "./api_helper"
import * as url from "./url_helper"

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user")
  if (user) return JSON.parse(user)
  return null
}

// Chức năng resquest post đăng nhập
const postDangNhap = data => post(url.POST_DANGNHAP, data)

// Chức năng resquest post send mail - quên mật khẩu
const postQuenMatKhau = data => post(url.POST_QUEN_MAT_KHAU, data)
const putMatKhauMoi = data => put(url.PUT_MAT_KHAU_MOI, data)

// Chức năng đặt vé
const getChuyenBay = data => getWithParams(url.GET_CHUYEN_BAY, { params: data })
const getChoNgoi = data => getWithParams(url.GET_CHO_NGOI, { params: data })

//phụ trợ
const getPhuTroVj = data => getWithParams(url.GET_PHU_TRO_VJ, { params: data })
const getPhuTroBb = data => post(url.GET_PHU_TRO_BB, data)
const getHanhLyBb = data => post(url.GET_HANH_LY_BB, data)

//đặt vé vj
const postDatVe = data => post(url.POST_DAT_VE, data)
//đặt vé bb
const postDatVeBB = data => post(url.POST_DAT_VE_BB, data)
//đặt vé vn
const postThemVeVaoDatChoVN = data => post(url.POST_THEM_VE_VAO_DAT_CHO_VN, data)
const delDatChoVN = data => del(url.DEL_BO_QUA_BOOKING)
const postThemhanhKhachVaoDatChoVN = data => post(url.POST_THEM_HANH_KHACH_VAO_VE, data)
const postDatVeVN = data => post(url.POST_DAT_VE_VN, data)

//tính phí trước đặt chỗ
const postTinhPhiDatCho = data => post(url.TINH_PHI_TRUOC_DAT_CHO_VJ, data)
const getTinhPhiDatCho = data => getWithParams(url.TINH_PHI_TRUOC_DAT_CHO + "/" + data.id)


//xác nhận giá vé bb
const xacNhanGiaVeBB = data => post(url.XAC_NHAN_GIA_VE, data)

//lấy ds chỗ ngồi vj
const layDsChoNgoiVj = data => getWithParams(url.GET_CHO_NGOI_VJ, { params: data })

//lấy ds chỗ ngồi bb
const layDsChoNgoiBb = data => post(url.GET_CHO_NGOI_BB, data)

//lấy ds bảo hiểm vj
const postBaoHiem = data => post(url.POST_BAO_HIEM_VJ, data)

//chức năng tìm kiếm đặt chỗ
const getDatCho = data => getWithParams(url.GET_DAT_CHO, { params: data })

//chức năng xuất vé 
const getDatChoTheoId = id => getWithParams(url.GET_DAT_CHO + "/" + id)
const postXuatVe = data => post(url.POST_XUAT_VE, data)
const postXuatVeBb = data => post(url.POST_XUAT_VE_BB, data)


//chức năng cập nhật hành khách
const getHanhKhach = data => put(data.urlCapNhatDatVe, data.passenger)
const getHanhKhachBb = data => post(url.GET_DATA_HANH_KHACH_BB, data)
const putPhiThayDoi = data => put(data.url, data.requestBody)

const getThongTinVe = data => getWithParams(url.GET_DATA_VE, { params: data })
const postThongTinHanhKhach = data => put(url.POST_DOI_THONG_TIN_HANH_KHACH_P1 + "/" + data.params.dat_cho_id + url.POST_DOI_THONG_TIN_HANH_KHACH_P2 + "/" + data.params.hanh_khach_id, data.body)


//lấy danh sách tỉnh, khu vực, quốc gia
const getTinh = data => getWithParams(url.GET_TINH, { params: data })
const getKhuVuc = () => getWithParams(url.GET_KHU_VUC)
const getQuocGia = () => getWithParams(url.GET_QUOC_GIA)

//lấy danh sách sân bay
const getSanBay = data => getWithParams(url.GET_SAN_BAY, { params: data })

//Lấy danh sách chuyến bay mới
const getChuyenBayMoi = data => getWithParams(url.GET_DS_CHUYEN_BAY_MOI_VIETJECT, { params: data })
const putBaoGiaHanhTrinh = data => put(data.url, data.requestBody)
const postThemChang = data => post(data.url, data.requestBody)

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}

export {
  getLoggedInUser,
  isUserAuthenticated,
  putMatKhauMoi,
  postDangNhap,
  postQuenMatKhau,
  getChuyenBay,
  getChoNgoi,
  getPhuTroVj,
  postDatVe,
  getDatCho,
  getDatChoTheoId,
  postXuatVe,
  getHanhKhach,
  getThongTinVe,
  postThongTinHanhKhach,
  postDatVeBB,
  layDsChoNgoiVj,
  layDsChoNgoiBb,
  postTinhPhiDatCho,
  xacNhanGiaVeBB,
  postThemVeVaoDatChoVN,
  delDatChoVN,
  postThemhanhKhachVaoDatChoVN,
  postDatVeVN,
  getHanhKhachBb,
  postXuatVeBb,
  putPhiThayDoi,
  getTinh,
  getKhuVuc,
  getQuocGia,
  getSanBay,
  postBaoHiem,
  getChuyenBayMoi,
  getPhuTroBb,
  putBaoGiaHanhTrinh,
  getTinhPhiDatCho,
  getHanhLyBb,
  postThemChang
}
