import { airportVNCode } from "common/data/options/airportVNCode";
import { trangThaiVe } from "common/data/options/trangThaiVe";
import Breadcrumbs from "components/Common/Breadcrumb";
import InputDateTime from "components/Custom/Search/inputDateTime";
import THeadSort from "components/Custom/Table/thead/THeadSort"
import SelectFilterStr from "components/Custom/Search/selectFilterStr";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from 'react-bootstrap-table2-filter';
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { MetaTags } from 'react-meta-tags';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter, useRouteMatch, Link } from 'react-router-dom';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Badge, Button, Card, CardBody, Col, Container, Row, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import InputFilter from "../../components/Custom/Search/InputFilter";
import { compareDate, getDate, getHours, moneyFormat } from "../../helpers/function/function_helper";
// Xử lý event
import { layDSDatCho, getID } from "../../store/actions";
import SpinnerLoading from "components/Custom/SpinnerLoading";


const initlabel = {
    tab: 'tìm kiếm đặt chỗ'
};
function TimKiemDatCho(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { path } = useRouteMatch();
    const TRANG = 1;
    const SO_DONG_1_TRANG = 25;
    const [disableBtn, setDisableBtn] = useState(true)
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const [selectSanBayRef, setSelectSanBayRef] = useState({})
    const [selectTrangThaiRef, setSelectTrangThaiRef] = useState({})
    let { dataticket, resApiForm, pageIndex, totalSize, totalPages, loadingPage } = useSelector(state => ({
        dataticket: state.DanhSachDatCho.content,
        resApiForm: state.DanhSachDatCho.resApi,
        pageIndex: state.DanhSachDatCho.page,
        totalSize: state.DanhSachDatCho.total_records,
        totalPages: state.DanhSachDatCho.total_pages,
        loadingPage: state.DanhSachDatCho.loading,
    }))
    const [sortActive, setSortActive] = useState("ngay_tao_dat_cho")
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        trang: TRANG,
        so_luong: SO_DONG_1_TRANG,
        ma_pnr: [],
        ma_hang_khong: [],
        ho: [],
        ten: [],
        hang_bay: [],
        ten_nhan_vien: [],
        san_bay_di: [],
        ngay_bay: [],
        trang_thai: [],
        sap_xep: "ngay_tao_dat_cho",
        asc: 0
    })
    const [paramsDay, setParamsDay] = useState({
        dat_cho_tu_ngay: [],
        dat_cho_den_ngay: []
    })
    const [pagination, setPagination] = useState({
        activePage: 1,
        totalItemsCount: 0,
        itemsCountPerPage: 0,
        pageRangeDisplayed: 5,
    })

    const [defaultDay, setDefaultDay] = useState(true)

    const defaultSorted = [
        {
            dataField: "ngay_tao_dat_cho ",
            order: "desc",
        },
    ]

    const getHoten = (val) => {
        var hoTen = []
        val.map((value, index) => {
            hoTen.push(`${value.ho} ${value.ten}`)
        })
        return hoTen.join(", ")
    }

    const checkRowSelect = (className) => {
        if(className == 'text-success mdi mdi-pencil font-size-18 cursor-pointer' || className == 'mdi mdi-delete font-size-18' || className == 'mdi mdi-ticket-confirmation-outline font-size-18') {
            return false
        } 
        return true; 
    } 

    const listColumns = [
        {
          text: "id",
          dataField: "id",
          hidden: true,
          formatter: (cellContent, dataticket) => <>{dataticket.id}</>,
        },
        {
            dataField: "logo",
            formatter: (logo, dataticket) => (
                <>
                    <img src={dataticket.logo_hang_bay} alt={dataticket.logo_hang_bay} width="100" />
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Hãng bay"
                    name="hang_bay" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light th-logo'
        },
        {
            dataField: "ma_pnr",
            formatter: (ma_pnr, dataticket) => (
                <>
                    <p 
                        onClick={() => history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: dataticket.id }
                        })} 
                        className="d-inline-block text-truncate mb-0 cursor-pointer">
                        {ma_pnr}
                    </p>
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Mã đặt chỗ"
                    name="ma_pnr" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            dataField: "ten_khach_hang",
            formatter: (ten_khach_hang, dataticket) => (
                <>
                    <p  
                        onClick={() => history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: dataticket.id }
                        })} 
                        className="d-inline-block text-truncate mb-0 cursor-pointer">
                        {getHoten(dataticket["thong_tin_dat_cho"])}
                    </p>
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                
                    onSort={setParams}
                    label="Tên hành khách"
                    name="ten_khach_hang" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            dataField: "chuyen_bay.ma_chuyen_bay",
            formatter: (ma_chuyen_bay, dataticket) => (
                <>
                    {
                        dataticket['phan_khuc'].length > 0 ?
                            <p  
                                onClick={() => history.push({
                                  pathname: '/tim-kiem-dat-cho/xuat-ve',
                                  state: { id: dataticket.id }
                                })} 
                                className="d-inline-block text-truncate mb-0 cursor-pointer"
                            >
                                {`${dataticket['phan_khuc'][0].ma_hang_khong} ${dataticket['phan_khuc'][0].so_chuyen_bay}`}
                            </p>
                            : null
                    }
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Mã chuyến bay"
                    name="ma_chuyen_bay" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            text: "Ngày bay",
            dataField: "diem_khoi_hanh",
            formatter: (ngay_khoi_hanh, dataticket) => (
                <>
                    {
                        dataticket['phan_khuc'].length > 0 ?
                            <p 
                                onClick={() => history.push({
                                  pathname: '/tim-kiem-dat-cho/xuat-ve',
                                  state: { id: dataticket.id }
                                })} 
                                className="d-inline-block text-truncate mb-0 cursor-pointer" 
                                style={{ textAlign: "center" }}
                            >
                                {getHours(dataticket['phan_khuc'][0].thoi_gian_di, "DD-MM-YYYY HH:mm")}
                                <br></br>
                                {getDate(dataticket['phan_khuc'][0].thoi_gian_di, "DD-MM-YYYY")}
                            </p>
                            : null
                    }

                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Ngày bay"
                    name="ngay_bay" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            dataField: "san_bay",
            formatter: (san_bay_di, dataticket) => (
                <>
                    {
                        <p  
                            onClick={() => history.push({
                              pathname: '/tim-kiem-dat-cho/xuat-ve',
                              state: { id: dataticket.id }
                            })} 
                            className="d-inline-block text-truncate mb-0"
                        >
                            {dataticket.phan_khuc.length > 0 ? 
                            dataticket.phan_khuc.[0].ma_san_bay_di + "-" + dataticket.phan_khuc.[0].ma_san_bay_den : "-"}
                        </p>
                    }
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Sân bay"
                    name="san_bay" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            dataField: "tong_thanh_tien",
            formatter: (tong_thanh_tien, dataticket) => (
                <>
                    <p 
                        onClick={() => history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: dataticket.id }
                        })} 
                        className="d-inline-block text-truncate mb-0 cursor-pointer"
                    >
                        {moneyFormat(dataticket.tong_thanh_tien) + "VNĐ"}
                    </p>
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Giá vé"
                    name="tong_thanh_tien" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ),
            headerClasses: 'table-light'
        },
        {
            dataField: "ngay_tao_dat_cho",
            formatter: (ten_nhan_vien, dataticket) => (
                <>
                    <p 
                        onClick={() => history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: dataticket.id }
                        })} 
                        className="d-inline-block text-truncate mb-0 cursor-pointer"
                    >
                        {dataticket.ngay_tao_dat_cho}
                    </p>
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Ngày tạo đặt chỗ"
                    name="ngay_tao_dat_cho" 
                    active={sortActive}
                    onActive={setSortActive}
                    sortDefault={true}
                    asc={false}
                  >
                  </THeadSort>
                </>
            ), 
            headerClasses: 'table-light'
        },
        {
            dataField: "ten_nhan_vien",
            formatter: (ten_nhan_vien, dataticket) => (
                <>
                    <p 
                        onClick={() => history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: dataticket.id }
                        })} 
                        className="d-inline-block text-truncate mb-0 cursor-pointer"
                    >
                        {dataticket.ten_nhan_vien}
                    </p>
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Nhân viên booking"
                    name="ten_nhan_vien" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ), 
            headerClasses: 'table-light'
        },
        {
            dataField: "trang_thai",
            formatter: (trang_thai, dataticket) => (
                <>
                    <p 
                        onClick={() => history.push({
                          pathname: '/tim-kiem-dat-cho/xuat-ve',
                          state: { id: dataticket.id }
                        })} 
                        className="d-inline-block text-truncate mb-0 cursor-pointer"
                    >
                        {checkStatusUser(dataticket.trang_thai)}
                    </p>
                </>
            ),
            headerFormatter: () => (
                <>
                  <THeadSort 
                    onSort={setParams}
                    label="Trạng thái"
                    name="trang_thai" 
                    active={sortActive}
                    onActive={setSortActive}
                  >
                  </THeadSort>
                </>
            ), 
            headerClasses: 'table-light'
        },
        {
          dataField: "menu",
          isDummyField: true,
          text: "Chức năng",
          editable: false,
          formatter: (cellContent, dataticket) => (
            <div className="d-flex gap-3">
               <UncontrolledDropdown direction="left">
                  <DropdownToggle tag="div">
                    <i
                      className="text-success mdi mdi-pencil font-size-18 cursor-pointer"
                    ></i>
                  </DropdownToggle>
                  <DropdownMenu 
                      data-popper-placement="left-start"
                     >  
                        <Link 
                            className="text-info dropdown-item border-bottom" 
                            to={{
                                pathname: `${path}/danh-sach-hieu-chinh`,
                                state: {id : dataticket.id} 
                            }} >
                            Thay đổi thông tin hành khách
                        </Link>
                        <Link 
                            className="text-info dropdown-item border-bottom" 
                            to={{
                                pathname: `${path}/thong-tin-hanh-trinh`,
                                state: {
                                    id : dataticket.id,
                                    action: "doi-chuyen-bay"
                                } 
                            }}
                            >
                            Thay đổi chuyến bay
                        </Link>
                        <Link 
                            className="text-info dropdown-item border-bottom" 
                            to="#" >
                            Thay đổi dịch vụ, ghế
                        </Link>
                        <Link 
                            className="text-info dropdown-item border-bottom" 
                            to={{
                                pathname: `${path}/thong-tin-hanh-trinh`,
                                state: {
                                    id : dataticket.id,
                                    action: "them-chang-bay"
                                } 
                            }}>
                            Thêm chặng bay
                        </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              <Link className="text-info" to="#">
                <i
                  className="mdi mdi-ticket-confirmation-outline font-size-18"
                  id={"share-ticket-" + dataticket.id}
                  onClick={() => console.log("ok")}
                ></i>
              </Link>
              <Link 
                  className="text-dark" 
                  to={{
                      pathname: '/tim-kiem-dat-cho/xuat-ve',
                      state: { id: dataticket.id }
                    }}>
                <i
                  className="mdi mdi-application-import font-size-18"
                  id={"xuat-ve-" + dataticket.id}
                ></i>
              </Link>
              <Link className="text-danger" to="#">
                <i
                  className="mdi mdi-delete font-size-18"
                  id={"deletetooltip-" + dataticket.id}
                  onClick={() => console.log("ok")}
                ></i>
              </Link>
              <UncontrolledTooltip placement="right" target={"xuat-ve-" + dataticket.id}>
                Xuất vé
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="right" target={"share-ticket-" + dataticket.id}>
                Tách PNR
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="right" target={"deletetooltip-" + dataticket.id}>
                Huỷ vé
              </UncontrolledTooltip>
            </div>
          ),
          headerFormatter: () => (
            <>
              <label className="control-label cursor-pointer w-100" >
                Chức năng
              </label>
            </>
          ),
          headerClasses: 'table-light'
        }

    ]

    const checkStatusUser = (status) => {
        var text = "";
        if(status === 0) {
            text = "Giữ chỗ"
        } else if(status === 1) {
            text = "Đã xuất"
        } else if(status === 2) {
            text = "Huỷ đi - xuất về"
        } else if(status === 3) {
            text = "Huỷ về - xuất đi"
        } else {
            text = "Đã huỷ"
        }
        return text;
    }

    const showToTal = () => {
        var from = (pageIndex - 1) * SO_DONG_1_TRANG;
        var to = (pageIndex) * SO_DONG_1_TRANG;
        from === 0 ? setFrom(1) : setFrom((pageIndex - 1) * SO_DONG_1_TRANG)
        to >= totalSize ? setTo(totalSize) : setTo((pageIndex) * SO_DONG_1_TRANG)
    }

    const handlePageChange = (page) => {
        setLoading(true)
        //index bắt đầu = 0
        pageIndex = page.selected;
        setParams(preState => ({ ...preState, ['trang']: pageIndex + 1, ['so_luong']: SO_DONG_1_TRANG }));
    }

    const handleResetFilter = () => {
        setDefaultDay(!defaultDay)
        setParams({
            trang: TRANG,
            so_luong: SO_DONG_1_TRANG,
            ma_pnr: [],
            ma_hang_khong: [],
            ho: [],
            ten: [],
            hang_bay: [],
            ten_nhan_vien: [],
            san_bay_di: [],
            ngay_bay: [],
            trang_thai: [],
            sap_xep: "ngay_tao_dat_cho",
            asc: 0
        })
        setParamsDay({
            dat_cho_tu_ngay: [],
            dat_cho_den_ngay: []
        })
        setDefaultDay(false)
        selectSanBayRef.current.select.clearValue()
    }

    useEffect(() => {
        setPagination(preState => ({
            ...preState,
            ['activePage']: pageIndex,
            ['totalItemsCount']: totalSize,
            ['itemsCountPerPage']: totalPages
        }))
        showToTal()
    }, [dispatch, dataticket])

    useEffect(() => {
        resApiForm = []
    }, [])

    useEffect(() => {
        console.log(paramsDay)
        if (JSON.stringify(paramsDay.dat_cho_tu_ngay) !== "[]" && JSON.stringify(paramsDay.dat_cho_den_ngay) !== "[]") {
           // var dat_cho_tu_ngay = getDate(paramsDay.dat_cho_tu_ngay)
            //var dat_cho_den_ngay = getDate(paramsDay.dat_cho_den_ngay)

            var arr = { ...params, ...paramsDay }
            console.log(arr)
            dispatch(layDSDatCho(arr))
        } else {
            dispatch(layDSDatCho(params))
        }
    }, [params, paramsDay])

    useEffect(() => {
        if (resApiForm.action === 'tim-kiem-dat-cho' && resApiForm.code === 200) {
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [resApiForm.id])

    return (
        <>
            {loading ? <SpinnerLoading></SpinnerLoading> : null}
            <div className="page-content">
                <MetaTags>
                    <title>{process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title={initlabel.tab} />
                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody className="search-tiket-card">
                                    <Col xl="12">
                                        <Row className="mt-4">
                                            <Col md="6">
                                                <InputFilter
                                                    label="mã đặt chỗ"
                                                    name="ma_pnr"
                                                    placeholder="Nhập mã đặt chỗ..."
                                                    values={params.ma_pnr}
                                                    onChange={setParams}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <InputFilter
                                                    label="mã chuyến bay"
                                                    name="ma_hang_khong"
                                                    placeholder="Nhập mã chuyến bay..."
                                                    values={params.ma_hang_khong}
                                                    onChange={setParams}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col md="6">
                                                <InputFilter
                                                    label="họ tên người đại diện"
                                                    name="ten_nguoi_Dai_dien"
                                                    placeholder="Nhập họ tên..."
                                                    values={params.ho}
                                                    onChange={setParams}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <SelectFilterStr
                                                    label="Trạng thái"
                                                    name="trang_thai"
                                                    placeholder="Chọn trạng thái..."
                                                    options={trangThaiVe}
                                                    onChange={setParams}
                                                    isMulti={true}
                                                    onSetRef={setSelectSanBayRef}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col md="6">

                                                <InputFilter
                                                    label="hãng bay"
                                                    name="hang_bay"
                                                    placeholder="Nhập hãng bay..."
                                                    values={params.hang_bay}
                                                    onChange={setParams}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <SelectFilterStr
                                                    label="Sân bay đi"
                                                    name="san_bay_di"
                                                    placeholder="Chọn sân bay đi..."
                                                    options={airportVNCode}
                                                    onChange={setParams}
                                                    isMulti={true}
                                                    onSetRef={setSelectSanBayRef}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col md="6">
                                                <InputDateTime
                                                    label="ngày bay"
                                                    name="ngay_bay"
                                                    formatDateTime={"dd/MM/yyyy"}
                                                    onSetParams={setParams}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <InputFilter
                                                    label="tên nhân viên"
                                                    name="ten_nhan_vien"
                                                    placeholder="Nhập tên nhân viên..."
                                                    values={params.ten_nhan_vien}
                                                    onChange={setParams}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col md="6">
                                                <InputDateTime
                                                    label="đặt chỗ từ ngày"
                                                    name="dat_cho_tu_ngay"
                                                    formatDateTime={"dd/MM/yyyy"}
                                                    onSetParams={setParamsDay}
                                                    defaultDay={defaultDay}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <InputDateTime
                                                    label="đặt chỗ đến ngày"
                                                    name="dat_cho_den_ngay"
                                                    formatDateTime={"dd/MM/yyyy"}
                                                    onSetParams={setParamsDay}
                                                    defaultDay={defaultDay}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className="d-flex flex-wrap gap-2 fix-button-footer mt-4">
                                                <Button type="reset" color="primary" outline onClick={handleResetFilter}>
                                                    <i className="bx bx-reset me-1" />
                                                    Tìm kiếm khác
                                                </Button>
                                            </div>
                                        </Row>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <ToolkitProvider
                                            keyField="id"
                                            data={dataticket}
                                            columns={listColumns}
                                            bootstrap4
                                            search
                                        >
                                            {toolkitProps => (
                                                <React.Fragment>
                                                    <div className="table-responsive">
                                                    { dataticket.length > 0 ?
                                                        <BootstrapTable
                                                            {...toolkitProps.baseProps}
                                                            defaultSorted={defaultSorted}
                                                            classes={
                                                                "table align-middle table-nowrap table-hover bg-select-row"
                                                            }
                                                            bordered={false}
                                                            striped={false}
                                                            responsive
                                                        /> : 
                                                        <div className="table-responsive">
                                                            <table className="table table-bordered">
                                                                <thead className="table-light" >
                                                                    <tr>
                                                                        <th>Hãng bay</th>
                                                                        <th>Mã đặt chỗ</th>
                                                                        <th>Tên hành khách</th>
                                                                        <th>Mã chuyến bay</th>
                                                                        <th>Ngày bay</th>
                                                                        <th>Sân bay</th>
                                                                        <th>Giá vé</th>
                                                                        <th>Nhân viên booking</th>
                                                                        <th>Trạng thái</th>
                                                                        <th>Chức năng</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td colSpan="8">
                                                                            <p className="text-center">
                                                                                {loadingPage ? "Đang tải dữ liệu vui lòng chờ ..." : "Không tìm thấy dữ liệu"}
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    }
                                                    </div>
                                                    <div className="pagination pagination-rounded justify-content-end mb-2">
                                                        {pagination.itemsCountPerPage > 0 &&
                                                            <Row className="align-items-md-center mt-4">
                                                                <Col sm={6} xs={12} className="mb-2">
                                                                    <label className="control-label opc-7">
                                                                        {from === to ? ("Hiển thị " + to + " trên tổng " + pagination.totalItemsCount + " dòng") :
                                                                            ("Hiển thị " + from + " đến " + to + " trên tổng " + pagination.totalItemsCount + " dòng")}
                                                                    </label>
                                                                </Col>
                                                                <Col sm={6} xs={12} className="pagination pagination-rounded justify-content-end fix-rs-pag">
                                                                    <ReactPaginate
                                                                        pageCount={pagination.itemsCountPerPage}
                                                                        forcePage={pagination.activePage - 1}
                                                                        onPageChange={handlePageChange}
                                                                        disabledClassName="disabled"
                                                                        previousLabel="<"
                                                                        nextLabel=">"
                                                                        breakLabel="..."
                                                                        breakClassName="break-me"
                                                                        marginPagesDisplayed={2}
                                                                        pageRangeDisplayed={5}
                                                                        subContainerClassName="pages pagination"
                                                                        breakLinkClassName="page-link"
                                                                        containerClassName="pagination"
                                                                        pageClassName="page-item"
                                                                        pageLinkClassName="page-link"
                                                                        previousClassName="page-item"
                                                                        previousLinkClassName="page-link"
                                                                        nextClassName="page-item"
                                                                        nextLinkClassName="page-link"
                                                                        activeClassName="active"
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        }
                                                    </div>
                                                </React.Fragment>
                                            )}
                                        </ToolkitProvider>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default withRouter(TimKiemDatCho);