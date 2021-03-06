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
  LAY_DS_GHE_CHUYEN_DI_VJ_SUCCESS,
  LAY_DS_GHE_CHUYEN_VE_VJ_SUCCESS,
  DAT_VE_VJ_SUCCESS,
  DAT_VE_BB_SUCCESS,
  TINH_PHI_VE,
  TINH_PHI_VE_SUCCESS,
  LAY_DS_GHE_CHUYEN_DI_BB_SUCCESS,
  XAC_NHAN_GIA_VE_BB,
  XAC_NHAN_GIA_VE_BB_SUCCESS,
  THEM_VE_VAO_DAT_CHO_SUCCESS,
  BO_QUA_DAT_CHO_SUCCESS,
  THEM_HANH_KHACH_VAO_VE_SUCCESS,
  DAT_VE_VN_SUCCESS,
  XUAT_VE_VJ_SUCCESS,
  TINH_PHI_VE_CHON_GHE,
  TINH_PHI_VE_CHON_GHE_SUCCESS,
  SAVE_NAME_SEAT_CHOOSE_MOT_CHIEU,
  SAVE_ARR_SEAT_CHOOSE_MOT_CHIEU,
  SAVE_AFTER_ARR_SEAT_CHOOSE_MOT_CHIEU,
  SAVE_NAME_SEAT_CHOOSE_HAI_CHIEU,
  SAVE_ARR_SEAT_CHOOSE_HAI_CHIEU,
  SAVE_AFTER_ARR_SEAT_CHOOSE_HAI_CHIEU,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_DI_SUCCESS,
  LAY_DANH_SACH_PHU_TRO_CHUYEN_VE_SUCCESS,
  SAVE_DATA_PHU_TRO_CHUYEN_DI_VJ,
  SAVE_DATA_PHU_TRO_CHUYEN_VE_VJ,
  SAVE_DATA_PHU_TRO_THUC_AN_VJ_DI,
  SAVE_DATA_PHU_TRO_THUC_AN_VJ_VE,
  GET_DS_BAO_HIEM_VJ_CHUYEN_DI_SUCCESS,
  GET_DS_BAO_HIEM_VJ_CHUYEN_VE_SUCCESS,
  SAVE_NAME_BAO_HIEM_MOT_CHIEU,
  SAVE_NAME_BAO_HIEM_HAI_CHIEU,
  SAVE_ARR_BAO_HIEM_MOT_CHIEU,
  SAVE_ARR_BAO_HIEM_HAI_CHIEU,
  LAY_DS_PHU_TRO_CHUYEN_DI_BB_SUCCESS,
  LAY_DS_PHU_TRO_CHUYEN_VE_BB_SUCCESS,
  LAY_DS_HANH_LY_CHUYEN_DI_BB_SUCCESS,
  LAY_DS_HANH_LY_CHUYEN_VE_BB_SUCCESS,
  SAVE_DATA_HANH_LY_CHUYEN_DI,
  SAVE_DATA_HANH_LY_CHUYEN_VE
} from "./actionTypes"

const INIT_STATE = {
  params: {},
  paramsPhiVe: {},
  paramsPhiVeBb: {},
  paramsPhiVeChonGhe: {},
  resApi: {},
  resApiThemhanhKhach: {},
  resApiPhiVe: {},
  selectedChuyenDi: {},
  selectedChuyenVe: {},
  thongTinHanhKhach: {},
  dataChonGhe: {},
  nameSeatMotChieu: {},
  nameBaoHiemMotChieu: {},
  nameBaoHiemHaiChieu: {},
  nameThucAnMotChieu: {},
  nameThucAnHaiChieu: {},
  nameSeatHaiChieu: {},

  arrSeatMotChieu: [],
  arrSeatHaiChieu: [],

  arrPhuTroMotChieu: [],
  arrPhuTroHaiChieu: [],

  arrHanhLyMotChieu: [],
  arrHanhLyHaiChieu: [],

  arrBaoHiemMotChieu: [],
  arrBaoHiemHaiChieu: [],

  arrAfterSeatMotChieu: [],
  arrAfterSeatHaiChieu: [],

  dataBaoHiemVjChuyenDi: [],
  dataBaoHiemVjChuyenVe: [],

  dataPhuTroVjChuyenDi: [],
  dataPhuTroVjChuyenVe: [],

  dataPhuTroBbChuyenDi: [],
  dataPhuTroBbChuyenVe: [],

  dataHanhLyBbChuyenDi: [],
  dataHanhLyBbChuyenVe: [],

  selectedFilters: [],
  hanhKhachNguoiLon: [],
  hanhKhachTreEm: [],
  hanhKhachEmBe: [],
  dataDatVe: [],
  phiVe: [],
  phiVeBb: [],
  //ch??? ng???i vj
  dataChoNgoiVjChuyenDi: [],
  dataChoNgoiVjChuyenVe: [],
  //ch??? ng???i bb
  dataChoNgoiBbChuyenDi: [],
  //data t??m v??
  data: [],
  error: {},
}

