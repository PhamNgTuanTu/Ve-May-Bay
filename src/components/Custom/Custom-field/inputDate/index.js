import vi from 'date-fns/locale/vi';
import React, { useEffect, useState } from 'react';
import { registerLocale } from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
registerLocale('vi', vi)

InputDate.propTypes = {

};

function InputDate(props) {
    const { field, form, label, smallWidth, disabled, formatDateTime, icon, valueNgayDi } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const [valueDate, setValueDate] = useState(new Date());

    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
        return capitalizedStr
    }

    const isValidDate = (dateObject) => {
        return new Date(dateObject).toString() !== 'Invalid Date';
    }

    useEffect(() => {
        if (isValidDate(value)) {
            setValueDate(value !== "" ? new Date(`${value}`) : new Date())
        } else if (value === "") {
            setValueDate(new Date())
            form.setFieldValue(name, new Date());
        }
    }, [value])

    const onChange = (date) => {
        setValueDate(new Date(`${date}`))
        form.setFieldValue(name, new Date(`${date}`));
    }

    return (
        <React.Fragment>
            <div className={showError ? "text-danger" : ""}>
                <div className="form-floating" style={{ minHeight: "60px" }}>
                    <div style={disabled ? { backgroundColor: "#f0f0f0", color: "#6d6d6d", cursor: "not-allowed" } : null} className={showError ? (smallWidth ? "form-control h-100 control-custom-witdh invalid-input" : "form-control h-100 invalid-input") : (smallWidth ? "form-control h-100 control-custom-witdh" : "form-control h-100")}>
                        <DateTimePicker
                            format={formatDateTime ? formatDateTime : "dd/MM/yyyy"}
                            locale="vi"
                            value={valueDate}
                            onChange={onChange}
                            disableCalendar={!icon}
                            minDate={new Date(valueNgayDi)}
                            disabled={disabled}
                        />
                    </div>
                    <label className="custom-label-floating">{titleCase(label)}<span className="required">*</span></label>
                </div>
                {showError && <div className="validate-error">{errors[name]}</div>}
            </div>
        </React.Fragment>
    );
}

export default InputDate;