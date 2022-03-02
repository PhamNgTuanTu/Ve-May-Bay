import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { FormFeedback, Input } from 'reactstrap';
import _ from 'lodash';

InputFieldArray.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    error: PropTypes.any,
};
InputFieldArray.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    autoFocus: false,
    error: null,
}

function InputFieldArray(props) {
    const { field, form,
        label, placeholder, autoFocus, type, disabled, error, NameProps, index, nameError, values, submitCount
    } = props;
    const { name, value } = field;

    const valuesError = values && values[NameProps] && values[NameProps][index] && values[NameProps][index][nameError];
    const showError = error && error[NameProps] && error[NameProps][index] && error[NameProps][index][nameError];

    // Viết hoa kí tự đầu
    const titleCase = (str) => {
        var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalizedStr
    }

    const [data, setData] = useState(value)

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
        const value = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
        setData(value)
    }

    useEffect(() => {
        setData(value);
    }, [value])

    return (
        <>
            <div className={
                submitCount >= 1 && valuesError === ""
                    || submitCount >= 1 && showError === "error"
                    ? "text-danger mb-3" : "mb-3"
            }>
                <div className="form-floating">
                    <Input
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
                        invalid={
                            submitCount >= 1 && valuesError === ""
                                || submitCount >= 1 && showError === "error"
                                ? true : false
                        }
                    />
                    <label>{titleCase(label)}<span className="required">*</span></label>
                    {
                        submitCount >= 1 && valuesError === "" ? <FormFeedback>Vui lòng nhập trường này</FormFeedback> : null
                    }
                    {
                        submitCount >= 1 && showError === "error" ? <FormFeedback>Vui lòng nhập tên kèm khoảng trắng ở giữa</FormFeedback> : null
                    }
                </div>
            </div>
        </>
    );
}

export default InputFieldArray;