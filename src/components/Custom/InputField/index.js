import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, Input } from 'reactstrap';
import { ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    format: PropTypes.string,
    style: PropTypes.string,
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    autoFocus: false,
    format: '',
    style: "text"
}

function InputField(props) {
    const { field, form,
        label, placeholder, autoFocus, type, disabled, style,
    } = props;
    const { name } = field;


    //validation 
    const { errors, touched, values } = form;
    const showError = errors[name] && touched[name];

    const [data, setData] = useState('')

    const handleChange = (e) => {
        var value = "";
        if (style === "text") {
            value = e.target.value;
        } else {
            value = e.target.value.replace(/[^0-9]/g, "");
        }
        setData(value)
        debounceUpdateValue(value)
    }


    const updateValue = (data) => {
        form.setFieldValue(name, data);
    }

    const debounceUpdateValue = useCallback(_.debounce((data) => {
        updateValue(data)
    }, 300), [])

    useEffect(() => {
        setData(values[name])
    }, [values[name]])


    // Viết hoa kí tự đầu
    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalizedStr
    }
    return (
        <div className={showError ? "text-danger mb-3" : "mb-3"}>
            <div className="form-floating">
                <Input
                    invalid={showError}
                    id={name}
                    className="form-control"
                    {...field}
                    onChange={(e) => handleChange(e)}
                    value={data}
                    type={type}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    disabled={disabled}
                />
                {showError ? <FormFeedback>{errors[name]}</FormFeedback> : null}
                <label>{titleCase(label)}<span className="required">*</span></label>
            </div>
        </div>
    );
}

export default InputField;