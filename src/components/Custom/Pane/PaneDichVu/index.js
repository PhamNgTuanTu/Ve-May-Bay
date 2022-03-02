import React, { useEffect, useState } from 'react';
import { Card } from 'reactstrap';
import LoaiDichVu from './LoaiDichVu';
import ThucAn from './ThucAn';

PaneDichVu.propTypes = {};

function PaneDichVu(props) {
    const { dataPhuTro, loaiChuyenBay } = props
    const [dichVu, setDichVu] = useState([])
    const [thucAn, setThucAn] = useState([])

    const sliceMeal = (data) => {
        Object.keys(data).map(function (key, index) {
            if (key === "meal") {
                setThucAn(data[key])
            }
        });
    }

    const sliceDichVu = (data) => {
        let arr = []
        Object.keys(data).map(function (key, index) {
            if (key !== "meal") {
                arr.push(data[key])
            }
        });
        setDichVu(arr)
    }

    useEffect(() => {
        sliceMeal(dataPhuTro)
        sliceDichVu(dataPhuTro)
    }, [dataPhuTro])

    return (
        <>
            {JSON.stringify(dichVu) !== "[]" ?
                dichVu.map((val, i) => {
                    return (
                        <LoaiDichVu
                            key={i}
                            data={val}
                            loaiChuyenBay={loaiChuyenBay}
                        />
                    )
                }) : null}
            {JSON.stringify(thucAn) !== "[]" ?
                <ThucAn
                    data={thucAn}
                    loaiChuyenBay={loaiChuyenBay}
                /> : null}
        </>
    );
}

export default PaneDichVu;