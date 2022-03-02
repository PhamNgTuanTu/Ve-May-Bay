import Breadcrumbs from "components/Common/Breadcrumb";
import SpinnerLoading from "components/Custom/SpinnerLoading";
import { getDay, getMonth, getYear, getDate, moneyFormat } from "helpers/function/function_helper";
import moment from "moment";
import React, { useEffect, useState, useRef } from 'react';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter, useRouteMatch } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import ThayDoiThongTinHanhKhachForm from "../../components/Custom/Form/ThayDoiThongTinHanhKhachForm";
import ThongTinVeBox from "../../components/Custom/xuat-ve/ThongTinVeBox";
import { chapNhanCapNhatHanhKhach, capNhatPhiThayDoiThongTin, layThongTinGiaVe, capNhatBaoGiaHanhKhach, postThongTinHanhKhach, saveDataForm, layThongTinHanhKhachBb } from "../../store/actions";
import SweetAlert from "react-bootstrap-sweetalert"

const initlabel = {
    tab: 'Thay đổi thông tin hành khách',
    tab_table: 'Thông tin hành khách',
    tab_ticket: "Thông tin vé"
};
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"
let hanhKhachNguoiLon = 1;
let hanhKhachTreEm = 2;
function ThayDoiThongTinHanhKhach(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { path } = useRouteMatch()
    const { id } = useParams();
    let {storeDataCapNhat, storeDataPhiThayDoi, idDatCho, storeDataHanhKhach, loading, resApi, storeDataForm, resApiForm, loadingForm } = useSelector(state => ({
        idDatCho: state.DanhSachDatCho.id,
        storeDataHanhKhach: state.ThongTinHanhKhach.dataHanhKhach,
        storeDataPhiThayDoi: state.ThongTinHanhKhach.dataPhiThayDoi,
        loading: state.ThongTinHanhKhach.loading,
        loadingForm: state.ThongTinHanhKhach.loadingForm,
        resApi: state.ThongTinHanhKhach.resApi,
        resApiForm: state.ThongTinHanhKhach.resApiForm,
        storeDataForm: state.ThongTinHanhKhach.dataForm,
        storeDataCapNhat: state.ThongTinHanhKhach.dataCapNhat
    }))
    const [dataChuyenBay, setDataChuyenBay] = useState([])
    const [disableBtn, setDisableBtn] = useState(false)
    const [descriptionDialog, setSescriptionDialog] = useState("");
    const [formRef, setformRef] = useState([])
    const [openDialogBaoGia, setOpenDialogBaoGia] = useState(false)
    const [openDialogError, setOpenDialogError] = useState(false)
    const [openDialogSuccess, setOpenDialogSuccess] = useState(false)
    const [initialValues, setinitialValues] = useState({
        hanh_khach_id: 0,
        danh_xung: "",
        ho: "",
        ten: "",
        ngay_sinh: "",
        dien_thoai: "",
        email: "",
        gioi_tinh: "",
        dia_chi: "",
        quoc_tich: "",
        quoc_gia: "",
        thanh_pho: "",
        em_be: []
        
    })

    const handleCapNhatHanhKhach = () => {
        var isKhuHoi = history.location.state.isKhuHoi;
        var paramsCapNhatPhi = createParamsCapNhatPhi();
        setOpenDialogBaoGia(false)
        dispatch(capNhatPhiThayDoiThongTin(paramsCapNhatPhi))
    }

    const createDataCapNhatPhi = (isKhuHoi, phiBaoGia, dataCapNhat) => {
        var hanhKhach = {
            ho: dataCapNhat.ho,
            ten: dataCapNhat.ten,
            ma_hang_bay: "VJ"
        }
        if(phiBaoGia) {
            hanhKhach.phi_hanh_khach = phiBaoGia
        }
        var params = {
            mot_chieu: hanhKhach,
            ma_hang_bay: "VJ",
            is_save: true
        }
        if(isKhuHoi) {
            params.hai_chieu = hanhKhach
        }
        return params;
    } 

    const createParamsCapNhatPhi = () => {
        var params = {
            requestBody: createDataCapNhatPhi(history.location.state.isKhuHoi, storeDataPhiThayDoi.phi_hanh_khach, initialValues),
            url: "/th-api/tim-ve/tinh-phi-truoc-dat-cho/cap-nhat/" + history.location.state.baoGiaId
        } 
        return params
    }

    const createParamsBaoGia = (values, request_bao_gia = false) => {
       var info = {
          danh_xung: values.danh_xung,
          ho: values.ho,
          ten: values.ten,
          ngay_sinh: getDate(values.ngay_sinh,  "MM-DD-YYYY", "DD-MM-YYYY"),
          quoc_tich: values.quoc_tich,
          thanh_pho: values.thanh_pho,
          quoc_gia:  values.quoc_gia,
          dien_thoai: values.dien_thoai,
          email: values.email,
          dia_chi: values.dia_chi,
          em_be: values.em_be
        }
        var params = {
            passenger: {
                is_bao_gia: request_bao_gia,
                loai_hanh_khach: history.location.state.passenger.loai_hanh_khach,
                thong_tin_hanh_khach: info
            },
            urlCapNhatDatVe: history.location.state.urlCapNhatDatVe
        }
        return params
    }

    const onFormSubmit = () => {
        formRef.current.submitForm()
    }

    const onSubmit = (values) => {
        setinitialValues(values)
        var params = createParamsBaoGia(values, true);
        dispatch(capNhatBaoGiaHanhKhach(params))
    }

    const convertID = (id) => {
        let dinhDanh = id.split('-').slice(-1)[0];
        return dinhDanh
    }

    useEffect(() => {
        resApiForm = {};
        resApi = {};
        storeDataCapNhat = {};
    }, [])

    useEffect(() => {
       if(storeDataCapNhat.id) {
           setOpenDialogSuccess(true)
           setSescriptionDialog(resApiForm.message)
       }
    }, [storeDataCapNhat])

    useEffect(() => {
        var initForm = history.location.state.passenger.thong_tin_hanh_khach;
        console.log(history.location.state)
        setinitialValues(initForm)
    }, [history.location.state])

    useEffect(() => {
        console.log(resApiForm)
        if (JSON.stringify(resApiForm) !== "{}" && resApiForm.code === 200) {
            if (resApiForm.action === "cat-nhat-bao-gia-hanh-khach" && resApiForm.message != "Cập nhật hành khách thành công") {
                setOpenDialogBaoGia(true)
                setSescriptionDialog(storeDataPhiThayDoi.tong_thanh_tien)
            }
            if (resApiForm.action === "cat-nhat-phi-thay-doi-hanh-khach") {
                var paramsBaoGia = createParamsBaoGia(initialValues);
                dispatch(chapNhanCapNhatHanhKhach(paramsBaoGia))
            }
        } 
        if (JSON.stringify(resApiForm) !== "{}" && resApiForm.code === 400 || resApiForm.code === 401) {
            if (resApiForm.action === "cat-nhat-bao-gia-hanh-khach") {
                setOpenDialogError(true)
                setSescriptionDialog(resApiForm.message)
            }
        }

    }, [resApiForm.id])

    return (
        <>
            {loadingForm || loading ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />
                    {
                        <>
                            <Row>
                                <Col md="12" className="passenger-form">
                                    <Card outline color="primary" className="border">
                                        <CardTitle className="m-4 d-flex align-items-center">
                                            <h5>{initlabel.tab_table}</h5>
                                        </CardTitle>
                                        <CardBody className="pt-0">
                                            <ThayDoiThongTinHanhKhachForm
                                                loaiHanhKhach={history.location.state.passenger.loai_hanh_khach}
                                                initialValues={initialValues}
                                                onSetRef={setformRef}
                                                onSubmit={onSubmit}
                                                dinhDanh={convertID(id)}
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <CardBody className="background-pay">
                                    <Row>
                                        <Col md="6" xs="6" xl="6" className="d-flex align-items-center justify-content-start btn-pre">
                                            <Button type="button" color="primary" outline onClick={
                                                () => history.goBack()
                                            } >
                                                Quay lại
                                            </Button>
                                        </Col>
                                        <Col md="6" xs="6" xl="6" className="d-flex align-items-center justify-content-end btn-next">
                                            <Button type="submit" disabled={disableBtn} color="primary" outline onClick={onFormSubmit}>
                                                {disableBtn ? "Đang xác thực ..." : "Tiếp tục"}
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Row>
                        </>
                    }
                </Container>
            </div>
            {openDialogBaoGia ? (
                <SweetAlert
                  title="Thông Báo"
                  warning
                  showCancel
                  confirmBtnBsStyle="success"
                  cancelBtnBsStyle="danger"
                  confirmBtnText="Chấp nhận"
                  cancelBtnText="Từ chối"
                  onConfirm={handleCapNhatHanhKhach}
                  onCancel={() => {
                    setOpenDialogBaoGia(false)
                  }}
                >
                   Tổng tiền thay đổi thông tin hành khách là: 
                   <br></br>
                  <span className="text-danger">{" " + moneyFormat(descriptionDialog)} VNĐ</span>
                  <br></br>
                  Bạn có đồng ý thay đổi thông tin không?
                </SweetAlert>) : null}
            { openDialogError ?
                <SweetAlert
                    error
                    title="Thông báo"
                    timeout={2000}
                    //confirmBtnBsStyle="success"
                    showCloseButton={false}
                    showConfirm={false}
                    /*onCancel={() => {
                        setOpenDialogError(false)
                    }}*/
                    onConfirm={() => {
                        setOpenDialogError(false)
                    }}
                >
                    {descriptionDialog}
                </SweetAlert> : null
            }

            { openDialogSuccess ?
                <SweetAlert
                    success
                    title="Thông báo"
                    timeout={2000}
                    //confirmBtnBsStyle="success"
                    showCloseButton={false}
                    showConfirm={false}
                    /*onCancel={() => {
                        setOpenDialogError(false)
                    }}*/
                    onConfirm={() => {
                        setOpenDialogSuccess(false)
                        history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: history.location.state.veID }
                        })
                    }}
                >
                    {descriptionDialog}
                </SweetAlert> : null
            }
        </>
    );
}

export default withRouter(ThayDoiThongTinHanhKhach);