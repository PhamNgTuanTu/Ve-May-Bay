import {
    AllCheckerCheckbox,
    Checkbox, CheckboxGroup
} from "@createnl/grouped-checkboxes";
import classnames from "classnames";
import { airportVNCode } from "common/data/options/airportVNCode";
import { nguoiLonOpt, treEmOpt } from "common/data/options/passengerToTal";
import HangChoFilter from "components/Custom/filterHangBay/hangChoFilter";
import TimVeForm from "components/Custom/Form/TimVeForm";
import SliderCalendar from "components/Custom/SliderCalendar";
import SpinnerLoading from "components/Custom/SpinnerLoading";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { multiSelectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory, {
    PaginationListStandalone,
    PaginationProvider
} from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, NavItem, NavLink, Row } from 'reactstrap';
import {
    chuyenBayDiDaChon,
    chuyenBayVeDaChon,
    layDSChuyenBay,
    saveAfterArrSeatChooseHaiChieu,
    saveAfterArrSeatChooseMotChieu,
    saveArrSeatChooseHaiChieu,
    saveArrSeatChooseMotChieu,
    saveNameSeatChooseHaiChieu,
    saveNameSeatChooseMotChieu,
    setThongTinHanhKhach,
    tinhPhiVeChonGhe
} from "store/actions";
import { data, params, resApi, selectedChuyenDi, thongTinHanhKhach, selectedChuyenVe } from "../../common/data/Data";


ChonTuyenBay.propTypes = {};
const label = {
    'tab': 'đặt vé',
    'navTab1': 'Chọn tuyến bay',
    'navTab2': 'Thông tin khách hàng',
    'navTab3': 'Dịch vụ',
    'navTab4': 'Thanh toán'
};
const hangbayOptions = {
    0: "Vietnam Airline",
    1: "Vietjet Airlines",
    2: "Bamboo Airlines"
}
let hangChoMotChieuFilter = () => { }
let hangChoHaiChieuFilter = () => { }
let hangBayMotChieuFilter = () => { }
let hangBayHaiChieuFilter = () => { }

const activeTab = 1;
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"

