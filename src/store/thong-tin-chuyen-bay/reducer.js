import TaskActionTypes from './actionTypes';

const INIT_STATE = {
  resApi: {
    action: "",
    code: 0,
    message: ""
  },
  dsChuyenBayMoi: {
    hai_chieu: [],
    mot_chieu: []
  },
  dataPhiThayDoi: {},
  loading: false,
}

const ThongTinChuyenBay = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI:
    case TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH:
    case TaskActionTypes.CAP_NHAT_PHI_THAY_DOI:
    case TaskActionTypes.CAP_NHAT_THEM_CHANG:

      return {
        ...state,
        loading: true,
      }
 
    case TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI_SUCCESS:
      return {
        ...state,
        resApi: { action: 'lay-danh-sach-chuyen-bay-moi', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dsChuyenBayMoi: action.payload.data,
        loading: false,
      }
    case TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH_SUCCESS:
      return {
        ...state,
        resApi: { action: 'cat-nhat-hanh-trinh', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhiThayDoi: action.payload.data,
        loading: false,
    }
    case TaskActionTypes.CAP_NHAT_THEM_CHANG_SUCCESS:
      return {
        ...state,
        resApi: { action: 'cat-nhat-hanh-trinh', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhiThayDoi: action.payload.data,
        loading: false,
    }
    case TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_SUCCESS:
      return {
        ...state,
        resApiForm: { action: 'cat-nhat-phi-thay-doi-hanh-khach', code: action.payload.code, message: action.payload.message, id: action.payload.id },
        dataPhiThayDoi: action.payload.data,
        loading: false,
        loadingForm: false,
      }
    case TaskActionTypes.CAP_NHAT_PHI_THAY_DOI_FAIL:
    case TaskActionTypes.LAY_DS_CHUYEN_BAY_MOI_FAIL:
    case TaskActionTypes.CAP_NHAT_BAO_GIA_HANH_TRINH_FAIL:
    case TaskActionTypes.CAP_NHAT_THEM_CHANG_FAIL:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default ThongTinChuyenBay
