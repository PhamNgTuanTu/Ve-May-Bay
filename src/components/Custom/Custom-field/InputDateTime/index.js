import vi from 'date-fns/locale/vi'
import { ErrorMessage } from 'formik'
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { registerLocale } from "react-datepicker"
import DateTimePicker from 'react-datetime-picker'
import moment from "moment"
registerLocale('vi', vi)

InputDateTime.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
};

InputDateTime.defaultProps = {
    label: '',
    placeholder: '',
}

function InputDateTime(props) {
    const { field, form,
        label, placeholder, formatDateTime, disabled, error } = props;
    const { name, value } = field;

    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
        return capitalizedStr
    }
    const [startDate, setStartDate] = useState(null);

    const handleChange = (valueDate) => {
        var datetimer = moment(valueDate, "DD-MM-YYYY HH:mm:ss")
        var date = datetimer.date()
        var month = datetimer.month()
        var year = datetimer.year()
        var hours = 23
        var minute = 59
        var seconds = 59
        var newDate   = new Date(year, month, date, hours, minute, seconds)
        setStartDate(newDate)
        form.setFieldValue(name, newDate);
    }

    return (
        <div className={error ? "text-danger" : ""}>
            <div className="form-floating">
                <div className={error ? "form-control invalid-input" : "form-control"}>
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
                <ErrorMessage component="div" name={name} className="validate-error" />
            </div>
        </div>
    );
}

export default InputDateTime;