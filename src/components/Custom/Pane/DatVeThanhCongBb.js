import moment from "moment";
import React from 'react';
import { useHistory } from "react-router";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getHours, moneyFormat } from "../../../helpers/function/function_helper";

DatVeThanhCongBb.propTypes = {};

function DatVeThanhCongBb(props) {
    const history = useHistory()
    const { storeDataDatVe, storeChuyenVe, storeChuyenDi, phiVeBb } = props;

    const displayPriceGiaGhe = (data) => {
        return (
            <tr>
                <td>{data.loai_gia_ve}</td>
                <td>{Number(data.gia_ve_co_ban).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                <td>{Number(0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                <td>{Number(data.gia_ve_co_ban).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
            </tr>
        )
    }

    const disPlayPricePhuTro = (data) => {
        if (JSON.stringify(data) !== "{}") {
            return (
                data.map((val, i) => {
                    return (
                        <tr key={i}>
                            <td>{val.ma}</td>
                            <td>{Number(val.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                            <td>{Number(0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                            <td>{Number(val.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        </tr>
                    )
                })
            )
        }
    }

    const disPlayPriceThue = (data) => {
        return (
            data.map((val, i) => {
                return (
                    <tr key={i}>
                        <td>{val.ten_thue}</td>
                        <td>{Number(val.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        <td>{Number(0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        <td>{Number(val.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                )
            })
        )
    }

    const findKhachHang = (id, data) => {
        let HoTen = ""
        if (data && JSON.stringify(data) !== "[]") {
            data.map((val, i) => {
                if (Number(val.id_khach) === Number(id)) {
                    HoTen = `${val.ho} ${val.ten}`
                }
            })
        }
        return HoTen
    }

    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <Card outline color="primary" className="border mt-3">
                            <CardHeader className="bg-transparent">
                                <CardTitle className="text-primary">Đặt vé thành công</CardTitle>
                            </CardHeader>
                            <div className="card-body-custom">
                                {JSON.stringify(storeChuyenVe) !== "{}" ?
                                    <CardTitle className="text-primary">Chuyến đi</CardTitle> : null}
                                {JSON.stringify(storeChuyenDi) !== "{}" ?
                                    storeChuyenDi.chang_bay.map((val, i) => {
                                        return (
                                            <div key={i}>
                                                {
                                                    storeChuyenDi.chang_bay.length > 1 ?
                                                        <Row className="mt-2 mb-2">
                                                            <Col>
                                                                <span>{`Chặng ${i + 1}`}</span>
                                                            </Col>
                                                        </Row> : null
                                                }
                                                <h6 className="clearfix">Ngày khởi hành: <strong className="text-dark">
                                                    {`${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('dddd')}, ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('L')}`}</strong>
                                                </h6>
                                                <h6>{`${getHours(val.ngay_di, 'DD-MM-YYYY h:mm:ss a')} : ${val.san_bay_di.ma_san_bay}`}</h6>
                                                <h6>{`${getHours(val.ngay_den, 'DD-MM-YYYY h:mm:ss a')} : ${val.san_bay_den.ma_san_bay}`}</h6>
                                                <h6>{`${val.ten_hang_bay} : ${val.ma_chuyen_bay}`}</h6>
                                            </div>
                                        )
                                    })
                                    : null}
                                <>
                                    <h6>{`Tổng thời gian bay : ${storeChuyenDi.tong_so_gio_bay}`}</h6>
                                    <h6 className="clearfix">Hạng chỗ đã chọn: <strong className="text-dark">{storeChuyenDi.loai_ve.mo_ta}</strong></h6>
                                </>
                            </div>
                            <div className="card-body-custom">
                                {JSON.stringify(storeChuyenVe) !== "{}" ?
                                    <CardTitle className="text-primary">Chuyến về</CardTitle> : null}
                                {JSON.stringify(storeChuyenVe) !== "{}" ?
                                    <>
                                        {
                                            storeChuyenVe.chang_bay.map((val, i) => {
                                                return (
                                                    <div key={i}>
                                                        {
                                                            storeChuyenVe.chang_bay.length > 1 ?
                                                                <Row className="mt-2 mb-2">
                                                                    <Col>
                                                                        <span>{`Chặng ${i + 1}`}</span>
                                                                    </Col>
                                                                </Row> : null
                                                        }
                                                        <h6 className="clearfix">Ngày khởi hành: <strong className="text-dark">
                                                            {`${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('dddd')}, ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('L')}`}</strong>
                                                        </h6>
                                                        <h6>{`${getHours(val.ngay_di, 'DD-MM-YYYY h:mm:ss a')} : ${val.san_bay_di.ma_san_bay}`}</h6>
                                                        <h6>{`${getHours(val.ngay_den, 'DD-MM-YYYY h:mm:ss a')} : ${val.san_bay_den.ma_san_bay}`}</h6>
                                                        <h6>{`${val.ten_hang_bay} : ${val.ma_chuyen_bay}`}</h6>
                                                    </div>
                                                )
                                            })
                                        }
                                        <h6>{`Tổng thời gian bay : ${storeChuyenVe.tong_so_gio_bay}`}</h6>
                                        <h6 className="clearfix">Hạng chỗ đã chọn: <strong className="text-dark">{storeChuyenVe.loai_ve.mo_ta}</strong></h6>
                                    </>
                                    : null}
                            </div>
                            <div className="card-body-custom">
                                {
                                    JSON.stringify(storeDataDatVe) !== "[]" ?
                                        <>
                                            <h3 className="clearfix">Mã đặt chỗ: <strong className="text-dark">{storeDataDatVe.ma_pnr}</strong></h3>
                                            {
                                                JSON.stringify(storeDataDatVe.thoi_gian_giu_ve) !== "null" ?
                                                    <>
                                                        <h4 className="clearfix"><strong>
                                                            {`Đặt chỗ của bạn sẽ được giữ lại trong ${(storeDataDatVe.so_gio_giu_ve)}`}
                                                        </strong></h4>
                                                        <h4 className="clearfix">
                                                            <strong>
                                                                {`Nếu không thanh toán trước ${moment(storeDataDatVe.thoi_gian_giu_ve, 'DD-MM-YYYY h:mm:ss a').format('LT')}, 
                                        ${moment(storeDataDatVe.thoi_gian_giu_ve, 'DD-MM-YYYY h:mm:ss a').format('dddd')}
                                        ${moment(storeDataDatVe.thoi_gian_giu_ve, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY")}
                                        (GMT +7) đặt chỗ của bạn sẽ bị hủy`}
                                                            </strong>
                                                        </h4>
                                                    </>
                                                    : null
                                            }

                                        </>
                                        : null
                                }

                            </div>
                            <div className="card-body-custom">
                                <h6 className="clearfix"><strong className="text-dark">Thông tin hành khách</strong></h6>
                                <Table hover bordered responsive>
                                    <thead className="table-light" >
                                        <tr>
                                            <th>Danh xưng</th>
                                            <th>Họ và tên</th>
                                            <th>Email</th>
                                            <th>Số điện thoại</th>
                                            <th>Ngày sinh</th>
                                            <th>Địa chỉ</th>
                                            <th>Khu vực</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            JSON.stringify(storeDataDatVe) !== "[]" && storeDataDatVe["thong_tin_dat_cho"].length > 0 ?
                                                storeDataDatVe["thong_tin_dat_cho"].map((val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{val.danh_xung}</td>
                                                            <td>{`${val.ho} ${val.ten}`}</td>
                                                            <td>{val.email}</td>
                                                            <td>{val.dien_thoai}</td>
                                                            <td>{val.ngay_sinh !== null ? moment(val.ngay_sinh, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY") : ""}</td>
                                                            <td>{val.dia_chi}</td>
                                                            <td>{val.thanh_pho}</td>
                                                        </tr>
                                                    )
                                                })
                                                : null
                                        }
                                        {/* {
                                            JSON.stringify(dataEmBe) !== "[]" && dataEmBe.length > 0 ?
                                                dataEmBe.map((val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{val.danh_xung === "Ông" ? "Em trai" : "Em gái"}</td>
                                                            <td>{`${val.ho} ${val.ten}`}</td>
                                                            <td colSpan="2"></td>
                                                            <td>{val.ngay_sinh !== null ? getDate(val.ngay_sinh) : ""}</td>
                                                            <td colSpan="2"></td>
                                                        </tr>
                                                    )
                                                })
                                                : null
                                        } */}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="card-body-custom">
                                <h6 className="clearfix"><strong className="text-dark">Mô tả thành tiền theo VND</strong></h6>
                                <Table hover bordered responsive>
                                    <thead style={{ background: "#f8f9fa" }}>
                                        <tr>
                                            <th>Mô tả</th>
                                            <th>Thành tiền</th>
                                            <th>Thuế</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            JSON.stringify(phiVeBb) !== "[]" ?
                                                phiVeBb[0].gia_ve.map((val, i) => {

                                                    return (
                                                        <React.Fragment key={i}>
                                                            {
                                                                <tr>
                                                                    <td colSpan="4">
                                                                        <strong>{findKhachHang(val.id_khach, phiVeBb[0].chi_tiet_hanh_khach)}</strong>
                                                                    </td>
                                                                </tr>
                                                            }
                                                            {
                                                                displayPriceGiaGhe(val.phan_tich_gia[0].chi_tiet_gia_ve_cho_loai_khach)
                                                            }
                                                            {
                                                                disPlayPricePhuTro(val.phan_tich_gia[0].phu_phi)
                                                            }
                                                            {
                                                                disPlayPriceThue(val.thue)
                                                            }
                                                        </React.Fragment>
                                                    )
                                                })

                                                : null
                                        }
                                        <tr>
                                            <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng</td>
                                            <td>
                                                {JSON.stringify(phiVeBb) !== "[]" ? moneyFormat(Number(phiVeBb[0].tong_tien_phai_tra.so_tien)) + " VNĐ" : null}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                        <Row>
                            <Col lg={12} md={12} className="d-flex align-items-center justify-content-end">
                                <Button color="primary" block onClick={() => history.push("/tim-ve")}>
                                    Tiếp tục đặt vé
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row >
    );
}

export default DatVeThanhCongBb;