import { FieldArray, Form, Formik } from 'formik';
import moment from "moment";
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import * as Yup from 'yup';
import FormThongTinHanhKhach from './FormThongTinHanhKhach';
import FormThongTinLienHe from "./FormThongTinLienHe";

ThongTinHanhKhachForm.propTypes = {

};

const danhXungOpt = [
    { label: "Ông", value: 1 },
    { label: "Bà", value: 2 },
]
const danhXungTreEmOpt = [
    { label: "Em trai", value: 4 },
    { label: "Em gái", value: 5 }
]
const danhXungEmBeOpt = [
    { label: "Bé trai", value: 6 },
    { label: "Bé gái", value: 7 }
]

function ThongTinHanhKhachForm(props) {
    let { optionQuocTich, optionTinh } = useSelector(state => ({
        optionQuocTich: state.ViTri.quocGia,
        optionTinh: state.ViTri.tinh,
    }))
    optionQuocTich = optionQuocTich && optionQuocTich.map(item => {
        return {
            value: item.ma_quoc_gia,
            label: item.ten
        };
    });
    optionTinh = optionTinh && optionTinh.map(item => {
        return {
            value: item.ma_tinh,
            label: item.ten
        };
    });
    const { initialValues } = props

    const phoneRegex = RegExp(
        /(0[3|5|7|8|9])+([0-9]{8})\b/
    );

    const stringRegex = RegExp(
        /([\s]+)/g
    );

    const schema = Yup.object().shape({
        KhachHangNguoiLon: Yup.array()
            .of(
                Yup.object().shape({
                    ho_ten: Yup.string()
                        .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                        .matches(stringRegex, 'error')
                        .trim()
                        .required('Vui lòng nhập trường này'),
                    quoc_tich: Yup.string()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
                    danh_xung: Yup.number()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
                    ngay_sinh: Yup.date()
                        .max(new Date(), "Ngày sinh phải nhỏ hơn ngày hiện tại"),
                })
            )
            .required('Vui lòng nhập biểu mẩu này'),
        KhachHangTreEm: Yup.array()
            .of(
                Yup.object().shape({
                    ho_ten: Yup.string()
                        .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                        .matches(stringRegex, 'error')
                        .trim()
                        .required('Vui lòng nhập trường này'),
                    quoc_tich: Yup.string()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
                    danh_xung: Yup.number()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
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
                })
            )
            .required('Vui lòng nhập biểu mẩu này'),
        KhachHangEmBe: Yup.array()
            .of(
                Yup.object().shape({
                    ho_ten: Yup.string()
                        .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
                        .matches(stringRegex, 'error')
                        .trim()
                        .required('Vui lòng nhập trường này'),
                    quoc_tich: Yup.string()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
                    danh_xung: Yup.number()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
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
                    nguoi_di_cung: Yup.number()
                        .required('Vui lòng chọn trường này')
                        .nullable(),
                })
            )
            .required('Vui lòng nhập biểu mẩu này'),
        danh_xung_lien_he: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
        ho_ten_lien_he: Yup.string()
            .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
            .required('Vui lòng nhập trường này')
            .max(50, "Vui lòng nhập nhỏ hơn 50 kí tự"),
        email_lien_he: Yup.string()
            .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
            .required('Vui lòng nhập trường này')
            .email('Email không hợp lệ')
            .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
        sdt_lien_he: Yup.string()
            .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
            .max(10, "Vui lòng nhập số điện thoại gồm 10 số")
            .min(10, "Vui lòng nhập số điện thoại gồm 10 số")
            .matches(phoneRegex, 'Số điện thoại không hợp lệ')
            .required('Vui lòng nhập trường này'),
        dia_chi_lien_he: Yup.string()
            .test("", "Vui lòng nhập trường này", (value) => value && value.trim() !== "")
            .required('Vui lòng nhập trường này')
            .max(255, "Vui lòng nhập nhỏ hơn 255 kí tự"),
        thanh_pho_lien_he: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
        khu_vuc_lien_he: Yup.string()
            .required('Vui lòng chọn trường này')
            .nullable(),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={props.onSubmit}
                validationSchema={schema}
                enableReinitialize
            >
                {(formikProps) => {
                    const { values, touched, errors, submitCount } = formikProps;
                    // console.log({ values, touched, errors });
                    return (
                        <Form id="form-thong-tin">
                            <Card outline color="primary" className="border">
                                <CardHeader className="bg-transparent">
                                    <CardTitle className="text-primary">Hành khách bay</CardTitle>
                                </CardHeader>

                                <CardBody>
                                    <FieldArray
                                        name="KhachHangNguoiLon">
                                        {() => {
                                            return (
                                                <>
                                                    {values.KhachHangNguoiLon && values.KhachHangNguoiLon.length > 0 ? (
                                                        values.KhachHangNguoiLon.map((val, index) => (
                                                            <FormThongTinHanhKhach
                                                                key={index}
                                                                index={index}
                                                                title="Người Lớn"
                                                                NameProps="KhachHangNguoiLon"
                                                                status="nguoi_lon"
                                                                length={0}
                                                                errors={errors}
                                                                touched={touched}
                                                                danhXungOpt={danhXungOpt}
                                                                quocTichOpt={optionQuocTich}
                                                                submitCount={submitCount}
                                                                values={values}
                                                                isNguoiLon={1}
                                                            />
                                                        ))
                                                    ) : null}
                                                </>
                                            );
                                        }}
                                    </FieldArray>

                                    <FieldArray
                                        name="KhachHangTreEm">
                                        {() => {
                                            return (
                                                <>
                                                    {values.KhachHangTreEm && values.KhachHangTreEm.length > 0 ? (
                                                        values.KhachHangTreEm.map((val, index) => (
                                                            <FormThongTinHanhKhach
                                                                key={index}
                                                                index={index}
                                                                title="Trẻ Em"
                                                                NameProps="KhachHangTreEm"
                                                                status="tre_em"
                                                                length={values.KhachHangNguoiLon.length}
                                                                errors={errors}
                                                                touched={touched}
                                                                danhXungOpt={danhXungTreEmOpt}
                                                                quocTichOpt={optionQuocTich}
                                                                submitCount={submitCount}
                                                                values={values}
                                                                isNguoiLon={2}
                                                            />
                                                        ))
                                                    ) : null}
                                                </>
                                            );
                                        }}
                                    </FieldArray>

                                    <FieldArray
                                        name="KhachHangEmBe">
                                        {() => {
                                            return (
                                                <>
                                                    {values.KhachHangEmBe && values.KhachHangEmBe.length > 0 ? (
                                                        values.KhachHangEmBe.map((val, index) => (
                                                            <FormThongTinHanhKhach
                                                                key={index}
                                                                index={index}
                                                                title="Em Bé"
                                                                NameProps="KhachHangEmBe"
                                                                status="em_be"
                                                                length={values.KhachHangNguoiLon.length + values.KhachHangTreEm.length}
                                                                errors={errors}
                                                                touched={touched}
                                                                danhXungOpt={danhXungEmBeOpt}
                                                                quocTichOpt={optionQuocTich}
                                                                submitCount={submitCount}
                                                                values={values}
                                                                isNguoiLon={3}
                                                            />
                                                        ))
                                                    ) : null}
                                                </>
                                            );
                                        }}
                                    </FieldArray>

                                </CardBody>

                            </Card>
                            <Card outline color="primary" className="border">
                                <CardHeader className="bg-transparent">
                                    <CardTitle className="text-primary">Thông tin liên hệ đặt vé</CardTitle>
                                </CardHeader>
                                <div className="card-body-custom mb-2">
                                    <FormThongTinLienHe
                                        danhXungOpt={danhXungOpt}
                                        thanhPhoOpt={optionTinh}
                                        khuVuchOpt={optionQuocTich}
                                        values={values}
                                    />
                                </div>
                            </Card>
                        </Form>
                    );
                }}
            </Formik>
        </div >
    )
}

export default ThongTinHanhKhachForm;