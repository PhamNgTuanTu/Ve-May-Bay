import InputDate from 'components/Custom/InputDate';
import InputField from 'components/Custom/InputField';
import SelectField from 'components/Custom/selectField';
import { FastField, Field, Form, Formik, FormikProps } from 'formik';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { Col, Row } from 'reactstrap';
import * as Yup from 'yup';

ThayDoiThongTinHanhKhachForm.propTypes = {
    initialValues: PropTypes.object,
    loaiHanhKhach: PropTypes.number,
};
ThayDoiThongTinHanhKhachForm.defaultProps = {
    initialValues: null,
    loaiHanhKhach: 1,
}

const quocTichOpt = [
    { label: "Việt Nam", value: "VNM" },
]

const danhXungOpt = [
    { label: "Ông", value: 1 },
    { label: "Bà", value: 2 },
    { label: "Cô", value: 3 },
]
const danhXungTreEmOpt = [
    { label: "Em trai", value: 4 },
    { label: "Em gái", value: 5 }
]
const danhXungEmBeOpt = [
    { label: "Bé trai", value: 6 },
    { label: "Bé gái", value: 7 }
]
const thanhPhoOpt = [
    { label: "Trà Vinh", value: "tv" },
    { label: "Hồ Chí Minh", value: "hcm" }
]
const quocGiaOpt = [
    { label: "Việt Nam", value: "VNM" },
]
function ThayDoiThongTinHanhKhachForm(props) {
    const { initialValues, loaiHanhKhach, dinhDanh, onSetRef, onSubmit } = props;
    const formRef = useRef()
    const phoneRegex = RegExp(
        /(0[3|5|7|8|9])+([0-9]{8})\b/
    );

    let validationSchema = {};
    if (dinhDanh === "em_be") {
        validationSchema = Yup.object().shape({
            danh_xung: Yup.string()
                .required('Vui lòng chọn trường này')
                .nullable(),
            ho: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            ten: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            ngay_sinh: Yup.date()
                .required("Vui lòng nhập trường này")
                .test(
                    "age",
                    "Tuổi của em bé phải nhỏ hơn 2",
                    value => {
                        return moment().diff(moment(value), 'years') <= 2;
                    }
                )
                .max(new Date(), "Ngày sinh phải nhỏ hơn ngày hiện tại"),
        })
    } else if (loaiHanhKhach === 1) {
        validationSchema = Yup.object().shape({
            danh_xung: Yup.string()
                .required('Vui lòng chọn trường này')
                .nullable(),
            ho: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            ten: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            ngay_sinh: Yup.date()
                .nullable()
                .max(new Date(), "Ngày sinh phải nhỏ hơn ngày hiện tại"),
            email: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .email('Email không hợp lệ')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            dien_thoai: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .max(10, "Vui lòng nhập số điện thoại gồm 10 số")
                .min(10, "Vui lòng nhập số điện thoại gồm 10 số")
                .matches(phoneRegex, 'Số điện thoại không hợp lệ')
                .required('Vui lòng nhập trường này'),
            dia_chi: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            thanh_pho: Yup.string()
                .required('Vui lòng chọn trường này')
                .nullable(),
        })
    } else if (loaiHanhKhach === 2) {
        validationSchema = Yup.object().shape({
            danh_xung: Yup.string()
                .required('Vui lòng chọn trường này')
                .nullable(),
            ho: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            ten: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            ngay_sinh: Yup.date()
                .required("Vui lòng nhập trường này")
                .test(
                    "age",
                    "Tuổi của trẻ em từ 2 đến 11",
                    value => {
                        return moment().diff(moment(value), 'years') >= 2;
                    }
                )
                .test(
                    "age",
                    "Tuổi của trẻ em từ 2 đến 11",
                    value => {
                        return moment().diff(moment(value), 'years') <= 11;
                    }
                )
                .max(new Date(), "Ngày sinh phải nhỏ hơn ngày hiện tại"),
            email: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .email('Email không hợp lệ')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            dien_thoai: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .max(10, "Vui lòng nhập số điện thoại gồm 10 số")
                .min(10, "Vui lòng nhập số điện thoại gồm 10 số")
                .matches(phoneRegex, 'Số điện thoại không hợp lệ')
                .required('Vui lòng nhập trường này'),
            dia_chi: Yup.string()
                .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                .required('Vui lòng nhập trường này')
                .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
            thanh_pho: Yup.string()
                .required('Vui lòng chọn trường này')
                .nullable(),
        })
    }

    const selectOption = () => {
        let options = {};
        if (loaiHanhKhach === 1) {
            if (dinhDanh === "em_be") {
                options = danhXungEmBeOpt
            } else {
                options = danhXungOpt
            }
        } else if (loaiHanhKhach === 2) {
            options = danhXungTreEmOpt
        }
        return options;
    }

    useEffect(() => {
        if (formRef.current) {
            onSetRef(formRef)
        }
    }, [formRef])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            innerRef={formRef}
        >
            {(formikProps) => {
                return (
                    <Form>
                        <Row>
                            <Col md="6">
                                <Field
                                    name="danh_xung"
                                    component={SelectField}
                                    placeholder="Danh xưng"
                                    options={selectOption()}
                                    smallWidth={"resize"}
                                    disabled={false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FastField
                                    name="ho"
                                    component={InputField}
                                    label="họ"
                                    placeholder="Nhập họ"
                                    type="text"
                                    autoFocus={false}
                                    disabled={false}
                                />
                            </Col>
                            <Col md="6">
                                <FastField
                                    name="ten"
                                    component={InputField}
                                    label="tên và tên đệm"
                                    placeholder="Nhập tên và tên đệm"
                                    type="text"
                                    autoFocus={false}
                                    disabled={false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            {   formRef.current ?
                                <FastField
                                    name="ngay_sinh"
                                    component={InputDate}
                                    form={formRef.current}
                                    label="ngày sinh"
                                    disabled={false}
                                    loaiHanhKhach={loaiHanhKhach}
                                />
                                : null
                            }
                            </Col>
                            <Col md="6">
                                <FastField
                                    name="quoc_tich"
                                    component={SelectField}
                                    placeholder="Quốc tịch"
                                    options={quocTichOpt}
                                    smallWidth={"resize"}
                                    disabled={false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FastField
                                    name="email"
                                    component={InputField}
                                    label="email"
                                    placeholder="Nhập email"
                                    type="text"
                                    autoFocus={false}
                                    disabled={dinhDanh === "em_be" ? true : false}
                                />
                            </Col>
                            <Col md="6">
                                <FastField
                                    name="dien_thoai"
                                    component={InputField}
                                    label="số điện thoại"
                                    placeholder="Nhập số điện thoại"
                                    type="text"
                                    style="number"
                                    disabled={dinhDanh === "em_be" ? true : false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FastField
                                    name="dia_chi"
                                    component={InputField}
                                    label="địa chỉ"
                                    placeholder="Nhập địa chỉ"
                                    type="text"
                                    autoFocus={false}
                                    disabled={false}
                                    disabled={dinhDanh === "em_be" ? true : false}
                                />
                            </Col>
                            <Col md="6">
                                <FastField
                                    name="thanh_pho"
                                    component={SelectField}
                                    placeholder="Tỉnh/ thành phố"
                                    options={thanhPhoOpt}
                                    smallWidth={"resize"}
                                    disabled={dinhDanh === "em_be" ? true : false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FastField
                                    name="quoc_gia"
                                    component={SelectField}
                                    placeholder="Quốc gia"
                                    options={quocGiaOpt}
                                    smallWidth={"resize"}
                                    disabled={dinhDanh === "em_be" ? true : false}
                                />
                            </Col>
                            <Col md="6"></Col>
                        </Row>
                    </Form>
                )
            }}

        </Formik>
    );
}

export default ThayDoiThongTinHanhKhachForm;