import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { FormFeedback, Input } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    format: PropTypes.string,
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    autoFocus: false,
    format: '',
}

function InputField(props) {
    const { field, form,
        label, placeholder, autoFocus, type, disabled,
    } = props;
    const { name, value } = field;

    //validation 
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const [data, setData] = useState(value)


    // Viết hoa kí tự đầu
    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalizedStr
    }
    const updateValue = (values) => {
        form.setFieldValue(name, values);
    }

    const debounceUpdateValue = useCallback(_.debounce((data) => {
        updateValue(data)
    }, 300), [])

    const handleBlur = (e) => {
        const value = e.target.value
        debounceUpdateValue(value)
    }

    const handleChange = (e) => {
        const value = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        setData(value)
    }

    useEffect(() => {
        setData(value);
    }, [value])
    
    return (
        <div className={showError ? "text-danger mb-3" : "mb-3"}>
            <div className="form-floating">
                <Input
                    invalid={showError ? true : false}
                    id={name}
                    className="form-control"
                    {...field}
                    value={data}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={type}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    disabled={disabled}
                />
                {showError && <FormFeedback>{errors[name]}</FormFeedback>}
                <label>{titleCase(label)}<span className="required">*</span></label>
            </div>
        </div>
    );
}

export default InputField;