import { moneyFormat } from 'helpers/function/function_helper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Label, Row } from 'reactstrap';
import { hanhKhachNguoiLon } from "../../../../../common/data/Data";
import SelectFieldPhuTro from './SelectFieldPhuTro';


DichVuMotChieu.propTypes = {};

function DichVuMotChieu(props) {
    const { data, index, dataPhuTro, placeholder, loaiHanhKhach, loaiChuyenBay } = props
    const [options, setOptions] = useState([])
    const { hanhKhachNguoiLon, arrPhuTroMotChieu } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        arrPhuTroMotChieu: state.DatTimVe.arrPhuTroMotChieu,
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
                    value={arrPhuTroMotChieu && arrPhuTroMotChieu[loaiHanhKhach] && arrPhuTroMotChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`] ? arrPhuTroMotChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`] : null}
                />
            </Col>
            <Col md='2' className="d-flex align-items-center">
                <strong>
                    {(arrPhuTroMotChieu && arrPhuTroMotChieu[loaiHanhKhach] && arrPhuTroMotChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`] ? moneyFormat(arrPhuTroMotChieu[loaiHanhKhach][`${placeholder}_${loaiChuyenBay}-${index}`].arr_phi.tong_thanh_tien) : 0) + " VN??"}
                </strong>
            </Col>
        </Row>
    );
}

export default DichVuMotChieu;