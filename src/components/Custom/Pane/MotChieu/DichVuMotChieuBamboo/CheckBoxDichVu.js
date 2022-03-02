import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { saveDataPhuTroChuyenDiVj, saveDataPhuTroThucAnChuyenDiVj, tinhPhiVeChonGhe } from 'store/actions';
import { params } from "../../../../../common/data/Data";


CheckBoxDichVu.propTypes = {};

function CheckBoxDichVu(props) {
    const dispatch = useDispatch()
    const { data, tendichVu, index, maDichVu, loaiChuyenBay } = props
    const { paramsPhiVe, nameThucAnMotChieu, arrPhuTroMotChieu, arrHanhLyMotChieu, params } = useSelector(state => ({
        paramsPhiVe: state.DatTimVe.paramsPhiVe,
        nameThucAnMotChieu: state.DatTimVe.nameThucAnMotChieu,
        arrPhuTroMotChieu: state.DatTimVe.arrPhuTroMotChieu,
        arrHanhLyMotChieu: state.DatTimVe.arrHanhLyMotChieu,
        params: state.DatTimVe.params,
    }))
    const [checkedItems, setCheckedItems] = useState({});
    const handleChange = (e, value, data, loaiHanhKhach, vat, idPerSon) => {
        const name = e.target.name
        const check = e.target.checked
        let id = loaiHanhKhach === "hanhKhachNguoiLon" ? idPerSon : (loaiHanhKhach === "hanhKhachTreEm" ? (idPerSon - params.nguoi_lon) : (idPerSon - (params.nguoi_lon + params.tre_em)))
        const arrPhi = {
            mota: "phu_phi",
            tong_thanh_tien: (vat.gia_thue ? vat.gia_thue : 0) + data.gia_tien,
            ma_tien_te: data.tien_te,
            loai_tien_te: "Vietnam Dong",
            so_tien_co_ban: data.gia_tien,
            khuyen_mai: 0,
            so_tien_thue: vat.gia_thue ? vat.gia_thue : 0,
            gia_tri: "",
            ma_loai_phi: value,
        }
        let arr = {}

        if (check) {
            arr = {
                ...arrPhuTroMotChieu,
                [loaiHanhKhach]: {
                    ...arrPhuTroMotChieu[loaiHanhKhach],
                    ...arrHanhLyMotChieu[loaiHanhKhach],
                    [name]: {
                        ma_dich_vu: value,
                        arr_phi: arrPhi,
                        id_hanh_khach: index
                    }
                }
            }
        } else {
            arr = {
                ...arrPhuTroMotChieu,
                [loaiHanhKhach]: {
                    ...arrPhuTroMotChieu[loaiHanhKhach],
                    ...arrHanhLyMotChieu[loaiHanhKhach],
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
        tinhPhiKhiChonGhe(paramsPhiVe, arr, id)
        dispatch(saveDataPhuTroChuyenDiVj(arr))
        dispatch(saveDataPhuTroThucAnChuyenDiVj(arrChecked))
    }

    const getArrPhi = (arrPerSon, dinhDanh) => {
        let arr = []
        let result = []
        Object.keys(arrPerSon).map(function (key, index) {
            arr.push({
                id: dinhDanh === "nguoi_lon" ? arrPerSon[key].id_hanh_khach : (dinhDanh === "tre_em" ? arrPerSon[key].id_hanh_khach - params.nguoi_lon : arrPerSon[key].id_hanh_khach - (params.nguoi_lon + params.tre_em)),
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

    const convertArr = (data, paramsPhi, dinhDanh, id) => {
        let markers = [...paramsPhi.mot_chieu[dinhDanh]]
        if (JSON.stringify(data) !== "[]") {
            data.map((val, i) => {
                markers[id].phu_phi = val.arr_phi
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

    const tinhPhiKhiChonGhe = (paramsPhi, paramPhuTro, id) => {
        let arrNguoiLon = { ...paramPhuTro.hanhKhachNguoiLon }, arrTreEm = { ...paramPhuTro.hanhKhachTreEm }, arrEmBe = { ...paramPhuTro.hanhKhachEmBe };
        let arrPhiNguoiLon = getArrPhi(arrNguoiLon, "nguoi_lon", id)
        let arrPhiTreEm = getArrPhi(arrTreEm, "tre_em", id)
        let arrPhiEmBe = getArrPhi(arrEmBe, "em_be", id)
        let arrNguoiLonConVert = convertArr(arrPhiNguoiLon, paramsPhi, "nguoi_lon", id)
        let arrTreEmConVert = convertArr(arrPhiTreEm, paramsPhi, "tre_em", id)
        let arrEmBeConVert = convertArr(arrPhiEmBe, paramsPhi, "em_be", id)
        let arrResult = {
            ...paramsPhi,
            mot_chieu: {
                ...paramsPhi.mot_chieu,
                nguoi_lon: arrNguoiLonConVert,
                tre_em: arrTreEmConVert,
                em_be: arrEmBeConVert
            }
        }
        dispatch(tinhPhiVeChonGhe(arrResult))
    }

    const CheckBox = ({ id, label, name, value, data, loaiHanhKhach, vat, idPerSon }) => (
        <label
            htmlFor={id}
            className="label-cbx"
        >
            <input
                id={id}
                name={name}
                onChange={(e) => handleChange(e, value, data, loaiHanhKhach, vat, idPerSon)}
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
                        id={`${loaiChuyenBay}_${maDichVu}_${index}`}
                        label={tendichVu}
                        value={maDichVu}
                        name={`${loaiChuyenBay}_${maDichVu}_${index}`}
                        data={data.phi}
                        vat={data.thue}
                        idPerSon={index}
                        loaiHanhKhach={data.loai_khach === "ADULT" ? "hanhKhachNguoiLon" : (
                            data.loai_khach === "CHILD" ? "hanhKhachTreEm" : "hanhKhachEmBe"
                        )}
                    />
                </div>
            </Col>
        </Row>
    );
}

export default CheckBoxDichVu;