import moment from "moment"
import PropTypes from "prop-types"
import React, { useCallback, useEffect, useState } from "react"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useDispatch } from "react-redux"
import { Col, Row } from "reactstrap"
import { layDSChuyenBay } from "../../store/actions"
import { compareDate, titleCase } from "./../../helpers/function/function_helper"

const SliderCalendar = props => {
  const { params, setDisabledBtn, dataParam, debounce, name, formatValue } = props;
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [fullText, setfullText] = useState("")
  const [currentDate, setCurrentDate] = useState(new Date().getDate())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [daysInMonth, setDaysInMonth] = useState(new Date(currentYear, currentMonth + 1, 0).getDate())
  const [daysPreMonth, setDaysPreMonth] = useState(new Date(currentYear, currentMonth, 0).getDate())
  const [innerValue, setInnerValue] = useState(moment(new Date()).format("DD-MM-YYYY"))
  const [nextAction, setNextAction] = useState(null)
  const [valueDateNext, setValueDateNext] = useState(null)
  const [valueDatePre, setValueDatePre] = useState(null)
  const [status, setStatus] = useState(false)

  const calandarItems = [
    <div className="item-calendar-active bg-primary bg-soft">
      <strong className="text-primary">{data[0]}</strong>
    </div>,
    <div className="item-calendar">
      <span className="">{data[1]}</span>
    </div>,
    <div className="item-calendar">
      <span className="">{data[2]}</span>
    </div>,
    <div className="item-calendar">
      <span className="">{data[3]}</span>
    </div>,
    <div className="item-calendar">
      <span className="">{data[4]}</span>
    </div>,
    <div className="item-calendar">
      <span className="">{data[5]}</span>
    </div>,
    <div className="item-calendar">
      <span className="">{data[6]}</span>
    </div>,
  ]

  const responsive = {
    0: { items: 1 },
    146: { items: 2 },
    292: { items: 3 },
    438: { items: 4 },
    584: { items: 5 },
    730: { items: 6 },
    849: { items: 7 },
  }

  const updateSlider = () => {
    var monthIndex = currentMonth + 1
    var itemIndex, itemNext1, itemNext2, itemNext3, itemPre1, itemPre2, itemPre3 = {}
    itemIndex = updateItemIndex(currentDate, monthIndex)
    itemPre1 = updateItemPre(itemIndex.day, monthIndex, daysPreMonth, currentYear)
    itemPre2 = updateItemPre(itemPre1.day, itemPre1.month, daysPreMonth, itemPre1.year)
    itemPre3 = updateItemPre(itemPre2.day, itemPre2.month, daysPreMonth, itemPre2.year)
    itemNext1 = updateItemNext(itemIndex.day, monthIndex, daysInMonth, currentYear)
    itemNext2 = updateItemNext(itemNext1.day, itemNext1.month, daysInMonth, itemNext1.year)
    itemNext3 = updateItemNext(itemNext2.day, itemNext2.month, daysInMonth, itemNext2.year)
    setData([itemIndex.text,
    itemNext1.text, itemNext2.text, itemNext3.text,
    itemPre3.text, itemPre2.text, itemPre1.text])
    setfullText(itemIndex.full_text_uppercase)
    debounce > 0 ? debounceSetInnerValue(itemIndex.date) : setInnerValue(itemIndex.date)
  }

  const updateItemIndex = (currentDate, currentMonth) => {
    var date, dayInWeek, textItem, fullText, dayUpperCase, fullTextUpperCase, month, monthName = ""
    var day = currentDate
    month = getMonth(currentMonth)
    monthName = getMonth(currentMonth, true, true)

    dayInWeek = getWeekDay(day, month, currentYear)
    dayUpperCase = getWeekDay(day, month, currentYear, true)
    textItem = dayInWeek + ", " + day + "." + month
    fullText = dayInWeek + ", " + day + "." + month + " " + currentYear
    fullTextUpperCase = dayUpperCase + ", " + day + "." + monthName + " " + currentYear
    date = day + "-" + month + "-" + currentYear
    return {
      day: day,
      date: date,
      text: textItem,
      full_text: fullText,
      full_text_uppercase: fullTextUpperCase
    }
  }

  const updateItemPre = (currentDate, currentMonth, daysPreMonth, currentYear) => {
    var day = currentDate - 1
    var month = currentMonth
    var dayInWeek, textItem = ""
    if (day <= 0) {
      day = daysPreMonth
      currentMonth - 1 === 0 ? month = 12 : month = currentMonth - 1
    }
    dayInWeek = getWeekDay(day, month, currentYear)
    textItem = dayInWeek + ", " + day + "." + getMonth(month)
    return {
      day: day,
      month: month,
      year: currentYear,
      text: textItem
    }
  }

  const updateItemNext = (currentDate, currentMonth, daysInMonth, currentYear) => {
    var day = 0
    var month = currentMonth
    var dayInWeek, textItem = ""
    if (currentDate < daysInMonth) {
      day = currentDate + 1
      month = currentMonth
    } else {
      day = 1
      currentMonth + 1 > 12 ? month = 1 : month = currentMonth + 1
    }
    dayInWeek = getWeekDay(day, month, currentYear)
    textItem = dayInWeek + ", " + day + "." + getMonth(month)
    return {
      day: day,
      month: month,
      year: currentYear,
      text: textItem
    }
  }

  const getWeekDay = (day, month, year, uppercase = false) => {
    var listOfDay = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"]
    var dayInWeek = ""
    var index = moment(year + "-" + month + "-" + day).weekday()
    Number.isNaN(index) ? index = 0 : null
    dayInWeek = uppercase ? listOfDay[index] : titleCase(listOfDay[index].toLowerCase())
    return dayInWeek
  }

  const getMonth = (currentMonth, name = false, uppercase = false) => {
    var month = currentMonth
    var listOfMonths = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"]
    var monthUpdate = ""
    if (name === true) {
      monthUpdate = listOfMonths[currentMonth - 1]
      if (!uppercase) {
        monthUpdate = monthUpdate.toLowerCase()
      }
    } else {
      monthUpdate = (currentMonth < 10 ? "0" : "") + currentMonth
    }
    return monthUpdate
  }

  const updateDatetime = (currentMonth, currentYear, next = false) => {
    var month = currentMonth
    var newYear = currentYear
    if (next === true) {
      if (month == 11) {
        month = 0
        newYear = currentYear + 1
      } else {
        month = month + 1
      }
    } else {
      month = month - 1
      if (month < 0) {
        month = 11
        newYear = currentYear - 1
      }
    }
    setCurrentMonth(month)
    setCurrentYear(newYear)
    setDaysInMonth(new Date(newYear, month + 1, 0).getDate())
    setDaysPreMonth(new Date(newYear, month, 0).getDate())
  }

  const debounceSetInnerValue = useCallback(_.debounce((date) => {
    setInnerValue(date)
  }, debounce), [])

  const slideNext = () => {
    setDisabledBtn(true)
    setCurrentDate(currentDate + 1)
    setNextAction(true)
    var data = []
    data = {
      ...dataParam,
      [name]: moment(valueDateNext, 'DD-MM-YYYY h:mm:ss a').format("DD-MM-YYYY")
    }
    dispatch(layDSChuyenBay(data))
  }

  const slidePrev = (e) => {
    if (status) {
      e.preventDefault();
    } else {
      setDisabledBtn(true)
      setCurrentDate(currentDate - 1)
      setNextAction(false)
      var data = []
      data = {
        ...dataParam,
        [name]: moment(valueDatePre, 'DD-MM-YYYY h:mm:ss a').format("DD-MM-YYYY")
      }
      dispatch(layDSChuyenBay(data))
    }
  }

  useEffect(() => {
    //cắt chuỗi với khoảng trắng
    const arString = params.split(' ');
    // lấy phần tử đầu
    const arString1 = arString.slice(0, 1)[0];
    // cắt chuỗi với -
    const arStringResult = arString1.split('-');

    setCurrentDate(Number(arStringResult[0]))
    setCurrentMonth(Number(arStringResult[1]) - 1)
    setCurrentYear(Number(arStringResult[2]))
  }, [dataParam])

  useEffect(() => {
    var curentFormat = 'DD-MM-YYYY HH:mm:ss'
    var today = new Date()
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    if (currentDate > daysInMonth && nextAction === true) {
      setCurrentDate(1)
      updateDatetime(currentMonth, currentYear, nextAction)
    }
    if (currentDate === 0 && nextAction === false) {
      setCurrentDate(daysPreMonth)
      updateDatetime(currentMonth, currentYear)
    }

    var dayNext = moment(new Date(currentYear, currentMonth, (currentDate + 1), hour, minute, second)).format(formatValue)
    var dayPre = moment(new Date(currentYear, currentMonth, (currentDate - 1), hour, minute, second)).format(formatValue)
    var dayCurent = moment(new Date(currentYear, currentMonth, (currentDate), hour, minute, second)).format(formatValue)

    if (compareDate(today, dayCurent, curentFormat) === "<") {
      setStatus(false)
    } else if (compareDate(today, dayCurent, curentFormat) === ">") {
      setStatus(true)
    } else {
      setStatus(true)
    }

    setValueDateNext(dayNext)
    setValueDatePre(dayPre)
    updateSlider()
    return () => {
      updateSlider()
    }
  }, [currentDate])

  return (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <AliceCarousel
            responsive={responsive}
            items={calandarItems}
            infinite={true}
            mouseTracking={false}
            disableDotsControls={true}
            disableButtonsControls
          />
          <div className="calendar-info bg-primary bg-soft"><strong className="text-primary title-info-calandar" >{fullText}</strong></div>
          <i onClick={slidePrev} style={status ? { cursor: "not-allowed" } : null} className="fas fa-chevron-left calendar-move prev-icon text-secondary"></i>
          <i onClick={slideNext} className="fas fa-chevron-right calendar-move next-icon text-secondary"></i>
        </Col>
      </Row>
    </React.Fragment>
  )
}

SliderCalendar.propTypes = {
  name: PropTypes.string,
  onSetValue: PropTypes.func,
  defaultValue: PropTypes.string,
  formatValue: PropTypes.any,
  debounce: PropTypes.number
}

export default SliderCalendar