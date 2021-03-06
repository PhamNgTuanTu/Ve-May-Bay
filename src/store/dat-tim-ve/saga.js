//Include Both Helper File with needed methods
import {
  getChuyenBay,
  layDsChoNgoiBb,
  layDsChoNgoiVj,
  postDatVe,
  postDatVeBB,
  postTinhPhiDatCho,
  xacNhanGiaVeBB,
  postThemVeVaoDatChoVN,
  delDatChoVN,
  postThemhanhKhachVaoDatChoVN,
  postDatVeVN,
  postXuatVe,
  getPhuTroVj,
  postBaoHiem,
  getPhuTroBb,
  getHanhLyBb
} from "helpers/backend_helper";
import moment from "moment";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  layDSChuyenBaySuccess, layDSChuyenBayFail,
  layDSGheChuyenDiVjSuccess,
  layDSGheChuyenVeVjSuccess,
  DatVeVjSuccess,
  tinhPhiVeSuccess,
  layDSGheChuyenDiBbSuccess,
  xacNhanGiaVeBBSuccess,
  DatVeBbSuccess,
  themVeVaoDatChoSuccess,
  boQuaDatChoSuccess,
  themHanhKhachVaoDatChoSuccess,
  DatVeVnSuccess,
  xuatVeVjThanhToanSuccess,
  tinhPhiVeChonGheSuccess,
  layDsPhuTroChuyenDiSuccess,
  layDsPhuTroChuyenVeSuccess,
  getDsBaoHiemVjChuyenDiSuccess,
  getDsBaoHiemVjChuyenVeSuccess,
  getDsPhuTroBbChuyenDiSuccess,
  getDsPhuTroBbChuyenVeSuccess,
  getDsHanhLyBbChuyenDiSuccess,
  getDsHanhLyBbChuyenVeSuccess
} from "./actions";
import {
  LAY_DS_CHUYEN_BAY,
  LAY_DS_GHE_CHUYEN_DI_VJ,
  LAY_DS_GHE_CHUYEN_DI_BB,
  LAY_DS_GHE_CHUYEN_VE_VJ,
  DAT_VE_VJ,
  DAT_VE_BB,
  DAT_VE_VN,
  TINH_PHI_VE,
  XAC_NHAN_GIA_VE_BB,
  THEM_VE_VAO_DAT_CHO,
  BO_QUA_DAT_CHO,
  THEM_HANH_KHACH_VAO_VE,
  XUAT_VE_VJ,
  TINH_PHI_VE_CHON_GHE,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_DI,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_VE,
  GET_DS_BAO_HIEM_VJ_CHUYEN_DI,
  GET_DS_BAO_HIEM_VJ_CHUYEN_VE,
  LAY_DS_PHU_TRO_CHUYEN_DI_BB,
  LAY_DS_PHU_TRO_CHUYEN_VE_BB,
  LAY_DS_HANH_LY_CHUYEN_DI_BB,
  LAY_DS_HANH_LY_CHUYEN_VE_BB
} from "./actionTypes";

