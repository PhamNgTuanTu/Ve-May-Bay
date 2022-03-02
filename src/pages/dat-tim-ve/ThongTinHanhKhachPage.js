import classnames from "classnames";
import ThongTinVeBox from "components/Custom/box-thanh-toan/ThongTinVeBox";
import React, { useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, NavItem, NavLink, Row } from 'reactstrap';
import { data, params, resApi, selectedChuyenDi, thongTinHanhKhach, selectedChuyenVe } from "../../common/data/Data";
import ThongTinHanhKhachForm from "../../components/Custom/Form/ThongTinHanhKhach"
import {
    boQuaDatCho,
    getDsBaoHiemVjChuyenDi,
    getDsBaoHiemVjChuyenVe,
    getDsHanhLyBbChuyenDi,
    getDsPhuTroBbChuyenDi,
    hanhKhachEmBe,
    hanhKhachNguoiLon,
    hanhKhachTreEm,
    layDSGheChuyenDiBb,
    layDSGheChuyenDiVj,
    layDSGheChuyenVeVj,
    layDsPhuTroChuyenDi,
    layDsPhuTroChuyenVe,
    setThongTinHanhKhach,
    themVeVaoDatCho,
    tinhPhiVe,
    getDsPhuTroBbChuyenVe,
    getDsHanhLyBbChuyenVe
} from "store/actions";
import SweetAlert from "react-bootstrap-sweetalert";
import moment from "moment";
import { getHoTen } from "helpers/function/function_helper";
import { createData, createDataHanhKhachCoEmBe, updateTTHK, updateTTHKTreEm } from "helpers/function/function_helper";


ThongTinHanhKhach.propTypes = {};
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"

const label = {
    'tab': 'đặt vé',
    'navTab1': 'Chọn tuyến bay',
    'navTab2': 'Thông tin khách hàng',
    'navTab3': 'Dịch vụ',
    'navTab4': 'Thanh toán'
};

const initParams = {
    danh_xung: 1,
    ho: "",
    ten: "",
    ho_ten: "",
    ngay_sinh: "",
    quoc_tich: "",
    nguoi_di_cung: "",
}

const initParamsTreEm = {
    danh_xung: 4,
    ho: "",
    ten: "",
    ho_ten: "",
    ngay_sinh: "",
    quoc_tich: "",
    nguoi_di_cung: "",
}
const initParamsEmBe = {
    danh_xung: 6,
    ho: "",
    ten: "",
    ho_ten: "",
    ngay_sinh: "",
    quoc_tich: "",
    nguoi_di_cung: 0,
}

const activeTab = 2;


