import classnames from "classnames";
import ThongTinVeBox from "components/Custom/box-thanh-toan/ThongTinVeBox";
import BaoHiemChuyenDiVj from "components/Custom/DichVu/BaoHiemVj/BaoHiemChuyenDiVj";
import BaoHiemChuyenVeVj from "components/Custom/DichVu/BaoHiemVj/BaoHiemChuyenVeVj";
import PhuTroChoNgoiChuyenDiVj from "components/Custom/DichVu/PhuTroVJ/PhuTroChoNgoiChuyenDiVj";
import PhuTroChoNgoiChuyenVeVj from "components/Custom/DichVu/PhuTroVJ/PhuTroChoNgoiChuyenVeVj";
import ThongTinChuyenBay from "components/Custom/DichVu/ThongTinChuyenBay";
import PaneKhachHangChonGheHaiChieu from "components/Custom/Pane/HaiChieu/PaneKhachHangChonGheHaiChieu";
import PaneKhachHangChonGheMotChieu from "components/Custom/Pane/MotChieu/PaneKhachHangChonGheMotChieu";
import PaneDichVu from "components/Custom/Pane/PaneDichVu";
import PaneDichVuBamboo from "components/Custom/Pane/PaneDichVuBamboo";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Col, Collapse, Container, NavItem, NavLink, Row } from 'reactstrap';
import { saveArrSeatChooseHaiChieu, saveArrSeatChooseMotChieu, tinhPhiVe, xacNhanGiaVeBB } from "store/actions";
import { dataHanhLyBbChuyenDi, dataChoNgoiBbChuyenDi, dataPhuTroBbChuyenDi, arrBaoHiemMotChieu, data, dataChoNgoiVjDi, dataPhuTroVjChuyenDi, hanhKhachEmBe, hanhKhachNguoiLon, hanhKhachTreEm, params, phiVe, selectedChuyenDi, selectedChuyenVe, thongTinHanhKhach } from "../../common/data/Data";

DichVu.propTypes = {};

const label = {
    'tab': 'đặt vé',
    'navTab1': 'Chọn tuyến bay',
    'navTab2': 'Thông tin khách hàng',
    'navTab3': 'Dịch vụ',
    'navTab4': 'Thanh toán'
};

const activeTab = 3;
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"

