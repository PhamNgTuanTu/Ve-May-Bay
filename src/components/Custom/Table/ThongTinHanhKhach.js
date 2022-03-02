import React from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, CardTitle, Table } from 'reactstrap';
import { hanhKhachEmBe, hanhKhachNguoiLon, hanhKhachTreEm } from "../../../common/data/Data";
import RowDanhSachKhachHang from './Row/RowDanhSachKhachHang';

TableThongTinHanhKhach.propTypes = {

};

function TableThongTinHanhKhach(props) {
    const { hanhKhachTreEm, hanhKhachEmBe, hanhKhachNguoiLon } = useSelector(state => ({
        hanhKhachNguoiLon: state.DatTimVe.hanhKhachNguoiLon,
        hanhKhachTreEm: state.DatTimVe.hanhKhachTreEm,
        hanhKhachEmBe: state.DatTimVe.hanhKhachEmBe,
    }))
    return (
        <>
            <CardHeader className="bg-transparent">
                <CardTitle className="text-primary">Thông tin hành khách</CardTitle>
            </CardHeader>
            <div className="card-body-custom mb-2">
                <div className="table-responsive">
                    <Table hover bordered>
                        <thead className="table-light" >
                            <tr>
                                <th>Họ</th>
                                <th>Tên</th>
                                <th>Quý danh</th>
                                <th>Hành khách</th>
                                <th>Chỉnh sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hanhKhachNguoiLon && hanhKhachNguoiLon.length > 0 ?
                                    <RowDanhSachKhachHang
                                        dataHanhKhach={hanhKhachNguoiLon}
                                        loaiKhachHang="Người lớn"
                                    />
                                    : null
                            }
                            {
                                hanhKhachTreEm && hanhKhachTreEm.length > 0 ?
                                    <RowDanhSachKhachHang
                                        dataHanhKhach={hanhKhachTreEm}
                                        loaiKhachHang="Trẻ em"
                                    />
                                    : null
                            }
                            {
                                hanhKhachEmBe && hanhKhachEmBe.length > 0 ?
                                    <RowDanhSachKhachHang
                                        dataHanhKhach={hanhKhachEmBe}
                                        loaiKhachHang="Em bé"
                                    />
                                    : null
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default TableThongTinHanhKhach;