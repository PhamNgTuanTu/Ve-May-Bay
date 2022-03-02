import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { hanhKhachEmBe, hanhKhachNguoiLon, hanhKhachTreEm, params } from "../../../../common/data/Data";
import DichVuHaiChieuBamboo from '../HaiChieu/DichVuHaiChieuBamboo';
import DichVuMotChieuBamboo from '../MotChieu/DichVuMotChieuBamboo';

PhuTro.propTypes = {};

function PhuTro(props) {
    const { data, dataHanhKhach, loaiChuyenBay } = props
    const { params, hanhKhachNguoiLon, hanhKhachTreEm, hanhKhachEmBe } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        hanhKhachTreEm: state.DatTimVe.hanhKhachTreEm,
        hanhKhachEmBe: state.DatTimVe.hanhKhachEmBe,
        params: state.DatTimVe.params
    }))

    const getArrHanhKhach = (data) => {
        let arr = []
        let arrTotal = []
        let arrNguoiLon = []
        let arrTreEm = []
        let arrEmBe = []
        arrNguoiLon = hanhKhachNguoiLon && hanhKhachNguoiLon.length > 0 ? hanhKhachNguoiLon.map((val) => { return { ...val, loai_hanh_khach: "ADULT" } }) : [];
        arrTreEm = hanhKhachTreEm && hanhKhachTreEm.length > 0 ? hanhKhachTreEm.map((val) => { return { ...val, loai_hanh_khach: "CHILD" } }) : [];
        arrEmBe = hanhKhachEmBe && hanhKhachEmBe.length > 0 ? hanhKhachEmBe.map((val) => { return { ...val, loai_hanh_khach: "INFANT" } }) : [];
        arrTotal = [...new Set([...arrNguoiLon, ...arrTreEm, ...arrEmBe])]
        arrTotal.map((val) => {
            if (val.loai_hanh_khach === data.loai_khach) {
                arr.push({ ...val, ...data })
            }
        })
        return arr
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="clear-box-dv mb-2">
            <Row onClick={toggle} className="title-auxiliary">
                <Col md={6}>
                    <strong className="title-auxiliary__strong">
                        {JSON.stringify(data) !== "[]" ? data.ten_dich_vu : null}
                    </strong>
                </Col>
                <Col md={6}>
                    <div className="icon-drop-auxiliary">
                        <i className={isOpen ? "fas fa-chevron-circle-down icon-drop-down" : "fas fa-chevron-circle-down icon-drop-right"}></i>
                    </div>
                </Col>
            </Row>
            <Collapse isOpen={isOpen}>
                <Card className="mb-0">
                    <CardBody>
                        <Row>
                            <Col md={12} xs={12} className="mb-2">
                                <Row>
                                    <Col md={12} xs={12} className="mb-2">
                                        {
                                            loaiChuyenBay === "chuyen_di" ?
                                                <Row>
                                                    <Col md={12} xs={12} className="mb-2">
                                                        {
                                                            dataHanhKhach ?
                                                                dataHanhKhach.map((val, i) => {
                                                                    return (
                                                                        <DichVuMotChieuBamboo
                                                                            key={i}
                                                                            data={getArrHanhKhach(val)}
                                                                            lengthNguoiLon={params.nguoi_lon}
                                                                            lengthTreEm={params.tre_em}
                                                                            tendichVu={data.ten_dich_vu}
                                                                            maDichVu={data.ma_dich_vu}
                                                                            loaiChuyenBay={loaiChuyenBay}
                                                                        />
                                                                    )
                                                                }) : null
                                                        }
                                                    </Col>
                                                </Row>
                                                :
                                                <Row>
                                                    <Col md={12} xs={12} className="mb-2">
                                                        {
                                                            dataHanhKhach ?
                                                                dataHanhKhach.map((val, i) => {
                                                                    return (
                                                                        <DichVuHaiChieuBamboo
                                                                            key={i}
                                                                            data={getArrHanhKhach(val)}
                                                                            lengthNguoiLon={params.nguoi_lon}
                                                                            lengthTreEm={params.tre_em}
                                                                            tendichVu={data.ten_dich_vu}
                                                                            maDichVu={data.ma_dich_vu}
                                                                            loaiChuyenBay={loaiChuyenBay}
                                                                        />
                                                                    )
                                                                }) : null
                                                        }
                                                    </Col>
                                                </Row>
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default PhuTro;