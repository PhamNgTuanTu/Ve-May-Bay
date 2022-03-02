import vi from 'date-fns/locale/vi'
import { ErrorMessage } from 'formik'
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { registerLocale } from "react-datepicker"
import DateTimePicker from 'react-datetime-picker'
import moment from "moment"
import { FormFeedback } from 'reactstrap'
registerLocale('vi', vi)

InputFieldArrayDate.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
};

InputFieldArrayDate.defaultProps = {
    label: '',
    placeholder: '',
}

function InputFieldArrayDate(props) {
    const { field, form,
        label, placeholder, formatDateTime, disabled, error, isNguoiLon, NameProps, index, nameError, values, submitCount } = props;
    const { name, value } = field;

    const valuesError = values && values[NameProps] && values[NameProps][index] && values[NameProps][index][nameError];
    const showError = error && error[NameProps] && error[NameProps][index] && error[NameProps][index][nameError];

    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
        return capitalizedStr
    }

    const functionDate = (value) => {
        var newDate = ""
        var datetimer = moment(value, "DD-MM-YYYY HH:mm:ss")
        var date = datetimer.date()
        var month = datetimer.month()
        var year = datetimer.year()
        var hours = 23
        var minute = 59
        var seconds = 59
        return newDate = new Date(year, month, date - 1, hours, minute, seconds)
    }

    const functionDate2 = (value) => {
        var newDate = ""
        var datetimer = moment(value, "DD-MM-YYYY HH:mm:ss")
        var date = datetimer.date()
        var month = datetimer.month()
        var year = datetimer.year()
        var hours = 23
        var minute = 59
        var seconds = 59
        return newDate = new Date(year - 2, month, date - 1, hours, minute, seconds)
    }

    const [startDate, setStartDate] = useState(value === "" ? (isNguoiLon === 1 ? "" : (isNguoiLon === 2 ? functionDate2(new Date()) : functionDate(new Date()))) : new Date(value));

    useEffect(() => {
        form.setFieldValue(name, startDate);
    }, [startDate])

    const handleChange = (valueDate) => {
        var datetimer = moment(valueDate, "DD-MM-YYYY HH:mm:ss")
        var date = datetimer.date()
        var month = datetimer.month()
        var year = datetimer.year()
        var hours = 23
        var minute = 59
        var seconds = 59
        let newDate = new Date(year, month, date, hours, minute, seconds)
        setStartDate(newDate)
        form.setFieldValue(name, newDate);
    }

    return (
        <>
            {
                isNguoiLon === 1 ?
                    <div className={showError ? "text-danger" : ""}>
                        <div className="form-floating">
                            <div className={showError ? "form-control invalid-input" : "form-control"}>
                                <DateTimePicker
                                    format={formatDateTime ? formatDateTime : "dd/MM/yyyy"}
                                    locale="vi"
                                    onChange={(date) => handleChange(date)}
                                    value={startDate}
                                    disabled={disabled}
                                    calendarIcon={null}
                                    name={name}
                                />
                            </div>
                            <label className="custom-label-floating">{titleCase(label)}<span className="required">*</span></label>
                            {showError && <FormFeedback className="validate-error d-block">{showError}</FormFeedback>}
                        </div>
                    </div>
                    : <div className={submitCount >= 1 && valuesError === "" || showError ? "text-danger" : ""}>
                        <div className="form-floating">
                            <div className={submitCount >= 1 && valuesError === "" || showError ? "form-control invalid-input" : "form-control"}>
                                <DateTimePicker
                                    format={formatDateTime ? formatDateTime : "dd/MM/yyyy"}
                                    locale="vi"
                                    onChange={(date) => handleChange(date)}
                                    value={startDate}
                                    disabled={disabled}
                                    calendarIcon={null}
                                    name={name}
                                />
                            </div>
                            <label className="custom-label-floating">{titleCase(label)}<span className="required">*</span></label>
                            {submitCount >= 1 && valuesError === "" || showError && <FormFeedback className="validate-error d-block">{showError}</FormFeedback>}
                        </div>
                    </div>
            }
        </>

    );
}

export default InputFieldArrayDate;