const DatTimVe = (state = INIT_STATE, action) => {
  switch (action.type) {
    //ds chuy???n bay
    case LAY_DS_CHUYEN_BAY:
      return {
        ...state,
        params: action.payload,
      }
    case LAY_DS_CHUYEN_BAY_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-chuyen-bay', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        data: action.payload.data,
      }
    case LAY_DS_CHUYEN_BAY_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    //l???y ds gh???
    //vj
    case LAY_DS_GHE_CHUYEN_DI_VJ_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-cho-ngoi', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataChoNgoiVjChuyenDi: action.payload.data,
      }
    case LAY_DS_GHE_CHUYEN_VE_VJ_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-cho-ngoi', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataChoNgoiVjChuyenVe: action.payload.data,
      }
    //bb
    case LAY_DS_GHE_CHUYEN_DI_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-cho-ngoi', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataChoNgoiBbChuyenDi: action.payload.data,
      }
    //l???y danh s??ch ph??? tr???
    case LAY_DANH_SACH_PHU_TRO_CHUYEN_DI_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-phu-tro', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhuTroVjChuyenDi: action.payload.data,
      }
    case LAY_DANH_SACH_PHU_TRO_CHUYEN_VE_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-phu-tro', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhuTroVjChuyenVe: action.payload.data,
      }
    //ch???n gh???
    case SELECT_SEAT:
      return {
        ...state,
        dataChonGhe: action.payload,
      }
    //l??u t??n gh??? ???? ch???n
    case SAVE_NAME_SEAT_CHOOSE_MOT_CHIEU:
      return {
        ...state,
        nameSeatMotChieu: action.payload,
      }
    case SAVE_NAME_SEAT_CHOOSE_HAI_CHIEU:
      return {
        ...state,
        nameSeatHaiChieu: action.payload,
      }
    //l??u m???ng gh??? ???? ch???n
    case SAVE_ARR_SEAT_CHOOSE_MOT_CHIEU:
      return {
        ...state,
        arrSeatMotChieu: action.payload,
      }
    case SAVE_ARR_SEAT_CHOOSE_HAI_CHIEU:
      return {
        ...state,
        arrSeatHaiChieu: action.payload,
      }
    //l??u m???ng gh??? ???? ch???n sau khi ch???n gh???
    case SAVE_AFTER_ARR_SEAT_CHOOSE_MOT_CHIEU:
      return {
        ...state,
        arrAfterSeatMotChieu: action.payload,
      }
    case SAVE_AFTER_ARR_SEAT_CHOOSE_HAI_CHIEU:
      return {
        ...state,
        arrAfterSeatHaiChieu: action.payload,
      }
    //l??u t??n b???o hi???m
    case SAVE_NAME_BAO_HIEM_MOT_CHIEU:
      return {
        ...state,
        nameBaoHiemMotChieu: action.payload,
      }
    case SAVE_NAME_BAO_HIEM_HAI_CHIEU:
      return {
        ...state,
        nameBaoHiemHaiChieu: action.payload,
      }
    //l??u m???ng b???o hi???m
    case SAVE_ARR_BAO_HIEM_MOT_CHIEU:
      return {
        ...state,
        arrBaoHiemMotChieu: action.payload,
      }
    case SAVE_ARR_BAO_HIEM_HAI_CHIEU:
      return {
        ...state,
        arrBaoHiemHaiChieu: action.payload,
      }
    //l??u phu tr??? ???? ch???n chuy???n ??i vj
    case SAVE_DATA_PHU_TRO_CHUYEN_DI_VJ:
      return {
        ...state,
        arrPhuTroMotChieu: action.payload,
      }
    case SAVE_DATA_HANH_LY_CHUYEN_DI:
      return {
        ...state,
        arrHanhLyMotChieu: action.payload,
      }
    //l??u phu tr??? ???? ch???n chuy???n v??? vj
    case SAVE_DATA_PHU_TRO_CHUYEN_VE_VJ:
      return {
        ...state,
        arrPhuTroHaiChieu: action.payload,
      }
    case SAVE_DATA_HANH_LY_CHUYEN_VE:
      return {
        ...state,
        arrHanhLyHaiChieu: action.payload,
      }
    //filter table
    case SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload,
      }
    //ch???n chuy???n bay
    case CHUYEN_BAY_DI_DA_CHON:
      return {
        ...state,
        selectedChuyenDi: action.payload,
      }
    case CHUYEN_BAY_VE_DA_CHON:
      return {
        ...state,
        selectedChuyenVe: action.payload,
      }
    //th??ng tin h??nh kh??ch
    case HANH_KHACH_NGUOI_LON:
      return {
        ...state,
        hanhKhachNguoiLon: action.payload,
      }
    case HANH_KHACH_TRE_EM:
      return {
        ...state,
        hanhKhachTreEm: action.payload,
      }
    case HANH_KHACH_EM_BE:
      return {
        ...state,
        hanhKhachEmBe: action.payload,
      }
    case THONG_TIN_HANH_KHACH:
      return {
        ...state,
        thongTinHanhKhach: action.payload,
      }
    // ?????t v??
    //vj
    case DAT_VE_VJ_SUCCESS:
      return {
        ...state,
        resApi: { action: 'dat-ve-vj', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataDatVe: action.payload.data,
      }
    //bb
    case DAT_VE_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'dat-ve-bb', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataDatVe: action.payload.data,
      }
    //vn
    case DAT_VE_VN_SUCCESS:
      return {
        ...state,
        resApi: { action: 'dat-ve-vn', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataDatVe: action.payload.data,
      }
    //xu???t v?? vj
    case XUAT_VE_VJ_SUCCESS:
      return {
        ...state,
        resApi: { action: 'dat-ve-vj', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataDatVe: action.payload.data,
      }
    //t??nh ph?? v??
    case TINH_PHI_VE:
      return {
        ...state,
        paramsPhiVe: action.payload,
      }
    case TINH_PHI_VE_SUCCESS:
      return {
        ...state,
        resApiPhiVe: { action: 'tinh-phi-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        phiVe: action.payload.data,
      }
    //t??nh ph?? v?? khi ch???n gh???
    case TINH_PHI_VE_CHON_GHE:
      return {
        ...state,
        paramsPhiVeChonGhe: action.payload,
      }
    case TINH_PHI_VE_CHON_GHE_SUCCESS:
      return {
        ...state,
        resApiPhiVe: { action: 'tinh-phi-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        phiVe: action.payload.data,
      }
    //X??c nh???n v?? BB
    case XAC_NHAN_GIA_VE_BB:
      return {
        ...state,
        paramsPhiVeBb: action.payload,
      }
    case XAC_NHAN_GIA_VE_BB_SUCCESS:
      return {
        ...state,
        resApiPhiVe: { action: 'tinh-phi-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        phiVeBb: action.payload.data,
      }
    //d???ch v??? ?????t v?? vietnam
    case THEM_VE_VAO_DAT_CHO_SUCCESS:
      return {
        ...state,
        resApi: { action: 'them-ve-vao-dat-cho', code: action.payload.code, message: action.payload.message, id: action.payload.id },
      }
    //b??? qua ?????t ch???
    case BO_QUA_DAT_CHO_SUCCESS:
      return {
        ...state,
        resApi: { action: 'bo-qua-dat-cho', code: action.payload.code, message: action.payload.message, id: action.payload.id },
      }
    //th??m h??nh kh??ch v??o v??
    case THEM_HANH_KHACH_VAO_VE_SUCCESS:
      return {
        ...state,
        resApiThemhanhKhach: { action: 'them-hanh-khach-vao-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
      }
    //l??u t??n th???c ??n ???? ch???n
    case SAVE_DATA_PHU_TRO_THUC_AN_VJ_DI:
      return {
        ...state,
        nameThucAnMotChieu: action.payload,
      }
    case SAVE_DATA_PHU_TRO_THUC_AN_VJ_VE:
      return {
        ...state,
        nameThucAnHaiChieu: action.payload,
      }
    //l???y danh s??ch b???o hi???m
    case GET_DS_BAO_HIEM_VJ_CHUYEN_DI_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-bao-hiem', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataBaoHiemVjChuyenDi: action.payload.data,
      }
    case GET_DS_BAO_HIEM_VJ_CHUYEN_VE_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-bao-hiem', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataBaoHiemVjChuyenVe: action.payload.data,
      }

    //l???y danh s??ch ph??? tr??? Bb
    case LAY_DS_PHU_TRO_CHUYEN_DI_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-phu-tro', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhuTroBbChuyenDi: action.payload.data,
      }
    case LAY_DS_PHU_TRO_CHUYEN_VE_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-phu-tro', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhuTroBbChuyenVe: action.payload.data,
      }
    //l???y ds h??nh l?? bb
    case LAY_DS_HANH_LY_CHUYEN_DI_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-phu-tro', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataHanhLyBbChuyenDi: action.payload.data,
      }
    case LAY_DS_HANH_LY_CHUYEN_VE_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-ds-phu-tro', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataHanhLyBbChuyenVe: action.payload.data,
      }
    default:
      return state
  }
}

export default DatTimVe
