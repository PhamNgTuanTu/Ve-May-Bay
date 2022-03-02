import { moneyFormat } from 'helpers/function/function_helper';
import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Label, Row } from 'reactstrap';
import { hanhKhachNguoiLon } from "../../../../../common/data/Data";
import CheckBoxThucAn from './CheckBoxThucAn';

ThucAnMotChieu.propTypes = {

};

function ThucAnMotChieu(props) {
    const { data, loaiHanhKhach, index, dataThucAn, loaiChuyenBay, tenPhuTro } = props
    const {
        hanhKhachNguoiLon,
        arrPhuTroMotChieu } = useSelector(state => ({
            hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
            arrPhuTroMotChieu: state.DatTimVe.arrPhuTroMotChieu,
        }))

    return (
        <Row className='mb-3'>
            <Col md='3' className="d-flex align-items-center">
                <Label for="selectedIndex">{loaiHanhKhach === "hanhKhachNguoiLon" ? `${index + 1}. ${data.ho} ${data.ten}` : `${index + 1 + hanhKhachNguoiLon.length}. ${data.ho} ${data.ten}`}</Label>
            </Col>
            <Col md="9">
                <Row>
                    {
                        JSON.stringify(dataThucAn) !== "[]" ?
                            dataThucAn.map((val, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <Col md='7'>
                                            <CheckBoxThucAn
                                                data={val}
                                                index={index}
                                                indexHangMuc={i}
                                                loaiHanhKhach={loaiHanhKhach}
                                                loaiChuyenBay={loaiChuyenBay}
                                            />
                                        </Col>
                                        <Col md='5' className="d-flex align-items-center">
                                            <strong>
                                                {
                                                    `${arrPhuTroMotChieu[loaiHanhKhach] &&
                                                        arrPhuTroMotChieu[loaiHanhKhach][`${loaiChuyenBay}-${loaiHanhKhach}-${index}-${tenPhuTro}-${i}`] ?
                                                        moneyFormat(arrPhuTroMotChieu[loaiHanhKhach][`${loaiChuyenBay}-${loaiHanhKhach}-${index}-${tenPhuTro}-${i}`].arr_phi.tong_thanh_tien) : 0} VNĐ`
                                                }
                                            </strong>
                                        </Col>
                                    </React.Fragment>
                                )
                            })
                            : null
                    }
                </Row>
            </Col>
        </Row>
    );
}

export default ThucAnMotChieu;