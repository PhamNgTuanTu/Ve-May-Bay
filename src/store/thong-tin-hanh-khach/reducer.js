import TaskActionTypes from './actionTypes';

const INIT_STATE = {
  resApi: {},
  resApiForm: {},
  dataHanhKhach: [],
  dataForm: [],
  dataDoiThongTin: [],
  loading: false,
  loadingForm: false,
  dataPhiThayDoi: {},
  dataPhiDaCapNhat: {},
  dataCapNhat: {}
}

const ThongTinHanhKhach = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH:
    case TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB:
    case TaskActionTypes.POST_THONG_TIN_HANH_KHACH:
    case TaskActionTypes.CAP_NHAT_PHI_THAY_DOI:
    case TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH:

      return {
        ...state,
        loading: true,
        loadingForm: true,
      }
 
    case TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_SUCCESS:
      return {
        ...state,
        resApiForm: { action: 'cat-nhat-phi-thay-doi-hanh-khach', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhiDaCapNhat: action.payload.data,
        loading: false,
        loadingForm: false,
      }

    case TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH_SUCCESS:
      return {
        ...state,
        resApiForm: { action: 'cat-nhat-hanh-khach', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataCapNhat: action.payload.data,
        loading: false,
        loadingForm: false,
      }
    case TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH_SUCCESS:
      return {
        ...state,
        resApiForm: { action: 'cat-nhat-bao-gia-hanh-khach', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhiThayDoi: action.payload.data,
        loading: false,
        loadingForm: false,
    }

    case TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB_SUCCESS:
      return {
        ...state,
        resApi: { action: 'thong-tin-hanh-khach', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataHanhKhach: action.payload.data,
        loading: false,
        loadingForm: false,
      }

    case TaskActionTypes.POST_THONG_TIN_HANH_KHACH_SUCCESS:
      return {
        ...state,
        resApiForm: { action: 'put-thong-tin-hanh-khach', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataDoiThongTin: action.payload.data,
        loadingForm: false,
        loading: false,
      }

    case TaskActionTypes.SAVE_DATA_FORM:
      return {
        ...state,
        dataForm: [...state.dataForm, action.payload],
      }

    case TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_KHACH_FAIL:
    case TaskActionTypes.LAY_THONG_TIN_HANH_KHACH_BB_FAIL:
    case TaskActionTypes.POST_THONG_TIN_HANH_KHACH_FAIL:
    case TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_FAIL:
    case TaskActionTypes.CAP_NHAT_THONG_TIN_HANH_KHACH_FAIL:

      return {
        ...state,
        loading: false,
        loadingForm: false,
      }

    default:
      return state
  }
}

export default ThongTinHanhKhach
