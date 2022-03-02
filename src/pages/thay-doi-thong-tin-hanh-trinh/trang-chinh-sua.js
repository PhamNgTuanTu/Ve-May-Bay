import Breadcrumbs from "components/Common/Breadcrumb";
import FormThaydoiThongTinHanhTrinh from "components/Custom/Form/FormThaydoiThongTinHanhTrinh";
import SpinnerLoading from "components/Custom/SpinnerLoading";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, withRouter, useRouteMatch } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Button, CardHeader, Card, CardBody, CardTitle, Col, Container, Row, Table } from 'reactstrap';
import { layDSChuyenBayMoi, capNhatBaoGiaHanhKhach } from "../../store/actions";
import { getDay, getDate, getMonth, getYear, titleCase, formatDate, getHours, moneyFormat } from "helpers/function/function_helper";
import SweetAlert from "react-bootstrap-sweetalert"
import paginationFactory, {
   PaginationListStandalone,
   PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import filterFactory from 'react-bootstrap-table2-filter';

const initlabel = {
    tab: 'Thay đổi thông tin hành trình',
    tabChuyenBay: "Tìm chuyến bay mới",
    tab_ticket: "Thông tin vé",
};

function CapNhatHanhTrinh(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { path } = useRouteMatch();
    const { id } = useParams();
    let { dsChuyenBayMoi, loading, resApi, storeDataPhiThayDoi} = useSelector(state => ({
        loading: state.ThongTinChuyenBay.loading,
        resApi: state.ThongTinChuyenBay.resApi,
        storeDataPhiThayDoi: state.ThongTinChuyenBay.dataPhiThayDoi,
        dsChuyenBayMoi: state.ThongTinChuyenBay.dsChuyenBayMoi
    }))
    const [openAlertError, setOpenAlertError] = useState(false)
    const [descriptionAlert, setDescriptionAlert] = useState("")
    const [disabledBtnNext, setDisabledBtnNext] = useState(true)
    const [selectedChuyenBay, setSelectedChuyenBay] = useState(null)
    const [hidePrice, setHideprice] = useState(true)
    const [soft, setDoft] = useState({
        ma_chuyen_bay: false,
        cat_canh: false,
        ha_canh: false,
        gia: false,
        gia_vat: false,
        ma_chuyen_bay_ve: false,
        cat_canh_ve: false,
        ha_canh_ve: false,
        gia_ve: false,
        gia_vat_ve: false
    })

    const changSoft = (name) => {
        setDoft(preState => ({
            ...preState,
            [name]: !soft[name]
        }))
    }

    const [initialValues, setInitialValues] = useState({
        diem_di: "",
        diem_den: "",
        ngay_di: "",
    })

    const handleChonChuyenBay = (phi_ve, row) => {
        const rowSelected = { ...row, ...phi_ve }
        setSelectedChuyenBay(rowSelected)
    }

    const onHandleTimChuyenBay = (values) => {
        var params = {
            dat_cho_id: values.dat_cho_id,
            diem_di: values.diem_di,
            diem_den: values.diem_den,
            ngay_di: getDate(values.ngay_di, "MM-DD-YYYY", "DD-MM-YYYY"),
            loai_dinh_dang: values.loai_dinh_dang
        }

        if(history.location.state.action == "doi-chuyen-bay") {
            params.hanh_trinh_id = values.hanh_trinh_id
        }
        setSelectedChuyenBay(null)
        dispatch(layDSChuyenBayMoi(params))  
    }

    const hanhKhachParamThemChang = (arrHanhKhach) => {
        var hanhKhachArr = []
        if(arrHanhKhach) {
            arrHanhKhach.map((item, index) => {
                hanhKhachArr.push({
                    ma_dat_cho: selectedChuyenBay.ma_dat_cho ? selectedChuyenBay.ma_dat_cho : null,
                    hanh_khach_id: item.id
                })
            })
        }

        return hanhKhachArr
    }

    const onHandleNext = () => {
        var bodyPhi = {
            mot_chieu: {
               phi_ve: selectedChuyenBay.phi_ve ? selectedChuyenBay.phi_ve  : null,
               ma_hang_bay: "VJ"
            },
            is_save: false
        }
       
        var bodyCapNhat = {}
        if(history.location.state.action != "them-chang-bay") {  
            bodyCapNhat = {
                hanh_trinh: [
                    {   
                        hanh_khach: [
                            { ma_dat_cho: selectedChuyenBay.ma_dat_cho ? selectedChuyenBay.ma_dat_cho : null }
                        ]
                    }
                ],
                is_bao_gia: false
            }   
        } else {
            bodyCapNhat = {
                hanh_khach: hanhKhachParamThemChang(history.location.state.hanh_khach)
            }
        }

        var paramsPhi = {
            requestBody: bodyPhi,
            url: "/th-api/tim-ve/tinh-phi-truoc-dat-cho/cap-nhat/" + history.location.state.bao_gia_id
        } 

        var paramsCapNhat = {
            requestBody: bodyCapNhat,
            url: "/vietjet/dat-ve/" + history.location.state.dat_cho_id +"/hanh-trinh/" + history.location.state.hanh_trinh_id
        }

        if(history.location.state.action == "them-chang-bay") {
            paramsCapNhat.url =  "/vietjet/dat-ve/" + history.location.state.dat_cho_id + "/them-chang"
        }

        history.push({
          pathname:  `../xac-nhan/${history.location.state.dat_cho_id}`,
          state: { 
            id: history.location.state.dat_cho_id,
            action: history.location.state.action,
            ma_pnr: history.location.state.ma_pnr,
            paramsPhi: paramsPhi,
            paramCapNhat: paramsCapNhat
          }
        })
    }

    const selectRowChuyenDi = {
      mode: 'radio',
      hideSelectAll: true,
      clickToSelect: true,
      clickToEdit: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        setSelectedChuyenBay(row)
      },
      classes: 'đang-chon',
      bgColor: '#eef0fc'
    };

    const { SearchBar } = Search

    const defaultSorted = [
      {
         dataField: "thoi_gian_bay",
         order: "asc",
      },
    ]

    const pageOptions = {
      sizePerPage: 10,
      totalSize: dsChuyenBayMoi.length,
      custom: true,
      showTotal: true,
      hideSizePerPage: false,
      withFirstAndLast: false
    }

    const expandRow = {
        parentClassName: 'chon-tuyen-bay-row',
        onlyOneExpanding: true,
        renderer: (row) => (
            <Row>
                <Col md="12" className="mx-1 px-1">
                    <Row>
                        {
                            row.tuy_chon_gia_ve.map((val, i) => {
                                return (
                                    <Col md="4" xl="3" xs="4" key={i}>
                                        <label key={i} className="rad-label px-2 mx-3 mb-0">
                                            <input type="radio" className="rad-input" name="chon-chuyen-bay" onChange={() => handleChonChuyenBay(val, row)} />
                                            <div className="rad-design mt-2"></div>
                                            <div className="rad-text ">
                                                <span>{`Còn ${val.so_ghe_trong} ghế`}</span>
                                                <span>{val.loai_ve.mo_ta}</span>
                                                <span>
                                                    {Number(val.gia_tien_co_ban.tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                                </span>
                                            </div>
                                        </label>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        )
    };

    const columnsMotChieu = [
        {
            text: "Tên Hãng bay",
            dataField: "chang_bay[0].ten_hang_bay",
            sort: true,
            classes: 'd-none',
            formatter: (ten_hang_bay, dataChuyenBay) => (
                <>
                    <div className="text-truncate mb-0 d-flex align-items-center justify-content-center">
                        {ten_hang_bay}
                    </div>
                </>
            ),
            headerClasses: 'table-light d-none'
        },
        {
            text: "Hãng bay",
            dataField: "logo",
            formatter: (logo, dataChuyenBay) => (
                <Row className="m-2">
                    <Col>
                        <img src={dataChuyenBay.chang_bay[0].logo} alt={dataChuyenBay.chang_bay[0].logo} width="100" />
                    </Col>
                </Row>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Mã chuyến bay",
            dataField: "ma_chuyen_bay",
            sort: true,
            sortValue: (cell, row) => row['chang_bay'][0].ma_chuyen_bay,
            formatter: (ma_chuyen_bay, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p key={i} className="d-inline-block text-truncate mb-0">
                                        {val.ma_chuyen_bay}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("ma_chuyen_bay")}>Mã chuyến bay
                        <i style={{ marginLeft: "5px" }} className={soft["ma_chuyen_bay"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Cất cánh",
            dataField: "san_bay_di.ma_san_bay",
            sort: true,
            sortValue: (cell, row) => row['chang_bay'][0].ngay_di,
            formatter: (san_bay_di, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                                        {val.san_bay_di.ma_san_bay}
                                        <br></br>
                                        {moment(val.ngay_di, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("cat_canh")}>Cất cánh
                        <i style={{ marginLeft: "5px" }} className={soft["cat_canh"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Hạ cánh",
            sort: true,
            dataField: "san_bay_den.ma_san_bay",
            sortValue: (cell, row) => row['chang_bay'][0].ngay_den,
            formatter: (san_bay_den, dataChuyenBay) => (
                <div className="text-truncate mb-0">
                    {dataChuyenBay["chang_bay"].map((val, i) => {
                        return (
                            <Row key={i} style={{ minHeight: "56.25px" }}>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                                        {val.san_bay_den.ma_san_bay}
                                        <br></br>
                                        {moment(val.ngay_den, 'DD-MM-YYYY h:mm:ss a').format('HH:mm')}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("ha_canh")}>Hạ cánh
                        <i style={{ marginLeft: "5px" }} className={soft["ha_canh"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light text-center'
        },
        {
            text: "Loại vé",
            sort: true,
            classes: `${initialValues.loai_dinh_dang === 2 ? "" : "d-none"}`,
            dataField: "tuy_chon_gia_ve_mac_dinh.loai_ve.mo_ta",
            formatter: (loai_ve, dataChuyenBay) => (
                <Row>
                    {
                        dataChuyenBay && dataChuyenBay.tuy_chon_gia_ve_mac_dinh ?
                            <Col md="12" className="mx-1 px-1">
                                <div className="d-flex align-items-center flex-column">
                                    <span>{loai_ve}</span>
                                    <span>
                                        {Number(dataChuyenBay.tuy_chon_gia_ve_mac_dinh.gia_tien_co_ban.tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                            </Col>
                            : null
                    }
                </Row>
            ),
            headerClasses: `${initialValues.loai_dinh_dang === 2 ? "table-light text-center" : "d-none"}`
        },
        {
            text: "Giá",
            sort: true,
            hidden: hidePrice,
            classes: `${initialValues.loai_dinh_dang === 1 ? "" : "d-none"}`,
            dataField: "gia_tien_co_ban.gia_ve",
            formatter: (gia_ve, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0">
                        {Number(gia_ve).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("gia")}>Giá
                        <i style={{ marginLeft: "5px" }} className={soft["gia"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            text: "Giá (VAT)",
            sort: true,
            hidden: !hidePrice,
            classes: `${initialValues.loai_dinh_dang === 1 ? "" : "d-none"}`,
            dataField: "gia_tien_co_ban.tong_cong",
            formatter: (tong_cong, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0">
                        {Number(tong_cong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </>
            ),
            headerFormatter: (column, colIndex, components) => (
                <>
                    <span style={{ cursor: "pointer" }} onClick={() => changSoft("gia_vat")}>Giá (VAT)
                        <i style={{ marginLeft: "5px" }} className={soft["gia_vat"] ? "fas fa-sort-down active-soft" : "fas fa-sort-down un-active-soft"}></i>
                    </span>
                </>
            ),
            headerClasses: `${initialValues.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        },
        {
            text: "Hạng chỗ",
            dataField: "loai_ve.mo_ta",
            sort: true,
            classes: `${initialValues.loai_dinh_dang === 1 ? "" : "d-none"}`,
            formatter: (mo_ta, dataChuyenBay) => (
                <>
                    <p className="d-inline-block text-truncate mb-0" style={{ textAlign: "center" }}>
                        {mo_ta}
                        <br></br>
                        Còn {dataChuyenBay.so_ghe_trong} Vé
                    </p>
                </>
            ),
            headerClasses: `${initialValues.loai_dinh_dang === 1 ? "table-light" : "table-light d-none"}`
        }
    ]

    useEffect(() => {
        dsChuyenBayMoi.mot_chieu = []
        resApi.action = ""
        resApi.code = 0
        resApi.message = ""
        storeDataPhiThayDoi = {}
    }, [])

    useEffect(() => {
        selectedChuyenBay ? setDisabledBtnNext(false) : setDisabledBtnNext(true)
    }, [selectedChuyenBay])

    useEffect(() => {
        var defaultValue = {
            dat_cho_id: history.location.state.dat_cho_id,
            diem_di: history.location.state.diem_di,
            diem_den: history.location.state.diem_den,
            ngay_di: history.location.state.ngay_di,
            hanh_trinh_id: history.location.state.hanh_trinh_id,
            loai_dinh_dang: history.location.state.loai_dinh_dang
        }; 
        setInitialValues(defaultValue) 
    }, [history.location.state.hanh_trinh_id])

    useEffect(() => {
        if (JSON.stringify(resApi) !== "{}" && resApi.code === 400 || resApi.code === 401) {
             if (resApi.action === "lay-danh-sach-chuyen-bay-moi") {
                setOpenAlertError(true)
                setDescriptionAlert(resApi.message)
            }
        }
        console.log(resApi)
    }, [resApi.id])

    return (
        <>  {loading ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />
                    {
                        <Row>
                            <Col md="12" className="passenger-form">
                                <Card outline color="primary">
                                    <CardBody>
                                        <Row>
                                            <Col md="12">
                                                <Card outline color="primary" className="border">
                                                    <CardBody>
                                                       <Row>
                                                            <Col md="12">
                                                                <strong>{initlabel.tabChuyenBay}</strong>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12">
                                                                <FormThaydoiThongTinHanhTrinh
                                                                    initialValues={initialValues}
                                                                    onSubmit={onHandleTimChuyenBay}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    }
                    {dsChuyenBayMoi.mot_chieu && dsChuyenBayMoi.mot_chieu.length > 0 ?
                        <Row>
                            <Col md="12" className="passenger-form">
                                <Card outline color="primary" className="border">
                                    <CardHeader className="bg-transparent">
                                        <CardTitle className="text-primary">Danh sách chuyến đi</CardTitle>
                                    </CardHeader>
                                    {/*<SliderCalendar
                                        name="gio_cat_canh"
                                        onSetValue={setParams}
                                        formatValue="DD-MM-YYYY"
                                        debounce={1000}
                                    ></SliderCalendar>*/}
                                    {dsChuyenBayMoi.mot_chieu.length > 0 ?
                                        <PaginationProvider
                                           pagination={paginationFactory(pageOptions)}
                                           keyField="ma_du_lich"
                                           columns={columnsMotChieu}
                                           data={dsChuyenBayMoi.mot_chieu}>
                                           {({ paginationProps, paginationTableProps }) => (
                                              <ToolkitProvider
                                                 keyField="ma_du_lich"
                                                 data={dsChuyenBayMoi.mot_chieu}
                                                 columns={columnsMotChieu}
                                                 bootstrap4
                                                 search
                                              >
                                                 {toolkitProps => (
                                                    <React.Fragment>
                                                       <div className="table-responsive">
                                                          <BootstrapTable
                                                             {...toolkitProps.baseProps}
                                                             {...paginationTableProps}
                                                             defaultSorted={defaultSorted}
                                                             classes={
                                                                "table align-middle table-nowrap table-hover bg-select-row"
                                                             }
                                                             filter={filterFactory()}
                                                             expandRow={initialValues.loai_dinh_dang === 2 ? expandRow : {}}
                                                             //selectRow={selectRowChuyenDi}
                                                             bordered={false}
                                                             striped={false}
                                                             responsive
                                                          />
                                                       </div>
                                                       <div className="pagination pagination-rounded justify-content-end mb-2">
                                                          <PaginationListStandalone
                                                             {...paginationProps}
                                                          />
                                                       </div>
                                                    </React.Fragment>
                                                 )}
                                              </ToolkitProvider>
                                           )}
                                        </PaginationProvider> : null}
                                </Card>
                            </Col>
                        </Row> : null}
                    <Row>
                        <CardBody>
                            <Row>
                                <Col sm="12" xs="12">
                                    <div className="d-flex flex-wrap gap-2 fix-button-footer mt-2">
                                        <Button type="reset" color="secondary"  onClick={
                                            () => history.goBack()
                                        }>
                                            Quay lại
                                        </Button>
                                        {" "}
                                        <Button  type="submit" disabled={disabledBtnNext}  color="primary" onClick={onHandleNext}>
                                            Tiếp tục
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Row>
                {openAlertError ?
                    <SweetAlert
                        error
                        title="Thông báo"
                        timeout={2000}
                        confirmBtnBsStyle="success"
                        showCloseButton={false}
                        showConfirm={false}
                        onCancel={() => {
                            setOpenAlertError(false)
                        }}
                        onConfirm={() => {
                            setOpenAlertError(false)
                        }}
                    >
                        {descriptionAlert}
                    </SweetAlert> : null
                }
                </Container>
            </div>
        </>
    );
}

export default withRouter(CapNhatHanhTrinh);