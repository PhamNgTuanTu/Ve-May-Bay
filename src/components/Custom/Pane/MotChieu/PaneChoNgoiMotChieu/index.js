import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import PaneSeat from './PaneSeat';

PaneChoNgoiMotChieu.propTypes = {};

function PaneChoNgoiMotChieu(props) {
    const { loaiChuyenBay, dataChoNgoi, lenMax, hangGheChuyenBay, nameChuyenBay, changeActiveTab, indexPerson, setIndexPerSon, setNameChuyenBay } = props;
    const [arrResult, setArrResult] = useState([])

    const MotHangGhe = (data, hang) => {
        var arr = []
        if (data && data.length > 0) {
            let arrSeat = [...data]
            for (let i = 0; i < arrSeat.length; i++) {
                if (Number(arrSeat[i]["ban_do_cho_ngoi"].dinh_danh_hang) === Number(hang)) {
                    arr.push(arrSeat[i])
                }
            }
        }
        return arr;
    }

    const MotHangGheThieu = (array) => {
        let result = []
        let arrResult = []
        if (hangGheChuyenBay) {
            hangGheChuyenBay.map((val, i) => {
                result = array.find(element => element.ban_do_cho_ngoi.dinh_danh_cho_ngoi === val);
                if (typeof (result) === "undefined") {
                    arrResult.push(null)
                } else {
                    arrResult.push(result)
                }
            })
        }
        return arrResult
    }

    useEffect(() => {
        if (dataChoNgoi && typeof (dataChoNgoi) !== "undefined" && dataChoNgoi["tc_cho_ngoi"].length > 0) {
            let arrDsGhe = [...dataChoNgoi["tc_cho_ngoi"]]
            let arrRe = []
            for (let i = 0; i < arrDsGhe.length; i++) {
                if (JSON.stringify(MotHangGhe(arrDsGhe, i + 1)) !== "[]") {
                    if (MotHangGhe(arrDsGhe, i + 1).length < Number(lenMax)) {
                        arrRe.push(MotHangGheThieu(MotHangGhe(arrDsGhe, i + 1)))
                    } else {
                        arrRe.push(MotHangGhe(arrDsGhe, i + 1))
                    }
                }
            }
            setArrResult(arrRe)
        }

    }, [dataChoNgoi, lenMax])

    useEffect(() => {
        setNameChuyenBay(nameChuyenBay)
    }, [nameChuyenBay])


    return (
        <Card outline color="primary" className="border">
            <CardTitle><h3 className="mx-3 mt-3 mb-0">{`Thông tin ghế ${loaiChuyenBay === "chuyen_di" ? "chuyến đi" : "chuyến về"}`}</h3></CardTitle>
            <CardBody>
                <Row>
                    <Col lg="12" className="p-0 mb-3 note-pane order-lg-2 order-sm-2 order-1 order-xl-3">
                        <Row>
                            <Col md="12" className="mx-2">
                                <h5 className="mb-3"><strong>Ghi chú</strong></h5>
                                <ul className="d-lg-flex align-items-lg-center">
                                    <li className="mb-2 mx-2">
                                        <div className="note-seat">
                                            <label className="seat-choose unavailable-seat"></label>
                                            <span>Ghế đã được chọn/ không có</span>
                                        </div>
                                    </li>
                                    <li className="mb-2 mx-2">
                                        <div className="note-seat">
                                            <label className="seat-choose special-class"></label>
                                            <span>Ghế đặt biệt</span>
                                        </div>
                                    </li>
                                    <li className="mb-2 mx-2">
                                        <div className="note-seat">
                                            <label className="seat-choose average-class"></label>
                                            <span>Ghế phía trước</span>
                                        </div>
                                    </li>
                                    <li className="mb-2 mx-2">
                                        <div className="note-seat">
                                            <label className="seat-choose normal-class"></label>
                                            <span>Ghế thường</span>
                                        </div>
                                    </li>
                                    <li className="mb-2 mx-2">
                                        <div className="note-seat">
                                            <label className="seat-choose now-choose-class"></label>
                                            <span>Ghế đang chọn</span>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" xl="12" lg="12" sm="12" className="mb-3 seats-pane order-lg-3 order-sm-3 order-3 order-xl-2">
                        <div className="plane">
                            <ol className="cabin fuselage" id="style-1">
                                <PaneSeat
                                    dataArray={arrResult}
                                    arrAlpha={hangGheChuyenBay}
                                    index={indexPerson}
                                    setIndexPerSon={setIndexPerSon}
                                    nameChuyenBay={nameChuyenBay}
                                    changeActiveTab={changeActiveTab}
                                />
                            </ol>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default PaneChoNgoiMotChieu;