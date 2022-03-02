import moment from "moment";
import React from "react";
import {
    Col,
    Row
} from "reactstrap";
import { moneyFormat } from "../../../helpers/function/function_helper";

function ThongTinVeBox(props) {
    const { dataVe, dataDatVe, dataChuyenBayFormat } = props;

    const getTotalGiaVe = (data) => {
        let total = 0
        if (typeof data !== "undefined" && data.length > 0) {
            data.map((val, i) => {
                if (val.ma_phi_ve === "FA") {
                    total += val.so_tien_co_ban
                }
            })
        }
        return Number(total)
    }

    const totalPrice = (data) => {
        let total = 0
        if (typeof data !== "undefined" && data.length > 0) {
            data.map((val, i) => {
                total += val.tong_thanh_tien
            })
        }
        return Number(total)
    }

    const getGiaVe = (data, status) => {
        let total = 0;
        if (typeof data !== "undefined" && data.length > 0) {
            data.map((val, i) => {
                total += val[status]
            })
        }
        return Number(total)
    }
    const getSlHanhKhach = (data) => {
        let total = 0
        let totalKhachHang = 0
        let totalEmBe = 0
        data["hanh_khach"].map((val, i) => {
            totalKhachHang = data["hanh_khach"].length;
            if (JSON.stringify(val["ds_em_be"]) !== "[]") {
                totalEmBe = val["ds_em_be"].length;
            }
        })
        total = totalKhachHang + totalEmBe
        return total;
    }
    const getSlHanhKhachTheoDinhDang = (data, loaiHanhKhach) => {
        let total = 0
        data["hanh_khach"].map((val, i) => {
            if (Number(val.loai_hanh_khach) === Number(loaiHanhKhach)) {
                total += 1
            }
        })
        return total;
    }
    const getSlEmBe = (data) => {
        let total = 0
        data["hanh_khach"].map((val, i) => {
            if (JSON.stringify(val["ds_em_be"]) !== "[]") {
                total += val["ds_em_be"].length;
            }
        })
        return total;
    }

    return (
        <div className="card-body-custom mb-2">
            <div className="img_logo_tt_ve mb-2">
                <img width="100" height="50" alt="thanhhoang_logo" src={dataDatVe !== "null" ? dataDatVe.logo_hang_bay : null} />
            </div>
            <div className="content-tt-ve-hk">
                {dataVe !== "null" && dataVe["hanh_trinh"].length > 1 ?
                    <span className="clearfix">
                        <strong>Thông tin chuyến đi </strong>
                    </span> : null
                }
                <Row>
                    <Col md="12">
                        {
                            dataVe !== "null" && dataVe["hanh_trinh"].length > 0 ?
                                <div className="thumb-tt-chuyen-bay mt-1">
                                    <span>
                                        <strong>Từ: </strong>
                                        {dataVe["hanh_trinh"][0].ngay_khoi_hanh.san_bay.ma_san_bay}
                                    </span>
                                </div>
                                : null
                        }
                        <div className="clearfix">
                            <strong>Ngày khởi hành: </strong>
                            <span>
                                {dataVe !== "null" && dataVe["hanh_trinh"].length > 0 ?
                                    `${moment(dataVe["hanh_trinh"][0].ngay_khoi_hanh.thoi_gian_du_kien, 'DD-MM-YYYY h:mm:ss a').format('LT')}, ${moment(dataVe["hanh_trinh"][0].ngay_khoi_hanh.thoi_gian_du_kien, 'DD-MM-YYYY h:mm:ss a').format('dddd')} ${moment(dataVe["hanh_trinh"][0].ngay_khoi_hanh.thoi_gian_du_kien, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY")}`
                                    : null}
                            </span>
                        </div>
                        <span className="clearfix">
                            <strong>Mã chuyến bay: </strong>
                        </span>
                        <span className="clearfix">
                            <strong>Hạng chỗ: </strong>
                        </span>
                        <span className="clearfix">
                            <strong>Giá vé: </strong>
                            {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                moneyFormat(getTotalGiaVe(dataChuyenBayFormat[0].chuyen_di)) + " VNĐ"
                                : null}
                        </span>
                        <span className="clearfix">
                            <strong>Thuế: </strong>
                            {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                moneyFormat(getGiaVe(dataChuyenBayFormat[0].chuyen_di, "so_tien_thue")) + " VNĐ"
                                : null}
                        </span>
                        <span className="clearfix">
                            <strong>Phí dịch vụ: </strong>
                            {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                moneyFormat(totalPrice(dataChuyenBayFormat[0].chuyen_di) - (getGiaVe(dataChuyenBayFormat[0].chuyen_di, "so_tien_thue") + getTotalGiaVe(dataChuyenBayFormat[0].chuyen_di))) + " VNĐ"
                                : null}
                        </span>
                        <div className="content-tt-ve-total">
                            <span>
                                <strong className="">Tổng cộng:{" "}
                                    {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                        moneyFormat(totalPrice(dataChuyenBayFormat[0].chuyen_di)) + " VNĐ"
                                        : null}
                                </strong>
                            </span>
                        </div>
                    </Col>
                </Row>
                {
                    dataVe !== "null" && dataVe["hanh_trinh"].length > 1 ?
                        <Row className="mt-3">
                            <Col md="12">
                                <span className="clearfix">
                                    <strong>Thông tin chuyến về </strong>
                                </span>
                                <div className="thumb-tt-chuyen-bay mt-1">
                                    <span>
                                        <strong>Từ: </strong>
                                        {dataVe["hanh_trinh"][1].ngay_khoi_hanh.san_bay.ma_san_bay}
                                    </span>
                                </div>
                                <div className="clearfix">
                                    <strong>Ngày khởi hành: </strong>
                                    <span>
                                        {`${moment(dataVe["hanh_trinh"][1].ngay_khoi_hanh.thoi_gian_du_kien).format('LT')}, ${moment(dataVe["hanh_trinh"][1].ngay_khoi_hanh.thoi_gian_du_kien).format('dddd')} ${moment(dataVe["hanh_trinh"][1].ngay_khoi_hanh.thoi_gian_du_kien).format("DD/MM/YYYY")}`}
                                    </span>
                                </div>
                                <span className="clearfix">
                                    <strong>Mã chuyến bay: </strong>
                                </span>
                                <span className="clearfix">
                                    <strong>Hạng chỗ: </strong>
                                </span>
                                <span className="clearfix">
                                    <strong>Giá vé: </strong>
                                    {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                        moneyFormat(getTotalGiaVe(dataChuyenBayFormat[1].chuyen_ve)) + " VNĐ"
                                        : null}
                                </span>
                                <span className="clearfix">
                                    <strong>Thuế: </strong>
                                    {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                        moneyFormat(getGiaVe(dataChuyenBayFormat[1].chuyen_ve, "so_tien_thue")) + " VNĐ"
                                        : null}
                                </span>
                                <span className="clearfix">
                                    <strong>Phí dịch vụ: </strong>
                                    {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                        moneyFormat(totalPrice(dataChuyenBayFormat[1].chuyen_ve) - (getGiaVe(dataChuyenBayFormat[1].chuyen_ve, "so_tien_thue") + getTotalGiaVe(dataChuyenBayFormat[1].chuyen_ve))) + " VNĐ"
                                        : null}
                                </span>
                                <div className="content-tt-ve-total">
                                    <span>
                                        <strong className="">Tổng cộng:{" "}
                                            {dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ?
                                                moneyFormat(totalPrice(dataChuyenBayFormat[1].chuyen_ve)) + " VNĐ"
                                                : null}
                                        </strong>

                                    </span>
                                </div>
                            </Col>
                        </Row>
                        : null
                }



            </div>
            <div className="total-sticket mb-2">
                <span>
                    <h5 className="text-primary">Tổng cộng: <span>
                        {
                            dataVe !== "null" && dataVe["hanh_trinh"].length === 1 ?
                                (dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ? moneyFormat(totalPrice(dataChuyenBayFormat[0].chuyen_di)) + " VNĐ" : 0)
                                :
                                (dataChuyenBayFormat !== "null" && dataChuyenBayFormat.length > 0 ? moneyFormat(totalPrice(dataChuyenBayFormat[0].chuyen_di) + totalPrice(dataChuyenBayFormat[1].chuyen_ve)) + " VNĐ" : 0)
                        }
                    </span>
                    </h5>
                </span>
            </div>
            <div className="content-total-hk">
                <strong className="mb-2">
                    Số lượng hành khách:{" "}
                    {
                        dataVe !== "null" && dataVe["hanh_khach"].length > 0 ?
                            getSlHanhKhach(dataVe)
                            : null
                    }
                </strong>
                <div>
                    <span className="clearfix">
                        <strong>Người lớn:{" "}
                            {
                                dataVe !== "null" && dataVe["hanh_khach"].length > 0 ?
                                    getSlHanhKhachTheoDinhDang(dataVe, 1)
                                    : null
                            }
                        </strong>
                    </span>
                    <span className="clearfix">
                        <strong>Trẻ em:{" "}
                            {
                                dataVe !== "null" && dataVe["hanh_khach"].length > 0 ?
                                    getSlHanhKhachTheoDinhDang(dataVe, 2)
                                    : null
                            }
                        </strong>
                    </span>
                    <span className="clearfix">
                        <strong>Em bé:{" "}
                            {
                                dataVe !== "null" && dataVe["hanh_khach"].length > 0 ?
                                    getSlEmBe(dataVe)
                                    : null
                            }
                        </strong>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ThongTinVeBox;