import classnames from "classnames";
import PaneChoNgoiHaiChieu from "components/Custom/Pane/HaiChieu/PaneChoNgoiHaiChieu";
import React, { useState } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

PhuTroChoNgoiChuyenVeVj.propTypes = {};

function PhuTroChoNgoiChuyenVeVj(props) {
    const { dataChoNgoiVjVe, lenChuyenVe, indexPersonChuyenVe, setIndexPerSonChuyenVe, setNameChuyenBayChuyenVe, hangGheChuyenVe } = props
    const [activeTabChanBayVe, setActiveTabChanBayVe] = useState(20);
    const toggleTabChanBayVe = (tab) => {
        if (activeTabChanBayVe !== tab) {
            setActiveTabChanBayVe(tab)
        }
    }
    return (
        <Row>
            <Col sm="12">
                <div>
                    <Nav tabs>
                        {
                            dataChoNgoiVjVe && typeof dataChoNgoiVjVe !== "undefined" ?
                                dataChoNgoiVjVe.map((val, i) => {
                                    return (
                                        <NavItem key={i}>
                                            <NavLink
                                                className={classnames({ active: activeTabChanBayVe === i + 20 })}
                                                onClick={() => { toggleTabChanBayVe(i + 20); }}
                                            >
                                                {`Mô hình máy bay ${val.sd_cho_ngoi.ten_mo_hinh_may_bay}`}
                                            </NavLink>
                                        </NavItem>
                                    )
                                }) : null
                        }
                    </Nav>
                    <TabContent activeTab={activeTabChanBayVe} className="mt-3">
                        {
                            dataChoNgoiVjVe && typeof dataChoNgoiVjVe !== "undefined" ?
                                dataChoNgoiVjVe.map((val, i) => {
                                    return (
                                        <TabPane tabId={i + 20} key={i}>
                                            <Row>
                                                <Col sm="12">
                                                    <PaneChoNgoiHaiChieu
                                                        key={i}
                                                        loaiChuyenBay="chuyen_ve"
                                                        nameChuyenBay={`chuyen_ve_${i}`}
                                                        changeActiveTab={activeTabChanBayVe}
                                                        dataChoNgoi={dataChoNgoiVjVe[i]}
                                                        lenMax={lenChuyenVe}
                                                        indexPerson={indexPersonChuyenVe}
                                                        setIndexPerSon={setIndexPerSonChuyenVe}
                                                        setNameChuyenBay={setNameChuyenBayChuyenVe}
                                                        hangGheChuyenBay={JSON.stringify(hangGheChuyenVe) !== "[]" ? hangGheChuyenVe[i] : null}
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

export default PhuTroChoNgoiChuyenVeVj;