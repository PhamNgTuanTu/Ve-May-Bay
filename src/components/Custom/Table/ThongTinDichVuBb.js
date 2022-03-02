import React from 'react';
import { CardHeader, CardTitle, Table } from 'reactstrap';
import { moneyFormat } from 'helpers/function/function_helper';

TableThongTinDichVuBb.propTypes = {

};

function TableThongTinDichVuBb(props) {
    const { data, params } = props

    const displayPriceGiaGhe = (data) => {
        return (
            data.map((val, i) => {
                return (
                    <tr key={i}>
                        <td>{val.chi_tiet_gia_ve_cho_loai_khach.loai_gia_ve}</td>
                        <td>{Number(val.chi_tiet_gia_ve_ap_dung.gia_ve_co_ban).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        <td>{Number(0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        <td>{Number(val.chi_tiet_gia_ve_ap_dung.gia_ve_co_ban).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                )
            })
        )
    }

    const disPlayPricePhuTro = (data) => {
        if (JSON.stringify(data) !== "{}") {
            return (
                data.map((val, i) => {
                    return (
                        JSON.stringify(val.phu_phi) !== "{}" ?
                            val.phu_phi.map((x) => {
                                return (
                                    <tr key={i}>
                                        <td>{x.ma}</td>
                                        <td>{Number(x.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{Number(0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{Number(x.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                    </tr>
                                )
                            })
                            : null
                    )
                })
            )
        }
    }

    const disPlayPriceThue = (data) => {
        return (
            data.map((val, i) => {
                return (
                    <tr key={i}>
                        <td>{val.ten_thue}</td>
                        <td>{Number(val.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        <td>{Number(0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        <td>{Number(val.so_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                )
            })
        )
    }

    const findKhachHang = (id, data) => {
        let HoTen = ""
        if (data && JSON.stringify(data) !== "[]") {
            data.map((val, i) => {
                if (Number(val.id_khach) === Number(id)) {
                    HoTen = `${val.ho} ${val.ten}`
                }
            })
        }
        return HoTen
    }

    return (
        <>
            <CardHeader className="bg-transparent">
                <CardTitle className="text-primary">Mô tả giá tiền theo VND</CardTitle>
            </CardHeader>
            <div className="card-body-custom mb-2">
                <div className="table-responsive">
                    <Table hover bordered>
                        <thead className="table-light" >
                            <tr>
                                <th>Mô tả</th>
                                <th>Thành tiền</th>
                                <th>Thuế</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data ? data.gia_ve.map((val, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {
                                            <tr>
                                                <td colSpan="4">
                                                    <strong>{findKhachHang(val.id_khach, data.chi_tiet_hanh_khach)}</strong>
                                                </td>
                                            </tr>
                                        }
                                        {
                                            displayPriceGiaGhe(val.phan_tich_gia)
                                        }
                                        {
                                            disPlayPricePhuTro(val.phan_tich_gia)
                                        }
                                        {
                                            disPlayPriceThue(val.thue)
                                        }
                                    </React.Fragment>
                                )
                            }) : null}

                            <tr>
                                <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng</td>
                                <td>
                                    {`${data ?
                                        moneyFormat(Number(data.tong_tien_phai_tra.so_tien))
                                        : null} VNĐ`}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default TableThongTinDichVuBb;