import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { hanhKhachEmBe, hanhKhachNguoiLon, hanhKhachTreEm, params } from "../../../../common/data/Data";
import HanhLyHaiChieuBamboo from '../HaiChieu/HanhLyHaiChieuBamboo';
import HanhLyMotChieuBamboo from '../MotChieu/HanhLyMotChieuBamboo';

HanhLy.propTypes = {};

function HanhLy(props) {
    const { data, tenDichVu, loaiChuyenBay } = props
    const { hanhKhachNguoiLon, hanhKhachTreEm } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        hanhKhachTreEm: state.DatTimVe.hanhKhachTreEm,
    }))

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="clear-box-dv mb-2">
            <Row onClick={toggle} className="title-auxiliary">
                <Col md={6}>
                    <strong className="title-auxiliary__strong">
                        {tenDichVu}
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
                                {
                                    loaiChuyenBay === "chuyen_di" ?
                                        <Row>
                                            <Col md={12} xs={12} className="mb-2">
                                                {
                                                    hanhKhachNguoiLon.map((val, i) => {
                                                        return (
                                                            <HanhLyMotChieuBamboo
                                                                key={i}
                                                                index={i}
                                                                data={val}
                                                                dataPhuTro={data}
                                                                loaiHanhKhach="hanhKhachNguoiLon"
                                                                tenDichVu={tenDichVu}
                                                            />
                                                        )
                                                    })
                                                }
                                                {
                                                    hanhKhachTreEm.map((val, i) => {
                                                        return (
                                                            <HanhLyMotChieuBamboo
                                                                key={i}
                                                                index={i}
                                                                data={val}
                                                                dataPhuTro={data}
                                                                loaiHanhKhach="hanhKhachTreEm"
                                                                tenDichVu={tenDichVu}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </Row>
                                        :
                                        <Row>
                                            <Col md={12} xs={12} className="mb-2">
                                                {
                                                    hanhKhachNguoiLon.map((val, i) => {
                                                        return (
                                                            <HanhLyHaiChieuBamboo
                                                                key={i}
                                                                index={i}
                                                                data={val}
                                                                dataPhuTro={data}
                                                                loaiHanhKhach="hanhKhachNguoiLon"
                                                                tenDichVu={tenDichVu}
                                                            />
                                                        )
                                                    })
                                                }
                                                {
                                                    hanhKhachTreEm.map((val, i) => {
                                                        return (
                                                            <HanhLyHaiChieuBamboo
                                                                key={i}
                                                                index={i}
                                                                data={val}
                                                                dataPhuTro={data}
                                                                loaiHanhKhach="hanhKhachTreEm"
                                                                tenDichVu={tenDichVu}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </Row>
                                }
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default HanhLy;