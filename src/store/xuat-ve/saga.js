//Include Both Helper File with needed methods
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  layDSChoDaChonFail, layDSChoDaChonSuccess,
  xuatVeDaChonSuccess, xuatVeDaChonFail,
  layThongTinGiaVeSuccess, layThongTinGiaVeFail,
  layThongTinPhiVeSuccess, layThongTinPhiVeFail,
  xuatVeBbSuccess
} from "./actions";
import TaskActionTypes from './actionTypes';
import { getTinhPhiDatCho, getDatChoTheoId, postXuatVe, getThongTinVe, postXuatVeBb } from "helpers/backend_helper";
import moment from "moment";

function* layPhiVe({ payload: id }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getTinhPhiDatCho, id);
    yield put(layThongTinPhiVeSuccess(response, fakeid));
  } catch (error) {
    yield put(layThongTinPhiVeFail(error))
  }
}

function* layDSChoDaChon({ payload: id }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getDatChoTheoId, id);
    yield put(layDSChoDaChonSuccess(response, fakeid));
  } catch (error) {
    yield put(layDSChoDaChonFail(error))
  }
}

function* layDsGiaVe({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getThongTinVe, params);
    yield put(layThongTinGiaVeSuccess(response, fakeid));
  } catch (error) {
    yield put(layThongTinGiaVeFail(error))
  }
}

function* postXuatVeDaChon({ payload: ma_dat_cho }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(postXuatVe, ma_dat_cho);
    yield put(xuatVeDaChonSuccess(response, fakeid));
  } catch (error) {
    yield put(xuatVeDaChonFail(error))
  }
}

function* postXuatVeBbSaga({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(postXuatVeBb, params);
    yield put(xuatVeBbSuccess(response, fakeid));
  } catch (error) {
    console.error(error);
  }
}

export function* getDataDaChon() {
  yield takeLatest(TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON, layDSChoDaChon);
}

export function* postData() {
  yield takeLatest(TaskActionTypes.POST_XUAT_VE, postXuatVeDaChon);
}

export function* postDataBb() {
  yield takeLatest(TaskActionTypes.POST_XUAT_VE_BB, postXuatVeBbSaga);
}

export function* getDataGiaVe() {
  yield takeLatest(TaskActionTypes.LAY_THONG_TIN_GIA_VE, layDsGiaVe);
}

export function* getDataPhiVe() {
  yield takeLatest(TaskActionTypes.LAY_THONG_TIN_PHI_VE, layPhiVe);
}

function* XuatVeSaga() {
  yield all([
    call(getDataDaChon),
    call(postData),
    call(getDataGiaVe),
    call(postDataBb),
    //Tin - 22/12/2021
    call(getDataPhiVe),
  ]);
}

export default XuatVeSaga
