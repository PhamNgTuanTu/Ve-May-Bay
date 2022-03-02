//Include Both Helper File with needed methods
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  layDSChuyenBayMoiSuccess, layDSChuyenBayMoiFail,
  capNhatBaoGiaHanhTrinhSuccess, capNhatBaoGiaHanhTrinhFail,
  capNhatThemChangSuccess, capNhatThemChangFail
} from "./actions";
import TaskActionTypes from './actionTypes';
import { getChuyenBayMoi, putBaoGiaHanhTrinh, putPhiThayDoi, postThemChang} from "helpers/backend_helper";
import moment from "moment";

function* layDsChuyenBayMoi({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(getChuyenBayMoi, params);
       console.log(response)
    yield put(layDSChuyenBayMoiSuccess(response, fakeid));
  } catch (error) {
    yield put(layDSChuyenBayMoiFail(error))
  }
}

function* putDoiChuyenBayHanhTrinh({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(putBaoGiaHanhTrinh, params);
    yield put(capNhatBaoGiaHanhTrinhSuccess(response, fakeid));
  } catch (error) {
    yield put(capNhatBaoGiaHanhTrinhFail(error))
  }
}

function* postThemChangHanhTrinh({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(postThemChang, params);
    yield put(capNhatThemChangSuccess(response, fakeid));
  } catch (error) {
    yield put(capNhatThemChangFail(error))
  }
}

function* putPhiThayDoiHanhKhach({ payload: params }) {
  try {
    var fakeid = moment(new Date()).format("YYYY-MM-DD hh mm ss");
    const response = yield call(putPhiThayDoi, params);
    yield put( capNhatPhiThayDoiChuyenBaySuccess(response, fakeid));
  } catch (error) {
    yield put( capNhatPhiThayDoiChuyenBayFail(error))
  }
}

export function* putPhiThayDoiThongTin() {
  yield takeLatest(TaskActionTypes.CAP_NHAT_PHI_THAY_DOI, putPhiThayDoiHanhKhach);
}

export function* postThemChangHanhTrinhThayDoi() {
  yield takeLatest(TaskActionTypes.CAP_NHAT_THEM_CHANG, postThemChangHanhTrinh);
}


export function* putPhiThayDoiDaChon() {
  yield takeLatest(TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH, putDoiChuyenBayHanhTrinh);
}

export function* getDsChuyenBayMoiVietject() {
  yield takeLatest(TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI, layDsChuyenBayMoi);
}

function* ThongTinChuyenBaySaga() {
  yield all([
    call(getDsChuyenBayMoiVietject),
    call(putPhiThayDoiDaChon),
    call(postThemChangHanhTrinhThayDoi)
  ]);
}

export default ThongTinChuyenBaySaga
