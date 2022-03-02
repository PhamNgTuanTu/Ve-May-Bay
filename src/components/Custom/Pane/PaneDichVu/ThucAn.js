import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { hanhKhachNguoiLon, hanhKhachTreEm } from "../../../../common/data/Data";
import ThucAnHaiChieu from '../HaiChieu/ThucAnHaiChieu';
import ThucAnMotChieu from "../MotChieu/ThucAnMotChieu"

ThucAn.propTypes = {};

function ThucAn(props) {
    const { data, loaiChuyenBay } = props
    const { hanhKhachNguoiLon, hanhKhachTreEm } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        hanhKhachTreEm: state.DatTimVe.hanhKhachTreEm,
    }))
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="clear-box-dv">
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
                                    {
                                        JSON.stringify(hanhKhachNguoiLon) !== "[]" && hanhKhachNguoiLon.length > 0 ?
                                            hanhKhachNguoiLon.map((val, i) => {
                                                return (
                                                    <ThucAnMotChieu
                                                        key={i}
                                                        data={val}
                                                        index={i}
                                                        dataThucAn={data}
                                                        loaiHanhKhach="hanhKhachNguoiLon"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                        tenPhuTro={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                    />
                                                )
                                            })
                                            : null
                                    }
                                    {
                                        JSON.stringify(hanhKhachTreEm) !== "[]" && hanhKhachTreEm.length > 0 ?
                                            hanhKhachTreEm.map((val, i) => {
                                                return (
                                                    <ThucAnMotChieu
                                                        key={i}
                                                        data={val}
                                                        index={i}
                                                        dataThucAn={data}
                                                        loaiHanhKhach="hanhKhachTreEm"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                        tenPhuTro={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                    />
                                                )
                                            })
                                            : null
                                    }
                                </Row>
                                : <Row>
                                    {
                                        JSON.stringify(hanhKhachNguoiLon) !== "[]" && hanhKhachNguoiLon.length > 0 ?
                                            hanhKhachNguoiLon.map((val, i) => {
                                                return (
                                                    <ThucAnHaiChieu
                                                        key={i}
                                                        data={val}
                                                        index={i}
                                                        dataThucAn={data}
                                                        loaiHanhKhach="hanhKhachNguoiLon"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                        tenPhuTro={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                    />
                                                )
                                            })
                                            : null
                                    }
                                    {
                                        JSON.stringify(hanhKhachTreEm) !== "[]" && hanhKhachTreEm.length > 0 ?
                                            hanhKhachTreEm.map((val, i) => {
                                                return (
                                                    <ThucAnHaiChieu
                                                        key={i}
                                                        data={val}
                                                        index={i}
                                                        dataThucAn={data}
                                                        loaiHanhKhach="hanhKhachTreEm"
                                                        loaiChuyenBay={loaiChuyenBay}
                                                        tenPhuTro={data[0]["hang_muc_phu_tro"].ten_hang_muc}
                                                    />
                                                )
                                            })
                                            : null
                                    }
                                </Row>
                        }

                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default ThucAn;