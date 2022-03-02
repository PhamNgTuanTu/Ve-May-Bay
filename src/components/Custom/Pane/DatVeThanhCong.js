import moment from "moment";
import React from 'react';
import { useHistory } from "react-router";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getHours } from "../../../helpers/function/function_helper";
import TableThongTinDichVu from "../Table/ThongTinDichVu";

DatVeThanhCong.propTypes = {};

function DatVeThanhCong(props) {
    const history = useHistory()
    const { storeDataDatVe, storeChuyenVe, storeChuyenDi, phiVe, params } = props;

    const findLoaiHanhKhach = (id) => {
        let loaiHanhKhach = 1
        const hanhKhach = [...storeDataDatVe.hanh_khach]
        hanhKhach.map((val, i) => {
            if (val.id === id) {
                loaiHanhKhach = val.loai_hanh_khach
            }
        })
        return loaiHanhKhach
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
                                                storeDataDatVe.tong_thanh_tien !== storeDataDatVe.so_tien_da_thanh_toan ?
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
                                                            <td>{val.danh_xung === 1 ? (findLoaiHanhKhach(val.hanh_khach_id) === 1 ? "Ông" : "Bà") : (findLoaiHanhKhach(val.hanh_khach_id) === 2 ? "Em trai" : "Em gái")}</td>
                                                            <td>{`${val.ho} ${val.ten}`}</td>
                                                            <td colSpan={findLoaiHanhKhach(val.hanh_khach_id) === 1 ? "0" : "2"}>{findLoaiHanhKhach(val.hanh_khach_id) === 1 ? val.email : null}</td>
                                                            <td className={findLoaiHanhKhach(val.hanh_khach_id) === 1 ? "" : "d-none"}>{findLoaiHanhKhach(val.hanh_khach_id) === 1 ? val.dien_thoai : null}</td>
                                                            <td>{val.ngay_sinh !== null ? moment(val.ngay_sinh, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY") : ""}</td>
                                                            <td>{val.dia_chi}</td>
                                                            <td>{val.quoc_gia}</td>
                                                        </tr>
                                                    )
                                                })
                                                : null
                                        }
                                        {
                                            JSON.stringify(storeDataDatVe) !== "[]" && storeDataDatVe["thong_tin_dat_cho"].length > 0 ?
                                                storeDataDatVe["em_be"].map((val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <>
                                                                {
                                                                    JSON.stringify(val.id) !== "null" ?
                                                                        <>
                                                                            <td>{`Bé ${val.gioi_tinh === 1 ? "trai" : "gái"}`}</td>
                                                                            <td>{`${val.ho} ${val.ten}`}</td>
                                                                            <td colSpan={2}></td>
                                                                            <td>{val.ngay_sinh !== null ? moment(val.ngay_sinh, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY") : ""}</td>
                                                                            <td colSpan={2}></td>
                                                                        </>
                                                                        : null
                                                                }
                                                            </>
                                                        </tr>
                                                    )
                                                })
                                                : null
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <TableThongTinDichVu
                                dataMotChieu={phiVe && JSON.stringify(phiVe["mot_chieu"]) !== {} ? phiVe["mot_chieu"] : null}
                                dataHaiChieu={phiVe && JSON.stringify(phiVe["hai_chieu"]) !== {} ? phiVe["hai_chieu"] : null}
                                params={params} />
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

export default DatVeThanhCong;