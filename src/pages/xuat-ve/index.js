import Breadcrumbs from "components/Common/Breadcrumb";
import SpinnerLoading from "components/Custom/SpinnerLoading";
import React, { useEffect, useMemo, useState } from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, withRouter, useRouteMatch } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
    Button, Card, CardBody, CardTitle, Col, Container, FormGroup, Input, Label, Row, Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import XuatVeThanhCong from "../../components/Custom/xuat-ve/XuatVeThanhCong";
import { moneyFormat, getDate } from "../../helpers/function/function_helper";
import { layThongTinPhiVe, layDSDatChoDaChon, xuatVeDaChon, layThongTinGiaVe, layThongTinHanhKhachBb, xuatVeBb } from "../../store/actions";
import * as _isEmpty from 'lodash/isEmpty';

const initlabel = {
    tab: 'Xuất vé'
};
const label = {
    danh_sach: "Thông tin hành khách",
    danh_sach2: "Thống kê chí phí đặt chỗ",
    danh_sach3: "Thông tin chuyến bay",
    thanh_toan: "Chi tiết thanh toán"
}

function XuatVe(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { path } = useRouteMatch();
    let { dataPhiVe, dataDatVe, resApi} = useSelector(state => ({
        dataDatVe: state.XuatVe.content,
        resApi: state.XuatVe.resApi,
        dataPhiVe: state.XuatVe.dataPhiVe
    }))
    const [openAlertError, setOpenAlertError] = useState(false)
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [alertConfirm, setAlertConfirm] = useState(false)
    const [descriptionAlert, setDescriptionAlert] = useState("")
    const [hangBay, setHangBay] = useState("")

    const handleConFirm = () => {
        var arr = {
            dat_cho_id: history.location.state.id,
            loai_thanh_toan: "AG",
            xac_nhan: "y",
            ma_hang_bay: codeHangBay(hangBay)
        }
        setAlertConfirm(false)
        setLoading(true)
        dispatch(xuatVeDaChon(arr))
    }

    const codeHangBay = (tenHang) => {
        var code = ""
        if(tenHang == "Vietjet Airlines") {
            code = "VJ"
        } else if(tenHang == "Bamboo Airlines") {
            code = "QH"
        } else if( tenHang == "Vietnam Airlines") {
            code = "VN"
        }
        return code
    }

    const renderHanhKhach = (chuyenBay) => {
        var rowInTable = null
        if(!_isEmpty(chuyenBay) && !_isEmpty(chuyenBay.thong_tin_hanh_khach)) {
            chuyenBay.thong_tin_hanh_khach.length > 0 ? rowInTable = chuyenBay.thong_tin_hanh_khach.map((data, index) => {
                return (
                    <React.Fragment>
                        <tr>
                            <td>{data.ten_day_du}</td>
                            <td>{data.quy_danh}</td>
                            <td>{data.hanh_khach}</td>
                            <td>{data.em_be_di_cung ? data.em_be_di_cung : 0}</td>
                            <td>{moneyFormat(data.tong_tien) + " VNĐ"}</td>
                        </tr>
                    </React.Fragment>
                )
            }) : null

        } 
        return rowInTable
    }

    const renderPhiChuyenBay = (chuyenBay) => {
        var rowInTable = null
        if(!_isEmpty(chuyenBay) && !_isEmpty(chuyenBay.chi_tiet_phi_ve)) {
            chuyenBay.chi_tiet_phi_ve.length > 0 ? rowInTable = chuyenBay.chi_tiet_phi_ve.map((data, index) => {
                return (
                    <React.Fragment>
                        {   data.phi_ve.length > 0 ?
                            <tr>
                                <td colSpan="4">
                                    <strong>{data.ho_ten}</strong>
                                </td>
                            </tr> : <tr>
                                        <td><strong>{data.ho_ten}</strong></td>
                                        <td>0 VNĐ</td>
                                        <td>0 VNĐ</td>
                                        <td>0 VNĐ</td>
                                    </tr>
                        }
                        {     
                            data.phi_ve.length > 0 ? data.phi_ve.map((chiTiet, i) => {
                                return (
                                      <tr>
                                        <td>{chiTiet.mo_ta}</td>
                                        <td>{moneyFormat(chiTiet.thanh_tien) + " VNĐ"}</td>
                                        <td>{moneyFormat(chiTiet.thue) + " VNĐ"}</td>
                                        <td>{moneyFormat(Number(chiTiet.thanh_tien) + Number(chiTiet.thue)) + " VNĐ"}</td>
                                    </tr>
                                )
                            }) : null
                            
                        }
                    </React.Fragment>
                )
            }) : null
        }
        return rowInTable
    }

    const renderChuyenBay = (chuyenBay) => {
        var rowInTable = null
        if(!_isEmpty(chuyenBay) && !_isEmpty( chuyenBay.thong_tin_chuyen_bay)){
            chuyenBay.thong_tin_chuyen_bay.length > 0 ? rowInTable = chuyenBay.thong_tin_chuyen_bay.map((data, index) => {
                return (
                    <tr>
                        <td>{data.ngay_bay}</td>
                        <td>{data.ma_chuyen_bay}</td>
                        <td>{data.khoi_hanh}</td>
                        <td>{data.den}</td>
                    </tr>
                )
            }) : null
        } 
        return rowInTable
    }

    const renderTTChuyenBay = (chuyenBay) => {
        var rowInTable = null
        if(!_isEmpty(chuyenBay) && !_isEmpty( chuyenBay.thong_tin_chuyen_bay)){
            chuyenBay.thong_tin_chuyen_bay.length > 0 ? rowInTable = chuyenBay.thong_tin_chuyen_bay.map((data, index) => {
                return (
                    <tr>
                        <td><strong>Chuyến bay -  {data.ma_chuyen_bay} _ Khởi hành: {data.khoi_hanh} </strong></td>
                    </tr>
                )
            }) : null
        } 
        return rowInTable
    }

    const tableThongTinHanhKhach = (data) => {
        return (
            JSON.stringify(data) !== "[]" ?
                <Table hover responsive>
                    <thead style={{ background: "#f8f9fa" }}>
                        <tr>
                            <th>Họ Tên Hành Khách</th>
                            <th>Quý danh</th>
                            <th>Hành khách</th>
                            <th>Em bé đi cùng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderHanhKhach(data.mot_chieu)}
                    </tbody>
                </Table> : null
        )
    }

    const tableThongKePhi = (data) => {
        var chiTietChuyenDi = renderPhiChuyenBay(data.mot_chieu)
        var chiTietChuyenVe = renderPhiChuyenBay(data.hai_chieu)
        return (
            JSON.stringify(data) !== "[]" ?
                <Table hover responsive>
                    <thead style={{ background: "#f8f9fa" }}>
                        <tr>
                            <th>Mô tả</th>
                            <th>Thành tiền</th>
                            <th>Thuế</th>
                            <th>Tổng tiền cần thanh toán</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        chiTietChuyenVe ? 
                        <React.Fragment>
                            {renderTTChuyenBay(data.mot_chieu)}
                            {chiTietChuyenDi}
                            {renderTTChuyenBay(data.hai_chieu)}
                            {chiTietChuyenVe}
                           </React.Fragment>
                        : 
                        <React.Fragment>
                            {chiTietChuyenDi}
                           </React.Fragment> 
                    }
                    <tr>
                    <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng</td>
                        <td>
                           {moneyFormat(data.tong_thanh_tien) + " VNĐ"} 
                        </td>
                    </tr>
                  </tbody>
                </Table> : null
        )
    }

    const tableThongTinChuyenBay = (data) => {
        return (
            JSON.stringify(data) !== "[]" ?
                <Table hover responsive>
                    <thead style={{ background: "#f8f9fa" }}>
                        <tr>
                            <th>Ngày bay</th>
                            <th>Mã chuyến bay</th>
                            <th>Khởi hành</th>
                            <th>Đến</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderChuyenBay(data.mot_chieu)}
                        {renderChuyenBay(data.hai_chieu)}
                    </tbody>
                </Table> : null
        )
    }

    useEffect(() => {
        var id = history.location.state.id
        dispatch(layDSDatChoDaChon(id))
    }, [history.location.state.id])

    useEffect(() => {
        if(dataDatVe.bao_gia_id) {
            dispatch(layThongTinPhiVe(dataDatVe.bao_gia_id))
            setHangBay(dataDatVe.ten_hang_bay)
        }
    }, [dataDatVe])

    useEffect(() => {
        resApi = []
    }, [])

    useEffect(() => {
        if (resApi.action === 'xuat-ve' && resApi.code === 400 || resApi.code === 401) {
            setDescriptionAlert(resApi.message)
            setOpenAlertError(true)
            setLoading(false)
        } else if (resApi.action === 'xuat-ve' && resApi.code === 200) {
            setOpenAlertSuccess(true)
            setDescriptionAlert(resApi.message)
            setLoading(false)
        }
    }, [resApi.id])


    return (
        <>
            {loading ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                <Breadcrumbs title={initlabel.tab} />
                <Row>
                    <Col xl="12">
                        <Card>
                            <CardBody>
                                <Row className="mb-3">
                                    <Col sm="6" xs="6">
                                        <h5>Mã đặt chỗ (PNR): <strong>{!_isEmpty(dataDatVe) ? dataDatVe.ma_pnr : null}</strong>
                                        </h5>
                                    </Col>
                                    <Col sm="6" xs="6" className="d-flex align-items-center justify-content-end">
                                        <UncontrolledDropdown direction="left">
                                          <DropdownToggle tag="div">
                                               <button className="btn btn-primary">Chỉnh sửa</button>
                                          </DropdownToggle>
                                          <DropdownMenu 
                                              data-popper-placement="left-start"
                                             >  
                                                { !_isEmpty(dataDatVe) ?
                                                    <React.Fragment>
                                                        <Link 
                                                            className="text-info dropdown-item border-bottom" 
                                                            to={{
                                                                pathname: `danh-sach-hieu-chinh`,
                                                                state: {id : dataDatVe.id} 
                                                            }} >
                                                            Thay đổi thông tin hành khách
                                                        </Link>
                                                        <Link 
                                                            className="text-info dropdown-item border-bottom" 
                                                            to={{
                                                                pathname: `thong-tin-hanh-trinh`,
                                                                state: {id : dataDatVe.id} 
                                                            }}
                                                            >
                                                            Thay đổi chuyến bay
                                                        </Link>
                                                        <p 
                                                            className="text-info dropdown-item border-bottom cursor-pointer" >
                                                            Tách PNR
                                                        </p>
                                                        <p 
                                                            className="text-info dropdown-item border-bottom cursor-pointer" 
                                                            >
                                                            Thay đổi dịch vụ, ghế
                                                        </p>
                                                        <p 
                                                            className="text-info dropdown-item border-bottom cursor-pointer" 
                                                            >
                                                            Thêm chặng bay
                                                        </p> 
                                                    </React.Fragment>
                                             : null}
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm="8" xs="7">
                                        <CardTitle>{label.danh_sach}</CardTitle>
                                    </Col>
                                </Row>
                                <Row>
                                {   _isEmpty(dataPhiVe) ?
                                       <Table hover bordered responsive>
                                            <thead className="table-light" >
                                                <tr>
                                                    <th>Họ Tên Hành Khách</th>
                                                    <th>Quý danh</th>
                                                    <th>Hành khách</th>
                                                    <th>Em bé đi cùng</th>
                                                    <th>Tổng tiền</th>
                                                    <th>Tổng tiền thanh toán</th>
                                                    <th className="text-center">Chức năng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="7">
                                                        <p className="text-center">
                                                            {loading ? "Đang tải dữ liệu vui lòng chờ ..." : "Không tìm thấy dữ liệu"}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    : tableThongTinHanhKhach(dataPhiVe)
                                }
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl="12">
                        <Card>
                            <CardBody>
                                <Row className="mb-3">
                                    <Col sm="8" xs="7">
                                        <CardTitle>{label.danh_sach2}</CardTitle>
                                    </Col>
                                </Row>
                                <Row>
                                {  _isEmpty(dataPhiVe) ?
                                    <Table hover responsive>
                                        <thead style={{ background: "#f8f9fa" }}>
                                            <tr>
                                                <th>Mô tả</th>
                                                <th>Thành tiền</th>
                                                <th>Thuế</th>
                                                <th>Tổng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                            <tr >
                                                <td colSpan="4">
                                                    <p className="text-center">
                                                        {loading ? "Đang tải dữ liệu vui lòng chờ ..." : "Không tìm thấy dữ liệu"}
                                                    </p>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                    : tableThongKePhi(dataPhiVe)
                                 }
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl="12">
                        <Card>
                            <CardBody>
                                <Row className="mb-3">
                                    <Col sm="8" xs="7">
                                        <CardTitle>{label.danh_sach3}</CardTitle>
                                    </Col>
                                </Row>
                                <Row>
                                {   _isEmpty(dataPhiVe) ?
                                       <Table hover bordered responsive>
                                            <thead className="table-light" >
                                                <tr>
                                                    <th>Ngày bay</th>
                                                    <th>Mã chuyến bay</th>
                                                    <th>Khởi hành</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="7">
                                                        <p className="text-center">
                                                            {loading ? "Đang tải dữ liệu vui lòng chờ ..." : "Không tìm thấy dữ liệu"}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    : tableThongTinChuyenBay(dataPhiVe)
                                }
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl="12">
                        <Card>
                            <CardBody>
                                <CardTitle>{label.thanh_toan}</CardTitle>
                                <Row>
                                    <Col className="d-flex align-items-center ">
                                        <div className="m-3 mt-0">
                                            <FormGroup check className="mt-3 mb-3">
                                                <Label check>
                                                    <Input type="radio" name="radio1" defaultChecked />{' '}
                                                    Thanh toán đại lý
                                                </Label>
                                            </FormGroup>
                                            <img src="https://fawookidi.com/wp-content/uploads/2019/06/hinh-thuc-thanh-toan-khi-mua-den-led.jpg" width="200px"></img>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="total-price mt-3">
                                    <label>Tổng cộng : {!_isEmpty(dataPhiVe) ? moneyFormat(dataPhiVe.tong_thanh_tien) + " VNĐ" : "0 VNĐ"}</label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <CardBody>
                        <Row>
                            <Col sm="12" xs="12">
                                <div className="d-flex flex-wrap gap-2 fix-button-footer mt-2">
                                    <Button type="reset" color="secondary"  onClick={
                                        () => history.goBack()
                                    }>
                                        Quay lại
                                    </Button>
                                    {" "}
                                    <Button  type="submit" color="primary" onClick={() => {
                                        setAlertConfirm(true)
                                        setDescriptionAlert("Xác nhận thanh toán !")
                                        }}>
                                        Tiếp tục
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Row>
                {openAlertError ?
                    <SweetAlert
                        error
                        title="Thông báo"
                        timeout={2000}
                        confirmBtnBsStyle="success"
                        showCloseButton={false}
                        showConfirm={false}
                        onCancel={() => {
                            setOpenAlertError(false)
                        }}
                        onConfirm={() => {
                            setOpenAlertError(false)
                        }}
                    >
                        {descriptionAlert}
                    </SweetAlert> : null
                }
                {openAlertSuccess ?
                    <SweetAlert
                        success
                        title="Thông báo"
                        timeout={2000}
                        confirmBtnBsStyle="success"
                        showCloseButton={false}
                        showConfirm={false}
                        onCancel={() => {
                            setOpenAlertSuccess(false)
                        }}
                        onConfirm={() => {
                            setOpenAlertSuccess(false)
                        }}
                    >
                        {descriptionAlert}
                    </SweetAlert> : null
                }
                {
                    alertConfirm &&
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
                            setAlertConfirm(false)
                            setLoading(false)
                        }}
                    >
                        {descriptionAlert}
                    </SweetAlert>
                }
                </Container>
            </div>
        </>
    );
}

export default withRouter(XuatVe);