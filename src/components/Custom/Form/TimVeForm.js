import { FastField, Field, Form, Formik } from 'formik';
import moment from 'moment';
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import * as Yup from 'yup';
import InputDate from '../Custom-field/inputDate';
import SelectField from '../Custom-field/selectField';


TimVeForm.propTypes = {

};

function TimVeForm(props) {
    const { inittialValues, nguoiLonOpt, treEmOpt, airportVNCode, loading, fullCol } = props;
    const today = new Date(Date.now() - 43200000);

    let valueNguoiLon = 0
    let valueTreEm = 0
    let valueEmBe = 0


    const validationSchema = Yup.object().shape({
        diem_di: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
        diem_den: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
        nguoi_lon: Yup.number()
            .required('Vui lòng chọn trường này')
            .min(1, "Số lượng người lớn phải lớn hơn 1")
            .nullable(),
        ngay_di: Yup.date()
            .min(today, "Ngày đi không được nhỏ hơn ngày hiện tại")
            .typeError('Vui lòng chọn ngày đi')
            .required('Vui lòng chọn ngày đi'),
        ngay_ve: Yup.date()
            .typeError('Vui lòng chọn ngày về')
            .required('Vui lòng chọn ngày về')
            .min(today, "Ngày về không được nhỏ hơn ngày hiện tại")
            .when('loai_ve', (loai_ve) => {
                if (loai_ve === "khu_hoi") {
                    return Yup.date().when('ngay_di', (ngay_di) => {
                        if (ngay_di) {
                            return Yup.date()
                                .min(ngay_di, 'Ngày về không được nhỏ hơn ngày đi')
                                .typeError('Vui lòng chọn ngày về')
                        }
                    })
                } else {
                    return Yup.date().nullable()
                }
            }),
        nguoi_lon: Yup.number()
            .test(
                'oneOfRequired',
                'Tổng số lượng người lớn, trẻ em, em bé không được lớn hơn 9',
                function (item) {
                    let nguoi_lon = this.parent.nguoi_lon
                    let tre_em = this.parent.tre_em
                    let em_be = this.parent.em_be
                    return Number(nguoi_lon + tre_em + em_be) <= 9
                }
            ),
        tre_em: Yup.string()
            .when('nguoi_lon', function (value) {
                return Yup.number()
                    .test('nguoi_lon', 'Tổng Số lượng trẻ em và người lớn không được lớn hơn 9', function (value2) {
                        return Number(value + value2) <= 9
                    })
                    .test('nguoi_lon', 'Số lượng trẻ em phải nhỏ hơn hoặc bằng số lượng người lớn', function (value2) {
                        return value2 <= value
                    })
            }),
        em_be: Yup.string()
            .when('nguoi_lon', function (value) {
                return Yup.number()
                    .test('nguoi_lon', 'Tổng Số lượng em bé và người lớn không được lớn hơn 9', function (value2) {
                        return Number(value + value2) <= 9
                    })
                    .test('nguoi_lon', 'Số lượng em bé phải nhỏ hơn hoặc bằng số lượng người lớn', function (value2) {
                        return value2 <= value
                    })
            }),
    })

    return (
        <Formik
            initialValues={inittialValues}
            onSubmit={props.handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {(formikProps) => {
                const { isSubmitting, values } = formikProps;
                return (
                    <Form>
                        <Row className="mt-4">
                            <Col xl={fullCol ? 6 : 2} md={fullCol ? 6 : 2} sm={12} xs={12}>
                                <label className="form-check-label" htmlFor="radio-mot-chieu">
                                    <Field type="radio" name="loai_ve" value="mot_chieu" id="radio-mot-chieu" className="form-check-input" />
                                    {" "}Một chiều
                                </label>
                            </Col>
                            <Col xl={fullCol ? 6 : 2} md={fullCol ? 6 : 2} sm={12} xs={12}>
                                <label className="form-check-label" htmlFor="radio-khu-hoi">
                                    <Field type="radio" name="loai_ve" value="khu_hoi" className="form-check-input" id="radio-khu-hoi" />
                                    {" "}Khứ hồi
                                </label>
                            </Col>
                        </Row>
                        <Row >
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <Field
                                    name="diem_di"
                                    component={SelectField}

                                    placeholder="Điểm đi"
                                    options={airportVNCode}
                                    smallWidth={"resize"}
                                />
                            </Col>
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <Field
                                    name="diem_den"
                                    component={SelectField}

                                    placeholder="Điểm đến"
                                    options={airportVNCode}
                                    smallWidth={"resize"}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <Field
                                    name="ngay_di"
                                    component={InputDate}

                                    formatValue={"DD-MM-YYYY"}
                                    placeholder="Chọn ngày đi..."
                                    label="Ngày đi"
                                    icon={true}
                                    valueNgayDi={null}
                                />
                            </Col>
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <Field
                                    name="ngay_ve"
                                    component={InputDate}

                                    formatValue={"DD-MM-YYYY"}
                                    placeholder="Chọn ngày về..."
                                    label="Ngày về"
                                    disabled={values.loai_ve === "khu_hoi" ? false : true}
                                    icon={true}
                                    valueNgayDi={moment(values.ngay_di).format("MM-DD-YYYY")}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <FastField
                                    name="nguoi_lon"
                                    component={SelectField}

                                    placeholder="Người lớn"
                                    options={nguoiLonOpt}
                                    smallWidth={"resize"}
                                />
                            </Col>
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <FastField
                                    name="tre_em"
                                    component={SelectField}

                                    placeholder="Trẻ em (2- dưới 12 tuổi)"
                                    options={treEmOpt}
                                    smallWidth={"resize"}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={fullCol ? 12 : 6} sm={12} xs={12} className="mt-4">
                                <FastField
                                    name="em_be"
                                    component={SelectField}

                                    placeholder="Em bé (<2 tuổi)"
                                    options={treEmOpt}
                                    smallWidth={"resize"}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <div className="d-flex flex-wrap gap-2 fix-button-footer mt-2">
                                    <Button
                                        color="primary"
                                        disabled={loading}
                                        type="submit">
                                        <i className="fas fa-search-location mr-2 me-1" />
                                        {loading ? "Vui lòng chờ ..." : "Tìm kiếm"}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default TimVeForm;