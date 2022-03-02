import { moneyFormat } from 'helpers/function/function_helper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Label, Row } from 'reactstrap';
import { hanhKhachNguoiLon } from "../../../../../common/data/Data";
import SelectFieldPhuTro from './SelectFieldPhuTro';


DichVuHaiChieu.propTypes = {};

function DichVuHaiChieu(props) {
    const { data, index, dataPhuTro, placeholder, loaiHanhKhach, loaiChuyenBay } = props
    const [options, setOptions] = useState([])
    const { 
        hanhKhachNguoiLon, 
        arrPhuTroHaiChieu } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        arrPhuTroHaiChieu: state.DatTimVe.arrPhuTroHaiChieu,
    }))

    const convertOption = (data) => {
        let arr = []
        data.map((val, i) => {
            arr.push({
                value: val.khoa_phu_tro,
                label: val.hang_muc_phu_tro.mo_ta_phu_tro,
                data: val.phu_phi
            })
        })
        setOptions(arr)
    }
    useEffect(() => {
        convertOption(dataPhuTro)
    }, [dataPhuTro])

    return (
        <Row className='mb-3'>
            <Col md='3' className="d-flex align-items-center">
                <Label for="selectedIndex">{loaiHanhKhach === "hanhKhachNguoiLon" ? `${index + 1}. ${data.ho} ${data.ten}` : `${index + 1 + hanhKhachNguoiLon.length}. ${data.ho} ${data.ten}`}</Label>
            </Col>
            <Col md='7'>
                <SelectFieldPhuTro
                    options={options}
                    isClearable={true}
                    placeholder={placeholder}
                    name={`${placeholder}_${loaiChuyenBay}`}
                    loaiHanhKhach={loaiHanhKhach}
                    smallWidth={"resize"}
                    id={index}
                    value={arrPhuTroHaiChieu && arrPhuTroHaiChieu[loaiHanhKhach] && arrPhuTroHaiChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`] ? arrPhuTroHaiChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`] : null}
                />
            </Col>
            <Col md='2' className="d-flex align-items-center">
                <strong>
                    {(arrPhuTroHaiChieu && arrPhuTroHaiChieu[loaiHanhKhach] && arrPhuTroHaiChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`] ? moneyFormat(arrPhuTroHaiChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`].arr_phi.tong_thanh_tien) : 0) + " VNĐ"}
                </strong>
            </Col>
        </Row>
    );
}

export default DichVuHaiChieu;