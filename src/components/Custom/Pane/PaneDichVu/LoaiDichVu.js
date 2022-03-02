import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { hanhKhachNguoiLon, hanhKhachTreEm } from "../../../../common/data/Data";
import DichVuHaiChieu from '../HaiChieu/DichVuHaiChieu';
import DichVuMotChieu from '../MotChieu/DichVuMotChieu';

LoaiDichVu.propTypes = {};

function LoaiDichVu(props) {
    const { data, loaiChuyenBay } = props
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
                        {JSON.stringify(data) !== "[]" ? data[0]["hang_muc_phu_tro"].ten_hang_muc : null}
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
                        {
                            loaiChuyenBay === "chuyen_di" ?
                                <Row>
                                    <Col md={12} xs={12} className="mb-2">
                                        {
                                            hanhKhachNguoiLon.map((val, i) => {
                                                return (
                                                    <DichVuMotChieu
                                                        key={i}
                                                        index={i}
                                                        data={val}
                                                        dataPhuTro={data}
                                                        placeholder={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                        loaiHanhKhach="hanhKhachNguoiLon"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            hanhKhachTreEm.map((val, i) => {
                                                return (
                                                    <DichVuMotChieu
                                                        key={i}
                                                        index={i}
                                                        data={val}
                                                        dataPhuTro={data}
                                                        placeholder={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                        loaiHanhKhach="hanhKhachTreEm"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                    />
                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                                : <Row>
                                    <Col md={12} xs={12} className="mb-2">
                                        {
                                            hanhKhachNguoiLon.map((val, i) => {
                                                return (
                                                    <DichVuHaiChieu
                                                        key={i}
                                                        index={i}
                                                        data={val}
                                                        dataPhuTro={data}
                                                        placeholder={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                        loaiHanhKhach="hanhKhachNguoiLon"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            hanhKhachTreEm.map((val, i) => {
                                                return (
                                                    <DichVuHaiChieu
                                                        key={i}
                                                        index={i}
                                                        data={val}
                                                        dataPhuTro={data}
                                                        placeholder={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                        loaiHanhKhach="hanhKhachTreEm"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                    />
                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                        }

                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default LoaiDichVu;