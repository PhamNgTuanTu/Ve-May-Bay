import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"

// quên mật khẩu
import quenMatKhau from "pages/Authentication/quen-mat-khau"
import capNhatMatKhauMoi from "pages/Authentication/cap-nhat-mat-khau-moi"

// trang chủ
import Dashboard from "../pages/trang-chu"

//tìm đặt vé
import RouteDatVe from "pages/dat-tim-ve/RouteDatVe"

//tìm kiếm đặt chỗ
import RouteTimKiemDatCho from "pages/tim-kiem-dat-cho/RouteTimKiemDatCho"


const userRoutes = [
  { path: "/", exact: true, component: Dashboard },
  { path: "/tim-ve", exact: false, component: RouteDatVe },
  { path: "/tim-kiem-dat-cho", exact: false, component: RouteTimKiemDatCho },


  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/" /> },
]

const authRoutes = [
  { path: "/dang-xuat", component: Logout },
  { path: "/dang-nhap", component: Login },
  { path: "/quen-mat-khau", component: quenMatKhau },
  { path: "/cap-nhat-mat-khau-moi", component: capNhatMatKhauMoi },
]

export { userRoutes, authRoutes }
