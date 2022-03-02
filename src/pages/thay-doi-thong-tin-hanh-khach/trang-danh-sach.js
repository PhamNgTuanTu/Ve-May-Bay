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
import { moneyFormat, getDate } from "../../helpers/function/function_helper";
import { layDSDatChoDaChon, xuatVeDaChon, layThongTinGiaVe, layThongTinHanhKhachBb, xuatVeBb } from "../../store/actions";

const initlabel = {
    tab: 'Danh sách hành khách hiệu chỉnh'
};
const label = {
    danh_sach: "Thông tin hành khách"
}
const hangBayVJ = "Vietjet Airlines"
const hangBayBB = "Bamboo Airlines"
const hangBayVN = "Vietnam Airlines"

function DanhSachHieuChinh(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { path } = useRouteMatch();
    let { idDatCho, dataDatVe, resApiForm, storeDataXuatVe, storeDataForm, loadingPage, dataHanhKhach } = useSelector(state => ({
        idDatCho: state.DanhSachDatCho.id,
        dataDatVe: state.XuatVe.content,
        resApiForm: state.XuatVe.resApi,
        storeDataXuatVe: state.XuatVe.dataXuatVe,
        storeDataForm: state.ThongTinHanhKhach.dataForm,
        loadingPage: state.XuatVe.loadingGetThongTinDatCho,
        dataHanhKhach: state.ThongTinHanhKhach.dataHanhKhach,
    }))
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false)
    const [descriptionAlert, setDescriptionAlert] = useState("")
    const [loading, setLoading] = useState(false)
    const [successDialog, setSuccessDialog] = useState(0)
    const [descriptionDialog, setDescriptionDialog] = useState("")

    const getDanhXung = (danhXung, Id) => {
        let name = "";
        if (danhXung === 1) {
            name = "Ông"
        } else if(danhXung === 2) {
            name = "Bà"
        } else if(danhXung === 3) {
            name = "Cô"
        } else if(danhXung === 4) {
            name = "Em trai"
        } else if(danhXung === 5) {
            name = "Em gái"
        } else if(danhXung === 6) {
            name = "Bé trai"
        } else {
            name = "Bé gái"
        }
        return name
    }

    const getHanhKhach = (Id) => {
        let hanhKhach = "";
        dataDatVe["hanh_khach"].map((val, i) => {
            if (val.id === Id) {
                if (val.loai_hanh_khach === 1) {
                    hanhKhach = "Người lớn"
                }
                if (val.loai_hanh_khach === 2) {
                    hanhKhach = "Trẻ em"
                }
            }
        })
        return hanhKhach
    }

    const getEmBeDiCung = (Id) => {
        let slEmBe = 0;
        dataDatVe["hanh_khach"].map((val, i) => {
            if (val.id === Id) {
                if (val.loai_hanh_khach === "1") {
                    dataDatVe["em_be"].map((valueEmBe) => {
                        valueEmBe.id !== null ? slEmBe += 1 : null
                    })
                }
                if (val.loai_hanh_khach === "2") {
                    slEmBe = 0
                }
            }
        })
        return slEmBe
    }

    const getIdLoaiHanhKhach= (Id) => {
        var loaiHanhKhach = 0;
        var id = 0;
        dataDatVe["hanh_khach"].map((val, i) => {
            if (val.id === Id) {
                loaiHanhKhach =  val.loai_hanh_khach;
                id = val.id
            }
        })
        return {
            loai: Number(loaiHanhKhach),
            id: id
        }
    }

    const getHoten = (id) => {
        let hoTen = ""
        dataDatVe["thong_tin_dat_cho"].map((val, i) => {
            if (Number(val.hanh_khach_id) === Number(id)) {
                hoTen = `${val.ho} ${val.ten}`
            }
        })
        return hoTen
    }

    const getPhiDichVu = (idHanhKhach) => {
        let arrPhi = [...dataDatVe["phi"]];
        let arr = [];
        for (let i = 0; i < arrPhi.length; i++) {
            if (arrPhi[i]["ma_hanh_khach"] === idHanhKhach) {
                arr.push(arrPhi[i])
            }
        }
        arr.sort((a, b) => parseFloat(b.tong_thanh_tien) - parseFloat(a.tong_thanh_tien));
        return (
            arr.map((val, i) => {
                return (
                    <tr key={i}>
                        <td>{val.mo_ta_ve}</td>
                        <td>{`${moneyFormat(val.so_tien_co_ban)} VNĐ`}</td>
                        <td>{`${moneyFormat(val.so_tien_thue)} VNĐ`}</td>
                        <td>{`${moneyFormat(val.tong_thanh_tien)} VNĐ`}</td>
                    </tr>
                )
            })
        )
    }

    const dsPerSon = (array) => {
        //array.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        return (
            <>
                {
                    array.thong_tin_dat_cho.map((passenger, i) => {
                        return (
                            <tr key={i}>
                                <td>{`${passenger.ho} ${passenger.ten}`}</td>
                                <td>{getDanhXung(passenger.danh_xung, passenger.hanh_khach_id)}</td>
                                <td>{getHanhKhach(passenger.hanh_khach_id)}</td>
                                <td className="text-center">
                                    <Link 
                                        className="text-success" 
                                        to={{
                                            pathname: `${path}/hanh-khach/${passenger.hanh_khach_id}`,
                                            state: sendDataEditUrl(passenger, array.id, array.is_khu_hoi, array.bao_gia_id, history.location.state.id) // truyền data HK
                                        }}                                >
                                        <i className="mdi mdi-pencil font-size-18"
                                            id="edittooltip"></i>
                                    </Link>

                                </td>
                            </tr>
                        )
                    })
                }
            </>
        )
    }

    const dsEmBe = (array) => {
        return (
            <>
                {
                    array.map((val, i) => {
                        return (
                            <React.Fragment key={i}>
                                {val.id !== null ?
                                    <tr>
                                        <td>{`${val.ho} ${val.ten}`}</td>
                                        <td>{val.gioi_tinh === "nam" ? "Bé trai" : "Bé gái"}</td>
                                        <td>Em bé</td>
                                        <td className="text-center">
                                            <i className="mdi mdi-pencil font-size-18"
                                                    id="edittooltip"></i>
                                        </td>
                                    </tr> : null
                                }
                            </React.Fragment>
                        )
                    })
                }
            </>
        )
    }

    const totalPrice = () => {
        var total = 0;
        /*if (JSON.stringify(dataDatVe) !== "{}" && dataDatVe["phi"].length > 0) {
            dataDatVe["phi"].map((data) => {
                total += Number(data.tong_thanh_tien);
            })
        }*/
        return total;
    }

    const handlePay = () => {
        if (JSON.stringify(dataDatVe) !== "{}" && dataDatVe.ten_hang_bay === hangBayVJ) {
            setSuccessDialog(1)
            setDescriptionDialog("Xác nhận thanh toán !")
            setLoading(true)
        } else if (JSON.stringify(dataDatVe) !== "[]" && dataDatVe.ten_hang_bay === hangBayBB) {
            setSuccessDialog(2)
            setDescriptionDialog("Xác nhận thanh toán !")
            setLoading(true)
        }
    }

    const handleConFirm = () => {
        var arr = {
            dat_cho_id: history.location.state.id,
            loai_thanh_toan: "AG",
            xac_nhan: "y"
        }
        setSuccessDialog(0)
        dispatch(xuatVeDaChon(arr))
    }

    const handleConFirmBb = () => {
        if (JSON.stringify(dataHanhKhach) !== "[]") {
            let toTalPerSon = 0
            dataHanhKhach[0].chi_tiet_so_luong_khach.map((val) => {
                if (val.loai === "ADULT" || val.loai === "CHILD") {
                    toTalPerSon += Number(val.so_luong)
                }
            })
            let arrThanhToan = []
            dataHanhKhach[0].tong_tien_phai_tra.so_luong_khach.map((val) => {
                arrThanhToan.push({
                    "id_hanh_khach": val.id_khach[0],
                    "so_tien": val.so_tien[0],
                    "loai_tien": "VND"
                })
            })
            var arr = {
                "so_luong_cho": toTalPerSon,
                "ma_pnr": dataHanhKhach[0].pnr_number,
                "tt_nguoi_dat_ve": [
                    {
                        "ten_nguoi_dat": dataHanhKhach[0].thong_tin_hanh_khach[0].ten,
                        "ho_nguoi_dat": dataHanhKhach[0].thong_tin_hanh_khach[0].ho
                    }
                ],
                "tt_thanh_toan": arrThanhToan
            }
            dispatch(xuatVeBb(arr))
        }
        setSuccessDialog(0)
    }

    const getPhiDichVuDoiThongTin = (idHanhKhach) => {
        let arr = [];
        if (JSON.stringify(storeDataForm) !== "[]") {
            for (let i = 0; i < storeDataForm.length; i++) {
                if (storeDataForm[i]["params"]["ma_hanh_khach"] === idHanhKhach) {
                    arr = storeDataForm[i]
                }
            }
        }
        return (
            JSON.stringify(arr) !== "[]" ?
                <tr>
                    <td>Thay đổi thông tin hành khách</td>
                    <td>{`${moneyFormat(300000)} VNĐ`}</td>
                    <td>{`${moneyFormat(20000)} VNĐ`}</td>
                    <td>{`${moneyFormat(320000)} VNĐ`}</td>
                </tr> : null
        )
    }

    const sendDataEditUrl = (thong_tin_dat_cho, dat_cho_id = 0, is_khu_hoi = false, bao_gia_id = 0, veID = 0) => {
        var info = thong_tin_dat_cho;
        info.quoc_gia ="VNM";
        info.quoc_tich = "VNM";
        info.ma_tinh = "LA";
        info.thanh_pho = "hcm";
        info.ho = info.ho;
        info.danh_xung = Number(info.danh_xung)
        info.ngay_sinh = getDate(info.ngay_sinh, "DD-MM-YYYY", "MM-DD-YYYY") // chuyển đúng định dạng date
        var getIdHanhKhach =  getIdLoaiHanhKhach(info.hanh_khach_id);
        if(getEmBeDiCung(info.hanh_khach_id) == 0) {
            info.em_be = [];
        } else {
            info.em_be = [];
        } 

        var data = {
            loai_hanh_khach: getIdHanhKhach.loai,
            thong_tin_hanh_khach: info,
            is_bao_gia: true
        }
        return {
            veID: veID,
            baoGiaId: bao_gia_id,
            isKhuHoi: is_khu_hoi, 
            passenger: data,
            urlCapNhatDatVe: '/vietjet/dat-ve/'+ dat_cho_id + '/hanh-khach/' + getIdHanhKhach.id
        }
    }

    useEffect(() => {
        var id = history.location.state.id
        dispatch(layDSDatChoDaChon(id))
    }, [history.location.state.id])



    useEffect(() => {
        if (JSON.stringify(dataDatVe) !== "{}" && dataDatVe.ten_hang_bay === hangBayBB) {
            dispatch(layThongTinHanhKhachBb({ "ma_pnr": dataDatVe.ma_pnr }))
        }
    }, [dataDatVe])

    useEffect(() => {
        resApiForm = []
    }, [])

    useEffect(() => {
        if (resApiForm.action === 'xuat-ve' && resApiForm.code === 400 || resApiForm.code === 401) {
            setDescriptionAlert(resApiForm.message)
            setOpenAlertError(true)
            setLoading(false)
        } else if (resApiForm.action === 'xuat-ve' && resApiForm.code === 200) {
            setLoading(false)
        }
    }, [resApiForm.id])


    return (
        <>
            {loading ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />
                    {resApiForm.action === 'xuat-ve' && resApiForm.code === 200 ?
                        <XuatVeThanhCong
                            dataDatVe={dataDatVe}
                        />
                        :
                        <>
                            <Row>
                                <Col xl="12">
                                    <Card>
                                        <CardBody>
                                            <Row className="mb-3">
                                                <Col sm="6" xs="6">
                                                    <h5>Mã đặt chỗ (PNR): <strong>{JSON.stringify(dataDatVe) !== "{}" ? dataDatVe.ma_pnr : null}</strong>
                                                    </h5>
                                                </Col>
                                                <Col sm="6" xs="6" className="d-flex align-items-center justify-content-end">
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col sm="8" xs="7">
                                                    <CardTitle>{label.danh_sach}</CardTitle>
                                                </Col>
                                            </Row>
                                            <Row>
                                                {JSON.stringify(dataDatVe) !== "{}"?
                                                    <Table hover bordered responsive>
                                                        <thead className="table-light" >
                                                            <tr>
                                                                <th>Họ Tên Hành Khách</th>
                                                                <th>Quý danh</th>
                                                                <th>Hành khách</th>
                                                                <th className="text-center">Chức năng</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {dsPerSon(dataDatVe)}
                                                            {dsEmBe(dataDatVe["em_be"])}
                                                        </tbody>
                                                    </Table> :
                                                    <Table hover bordered responsive>
                                                        <thead className="table-light" >
                                                            <tr>
                                                                <th>Họ Tên Hành Khách</th>
                                                                <th>Quý danh</th>
                                                                <th>Hành khách</th>
                                                                <th className="text-center">Chức năng</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colSpan="7">
                                                                    <p className="text-center">
                                                                        {loadingPage ? "Đang tải dữ liệu vui lòng chờ ..." : "Không tìm thấy dữ liệu"}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                }
                                            </Row>
                                            <Row>
                                                <Col sm="12" xs="12">
                                                <div className="d-flex flex-wrap gap-2 fix-button-footer mt-2">
                                                    <Button type="reset" color="secondary"  onClick={
                                                        () => history.push("/tim-kiem-dat-cho")
                                                    }>
                                                        Quay lại
                                                    </Button>
                                                    {" "}
                                                    <Button  type="submit"  color="primary" onClick={handlePay}>
                                                        Tiếp tục
                                                    </Button>
                                                </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    }
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
                    {
                        successDialog === 1 &&
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
                            onConfirm={handleConFirmBb}
                            onCancel={() => {
                                setSuccessDialog(0)
                                setLoading(false)
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

export default withRouter(DanhSachHieuChinh);