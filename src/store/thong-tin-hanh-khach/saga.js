//Include Both Helper File with needed methods
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  capNhatBaoGiaHanhKhachSuccess, capNhatBaoGiaHanhKhachFail,
  capNhatBaoGiaHanhKhachBbSuccess, capNhatBaoGiaHanhKhachBbFail,
  postThongTinHanhKhachSuccess, postThongTinHanhKhachFail,
  capNhatPhiThayDoiThongTinSuccess, capNhatPhiThayDoiThongTinFail, 
  chapNhanCapNhatHanhKhachSuccess, chapNhanCapNhatHanhKhachKhachFail
} from "./actions";
import TaskActionTypes from './actionTypes';
import { getHanhKhach, getThongTinVe, postThongTinHanhKhach, getHanhKhachBb, putPhiThayDoi } from "helpers/backend_helper";
import moment from "moment";

function* putPhiThayDoiHanhKhach({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(putPhiThayDoi, params);
    yield put(capNhatPhiThayDoiThongTinSuccess(response, fakeid));
  } catch (error) {
    yield put(capNhatPhiThayDoiThongTinFail(error))
  }
}

function* putBaoGiaHanhKhach({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getHanhKhach, params);
    yield put(capNhatBaoGiaHanhKhachSuccess(response, fakeid));
  } catch (error) {
    yield put(capNhatBaoGiaHanhKhachFail(error))
  }
}

function* putChapNhanCapNhat({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getHanhKhach, params);
    yield put(chapNhanCapNhatHanhKhachSuccess(response, fakeid));
  } catch (error) {
    yield put(chapNhanCapNhatHanhKhachKhachFail(error))
  }
}

function* layDsHanhKhachBb({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getHanhKhachBb, params);
    console.log("response: ", response);
    yield put(layThongTinHanhKhachBbSuccess(response, fakeid));
  } catch (error) {
    yield put(layThongTinHanhKhachBbFail(error))
  }
}


function* postDoiThongTinHanhKhach({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(postThongTinHanhKhach, params);
    yield put(postThongTinHanhKhachSuccess(response, fakeid));
  } catch (error) {
    yield put(postThongTinHanhKhachFail(error))
  }
}

export function* putDataCapNhat() {
  yield takeLatest(TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH, putChapNhanCapNhat);
}

export function* getDataDaChon() {
  yield takeLatest(TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH, putBaoGiaHanhKhach);
}

export function* getDataDaChonBb() {
  yield takeLatest(TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB, layDsHanhKhachBb);
}

export function* postThongTin() {
  yield takeLatest(TaskActionTypes.POST_THONG_TIN_HANH_KHACH, postDoiThongTinHanhKhach);
}
export function* putPhiThayDoiThongTin() {
  yield takeLatest(TaskActionTypes.CAP_NHAT_PHI_THAY_DOI, putPhiThayDoiHanhKhach);
}

function* ThongTinHanhKhachSaga() {
  yield all([
    call(getDataDaChon),
    call(getDataDaChonBb),
    call(putPhiThayDoiThongTin),
    call(postThongTin),
    call(putDataCapNhat)
  ]);
}

export default ThongTinHanhKhachSaga
