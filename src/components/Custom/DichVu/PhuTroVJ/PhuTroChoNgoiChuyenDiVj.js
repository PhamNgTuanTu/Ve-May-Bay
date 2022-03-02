import classnames from "classnames";
import PaneChoNgoiMotChieu from 'components/Custom/Pane/MotChieu/PaneChoNgoiMotChieu';
import React, { useState } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

PhuTroChoNgoiChuyenDiVj.propTypes = {};

function PhuTroChoNgoiChuyenDiVj(props) {
    const { dataChoNgoiVjDi, lenChuyenDi, indexPersonChuyenDi, setIndexPerSonChuyenDi, setNameChuyenBay, hangGheChuyenDi } = props
    const [activeTabChanBay, setActiveTabChanBay] = useState(10);
    const toggleChanBay = (tab) => {
        if (activeTabChanBay !== tab) {
            setActiveTabChanBay(tab)
        }
    }
    return (
        <Row>
            <Col sm="12">
                <div>
                    <Nav tabs>
                        {
                            dataChoNgoiVjDi && typeof dataChoNgoiVjDi !== "undefined" ?
                                dataChoNgoiVjDi.map((val, i) => {
                                    return (
                                        <NavItem key={i}>
                                            <NavLink
                                                className={classnames({ active: activeTabChanBay === i + 10 })}
                                                onClick={() => { toggleChanBay(i + 10); }}
                                            >
                                                {`Mô hình máy bay ${val.sd_cho_ngoi.ten_mo_hinh_may_bay}`}
                                            </NavLink>
                                        </NavItem>
                                    )
                                }) : null
                        }
                    </Nav>
                    <TabContent activeTab={activeTabChanBay} className="mt-3">
                        {
                            dataChoNgoiVjDi && typeof dataChoNgoiVjDi !== "undefined" ?
                                dataChoNgoiVjDi.map((val, i) => {
                                    return (
                                        <TabPane tabId={i + 10} key={i}>
                                            <Row>
                                                <Col sm="12">
                                                    <PaneChoNgoiMotChieu
                                                        key={i}
                                                        loaiChuyenBay="chuyen_di"
                                                        nameChuyenBay={`chuyen_di_${i}`}
                                                        changeActiveTab={activeTabChanBay}
                                                        dataChoNgoi={dataChoNgoiVjDi[i]}
                                                        lenMax={lenChuyenDi}
                                                        indexPerson={indexPersonChuyenDi}
                                                        setIndexPerSon={setIndexPerSonChuyenDi}
                                                        setNameChuyenBay={setNameChuyenBay}
                                                        hangGheChuyenBay={JSON.stringify(hangGheChuyenDi) !== "[]" ? hangGheChuyenDi[i] : null}
                                                    />
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    )
                                }) : null
                        }
                    </TabContent>
                </div>
            </Col>
        </Row>
    );
}

export default PhuTroChoNgoiChuyenDiVj;