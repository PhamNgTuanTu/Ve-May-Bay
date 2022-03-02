import classnames from 'classnames';
import { dataDatVe, storeChoNgoi, storeHKNguoiLon, storeHKTreEm } from "common/data/dataFake";
import Breadcrumbs from "components/Common/Breadcrumb";
// import PaneChoNgoi from "components/Custom/Pane/ChoNgoiMotChieu";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Button, Card, CardBody, CardTitle, Col, Container, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import ThongTinVeBox from "../../components/Custom/xuat-ve/ThongTinVeBox";


const initlabel = {
    tab: 'Thay đổi thông tin dịch vụ',
    tabChuyenBay: "Thông tin chuyến bay",
    tab_ticket: "Thông tin vé",
};

function ThayDoiThongTinDichVu(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams();
    let { idDatCho, storeDataHanhKhach, storeDataVe, loading, resApi, storeResApiGiaVe } = useSelector(state => ({
        idDatCho: state.DanhSachDatCho.id,
        // dataDatVe: state.XuatVe.content,
        storeResApiGiaVe: state.XuatVe.resApiGiaVe,
        storeDataHanhKhach: state.ThongTinHanhKhach.dataHanhKhach,
        storeDataVe: state.XuatVe.dataGiaVe,
        loading: state.ThongTinHanhKhach.loading,
        resApi: state.ThongTinHanhKhach.resApi,
    }))

    const [dataChuyenBay, setDataChuyenBay] = useState([])
    const [dataPhanKhuc, setDataPhanKhuc] = useState({ chuyen_di: [], chuyen_ve: [] })
    const [activeTabChuyenDi, setActiveTabChuyenDi] = useState('1');
    const [activeTabChuyenVe, setActiveTabChuyenVe] = useState('3');

    const [activeTabChanBay, setActiveTabChanBay] = useState(10);
    const [activeTabChanBayVe, setActiveTabChanBayVe] = useState(20);

    const [dataChonGhe, setDataChonGhe] = useState({})
    const [lenChuyenDi, setLenChuyenDi] = useState(0)
    const [lenChuyenVe, setLenChuyenVe] = useState(0)
    const [hangGheChuyenDi, setHangGheChuyenDi] = useState([])
    const [hangGheChuyenVe, setHangGheChuyenVe] = useState([])

    const [arrNguoiLon, setArrNguoiLon] = useState([])
    const [arrTreEm, setArrTreEm] = useState([])

    const toggle = tab => {
        if (activeTabChuyenDi !== tab) setActiveTabChuyenDi(tab);
    }

    const toggle2 = (tab) => {
        if (activeTabChanBay !== tab) {
            setActiveTabChanBay(tab)
        }
    }

    const toggle3 = tab => {
        if (activeTabChuyenVe !== tab) setActiveTabChuyenVe(tab);
    }

    const toggle4 = (tab) => {
        if (activeTabChanBayVe !== tab) {
            setActiveTabChanBayVe(tab)
        }
    }

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

    const getDataChuyenDi = (data) => {
        if (JSON.stringify(data) !== "[]") {
            let arrPhi = [...data["phi"]];
            let arrHanhTrinh = [...data["hanh_trinh"]];
            let arr = [];
            let arrChuyenDi = [];
            let arrChuyenVe = [];
            if (arrHanhTrinh.length === 1) {
                for (let i = 0; i < arrPhi.length; i++) {
                    if (arrHanhTrinh[0].ma_hanh_trinh === arrPhi[i].ma_hanh_trinh) {
                        arrChuyenDi.push(arrPhi[i])
                    }
                }
            }
            if (arrHanhTrinh.length === 2) {
                for (let i = 0; i < arrPhi.length; i++) {
                    if (arrHanhTrinh[0].ma_hanh_trinh === arrPhi[i].ma_hanh_trinh) {
                        arrChuyenDi.push(arrPhi[i])
                    }
                    if (arrHanhTrinh[1].ma_hanh_trinh === arrPhi[i].ma_hanh_trinh) {
                        arrChuyenVe.push(arrPhi[i])
                    }
                }
            }
            arr = [
                { chuyen_di: arrChuyenDi.sort((a, b) => parseFloat(b.tong_thanh_tien) - parseFloat(a.tong_thanh_tien)) },
                { chuyen_ve: arrChuyenVe.sort((a, b) => parseFloat(b.tong_thanh_tien) - parseFloat(a.tong_thanh_tien)) },
            ]
            setDataChuyenBay(arr)
        }
    }

    const subtractTime = (time1, time2) => {
        var ms = moment(time2, "YYYY-MM-DD HH:mm:ss").diff(moment(time1, "YYYY-MM-DD HH:mm:ss"));
        var hours = parseInt((ms / (1000 * 60 * 60)) % 24);
        var minute = parseInt(ms / (1000 * 60) % 60)
        return `${hours}:${minute}`
    }

    const getPhanKhucCuaHanhTrinh = (data) => {
        let arr = {
            chuyen_di: [],
            chuyen_ve: [],
        };
        if (data && JSON.stringify(data) !== '[]') {
            let arrHanhTrinh = [...data["hanh_trinh"]];
            let arrPhanKhuc = [...data["phan_khuc"]];
            let arrDataChuyenDi = [];
            let arrDataChuyenVe = [];
            if (arrHanhTrinh.length === 1) {
                arrPhanKhuc.forEach((val, i) => {
                    if (Number(arrHanhTrinh[0].id) === Number(val.hanh_trinh_id)) {
                        arrDataChuyenDi.push(val)
                    }
                });
            } else {
                arrPhanKhuc.forEach((val, i) => {
                    if (Number(arrHanhTrinh[0].id) === Number(val.hanh_trinh_id)) {
                        arrDataChuyenDi.push(val)
                    } else if (Number(arrHanhTrinh[1].id) === Number(val.hanh_trinh_id)) {
                        arrDataChuyenVe.push(val)
                    }
                });
            }
            arr = {
                chuyen_di: arrDataChuyenDi,
                chuyen_ve: arrDataChuyenVe,
            };
        }
        return arr
    }

    const getHangCho = (data, id) => {
        let HangCho = "";
        if (data && JSON.stringify(data) !== '[]') {
            let arrChiTiet = [...data["chi_tiet_hanh_trinh_hanh_khach"]];
            arrChiTiet.forEach((val, i) => {
                if (Number(id) === Number(val.hanh_trinh_id)) {
                    HangCho = val.mo_ta_ve_dat_cho
                }
            });
        }
        return HangCho
    }

    const createDataPerSon = (data, loaiHanhKhach) => {
        let arr = []
        let arrHanhKhach = [...data["hanh_khach"]];
        let arrThongTin = [...data["thong_tin_dat_cho"]]
        for (let i = 0; i < arrHanhKhach.length; i++) {
            for (let j = 0; j < arrThongTin.length; j++) {
                if (Number(arrHanhKhach[i].loai_hanh_khach) === Number(loaiHanhKhach)) {
                    if (arrHanhKhach[i].id === arrThongTin[j].hanh_khach_id) {
                        arr.push({
                            "ho": arrThongTin[j].ho,
                            "ten": arrThongTin[j].ten
                        })
                    }
                }
            }

        }
        return arr
    }

    const getTenGhe = (val) => {
        var name = []
        val.map((value, index) => {
            name.push(`${value.dinh_danh_hang}${value.dinh_danh_cho_ngoi}`)
        })
        return name.join(", ")
    }

    useEffect(() => {
        let arr = [];
        let arrNguoiLon = [];
        let arrTreEm = [];
        if (JSON.stringify(dataDatVe) !== "[]") {
            //format arr theo phân khúc
            arr = getPhanKhucCuaHanhTrinh(dataDatVe)
            arrNguoiLon = createDataPerSon(dataDatVe, 1)
            arrTreEm = createDataPerSon(dataDatVe, 2)
        }
        //lấy phân khúc của hành trình
        setDataPhanKhuc(arr)
        setArrNguoiLon(arrNguoiLon)
        setArrTreEm(arrTreEm)
    }, [dataDatVe])

    useEffect(() => {
        //format chuyến bay đi và về
        getDataChuyenDi(storeDataVe)
    }, [storeDataVe])

    useEffect(() => {
        // if (Number(idDatCho) === 0) {
        //     history.push("/tim-kiem-dat-cho")
        // }
    }, [idDatCho])

    useEffect(() => {
        getLenAndArray(storeChoNgoi, setLenChuyenDi, setHangGheChuyenDi)
    }, [storeChoNgoi])


    //   useEffect(() => {
    //     getLenAndArray(arrSeatChuyenVe, setLenChuyenVe, setHangGheChuyenVe)
    //   }, [arrSeatChuyenVe])

    console.log("dataChonGhe", dataChonGhe)


    return (
        <>
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />
                    {
                        JSON.stringify(resApi) !== "{}"
                            && resApi.action === "thong-tin-gia-ve" && resApi.code === 400
                            || resApi.code === 401 ?
                            <Card outline color="primary" className="border">
                                <CardBody className="pt-0">
                                    <h5 className="mt-4">{resApi.message}</h5>
                                    <Row>
                                        <Col md="12" className="d-flex align-items-center justify-content-end btn-pre">
                                            <Button type="button" color="primary" outline onClick={
                                                () => history.goBack()} >
                                                Quay lại
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card> :
                            <Row>
                                <Col md="8" className="passenger-form">
                                    <Card outline color="primary">
                                        <CardBody>
                                            <Row>
                                                <Col md="12">
                                                    <Card outline color="primary" className="border">
                                                        <CardBody>
                                                            <Row>
                                                                <Col md="12">
                                                                    <Table borderless className="mb-0" responsive>
                                                                        <thead>
                                                                            <tr>
                                                                                {
                                                                                    JSON.stringify(dataPhanKhuc["chuyen_ve"]) !== "[]" && dataPhanKhuc["chuyen_ve"].length > 0 ?
                                                                                        <th className="px-0 pt-2 pb-2" colSpan="3">Thông tin chuyến đi</th>
                                                                                        : null
                                                                                }
                                                                            </tr>
                                                                        </thead>
                                                                        {
                                                                            JSON.stringify(dataPhanKhuc["chuyen_di"]) !== "[]" && dataPhanKhuc["chuyen_di"].length > 0 ?
                                                                                dataPhanKhuc["chuyen_di"].map((val, index) => {
                                                                                    return (
                                                                                        <React.Fragment key={index}>
                                                                                            <tbody>
                                                                                                {dataPhanKhuc["chuyen_di"].length > 1 ?
                                                                                                    <tr>
                                                                                                        <td className="px-0 pt-2 pb-2" colSpan="3">
                                                                                                            <h5>{`Chặn từ ${val.ten_san_bay_di} đến ${val.ten_san_bay_den}`}</h5>
                                                                                                        </td>
                                                                                                    </tr> : null}
                                                                                                <tr>
                                                                                                    <td className="px-0 pt-2 pb-2" colSpan="3">
                                                                                                        <strong>Ngày khởi hành:{" "}
                                                                                                            {`${moment(val.thoi_gian_di).format('LT')}, ${moment(val.thoi_gian_di).format('dddd')} ${moment(val.thoi_gian_di).format("DD/MM/YYYY")}`}
                                                                                                        </strong>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td className="px-1 pt-2 pb-2">{moment(val.thoi_gian_di).format('LT')}</td>
                                                                                                    <td className="px-1 pt-2 pb-2" colSpan="3">{val.ma_san_bay_di}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td className="px-1 pt-2 pb-2" scope="row">{moment(val.thoi_gian_den).format('LT')}</td>
                                                                                                    <td className="px-1 pt-2 pb-2" colSpan="3">{val.ma_san_bay_den}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td className="px-1 pt-2 pb-2"></td>
                                                                                                    <td className="px-1 pt-2 pb-2">{`${dataDatVe.ten_hang_bay}: ${val.ma_hang_khong} ${val.so_chuyen_bay}`}</td>
                                                                                                    <td className="px-1 pt-2 pb-2">{`Thời gian bay: ${subtractTime(val.thoi_gian_di, val.thoi_gian_den)}`}</td>
                                                                                                </tr>
                                                                                                {dataDatVe && dataDatVe["cho_ngoi"].length > 0 ?
                                                                                                    <tr>
                                                                                                        <td className="px-1 pt-2 pb-2">Ghế đã chọn:</td>
                                                                                                        <td className="px-1 pt-2 pb-2">{getTenGhe(dataDatVe["cho_ngoi"])}</td>
                                                                                                    </tr> : null
                                                                                                }
                                                                                                <tr>
                                                                                                    <td className="px-1 pt-2 pb-2" colSpan="3">
                                                                                                        <strong>Hạng chỗ: {`${getHangCho(dataDatVe, val.hanh_trinh_id)}`}</strong>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })
                                                                                : null
                                                                        }
                                                                    </Table>
                                                                    {
                                                                        JSON.stringify(dataPhanKhuc["chuyen_ve"]) !== "[]" && dataPhanKhuc["chuyen_ve"].length > 0 ?
                                                                            <Table borderless className="mb-0" responsive>
                                                                                <thead>
                                                                                    <tr>
                                                                                        {
                                                                                            JSON.stringify(dataPhanKhuc["chuyen_ve"]) !== "[]" && dataPhanKhuc["chuyen_ve"].length > 0 ?
                                                                                                <th className="px-0 pt-2 pb-2" colSpan="3">Thông tin chuyến về</th>
                                                                                                : null
                                                                                        }
                                                                                    </tr>
                                                                                </thead>
                                                                                {
                                                                                    JSON.stringify(dataPhanKhuc["chuyen_ve"]) !== "[]" && dataPhanKhuc["chuyen_ve"].length > 0 ?
                                                                                        dataPhanKhuc["chuyen_ve"].map((val, index) => {
                                                                                            return (
                                                                                                <React.Fragment key={index}>
                                                                                                    <tbody>
                                                                                                        {dataPhanKhuc["chuyen_ve"].length > 1 ?
                                                                                                            <tr>
                                                                                                                <td className="px-0 pt-2 pb-2" colSpan="3">
                                                                                                                    <h5>{`Chặn từ ${val.ten_san_bay_di} đến ${val.ten_san_bay_den}`}</h5>
                                                                                                                </td>
                                                                                                            </tr> : null}
                                                                                                        <tr>
                                                                                                            <td className="px-0 pt-2 pb-2" colSpan="3">
                                                                                                                <strong>Ngày khởi hành:{" "}
                                                                                                                    {`${moment(val.thoi_gian_di).format('LT')}, ${moment(val.thoi_gian_di).format('dddd')} ${moment(val.thoi_gian_di).format("DD/MM/YYYY")}`}
                                                                                                                </strong>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td className="px-1 pt-2 pb-2">{moment(val.thoi_gian_di).format('LT')}</td>
                                                                                                            <td className="px-1 pt-2 pb-2" colSpan="3">{val.ma_san_bay_di}</td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td className="px-1 pt-2 pb-2" scope="row">{moment(val.thoi_gian_den).format('LT')}</td>
                                                                                                            <td className="px-1 pt-2 pb-2" colSpan="3">{val.ma_san_bay_den}</td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td className="px-1 pt-2 pb-2"></td>
                                                                                                            <td className="px-1 pt-2 pb-2">{`${dataDatVe.ten_hang_bay}: ${val.ma_hang_khong} ${val.so_chuyen_bay}`}</td>
                                                                                                            <td className="px-1 pt-2 pb-2">{`Thời gian bay: ${subtractTime(val.thoi_gian_di, val.thoi_gian_den)}`}</td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td className="px-1 pt-2 pb-2" colSpan="3">
                                                                                                                <strong>Hạng chỗ: {`${getHangCho(dataDatVe, val.hanh_trinh_id)}`}</strong>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </React.Fragment>
                                                                                            )
                                                                                        })
                                                                                        : null
                                                                                }
                                                                            </Table>
                                                                            : null
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <Card outline color="primary" className="border">
                                                        <CardBody>
                                                            <Row>
                                                                <Col md="12">
                                                                    <Nav tabs>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                className={classnames({ active: activeTabChuyenDi === '1' })}
                                                                                onClick={() => { toggle('1'); }}
                                                                            >
                                                                                Chỗ ngồi
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                className={classnames({ active: activeTabChuyenDi === '2' })}
                                                                                onClick={() => { toggle('2'); }}
                                                                            >
                                                                                Dịch vụ bổ sung
                                                                            </NavLink>
                                                                        </NavItem>
                                                                    </Nav>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mt-3">
                                                                <TabContent activeTab={activeTabChuyenDi}>
                                                                    <TabPane tabId="1">
                                                                        <Row>
                                                                            <Col sm="12">
                                                                                <div>
                                                                                    <Nav tabs>
                                                                                        {
                                                                                            storeChoNgoi && typeof storeChoNgoi !== "undefined" ?
                                                                                                storeChoNgoi.map((val, i) => {
                                                                                                    return (
                                                                                                        <NavItem key={i}>
                                                                                                            <NavLink
                                                                                                                className={classnames({ active: activeTabChanBay === i + 10 })}
                                                                                                                onClick={() => { toggle2(i + 10); }}
                                                                                                            >
                                                                                                                {`Mô hình máy bay ${val.sd_cho_ngoi.ten_mo_hinh_may_bay}`}
                                                                                                            </NavLink>
                                                                                                        </NavItem>
                                                                                                    )
                                                                                                }) : null
                                                                                        }
                                                                                    </Nav>
                                                                                    <TabContent activeTab={activeTabChanBay} className="mt-3">
                                                                                        {
                                                                                            storeChoNgoi && typeof storeChoNgoi !== "undefined" ?
                                                                                                storeChoNgoi.map((val, i) => {
                                                                                                    return (
                                                                                                        <TabPane tabId={i + 10} key={i}>
                                                                                                            <Row>
                                                                                                                <Col sm="12">
                                                                                                                    {/* <PaneChoNgoi
                                                                                                                        key={i}
                                                                                                                        loaiChuyenBay="chuyen_di"
                                                                                                                        nameChuyenBay={`chuyen_di_${i}`}
                                                                                                                        changeActiveTab={activeTabChanBay}
                                                                                                                        setDataChonGhe={setDataChonGhe}
                                                                                                                        dataChoNgoi={storeChoNgoi[i]}
                                                                                                                        storeHKNguoiLon={JSON.stringify(arrNguoiLon) !== "[]" ? arrNguoiLon : null}
                                                                                                                        storeHKTreEm={JSON.stringify(arrTreEm) !== "[]" ? arrTreEm : null}
                                                                                                                        lenMax={lenChuyenDi}
                                                                                                                        index={i}
                                                                                                                        hangGheChuyenBay={JSON.stringify(hangGheChuyenDi) !== "[]" ? hangGheChuyenDi[i] : null}
                                                                                                                    /> */}
                                                                                                                </Col>
                                                                                                            </Row>
                                                                                                        </TabPane>
                                                                                                    )
                                                                                                }) : null
                                                                                        }
                                                                                    </TabContent>
                                                                                </div>

                                                                            </Col>
                                                                        </Row>
                                                                    </TabPane>
                                                                    <TabPane tabId="2">
                                                                        <Row>
                                                                            <Col sm="12">
                                                                                <h1>Dịch vụ</h1>
                                                                            </Col>
                                                                        </Row>
                                                                    </TabPane>
                                                                </TabContent>
                                                            </Row>

                                                            {
                                                                dataDatVe && JSON.stringify(dataDatVe) !== "[]" && dataDatVe["hanh_trinh"].length > 1 ?
                                                                    <>
                                                                        <Row>
                                                                            <Col md="12">
                                                                                <Nav tabs>
                                                                                    <NavItem>
                                                                                        <NavLink
                                                                                            className={classnames({ active: activeTabChuyenVe === '3' })}
                                                                                            onClick={() => { toggle3('3'); }}
                                                                                        >
                                                                                            Chỗ ngồi
                                                                                        </NavLink>
                                                                                    </NavItem>
                                                                                    <NavItem>
                                                                                        <NavLink
                                                                                            className={classnames({ active: activeTabChuyenVe === '4' })}
                                                                                            onClick={() => { toggle3('4'); }}
                                                                                        >
                                                                                            Dịch vụ bổ sung
                                                                                        </NavLink>
                                                                                    </NavItem>
                                                                                </Nav>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className="mt-3">
                                                                            <TabContent activeTab={activeTabChuyenVe}>
                                                                                <TabPane tabId="3">
                                                                                    <Row>
                                                                                        <Col sm="12">
                                                                                            <div>
                                                                                                <Nav tabs>
                                                                                                    {
                                                                                                        storeChoNgoi && typeof storeChoNgoi !== "undefined" ?
                                                                                                            storeChoNgoi.map((val, i) => {
                                                                                                                return (
                                                                                                                    <NavItem key={i}>
                                                                                                                        <NavLink
                                                                                                                            className={classnames({ active: activeTabChanBayVe === i + 20 })}
                                                                                                                            onClick={() => { toggle4(i + 20); }}
                                                                                                                        >
                                                                                                                            {`Mô hình máy bay ${val.sd_cho_ngoi.ten_mo_hinh_may_bay}`}
                                                                                                                        </NavLink>
                                                                                                                    </NavItem>
                                                                                                                )
                                                                                                            }) : null
                                                                                                    }
                                                                                                </Nav>
                                                                                                <TabContent activeTab={activeTabChanBayVe} className="mt-3">
                                                                                                    {
                                                                                                        storeChoNgoi && typeof storeChoNgoi !== "undefined" ?
                                                                                                            storeChoNgoi.map((val, i) => {
                                                                                                                return (
                                                                                                                    <TabPane tabId={i + 20} key={i}>
                                                                                                                        <Row>
                                                                                                                            <Col sm="12">
                                                                                                                                {/* <PaneChoNgoi
                                                                                                                                    key={i}
                                                                                                                                    loaiChuyenBay="chuyen_ve"
                                                                                                                                    nameChuyenBay={`chuyen_ve_${i}`}
                                                                                                                                    activeTabChanBay={activeTabChanBay}
                                                                                                                                    setDataChonGhe={setDataChonGhe}
                                                                                                                                    dataChoNgoi={storeChoNgoi[i]}
                                                                                                                                    storeHKNguoiLon={JSON.stringify(arrNguoiLon) !== "[]" ? arrNguoiLon : null}
                                                                                                                                    storeHKTreEm={JSON.stringify(arrTreEm) !== "[]" ? arrTreEm : null}
                                                                                                                                    lenMax={lenChuyenDi}
                                                                                                                                    index={i}
                                                                                                                                    hangGheChuyenBay={JSON.stringify(hangGheChuyenDi) !== "[]" ? hangGheChuyenDi[i] : null}
                                                                                                                                /> */}
                                                                                                                            </Col>
                                                                                                                        </Row>
                                                                                                                    </TabPane>
                                                                                                                )
                                                                                                            }) : null
                                                                                                    }
                                                                                                </TabContent>
                                                                                            </div>

                                                                                        </Col>
                                                                                    </Row>
                                                                                </TabPane>
                                                                                <TabPane tabId="4">
                                                                                    <Row>
                                                                                        <Col sm="12">
                                                                                            <h1>Dịch vụ</h1>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </TabPane>
                                                                            </TabContent>
                                                                        </Row>
                                                                    </>
                                                                    : null
                                                            }
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4" className="passenger-price">
                                    <Card outline color="primary" className="border">
                                        <CardTitle className="mx-4 mt-4 mb-0 d-flex align-items-center justify-content-center">
                                            <h5>{initlabel.tab_ticket}</h5>
                                        </CardTitle>
                                        <CardBody className="pt-0">
                                            <ThongTinVeBox
                                                dataVe={JSON.stringify(storeDataVe) !== "[]" ? storeDataVe : "null"}
                                                dataDatVe={JSON.stringify(dataDatVe) !== "[]" ? dataDatVe : "null"}
                                                dataChuyenBayFormat={dataChuyenBay}
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                    }
                    <Row>
                        <CardBody className="background-pay">
                            <Row>
                                <Col md="3" xs="6" xl="3" className="d-flex align-items-center justify-content-start btn-pre">
                                    <Button type="button" color="primary" outline onClick={
                                        () => history.goBack()
                                    } >
                                        Quay lại
                                    </Button>
                                </Col>
                                <Col md="6" xs="12" xl="6">
                                    <div className="d-flex flex-column info-pay align-items-center">
                                        <label>Tổng tiền : 200,000 VNĐ</label>
                                        <span>Bao gồm thuế, phí và phụ phí</span>
                                    </div>
                                </Col>
                                <Col md="3" xs="6" xl="3" className="d-flex align-items-center justify-content-end btn-next">
                                    <Button type="submit" form="hook-form" color="primary" outline>
                                        Tiếp tục
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default withRouter(ThayDoiThongTinDichVu);