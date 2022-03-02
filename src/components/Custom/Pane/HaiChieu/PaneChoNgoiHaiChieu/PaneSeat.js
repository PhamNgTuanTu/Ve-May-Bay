import SpinnerLoading from 'components/Custom/SpinnerLoading';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { saveAfterArrSeatChooseHaiChieu, saveNameSeatChooseHaiChieu, tinhPhiVeChonGhe } from 'store/actions';

PaneSeat.propTypes = {};

function PaneSeat(props) {
    const { arrAlpha, dataArray, index, setIndexPerSon, nameChuyenBay, changeActiveTab } = props;
    const [checkedItems, setCheckedItems] = useState({});
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch()
    const { arrSeatHaiChieu, nameSeatHaiChieu, paramsPhiVe, resApiPhiVe } = useSelector(state => ({
        arrSeatHaiChieu: state.DatTimVe.arrSeatHaiChieu,
        nameSeatHaiChieu: state.DatTimVe.nameSeatHaiChieu,
        paramsPhiVe: state.DatTimVe.paramsPhiVe,
        resApiPhiVe: state.DatTimVe.resApiPhiVe
    }))
    let stt = 0;

    const changeSeat = (e, price, vat, total, arrSeat) => {
        setLoad(true)
        var value = e.target.value;
        var name = e.target.name;
        var checked = e.target.checked;
        var length = arrSeatHaiChieu.length;
        if (Number(index) === Number(length - 1)) {
            setIndexPerSon(0)
        } else {
            setIndexPerSon(Number(index + 1))
        }
        updateValue(name, value, checked, price, vat, total, arrSeat)
        tinhPhiKhiChonGhe(paramsPhiVe, arrSeatHaiChieu)
    }

    const convertArr = (arrPerSon, paramsPhi, dinhDanh) => {
        let markers = [...paramsPhi.hai_chieu[dinhDanh]]
        arrPerSon.map((val, i) => {
            if (JSON.stringify(val.arr_phi) !== "{}") {
                markers[i].phi_cho_ngoi = arrPerSon[i].arr_phi
            }
        })
        markers.map((val, i) => {
            val.phi_cho_ngoi === null ? delete val.phi_cho_ngoi : null
        })
        return markers
    }

    const tinhPhiKhiChonGhe = (paramsPhi, paramSeat) => {
        let arrNguoiLon = [], arrTreEm = [];
        paramSeat.map((val, i) => {
            Number(val.loai_hanh_khach) === 1 ? arrNguoiLon.push(val) : arrTreEm.push(val)
        })
        let arrNguoiLonConVert = convertArr(arrNguoiLon, paramsPhi, "nguoi_lon")
        let arrTreEmConVert = convertArr(arrTreEm, paramsPhi, "tre_em")
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


    const updateValue = (name, value, checked, price, vat, total, arrSeat) => {
        if (index >= 0) {
            let markers = [...arrSeatHaiChieu]
            let objIndex = markers.findIndex((obj => obj.id == index));
            if (checked) {
                markers[objIndex].ten_ghe = name
                markers[objIndex].ma_phu_tro = value
                markers[objIndex].status = checked
                markers[objIndex].gia_ve = price
                markers[objIndex].thue = vat
                markers[objIndex].tong_tien = total
                markers[objIndex].arr_phi = arrSeat
            } else {
                markers[objIndex].ten_ghe = ""
                markers[objIndex].ma_phu_tro = ""
                markers[objIndex].status = checked
                markers[objIndex].gia_ve = 0
                markers[objIndex].thue = 0
                markers[objIndex].tong_tien = 0
                markers[objIndex].arr_phi = null

            }
            dispatch(saveAfterArrSeatChooseHaiChieu(markers))
        }
    }

    const CheckBox = ({ id, disabled, label, value, price, vat, total, arrSeat }) => (
        <li className="seat">
            <input
                id={id}
                name={id}
                checked={checkedItems[id]}
                onChange={(event) => changeSeat(event, price, vat, total, arrSeat)}
                type="checkbox"
                value={value}
                disabled={disabled}
            />
            <label htmlFor={id}
                className={
                    Number(price) > 89000 ? "special-class" : "" ||
                        Number(price) < 40000 ? "normal-class" : "" ||
                            40000 > Number(price) < 90000 ? "average-class" : ""
                }
            ></label>

        </li>
    )

    useEffect(() => {
        if (JSON.stringify(arrSeatHaiChieu) !== "[]") {
            let arr = []
            for (let i = 0; i < arrSeatHaiChieu.length; i++) {
                if (arrSeatHaiChieu[i]["ten_ghe"] !== "") {
                    arr.push({ [arrSeatHaiChieu[i]["ten_ghe"]]: arrSeatHaiChieu[i]["status"] })
                }
            }
            let newObj = arr.reduce((a, b) => Object.assign(a, b), {})
            dispatch(saveNameSeatChooseHaiChieu(newObj))
        }
    }, [arrSeatHaiChieu])

    useEffect(() => {
        setCheckedItems({})
    }, [changeActiveTab])

    useEffect(() => {
        if (resApiPhiVe.action === "tinh-phi-ve" && resApiPhiVe.code === 200) {
            setLoad(false)
        } else {
            setLoad(false)
        }
    }, [resApiPhiVe])

    useEffect(() => {
        setCheckedItems(nameSeatHaiChieu)
    }, [nameSeatHaiChieu])

    return (
        <>
            {load ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="fuselage-moblie">
                <Row>
                    <Col md="12" className="px-0">
                        <div className="seats mb-2" type="A">
                            {arrAlpha ?
                                arrAlpha.map((val, i) => {
                                    return (
                                        <li key={i} className="seat">
                                            <strong >{val}</strong>
                                        </li>
                                    )
                                }) : null}
                        </div>
                    </Col>
                </Row>
                {
                    Object.keys(dataArray).map(function (key, i) {
                        return (
                            <div key={i} className={`row--${i + 1}`}>
                                <Row>
                                    <Col md="12" className="px-0" >
                                        <div className="seats" type="A">
                                            {
                                                dataArray[key].map((val, index) => {
                                                    val !== null ? stt = val.ban_do_cho_ngoi.dinh_danh_hang : ""
                                                    return (
                                                        val !== null ?
                                                            <CheckBox
                                                                key={index}
                                                                id={`${nameChuyenBay}-${val.ban_do_cho_ngoi.dinh_danh_hang}${val.ban_do_cho_ngoi.dinh_danh_cho_ngoi}`}
                                                                disabled={!val.cho_ngoi_hop_le.co_san}
                                                                label={`${val.ban_do_cho_ngoi.dinh_danh_hang}${val.ban_do_cho_ngoi.dinh_danh_cho_ngoi}`}
                                                                value={val.ma_dat_cho}
                                                                price={val.phi_cho_ngoi.so_tien_co_ban}
                                                                vat={val.phi_cho_ngoi.so_tien_thue}
                                                                total={val.phi_cho_ngoi.tong_thanh_tien}
                                                                arrSeat={val.phi_cho_ngoi}

                                                            />
                                                            : <li key={index} className="seat"></li>
                                                    )
                                                })
                                            }
                                            <div className="seats-stt__before">{stt}</div>
                                            <div className="seats-stt__after">{stt}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default PaneSeat;