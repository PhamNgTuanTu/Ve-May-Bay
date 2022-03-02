import { moneyFormat } from 'helpers/function/function_helper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Label, Row } from 'reactstrap';
import CheckBoxDichVu from './CheckBoxDichVu';


DichVuMotChieuBamboo.propTypes = {};

function DichVuMotChieuBamboo(props) {
    const { data, lengthNguoiLon, lengthTreEm, maDichVu, tendichVu, loaiChuyenBay } = props
    const { arrPhuTroMotChieu } = useSelector(state => ({
        arrPhuTroMotChieu: state.DatTimVe.arrPhuTroMotChieu,
    }))
    return (
        <>
            {
                JSON.stringify(data) !== "[]" && data.length > 0 ?
                    data.map((val, i) => {
                        return (
                            <Row className='mb-3' key={i}>
                                <Col md='3' className="d-flex align-items-center">
                                    <Label for="selectedIndex">
                                        {val.loai_hanh_khach === "ADULT" ? `${i + 1}. ${val.ho_ten}`
                                            : (val.loai_hanh_khach === "CHILD" ? `${i + 1 + lengthNguoiLon}. ${val.ho_ten}`
                                                : `${i + 1 + lengthNguoiLon + lengthTreEm}. ${val.ho_ten}`)}
                                    </Label>
                                </Col>
                                <Col md='7'>
                                    <CheckBoxDichVu
                                        data={val}
                                        tendichVu={tendichVu}
                                        maDichVu={maDichVu}
                                        index={val.loai_hanh_khach === "ADULT" ? (i)
                                            : (val.loai_hanh_khach === "CHILD" ? (i + lengthNguoiLon)
                                                : (i + lengthNguoiLon + lengthTreEm))}
                                        loaiChuyenBay={loaiChuyenBay}
                                    />
                                </Col>
                                <Col md='2' className="d-flex align-items-center">
                                    <strong>
                                        {(arrPhuTroMotChieu
                                            && arrPhuTroMotChieu[`${val.loai_hanh_khach === "ADULT" ? "hanhKhachNguoiLon" : (val.loai_hanh_khach === "CHILD" ? "hanhKhachTreEm" : "hanhKhachEmBe")}`]
                                            && arrPhuTroMotChieu
                                            [`${val.loai_hanh_khach === "ADULT" ? "hanhKhachNguoiLon" : (val.loai_hanh_khach === "CHILD" ? "hanhKhachTreEm" : "hanhKhachEmBe")}`]
                                            [`${loaiChuyenBay}_${maDichVu}_${val.loai_hanh_khach === "ADULT" ? i : (val.loai_hanh_khach === "CHILD" ? (i + lengthNguoiLon) : (i + lengthNguoiLon + lengthTreEm))}`]
                                            ? moneyFormat(arrPhuTroMotChieu
                                            [`${val.loai_hanh_khach === "ADULT" ? "hanhKhachNguoiLon" : (val.loai_hanh_khach === "CHILD" ? "hanhKhachTreEm" : "hanhKhachEmBe")}`]
                                            [`${loaiChuyenBay}_${maDichVu}_${val.loai_hanh_khach === "ADULT" ? i : (val.loai_hanh_khach === "CHILD" ? (i + lengthNguoiLon) : (i + lengthNguoiLon + lengthTreEm))}`].arr_phi.tong_thanh_tien)
                                            : 0) + " VNĐ"
                                        }
                                    </strong>
                                </Col>
                            </Row>

                        )
                    })
                    : null
            }
        </>
    );
}

export default DichVuMotChieuBamboo;