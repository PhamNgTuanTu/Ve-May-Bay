import moment from "moment";
import 'moment/locale/vi'; // without this line it didn't work
import React from "react";
import { Card, CardHeader, Col, Row } from "reactstrap";
import { moneyFormat } from "../../../helpers/function/function_helper";
moment.locale('vi')

function ThongTinVeBox(props) {
    const { params, storeChuyenVe, storeChuyenDi, priceChuyenDi, priceChuyenVe } = props

    return (
        <Card outline color="primary" className="border">
            <CardHeader className="bg-transparent card-header-custom">
                <h5 className="my-0 text-primary">Thông tin vé</h5>
            </CardHeader>
            <div className="card-body-custom mb-2">
                <div className="img_logo_tt_ve mb-2 d-flex align-items-center justify-content-center">
                    {
                        JSON.stringify(storeChuyenDi) !== "{}" ? <img width="100" height="50" alt="thanhhoang_logo" src={storeChuyenDi.chang_bay[0].logo} /> : null
                    }

                </div>
                <div className="content-tt-ve-hk">
                    {params.loai_ve === "khu_hoi" ?
                        <span className="clearfix mt-3">
                            <h4>Thông tin chuyến đi </h4>
                        </span> : null
                    }
                    {JSON.stringify(storeChuyenDi) !== "{}" && JSON.stringify(priceChuyenDi) !== "{}" ?
                        <>
                            {
                                storeChuyenDi.chang_bay.map((val, i) => {
                                    return (
                                        <div key={i} className="mb-2">
                                            {
                                                storeChuyenDi.chang_bay.length > 1 ?
                                                    <div className="thumb-tt-chuyen-bay mt-1">
                                                        <span>
                                                            <strong>Chặng: {i + 1} </strong>
                                                        </span>
                                                    </div> : null
                                            }
                                            <div className="thumb-tt-chuyen-bay mt-1">
                                                <span>
                                                    <strong>Từ: </strong>
                                                    {val.san_bay_di.ma_san_bay}
                                                </span>
                                                <span className="clearfix">
                                                    <strong>Đến: </strong>
                                                    {val.san_bay_den.ma_san_bay}
                                                </span>
                                            </div>
                                            <span className="clearfix">
                                                <Row>
                                                    <Col xl="12" md="12">
                                                        <strong>Ngày khởi hành: </strong>
                                                        {`${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}, 
                                    ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('dddd')}
                                    ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY")}`}
                                                    </Col>
                                                </Row>
                                            </span>
                                            <span className="clearfix">
                                                <strong>Mã chuyến bay: </strong>
                                                {val.ma_chuyen_bay}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <span className="clearfix">
                                <strong>Hạng chỗ: </strong>
                                {storeChuyenDi.loai_ve.mo_ta}
                            </span>
                            <span className="clearfix">
                                <strong>Giá vé: </strong>
                                {moneyFormat(priceChuyenDi.gia_tien.gia_ve) + " VNĐ"}
                            </span>
                            <span className="clearfix">
                                <strong>Thuế: </strong>
                                {
                                    moneyFormat(Number(priceChuyenDi.gia_tien.thue)) + " VNĐ"
                                }
                            </span>
                            <span className="clearfix">
                                <strong>Phí dịch vụ: </strong>
                                {
                                    moneyFormat(Number(priceChuyenDi.gia_tien.phi_dich_vu)) + " VNĐ"
                                }
                            </span>
                            <div className="content-tt-ve-total">
                                <span>
                                    <strong className="">Tổng cộng: </strong>
                                    {
                                        moneyFormat(Number(priceChuyenDi.gia_tien.tong_cong)) + " VNĐ"
                                    }
                                </span>
                            </div>
                        </>
                        : null
                    }

                    {params.loai_ve === "khu_hoi" ?
                        <span className="clearfix">
                            <h4 className="mt-3">Thông tin chuyến về </h4>
                        </span> : null
                    }
                    {JSON.stringify(storeChuyenVe) !== "{}" && JSON.stringify(priceChuyenVe) !== "{}" ?
                        <>
                            {
                                storeChuyenVe.chang_bay.map((val, i) => {
                                    return (
                                        <div key={i} className="mb-2">
                                            {
                                                storeChuyenVe.chang_bay.length > 1 ?
                                                    <div className="thumb-tt-chuyen-bay mt-1">
                                                        <span>
                                                            <strong>Chặng: {i + 1} </strong>
                                                        </span>
                                                    </div> : null
                                            }
                                            <div className="thumb-tt-chuyen-bay mt-1">
                                                <span>
                                                    <strong>Từ: </strong>
                                                    {val.san_bay_di.ma_san_bay}
                                                </span>
                                                <span className="clearfix">
                                                    <strong>Đến: </strong>
                                                    {val.san_bay_den.ma_san_bay}
                                                </span>
                                            </div>
                                            <span className="clearfix">
                                                <Row>
                                                    <Col xl="12" md="12">
                                                        <strong>Ngày khởi hành: </strong>
                                                        {`${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}, 
                                    ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('dddd')}
                                    ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format("DD/MM/YYYY")}`}
                                                    </Col>
                                                </Row>
                                            </span>
                                            <span className="clearfix">
                                                <strong>Mã chuyến bay: </strong>
                                                {val.ma_chuyen_bay}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <span className="clearfix">
                                <strong>Hạng chỗ: </strong>
                                {storeChuyenVe.loai_ve.mo_ta}
                            </span>
                            <span className="clearfix">
                                <strong>Giá vé: </strong>
                                {moneyFormat(priceChuyenVe.gia_tien.gia_ve) + " VNĐ"}
                            </span>
                            <span className="clearfix">
                                <strong>Thuế: </strong>
                                {moneyFormat(Number(priceChuyenVe.gia_tien.thue)) + " VNĐ"}
                            </span>
                            <span className="clearfix">
                                <strong>Phí dịch vụ: </strong>
                                {
                                    moneyFormat(Number(priceChuyenVe.gia_tien.phi_dich_vu)) + " VNĐ"
                                }
                            </span>
                            <div className="content-tt-ve-total">
                                <span>
                                    <strong className="">Tổng cộng: </strong>
                                    {moneyFormat(Number(priceChuyenVe.gia_tien.tong_cong)) + " VNĐ"}
                                </span>
                            </div>
                        </>
                        : null
                    }

                </div>
                <div className="total-sticket mb-2">
                    <span>
                        <h5 className="text-primary">Tổng cộng: <span>
                            {
                                params.loai_ve === "mot_chieu" ?
                                    (
                                        JSON.stringify(storeChuyenDi) !== "{}" && JSON.stringify(priceChuyenDi) !== "{}" ?
                                            moneyFormat(Number(priceChuyenDi.gia_tien.tong_cong)) + " VNĐ"
                                            : null
                                    )
                                    :
                                    (
                                        moneyFormat(
                                            (
                                                JSON.stringify(storeChuyenDi) !== "{}" && JSON.stringify(priceChuyenDi) !== "{}" ?
                                                    (Number(priceChuyenDi.gia_tien.tong_cong))
                                                    : 0
                                            )
                                            +
                                            (
                                                JSON.stringify(storeChuyenVe) !== "{}" && JSON.stringify(priceChuyenVe) !== "{}" ?
                                                    (Number(priceChuyenVe.gia_tien.tong_cong))
                                                    : 0
                                            )
                                        ) + " VNĐ"
                                    )
                            }

                        </span>
                        </h5>
                    </span>
                </div>

                <div className="content-total-hk">
                    <strong className="mb-2">
                        Số lượng hành khách:{" "}
                        {params.tre_em + params.nguoi_lon + params.em_be}
                    </strong>
                    <div>
                        <span className="clearfix">
                            <strong>Người lớn: </strong>
                            {params.nguoi_lon}
                        </span>
                        <span className="clearfix">
                            <strong>Trẻ em: </strong>
                            {params.tre_em}
                        </span>
                        <span className="clearfix">
                            <strong>Em bé: </strong>
                            {params.em_be}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ThongTinVeBox;