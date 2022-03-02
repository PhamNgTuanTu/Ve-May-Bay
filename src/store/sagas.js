import { all, fork } from "redux-saga/effects"

// Public
import AuthSaga from "./auth/login/saga"
import LayoutSaga from "./layout/saga"
import QuenMatKhauSaga from "./auth/quen-mat-khau/saga"

//trang chủ
import DashBoardSaga from "./trang-chu/saga"

// Đặt vé
import DatVeSaga from "./dat-tim-ve/saga"

// Tìm kiếm đặt chỗ
import DatChoSaga from "./tim-kiem-dat-cho/saga"

// Xuất vé
import XuatVeSaga from "./xuat-ve/saga"

//thông tin hành khách
import ThongTinHanhKhachSaga from "./thong-tin-hanh-khach/saga"

//vị trí
import ViTriSaga from "./vi-tri/saga";

import ThongTinChuyenBaySaga from "./thong-tin-chuyen-bay/saga"

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(LayoutSaga),
    fork(DatVeSaga),
    fork(QuenMatKhauSaga),
    fork(DatChoSaga),
    fork(XuatVeSaga),
    fork(DashBoardSaga),
    fork(ThongTinHanhKhachSaga),
    fork(ViTriSaga),
    fork(ThongTinChuyenBaySaga)
  ])
}
