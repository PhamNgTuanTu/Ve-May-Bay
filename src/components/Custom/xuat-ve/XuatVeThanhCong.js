import moment from "moment";
import React from 'react';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { moneyFormat } from "../../../helpers/function/function_helper";

XuatVeThanhCong.propTypes = {

};

function XuatVeThanhCong(props) {
    const { dataDatVe } = props;
    const getDanhXung = (gioiTinh, Id) => {
        let danhXung = "";
        dataDatVe["hanh_khach"].map((val, i) => {
            if (val.id === Id) {
                if (val.loai_hanh_khach === "2") {
                    danhXung = gioiTinh === "nam" ? "Ông" : "Bà"
                }
                if (val.loai_hanh_khach === "1") {
                    danhXung = gioiTinh === "nam" ? "Em trai" : "Em gái"
                }
            }
        })
        return danhXung
    }
    const getHanhKhach = (Id) => {
        let hanhKhach = "";
        dataDatVe["hanh_khach"].map((val, i) => {
            if (val.id === Id) {
                if (val.loai_hanh_khach === "2") {
                    hanhKhach = "Người lớn"
                }
                if (val.loai_hanh_khach === "1") {
                    hanhKhach = "Trẻ em"
                }
            }
        })
        return hanhKhach
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
        arrPhi.map((val, i) => {
            if (val.ma_hanh_khach === idHanhKhach) {
                arr.push(val)
            }

        })
        arr.sort((a, b) => parseFloat(b.tong_thanh_tien) - parseFloat(a.tong_thanh_tien));
        return (
            arr.map((val, i) => {
                return (
                    <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{val.mo_ta_ve}</td>
                        <td>{`${moneyFormat(val.so_tien_co_ban)} VNĐ`}</td>
                        <td>{`${moneyFormat(val.so_tien_thue)} VNĐ`}</td>
                        <td>{`${moneyFormat(val.tong_thanh_tien)} VNĐ`}</td>
                    </tr>
                )
            })
        )
    }

    const dsEmBeSuccsess = (array) => {
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
                                        <td></td>
                                        <td>{moment(val.ngay_sinh).format("DD/MM/YYYY")}</td>
                                        <td></td>
                                    </tr> : null
                                }
                            </React.Fragment>
                        )
                    })
                }
            </>
        )
    }
    const dsPerSonSuccsess = (array) => {
        return (
            array.map((val, i) => {
                return (
                    <tr key={i}>
                        <td>{`${val.ho} ${val.ten}`}</td>
                        <td>{getDanhXung(val.gioi_tinh, val.hanh_khach_id)}</td>
                        <td>{getHanhKhach(val.hanh_khach_id)}</td>
                        <td>{val.dien_thoai}</td>
                        <td>{val.ngay_sinh !== null ? moment(val.ngay_sinh, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY") : ""}</td>
                        <td>{val.thanh_pho}</td>
                    </tr>
                )
            })
        )
    }
    const totalPrice = () => {
        var total = 0;
        if (JSON.stringify(dataDatVe) !== "[]" && dataDatVe["phi"].length > 0) {
            dataDatVe["phi"].map((data) => {
                total += Number(data.tong_thanh_tien);
            })
        }
        return total;
    }
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <Card outline color="primary" className="border mt-3">
                            <CardHeader className="bg-transparent">
                                <CardTitle className="text-primary">Xuất vé thành công</CardTitle>
                            </CardHeader>
                            <div className="card-body-custom">
                                {JSON.stringify(dataDatVe) !== "[]" && dataDatVe["diem_khoi_hanh"].length > 1 ?
                                    <CardTitle className="text-primary">Chuyến đi</CardTitle> : null
                                }
                                {
                                    JSON.stringify(dataDatVe) !== "[]" && dataDatVe["diem_khoi_hanh"].length > 0 ?
                                        <>
                                            <h6 className="clearfix">Ngày khởi hành:
                                                <strong className="text-dark">
                                                    {` ${moment(dataDatVe["diem_khoi_hanh"][0].thoi_gian_du_kien, "DD-MM-YYYY h:mm:ss a").format('dddd')}
                                                                ${moment(dataDatVe["diem_khoi_hanh"][0].thoi_gian_du_kien, "DD-MM-YYYY h:mm:ss a").format("DD/MM/YYYY")}
                                                                `}
                                                </strong>
                                            </h6>
                                            <h6>{`${moment(dataDatVe["diem_khoi_hanh"][0].thoi_gian_du_kien, "DD-MM-YYYY h:mm:ss a").format('LT')} : ${dataDatVe["diem_khoi_hanh"][0].ma_san_bay}`}</h6>
                                        </>
                                        : null
                                }
                                {JSON.stringify(dataDatVe) !== "[]" && dataDatVe["diem_khoi_hanh"].length > 1 ?
                                    <CardTitle className="text-primary">Chuyến về</CardTitle> : null
                                }
                                {
                                    JSON.stringify(dataDatVe) !== "[]" && dataDatVe["diem_khoi_hanh"].length > 1 ?
                                        <>
                                            <h6 className="clearfix">Ngày khởi hành:
                                                <strong className="text-dark">
                                                    {` ${moment(dataDatVe["diem_khoi_hanh"][1].thoi_gian_du_kien, "DD-MM-YYYY h:mm:ss a").format('dddd')}
                                                                ${moment(dataDatVe["diem_khoi_hanh"][1].thoi_gian_du_kien, "DD-MM-YYYY h:mm:ss a").format("DD/MM/YYYY")}
                                                                `}
                                                </strong>
                                            </h6>
                                            <h6>{`${moment(dataDatVe["diem_khoi_hanh"][1].thoi_gian_du_kien, "DD-MM-YYYY h:mm:ss a").format('LT')} : ${dataDatVe["diem_khoi_hanh"][1].ma_san_bay}`}</h6>
                                        </>
                                        : null
                                }
                            </div>
                            <div className="card-body-custom">
                                <h3 className="clearfix">Mã đặt chỗ: <strong className="text-dark">{dataDatVe.ma_pnr}</strong></h3>
                                <h5 className="clearfix">Thanh toán thành công !</h5>
                                {
                                    JSON.stringify(dataDatVe) !== "[]" ?
                                        <>
                                            <h6 className="clearfix">{`Thời gian thanh toán: ${moment(dataDatVe.thoi_gian_tao, "DD-MM-YYYY h:mm:ss a").format('LT')} ${moment(dataDatVe.thoi_gian_tao, "DD-MM-YYYY h:mm:ss a").format('DD/MM/YYYY')}`}</h6>
                                            {/* <h6 className="clearfix">{`Số biên nhận: ${dataXuatVe["thanh_toan"][0].so_bien_nhan}`}</h6> */}
                                        </>
                                        : null
                                }
                            </div>
                            <div className="card-body-custom">
                                <h6 className="clearfix"><strong className="text-dark">Thông tin hành khách</strong></h6>
                                {
                                    JSON.stringify(dataDatVe) !== "[]" && dataDatVe["thong_tin_dat_cho"].length > 0 ?
                                        <Table hover bordered responsive>
                                            <thead className="table-light" >
                                                <tr>
                                                    <th>Họ và tên</th>
                                                    <th>Danh xưng</th>
                                                    <th>Hành khách</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Ngày sinh</th>
                                                    <th>Khu vực</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dsPerSonSuccsess(dataDatVe["thong_tin_dat_cho"])}
                                                {dsEmBeSuccsess(dataDatVe["em_be"])}
                                            </tbody>
                                        </Table>
                                        : null
                                }
                            </div>
                            <div className="card-body-custom">
                                <h6 className="clearfix"><strong className="text-dark">Mô tả thành tiền theo VND</strong></h6>
                                <Table hover bordered>
                                    <thead style={{ background: "#f8f9fa" }}>
                                        <tr>
                                            <th>#</th>
                                            <th>Mô tả</th>
                                            <th>Thành tiền</th>
                                            <th>Thuế</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {JSON.stringify(dataDatVe) !== "[]" && dataDatVe["hanh_khach"].length > 0 ?
                                            dataDatVe["hanh_khach"].map((data, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <tr >
                                                            <td colSpan="5">{getHoten(data.id)}</td>
                                                        </tr>
                                                        {/*getPhiDichVu(data.ma_hanh_khach)*/}
                                                    </React.Fragment>
                                                )
                                            }) : null
                                        }
                                        <tr>
                                            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng</td>
                                            <td>
                                                {moneyFormat(totalPrice()) + " VNĐ"}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default XuatVeThanhCong;