function DichVu(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const {
        phiVe, data, params, selectedChuyenDi, selectedChuyenVe, hanhKhachNguoiLon,
        hanhKhachTreEm, hanhKhachEmBe, thongTinHanhKhach,
        dataPhuTroBbChuyenDi, dataHanhLyBbChuyenDi,
        dataHanhLyBbChuyenVe, dataPhuTroBbChuyenVe,
        dataPhuTroVjChuyenDi, dataChoNgoiVjDi, dataBaoHiemVjChuyenDi,
        dataBaoHiemVjChuyenVe, resApiPhiVe, dataChoNgoiVjVe, dataPhuTroVjChuyenVe,
        arrAfterSeatMotChieu, arrAfterSeatHaiChieu, paramsPhiVeChonGhe,
    } = useSelector(state => ({
        data: state.DatTimVe.data,
        params: state.DatTimVe.params,
        selectedChuyenDi: state.DatTimVe.selectedChuyenDi,
        selectedChuyenVe: state.DatTimVe.selectedChuyenVe,
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        hanhKhachTreEm: state.DatTimVe.hanhKhachTreEm,
        hanhKhachEmBe: state.DatTimVe.hanhKhachEmBe,
        thongTinHanhKhach: state.DatTimVe.thongTinHanhKhach,
        dataHanhLyBbChuyenDi: state.DatTimVe.dataHanhLyBbChuyenDi,
        dataPhuTroBbChuyenDi: state.DatTimVe.dataPhuTroBbChuyenDi,
        phiVe: state.DatTimVe.phiVe,
        dataHanhLyBbChuyenVe: state.DatTimVe.dataHanhLyBbChuyenVe,
        dataPhuTroBbChuyenVe: state.DatTimVe.dataPhuTroBbChuyenVe,
        resApiPhiVe: state.DatTimVe.resApiPhiVe,
        dataChoNgoiVjDi: state.DatTimVe.dataChoNgoiVjChuyenDi,
        dataChoNgoiVjVe: state.DatTimVe.dataChoNgoiVjChuyenVe,
        dataPhuTroVjChuyenDi: state.DatTimVe.dataPhuTroVjChuyenDi,
        dataPhuTroVjChuyenVe: state.DatTimVe.dataPhuTroVjChuyenVe,
        arrAfterSeatMotChieu: state.DatTimVe.arrAfterSeatMotChieu,
        arrAfterSeatHaiChieu: state.DatTimVe.arrAfterSeatHaiChieu,
        paramsPhiVeChonGhe: state.DatTimVe.paramsPhiVeChonGhe,
        dataBaoHiemVjChuyenDi: state.DatTimVe.dataBaoHiemVjChuyenDi,
        dataBaoHiemVjChuyenVe: state.DatTimVe.dataBaoHiemVjChuyenVe,
    }))

    const [loading, setLoading] = useState(false)
    const [lenChuyenDi, setLenChuyenDi] = useState(0)
    const [lenChuyenVe, setLenChuyenVe] = useState(0)
    const [hangGheChuyenDi, setHangGheChuyenDi] = useState([])
    const [hangGheChuyenVe, setHangGheChuyenVe] = useState([])
    const [successDialog, setSuccessDialog] = useState(false)
    const [descriptionDialog, setDescriptionDialog] = useState("")
    const [indexPersonChuyenDi, setIndexPerSonChuyenDi] = useState(0);
    const [nameChuyenBay, setNameChuyenBay] = useState("");
    const [indexPersonChuyenVe, setIndexPerSonChuyenVe] = useState(0);
    const [nameChuyenBayChuyenVe, setNameChuyenBayChuyenVe] = useState("");
    const [isOpen, setIsOpen] = useState({
        chuyen_di_cho_ngoi: false,
        chuyen_ve_cho_ngoi: false,
    });

    const toggle = (name) => {
        setIsOpen({
            ...isOpen,
            [name]: !isOpen[name]
        })
    }

    useEffect(() => {
        if (JSON.stringify(data) === "[]") {
            history.push("/tim-ve")
        }
    }, [data])

    useEffect(() => {
        if (JSON.stringify(selectedChuyenDi) !== "{}") {
            if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayBB) {
                if (resApiPhiVe.action === 'tinh-phi-ve') {
                    setLoading(false)
                }
            }
        }
    }, [resApiPhiVe.id])

    //chỗ ngồi
    const MotHangGhe = (data, hang) => {
        var arr = []
        if (data && data.length > 0) {
            let arrSeat = [...data]
            for (let i = 0; i < arrSeat.length; i++) {
                if (Number(arrSeat[i]["ban_do_cho_ngoi"].dinh_danh_hang) === Number(hang)) {
                    arr.push(arrSeat[i])
                }
            }
        }
        return arr;
    }

    const getLengthMax = (dataArray) => {
        var maxLength = 0;
        for (var i = 0, length = dataArray.length; i < length; i++) {
            maxLength = Math.max(maxLength, dataArray[i].length);
        };
        return maxLength;
    }

    const getArrayLengthMax = (dataArray) => {
        var arr = []
        var maxlength = getLengthMax(dataArray)
        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i].length === maxlength) {
                arr = dataArray[i]
            }
        }
        return arr
    }

    const getLenAndArray = (array, setParamsGhe, setParamsAlpha) => {
        if (array && typeof array !== "undefined" && array.length > 0) {
            let arrRe = []
            let arrAlpha = []
            array.forEach((val, index) => {
                let arrSeat = [];
                let arrAlphaBet = [];
                for (let i = 0; i < val["tc_cho_ngoi"].length; i++) {
                    if (JSON.stringify(MotHangGhe(val["tc_cho_ngoi"], i + 1)) !== "[]") {
                        arrSeat.push(MotHangGhe(val["tc_cho_ngoi"], i + 1))
                    }
                }
                let arrSeatsMaxlen = getArrayLengthMax(arrSeat);
                for (let j = 0; j < arrSeatsMaxlen.length; j++) {
                    arrAlphaBet.push(`${arrSeatsMaxlen[j].ban_do_cho_ngoi.dinh_danh_cho_ngoi}`)
                }
                arrRe.push(arrSeat)
                arrAlpha.push(arrAlphaBet)
            });
            setParamsGhe(getLengthMax(arrRe))
            setParamsAlpha(arrAlpha)
        }
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

    const createArrPerSonDefault = (array) => {
        let arr = [];
        array && array.length > 0 ?
            array.map((val, i) => {
                arr.push({
                    id: i,
                    ten_nguoi: `${val.ho} ${val.ten}`,
                    ten_ghe: '',
                    ma_phu_tro: '',
                    status: false,
                    gia_ve: 0,
                    thue: 0,
                    tong_tien: 0,
                    arr_phi: {},
                    loai_hanh_khach: val.loai_hanh_khach
                })
            })
            : null
        return arr;
    }

    useEffect(() => {
        //tạo mảng mặc định 1 chiều
        if (JSON.stringify(arrAfterSeatMotChieu) !== "[]") {
            dispatch(saveArrSeatChooseMotChieu(arrAfterSeatMotChieu))
        } else {
            let arrMotChieu = createArrPerSonDefault(mergeArray())
            dispatch(saveArrSeatChooseMotChieu(arrMotChieu))
        }
    }, [arrAfterSeatMotChieu])

    useEffect(() => {
        //tạo mảng mặc định 2 chiều
        if (params.loai_ve === "khu_hoi") {
            if (JSON.stringify(arrAfterSeatHaiChieu) !== "[]") {
                dispatch(saveArrSeatChooseHaiChieu(arrAfterSeatHaiChieu))
            } else {
                let arrHaiChieu = createArrPerSonDefault(mergeArray())
                dispatch(saveArrSeatChooseHaiChieu(arrHaiChieu))
            }
        }
    }, [arrAfterSeatHaiChieu])

    useEffect(() => {
        getLenAndArray(dataChoNgoiVjDi, setLenChuyenDi, setHangGheChuyenDi)
    }, [dataChoNgoiVjDi])

    useEffect(() => {
        getLenAndArray(dataChoNgoiVjVe, setLenChuyenVe, setHangGheChuyenVe)
    }, [dataChoNgoiVjVe])
    //--chỗ ngồi--

    //tính phí trước đặt chỗ
    const createArrTTChuyenBay = (data) => {
        let arr = {}
        if (data && JSON.stringify(data) !== "{}") {
            arr = {
                id_nhom_chuyen_bay: `${data.chang_bay[0].id_nhom_chuyen_bay}`,
                id_chuyen_bay: `${data.thong_tin_dinh_gia[0].id_chuyen_bay}`,
                so_hieu: `${data.chang_bay[0].so_hieu_chuyen_bay}`,
                ngay_bay: moment(data.chang_bay[0].ngay_di, "DD-MM-YYYY").format("DD-MM-YYYY"),
                ma_diem_di: data.chang_bay[0].san_bay_di.ma_san_bay,
                ma_diem_den: data.chang_bay[0].san_bay_den.ma_san_bay,
                hang_ve: data.hang_cho.ma,
                trang_thai: data.thong_tin_dinh_gia[0].trang_thai,
                is_through_flight: data.thong_tin_dinh_gia[0].is_through_flight,
                is_dei_exists: data.thong_tin_dinh_gia[0].is_dei_exists,
                loai_ve: data.thong_tin_dinh_gia[0].hang_ve,
            }
        }
        return arr
    }

    const createArrTTGiaVe = (data) => {
        let arr = []
        if (data && JSON.stringify(data) !== "{}") {
            let arrCoppy = [...data.thong_tin_dinh_gia]
            arrCoppy.map((val, i) => {
                arr.push(val)
            })
            // arr = [
            //     {
            //         muc_gia_ve: data.thong_tin_dinh_gia.muc_gia_ve,
            //         gia_ve_co_so: data.thong_tin_dinh_gia.gia_ve_co_so,
            //         loai_gia_ve: data.loai_ve.ma,
            //         loai_pax: data.thong_tin_dinh_gia.loai_pax,
            //         gia_ve_co_ban: data.gia_tien_co_ban.gia_ve,
            //         loai_tien: "VND",
            //         id_han_che_tra_lai: data.thong_tin_dinh_gia.id_han_che_tra_lai,
            //         id_giao_dich_gia_ve: data.thong_tin_dinh_gia.id_giao_dich_gia_ve,
            //         id_chuyen_bay: data.thong_tin_dinh_gia.id_chuyen_bay,
            //         id_don_vi_dinh_gia: data.thong_tin_dinh_gia.id_don_vi_dinh_gia,
            //         id_thanh_phan_gia_ve: data.thong_tin_dinh_gia.id_thanh_phan_gia_ve
            //     }
            // ]
        }
        return arr
    }

    const arrPerSon = (data, dataSelect, dinhDanh) => {
        let arr = []
        data && data.map((val, i) => {
            arr.push({
                id: dinhDanh === "nguoi_lon" ? i + 1 : (i + 1 + params.nguoi_lon),
                ho: val.ho,
                ten: val.ten,
                danh_xung: val.danh_xung,
                ngay_sinh: val.ngay_sinh === "" ? "" : moment(val.ngay_sinh).format("DD-MM-YYYY"),
                quoc_tich: val.quoc_tich,
                gia_ve: dataSelect.gia_tien_co_ban
            })
        })
        return arr
    }

    const arrPerSonEmBe = (data, dataSelect) => {
        let arr = []
        data && data.map((val, i) => {
            arr.push({
                id: i + 1 + params.nguoi_lon + params.tre_em,
                ho: val.ho,
                ten: val.ten,
                danh_xung: val.danh_xung,
                ngay_sinh: moment(val.ngay_sinh).format("DD-MM-YYYY"),
                quoc_tich: val.quoc_tich,
                gia_ve: dataSelect.gia_tien_co_ban,
                nguoi_di_cung: val.nguoi_di_cung + 1
            })
        })
        return arr
    }

    const createArrTinhPhi = (value, dataSelect) => {
        let arrResult = {}
        let arrNguoiLon = arrPerSon(value.KhachHangNguoiLon, dataSelect, "nguoi_lon")
        let arrTreEm = JSON.stringify(value.KhachHangTreEm) !== "[]" && value.KhachHangTreEm.length > 0 ? arrPerSon(value.KhachHangTreEm, dataSelect, "tre_em") : []
        let arrEmBe = JSON.stringify(value.KhachHangEmBe) !== "[]" && value.KhachHangEmBe.length > 0 ? arrPerSonEmBe(value.KhachHangEmBe, dataSelect) : []
        let arrPhi = JSON.stringify(dataSelect) !== "{}" && dataSelect ? dataSelect["phi_ve"] : []
        let maHangBay = JSON.stringify(dataSelect) !== "{}" && dataSelect ? dataSelect["chang_bay"][0].ma_hang_bay : ""
        return arrResult = {
            nguoi_lon: arrNguoiLon,
            tre_em: arrTreEm,
            em_be: arrEmBe,
            phi_ve: arrPhi,
            chang_bay: dataSelect.chang_bay,
            ma_hang_bay: maHangBay
        }
    }


    //tính phí vé VJ
    const phiVeVj = () => {
        if (JSON.stringify(paramsPhiVeChonGhe) !== "{}") {
            dispatch(tinhPhiVe(paramsPhiVeChonGhe))
        } else {
            let arr = {}
            if (params.loai_ve === "mot_chieu") {
                arr = {
                    mot_chieu: createArrTinhPhi(thongTinHanhKhach, selectedChuyenDi),
                    is_save: false
                }
            } else {
                arr = {
                    mot_chieu: createArrTinhPhi(thongTinHanhKhach, selectedChuyenDi),
                    hai_chieu: createArrTinhPhi(thongTinHanhKhach, selectedChuyenVe),
                    is_save: false
                }
            }
            // console.log("arr: ", JSON.stringify(arr,null,2));
            dispatch(tinhPhiVe(arr))
        }
    }

    //tính phí vé VN
    const phiVeVn = () => {
        let arr = {}
        if (params.loai_ve === "mot_chieu") {
            arr = {
                mot_chieu: createArrTinhPhi(thongTinHanhKhach, selectedChuyenDi)
            }
        } else {
            arr = {
                mot_chieu: createArrTinhPhi(thongTinHanhKhach, selectedChuyenDi),
                hai_chieu: createArrTinhPhi(thongTinHanhKhach, selectedChuyenVe)
            }
        }
        dispatch(tinhPhiVe(arr))
        // console.log("arr: ", JSON.stringify(arr, null, 2));
    }

    //tính phí vé Bb
    const phiVeBb = () => {
        setLoading(true)
        if (JSON.stringify(paramsPhiVeChonGhe) !== "{}") {
            dispatch(tinhPhiVe(paramsPhiVeChonGhe))
            // console.log("arr: ", JSON.stringify(paramsPhiVeChonGhe, null, 2));
        } else {
            let arr = {}
            if (params.loai_ve === "mot_chieu") {
                arr = {
                    mot_chieu: {
                        ...createArrTinhPhi(thongTinHanhKhach, selectedChuyenDi),
                        chuyen_bay: createArrTTChuyenBay(selectedChuyenDi),
                        thong_tin_ve: createArrTTGiaVe(selectedChuyenDi),
                        chang_bay: selectedChuyenDi.chang_bay,
                        dat_giu_cho: true
                    },
                    is_save: false,
                }
            } else {
                arr = {
                    mot_chieu: {
                        ...createArrTinhPhi(thongTinHanhKhach, selectedChuyenDi),
                        chuyen_bay: createArrTTChuyenBay(selectedChuyenDi),
                        thong_tin_ve: createArrTTGiaVe(selectedChuyenDi),
                        chang_bay: selectedChuyenDi.chang_bay,
                        dat_giu_cho: true
                    },
                    hai_chieu: {
                        ...createArrTinhPhi(thongTinHanhKhach, selectedChuyenVe),
                        chuyen_bay: createArrTTChuyenBay(selectedChuyenVe),
                        thong_tin_ve: createArrTTGiaVe(selectedChuyenVe),
                        chang_bay: selectedChuyenVe.chang_bay,
                        dat_giu_cho: true
                    },
                    is_save: false
                }
            }
            dispatch(tinhPhiVe(arr))
            // console.log("arr: ", JSON.stringify(arr, null, 2));
        }
    }

    useEffect(() => {
        if (JSON.stringify(selectedChuyenDi) !== "{}") {
            if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ) {
                phiVeVj()
            } else if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayBB) {
                phiVeBb()
            } else if (selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVN) {
                phiVeVn()
            }
        }
    }, [selectedChuyenDi])

    //--tính phí trước đặt chỗ--

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
                                                <Col md="9">
                                                    <Card outline color="primary" className="border">
                                                        <CardBody>
                                                            {params.loai_ve === "khu_hoi" ? <CardTitle>Dịch vụ chuyến đi</CardTitle> : null}
                                                            <ThongTinChuyenBay
                                                                data={selectedChuyenDi}
                                                            />
                                                            <Row className="mb-2">
                                                                <Col md="12">
                                                                    <Row onClick={() => toggle("chuyen_di_cho_ngoi")} className="title-auxiliary">
                                                                        <Col md={6}>
                                                                            <strong className="title-auxiliary__strong">
                                                                                Thông tin chỗ ngồi
                                                                            </strong>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <div className="icon-drop-auxiliary">
                                                                                <i className={isOpen["chuyen_di_cho_ngoi"] ? "fas fa-chevron-circle-down icon-drop-down" : "fas fa-chevron-circle-down icon-drop-right"}></i>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                    <Collapse isOpen={isOpen["chuyen_di_cho_ngoi"]}>
                                                                        <Card className="mb-0">
                                                                            <CardBody>
                                                                                {
                                                                                    JSON.stringify(selectedChuyenDi) !== "{}" &&
                                                                                        selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                                                        <PhuTroChoNgoiChuyenDiVj
                                                                                            dataChoNgoiVjDi={dataChoNgoiVjDi}
                                                                                            lenChuyenDi={lenChuyenDi}
                                                                                            indexPersonChuyenDi={indexPersonChuyenDi}
                                                                                            setIndexPerSonChuyenDi={setIndexPerSonChuyenDi}
                                                                                            setNameChuyenBay={setNameChuyenBay}
                                                                                            hangGheChuyenDi={hangGheChuyenDi}
                                                                                        />
                                                                                        : null
                                                                                }

                                                                                {/* BB here */}
                                                                                {/* VN here */}

                                                                            </CardBody>
                                                                        </Card>
                                                                    </Collapse>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-1">
                                                                <Col md="12">
                                                                    {
                                                                        JSON.stringify(selectedChuyenDi) !== "{}" &&
                                                                            selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                                            <PaneDichVu dataPhuTro={dataPhuTroVjChuyenDi} loaiChuyenBay="chuyen_di" />
                                                                            : null
                                                                    }

                                                                    {
                                                                        JSON.stringify(selectedChuyenDi) !== "{}" &&
                                                                            selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayBB ?
                                                                            <PaneDichVuBamboo
                                                                                dataPhuTro={JSON.stringify(dataPhuTroBbChuyenDi) !== "[]" ? dataPhuTroBbChuyenDi["danh_sach_phu_tro"] : null}
                                                                                dataHanhLy={JSON.stringify(dataHanhLyBbChuyenDi) !== "[]" ? dataHanhLyBbChuyenDi["dich_vu_phu_tro"] : null}
                                                                                loaiChuyenBay="chuyen_di"
                                                                            />
                                                                            : null
                                                                    }

                                                                    {/* VN here */}
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-2">
                                                                <Col md="12">
                                                                    {
                                                                        JSON.stringify(selectedChuyenDi) !== "{}" &&
                                                                            selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                                            <BaoHiemChuyenDiVj
                                                                                data={dataBaoHiemVjChuyenDi}
                                                                            />
                                                                            : null
                                                                    }

                                                                    {/* BB here */}
                                                                    {/* VN here */}
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>

                                                    {
                                                        params.loai_ve === "khu_hoi" ?
                                                            <Card outline color="primary" className="border">
                                                                <CardBody>
                                                                    {params.loai_ve === "khu_hoi" ? <CardTitle>Dịch vụ chuyến về</CardTitle> : null}
                                                                    <ThongTinChuyenBay
                                                                        data={selectedChuyenVe}
                                                                    />
                                                                    <Row className="mb-2">
                                                                        <Col md="12">
                                                                            <Row onClick={() => toggle("chuyen_ve_cho_ngoi")} className="title-auxiliary">
                                                                                <Col md={6}>
                                                                                    <strong className="title-auxiliary__strong">
                                                                                        Thông tin chỗ ngồi
                                                                                    </strong>
                                                                                </Col>
                                                                                <Col md={6}>
                                                                                    <div className="icon-drop-auxiliary">
                                                                                        <i className={isOpen["chuyen_ve_cho_ngoi"] ? "fas fa-chevron-circle-down icon-drop-down" : "fas fa-chevron-circle-down icon-drop-right"}></i>
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                            <Collapse isOpen={isOpen["chuyen_ve_cho_ngoi"]}>
                                                                                <Card className="mb-0">
                                                                                    <CardBody>
                                                                                        {
                                                                                            JSON.stringify(selectedChuyenVe) !== "{}" &&
                                                                                                selectedChuyenVe["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                                                                <PhuTroChoNgoiChuyenVeVj
                                                                                                    dataChoNgoiVjVe={dataChoNgoiVjVe}
                                                                                                    lenChuyenVe={lenChuyenVe}
                                                                                                    indexPersonChuyenVe={indexPersonChuyenVe}
                                                                                                    setIndexPerSonChuyenVe={setIndexPerSonChuyenVe}
                                                                                                    setNameChuyenBayChuyenVe={setNameChuyenBayChuyenVe}
                                                                                                    hangGheChuyenVe={hangGheChuyenVe}
                                                                                                />
                                                                                                : null
                                                                                        }

                                                                                        {/* BB here */}
                                                                                        {/* VN here */}

                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Collapse>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-2">
                                                                        <Col md="12">
                                                                            {
                                                                                JSON.stringify(selectedChuyenVe) !== "{}" &&
                                                                                    selectedChuyenVe["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                                                    <PaneDichVu dataPhuTro={dataPhuTroVjChuyenVe} loaiChuyenBay="chuyen_ve" />
                                                                                    : null
                                                                            }

                                                                            {
                                                                                JSON.stringify(selectedChuyenVe) !== "{}" &&
                                                                                    selectedChuyenVe["chang_bay"][0].ten_hang_bay === hangBayBB ?
                                                                                    <PaneDichVuBamboo
                                                                                        dataPhuTro={JSON.stringify(dataPhuTroBbChuyenVe) !== "[]" ? dataPhuTroBbChuyenVe["danh_sach_phu_tro"] : null}
                                                                                        dataHanhLy={JSON.stringify(dataHanhLyBbChuyenVe) !== "[]" ? dataHanhLyBbChuyenVe["dich_vu_phu_tro"] : null}
                                                                                        loaiChuyenBay="chuyen_ve"
                                                                                    />
                                                                                    : null
                                                                            }
                                                                            {/* VN here */}
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-2">
                                                                        <Col md="12">
                                                                            {
                                                                                JSON.stringify(selectedChuyenVe) !== "{}" &&
                                                                                    selectedChuyenVe["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                                                    <BaoHiemChuyenVeVj
                                                                                        data={dataBaoHiemVjChuyenVe}
                                                                                    />
                                                                                    : null
                                                                            }

                                                                            {/* BB here */}
                                                                            {/* VN here */}
                                                                        </Col>
                                                                    </Row>
                                                                </CardBody>
                                                            </Card> : null
                                                    }
                                                    <Row>
                                                        <Col lg={12} md={12} className="actions clearfix">
                                                            <ul className="d-flex align-items-center justify-content-end">
                                                                <li className="previous" style={{ marginRight: "20px" }}>
                                                                    <Button size="lg" onClick={() => history.push("/tim-ve/thong-tin-hanh-khach")}>
                                                                        Trở về
                                                                    </Button>
                                                                </li>
                                                                <li className="next">
                                                                    <Button
                                                                        block
                                                                        form='form-thong-tin'
                                                                        type="submit"
                                                                        color="primary"
                                                                        onClick={() => history.push("/tim-ve/thanh-toan")}
                                                                        disabled={loading}
                                                                        size="lg"
                                                                    >
                                                                        {loading ? "vui lòng chờ ..." : "Tiếp tục"}
                                                                    </Button>
                                                                </li>

                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={3} md={3}>
                                                    {
                                                        JSON.stringify(phiVe) !== "[]" ?
                                                            <>
                                                                <ThongTinVeBox
                                                                    params={params}
                                                                    storeChuyenVe={selectedChuyenVe}
                                                                    storeChuyenDi={selectedChuyenDi}
                                                                    priceChuyenDi={phiVe && JSON.stringify(phiVe["mot_chieu"]) !== {} ? phiVe["mot_chieu"] : null}
                                                                    priceChuyenVe={phiVe && JSON.stringify(phiVe["hai_chieu"]) !== {} ? phiVe["hai_chieu"] : null}
                                                                />
                                                            </>
                                                            : null
                                                    }
                                                    {
                                                        JSON.stringify(selectedChuyenDi) !== "{}" && selectedChuyenDi["chang_bay"][0].ten_hang_bay === hangBayVJ || JSON.stringify(selectedChuyenVe) !== '{}' && selectedChuyenVe["chang_bay"][0].ten_hang_bay === hangBayVJ ?
                                                            <>
                                                                <PaneKhachHangChonGheMotChieu
                                                                    indexPerson={indexPersonChuyenDi}
                                                                    setIndexPerSon={setIndexPerSonChuyenDi}
                                                                    nameChuyenBay={nameChuyenBay}
                                                                    title="Chuyến đi"
                                                                />
                                                                {
                                                                    params.loai_ve === "khu_hoi" ?
                                                                        <PaneKhachHangChonGheHaiChieu
                                                                            indexPerson={indexPersonChuyenVe}
                                                                            setIndexPerSon={setIndexPerSonChuyenVe}
                                                                            nameChuyenBay={nameChuyenBayChuyenVe}
                                                                            title="Chuyến về"
                                                                        /> : null
                                                                }
                                                            </>
                                                            : null
                                                    }
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

export default DichVu;