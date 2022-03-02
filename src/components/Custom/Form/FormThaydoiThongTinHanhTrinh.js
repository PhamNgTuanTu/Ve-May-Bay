import { Field, Form, Formik, FastField } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import SelectField from 'components/Custom/selectField';
import { airportVNCode } from "../../../common/data/options/airportVNCode"
import InputDate from '../InputDate';
import * as Yup from 'yup';

FormThaydoiThongTinHanhTrinh.propTypes = {
    initialValues: PropTypes.object,
    dataOptions: PropTypes.array,
};
FormThaydoiThongTinHanhTrinh.defaultProps = {
    initialValues: null,
    dataOptions: null,
}


function FormThaydoiThongTinHanhTrinh(props) {
    const { initialValues } = props;

    const today = new Date(Date.now() - 43200000 - 43200000);

    const validationSchema = Yup.object().shape({
        diem_di: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
        diem_den: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
        ngay_di: Yup.date()
            .min(today, "Ngày đi không được nhỏ hơn ngày hiện tại")
            .typeError('Vui lòng chọn ngày đi')
            .required('Vui lòng chọn ngày đi'),
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {formikProps => {
                const { isSubmitting, values } = formikProps;
                return (
                    <Form>
                        <Row className="mt-2">
                            <Col xl={6} md={6} sm={12} xs={12}>
                                <FastField
                                    name="diem_di"
                                    component={SelectField}
                                    placeholder="Điểm đi"
                                    options={airportVNCode}
                                    smallWidth={"resize"}
                                    disabled={false}
                                    isReset={false}
                                />
                            </Col>
                            <Col xl={6} md={6} sm={12} xs={12}>
                                <FastField
                                    name="diem_den"
                                    component={SelectField}

                                    placeholder="Điểm đến"
                                    options={airportVNCode}
                                    smallWidth={"resize"}
                                    disabled={false}
                                    isReset={false}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xl={6} md={6} sm={12} xs={12}>
                                <FastField
                                    name="ngay_di"
                                    component={InputDate}

                                    label="ngày đi"
                                    disabled={false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex flex-wrap gap-2 fix-button-footer mt-2">
                                    <Button
                                        color="primary"
                                        disabled={false}>
                                        <i className="fas fa-search-location  me-1" />
                                        <input
                                            type="submit"
                                            value='Tìm kiếm'
                                            autoFocus
                                            style={{ background: "transparent", color: "#fff", border: "none" }}
                                        />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                )
            }}

        </Formik>
    );
}

export default FormThaydoiThongTinHanhTrinh;