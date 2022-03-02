import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { FormFeedback } from 'reactstrap';

SelectFieldDanhXung.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool,
};
SelectFieldDanhXung.defaultProps = {
    label: '',
    placeholder: '',
    options: null,
    disabled: false,
}

function SelectFieldDanhXung(props) {
    const { field, form, label, placeholder, options, smallWidth, disabled, defaultValues } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const [smallSize, setSmallSize] = useState(true);

    const { ValueContainer, Placeholder } = components;
    const CustomValueContainer = ({ children, ...props }) => {
        return (
            <ValueContainer {...props}>
                <Placeholder {...props} isFocused={props.isFocused}>
                    {props.selectProps.placeholder}
                    <span className="icon-required">*</span>
                </Placeholder>
                {React.Children.map(children, child =>
                    child && child.type !== Placeholder ? child : null
                )}

            </ValueContainer>
        );
    };

    const [selectedOption, setSelectedOption] = useState(options && options.find(option => option.value === value))

    useEffect(() => {
        if (defaultValues) {
            const select = options && options.find(option => option.value === defaultValues);
            setSelectedOption(select)
        }
    }, [defaultValues])

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
        option: (provided, state) => ({
            ...provided,
            color: '#000',
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
            transition: "top 0.1s, font-size 0.1s",
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
        },
        menuPortal: provided => ({ ...provided, zIndex: 9999 }),
        menu: provided => ({ ...provided, zIndex: 9999 })
    }


    useEffect(() => {
        smallWidth === 'resize' ? setSmallSize(false) : null
    }, [])

    return (
        <div className={showError ? "text-danger" : ""}>
            <div className="form-floating" style={{ minHeight: "60px" }}>
                <Select
                    menuPortalTarget={document.body}
                    menuPosition={'fixed'}
                    id={name}
                    className={showError ? 'is-invalid has-error' : ''}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}
                    options={options}
                    placeholder={placeholder ? placeholder : "Chọn"}
                    isRequired
                    isDisabled={disabled ? disabled : false}
                    styles={customStyle}
                    noOptionsMessage={() => 'Không tìm thấy dữ liệu.'}
                    components={{ ValueContainer: CustomValueContainer }}
                />
                <ErrorMessage name={name} component={FormFeedback} />
            </div>
        </div>
    );
}

export default SelectFieldDanhXung;