function* layDSChuyenBay({ payload: params }) {
  try {
    const response = yield call(getChuyenBay, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(layDSChuyenBaySuccess(response, fakeid))
  } catch (error) {
    yield put(layDSChuyenBayFail(error))
  }
}

// vj
function* layDSGheChuyenDiVj({ payload: params }) {
  try {
    const response = yield call(layDsChoNgoiVj, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(layDSGheChuyenDiVjSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSPhuTroChuyenDiVj({ payload: params }) {
  try {
    const response = yield call(getPhuTroVj, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(layDsPhuTroChuyenDiSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSGheChuyenVeVj({ payload: params }) {
  try {
    const response = yield call(layDsChoNgoiVj, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(layDSGheChuyenVeVjSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSPhuTroChuyenVeVj({ payload: params }) {
  try {
    const response = yield call(getPhuTroVj, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(layDsPhuTroChuyenVeSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSGheChuyenDiBb({ payload: params }) {
  try {
    const response = yield call(layDsChoNgoiBb, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(layDSGheChuyenDiBbSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDsBaoHiemChuyenDiVj({ payload: params }) {
  try {
    const response = yield call(postBaoHiem, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(getDsBaoHiemVjChuyenDiSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api l???y danh s??ch b???o hi???m")
  }
}

function* layDsBaoHiemChuyenVeVj({ payload: params }) {
  try {
    const response = yield call(postBaoHiem, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(getDsBaoHiemVjChuyenVeSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api l???y danh s??ch b???o hi???m")
  }
}

//--vj--

//bb

function* layDSPhuTroChuyenDiBb({ payload: params }) {
  try {
    const response = yield call(getPhuTroBb, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(getDsPhuTroBbChuyenDiSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSPhuTroChuyenVeBb({ payload: params }) {
  try {
    const response = yield call(getPhuTroBb, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(getDsPhuTroBbChuyenVeSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSHanhLyChuyenDiBb({ payload: params }) {
  try {
    const response = yield call(getHanhLyBb, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(getDsHanhLyBbChuyenDiSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

function* layDSHanhLyChuyenVeBb({ payload: params }) {
  try {
    const response = yield call(getHanhLyBb, params)
    console.log("response: ", response);
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(getDsHanhLyBbChuyenVeSuccess(response, fakeid))
  } catch (error) {
    console.error(error)
  }
}

//--bb--

function* DatVeVj({ payload: params }) {
  try {
    const response = yield call(postDatVe, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(DatVeVjSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api ?????t v??")
  }
}

function* xuatVeVj({ payload: params }) {
  try {
    const response = yield call(postXuatVe, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(xuatVeVjThanhToanSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api xu???t v??")
  }
}

function* DatVeBb({ payload: params }) {
  try {
    const response = yield call(postDatVeBB, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(DatVeBbSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api ?????t v??")
  }
}

function* DatVeVn({ payload: params }) {
  try {
    const response = yield call(postDatVeVN, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(DatVeVnSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api ?????t v??")
  }
}

function* tinhPhiVe({ payload: params }) {
  try {
    const response = yield call(postTinhPhiDatCho, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(tinhPhiVeSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api t??nh ph?? v??")
  }
}

function* tinhPhiVeChonGhe({ payload: params }) {
  try {
    const response = yield call(postTinhPhiDatCho, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(tinhPhiVeChonGheSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api t??nh ph?? v??")
  }
}

function* xacNhanVeBb({ payload: params }) {
  try {
    const response = yield call(xacNhanGiaVeBB, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(xacNhanGiaVeBBSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api x??c nh???n v??")
  }
}

function* themVeVaoDatChoVN({ payload: params }) {
  try {
    const response = yield call(postThemVeVaoDatChoVN, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(themVeVaoDatChoSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api th??m v?? v??o ?????t ch???")
  }
}

function* xoaDatChoVN() {
  try {
    const response = yield call(delDatChoVN)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(boQuaDatChoSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api b??? qua ?????t ch???")
  }
}

function* themHanhKhachVaoDatChoVN({ payload: params }) {
  try {
    const response = yield call(postThemhanhKhachVaoDatChoVN, params)
    console.log(response)
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    yield put(themHanhKhachVaoDatChoSuccess(response, fakeid))
  } catch (error) {
    console.log("L???i api th??m h??nh kh??ch v??o ?????t ch???")
  }
}

function* DatVeSaga() {
  yield takeEvery(LAY_DS_CHUYEN_BAY, layDSChuyenBay)
  //l???y danh s??ch gh??? VJ 
  //chuy???n ??i
  yield takeEvery(LAY_DS_GHE_CHUYEN_DI_VJ, layDSGheChuyenDiVj)
  //chuy???n v???
  yield takeEvery(LAY_DS_GHE_CHUYEN_VE_VJ, layDSGheChuyenVeVj)
  //l???y danh s??ch ph??? tr??? VJ 
  //chuy???n ??i
  yield takeEvery(LAY_DANH_SACH_PHU_TRO_CHUYEN_DI, layDSPhuTroChuyenDiVj)
  //chuy???n v???
  yield takeEvery(LAY_DANH_SACH_PHU_TRO_CHUYEN_VE, layDSPhuTroChuyenVeVj)
  //bb
  yield takeEvery(LAY_DS_GHE_CHUYEN_DI_BB, layDSGheChuyenDiBb)
  //?????t v?? vj
  yield takeEvery(DAT_VE_VJ, DatVeVj)
  //xu???t v?? vj
  yield takeEvery(XUAT_VE_VJ, xuatVeVj)
  //?????t v?? bb
  yield takeEvery(DAT_VE_BB, DatVeBb)
  //?????t v?? vn
  yield takeEvery(DAT_VE_VN, DatVeVn)
  //t??nh ph??
  yield takeEvery(TINH_PHI_VE, tinhPhiVe)
  //t??nh ph?? khi ch???n gh???
  yield takeEvery(TINH_PHI_VE_CHON_GHE, tinhPhiVeChonGhe)
  //x??c nh???n v??
  yield takeEvery(XAC_NHAN_GIA_VE_BB, xacNhanVeBb)
  //th??m v?? v??o ?????t ch??? vn
  yield takeEvery(THEM_VE_VAO_DAT_CHO, themVeVaoDatChoVN)
  // x??a ?????t ch???
  yield takeEvery(BO_QUA_DAT_CHO, xoaDatChoVN)
  //th??m h??nh kh??ch v??o ?????t ch???
  yield takeEvery(THEM_HANH_KHACH_VAO_VE, themHanhKhachVaoDatChoVN)
  //l???y danh s??ch b???o hi???m
  yield takeEvery(GET_DS_BAO_HIEM_VJ_CHUYEN_DI, layDsBaoHiemChuyenDiVj)
  yield takeEvery(GET_DS_BAO_HIEM_VJ_CHUYEN_VE, layDsBaoHiemChuyenVeVj)
  //l???y danh s??ch ph??? tr??? bamboo
  yield takeEvery(LAY_DS_PHU_TRO_CHUYEN_DI_BB, layDSPhuTroChuyenDiBb)
  yield takeEvery(LAY_DS_PHU_TRO_CHUYEN_VE_BB, layDSPhuTroChuyenVeBb)
  //l???y danh s??ch h??nh l?? bamboo
  yield takeEvery(LAY_DS_HANH_LY_CHUYEN_DI_BB, layDSHanhLyChuyenDiBb)
  yield takeEvery(LAY_DS_HANH_LY_CHUYEN_VE_BB, layDSHanhLyChuyenVeBb)
}

export default DatVeSaga
