import { nguoiLonOpt, treEmOpt } from "common/data/options/passengerToTal"
import Breadcrumbs from "components/Common/Breadcrumb"
import TimVeForm from "components/Custom/Form/TimVeForm"
import SpinnerLoading from "components/Custom/SpinnerLoading"
import moment from "moment"
import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useRouteMatch } from "react-router-dom"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import {
    Card,
    CardBody,
    Col,
    Container, Row
} from "reactstrap"
import { boQuaDatCho, layDSChuyenBay, layDSQuocGia, layDSSanBay, layDSTinh, saveAfterArrSeatChooseHaiChieu, saveAfterArrSeatChooseMotChieu, saveArrSeatChooseHaiChieu, saveArrSeatChooseMotChieu, setThongTinHanhKhach } from "store/actions"
import "toastr/build/toastr.min.css"


const initlabel = {
    'tab': 'tìm chuyến bay'
};

const TimVe = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { path } = useRouteMatch();
    let { resApi, params, optionSanBay } = useSelector(state => ({
        resApi: state.DatTimVe.resApi,
        params: state.DatTimVe.params,
        optionSanBay: state.ViTri.sanBay,
    }))
    let options = []
    optionSanBay && optionSanBay.map(item => {
        if (item && item.tinh) {
            options.push({
                value: item.ten_tat,
                label: `${item.tinh.ten} (${item.ten_tat})`
            })
        }
    });
    const [loading, setLoading] = useState(false)
    const inittialValues = {
        loai_ve: 'mot_chieu',
        loai_dinh_dang : 2,
        diem_di: "",
        diem_den: "",
        ngay_di: "",
        ngay_ve: "",
        nguoi_lon: 1,
        tre_em: 1,
        em_be: 1,
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setLoading(true)
        let arr = {}
        if (values.loai_ve === "mot_chieu") {
            arr = {
                ...values,
                ngay_di: moment(values.ngay_di).format("DD-MM-YYYY")
            }
            delete arr.ngay_ve;
        } else {
            arr = {
                ...values,
                ngay_di: moment(values.ngay_di).format("DD-MM-YYYY"),
                ngay_ve: moment(values.ngay_ve).format("DD-MM-YYYY")
            }
        }
        dispatch(layDSChuyenBay(arr))
        setSubmitting(false)
    }

    useEffect(() => {
        resApi = {};
        dispatch(layDSTinh());
        dispatch(layDSSanBay());
        dispatch(layDSQuocGia());
        dispatch(setThongTinHanhKhach({}))
        dispatch(saveArrSeatChooseMotChieu([]))
        dispatch(saveArrSeatChooseHaiChieu([]))
        dispatch(saveAfterArrSeatChooseMotChieu([]))
        dispatch(saveAfterArrSeatChooseHaiChieu([]))
        // dispatch(boQuaDatCho())
        params = [];
    }, [])

    useEffect(() => {
        if (Number(resApi.code) === 200 && resApi.action === "lay-ds-chuyen-bay") {
            setLoading(false)
            history.push(`${path}/chon-tuyen-bay`)
        }
    }, [resApi])

    return (
        <React.Fragment>
            {loading ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />
                    <Row>
                        <Col>
                            <div className="custom-card-bgr">
                                <div className="custom-card">
                                    <Card>
                                        <CardBody>
                                            <TimVeForm
                                                loading={loading}
                                                airportVNCode={options}
                                                treEmOpt={treEmOpt}
                                                nguoiLonOpt={nguoiLonOpt}
                                                inittialValues={inittialValues}
                                                handleSubmit={handleSubmit}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TimVe