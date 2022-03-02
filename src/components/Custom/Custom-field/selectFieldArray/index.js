import { ErrorMessage } from 'formik';
import { titleCase } from 'helpers/function/function_helper';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { FormFeedback } from 'reactstrap';

SelectFieldArray.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};
SelectFieldArray.defaultProps = {
    label: '',
    placeholder: '',
    options: null,
}

function SelectFieldArray(props) {
    const { field, form, label, placeholder, options, smallWidth, error, NameProps, index, nameError, touched, values, submitCount } = props;
    const { name, value } = field;

    const valuesError = values && values[NameProps] && values[NameProps][index] && values[NameProps][index][nameError];
    const showError = error && error[NameProps] && error[NameProps][index] && error[NameProps][index][nameError];
    const touch = touched && touched[NameProps] && touched[NameProps][index] && touched[NameProps][index][nameError];

    const [smallSize, setSmallSize] = useState(true);
    const { ValueContainer, Placeholder } = components;
    const CustomValueContainer = ({ children, ...props }) => {
        return (
            <ValueContainer {...props}>
                <Placeholder {...props} isFocused={props.isFocused}>
                    {props.selectProps.placeholder}
                </Placeholder>
                {React.Children.map(children, child =>
                    child && child.type !== Placeholder ? child : null
                )}

            </ValueContainer>
        );
    };

    //lấy ra value selected khi edit
    const selectedOption = options && options.find(option => option.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    const customStyle = {
        container: (provided, state) => ({
            ...provided,
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: smallSize === false ? "1.5rem 0.5rem 0.5em 0.5em !important" : "0.5rem 0rem 0.5em 0.5em",
            fontWeight: 500
        }),
        placeholder: (provided, state) => ({
            ...provided,
            position: "absolute",
            fontWeight: 500,
            top: state.hasValue || state.selectProps.inputValue ? (smallWidth !== 'resize' ? 10 : 14) : "50%",
            left: state.hasValue || state.selectProps.inputValue ? 8 : null,
            opacity: state.hasValue || state.selectProps.inputValue ? 0.85 : null,
            fontSize: state.hasValue || state.selectProps.inputValue ? "0.7rem" : null,
            transition: "top 0.1s, font-size 0.1s"
        }),
        singleValue: (provided, state) => {
            const padding = "10px 0 0 0"
            const marginLeft = smallWidth !== 'resize' ? 2 : 4
            return { ...provided, padding, marginLeft };
        },
        indicatorsContainer: (provided, state) => {
            const right = 0
            return { ...provided, right };
        },
        dropdownIndicator: (provided, state) => {
            const display = "none"
            return { ...provided, display };
        },
        clearIndicator: (provided, state) => {
        }
    }

    useEffect(() => {
        smallWidth === 'resize' ? setSmallSize(false) : null
    }, [])

    return (
        <div className="mb-3">
            <div className="form-floating">
                <Select
                    id={name}
                    className={submitCount >= 1 && valuesError === "" ? 'is-invalid has-error' : ''}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}
                    options={options}
                    placeholder={placeholder ? placeholder : "Chọn"}
                    isRequired
                    styles={customStyle}
                    noOptionsMessage={() => 'Không tìm thấy dữ liệu.'}
                    components={{ ValueContainer: CustomValueContainer }}
                />
                {submitCount >= 1 && valuesError === "" && <FormFeedback>{showError}</FormFeedback>}
            </div>
        </div>
    );
}

export default SelectFieldArray;