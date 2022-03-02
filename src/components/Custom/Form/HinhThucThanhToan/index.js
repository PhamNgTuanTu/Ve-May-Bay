import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

HinhThucThanhToan.propTypes = {

};

function HinhThucThanhToan(props) {
    const { setHinhThucThanhToan, hinhThucThanhToan, dataThanhToan } = props
    return (
        <>
            {
                dataThanhToan.map((val, i) => {
                    return (
                        <div className="m-3 mt-0" key={i}>
                            <FormGroup check className="mt-3 mb-3">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="hinh_thuc_thanh_toan"
                                        value={val.value}
                                        checked={hinhThucThanhToan === val.value}
                                        onChange={e => setHinhThucThanhToan(e.currentTarget.value)}
                                    />{' '}
                                    {val.name}
                                </Label>
                            </FormGroup>
                            <img src="https://fawookidi.com/wp-content/uploads/2019/06/hinh-thuc-thanh-toan-khi-mua-den-led.jpg" width="100px"></img>
                        </div>
                    )
                })
            }
        </>
    );
}

export default HinhThucThanhToan;