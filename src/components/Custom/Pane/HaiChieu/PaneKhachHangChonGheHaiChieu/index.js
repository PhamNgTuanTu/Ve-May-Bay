import { getNameSeat, moneyFormat } from 'helpers/function/function_helper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardHeader, Col, Row } from 'reactstrap';
import { saveArrSeatChooseMotChieu, tinhPhiVeChonGhe } from 'store/actions';

PaneKhachHangChonGheHaiChieu.propTypes = {};

function PaneKhachHangChonGheHaiChieu(props) {
    const dispatch = useDispatch()
    const { indexPerson, setIndexPerSon, nameChuyenBay, title } = props;
    const { data, paramsPhiVe } = useSelector(state => ({
        data: state.DatTimVe.arrSeatHaiChieu,
        paramsPhiVe: state.DatTimVe.paramsPhiVe,
    }))
    const onChangePerSon = (e) => {
        var value = e.target.value
        setIndexPerSon(Number(value))
    }

    const convertArr = (arrPerSon, paramsPhi, dinhDanh) => {
        let markers = [...paramsPhi.hai_chieu[dinhDanh]]
        arrPerSon.map((val, i) => {
            if (JSON.stringify(val.arr_phi) !== "{}") {
                markers[i].phi_cho_ngoi = arrPerSon[i].arr_phi
            }
        })
        markers.map((val, i) => {
            val.phi_cho_ngoi === null ? delete val.phi_cho_ngoi : null
        })
        return markers
    }

    const tinhPhiKhiChonGhe = (paramsPhi, paramSeat) => {
        let arrNguoiLon = [], arrTreEm = [];
        paramSeat.map((val, i) => {
            Number(val.loai_hanh_khach) === 1 ? arrNguoiLon.push(val) : arrTreEm.push(val)
        })
        let arrNguoiLonConVert = convertArr(arrNguoiLon, paramsPhi, "nguoi_lon")
        let arrTreEmConVert = convertArr(arrTreEm, paramsPhi, "tre_em")
        let arrResult = {
            ...paramsPhi,
            hai_chieu: {
                ...paramsPhi.hai_chieu,
                nguoi_lon: arrNguoiLonConVert,
                tre_em: arrTreEmConVert,
            }
        }
        dispatch(tinhPhiVeChonGhe(arrResult))
    }

    const handleCancel = (id) => {
        setIndexPerSon(Number(id))
        let markers = [...data]
        let objIndex = markers.findIndex((obj => obj.id == id));
        markers[objIndex].ten_ghe = ""
        markers[objIndex].ma_phu_tro = ""
        markers[objIndex].status = false
        markers[objIndex].gia_ve = 0
        markers[objIndex].thue = 0
        markers[objIndex].tong_tien = 0
        markers[objIndex].arr_phi = null
        tinhPhiKhiChonGhe(paramsPhiVe, data)
        dispatch(saveArrSeatChooseMotChieu(markers))
    }

    return (
        <>
            <Card outline color="primary" className="border">
                <CardHeader className="bg-transparent card-header-custom">
                    <h5 className="my-0 text-primary">Th??ng tin h??nh kh??ch ch???n gh??? {title}</h5>
                </CardHeader>
                <div className="card-body-custom mb-2">
                    {
                        JSON.stringify(data) !== "[]" && data.length > 0 ?
                            data.map((val, index) => {
                                return (
                                    <li key={index}>
                                        <Row>
                                            <Col md="12">
                                                <Row>
                                                    <Col md="12">
                                                        <label htmlFor={`${nameChuyenBay}-${val.ten_nguoi}_${index}`} className="l-radio w-100">
                                                            <input
                                                                type="radio"
                                                                id={`${nameChuyenBay}-${val.ten_nguoi}_${index}`}
                                                                value={index}
                                                                name={`${nameChuyenBay}-selector`}
                                                                checked={indexPerson === index}
                                                                onChange={onChangePerSon}
                                                            />
                                                            <strong className="label_name--person">{`${index + 1}. ${val.ten_nguoi}`}</strong>
                                                        </label>
                                                    </Col>
                                                </Row>
                                                {
                                                    val.ten_ghe !== "" ?
                                                        <>
                                                            <Row>
                                                                <Col md="12" className="d-flex align-items-center justify-content-start">
                                                                    <span style={{ marginLeft: "36px" }}>{`Ch??? ng???i: ${getNameSeat(val.ten_ghe)}`}</span>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="12" className="d-flex align-items-center justify-content-start">
                                                                    <span style={{ marginLeft: "36px" }}>{`Gi?? v??: ${val.tong_tien === 0 ? 0 : moneyFormat(val.tong_tien)} VN??`}</span>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="12" className="d-flex align-items-center justify-content-start mt-2">
                                                                    <div style={{ marginLeft: "36px" }}>
                                                                        <Button color="warning" onClick={() => handleCancel(index)}>H???y ch???n gh???</Button>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </>
                                                        : null
                                                }
                                            </Col>
                                        </Row>
                                    </li>
                                )
                            })
                            : null
                    }
                </div>
            </Card>

        </>
    );
}

export default PaneKhachHangChonGheHaiChieu;