import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import XuatVe from "../xuat-ve/index";
import TimKiemDatCho from "./index";
import DanhSachHieuChinh from "../thay-doi-thong-tin-hanh-khach/trang-danh-sach"
import ThayDoiThongTinHanhKhach from "../thay-doi-thong-tin-hanh-khach/trang-chinh-sua"
import ThongTinHanhTrinh from "../thay-doi-thong-tin-hanh-trinh/thong-tin-hanh-trinh"
import CapNhatHanhTrinh from "../thay-doi-thong-tin-hanh-trinh/trang-chinh-sua"
import ThayDoiThongTinDichVu from 'pages/thay-doi-thong-tin-dich-vu';
import XacNhanThayChuyenBay from '../thay-doi-thong-tin-hanh-trinh/xac-nhan-doi-chuyen-bay'

RouteTimKiemDatCho.propTypes = {};

function RouteTimKiemDatCho(props) {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={TimKiemDatCho} />
            <Route exact path={`${path}/danh-sach-hieu-chinh`} component={DanhSachHieuChinh} />
            <Route exact path={`${path}/xuat-ve`} component={XuatVe} />
            <Route exact path={`${path}/danh-sach-hieu-chinh/hanh-khach/:id`} component={ThayDoiThongTinHanhKhach} />
            <Route exact path={`${path}/thong-tin-hanh-trinh`} component={ThongTinHanhTrinh} />
            <Route exact path={`${path}/thong-tin-hanh-trinh/cap-nhat/:id`} component={CapNhatHanhTrinh} />
            <Route exact path={`${path}/thong-tin-hanh-trinh/xac-nhan/:id`} component={XacNhanThayChuyenBay} />
            <Route exact path={`${path}/xuat-ve/thong-tin-dich-vu`} component={ThayDoiThongTinDichVu} />

            {/* <Route component={ErrorPage} /> */}
        </Switch>
    );
}

export default RouteTimKiemDatCho;