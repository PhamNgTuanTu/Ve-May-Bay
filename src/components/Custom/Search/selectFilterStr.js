import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import Select from "react-select"
import makeAnimated from "react-select/animated"
const animatedComponents = makeAnimated()

const SelectFilterStr = props => {
  const label = props.label
  const selectName = props.name
  let options = props.options
  const setParams = props.onChange
  const placeholder = props.placeholder
  const isMulti = props.isMulti
  const setSelectRef = props.onSetRef
  const innerRef = useRef()

  // covert sang dạng value, label react-select
  // options = options && options.map(item => {
  //   return {
  //     value: item.id,
  //     label: item.ten
  //   };
  // });
  useEffect(() => {
    setSelectRef(innerRef)
  }, [])

  return (
    <React.Fragment>
      <div>
        <label className="control-label cursor-pointer">
          {label}
        </label>
        <Select
          ref={innerRef}
          isMulti={isMulti}
          placeholder={placeholder}
          onChange={(items) => {
            let array = []
            let arrayValue = []
            if (items && items.length > 0) {
              items.map((item, index) => {
                array.push(item.label.toString());
                arrayValue.push(item.value.toString());
                return array
              })
            }
            setParams(preState => ({ ...preState, [selectName]: arrayValue, ['trang']: 1 }))
          }}
          options={options}
          classNamePrefix="select2-selection"
          components={animatedComponents}
        />
      </div>
    </React.Fragment>
  )
}

SelectFilterStr.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isMulti: PropTypes.bool,
  onSetRef: PropTypes.func
}

export default SelectFilterStr
