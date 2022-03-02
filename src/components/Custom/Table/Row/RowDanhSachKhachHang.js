import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

RowDanhSachKhachHang.propTypes = {

};

function RowDanhSachKhachHang(props) {
    const { dataHanhKhach, loaiKhachHang } = props;
    const history = useHistory()
    return (
        <>
            {
                dataHanhKhach && dataHanhKhach.length > 0 ?
                    dataHanhKhach.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.ho}</td>
                                <td>{value.ten}</td>
                                <td>
                                    {
                                        loaiKhachHang === "Người lớn" && value.danh_xung === 1 ? "Ông" : null
                                    }
                                    {
                                        loaiKhachHang === "Người lớn" && value.danh_xung === 2 ? "Bà" : null
                                    }
                                    {
                                        loaiKhachHang === "Em bé" &&  value.danh_xung === 6 ? "Bé trai" : null
                                    }
                                    {
                                        loaiKhachHang === "Em bé" && value.danh_xung === 7 ? "Bé gái" : null
                                    }
                                    {
                                        loaiKhachHang === "Trẻ em" && value.danh_xung === 4 ? "Em trai" : null
                                    }
                                    {
                                        loaiKhachHang === "Trẻ em" && value.danh_xung === 5 ? "Em gái" : null
                                    }
                                </td>
                                <td>{loaiKhachHang}</td>
                                <td><Link className="text-info" to="#">
                                    <i
                                        className="mdi mdi-pencil font-size-18"
                                        id="edit-info-hk"
                                        onClick={() => history.push("/tim-ve/thong-tin-hanh-khach")}
                                    ></i>
                                </Link></td>
                            </tr>
                        )
                    })
                    : null
            }
        </>
    );
}

export default RowDanhSachKhachHang;