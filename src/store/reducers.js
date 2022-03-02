import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import QuenMatKhau from "./auth/quen-mat-khau/reducer"

// Trang chủ
import DashBoard from "./trang-chu/reducer"

// Tìm kiếm đặt chỗ
import DanhSachDatCho from "./tim-kiem-dat-cho/reducer"

// Tìm kiếm đặt chỗ
import XuatVe from "./xuat-ve/reducer"

//thông tin hành khách
import ThongTinHanhKhach from "./thong-tin-hanh-khach/reducer"

//đặt tìm vé
import DatTimVe from "./dat-tim-ve/reducer"

//vị trí
import ViTri from "./vi-tri/reducer"

import ThongTinChuyenBay from "./thong-tin-chuyen-bay/reducer"


const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  DashBoard,
  QuenMatKhau,
  DanhSachDatCho,
  XuatVe,
  ThongTinHanhKhach,
  DatTimVe,
  ViTri,
  ThongTinChuyenBay
})

export default rootReducer
