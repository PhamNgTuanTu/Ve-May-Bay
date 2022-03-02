import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ChonTuyenBay from './ChonTuyenBay';
import TimVe from "./TimVe"
import ThongTinHanhKhach from "./ThongTinHanhKhachPage"
import DichVu from './DichVu';
import ThanhToan from './ThanhToan';

RouteDatVe.propTypes = {};

function RouteDatVe(props) {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={TimVe} />
            <Route exact path={`${path}/chon-tuyen-bay`} component={ChonTuyenBay} />
            <Route exact path={`${path}/thong-tin-hanh-khach`} component={ThongTinHanhKhach} />
            <Route exact path={`${path}/dich-vu`} component={DichVu} />
            <Route exact path={`${path}/thanh-toan`} component={ThanhToan} />
        </Switch>
    );
}

export default RouteDatVe;