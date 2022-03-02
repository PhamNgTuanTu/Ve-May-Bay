import PropTypes from "prop-types"
import React from "react"
import ReactTagInput from "../../Custom/react-tag-input"
import "../../Custom/react-tag-input/index.css"

const InputFilter = props => {
  const label = props.label
  const inputName = props.name
  const inputValues = props.values
  const setParams = props.onChange
  const placeholder = props.placeholder

  const handleChange = (value) => {
    const array = [];
    for (let i = 0; i < value.length; i++) {
      const result = String(value[i]).trim();
      array.push(result)
    }
    setParams(preState => (
      {
        ...preState,
        [inputName]: array !== '' ? array : value,
        ['trang']: 1
      }
    ))
  }

  const titleCase = (str) => {
    var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr
  }

  return (
    <React.Fragment>
      <label className="control-label cursor-pointer">
        {titleCase(label)}
      </label>
      <div className="fix-overflow">
        <ReactTagInput
          tags={inputValues}
          placeholder={titleCase(placeholder)}
          editable={true}
          readOnly={false}
          removeOnBackspace={true}
          onChange={
            (item) => handleChange(item)
          }
        />
      </div>
    </React.Fragment>
  )
}

InputFilter.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputFilter
