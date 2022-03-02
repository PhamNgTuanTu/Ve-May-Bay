import moment from 'moment';
import React from 'react';
import { Col, Row } from 'reactstrap';

ThongTinChuyenBay.propTypes = {};

function ThongTinChuyenBay(props) {
    const { data } = props
    return (
        <Row>
            <Col md="12">
                {
                    JSON.stringify(data) !== "{}" ?
                        <Row>
                            <Col md="4" className="d-flex align-items-center justify-content-center">
                                <img width="100" height="40" alt="thanhhoang_logo" src={data.chang_bay[0].logo} />
                            </Col>
                            <Col md="8">
                                <div>
                                    {
                                        data.chang_bay.map((val, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    {
                                                        data.chang_bay.length > 1 ? <span>{`Chặng : ${i + 1}`}</span> : null
                                                    }
                                                    <div key={i} className="d-flex align-items-center justify-content-around">
                                                        <div className="tt-chuyen-di mb-2 mt-2">
                                                            <h5>{val.san_bay_di.ten_san_bay}</h5>
                                                            <span>{moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('HH:mm DD/MM/YYYY')}</span>
                                                        </div>
                                                        <div className="tt-chuyen-bay mb-2">
                                                            <span className="clearfix">Chuyến đi: {val.ma_chuyen_bay} </span>
                                                            <span>{val.so_gio_bay ? val.so_gio_bay : null}</span>
                                                        </div>
                                                        <div className="tt-chuyen-ve mb-2 mt-2">
                                                            <h5>{val.san_bay_den.ten_san_bay}</h5>
                                                            <span>{moment(val.ngay_den, 'DD-MM-YYYY h:mm:ss a').format('HH:mm DD/MM/YYYY')}</span>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                        : null
                }
            </Col>
        </Row>
    );
}

export default ThongTinChuyenBay;