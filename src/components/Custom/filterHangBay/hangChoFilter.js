import {
    AllCheckerCheckbox,
    Checkbox, CheckboxGroup
} from "@createnl/grouped-checkboxes";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Popover, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { selectedFilters } from 'store/actions';

HangChoFilter.propTypes = {

};

function HangChoFilter(props) {
    const { name, dataDropdown, label, toggle, isOpen, setChecked } = props;
    const dispatch = useDispatch()
    const [onChange, setOnChange] = useState({});

    const check = (data, name) => {
        let status = false
        if (JSON.stringify(data) !== "{}") {
            const found = data.find(x => x.name === name);
            found ? status = found.checked : null
        }
        return status
    }

    const checkBoxDisplay = (data) => {
        return (
            <>
                {
                    data && JSON.stringify(data) !== "[]" ?
                        data.map((val, i) => {
                            return (
                                <li key={i}>
                                    <DropdownItem className="p-0" toggle={false}>
                                        <div className="group-btn-loc-hang-bay">
                                            <div className="form-check form-checkbox-outline form-check-primary w-100">
                                                <label className={check(onChange, val.ma) ? "form-check-label w-100 p-2 has-checked" : "form-check-label w-100 p-2"}>
                                                    <Checkbox name={val.ma} className="form-check-input-cutom d-none" />
                                                    <span>{val.mo_ta}</span>
                                                    {check(onChange, val.ma) ? <i className="bx bx-check-double ml-2"></i> : null}
                                                </label>
                                            </div>
                                        </div>
                                    </DropdownItem>
                                </li >
                            )
                        })
                        : null
                }
            </>
        )

    }

    const checkAll = (data) => {
        let total = 0
        if (JSON.stringify(data) !== "{}") {
            data.map((val, i) => {
                if (val.checked) {
                    total += 1
                }
            })
        }
        return total
    }

    useEffect(() => {
        let arr = []
        if (JSON.stringify(onChange) !== "{}") {
            onChange.map((val, i) => {
                if (val.checked) {
                    arr.push(val.name)
                }
            })
            dispatch(selectedFilters(arr))
        }
    }, [onChange])

    useEffect(() => {
        isOpen ? setChecked(true) : setChecked(false)
    }, [isOpen])

    return (
        <>
            <ButtonDropdown
                isOpen={isOpen} toggle={toggle} className="btn-drop-hang-cho" direction="left"
            >
                <DropdownToggle caret color="primary bg-soft">
                    <span className="dropdown-custom-i" ><i className="mdi mdi-seat-recline-normal"></i></span>
                </DropdownToggle>
                <DropdownMenu data-popper-placement="left-start">
                    <DropdownItem header style={{ color: "#556ee6" }}>
                        <i className={"mdi mdi-car-seat title-hangcho"} ></i>
                        {` ${label}`}
                    </DropdownItem>

                    <ul>
                        <CheckboxGroup onChange={setOnChange}>
                            <>
                                {
                                    JSON.stringify(dataDropdown) !== "[]" ?
                                        (
                                            <>
                                                <li>
                                                    <DropdownItem className="p-0" toggle={false}>
                                                        <div className="group-btn-loc-hang-bay">
                                                            <div className="form-check form-checkbox-outline form-check-primary w-100">
                                                                <label className={checkAll(onChange) === onChange.length ? "form-check-label w-100 p-2 has-checked" : "form-check-label w-100 p-2"}>
                                                                    <AllCheckerCheckbox checked={checkAll(onChange) === onChange.length ? true : false} className="form-check-input-cutom d-none" />
                                                                    <span>Chọn tất cả</span>
                                                                    {checkAll(onChange) === onChange.length ? <i className="bx bx-check-double ml-2"></i> : null}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </DropdownItem>
                                                </li>
                                                {checkBoxDisplay(dataDropdown)}</>
                                        )
                                        : null
                                }
                            </>

                        </CheckboxGroup>
                    </ul>
                </DropdownMenu>
            </ButtonDropdown>
        </>
    );
}

export default HangChoFilter;