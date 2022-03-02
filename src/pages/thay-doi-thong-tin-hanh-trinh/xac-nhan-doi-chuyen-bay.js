import Breadcrumbs from "components/Common/Breadcrumb";
import SpinnerLoading from "components/Custom/SpinnerLoading";
import React, { useEffect, useMemo, useState } from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, withRouter, useRouteMatch } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
    Button, Card, CardBody, CardTitle, Col, Container, FormGroup, Input, Label, Row, Table
} from 'reactstrap';
import XuatVeThanhCong from "../../components/Custom/xuat-ve/XuatVeThanhCong";
import { moneyFormat, getDate, sumValue } from "../../helpers/function/function_helper";
import {capNhatPhiThayDoiChuyenBay, capNhatBaoGiaHanhTrinh, capNhatThemChang} from "../../store/actions";
import * as _isEmpty from 'lodash/isEmpty';

const initlabel = {
    tab: 'Thông tin thay đổi chuyến bay'
};
const label = {
    danh_sach: "Thông tin hành khách",
    danh_sach2: "Thống kê chí phí đặt chỗ",
    danh_sach3: "Thông tin chuyến bay"
}
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"

function XacNhanThayChuyenBay(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { path } = useRouteMatch();
    let { dataPhiThayDoi, resApi, loading,  } = useSelector(state => ({
         dataPhiThayDoi: state.ThongTinChuyenBay.dataPhiThayDoi,
        resApi: state.ThongTinChuyenBay.resApi,
        loading: state.ThongTinChuyenBay.loading,
    }))
    const [openAlertError, setOpenAlertError] = useState(false)
    const [openAlertConfirm, setOpenAlertConfirm] = useState(false)
    const [descriptionAlert, setDescriptionAlert] = useState("")
    const [successDialog, setSuccessDialog] = useState(false)
    const [descriptionDialog, setDescriptionDialog] = useState("")
    const [loadingPage, setLoadingPage] = useState(false)

    const handleConFirm = () => {
        if(history.location.state.action == "doi-chuyen-bay") {
            dispatch(capNhatBaoGiaHanhTrinh(history.location.state.paramCapNhat))
        } else {
            dispatch(capNhatThemChang(history.location.state.paramCapNhat))
        }
    	history.location.state.paramsPhi.requestBody.is_save = true
        dispatch(capNhatPhiThayDoiChuyenBay(history.location.state.paramsPhi))
        setOpenAlertConfirm(false)
        setLoadingPage(true)
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
        var paramsPhiThayDoi = history.location.state.paramsPhi
        dispatch(capNhatPhiThayDoiChuyenBay(paramsPhiThayDoi))
    }, [history.location.state.id])

    useEffect(() => {
        resApi = []
    }, [])

    useEffect(() => {
        setLoadingPage(false)
        if (JSON.stringify(resApi) !== "{}" && resApi.code === 200) {
            if (resApi.action === "cat-nhat-hanh-trinh") {
                setSuccessDialog(true)
                setDescriptionDialog(resApi.message)
            }
        } 
    }, [resApi.id])


    return (
        <>
            {loadingPage ? <SpinnerLoading></SpinnerLoading> : null}
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
					                        <h5>Mã đặt chỗ (PNR): <strong>{history.location.state.ma_pnr}</strong>
					                        </h5>
				                        </Col>
                                    </Row>
                                    <Row className="mb-3">

                                        <Col sm="8" xs="7">
                                            <CardTitle>{label.danh_sach}</CardTitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                    {   JSON.stringify(dataPhiThayDoi) === "{}" ?
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
                                        : tableThongTinHanhKhach(dataPhiThayDoi)
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
                                    {  JSON.stringify(dataPhiThayDoi) === "{}" ?
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
                                        : tableThongKePhi(dataPhiThayDoi)
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
                                    {   JSON.stringify(dataPhiThayDoi) === "{}" ?
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
                                        : tableThongTinChuyenBay(dataPhiThayDoi)
                                    }
                                    </Row>
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
                                        <Button  type="submit" color="primary" onClick={() => setOpenAlertConfirm(true)}>
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
                    {openAlertConfirm ? (
		                <SweetAlert
		                  title="Thông Báo"
		                  warning
		                  showCancel
		                  confirmBtnBsStyle="success"
		                  cancelBtnBsStyle="danger"
		                  confirmBtnText="Chấp nhận"
		                  cancelBtnText="Từ chối"
		                  onConfirm={handleConFirm}
		                  onCancel={() => {
		                    setOpenAlertConfirm(false)
		                  }}
		                >
		                  Bạn có đồng ý thay đổi chuyến bay không?
		                </SweetAlert>) : null}
                    {
                        successDialog &&
                        <SweetAlert
                            success
                            title="Thông báo"
                            timeout={2000}
                            confirmBtnBsStyle="success"
                            showCloseButton={false}
                            showConfirm={false}
                            onCancel={() => {
                                setSuccessDialog(false)
                            }}
                            onConfirm={() => {
                                history.push({
		                          pathname: '/tim-kiem-dat-cho/xuat-ve',
		                          state: { id: history.location.state.id }
		                        })
                            }}
                        >
                            {descriptionDialog}
                        </SweetAlert>
                    }
                </Container>
            </div>
        </>
    );
}

export default withRouter(XacNhanThayChuyenBay);