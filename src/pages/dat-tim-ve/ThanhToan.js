import classnames from "classnames";
import ThongTinVeBox from "components/Custom/box-thanh-toan/ThongTinVeBox";
import SpinnerLoading from "components/Custom/loading/SpinnerLoading";
import DatVeThanhCong from "components/Custom/Pane/DatVeThanhCong";
import DatVeThanhCongBb from "components/Custom/Pane/DatVeThanhCongBb";
import ThongTinChuyenBay from "components/Custom/Table/ThongTinChuyenBay";
import TableThongTinDichVu from "components/Custom/Table/ThongTinDichVu";
import TableThongTinDichVuBb from "components/Custom/Table/ThongTinDichVuBb";
import TableThongTinHanhKhach from "components/Custom/Table/ThongTinHanhKhach";
import { postDatVe, postThemhanhKhachVaoDatChoVN, postTinhPhiDatCho } from "helpers/backend_helper";
import { createData, moneyFormat, updateTTHK, updateTTHKTreEm } from "helpers/function/function_helper";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Col, Container, NavItem, NavLink, Row } from 'reactstrap';
import { guiThongTinDatVeBb, guiThongTinDatVeVj, guiThongTinDatVeVn, xuatVeVjThanhToan } from "store/actions";
import {
    data, hanhKhachEmBe, hanhKhachNguoiLon,
    hanhKhachTreEm, params, paramsPhiVeBb,
    phiVe, phiVeBb, selectedChuyenDi,
    selectedChuyenVe, thongTinHanhKhach,
    arrPhuTroMotChieu, arrPhuTroHaiChieu,
    arrSeatMotChieu, arrSeatHaiChieu,
    paramsPhiVe
} from "../../common/data/Data";
import HinhThucThanhToan from "../../components/Custom/Form/HinhThucThanhToan";

ThanhToan.propTypes = {};

const label = {
    'tab': 'đặt vé',
    'navTab1': 'Chọn tuyến bay',
    'navTab2': 'Thông tin khách hàng',
    'navTab3': 'Dịch vụ',
    'navTab4': 'Thanh toán'
};

const activeTab = 4;
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"
const dataThanhToan = [
    { name: "Giữ chỗ", value: "giu_cho" },
    { name: "Thanh toán đại lý", value: "thanh_toan_dai_ly" },
];

