import TaskActionTypes from './actionTypes';

const INIT_STATE = {
  resApi: {},
  resApiGiaVe: {},
  resApiDatCho : {},
  content: {},
  loading: false,
  loadingGetThongTinDatCho: false,
  dataXuatVe: [],
  dataGiaVe: [],

  //Tin - 22/12
  dataPhiVe: {}
}

const XuatVe = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON:
    case TaskActionTypes.POST_XUAT_VE:
    case TaskActionTypes.POST_XUAT_VE_BB:
    //Tin --22/12
    case TaskActionTypes.LAY_THONG_TIN_PHI_VE:
      return {
        ...state,
        loading: true,
        loadingGetThongTinDatCho: true,
      }

    case TaskActionTypes.LAY_THONG_TIN_PHI_VE_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-thong-tin-phi-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhiVe: action.payload.data,
        loading: false,
    }

    case TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-thong-tin-dat-cho', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        content: action.payload.data,
        loadingGetThongTinDatCho: false,
      }

    case TaskActionTypes.POST_XUAT_VE_SUCCESS:
      return {
        ...state,
        resApi: { action: 'xuat-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataXuatVe: action.payload.data,
      }

      case TaskActionTypes.POST_XUAT_VE_BB_SUCCESS:
        return {
          ...state,
          resApi: { action: 'xuat-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
          dataXuatVe: action.payload.data,
        }
  

    case TaskActionTypes.LAY_THONG_TIN_GIA_VE_SUCCESS:
      return {
        ...state,
        resApi: { action: 'thong-tin-gia-ve', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataGiaVe: action.payload.data,
        loading: false,
      }

    case TaskActionTypes.LAY_DS_DAT_CHO_DA_CHON_FAIL:
    case TaskActionTypes.POST_XUAT_VE_FAIL:
    case TaskActionTypes.LAY_THONG_TIN_PHI_VE_FAIL:
      return {
        ...state,
        loading: false,
        loadingGetThongTinDatCho: false,
      }

    default:
      return state
  }
}

export default XuatVe
