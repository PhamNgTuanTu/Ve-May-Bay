import { getHours } from 'helpers/function/function_helper';
import moment from 'moment';
import React from 'react';
import { CardHeader, CardTitle, Col, Row } from 'reactstrap';

ThongTinChuyenBay.propTypes = {

};

function ThongTinChuyenBay(props) {
    const { data, params, label } = props
    return (
        <>
            <CardHeader className="bg-transparent pb-0">
                <CardTitle className="text-primary">
                    {
                        params.loai_ve === "khu_hoi" ? label : null
                    }
                </CardTitle>
            </CardHeader>
            {
                data ? <div className="card-body-custom">
                    {
                        data.chang_bay.map((val, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {
                                        data.chang_bay.length > 1 ?
                                            <Row className="mt-2">
                                                <Col>
                                                    <span>{`Chặng ${i + 1}`}</span>
                                                </Col>
                                            </Row> : null
                                    }
                                    <Row className="mt-2">
                                        <Col md="12">
                                            <h6 className="mb-3">
                                                <strong>Ngày khởi hành: {`${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('dddd')}, ${moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('L')}`}</strong>
                                            </h6>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md="2">
                                            <span>{getHours(val.ngay_di, 'DD-MM-YYYY h:mm:ss a')}</span>
                                        </Col>
                                        <Col md="10">
                                            <span>{val.san_bay_di.ten_san_bay}</span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md="2">
                                            <span>{getHours(val.ngay_den, 'DD-MM-YYYY h:mm:ss a')}</span>
                                        </Col>
                                        <Col md="10">
                                            <span>{val.san_bay_den.ten_san_bay}</span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md="6">
                                            <span>{`${val.ten_hang_bay}: ${val.ma_hang_bay}`}</span>
                                        </Col>
                                    </Row>
                                </React.Fragment>
                            )
                        })
                    }
                    <Row className="mt-3">
                        <Col>
                            <span>{`Số giờ bay : ${data.tong_so_gio_bay}`}</span>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md="12">
                            <h6 className="mb-3">
                                <strong>hạng chỗ đã chọn: {data.loai_ve.mo_ta}</strong>
                            </h6>
                        </Col>
                    </Row>
                </div> : null
            }

        </>
    );
}

export default ThongTinChuyenBay;