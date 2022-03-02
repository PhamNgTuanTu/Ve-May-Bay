import React from 'react';
import HanhLy from './HanhLy';
import PhuTro from "./PhuTro";

PaneDichVuBamboo.propTypes = {};

function PaneDichVuBamboo(props) {
    const { dataPhuTro, dataHanhLy, loaiChuyenBay } = props

    return (
        <>
            {
                dataPhuTro && JSON.stringify(dataPhuTro) !== "[]" ?
                    dataPhuTro.map((val, i) => {
                        return (
                            <PhuTro
                                key={i}
                                data={val}
                                dataHanhKhach={val.hanh_khach}
                                loaiChuyenBay={loaiChuyenBay}
                            />
                        )
                    })
                    : null
            }
            {
                dataHanhLy && JSON.stringify(dataHanhLy) !== "[]" ?
                    <>
                        <HanhLy
                            data={dataHanhLy}
                            tenDichVu={dataHanhLy[0].tu_khoa_dich_vu}
                            loaiChuyenBay={loaiChuyenBay}
                        />
                    </> : null
            }

        </>
    );
}

export default PaneDichVuBamboo;