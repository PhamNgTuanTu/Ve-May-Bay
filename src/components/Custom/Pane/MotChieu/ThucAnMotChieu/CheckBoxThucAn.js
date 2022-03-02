import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { saveDataPhuTroChuyenDiVj, saveDataPhuTroThucAnChuyenDiVj, tinhPhiVeChonGhe } from 'store/actions';

CheckBoxThucAn.propTypes = {};

function CheckBoxThucAn(props) {
    const dispatch = useDispatch()
    const { data, index, loaiHanhKhach, indexHangMuc, loaiChuyenBay } = props
    const { paramsPhiVe, arrPhuTroMotChieu, nameThucAnMotChieu } = useSelector(state => ({
        paramsPhiVe: state.DatTimVe.paramsPhiVe,
        arrPhuTroMotChieu: state.DatTimVe.arrPhuTroMotChieu,
        nameThucAnMotChieu: state.DatTimVe.nameThucAnMotChieu
    }))
    const [checkedItems, setCheckedItems] = useState({});
    const handleChange = (e, value, data) => {
        const name = e.target.name
        const check = e.target.checked
        let arr = {}
        if (check) {
            arr = {
                ...arrPhuTroMotChieu,
                [loaiHanhKhach]: {
                    ...arrPhuTroMotChieu[loaiHanhKhach],
                    [name]: {
                        ma_dich_vu: value,
                        arr_phi: data,
                        id_hanh_khach: index
                    }
                }
            }
        } else {
            arr = {
                ...arrPhuTroMotChieu,
                [loaiHanhKhach]: {
                    ...arrPhuTroMotChieu[loaiHanhKhach],
                    [name]: {
                        ma_dich_vu: "",
                        arr_phi: [],
                        id_hanh_khach: index
                    }
                }
            }
        }
        let arrChecked = {
            ...nameThucAnMotChieu,
            [name]: check
        }
        tinhPhiKhiChonGhe(paramsPhiVe, arr)
        dispatch(saveDataPhuTroChuyenDiVj(arr))
        dispatch(saveDataPhuTroThucAnChuyenDiVj(arrChecked))
    }

    const getArrPhi = (arrPerSon) => {
        let arr = []
        let result = []
        Object.keys(arrPerSon).map(function (key, index) {
            arr.push({
                id: arrPerSon[key].id_hanh_khach,
                arr_phi: arrPerSon[key].arr_phi,
            })
        });
        if (JSON.stringify(arr) !== "[]") {
            const objIds = arr.reduce((a, { id, arr_phi }) => {
                a[id] = a[id] || { id, arr_phi: [] }
                return { ...a, ...{ [id]: { id, arr_phi: a[id].arr_phi.concat(arr_phi) } } }
            }, {})
            result = Object.values(objIds)
        }
        return result
    }

    const convertArr = (data, paramsPhi, dinhDanh) => {
        let markers = [...paramsPhi.mot_chieu[dinhDanh]]
        if (JSON.stringify(data) !== "[]") {
            data.map((val, i) => {
                markers[val.id].phu_phi = val.arr_phi
            })
        }
        markers.map((val, i) => {
            if (val.phu_phi) {
                val.phu_phi.map((x) => {
                    x === "" ? delete val.phu_phi : null
                })
            }
        })
        return markers
    }

    const tinhPhiKhiChonGhe = (paramsPhi, paramPhuTro) => {
        let arrNguoiLon = { ...paramPhuTro.hanhKhachNguoiLon }, arrTreEm = { ...paramPhuTro.hanhKhachTreEm };
        let arrPhiNguoiLon = getArrPhi(arrNguoiLon)
        let arrPhiTreEm = getArrPhi(arrTreEm)
        let arrNguoiLonConVert = convertArr(arrPhiNguoiLon, paramsPhi, "nguoi_lon")
        let arrTreEmConVert = convertArr(arrPhiTreEm, paramsPhi, "tre_em")
        let arrResult = {
            ...paramsPhi,
            mot_chieu: {
                ...paramsPhi.mot_chieu,
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
        setCheckedItems(nameThucAnMotChieu)
    }, [nameThucAnMotChieu])

    return (
        <Row>
            <Col md="12">
                <div className="gr-cb mt-2 mb-2">
                    <CheckBox
                        id={`chuyen-di_${loaiHanhKhach}_${index}_${data.khoa_phu_tro}`}
                        label={data.hang_muc_phu_tro.ten_phu_tro}
                        value={data.khoa_phu_tro}
                        name={`${loaiChuyenBay}-${loaiHanhKhach}-${index}-${data.hang_muc_phu_tro.ten_hang_muc}-${indexHangMuc}`}
                        data={data.phu_phi}
                    />
                </div>
            </Col>
        </Row>
    );
}

export default CheckBoxThucAn;