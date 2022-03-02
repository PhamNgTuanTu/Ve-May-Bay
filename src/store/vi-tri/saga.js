import { call, put, takeLatest, all } from "redux-saga/effects"
import moment from "moment";
// Crypto Redux States
import {
  layDSTinhSuccess, layDSTinhFail,
  layDSKhuVucSuccess, layDSKhuVucFail,
  layDSQuocGiaSuccess, layDSQuocGiaFail,
  layDSSanBaySuccess, layDSSanBayFail
} from "./actions"

import TaskActionTypes from './actionTypes';

//Include Both Helper File with needed methods
import { getTinh, getKhuVuc, getQuocGia, getSanBay } from "helpers/backend_helper"

function* layDSTinh() {
  try {
    const params = {
      so_luong: 100
    }
    const response = yield call(getTinh, params);
    yield put(layDSTinhSuccess(response.data));
  } catch (error) {
    yield put(layDSTinhFail(error))
  }
}

function* layDSSanBay() {
  try {
    const params = {
      so_luong: 100
    }
    const response = yield call(getSanBay, params);
    yield put(layDSSanBaySuccess(response.data));
  } catch (error) {
    yield put(layDSSanBayFail(error))
  }
}

function* layDSKhuVuc() {
  try {
    const response = yield call(getKhuVuc);
    yield put(layDSKhuVucSuccess(response.data));
  } catch (error) {
    yield put(layDSKhuVucFail(error))
  }
}

function* layDSQuocGia() {
  try {
    const response = yield call(getQuocGia);
    yield put(layDSQuocGiaSuccess(response.data));
  } catch (error) {
    yield put(layDSQuocGiaFail(error))
  }
}

export function* getDataTinh() {
  yield takeLatest(TaskActionTypes.LAY_DS_TINH, layDSTinh);
}
export function* getDataSanBay() {
  yield takeLatest(TaskActionTypes.LAY_DS_SAN_BAY, layDSSanBay);
}
export function* getDataKhuVuc() {
  yield takeLatest(TaskActionTypes.LAY_DS_KHU_VUC, layDSKhuVuc);
}
export function* getDataQuocGia() {
  yield takeLatest(TaskActionTypes.LAY_DS_QUOC_GIA, layDSQuocGia);
}


function* ViTriSaga() {
  yield all([
    call(getDataTinh),
    call(getDataSanBay),
    call(getDataKhuVuc),
    call(getDataQuocGia),
  ]);
}

export default ViTriSaga
