import InputFieldArray from 'components/Custom/Custom-field/InputFieldArray';
import InputFieldArrayDate from 'components/Custom/Custom-field/InputFieldArrayDate';
import SelectFieldArray from 'components/Custom/Custom-field/selectFieldArray';
import { FastField, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import { CardTitle, Col, Row } from 'reactstrap';

FormThongTinHanhKhach.propTypes = {

};

function FormThongTinHanhKhach(props) {
    const { index, errors, quocTichOpt, danhXungOpt, status, touched,
        NameProps, title, length, values, submitCount, isNguoiLon
    } = props;

    const [optionNguoiDiCung, setOptionNguoiDiCung] = useState([])

    useEffect(() => {
        var options = []
        if (values.KhachHangNguoiLon.length > 0) {
            values.KhachHangNguoiLon.map((val, i) => {
                if (val.ho_ten !== "") {
                    options.push({ label: (val.ho_ten), value: i })
                }
            })
        }
        setOptionNguoiDiCung(options)
    }, [values])

    return (
        <div>
            <Row>
                <Col md={12}>
                    <CardTitle className="text-secondary mb-3">{`${index + 1 + length}. ${title}`}</CardTitle>
                </Col>
            </Row>
            <Row>
                <Col xl={4} md={6} sm={6} className="mb-4" className="mb-4">
                    <FastField
                        name={`${NameProps}.${index}.danh_xung`}
                        component={SelectFieldArray}

                        placeholder="Danh xưng"
                        options={danhXungOpt}
                        smallWidth={"resize"}
                        nameError="danh_xung"
                        index={index}
                        error={errors}
                        NameProps={NameProps}
                        touched={touched}
                        values={values}
                        submitCount={submitCount}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} xs={12} className="mb-4" >
                    <FastField
                        name={`${NameProps}.${index}.ho_ten`}
                        component={InputFieldArray}

                        label="Họ và tên"
                        placeholder="Nhập họ và tên"
                        type="text"
                        nameError="ho_ten"
                        index={index}
                        error={errors}
                        touched={touched}
                        NameProps={NameProps}
                        values={values}
                        submitCount={submitCount}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} xs={12} className={status === "nguoi_lon" ? "mb-4  d-none" : "mb-4"}>
                    <FastField
                        name={`${NameProps}.${index}.ngay_sinh`}
                        component={InputFieldArrayDate}

                        label="Ngày sinh"
                        formatDateTime="dd/MM/yyyy"
                        nameError="ngay_sinh"
                        index={index}
                        error={errors}
                        NameProps={NameProps}
                        values={values}
                        touched={touched}
                        submitCount={submitCount}
                        isNguoiLon={isNguoiLon}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} className="mb-4">
                    <FastField
                        name={`${NameProps}.${index}.quoc_tich`}
                        component={SelectFieldArray}

                        placeholder="Quốc Tịch"
                        options={quocTichOpt}
                        smallWidth={"resize"}
                        nameError="quoc_tich"
                        index={index}
                        error={errors}
                        NameProps={NameProps}
                        touched={touched}
                        submitCount={submitCount}
                        values={values}
                    />
                </Col>
                <Col xl={4} md={6} sm={6} className={status === "em_be" ? "mb-4" : "mb-4 d-none"}>
                    <Field
                        name={`${NameProps}.${index}.nguoi_di_cung`}
                        component={SelectFieldArray}

                        placeholder="người lớn đi cùng"
                        options={optionNguoiDiCung}
                        smallWidth={"resize"}
                        nameError="nguoi_di_cung"
                        index={index}
                        error={errors}
                        NameProps={NameProps}
                        submitCount={submitCount}
                        values={values}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default FormThongTinHanhKhach;