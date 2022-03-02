import InputField from '../../Custom-field/InputField';
import { FastField, Form, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import SelectField from '../../Custom-field/selectField';
import InputFieldNumber from 'components/Custom/Custom-field/inputFieldNumber';
import SelectFieldDanhXung from 'components/Custom/Custom-field/selectFieldDanhXung';

FormThongTinLienHe.propTypes = {

};

function FormThongTinLienHe(props) {
    const { danhXungOpt, khuVuchOpt, thanhPhoOpt, values } = props;

    const [optionHo, setOptionHo] = useState([])
    const [optionTen, setOptionTen] = useState([])
    const [optionHoTen, setOptionHoTen] = useState([])


    useEffect(() => {
        var optionsHo = []
        var optionsTen = []
        var optionsHoTen = []
        if (values.KhachHangNguoiLon.length > 0) {
            values.KhachHangNguoiLon.map((val, i) => {
                if (val.ho !== "" && val.ten !== "") {
                    optionsHo.push({ label: val.ho, value: i })
                    optionsTen.push({ label: val.ten, value: i })
                }
                if (val.ho_ten !== "") {
                    optionsHoTen.push({ label: val.ho_ten, value: i })
                }
            })
        }
        setOptionHo(optionsHo)
        setOptionTen(optionsTen)
        setOptionHoTen(optionsHoTen)
    }, [values])

    return (
        < >
            <Row>
                <Col xl={4} md={6} sm={6} className="mb-4" className="mb-4">
                    <Field
                        name="danh_xung_lien_he"
                        component={SelectFieldDanhXung}

                        placeholder="Danh xưng"
                        options={danhXungOpt}
                        smallWidth={"resize"}
                        defaultValues={values && values.KhachHangNguoiLon.length > 0 ? values.KhachHangNguoiLon[0].danh_xung : 1}
                        disabled={true}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} xs={12} className="mb-4" >
                    <Field
                        name="ho_ten_lien_he"
                        component={SelectField}

                        placeholder="Họ và tên"
                        options={optionHoTen}
                        smallWidth={"resize"}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} xs={12} className="mb-4" >
                    <FastField
                        name="email_lien_he"
                        component={InputField}

                        label="email"
                        placeholder="Nhập email"
                        type="text"
                    />
                </Col>
                <Col xl={4} md={6} sm={6} xs={12} className="mb-4" >
                    <FastField
                        name="sdt_lien_he"
                        component={InputFieldNumber}

                        label="số điện thoại"
                        placeholder="Nhập số điện thoại"
                        type="text"
                    />
                </Col>
            </Row>
            <Row>
                <Col xl={4} md={6} sm={6} xs={12} className="mb-4" >
                    <FastField
                        name="dia_chi_lien_he"
                        component={InputField}

                        label="địa chỉ"
                        placeholder="Nhập địa chỉ"
                        type="text"
                    />
                </Col>
                <Col xl={4} md={6} sm={6} className="mb-4">
                    <FastField
                        name="thanh_pho_lien_he"
                        component={SelectField}

                        placeholder="Tỉnh/thành Phố"
                        options={thanhPhoOpt}
                        smallWidth={"resize"}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} className="mb-4">
                    <FastField
                        name="khu_vuc_lien_he"
                        component={SelectField}

                        placeholder="Quốc gia"
                        options={khuVuchOpt}
                        smallWidth={"resize"}
                    />
                </Col>
            </Row>
        </>
    );
}

export default FormThongTinLienHe;