function ThanhToan(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const {
        data, params, selectedChuyenDi, selectedChuyenVe, thongTinHanhKhach, hanhKhachTreEm,
        hanhKhachEmBe, hanhKhachNguoiLon, paramsPhiVeBb, phiVeBb, phiVe, arrPhuTroMotChieu,
        arrPhuTroHaiChieu, arrSeatMotChieu, arrSeatHaiChieu, paramsPhiVe,
        dataDatVe, arrBaoHiemMotChieu, arrBaoHiemHaiChieu
    } = useSelector(state => ({
        data: state.DatTimVe.data,
        params: state.DatTimVe.params,
        selectedChuyenDi: state.DatTimVe.selectedChuyenDi,
        selectedChuyenVe: state.DatTimVe.selectedChuyenVe,
        thongTinHanhKhach: state.DatTimVe.thongTinHanhKhach,
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        hanhKhachTreEm: state.DatTimVe.hanhKhachTreEm,
        hanhKhachEmBe: state.DatTimVe.hanhKhachEmBe,
        phiVeBb: state.DatTimVe.phiVeBb,
        paramsPhiVeBb: state.DatTimVe.paramsPhiVeBb,
        phiVe: state.DatTimVe.phiVe,
        arrPhuTroMotChieu: state.DatTimVe.arrPhuTroMotChieu,
        arrPhuTroHaiChieu: state.DatTimVe.arrPhuTroHaiChieu,
        arrSeatMotChieu: state.DatTimVe.arrSeatMotChieu,
        arrSeatHaiChieu: state.DatTimVe.arrSeatHaiChieu,
        paramsPhiVe: state.DatTimVe.paramsPhiVe,
        dataDatVe: state.DatTimVe.dataDatVe,
        arrBaoHiemMotChieu: state.DatTimVe.arrBaoHiemMotChieu,
        arrBaoHiemHaiChieu: state.DatTimVe.arrBaoHiemHaiChieu,
    }))

    let { resApi } = useSelector(state => ({
        resApi: state.DatTimVe.resApi
    }))

    useEffect(() => {
        resApi = {}
    }, [])

    const [successDialog, setSuccessDialog] = useState(0)
    const [descriptionDialog, setDescriptionDialog] = useState("")
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState("giu_cho")


    //đặt vé VJ
    const getArrPhi = (arrPerSon) => {
        let arr = []
        let result = []
        Object.keys(arrPerSon).map(function (key, index) {
            arr.push({
                id: arrPerSon[key].id_hanh_khach,
                arr_phi: arrPerSon[key].arr_phi,
                ma_phu_tro: arrPerSon[key].ma_dich_vu,
            })
        });
        // if (JSON.stringify(arr) !== "[]") {
        //     const objIds = arr.reduce((a, { id, arr_phi, ma_phu_tro }) => {
        //         a[id] = a[id] || { id, arr_phi: [], ma_phu_tro : [] }
        //         return {
        //             ...a, ...{
        //                 [id]: {
        //                     id,
        //                     ma_phu_tro: a[id].ma_phu_tro.concat(ma_phu_tro),
        //                     arr_phi: a[id].arr_phi.concat(arr_phi),
        //                 }
        //             }
        //         }
        //     }, {})
        //     result = Object.values(objIds)
        // }
        return arr
    }

    const createDataPhuTro = (dataNguoiLon, dataTreEm, dataPhuTroChuyenDi, dataPhuTroChuyenVe) => {
        let arrPhuTro = [];
        var indexDi = 0;
        var indexVe = 0;
        const arrNguoiLonChuyenDi = { ...dataPhuTroChuyenDi.hanhKhachNguoiLon },
            arrTreEmChuyenDi = { ...dataPhuTroChuyenDi.hanhKhachTreEm },
            arrNguoiLonChuyenVe = { ...dataPhuTroChuyenVe.hanhKhachNguoiLon },
            arrTreEmChuyenVe = { ...dataPhuTroChuyenVe.hanhKhachTreEm },
            arrPhiNguoiLonChuyenDi = getArrPhi(arrNguoiLonChuyenDi),
            arrPhiTreEmChuyenDi = getArrPhi(arrTreEmChuyenDi),
            arrPhiNguoiLonChuyenVe = getArrPhi(arrNguoiLonChuyenVe),
            arrPhiTreEmChuyenVe = getArrPhi(arrTreEmChuyenVe)

        dataNguoiLon.map((val, i) => {
            indexDi = i + 1;
            arrPhiNguoiLonChuyenDi.length > 0 ? arrPhiNguoiLonChuyenDi.map((x) => {
                if (x.ma_phu_tro !== "") {
                    arrPhuTro.push({
                        hanh_khach_id: indexDi,
                        khoa_phu_tro: x.ma_phu_tro,
                        hanh_trinh_id: 1,
                        phan_khuc: 1
                    })
                }
            }) : null
        })

        dataTreEm.map((val, i) => {
            arrPhiTreEmChuyenDi.length > 0 ? arrPhiTreEmChuyenDi.map((x) => {
                if (x.ma_phu_tro !== "") {
                    arrPhuTro.push({
                        hanh_khach_id: i + indexDi + 1,
                        khoa_phu_tro: x.ma_phu_tro,
                        hanh_trinh_id: 1,
                        phan_khuc: 1
                    })
                }
            }) : null
        })

        if (params.loai_ve === "khu_hoi") {
            dataNguoiLon.map((val, i) => {
                indexVe = i + 1;
                arrPhiNguoiLonChuyenVe.length > 0 ? arrPhiNguoiLonChuyenVe.map((x) => {
                    if (x.ma_phu_tro !== "") {
                        arrPhuTro.push({
                            hanh_khach_id: indexVe,
                            khoa_phu_tro: x.ma_phu_tro,
                            hanh_trinh_id: 2,
                            phan_khuc: 1
                        })
                    }
                }) : null
            })
            dataTreEm.map((val, i) => {
                arrPhiTreEmChuyenVe.length > 0 ? arrPhiTreEmChuyenVe.map((x) => {
                    if (x.ma_phu_tro !== "") {
                        arrPhuTro.push({
                            hanh_khach_id: i + indexVe + 1,
                            khoa_phu_tro: x.ma_phu_tro,
                            hanh_trinh_id: 2,
                            phan_khuc: 1
                        })
                    }
                }) : null
            })
        }

        return arrPhuTro;
    }

    const createDataHanhKhach = (dataNguoiLon, dataTreEm, thongTinHanhKhach) => {
        let arrHanhKhach = []
        let arrNguoiLon = dataNguoiLon.map((value, index) => {
            var thongTin = updateTTHK(value, thongTinHanhKhach)
            return {
                loai_hanh_khach: 1,
                thong_tin_hanh_khach: thongTin,
                ghi_chu: ""
            }
        })
        let arrTreEm = dataTreEm.map((value, index) => {
            var thongTin = updateTTHKTreEm(value, thongTinHanhKhach)
            return {
                loai_hanh_khach: 2,
                thong_tin_hanh_khach: thongTin,
                ghi_chu: ""
            }
        })
        arrHanhKhach = arrNguoiLon.concat(arrTreEm);
        return arrHanhKhach
    }

    const createDataChoNgoi = (dataChoNgoiChuyenDi, dataChoNgoiChuyenVe) => {
        let arrChoNgoi = []
        dataChoNgoiChuyenDi.map((val, i) => {
            if (val.ma_phu_tro !== "") {
                arrChoNgoi.push({
                    ma_cho_ngoi: val.ma_phu_tro,
                    hanh_khach_id: i + 1,
                    hanh_trinh_id: 1,
                    phan_khuc: 1
                })
            }
        })
        if (params.loai_ve === "khu_hoi") {
            dataChoNgoiChuyenVe.map((val, i) => {
                if (val.ma_phu_tro !== "") {
                    arrChoNgoi.push({
                        ma_cho_ngoi: val.ma_phu_tro,
                        hanh_khach_id: i + 1,
                        hanh_trinh_id: 2,
                        phan_khuc: 1
                    })
                }
            })
        }
        return arrChoNgoi
    }

    const createVNChangBay = (data) => {
        let arr = []
        if (data && JSON.stringify(data) !== "[]") {
            data.map((val, i) => {
                arr.push({
                    ngay_di: moment(val.ngay_di, "DD-MM-YYYY HH:mm:ss").format("DD-MM-YYYY HH:mm:ss"),
                    ngay_den: moment(val.ngay_den, "DD-MM-YYYY HH:mm:ss").format("DD-MM-YYYY HH:mm:ss"),
                    so_chuyen_bay: val.so_hieu_chuyen_bay ? `${val.so_hieu_chuyen_bay}` : null,
                    ma_dat_cho: val.ma_dat_cho ? val.ma_dat_cho : null,
                    loai_trang_bi: val.loai_trang_bi ? val.loai_trang_bi : null,
                    diem_di: val.san_bay_di.ma_san_bay,
                    diem_den: val.san_bay_den.ma_san_bay,
                    ma_chuyen_bay: val.ma_hang_bay,
                    so_hanh_khach: `${params.nguoi_lon + params.tre_em}`,
                })
            })
        }
        return arr
    }

    const createDetailsHanhTrinh = (dataNguoiLon, dataTreEm, data) => {
        let arr = {}
        if (data && data.chang_bay) {
            let arrCoppy = [...data.chang_bay]
            arr = {
                hanh_khach: createData(dataNguoiLon, dataTreEm, data),
                vn_chang_bay: createVNChangBay(arrCoppy)
            }
        }
        return arr
    }

    const createDataHanhTrinh = (dataNguoiLon, dataTreEm, dataChuyenDi, dataChuyenVe) => {
        const arrMotChieu = createDetailsHanhTrinh(dataNguoiLon, dataTreEm, dataChuyenDi)
        const arrHaiChieu = params.loai_ve === "khu_hoi" ? createDetailsHanhTrinh(dataNguoiLon, dataTreEm, dataChuyenVe) : null
        const arrHanhTrinh = []
        arrHanhTrinh.push(arrMotChieu)
        params.loai_ve === "khu_hoi" ? arrHanhTrinh.push(arrHaiChieu) : null
        return arrHanhTrinh;
    }

    const mergeArray = () => {
        let arrTotal = []
        var arrNguoiLon = []
        var arrTreEm = []
        arrNguoiLon = hanhKhachNguoiLon && hanhKhachNguoiLon.length > 0 ? hanhKhachNguoiLon.map((val) => { return { ...val, loai_hanh_khach: 1 } }) : [];
        arrTreEm = hanhKhachTreEm && hanhKhachTreEm.length > 0 ? hanhKhachTreEm.map((val) => { return { ...val, loai_hanh_khach: 2 } }) : [];
        arrTotal = arrNguoiLon.concat(arrTreEm)
        return arrTotal
    }

    const createBaoHiem = () => {
        let arr = []
        let arrPerSon = mergeArray()
        if (arrBaoHiemMotChieu
            && arrBaoHiemMotChieu.bao_hiem_chuyen_di
            && JSON.stringify(arrBaoHiemMotChieu.bao_hiem_chuyen_di.khoa_bao_hiem) !== "") {
            arrPerSon.map((val, i) => {
                if (val.ma_phu_tro !== "") {
                    arr.push({
                        khoa_bao_hiem: arrBaoHiemMotChieu.bao_hiem_chuyen_di.khoa_bao_hiem,
                        hanh_khach_id: i + 1,
                        hanh_trinh_id: 1,
                    })
                }
            })
            if (params.loai_ve === "khu_hoi") {
                arrPerSon.map((val, i) => {
                    if (val.ma_phu_tro !== "") {
                        arr.push({
                            khoa_bao_hiem: arrBaoHiemHaiChieu.bao_hiem_chuyen_ve.khoa_bao_hiem,
                            hanh_khach_id: i + 1,
                            hanh_trinh_id: 2,
                        })
                    }
                })
            }
        }
        let arrResult = []
        arr.map((val, i) => {
            arrResult = val.khoa_bao_hiem !== "" ? arr : []
        })
        return arrResult
    }

    const bbThongTinLienHe = (info) => {
        const index = info.ho_ten_lien_he
        const arr = {
            danh_xung: info.danh_xung_lien_he,
            ho: info.KhachHangNguoiLon[index].ho,
            ten: info.KhachHangNguoiLon[index].ten,
            so_dien_thoai: info.sdt_lien_he,
            ma_vung: "+84",
            email: info.email_lien_he,
            quoc_gia: info.khu_vuc_lien_he
        }
        return arr
    }

    const creParamsDatVeApi = () => {
        let params = {}
        let arrPhuTro = createDataPhuTro(hanhKhachNguoiLon, hanhKhachTreEm, arrPhuTroMotChieu, arrPhuTroHaiChieu)
        let arrHanhKhach = createDataHanhKhach(hanhKhachNguoiLon, hanhKhachTreEm, thongTinHanhKhach)
        let arrChoNgoi = createDataChoNgoi(arrSeatMotChieu, arrSeatHaiChieu)
        let arrHanhTrinh = createDataHanhTrinh(hanhKhachNguoiLon, hanhKhachTreEm, selectedChuyenDi, selectedChuyenVe)
        let arrBaoHiem = createBaoHiem()
        let bbThongTin = bbThongTinLienHe(thongTinHanhKhach)
        var location = 0;

        // create data em bé trong người lớn
        if (hanhKhachEmBe && hanhKhachEmBe.length > 0) {
            hanhKhachEmBe.map((value, index) => {
                location = value.nguoi_di_cung
                if (arrHanhKhach) {
                    arrHanhKhach[location]["thong_tin_hanh_khach"].em_be.push(
                        {
                            danh_xung: value.danh_xung,
                            ho: value.ho,
                            ten: value.ten,
                            ngay_sinh: moment(value.ngay_sinh).format("DD-MM-YYYY"),
                        }
                    )
                }
            })
        }
        // --create data em bé trong người lớn--

        let arrPerSon = mergeArray()
        let tongTienBaoHiem = 0
        if (JSON.stringify(arrBaoHiemMotChieu) !== "[]" || JSON.stringify(arrBaoHiemHaiChieu) !== "[]") {
            arrPerSon.map((val) => {
                tongTienBaoHiem += arrBaoHiemMotChieu.bao_hiem_chuyen_di.arr_phi.tong_thanh_tien
            })
            if (params.loai_ve === "khu_hoi") {
                tongTienBaoHiem += arrBaoHiemHaiChieu.bao_hiem_chuyen_ve.arr_phi.tong_thanh_tien
            }
        }

        params = {
            hanh_khach: arrHanhKhach,
            bb_thong_tin_lien_he: bbThongTin,
            hanh_trinh: arrHanhTrinh,
            vj_cho_ngoi: arrChoNgoi,
            vj_tt_phu_tro: arrPhuTro,
            vj_tt_bao_hiem: arrBaoHiem,
            vj_tong_tien_bao_hiem: tongTienBaoHiem,
            bb_giu_cho: true,
            ma_hang_bay: selectedChuyenDi["chang_bay"][0].ma_hang_bay
        }
        return params
    }

    //--đặt vé VJ

    //Đặt vé bamboo
    const createTTLienHeDatVeBB = (data, allData) => {
        let arr = []
        if (JSON.stringify(data) !== "{}" && JSON.stringify(allData) !== "{}") {
            arr.push(
                {
                    "danh_xung": allData.danh_xung_lien_he === 1 ? "MR" : "MRS",
                    "ten": data[`${allData.ho_lien_he}`].ten,
                    "ho": data[`${allData.ten_lien_he}`].ho,
                    "uu_tien_lien_he": true,
                    "ngon_ngu_lien_he": "English",
                    "thong_tin_ca_nhan": [
                        {
                            "loai_dia_chi": "LOCATION",
                            "ma_quoc_gia": "VN",
                            "so_dien_thoai": allData.sdt_lien_he,
                            "ma_quoc_gia_sdt": "+84",
                            "cell_phone": "989989005",
                            "cell_number_country_code": "+84",
                            "bat_nhan_thong_bao_den_sms": true,
                            "email": allData.email_lien_he,
                            "bat_nhan_thong_bao_den_email": true
                        }
                    ]
                }
            )
        }
        return arr
    }

    const createArrTTHanhKhachBB = (data) => {
        let arr = []
        if (data && JSON.stringify(data) !== "{}") {
            let arrNguoiLon = data.KhachHangNguoiLon.length > 0 && data.KhachHangNguoiLon.map((val, i) => {
                return ({
                    "id_hanh_khach": i + 1,
                    "quoc_tich": val.quoc_tich === "vn" ? "VNM" : val.quoc_tich,
                    "noi_cu_tru": [
                        {
                            "ma_quoc_gia": val.quoc_tich === "vn" ? "VNM" : val.quoc_tich,
                        }
                    ]
                })
            })
            let arrTreEm = data.KhachHangTreEm.length > 0 ? data.KhachHangTreEm.map((val, i) => {
                return ({
                    "id_hanh_khach": data.KhachHangNguoiLon.length + i + 1,
                    "quoc_tich": val.quoc_tich === "vn" ? "VNM" : val.quoc_tich,
                    "noi_cu_tru": [
                        {
                            "ma_quoc_gia": val.quoc_tich === "vn" ? "VNM" : val.quoc_tich,
                        }
                    ]
                })
            }) : []
            let arrEmBe = data.KhachHangEmBe.length > 0 ? data.KhachHangEmBe.map((val, i) => {
                return (
                    {
                        "id_hanh_khach": data.KhachHangTreEm.length + data.KhachHangNguoiLon.length + i + 1,
                        "quoc_tich": val.quoc_tich === "vn" ? "VNM" : val.quoc_tich,
                        "noi_cu_tru": [
                            {
                                "ma_quoc_gia": val.quoc_tich === "vn" ? "VNM" : val.quoc_tich,
                            }
                        ]
                    })
            }) : []
            arr = [...arrNguoiLon, ...arrTreEm, ...arrEmBe]
        }
        return arr
    }

    const createTTThanhToan = (data) => {
        let arr = []
        if (data && JSON.stringify(data) !== "[]" && data.length > 0) {
            data.map((val, i) => {
                arr.push({
                    "id_hanh_khach": val.id_khach,
                    "so_tien": val.so_tien,
                    "loai_tien": "VND"
                })

            })
        }
        return arr
    }
    //--Đặt vé bamboo--


    const handleDatVe = async () => {
        const status = hinhThucThanhToan === "giu_cho" ? true : false
        try {
            if (status) {
                setLoading(true)
                const arr = { ...paramsPhiVe, is_save: true }
                const response = await postTinhPhiDatCho(arr)
                const arrRequest = {
                    ...creParamsDatVeApi(),
                    bao_gia_id: response.data.bao_gia_tinh_phi_id
                }
                dispatch(guiThongTinDatVeVj(arrRequest))
                // console.log("arrRequest: ", JSON.stringify(arrRequest, null, 2));
                // setLoading(false)
            } else {
                setDescriptionDialog("Xác nhận thanh toán !")
                setSuccessDialog(2)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleConFirm = async () => {
        setLoading(true)
        setSuccessDialog(0)
        try {
            //lưu thông tin chuyến bay
            const arr = { ...paramsPhiVe, is_save: true }
            const res = await postTinhPhiDatCho(arr)

            //đặt vé
            const arrRequest = {
                ...creParamsDatVeApi(),
                bao_gia_id: res.data.bao_gia_tinh_phi_id
            }
            const resReSult = await postDatVe(arrRequest)

            //thanh toán vé
            if (resReSult.code === 200) {
                const arrDatVe = {
                    dat_cho_id: resReSult.data.id,
                    loai_thanh_toan: "AG",
                    xac_nhan: "y",
                    ma_hang_bay: selectedChuyenDi.chang_bay[0].ma_hang_bay,
                    // tong_tien_can_thanh_toan: resReSult.data.so_tien_chua_thanh_toan
                    tong_tien_can_thanh_toan: 1
                }
                dispatch(xuatVeVjThanhToan(arrDatVe))
            } else {
                setSuccessDialog(1)
                setDescriptionDialog(resReSult.message)
                setSuccessDialog(0)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (JSON.stringify(data) === "[]") {
            history.push("/tim-ve")
        }
    }, [data])

    useEffect(() => {
        if (resApi.action === 'dat-ve-vj' && resApi.code === "error") {
            setDescriptionDialog(resApi.message)
            setSuccessDialog(1)
            setLoading(false)
        }
        if (resApi.action === 'dat-ve-vj' && resApi.code === 200
            || resApi.action === 'dat-ve-vj' && resApi.code === "success"
            || resApi.action === 'dat-ve-vn' && resApi.code === "success"
            || resApi.action === 'dat-ve-bb' && resApi.code === "success") {
            setLoading(false)
        }
        if (resApi.action === 'dat-ve-bb' && resApi.code === "error") {
            setDescriptionDialog(resApi.message)
            setSuccessDialog(1)
            setLoading(false)
        }
        setLoading(false)
    }, [resApi.id])


    return (
        <React.Fragment>
            {loading ? <SpinnerLoading message="Vui lòng chờ trong giây lát ..." /> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row className="wizard clearfix">
                                        <Col md="12">
                                            <Row>
                                                <Col lg={12} md={12} className="steps clearfix">
                                                    <ul>
                                                        <NavItem className={classnames({ current: activeTab === 1 })}>
                                                            <NavLink
                                                                className={classnames({ current: activeTab === 1 })}
                                                            >
                                                                <span className="number">1</span> {label.navTab1}
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem className={classnames({ current: activeTab === 2 })}>
                                                            <NavLink
                                                                className={classnames({ active: activeTab === 2 })}
                                                            >
                                                                <span className="number">2</span> {label.navTab2}
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem className={classnames({ current: activeTab === 3 })}>
                                                            <NavLink
                                                                className={classnames({ active: activeTab === 3 })}
                                                            >
                                                                <span className="number">3</span> {label.navTab3}
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem className={classnames({ current: activeTab === 4 })}>
                                                            <NavLink
                                                                className={classnames({ active: activeTab === 4 })}
                                                            >
                                                                <span className="number">4</span> {label.navTab4}
                                                            </NavLink>
                                                        </NavItem>
                                                    </ul>
                                                </Col>
                                            </Row>
                                            {
                                                JSON.stringify(resApi) !== "{}" && resApi.message === "Đặt vé thành công"
                                                    || JSON.stringify(resApi) !== "{}" && resApi.message === "Xuất vé thành công"
                                                    || JSON.stringify(resApi) !== "{}" && resApi.action === "dat-ve-vn" ?
                                                    <>
                                                        {resApi.action === "dat-ve-vj" ?
                                                            <DatVeThanhCong
                                                                storeDataDatVe={dataDatVe}
                                                                storeChuyenDi={selectedChuyenDi}
                                                                storeChuyenVe={selectedChuyenVe}
                                                                phiVe={phiVe}
                                                                params={params}
                                                            /> : null}
                                                        {resApi.action === "dat-ve-vn" ?
                                                            <DatVeThanhCong
                                                                storeDataDatVe={dataDatVe}
                                                                storeChuyenDi={selectedChuyenDi}
                                                                storeChuyenVe={selectedChuyenVe}
                                                                phiVe={phiVe}
                                                                params={params}
                                                            /> : null}
                                                        {resApi.action === "dat-ve-bb" ?
                                                            <DatVeThanhCongBb
                                                                storeDataDatVe={dataDatVe}
                                                                storeChuyenDi={selectedChuyenDi}
                                                                storeChuyenVe={selectedChuyenVe}
                                                                phiVeBb={phiVeBb}
                                                            /> : null}
                                                    </>
                                                    :
                                                    <>
                                                        <Row className="mt-4">
                                                            <Col lg={12} md={12}>
                                                                <Row>
                                                                    <Col lg={9} md={9}>
                                                                        <Card outline color="primary" className="border">
                                                                            <ThongTinChuyenBay
                                                                                params={params}
                                                                                data={JSON.stringify(selectedChuyenDi) !== "{}" ? selectedChuyenDi : null}
                                                                                label="Thông tin chuyến bay đi"
                                                                            />
                                                                            {
                                                                                params.loai_ve === "khu_hoi" ?
                                                                                    <ThongTinChuyenBay
                                                                                        params={params}
                                                                                        data={JSON.stringify(selectedChuyenVe) !== "{}" ? selectedChuyenVe : null}
                                                                                        label="Thông tin chuyến bay về"
                                                                                    />
                                                                                    : null
                                                                            }

                                                                            <TableThongTinHanhKhach />
                                                                            {
                                                                                JSON.stringify(phiVe) !== "[]" ?
                                                                                    <TableThongTinDichVu
                                                                                        dataMotChieu={phiVe && JSON.stringify(phiVe["mot_chieu"]) !== {} ? phiVe["mot_chieu"] : null}
                                                                                        dataHaiChieu={phiVe && JSON.stringify(phiVe["hai_chieu"]) !== {} ? phiVe["hai_chieu"] : null}
                                                                                        params={params} />
                                                                                    : null
                                                                            }

                                                                            <CardBody>
                                                                                <CardTitle>Chi tiết thanh toán</CardTitle>
                                                                                <Row>
                                                                                    <Col className="d-flex align-items-center">
                                                                                        <HinhThucThanhToan
                                                                                            setHinhThucThanhToan={setHinhThucThanhToan}
                                                                                            hinhThucThanhToan={hinhThucThanhToan}
                                                                                            dataThanhToan={dataThanhToan}
                                                                                        />

                                                                                    </Col>
                                                                                </Row>
                                                                                <div className="total-price mt-3">
                                                                                    <label>
                                                                                        {
                                                                                            JSON.stringify(phiVe) !== "[]" ?
                                                                                                `Tổng cộng ${params.loai_ve === "mot_chieu" ?
                                                                                                    moneyFormat(Number(phiVe["mot_chieu"].gia_tien.tong_cong))
                                                                                                    : moneyFormat(
                                                                                                        (Number(phiVe["mot_chieu"].gia_tien.tong_cong)) + (Number(phiVe["hai_chieu"].gia_tien.tong_cong))
                                                                                                    )} VNĐ`
                                                                                                : null
                                                                                        }
                                                                                    </label>
                                                                                </div>
                                                                            </CardBody>
                                                                        </Card>
                                                                    </Col>
                                                                    <Col lg={3} md={3}>
                                                                        {
                                                                            JSON.stringify(phiVe) !== "[]" ?
                                                                                <ThongTinVeBox
                                                                                    params={params}
                                                                                    storeChuyenVe={selectedChuyenVe}
                                                                                    storeChuyenDi={selectedChuyenDi}
                                                                                    priceChuyenDi={phiVe && JSON.stringify(phiVe["mot_chieu"]) !== {} ? phiVe["mot_chieu"] : null}
                                                                                    priceChuyenVe={phiVe && JSON.stringify(phiVe["hai_chieu"]) !== {} ? phiVe["hai_chieu"] : null}
                                                                                /> : null
                                                                        }
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={12} md={12} className="actions clearfix">
                                                                <ul className="d-flex align-items-center justify-content-end">
                                                                    <li className="previous" style={{ marginRight: "20px" }}>
                                                                        <Button size="lg" onClick={() => history.push("/tim-ve/dich-vu")}>
                                                                            Trở về
                                                                        </Button>
                                                                    </li>
                                                                    <li className="next">
                                                                        <Button
                                                                            type="submit"
                                                                            color="primary"
                                                                            disabled={loading}
                                                                            onClick={handleDatVe}
                                                                            size="lg"
                                                                        >
                                                                            {loading ? "Vui lòng chờ ..." : "Đặt vé"}
                                                                        </Button>
                                                                    </li>

                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </>}
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {
                successDialog === 1 &&
                <SweetAlert
                    error
                    title="Thông báo"
                    timeout={2000}
                    confirmBtnBsStyle="success"
                    showCloseButton={false}
                    showConfirm={false}
                    onCancel={() => {
                        setSuccessDialog(0)
                    }}
                    onConfirm={() => {
                        setSuccessDialog(0)
                    }}
                >
                    {descriptionDialog}
                </SweetAlert>
            }
            {
                successDialog === 2 &&
                <SweetAlert
                    title="Thông báo"
                    info
                    showCancel
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    confirmBtnText="Chấp nhận"
                    cancelBtnText="Từ chối"
                    onConfirm={handleConFirm}
                    onCancel={() => {
                        setSuccessDialog(0)
                        setLoading(false)
                    }}
                >
                    {descriptionDialog}
                </SweetAlert>
            }
        </React.Fragment>
    );
}

export default ThanhToan;