import React from 'react';
import { CardHeader, CardTitle, Table } from 'reactstrap';
import { moneyFormat } from 'helpers/function/function_helper';

TableThongTinDichVu.propTypes = {

};

function TableThongTinDichVu(props) {
    const { dataMotChieu, dataHaiChieu, params } = props
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
                            {params.loai_ve === "khu_hoi" ?
                                <tr>
                                    <td className="text-center" colSpan="4">
                                        <strong>Chuyến đi</strong>
                                    </td>
                                </tr> : null
                            }
                            {
                                dataMotChieu ? dataMotChieu.chi_tiet_phi_ve.map((val, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <tr>
                                                <td colSpan="4">
                                                    <strong>{val.ho_ten}</strong>
                                                </td>
                                            </tr>
                                            {
                                                val.phi_ve.map((valChild, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{valChild.mo_ta}</td>
                                                            <td>{Number(valChild.thanh_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                            <td>{Number(valChild.thue).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                            <td>{Number(valChild.tong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                    )
                                })
                                    : null
                            }

                            {params.loai_ve === "khu_hoi" ?
                                <tr>
                                    <td className="text-center" colSpan="4">
                                        <strong>Chuyến về</strong>
                                    </td>
                                </tr> : null
                            }
                            {
                                params.loai_ve === "khu_hoi" ?
                                    dataHaiChieu.chi_tiet_phi_ve.map((val, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <tr>
                                                    <td colSpan="4">
                                                        <strong>{val.ho_ten}</strong>
                                                    </td>
                                                </tr>
                                                {
                                                    val.phi_ve.map((valChild, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{valChild.mo_ta}</td>
                                                                <td>{Number(valChild.thanh_tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                                <td>{Number(valChild.thue).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                                <td>{Number(valChild.tong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                    : null
                            }

                            <tr>
                                <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng</td>
                                <td>
                                    {`${params.loai_ve === "mot_chieu" ?
                                        moneyFormat(Number(dataMotChieu.gia_tien.tong_cong))
                                        : moneyFormat(
                                            (Number(dataMotChieu.gia_tien.tong_cong)) + (Number(dataHaiChieu.gia_tien.tong_cong))
                                        )
                                        } VNĐ`}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default TableThongTinDichVu;