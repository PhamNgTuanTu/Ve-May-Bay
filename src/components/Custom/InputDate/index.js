import PropTypes from "prop-types"
import React, { useEffect, useState, useRef } from "react"
import moment from "moment"
import { connect, useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Col } from "reactstrap"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import DateTimePicker from 'react-datetime-picker'
import vi from 'date-fns/locale/vi'
import { getDay, getMonth, getYear, getDate } from "../../../helpers/function/function_helper"
registerLocale('vi', vi)

InputDate.propTypes = {

};

function InputDate(props) {
    const { field, form, label, smallWidth, disabled, loaiHanhKhach, onChange } = props;
    const { name, value } = field;

    //validation 
    const { errors, touched, values } = form;
    const showError = errors[name] && touched[name];

    const [data, setData] = useState(null)
    // Viết hoa kí tự đầu
    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalizedStr
    }
    const defaultDay = (data) => {
        let today = new Date();
        let valueResult = new Date();
        let day = getDay(data);
        let month = getMonth(data);
        let year = getYear(data);
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        valueResult = new Date(year, month, day, hour, minute, second)
        return valueResult
    }
    const isValidDate = (dateObject) => {
        return new Date(dateObject).toString() !== 'Invalid Date';
    }

    useEffect(() => {
        if (isValidDate(defaultDay(value))) {
            setData(value ? defaultDay(value) : new Date())
        }
    }, [value])

    const onChangeSelect = (valueDate) => {
        setData(valueDate ? defaultDay(valueDate) : null)
        form.setFieldValue(name, moment(new Date(valueDate)).format("MM-DD-YYYY"));
    }

    return (
        <React.Fragment>
            <div className={showError ? "text-danger" : "mb-3"}>
                <div className="form-floating">
                    <div style={disabled ? { backgroundColor: "#f0f0f0", color: "#6d6d6d" } : null} className={showError ? (smallWidth ? "form-control control-custom-witdh invalid-input" : "form-control invalid-input") : (smallWidth ? "form-control control-custom-witdh" : "form-control")}>
                        <DateTimePicker
                            format="dd/MM/yyyy"
                            locale="vi"
                            value={data}
                            onChange={onChange ? onChange : onChangeSelect}
                            calendarIcon={null}
                            disabled={disabled}
                        />
                    </div>
                    <label className="custom-label-floating">{titleCase(label)}
                        {loaiHanhKhach === 1 ? null : <span className="required">*</span>}
                    </label>
                </div>
                {showError ? <div className="validate-error">{errors[name]}</div> : null}
            </div>
        </React.Fragment>
    );
}

export default InputDate;