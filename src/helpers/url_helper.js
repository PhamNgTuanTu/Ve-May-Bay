//Chức năng đăng nhập
export const POST_DANGNHAP = "/dai-ly/dang-nhap"

//Chức năng quên mật khẩu
export const POST_QUEN_MAT_KHAU = "/dai-ly/quen-mat-khau"
export const PUT_MAT_KHAU_MOI = "/dai-ly/quen-mat-khau/cap-nhat"

//Chức năng đặt vé
export const GET_CHUYEN_BAY = "/th-api/tim-ve"
export const GET_CHO_NGOI = "/vietjet/ds-cho-ngoi"
//phụ trợ
export const GET_PHU_TRO_VJ = "/vietjet/ds-phu-tro"
export const GET_PHU_TRO_BB = "/bamboo/danh-sach-phu-tro"
export const GET_HANH_LY_BB = "/bamboo/them-hanh-ly"

//bảo hiểm
export const POST_BAO_HIEM_VJ = "/vietjet/ds-bao-hiem"

//đặt vé vj
export const POST_DAT_VE = "/th-api/tim-ve/dat-ve"
//đặt vé bb
export const POST_DAT_VE_BB = "/bamboo/dat-ve"
//đặt vé vn
export const POST_THEM_VE_VAO_DAT_CHO_VN = "/vn-airline/them-dat-cho"
export const DEL_BO_QUA_BOOKING = "/vn-airline/bo-qua-dat-cho"
export const POST_THEM_HANH_KHACH_VAO_VE = "/vn-airline/them-hanh-khach"
export const POST_DAT_VE_VN = "/vn-airline/thanh-toan"

//tính phí đặt chỗ
export const TINH_PHI_TRUOC_DAT_CHO_VJ = "/th-api/tim-ve/tinh-phi-truoc-dat-cho"
export const TINH_PHI_TRUOC_DAT_CHO = "/th-api/tim-ve/tinh-phi-truoc-dat-cho"

//xác nhận giá ve
export const XAC_NHAN_GIA_VE = "/bamboo/xac-nhan-gia-ve"

//lấy danh sách chỗ ngồi VJ
export const GET_CHO_NGOI_VJ = "/vietjet/ds-cho-ngoi"

//lấy danh sách chỗ ngồi Bb
export const GET_CHO_NGOI_BB = "/bamboo/chon-cho-ngoi"

//chức năng tìm kiếm đặt chỗ
export const GET_DAT_CHO = "/quan-ly/dat-cho"

//chức năng xuất vé
export const POST_XUAT_VE = "/th-api/tim-ve/thanh-toan"
//chức năng xuất vé bb
export const POST_XUAT_VE_BB = "/bamboo/thanh-toan"

//lấy thông tin hành khách
export const GET_DATA_HANH_KHACH = "/vietjet/dat-ve/hanh-khach"
export const GET_DATA_HANH_KHACH_BB = "/bamboo/lay-thong-tin-dat-ve"

export const GET_DATA_VE = "/vietjet/tt-dat-ve"
export const POST_DOI_THONG_TIN_HANH_KHACH_P1 = "/vietjet/dat-ve"
export const POST_DOI_THONG_TIN_HANH_KHACH_P2 = "/hanh-khach"

//Lấy danh sách tỉnh
export const GET_TINH = "/quan-ly/tinh"

//Lấy danh sách khu vực
export const GET_KHU_VUC = "/quan-ly/khu-vuc"

//Lấy danh sách quốc gia
export const GET_QUOC_GIA = "/quan-ly/quoc-gia"

//Lấy danh sách sân bay
export const GET_SAN_BAY = "/quan-ly/san-bay"

//Lấy danh sách chuyến bay mới vietject
export const GET_DS_CHUYEN_BAY_MOI_VIETJECT = "/vietjet/dat-ve/hanh-trinh"