function ChonTuyenBay(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    let {
        resApi, data, params, selectedChuyenDi, selectedChuyenVe,
        storeFilterChecked } = useSelector(state => ({
            resApi: state.DatTimVe.resApi,
            data: state.DatTimVe.data,
            params: state.DatTimVe.params,
            selectedChuyenDi: state.DatTimVe.selectedChuyenDi,
            selectedChuyenVe: state.DatTimVe.selectedChuyenVe,
            storeFilterChecked: state.DatTimVe.selectedFilters,
        }))
    const [initialValues, setInitialValues] = useState({
        loai_ve: "",
        diem_di: "",
        loai_dinh_dang: 2,
        diem_den: "",
        nguoi_lon: 1,
        tre_em: 0,
        em_be: 0,
        ngay_di: "",
        ngay_ve: ""
    })

    const [diemDi, setDiemDi] = useState(null)
    const [diemDen, setDiemDen] = useState(null)
    const [dataChuyenBay, setDataChuyenBay] = useState([])
    const [dataChuyenBayVe, setDataChuyenBayVe] = useState([])
    const [hidePrice, setHideprice] = useState(true)
    const [hangChoOptions, setHangChoOptions] = useState({})
    const [hangChoVietject, setHangChoVietject] = useState([])
    const [hangChoBamBoo, setHangChoBamBoo] = useState([])
    const [hangChoVietNam, setHangChoVietNam] = useState([])
    const [disabledBtn, setDisabledBtn] = useState(false)

    const [dropdownOpenBB, setOpenBB] = useState(false);
    const [dropdownOpenVN, setOpenVN] = useState(false);
    const [dropdownOpenVJ, setOpenVJ] = useState(false);
    const [checkVJ, setCheckedVJ] = useState(false)
    const [checkBB, setCheckedBB] = useState(false)
    const [checkVN, setCheckedVN] = useState(false)
    const [onChange, setOnChange] = useState({});

    const [chooseChuyenDi, setChooseChuyenDi] = useState(false)
    const [chooseChuyenVe, setChooseChuyenVe] = useState(false)

    const toggleBB = () => setOpenBB(!dropdownOpenBB);
    const toggleVN = () => setOpenVN(!dropdownOpenVN);
    const toggleVJ = () => setOpenVJ(!dropdownOpenVJ);

    const [disablebtnNex, setDisablebtnNex] = useState(true)

    const defaultSorted = [
        {
            dataField: "ngay_di",
            order: "asc",
        },
    ]

    const pageOptions = {
        sizePerPage: 10,
        totalSize: dataChuyenBay.length,
        custom: true,
        showTotal: true,
        hideSizePerPage: false,
        withFirstAndLast: false
    }

    const pageOptionsChuyenVe = {
        sizePerPage: 10,
        totalSize: dataChuyenBayVe.length,
        custom: true,
        showTotal: true,
        hideSizePerPage: false,
        withFirstAndLast: false
    }

    const [soft, setDoft] = useState({
        ma_chuyen_bay: false,
        cat_canh: false,
        ha_canh: false,
        gia: false,
        gia_vat: false,
        ma_chuyen_bay_ve: false,
        cat_canh_ve: false,
        ha_canh_ve: false,
        gia_ve: false,
        gia_vat_ve: false
    })

    const changSoft = (name) => {
        setDoft(preState => ({
            ...preState,
            [name]: !soft[name]
        }))
    }

    const handleChonCHuyenBay = (data, allData) => {
        const dataResult = { ...allData, ...data }
        console.log("row: ", dataResult);
        dispatch(chuyenBayDiDaChon(dataResult))
        setChooseChuyenDi(true)
        //reset
        dispatch(tinhPhiVeChonGhe({}))
        dispatch(saveArrSeatChooseMotChieu([]))
        dispatch(saveAfterArrSeatChooseMotChieu([]))
        dispatch(saveNameSeatChooseMotChieu([]))
    }

    const handleChonCHuyenBayVe = (data, allData) => {
        const dataResult = { ...allData, ...data }
        console.log("row: ", dataResult);
        dispatch(chuyenBayVeDaChon(dataResult))
        setChooseChuyenVe(true)
        //reset
        dispatch(tinhPhiVeChonGhe({}))
        dispatch(saveArrSeatChooseHaiChieu([]))
        dispatch(saveAfterArrSeatChooseHaiChieu([]))
        dispatch(saveNameSeatChooseHaiChieu([]))
    }

    const selectRowChuyenDi = {
        mode: 'radio',
        hideSelectAll: true,
        clickToSelect: true,
        clickToExpand: true,
        onSelect: (row) => {
            if (params.loai_dinh_dang === 1) {
                console.log("row: ", row);
                dispatch(chuyenBayDiDaChon(row))
                setChooseChuyenDi(true)
            }
        },
        classes: 'đang-chon',
        bgColor: '#eef0fc'
    };

    const selectRowChuyenVe = {
        mode: 'radio',
        hideSelectAll: true,
        clickToSelect: true,
        clickToExpand: true,
        onSelect: (row) => {
            if (params.loai_dinh_dang === 1) {
                console.log("row: ", row);
                dispatch(chuyenBayVeDaChon(row))
                setChooseChuyenVe(true)
            }
        },
        classes: 'đang-chon',
        bgColor: '#eef0fc'
    };

    const expandRow = {
        parentClassName: 'chon-tuyen-bay-row',
        onlyOneExpanding: true,
        renderer: (row) => (
            <Row>
                <Col md="12" className="mx-1 px-1">
                    <Row>
                        {
                            row.tuy_chon_gia_ve.map((val, i) => {
                                return (
                                    <Col md="4" xl="3" xs="4" key={i}>
                                        <label key={i} className="rad-label px-2 mx-3 mb-0">
                                            <input type="radio" className="rad-input" name="chon-chuyen-bay" onChange={() => handleChonCHuyenBay(val, row)} />
                                            <div className="rad-design mt-2"></div>
                                            <div className="rad-text ">
                                                <span>{`Còn ${val.so_ghe_trong} ghế`}</span>
                                                <span>{val.loai_ve.mo_ta}</span>
                                                <span>
                                                    {Number(val.gia_tien_co_ban.tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                                </span>
                                            </div>
                                        </label>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        )
    };

    const expandRowChuyenVe = {
        parentClassName: 'chon-tuyen-bay-row',
        onlyOneExpanding: true,
        renderer: (row) => (
            <Row>
                <Col md="12" className="mx-1 px-1">
                    <Row>
                        {
                            row.tuy_chon_gia_ve.map((val, i) => {
                                return (
                                    <Col md="4" xl="3" xs="4" key={i}>
                                        <label key={i} className="rad-label px-2 mx-3 mb-0">
                                            <input type="radio" className="rad-input" name="chon-chuyen-bay-ve" onChange={() => handleChonCHuyenBayVe(val, row)} />
                                            <div className="rad-design mt-2"></div>
                                            <div className="rad-text">
                                                <span>{`Còn ${val.so_ghe_trong} ghế`}</span>
                                                <span>{val.loai_ve.mo_ta}</span>
                                                <span>
                                                    {Number(val.gia_tien_co_ban.tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                                </span>
                                            </div>
                                        </label>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        )
    };

    const columnsMotChieu = [
        {
            text: "Tên Hãng bay",
            dataField: "chang_bay[0].ten_hang_bay",
            sort: true,
            classes: 'd-none',
            formatter: (ten_hang_bay, dataChuyenBay) => (
                <>
                    <div className="text-truncate mb-0 d-flex align-items-center justify-content-center">
                        {ten_hang_bay}
                    </div>
                </>
            ),
            filter: multiSelectFilter({
                options: hangbayOptions,
                getFilter: (filter) => {
                    hangBayMotChieuFilter = filter
                },
                style: { display: "none" }
            }),
            headerClasses: 'table-light d-none'
        },
        {
            text: "Hãng bay",
            dataField: "logo",
            formatter: (logo, dataChuyenBay) => (
                <Row className="m-2">
                    <Col>
                        <img src={dataChuyenBay.chang_bay[0].logo} alt={dataChuyenBay.chang_bay[0].logo} width="100" />
                    </Col>
                </Row>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Mã chuyến bay",
            dataField: "ma_chuyen_bay",
            sort: true,
            sortValue: (cell, row) => row['chang_bay'][0].ma_chuyen_bay,
            formatter: (ma_chuyen_bay, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p key={i} className="d-inline-block text-truncate mb-0">
                                        {val.ma_chuyen_bay}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("ma_chuyen_bay")}>Mã chuyến bay
                        <i style={{ marginLeft: "5px" }} className={soft["ma_chuyen_bay"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Cất cánh",
            dataField: "san_bay_di.ma_san_bay",
            sort: true,
            sortValue: (cell, row) => row['chang_bay'][0].ngay_di,
            formatter: (san_bay_di, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                                        {val.san_bay_di.ma_san_bay}
                                        <br></br>
                                        {moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("cat_canh")}>Cất cánh
                        <i style={{ marginLeft: "5px" }} className={soft["cat_canh"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Hạ cánh",
            sort: true,
            dataField: "san_bay_den.ma_san_bay",
            sortValue: (cell, row) => row['chang_bay'][0].ngay_den,
            formatter: (san_bay_den, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                                        {val.san_bay_den.ma_san_bay}
                                        <br></br>
                                        {moment(val.ngay_den, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("ha_canh")}>Hạ cánh
                        <i style={{ marginLeft: "5px" }} className={soft["ha_canh"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Loại vé",
            sort: true,
            classes: `${params.loai_dinh_dang === 2 ? "" : "d-none"}`,
            dataField: "tuy_chon_gia_ve_mac_dinh.loai_ve.mo_ta",
            formatter: (loai_ve, dataChuyenBay) => (
                <Row>
                    {
                        dataChuyenBay 
                        && dataChuyenBay.tuy_chon_gia_ve_mac_dinh 
                        && dataChuyenBay.tuy_chon_gia_ve_mac_dinh.gia_tien_co_ban ?
                            <Col md="12" className="mx-1 px-1">
                                <div className="d-flex align-items-center flex-column">
                                    <span>{loai_ve}</span>
                                    <span>
                                        {Number(dataChuyenBay.tuy_chon_gia_ve_mac_dinh.gia_tien_co_ban.tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                            </Col>
                            : null
                    }
                </Row>
            ),
            headerClasses: `${params.loai_dinh_dang === 2 ? "table-light text-center" : "d-none"}`
        },
        {
            text: "Giá",
            sort: true,
            hidden: hidePrice,
            classes: `${params.loai_dinh_dang === 1 ? "" : "d-none"}`,
            dataField: "gia_tien_co_ban.gia_ve",
            formatter: (gia_ve, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0">
                        {Number(gia_ve).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("gia")}>Giá
                        <i style={{ marginLeft: "5px" }} className={soft["gia"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: `${params.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        },
        {
            text: "Giá (VAT)",
            sort: true,
            hidden: !hidePrice,
            classes: `${params.loai_dinh_dang === 1 ? "" : "d-none"}`,
            dataField: "gia_tien_co_ban.tong_cong",
            formatter: (tong_cong, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0">
                        {Number(tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("gia_vat")}>Giá (VAT)
                        <i style={{ marginLeft: "5px" }} className={soft["gia_vat"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: `${params.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        },
        {
            text: "Hạng chỗ",
            dataField: "loai_ve.mo_ta",
            sort: true,
            classes: `${params.loai_dinh_dang === 1 ? "" : "d-none"}`,
            formatter: (mo_ta, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                        {mo_ta}
                        <br></br>
                        Còn {dataChuyenBay.so_ghe_trong} Vé
                    </p>
                </>
            ),
            filter: multiSelectFilter({
                options: hangChoOptions,
                getFilter: (filter) => {
                    hangChoMotChieuFilter = filter
                },
                style: { display: "none" }
            }),
            headerClasses: `${params.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        }
    ]

    const columnsHaiChieu = [
        {
            text: "Tên Hãng bay",
            dataField: "chang_bay[0].ten_hang_bay",
            sort: true,
            classes: 'd-none',
            formatter: (ten_hang_bay, dataChuyenBay) => (
                <>
                    <div className="text-truncate mb-0 d-flex align-items-center justify-content-center">
                        {ten_hang_bay}
                    </div>
                </>
            ),
            filter: multiSelectFilter({
                options: hangbayOptions,
                getFilter: (filter) => {
                    hangBayHaiChieuFilter = filter
                },
                style: { display: "none" }
            }),
            headerClasses: 'table-light d-none'
        },
        {
            text: "Hãng bay",
            dataField: "logo",
            formatter: (logo, dataChuyenBay) => (
                <Row className="m-2">
                    <Col>
                        <img src={dataChuyenBay.chang_bay[0].logo} alt={dataChuyenBay.chang_bay[0].logo} width="100" />
                    </Col>
                </Row>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Mã chuyến bay",
            dataField: "ma_chuyen_bay",
            sort: true,
            sortValue: (cell, row) => row['chang_bay'][0].ma_chuyen_bay,
            formatter: (ma_chuyen_bay, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p key={i} className="d-inline-block text-truncate mb-0">
                                        {val.ma_chuyen_bay}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("ma_chuyen_bay_ve")}>Mã chuyến bay
                        <i style={{ marginLeft: "5px" }} className={soft["ma_chuyen_bay_ve"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Cất cánh",
            dataField: "san_bay_di.ma_san_bay",
            sort: true,
            sortValue: (cell, row) => row['chang_bay'][0].ngay_di,
            formatter: (san_bay_di, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                                        {val.san_bay_di.ma_san_bay}
                                        <br></br>
                                        {moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("cat_canh_ve")}>Cất cánh
                        <i style={{ marginLeft: "5px" }} className={soft["cat_canh_ve"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Hạ cánh",
            sort: true,
            dataField: "san_bay_den.ma_san_bay",
            sortValue: (cell, row) => row['chang_bay'][0].ngay_den,
            formatter: (san_bay_den, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                                        {val.san_bay_den.ma_san_bay}
                                        <br></br>
                                        {moment(val.ngay_den, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("ha_canh_ve")}>Hạ cánh
                        <i style={{ marginLeft: "5px" }} className={soft["ha_canh_ve"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Loại vé",
            sort: true,
            classes: `${params.loai_dinh_dang === 2 ? "" : "d-none"}`,
            dataField: "tuy_chon_gia_ve_mac_dinh.loai_ve.mo_ta",
            formatter: (loai_ve, dataChuyenBay) => (
                <Row>
                    {
                        dataChuyenBay 
                        && dataChuyenBay.tuy_chon_gia_ve_mac_dinh 
                        && dataChuyenBay.tuy_chon_gia_ve_mac_dinh.gia_tien_co_ban ?
                            <Col md="12" className="mx-1 px-1">
                                <div className="d-flex align-items-center flex-column">
                                    <span>{loai_ve}</span>
                                    <span>
                                        {Number(dataChuyenBay.tuy_chon_gia_ve_mac_dinh.gia_tien_co_ban.tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                            </Col>
                            : null
                    }
                </Row>
            ),
            headerClasses: `${params.loai_dinh_dang === 2 ? "table-light text-center" : "d-none"}`
        },
        {
            text: "Giá",
            sort: true,
            hidden: hidePrice,
            classes: `${params.loai_dinh_dang === 1 ? "" : "d-none"}`,
            dataField: "gia_tien_co_ban.gia_ve",
            formatter: (gia_ve, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0">
                        {Number(gia_ve).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("gia_ve")}>Giá
                        <i style={{ marginLeft: "5px" }} className={soft["gia_ve"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: `${params.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        },
        {
            text: "Giá (VAT)",
            sort: true,
            hidden: !hidePrice,
            classes: `${params.loai_dinh_dang === 1 ? "" : "d-none"}`,
            dataField: "gia_tien_co_ban.tong_cong",
            formatter: (tong_cong, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0">
                        {Number(tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("gia_vat_ve")}>Giá (VAT)
                        <i style={{ marginLeft: "5px" }} className={soft["gia_vat_ve"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: `${params.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        },
        {
            text: "Hạng chỗ",
            dataField: "loai_ve.mo_ta",
            sort: true,
            classes: `${params.loai_dinh_dang === 1 ? "" : "d-none"}`,
            formatter: (mo_ta, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                        {mo_ta}
                        <br></br>
                        Còn {dataChuyenBay.so_ghe_trong} Vé
                    </p>
                </>
            ),
            filter: multiSelectFilter({
                options: hangChoOptions,
                getFilter: (filter) => {
                    hangChoHaiChieuFilter = filter
                },
                style: { display: "none" }
            }),
            headerClasses: `${params.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        }
    ]

    const handleChangePrice = (e) => {
        if (e.target.value === "1") {
            setHideprice(true)
        } else if (e.target.value === "2") {
            setHideprice(false)
        }
        setDoft({
            ma_chuyen_bay: false,
            cat_canh: false,
            ha_canh: false,
            gia: false,
            gia_vat: false
        })
    }

    const creOptHangChoFilter = (data) => {
        var opts = []
        opts = data.reduce(function (result, item) {
            var key = item.ma // tạo key
            result[key] = item.mo_ta //value
            return result;
        }, {})
        setHangChoOptions(opts)
    }

    const createHangCho = (data, dinhDang) => {
        let arr = []
        if (JSON.stringify(data[`${dinhDang}`]) !== "[]" && typeof data[`${dinhDang}`] !== "undefined") {
            data[`${dinhDang}`].hang_cho_mot_chieu.map((val) => {
                arr.push(val)
            })
        }
        return arr
    }

    const handleSubmit = (values) => {
        setDisabledBtn(true)
        let arr = {}
        if (values.loai_ve === "mot_chieu") {
            arr = {
                ...values,
                ngay_di: moment(values.ngay_di).format("DD-MM-YYYY")
            }
            delete arr.ngay_ve;
        } else {
            arr = {
                ...values,
                ngay_di: moment(values.ngay_di).format("DD-MM-YYYY"),
                ngay_ve: moment(values.ngay_ve).format("DD-MM-YYYY")
            }
        }
        dispatch(layDSChuyenBay(arr))
        dispatch(setThongTinHanhKhach({}))
    }

    const handleNextPage = () => {
        history.push("/tim-ve/thong-tin-hanh-khach")
    }

    useEffect(() => {
        selectedChuyenDi = {}
        selectedChuyenVe = {}
        resApi = {}
    }, [])

    useEffect(() => {
        let status = true;
        if (params.loai_ve === "mot_chieu") {
            chooseChuyenDi ? status = false : status = true
        } else {
            chooseChuyenDi && chooseChuyenVe ? status = false : status = true
        }
        setDisablebtnNex(status)
    }, [chooseChuyenDi, chooseChuyenVe])

    useEffect(() => {
        let loaiVe = "", ngayDi = "", ngayVe = "", diemDi = "", diemDen = "", nguoiLon = 0, treEm = 0, emBe = 0;
        if (params.loai_ve === "mot_chieu") {
            loaiVe = "mot_chieu";
            diemDi = params.diem_di;
            diemDen = params.diem_den;
            ngayDi = moment(`${params.ngay_di} 23:59:59`, 'DD-MM-YYYY HH:mm:ss').format()
            ngayVe = "";
            nguoiLon = Number(params.nguoi_lon)
            treEm = Number(params.tre_em)
            emBe = Number(params.em_be)
        } else {
            loaiVe = "khu_hoi";
            diemDi = params.diem_di;
            diemDen = params.diem_den;
            ngayDi = moment(`${params.ngay_di} 23:59:59`, 'DD-MM-YYYY HH:mm:ss').format()
            ngayVe = moment(`${params.ngay_ve} 23:59:59`, 'DD-MM-YYYY HH:mm:ss').format()
            nguoiLon = Number(params.nguoi_lon)
            treEm = Number(params.tre_em)
            emBe = Number(params.em_be)
        }
        setInitialValues({
            loai_ve: loaiVe,
            diem_di: diemDi,
            diem_den: diemDen,
            nguoi_lon: nguoiLon,
            tre_em: treEm,
            em_be: emBe,
            ngay_di: ngayDi,
            ngay_ve: ngayVe,
            loai_dinh_dang: 2,
        })
    }, [params])

    useEffect(() => {
        if (typeof hangChoMotChieuFilter == 'function' && dataChuyenBay.length > 0) {
            hangChoMotChieuFilter(storeFilterChecked)
        }
        if (typeof hangChoHaiChieuFilter == 'function' && dataChuyenBayVe.length > 0 && params.loai_ve === "khu_hoi") {
            hangChoHaiChieuFilter(storeFilterChecked)
        }
    }, [storeFilterChecked])

    useEffect(() => {
        if (typeof hangBayMotChieuFilter == 'function' && dataChuyenBay.length > 0) {
            let arr = []
            onChange.map((val, i) => {
                if (val.checked) {
                    let name = "";
                    if (val.name === "vietject") {
                        name = "Vietjet Airlines"
                    }
                    if (val.name === "vietnam") {
                        name = "Vietnam Airline"
                    }
                    if (val.name === "bamboo") {
                        name = "Bamboo Airlines"
                    }
                    arr.push(name)
                }
            })
            hangBayMotChieuFilter(arr)
        }
        if (typeof hangBayHaiChieuFilter == 'function' && dataChuyenBayVe.length > 0 && params.loai_ve === "khu_hoi") {
            let arr = []
            onChange.map((val, i) => {
                if (val.checked) {
                    let name = "";
                    if (val.name === "vietject") {
                        name = "Vietjet Airlines"
                    }
                    if (val.name === "vietnam") {
                        name = "Vietnam Airline"
                    }
                    if (val.name === "bamboo") {
                        name = "Bamboo Airlines"
                    }
                    arr.push(name)
                }
            })
            hangBayHaiChieuFilter(arr)
        }
    }, [onChange])

    useEffect(() => {
        if (JSON.stringify(params) !== "{}") {
            const findDiemDi = airportVNCode.find(x => x.value === params.diem_di)
            const findDiemDen = airportVNCode.find(x => x.value === params.diem_den)
            setDiemDi(findDiemDi.label)
            setDiemDen(findDiemDen.label)
        }
    }, [params])

    useEffect(() => {
        let arrMotChieu = []
        let arrHaiChieu = []
        if (JSON.stringify(data) === "[]") {
            history.push("/tim-ve")
        }
        if (data && JSON.stringify(data) !== "[]") {
            if (JSON.stringify(data["mot_chieu"]) !== "[]") {
                data["mot_chieu"].map((val, i) => {
                    arrMotChieu.push({ id: i, ...val })
                })
                setDataChuyenBay(arrMotChieu)
            }
            if (JSON.stringify(data["hai_chieu"]) !== "[]") {
                data["hai_chieu"].map((val, i) => {
                    arrHaiChieu.push({ id: i, ...val })
                })
                setDataChuyenBayVe(arrHaiChieu)
            }
            let vietject = createHangCho(data, "vietjet")
            let bamboo = createHangCho(data, "bamboo")
            let vna = createHangCho(data, "vna")

            let arrayResult = [...new Set([...vietject, ...bamboo, ...vna])];
            creOptHangChoFilter(arrayResult)
            setHangChoVietject(vietject)
            setHangChoBamBoo(bamboo)
            setHangChoVietNam(vna)
        }
    }, [data])

    useEffect(() => {
        if (Number(resApi.code) === 200) {
            setDisabledBtn(false)
        }
    }, [resApi])

    return (
        <React.Fragment>
            {disabledBtn ? <SpinnerLoading></SpinnerLoading> : null}
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
                                            <Row>
                                                <Col lg={12} md={12} className="content clearfix">
                                                    <Row id="tab-ds-chuyen-bay">
                                                        <Col lg={9} md={9}>
                                                            <Card className="big-title-dat-ve">
                                                                <div className="section-header locale_vi">
                                                                    <h3>
                                                                        <i className="mdi mdi-airplane-takeoff text-primary"></i>
                                                                        <span className="clearfix text-primary">Chuyến bay</span>
                                                                        <div className="text-dark">
                                                                            <strong className="text-dark">{diemDi && diemDi}</strong>
                                                                            <strong>{` đến ${diemDen && diemDen}`}</strong>
                                                                        </div>
                                                                    </h3>
                                                                </div>
                                                            </Card>

                                                            <Card outline color="primary" className="border">
                                                                <CardHeader className="bg-transparent">
                                                                    <CardTitle className="text-primary">Danh sách chuyến đi</CardTitle>
                                                                </CardHeader>
                                                                {
                                                                    JSON.stringify(dataChuyenBay) !== "[]" ?
                                                                        <SliderCalendar
                                                                            name="ngay_di"
                                                                            formatValue="DD-MM-YYYY H:mm:ss"
                                                                            debounce={1000}
                                                                            dataParam={params}
                                                                            params={params.ngay_di}
                                                                            setDisabledBtn={setDisabledBtn}
                                                                        ></SliderCalendar> : null
                                                                }
                                                                {dataChuyenBay.length > 0 ?
                                                                    <PaginationProvider
                                                                        keyField="id"
                                                                        pagination={paginationFactory(pageOptions)}
                                                                        columns={columnsMotChieu}
                                                                        data={dataChuyenBay}>
                                                                        {({ paginationProps, paginationTableProps }) => (
                                                                            <ToolkitProvider
                                                                                keyField="id"
                                                                                data={dataChuyenBay}
                                                                                columns={columnsMotChieu}
                                                                                bootstrap4
                                                                                search
                                                                            >
                                                                                {toolkitProps => (
                                                                                    <React.Fragment>
                                                                                        <div className="table-responsive">
                                                                                            <BootstrapTable
                                                                                                {...toolkitProps.baseProps}
                                                                                                {...paginationTableProps}
                                                                                                keyField="id"
                                                                                                defaultSorted={defaultSorted}
                                                                                                classes={
                                                                                                    "table align-middle table-nowrap table-hover bg-select-row"
                                                                                                }
                                                                                                filter={filterFactory()}
                                                                                                expandRow={params.loai_dinh_dang === 2 ? expandRow : {}}
                                                                                                // selectRow={selectRowChuyenDi}
                                                                                                bordered={false}
                                                                                                striped={false}
                                                                                                responsive
                                                                                            />
                                                                                        </div>
                                                                                        <div className="pagination pagination-rounded justify-content-end mb-2">
                                                                                            <PaginationListStandalone
                                                                                                {...paginationProps}
                                                                                            />
                                                                                        </div>
                                                                                    </React.Fragment>
                                                                                )}
                                                                            </ToolkitProvider>
                                                                        )}
                                                                    </PaginationProvider> :
                                                                    <div className="table-responsive">
                                                                        <table className="table table-bordered m-0">
                                                                            <thead className="table-light" >
                                                                                <tr>
                                                                                    <th>Hãng bay</th>
                                                                                    <th>Mã chuyến bay</th>
                                                                                    <th>Thời gian bay</th>
                                                                                    <th>Giờ cất cánh</th>
                                                                                    <th>Giá</th>
                                                                                    <th>Hạng chỗ</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td colSpan="7">
                                                                                        <p className="text-center">
                                                                                            Không tìm thấy chuyến bay
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>}
                                                            </Card>

                                                            {params.loai_ve === "khu_hoi" && JSON.stringify(dataChuyenBayVe) !== "[]" ?
                                                                <Card outline color="primary" className="border">
                                                                    <CardHeader className="bg-transparent">
                                                                        <CardTitle className="text-primary">Danh sách chuyến về</CardTitle>
                                                                    </CardHeader>
                                                                    {
                                                                        JSON.stringify(dataChuyenBayVe) !== "[]" ?
                                                                            <SliderCalendar
                                                                                name="ngay_ve"
                                                                                formatValue="DD-MM-YYYY H:mm:ss"
                                                                                debounce={1000}
                                                                                dataParam={params}
                                                                                params={params.ngay_ve}
                                                                                setDisabledBtn={setDisabledBtn}
                                                                            ></SliderCalendar> : null
                                                                    }

                                                                    {dataChuyenBayVe.length > 0 ?
                                                                        <PaginationProvider
                                                                            keyField="id"
                                                                            pagination={paginationFactory(pageOptionsChuyenVe)}
                                                                            columns={columnsHaiChieu}
                                                                            data={dataChuyenBayVe}>
                                                                            {({ paginationProps, paginationTableProps }) => (
                                                                                <ToolkitProvider
                                                                                    keyField="id"
                                                                                    data={dataChuyenBayVe}
                                                                                    columns={columnsHaiChieu}
                                                                                    bootstrap4
                                                                                    search
                                                                                >
                                                                                    {toolkitProps => (
                                                                                        <React.Fragment>
                                                                                            <div className="table-responsive">
                                                                                                <BootstrapTable
                                                                                                    {...toolkitProps.baseProps}
                                                                                                    {...paginationTableProps}
                                                                                                    keyField="id"
                                                                                                    defaultSorted={defaultSorted}
                                                                                                    classes={
                                                                                                        "table align-middle table-nowrap table-hover bg-select-row"
                                                                                                    }
                                                                                                    filter={filterFactory()}
                                                                                                    expandRow={params.loai_dinh_dang === 2 ? expandRowChuyenVe : {}}
                                                                                                    // selectRow={selectRowChuyenVe}
                                                                                                    bordered={false}
                                                                                                    striped={false}
                                                                                                    responsive

                                                                                                />
                                                                                            </div>
                                                                                            <div className="pagination pagination-rounded justify-content-end mb-2">
                                                                                                <PaginationListStandalone
                                                                                                    {...paginationProps}
                                                                                                />
                                                                                            </div>
                                                                                        </React.Fragment>
                                                                                    )}
                                                                                </ToolkitProvider>
                                                                            )}
                                                                        </PaginationProvider> :
                                                                        <div className="table-responsive">
                                                                            <table className="table table-bordered m-0">
                                                                                <thead className="table-light" >
                                                                                    <tr>
                                                                                        <th>Hãng bay</th>
                                                                                        <th>Mã chuyến bay</th>
                                                                                        <th>Thời gian bay</th>
                                                                                        <th>Giờ cất cánh</th>
                                                                                        <th>Giá</th>
                                                                                        <th>Hạng chỗ</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td colSpan="7">
                                                                                            <p className="text-center">
                                                                                                Không tìm thấy chuyến bay
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>}
                                                                </Card> : null}
                                                        </Col>
                                                        <Col lg={3} md={3}>
                                                            {/*Thumb Hiển thị giá */}
                                                            <Card outline color="primary" className="border">
                                                                <CardHeader className="bg-transparent card-header-custom">
                                                                    <h5 className="text-primary" style={{ fontSize: "15px" }}>
                                                                        <i className="fas fa-money-bill" style={{ marginRight: "10px" }}></i>
                                                                        Hiển thị giá
                                                                    </h5>
                                                                </CardHeader>
                                                                <div className="card-body-custom mb-2">
                                                                    <div className="form-check mb-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="rd_hien_thi_gia"
                                                                            id="rd_gia_gom_thue"
                                                                            value="1"
                                                                            defaultChecked
                                                                            onChange={handleChangePrice}
                                                                        />
                                                                        <label className="form-check-label" htmlFor="rd_gia_gom_thue">
                                                                            Giá gồm thuế
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="rd_hien_thi_gia"
                                                                            id="rd_gia_chua_gom_thue"
                                                                            value="2"
                                                                            onChange={handleChangePrice}
                                                                        />
                                                                        <label className="form-check-label" htmlFor="rd_gia_chua_gom_thue">
                                                                            Giá chưa gồm thuế
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </Card>

                                                            {/*Thumb Lọc hãng bay */}
                                                            <Card outline color="primary" className="border">
                                                                <CardHeader className="bg-transparent card-header-custom">
                                                                    <h5 className="text-primary" style={{ fontSize: "15px" }}>
                                                                        <i className="fas fa-plane-departure" style={{ marginRight: "10px" }}></i>
                                                                        Lọc hãng bay
                                                                    </h5>
                                                                </CardHeader>
                                                                <div className="card-body-custom mb-2">
                                                                    <ul>
                                                                        <CheckboxGroup onChange={setOnChange}>
                                                                            <li>
                                                                                <div className="group-btn-loc-hang-bay mb-3">
                                                                                    <div className="form-check form-checkbox-outline form-check-primary">
                                                                                        <label className="form-check-label">
                                                                                            <AllCheckerCheckbox name="all" className="form-check-input" />
                                                                                            <span>Chọn tất cả</span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="group-btn-loc-hang-bay mb-3">
                                                                                    <div className="form-check form-checkbox-outline form-check-primary">
                                                                                        <label className="form-check-label">
                                                                                            <Checkbox name="vietject" className="form-check-input" checked={checkVJ} />
                                                                                            <span>{hangBayVJ}</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <HangChoFilter
                                                                                        name="vietject"
                                                                                        dataDropdown={hangChoVietject}
                                                                                        label={`Hạng chỗ ${hangBayVJ}`}
                                                                                        isOpen={dropdownOpenVJ}
                                                                                        toggle={toggleVJ}
                                                                                        setChecked={setCheckedVJ}
                                                                                    />
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="group-btn-loc-hang-bay mb-3">
                                                                                    <div className="form-check form-checkbox-outline form-check-primary">
                                                                                        <label className="form-check-label">
                                                                                            <Checkbox name="bamboo" className="form-check-input" checked={checkBB} />
                                                                                            <span>{hangBayBB}</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <HangChoFilter
                                                                                        name="bamboo"
                                                                                        dataDropdown={hangChoBamBoo}
                                                                                        label={`Hạng chỗ ${hangBayBB}`}
                                                                                        isOpen={dropdownOpenBB}
                                                                                        toggle={toggleBB}
                                                                                        setChecked={setCheckedBB}
                                                                                    />
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="group-btn-loc-hang-bay mb-3">
                                                                                    <div className="form-check form-checkbox-outline form-check-primary">
                                                                                        <label className="form-check-label">
                                                                                            <Checkbox name="vietnam" className="form-check-input" checked={checkVN} />
                                                                                            <span>{hangBayVN}</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <HangChoFilter
                                                                                        name="vietnam"
                                                                                        dataDropdown={hangChoVietNam}
                                                                                        label={`Hạng chỗ ${hangBayVN}`}
                                                                                        isOpen={dropdownOpenVN}
                                                                                        toggle={toggleVN}
                                                                                        setChecked={setCheckedVN}
                                                                                    />
                                                                                </div>
                                                                            </li>
                                                                        </CheckboxGroup>
                                                                    </ul>
                                                                </div>
                                                            </Card>

                                                            {/*Thumb tìm chuyến bay */}
                                                            <Card outline color="primary" className="border">
                                                                <CardHeader className="bg-transparent card-header-custom">
                                                                    <h5 className="text-primary" style={{ fontSize: "15px" }}>
                                                                        <i className="fas fa-search-location" style={{ marginRight: "10px" }}></i>
                                                                        Tìm chuyến bay
                                                                    </h5>
                                                                </CardHeader>
                                                                <div className="card-body-custom mb-2">
                                                                    <TimVeForm
                                                                        loading={disabledBtn}
                                                                        airportVNCode={airportVNCode}
                                                                        treEmOpt={treEmOpt}
                                                                        nguoiLonOpt={nguoiLonOpt}
                                                                        inittialValues={initialValues}
                                                                        handleSubmit={handleSubmit}
                                                                        fullCol={true}
                                                                    />
                                                                </div>
                                                            </Card>

                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12} md={12} className="actions clearfix">
                                                    <ul>
                                                        <li className="next d-flex align-items-center justify-content-end">
                                                            <Button
                                                                form='my-form'
                                                                type="button"
                                                                color="primary"
                                                                onClick={handleNextPage}
                                                                disabled={disablebtnNex}
                                                                size="lg"
                                                            >
                                                                Tiếp tục
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
        </React.Fragment>
    );
}

export default ChonTuyenBay;