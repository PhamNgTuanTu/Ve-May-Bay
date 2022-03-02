import Breadcrumbs from "components/Common/Breadcrumb";
import SpinnerLoading from "components/Custom/SpinnerLoading";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter, Link, useRouteMatch } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Button, Card, CardBody, CardTitle, Col, Container, Row, Table } from 'reactstrap';
import ThayDoiThongTinHanhKhachForm from "../../components/Custom/Form/ThayDoiThongTinHanhKhachForm";
import ThongTinVeBox from "../../components/Custom/xuat-ve/ThongTinVeBox";
import { layThongTinGiaVe, layThongTinHanhKhach, layDSDatChoDaChon } from "../../store/actions";
import { airportVNCode } from "common/data/options/airportVNCode"
import { nguoiLonOpt, treEmOpt } from "common/data/options/passengerToTal"
import { getDay, getDate, getMonth, getYear, titleCase, formatDate, getHours } from "helpers/function/function_helper";
import * as _isEmpty from 'lodash/isEmpty';

const initlabel = {
    tab: 'thông tin hành trình'
};

function ThongTinHanhTrinh(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { path } = useRouteMatch();
    const { id } = useParams();
    let { loading, resApi, dataDatVe } = useSelector(state => ({
        dataDatVe: state.XuatVe.content,
        loading: state.ThongTinHanhKhach.loading,
        resApi: state.ThongTinHanhKhach.resApi,
    }))

    const [dataChuyenBay, setDataChuyenBay] = useState({})
    const [dataPhanKhuc, setDataPhanKhuc] = useState({ chuyen_di: [], chuyen_ve: [] })

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
            let arrHanhTrinh = data["hanh_trinh"] ?  data["hanh_trinh"] : [];
            let arrPhanKhuc = data["phan_khuc"] ? data["phan_khuc"] : [];
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

    const redirectTimChuyenBay = (chuyenBay) => {
        history.push({
            pathname: `${path}/cap-nhat/${dataDatVe.id}`,
            state: {
              dat_cho_id: dataDatVe.id,
              diem_di: chuyenBay.ma_san_bay_di,
              diem_den: chuyenBay.ma_san_bay_den,
              ngay_di: getDate(chuyenBay.thoi_gian_di, "DD-MM-YYYY", "MM-DD-YYYY"),
              hanh_trinh_id: chuyenBay.hanh_trinh_id,
              loai_dinh_dang: 2,
              bao_gia_id: dataDatVe.bao_gia_id,
              ma_pnr: dataDatVe.ma_pnr,
              hanh_khach: dataDatVe.hanh_khach,
              action: history.location.state.action
            }
        })
    }

    useEffect(() => {
        dataDatVe = {}
    }, [])

    useEffect(() => {
        var id = history.location.state.id
        dispatch(layDSDatChoDaChon(id))
    }, [history.location.state.id])

    useEffect(() => {
        setDataChuyenBay(dataDatVe)
    }, [dataDatVe])

    useEffect(() => {
        if (!_isEmpty(dataChuyenBay)) {
            if(dataChuyenBay.phan_khuc.length == 1) {
                redirectTimChuyenBay(dataChuyenBay.phan_khuc[0])
            } else {
                var arr = getPhanKhucCuaHanhTrinh(dataChuyenBay)
                setDataPhanKhuc(arr)
            }
        }
    }, [dataChuyenBay])

    return (
        <>
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />  
                    <Row>
                        <Col md="12" className="passenger-form">
                            <Card outline color="primary">
                                <CardBody>
                                    <Row>
                                        <Col md="12">
                                            <Card outline color="primary" className="border">
                                                <CardBody>
                                                    <Row>
                                                        <Col md="12">
                                                            <Table  className="mb-0" responsive>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Ngày bay</th>
                                                                        <th>Mã chuyến bay</th>
                                                                        <th>Khởi hành</th>
                                                                        <th>Đến</th>
                                                                        <th>Chức năng</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                {
                                                                    JSON.stringify(dataPhanKhuc["chuyen_di"]) !== "[]" && dataPhanKhuc["chuyen_di"].length > 0 ?
                                                                        dataPhanKhuc["chuyen_di"].map((chuyenBay, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>
                                                                                    
                                                                                        <tr> 
                                                                                            <td>
                                                                                              {getDate(chuyenBay.thoi_gian_di, "DD-MM-YYYY HH:mm")}
                                                                                            </td>
                                                                                            <td>
                                                                                              {chuyenBay.ma_hang_khong + " " + chuyenBay.so_chuyen_bay}
                                                                                            </td>
                                                                                            <td>{getHours(chuyenBay.thoi_gian_di, "DD-MM-YYYY HH:mm") + " " + chuyenBay.ma_san_bay_di}</td>
                                                                                            <td>{getHours(chuyenBay.thoi_gian_den, "DD-MM-YYYY HH:mm") + " " + chuyenBay.ma_san_bay_den}</td>
                                                                                            <td>                                                             
                                                                                                <Link 
                                                                                                    className="text-info" 
                                                                                                    to={{
                                                                                                        pathname: `${path}/cap-nhat/${dataDatVe.id}`,
                                                                                                        state: {
                                                                                                          dat_cho_id: dataDatVe.id,
                                                                                                          diem_di: chuyenBay.ma_san_bay_di,
                                                                                                          diem_den: chuyenBay.ma_san_bay_den,
                                                                                                          ngay_di: getDate(chuyenBay.thoi_gian_di, "DD-MM-YYYY", "MM-DD-YYYY"),
                                                                                                          hanh_trinh_id: chuyenBay.hanh_trinh_id,
                                                                                                          loai_dinh_dang: 2,
                                                                                                          bao_gia_id: dataDatVe.bao_gia_id,
                                                                                                          ma_pnr: dataDatVe.ma_pnr,
                                                                                                          hanh_khach: dataDatVe.hanh_khach,
                                                                                                          action: history.location.state.action
                                                                                                        }
                                                                                                    }}>   
                                                                                                    <i
                                                                                                      className="mdi mdi-pencil font-size-18"
                                                                                                    ></i>
                                                                                                </Link>
                                                                                            </td>
                                                                                        </tr>                   
                                                                                 
                                                                                </React.Fragment>
                                                                            )
                                                                        })
                                                                        : null
                                                                }
                                                                {
                                                                    JSON.stringify(dataPhanKhuc["chuyen_ve"]) !== "[]" && dataPhanKhuc["chuyen_ve"].length > 0 ?
                                                                        dataPhanKhuc["chuyen_ve"].map((chuyenBay, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>
                                                                                    
                                                                                        <tr> 
                                                                                            <td>
                                                                                              {getDate(chuyenBay.thoi_gian_di, "DD-MM-YYYY HH:mm")}
                                                                                            </td>
                                                                                            <td>
                                                                                              {chuyenBay.ma_hang_khong + " " + chuyenBay.so_chuyen_bay}
                                                                                            </td>
                                                                                            <td>{getHours(chuyenBay.thoi_gian_di, "DD-MM-YYYY HH:mm") + " " + chuyenBay.ma_san_bay_di}</td>
                                                                                            <td>{getHours(chuyenBay.thoi_gian_den, "DD-MM-YYYY HH:mm") + " " + chuyenBay.ma_san_bay_den}</td>
                                                                                            <td>                                                             
                                                                                                <Link 
                                                                                                    className="text-info" 
                                                                                                    to={{
                                                                                                        pathname: `${path}/cap-nhat/${dataDatVe.id}`,
                                                                                                        state: {
                                                                                                          dat_cho_id: dataDatVe.id,
                                                                                                          diem_di: chuyenBay.ma_san_bay_di,
                                                                                                          diem_den: chuyenBay.ma_san_bay_den,
                                                                                                          ngay_di: getDate(chuyenBay.thoi_gian_di, "DD-MM-YYYY", "MM-DD-YYYY"),
                                                                                                          hanh_trinh_id: chuyenBay.hanh_trinh_id,
                                                                                                          loai_dinh_dang: 2,
                                                                                                          bao_gia_id: dataDatVe.bao_gia_id,
                                                                                                          ma_pnr: dataDatVe.ma_pnr,
                                                                                                          hanh_khach: dataDatVe.hanh_khach,
                                                                                                          action: history.location.state.action
                                                                                                        }
                                                                                                    }}>   
                                                                                                    <i
                                                                                                      className="mdi mdi-pencil font-size-18"
                                                                                                    ></i>
                                                                                                </Link>
                                                                                            </td>
                                                                                        </tr>                   
                                                                                 
                                                                                </React.Fragment>
                                                                            )
                                                                        })
                                                                        : null
                                                                }
                                                                </tbody>
                                                            </Table>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default withRouter(ThongTinHanhTrinh);