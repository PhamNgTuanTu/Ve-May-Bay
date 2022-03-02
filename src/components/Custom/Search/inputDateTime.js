import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from "react"
import moment from "moment"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import DateTimePicker from 'react-datetime-picker'
import vi from 'date-fns/locale/vi'
// import { compareDate } from "./../../helpers/function/function_helper"
registerLocale('vi', vi)

InputDateTime.propTypes = {
  formatDateTime: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};
InputDateTime.defaultProps = {
  formatDateTime: "dd-MM-yyyy",
  label: "",
  name: "",
}

function InputDateTime(props) {
  const { formatDateTime, label, name, onSetParams, defaultDay } = props;
  const [value, setValue] = useState();

  const onChangeDate = (value) => {
    var format = "DD-MM-YYYY"
    var valueFormat = moment(value).format(format)
    setValue(value)
    onSetParams(preState => (
      {
        ...preState,
        [name]: valueFormat,
        ['trang']: 1
      }
    ))
  }

  useEffect(()=> {
    if(defaultDay) {
       onSetParams(preState => (
        {
          ...preState,
          [name]: moment(new Date()).format("DD-MM-YYYY"),
          ['trang']: 1
        }
      ))
      setValue(new Date())
    } else {
      onSetParams(preState => (
        {
          ...preState,
          [name]: [],
          ['trang']: 1
        }
      ))
      setValue(null)
    }
  },[defaultDay])

  const titleCase = (str) => {
    var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr
  }
  return (
    <div>
      <label className="control-label cursor-pointer">
        {titleCase(label)}
      </label>
      <div className="filter-datetime">
        <DateTimePicker
          onChange={onChangeDate}
          value={value}
          format={formatDateTime}
          calendarIcon={null}
          className="filter-datetime__input"
        />
      </div>
    </div>
  );
}

export default InputDateTime;