function ThongTinHanhKhach(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const { resApi,
        data, params, selectedChuyenDi,
        selectedChuyenVe, thongTinHanhKhach
    } = useSelector(state => ({
        data: state.DatTimVe.data,
        params: state.DatTimVe.params,
        selectedChuyenDi: state.DatTimVe.selectedChuyenDi,
        selectedChuyenVe: state.DatTimVe.selectedChuyenVe,
        thongTinHanhKhach: state.DatTimVe.thongTinHanhKhach,
        resApi: state.DatTimVe.resApi,
    }))

    const sliceArray = (data) => {
        let arr = {}
        if (data && JSON.stringify(data) !== "{}") {
            arr = {
                gia_tien_co_ban: data.gia_tien_co_ban,
                gia_tien: data.gia_tien
            }
        }
        return arr
    }

    const createArrPerSon = (data, dinhDanh) => {
        let arr = []
        if (JSON.stringify(data) !== "{}") {
            for (let i = 0; i < data[`${dinhDanh}`]; i++) {
                if (dinhDanh === "nguoi_lon") {
                    arr.push(initParams)
                } else if (dinhDanh === "tre_em") {
                    arr.push(initParamsTreEm)
                } else {
                    arr.push(initParamsEmBe)
                }
            }
        }
        return arr
    }

    const [successDialog, setSuccessDialog] = useState(false)
    const [descriptionDialog, setDescriptionDialog] = useState("")

    const initialValues = JSON.stringify(thongTinHanhKhach) === "{}" ? {
        KhachHangNguoiLon: createArrPerSon(params, "nguoi_lon"),
        KhachHangTreEm: createArrPerSon(params, "tre_em"),
        KhachHangEmBe: createArrPerSon(params, "em_be"),
        danh_xung_lien_he: 1,
        ho_lien_he: 0,
        ten_lien_he: 0,
        ho_ten_lien_he: 0,
        email_lien_he: "",
        sdt_lien_he: "",
        dia_chi_lien_he: "",
        thanh_pho_lien_he: "",
        khu_vuc_lien_he: "",
    } : thongTinHanhKhach

    const [loadingVN, setLoadingVN] = useState(false)
    const handlePrePage = () => {
        if (JSON.stringify(selectedChuyenDi) !== "{}") {
            if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVN) {
                setLoadingVN(true)
                dispatch(boQuaDatCho())
            } else {
                history.push("/tim-ve/chon-tuyen-bay")
            }
        }
    }

    const createDataHanhKhach = (dataNguoiLon, dataTreEm, thongtinLienHe) => {
        let arrHanhKhach = []
        let arrNguoiLon = dataNguoiLon.map((value, index) => {
            var thongTin = updateTTHK(value, thongtinLienHe)
            return {
                loai_hanh_khach: 1,
                thong_tin_hanh_khach: thongTin
            }
        })
        let arrTreEm = dataTreEm.map((value, index) => {
            var thongTin = updateTTHKTreEm(value, thongtinLienHe)
            return {
                loai_hanh_khach: 2,
                thong_tin_hanh_khach: thongTin
            }
        })
        arrHanhKhach = arrNguoiLon.concat(arrTreEm);
        return arrHanhKhach
    }

    const getDsBaoHiem = (nguoiLon, treEm, emBe, dataForm) => {
        let arrHanhTrinhChuyenDi = [];
        let arrHanhTrinhChuyenVe = [];
        let arrResultChuyenDi = {}
        let arrResultChuyenVe = {}
        let arr = createDataHanhKhach(nguoiLon, treEm, dataForm)
        arrHanhTrinhChuyenDi.push({
            hanh_khach: createData(nguoiLon, treEm, selectedChuyenDi)
        })
        arrResultChuyenDi = {
            hanh_khach: createDataHanhKhachCoEmBe(arr, emBe),
            hanh_trinh: arrHanhTrinhChuyenDi
        }
        dispatch(getDsBaoHiemVjChuyenDi(arrResultChuyenDi))
        if (params.loai_ve === "khu_hoi") {
            let arr = createDataHanhKhach(nguoiLon, treEm, dataForm)
            arrHanhTrinhChuyenVe.push({
                hanh_khach: createData(nguoiLon, treEm, selectedChuyenVe)
            })
            arrResultChuyenVe = {
                hanh_khach: createDataHanhKhachCoEmBe(arr, emBe),
                hanh_trinh: arrHanhTrinhChuyenVe
            }
            dispatch(getDsBaoHiemVjChuyenVe(arrResultChuyenVe))
        }
    }

    const convertArr = (value) => {
        let arr = []
        if (JSON.stringify(value) !== "[]" && value.length > 0) {
            value.map((val, i) => {
                arr.push({
                    ...val,
                    ho: getHoTen(val.ho_ten).ho,
                    ten: getHoTen(val.ho_ten).ten,
                })
            })
        }
        return arr
    }

    const onSubmit = async (values) => {
        setLoading(true)
        await new Promise((r) => setTimeout(r, 1000));
        const arrSubmit = {
            ...values,
            KhachHangNguoiLon: convertArr(values.KhachHangNguoiLon),
            KhachHangTreEm: convertArr(values.KhachHangTreEm),
            KhachHangEmBe: convertArr(values.KhachHangEmBe),
        }
        if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ) {
            getDsBaoHiem(convertArr(values.KhachHangNguoiLon), convertArr(values.KhachHangTreEm), convertArr(values.KhachHangEmBe), values)
        } else if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayBB) {
            getDichVuBb(selectedChuyenDi, selectedChuyenVe, arrSubmit)
        }
        dispatch(hanhKhachNguoiLon(convertArr(values.KhachHangNguoiLon)))
        dispatch(hanhKhachTreEm(convertArr(values.KhachHangTreEm)))
        dispatch(hanhKhachEmBe(convertArr(values.KhachHangEmBe)))
        dispatch(setThongTinHanhKhach(arrSubmit))
        setLoading(false)
        history.push("/tim-ve/dich-vu")
    }

    useEffect(() => {
        if (JSON.stringify(data) === "[]") {
            history.push("/tim-ve")
        }
    }, [data])

    //lấy danh sách dịch vụ Vj
    const getDichVuVj = () => {
        if (params.loai_ve === "mot_chieu") {
            //chỗ ngồi
            dispatch(layDSGheChuyenDiVj({ ma_dat_cho: selectedChuyenDi.ma_dat_cho }))
            //phụ trợ
            dispatch(layDsPhuTroChuyenDi({ ma_dat_cho: selectedChuyenDi.ma_dat_cho }))
        } else {
            //chỗ ngồi
            dispatch(layDSGheChuyenDiVj({ ma_dat_cho: selectedChuyenDi.ma_dat_cho }))
            dispatch(layDSGheChuyenVeVj({ ma_dat_cho: selectedChuyenVe.ma_dat_cho }))
            //phụ trợ
            dispatch(layDsPhuTroChuyenDi({ ma_dat_cho: selectedChuyenDi.ma_dat_cho }))
            dispatch(layDsPhuTroChuyenVe({ ma_dat_cho: selectedChuyenVe.ma_dat_cho }))
        }
    }

    //lấy danh sách dịch vu Bb
    const thongTinNguoiDatBb = (info) => {
        const index = info.ho_ten_lien_he
        const arr = [
            {
                ten_nguoi_dat: info.KhachHangNguoiLon[index].ho,
                ho_nguoi_dat: info.KhachHangNguoiLon[index].ten,
            }
        ]
        return arr
    }

    const detailLoaiHanhKhachBb = (data, type) => {
        const arr = data.length > 0 ? {
            loai: type,
            loai_phu: type,
            so_luong: data.length
        } : null
        return arr
    }

    const loaiHanhKhachBb = (info) => {
        let arrNguoiLon = detailLoaiHanhKhachBb(info.KhachHangNguoiLon, "ADULT")
        let arrTreEm = detailLoaiHanhKhachBb(info.KhachHangTreEm, "CHILD")
        let arrEmBe = detailLoaiHanhKhachBb(info.KhachHangEmBe, "INFANT")
        let arr = [{ ...arrNguoiLon }, { ...arrTreEm }, { ...arrEmBe }]
        let arrResult = []
        arr.map((val) => {
            JSON.stringify(val) !== "{}" ? arrResult.push(val) : null
        })
        return arrResult
    }

    const chiTietHanhTrinhBb = (data) => {
        let arr = [
            {
                id_nhom_chuyen_bay: `${data.chang_bay[0].id_nhom_chuyen_bay}`,
                id_chuyen_bay: `${data.thong_tin_dinh_gia[0].id_chuyen_bay}`,
                so_hieu: `${data.chang_bay[0].so_hieu_chuyen_bay}`,
                ngay_bay: moment(data.chang_bay[0].ngay_di, "DD-MM-YYYY").format("YYYY-MM-DD"),
                trang_thai: data.thong_tin_dinh_gia[0].trang_thai,
                ma_diem_di: data.chang_bay[0].san_bay_di.ma_san_bay,
                ma_diem_den: data.chang_bay[0].san_bay_den.ma_san_bay,
                hang_ghe: data.hang_cho.ma,
                is_through_flight: data.thong_tin_dinh_gia[0].is_through_flight,
                is_dei_exists: data.thong_tin_dinh_gia[0].is_dei_exists,
                fare_class: data.thong_tin_dinh_gia[0].hang_ve,
            }
        ]
        return arr
    }

    const createArrTTGiaVeBb = (data) => {
        let arrCoppy = [...data.thong_tin_dinh_gia]
        let arr = []
        if (data && JSON.stringify(data) !== "{}") {
            arrCoppy.map((val, i) => {
                arr.push({
                    muc_gia_ve: val.muc_gia_ve,
                    gia_ve_co_so: val.gia_ve_co_so,
                    loai_gia_ve: data.loai_ve.ma,
                    loai_pax: val.loai_pax,
                    gia_ve_co_ban: val.gia_tien_co_ban.gia_ve,
                    loai_tien: val.gia_tien_co_ban.tien_te,
                    id_han_che_tra_lai: val.id_han_che_tra_lai,
                    id_giao_dich_gia_ve: val.id_giao_dich_gia_ve,
                    id_chuyen_bay: val.id_chuyen_bay,
                    id_don_vi_dinh_gia: val.id_don_vi_dinh_gia,
                    id_thanh_phan_gia_ve: val.id_thanh_phan_gia_ve
                })
            })
            // arr = [
            //     {
            //         muc_gia_ve: data.thong_tin_dinh_gia[0].muc_gia_ve,
            //         gia_ve_co_so: data.thong_tin_dinh_gia[0].gia_ve_co_so,
            //         loai_gia_ve: data.loai_ve.ma,
            //         loai_pax: data.thong_tin_dinh_gia[0].loai_pax,
            //         gia_ve_co_ban: data.gia_tien_co_ban.gia_ve,
            //         loai_tien: data.gia_tien_co_ban.tien_te,
            //         id_han_che_tra_lai: data.thong_tin_dinh_gia[0].id_han_che_tra_lai,
            //         id_giao_dich_gia_ve: data.thong_tin_dinh_gia[0].id_giao_dich_gia_ve,
            //         id_chuyen_bay: data.thong_tin_dinh_gia[0].id_chuyen_bay,
            //         id_don_vi_dinh_gia: data.thong_tin_dinh_gia[0].id_don_vi_dinh_gia,
            //         id_thanh_phan_gia_ve: data.thong_tin_dinh_gia[0].id_thanh_phan_gia_ve
            //     }
            // ]
        }
        return arr
    }

    const createArrGetDvBamboo = (data, thongTinHanhKhach) => {
        let arr = {
            so_ghe_ngoi: params.nguoi_lon + params.tre_em,
            thong_tin_nguoi_dat: thongTinNguoiDatBb(thongTinHanhKhach),
            loai_hanh_khach: loaiHanhKhachBb(thongTinHanhKhach),
            chi_tiet_hanh_trinh: chiTietHanhTrinhBb(data),
            thong_tin_gia_ve: createArrTTGiaVeBb(data),
            ngay_dat_ve: moment(data.chang_bay[0].ngay_di, "DD-MM-YYYY").format("YYYY-MM-DD"),
        }
        return arr
    }

    const getDichVuBb = (selectChuyenDi, selectChuyenVe, thongTinHanhKhach) => {
        let arr = createArrGetDvBamboo(selectChuyenDi, thongTinHanhKhach)
        dispatch(getDsPhuTroBbChuyenDi(arr))
        dispatch(getDsHanhLyBbChuyenDi(arr))
        if (params.loai_ve === "khu_hoi") {
            let arrChuyenVe = createArrGetDvBamboo(selectChuyenVe, thongTinHanhKhach)
            dispatch(getDsPhuTroBbChuyenVe(arrChuyenVe))
            dispatch(getDsHanhLyBbChuyenVe(arrChuyenVe))
        }
    }

    const createDsChoNgoiBb = (data) => {
        let arr = {}
        if (data && JSON.stringify(data) !== '{}') {
            arr = {
                "chi_tiet_hanh_trinh": [
                    {
                        "id_nhom_chuyen_bay": data.chang_bay[0].id_nhom_chuyen_bay,
                        "id_phan_doan": data.thong_tin_dinh_gia[0].id_chuyen_bay,
                        "so_hieu": data.chang_bay[0].so_hieu_chuyen_bay,
                        "ngay_bay": moment(data.chang_bay[0].ngay_di, "DD-MM-YYYY").format("YYYY-MM-DD"),
                        "diem_di": data.chang_bay[0].san_bay_di.ma_san_bay,
                        "diem_den": data.chang_bay[0].san_bay_den.ma_san_bay,
                        "hang_cabin": data.hang_cho.ma,
                        "trang_thai": data.thong_tin_dinh_gia[0].trang_thai,
                        "is_through_flight": data.thong_tin_dinh_gia[0].is_through_flight,
                        "is_dei_exists": data.thong_tin_dinh_gia[0].is_dei_exists,
                        "thoi_gian_tao": moment(new Date()).format(),
                        "hang_ve": data.thong_tin_dinh_gia[0].hang_ve,
                        "ngay_khoi_hanh_du_kien": moment(data.chang_bay[0].ngay_di, "DD-MM-YYYY h:mm:ss a").format(),
                        "timezone_khoi_hanh": "GMT+07:00",
                        "thoi_gian_den_du_kien": moment(data.chang_bay[0].ngay_den, "DD-MM-YYYY h:mm:ss a").format(),
                        "timzone_den": "GMT+07:00",
                        "thoi_gian_bay": data.tong_so_gio_bay,
                        "stops": 0,
                        "thay_doi_ngay_den": 0
                    }
                ],
                "thong_tin_chuyen_bay": [
                    {
                        "so_hieu": data.chang_bay[0].so_hieu_chuyen_bay,
                        "ngay_bay": moment(data.chang_bay[0].ngay_di, "DD-MM-YYYY").format("YYYY-MM-DD")
                    }
                ],
                "thong_tin_phan_doan": [
                    {
                        "diem_di": data.chang_bay[0].san_bay_di.ma_san_bay,
                        "diem_den": data.chang_bay[0].san_bay_den.ma_san_bay
                    }
                ]
            }
        }
        return arr
    }

    const getChoNgoiBb = () => {
        if (params.loai_ve === "mot_chieu") {
            let arrDi = createDsChoNgoiBb(selectedChuyenDi)
            dispatch(layDSGheChuyenDiBb(arrDi))
        } else {
            let arrDi = createDsChoNgoiBb(selectedChuyenDi)
            let arrVe = createDsChoNgoiBb(selectedChuyenVe)
            dispatch(layDSGheChuyenDiBb(arrDi))
            dispatch(layDSGheChuyenDiBb(arrVe))
        }
    }

    useEffect(() => {
        if (JSON.stringify(selectedChuyenDi) !== "{}") {
            if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ) {
                getDichVuVj()
            } else if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayBB) {
                getChoNgoiBb()
            } else if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVN) {

            }
        }
    }, [selectedChuyenDi, selectedChuyenVe])

    useEffect(() => {
        if (Number(resApi.code) === 200) {
            if (resApi.action === 'bo-qua-dat-cho') {
                setLoadingVN(false)
                history.push("/tim-ve/chon-tuyen-bay")
            }
        }
    }, [resApi])

    return (
        <React.Fragment>
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
                                            <Row className="mt-4">
                                                <Col lg={9} md={9}>
                                                    <ThongTinHanhKhachForm
                                                        initialValues={initialValues}
                                                        onSubmit={onSubmit}
                                                    />
                                                </Col>
                                                <Col lg={3} md={3}>
                                                    <ThongTinVeBox
                                                        params={params}
                                                        storeChuyenVe={selectedChuyenVe}
                                                        storeChuyenDi={selectedChuyenDi}
                                                        priceChuyenDi={sliceArray(selectedChuyenDi)}
                                                        priceChuyenVe={sliceArray(selectedChuyenVe)}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12} md={12} className="actions clearfix">
                                                    <ul className="d-flex align-items-center justify-content-end">
                                                        <li className="previous" style={{ marginRight: "20px" }}>
                                                            <Button size="lg" onClick={handlePrePage} disabled={loadingVN}>
                                                                {loadingVN ? "Vui lòng chờ ..." : "Trở về"}
                                                            </Button>
                                                        </li>
                                                        <li className="next">
                                                            <Button
                                                                form='form-thong-tin'
                                                                type="submit"
                                                                color="primary"
                                                                disabled={loading}
                                                                size="lg"
                                                            >
                                                                {loading ? "Đang kiểm tra ..." : "Tiếp tục"}
                                                            </Button>
                                                        </li>

                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {
                successDialog &&
                <SweetAlert
                    error
                    title="Thông báo"
                    timeout={2000}
                    confirmBtnBsStyle="success"
                    showCloseButton={false}
                    showConfirm={false}
                    onCancel={() => {
                        setSuccessDialog(false)
                    }}
                    onConfirm={() => {
                        setSuccessDialog(false)
                    }}
                >
                    {descriptionDialog}
                </SweetAlert>
            }
        </React.Fragment>
    );
}

export default ThongTinHanhKhach;