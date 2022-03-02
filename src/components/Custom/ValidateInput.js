import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import {
//   validTTHKForm
// } from "./../../store/actions"
import _ from 'lodash';

const ValidateInput = props => {
  const label = props.label
  const validate = props.validate
  const validator = props.validator
  const maxLength = props.maxLength
  const inputName = props.name
  const value = props.value
  const setValue = props.onSetValue
  const type = props.type
  const index = props.index
  const showErrorProp = props.showError
  const dispatch = useDispatch()
  const [error, setError] = useState("Vui lòng nhập " + label)
  const [showError, setShowError] = useState(false)
  const [indexArr, setIndexArr] = useState(-1)
  const [data, setData] = useState("")
  const [messageEr, setMessageEr] = useState("Vui lòng nhập trường này")
  const ref = useRef("");
  let { reSetForm, storeShowErrors } = useSelector(state => ({
    reSetForm: state.DatVe.resetForm,
    storeShowErrors: state.DatVe.showErrors,
  }))

  const onChangeText = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var message = "";
    validator.message(name, value, validate);
    message = validator.errorMessages[name]; //valid -> null
    message !== null ? setShowError(true) : setShowError(false)
    message !== null ? null : message = ""
    message === "Vui lòng nhập " ? message = message + label : null
    setData(value);
    setError(message);
    debounceUpdateValue(value)
  }

  const titleCase = (str) => {
    var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr
  }

  const updateValue = (data) => {
    if (indexArr >= 0) {
      let markers = [...value]
      markers[indexArr] = { ...markers[indexArr], [inputName]: data };
      setValue(markers)
      setValue ? setValue(markers) : null
    } else {
      setValue ? setValue(preState => ({ ...preState, [inputName]: data })) : null
    }
  }


  const debounceUpdateValue = useCallback(_.debounce((data) => {
    updateValue(data)
  }, 1000), [])

  // function handleBlur() {
  //   debounceUpdateValue(data)
  // }

  useEffect(() => {
    index >= 0 ? setIndexArr(index) : null
  }, [index])

  useEffect(() => {
    setData("")
    setValue(preState => ({ ...preState, [inputName]: "" }))
    setShowError(storeShowErrors)
  }, [reSetForm])


  const isNumberKey = (evt) => {
    const value = evt.target.value;
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (!(charCode > 31 && (charCode < 48 || charCode > 57))) {
      setData(value);
      Number(data.charAt(0)) === 8 ? setMaxLength(11) : setMaxLength(10)
    } else {
      evt.preventDefault();
    }
  }

  useEffect(() => {
    storeShowErrors && data === "" ? setShowError(true) : setShowError(false)
  }, [storeShowErrors])


  // useEffect(() => {
  //   if (showError === true && error !== "") {
  //     dispatch(validTTHKForm(false))
  //   }
  // }, [showError, error])


  return (
    <React.Fragment>
      <div className={showError ? "text-danger mb-3" : "mb-3"}>
        <div className="form-floating">
          <input
            // autoComplete="off"
            ref={ref}
            // onBlur={handleBlur}
            type="text"
            name={inputName}
            value={data}
            placeholder={inputName}
            maxLength={maxLength}
            onChange={onChangeText}
            className={showError ? "invalid-input form-control" : "form-control"}
            onKeyPress={type === "number" ? isNumberKey : null} />
          <label>{titleCase(label)}<span className="required">*</span></label>
        </div>
        {showError && <div className="validate-error">{messageEr}</div>}
      </div>
    </React.Fragment>
  )
}

ValidateInput.propTypes = {
  validator: PropTypes.any,
  validate: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.any,
  index: PropTypes.number,
  maxLength: PropTypes.number,
  type: PropTypes.string,
  showError: PropTypes.bool
}

export default ValidateInput