import { moneyFormat } from 'helpers/function/function_helper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Label, Row } from 'reactstrap';
import { hanhKhachNguoiLon } from "../../../../../common/data/Data";
import SelectFieldPhuTro from './SelectFieldPhuTro';


HanhLyMotChieuBamboo.propTypes = {};

function HanhLyMotChieuBamboo(props) {
    const { data, index, dataPhuTro, loaiHanhKhach, tenDichVu } = props
    const [options, setOptions] = useState([])
    const { hanhKhachNguoiLon, arrHanhLyMotChieu } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        arrHanhLyMotChieu: state.DatTimVe.arrHanhLyMotChieu,
    }))

    const convertOption = (data) => {
        let arr = []
        data.map((val, i) => {
            arr.push({
                value: `${val.ma_dich_vu}_${val.rfic_sub_code}`,
                label: val.ten_dich_vu,
                data: val.chi_tiet_goi_hanh_ly
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
                    placeholder={tenDichVu}
                    name={`${tenDichVu}_${index}`}
                    id={index}
                    loaiHanhKhach={loaiHanhKhach}
                    smallWidth={"resize"}
                    value={arrHanhLyMotChieu 
                        && arrHanhLyMotChieu[loaiHanhKhach] 
                        && arrHanhLyMotChieu[loaiHanhKhach][`${tenDichVu}_${index}`] 
                        ? arrHanhLyMotChieu[loaiHanhKhach][`${tenDichVu}_${index}`] 
                        : null}
                />
            </Col>
            <Col md='2' className="d-flex align-items-center">
                <strong>
                    {
                        (arrHanhLyMotChieu
                            && arrHanhLyMotChieu[loaiHanhKhach]
                            && arrHanhLyMotChieu[loaiHanhKhach][`${tenDichVu}_${index}`]
                            ? moneyFormat(arrHanhLyMotChieu[loaiHanhKhach][`${tenDichVu}_${index}`].arr_phi.tong_thanh_tien)
                            : 0) + " VNĐ"
                    }
                </strong>
            </Col>
        </Row>
    );
}

export default HanhLyMotChieuBamboo;