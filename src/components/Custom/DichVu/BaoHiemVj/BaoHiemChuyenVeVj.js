import { moneyFormat } from 'helpers/function/function_helper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { saveArrBaoHiemHaiChieu, saveNameBaoHiemHaiChieu, tinhPhiVeChonGhe } from 'store/actions';
import { paramsPhiVe } from "../../../../common/data/Data"

BaoHiemChuyenVeVj.propTypes = {

};

function BaoHiemChuyenVeVj(props) {
    const dispatch = useDispatch()
    const { data } = props
    const {
        paramsPhiVe, 
        nameBaoHiemHaiChieu, arrBaoHiemHaiChieu } = useSelector(state => ({
            paramsPhiVe: state.DatTimVe.paramsPhiVe,
            nameBaoHiemHaiChieu: state.DatTimVe.nameBaoHiemHaiChieu,
            arrBaoHiemHaiChieu: state.DatTimVe.arrBaoHiemHaiChieu
        }))
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [checkedItems, setCheckedItems] = useState(false)

    const handleChange = (e, value, data) => {
        const name = e.target.name
        const check = e.target.checked
        let arrChecked = { [name]: check }
        let arr = {}
        if (check) {
            arr = {
                ...arrBaoHiemHaiChieu,
                [name]: {
                    khoa_bao_hiem: value,
                    arr_phi: data,
                }
            }
        } else {
            arr = {
                ...arrBaoHiemHaiChieu,
                [name]: {
                    khoa_bao_hiem: "",
                    arr_phi: {},
                }
            }
        }
        tinhPhiKhiChonGhe(paramsPhiVe, arr)
        dispatch(saveArrBaoHiemHaiChieu(arr))
        dispatch(saveNameBaoHiemHaiChieu(arrChecked))
    }

    const convertArr = (arr, paramPhuTro) => {
        let arrResult = arr.map((val, i) => {
            return {
                ...val,
                phi_bao_hiem: paramPhuTro.bao_hiem_chuyen_ve.arr_phi
            }
        })
        arrResult.map((val, i) => {
            if (JSON.stringify(val.phi_bao_hiem) === "{}") {
                delete val.phi_bao_hiem
            }
        })
        return arrResult

    }

    const tinhPhiKhiChonGhe = (paramsPhi, paramPhuTro) => {
        let arrNguoiLon = [...paramsPhi.hai_chieu.nguoi_lon]
        let arrTreEm = [...paramsPhi.hai_chieu.tre_em]
        let arrNguoiLonConVert = convertArr(arrNguoiLon, paramPhuTro)
        let arrTreEmConVert = convertArr(arrTreEm, paramPhuTro)
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

    const CheckBox = ({ id, label, name, value, data }) => (
        <label
            htmlFor={id}
            className="label-cbx"
        >
            <input
                id={id}
                name={name}
                onChange={(e) => handleChange(e, value, data)}
                checked={checkedItems[name]}
                type="checkbox"
                className="invisible"
            />
            <div className="checkbox">
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                </svg>
            </div>
            <span>{label}</span>
        </label>
    )

    useEffect(() => {
        setCheckedItems(nameBaoHiemHaiChieu)
    }, [nameBaoHiemHaiChieu])

    return (
        <>
            <Row onClick={() => toggle()} className="title-auxiliary">
                <Col md={6}>
                    <strong className="title-auxiliary__strong">
                        Bảo hiểm du lịch
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
                        <Col md="12">
                            <Row>
                                {
                                    JSON.stringify(data) !== "[]" ?
                                        data.map((val, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    <Col md='7'>
                                                        <div className="gr-cb mt-2 mb-2">
                                                            <CheckBox
                                                                id="bao_hiem_chuyen_ve"
                                                                label={val.ten_ncc_bao_hiem}
                                                                value={val.khoa_bao_hiem}
                                                                name="bao_hiem_chuyen_ve"
                                                                data={val.phi_bao_hiem}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md='5' className="d-flex align-items-center">
                                                        <strong>
                                                            {
                                                                `${arrBaoHiemHaiChieu &&
                                                                    arrBaoHiemHaiChieu["bao_hiem_chuyen_ve"] ?
                                                                    moneyFormat(arrBaoHiemHaiChieu["bao_hiem_chuyen_ve"].arr_phi.tong_thanh_tien) : 0} VNĐ`
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
                    </CardBody>
                </Card>
            </Collapse>
        </>
    );
}

export default BaoHiemChuyenVeVj;