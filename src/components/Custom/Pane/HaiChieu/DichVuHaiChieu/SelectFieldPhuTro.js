import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { saveDataPhuTroChuyenVeVj, tinhPhiVeChonGhe } from "store/actions";

const SelectFieldPhuTro = props => {
  const { name, placeholder, options, smallWidth, loaiHanhKhach, isClearable, id, value } = props;
  const { paramsPhiVe, arrPhuTroHaiChieu } = useSelector(state => ({
    paramsPhiVe: state.DatTimVe.paramsPhiVe,
    arrPhuTroHaiChieu: state.DatTimVe.arrPhuTroHaiChieu,
  }))
  const dispatch = useDispatch()
  const [smallSize, setSmallSize] = useState(true)
  const [selectedOption, setSelectedOption] = useState("");
  const { ValueContainer, Placeholder } = components

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
    },
    menuPortal: provided => ({ ...provided, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: 9999 })
  }

  const onChangeSelect = (option) => {
    const data = option ? option.data : ""
    const value = option ? option.value : ""
    let arr = {
      ...arrPhuTroHaiChieu,
      [loaiHanhKhach]: {
        ...arrPhuTroHaiChieu[loaiHanhKhach],
        [`${name}-${id}`]: {
          ma_dich_vu: value,
          arr_phi: data,
          id_hanh_khach: id
        }
      }
    }
    findValue(value)
    tinhPhiKhiChonGhe(paramsPhiVe, arr)
    dispatch(saveDataPhuTroChuyenVeVj(arr))
  }

  const findValue = (value) => {
    var valueChoose = options && options.find(option => option.value === value)
    setSelectedOption(valueChoose ? valueChoose : "")
  }

  useEffect(() => {
    if (value) {
      findValue(value.ma_dich_vu)
    }
  }, [value, options])

  const getArrPhi = (arrPerSon) => {
    let arr = []
    let result = []
    Object.keys(arrPerSon).map(function (key, index) {
      arr.push({
        id: arrPerSon[key].id_hanh_khach,
        arr_phi: arrPerSon[key].arr_phi,
      })
    });
    if (JSON.stringify(arr) !== "[]") {
      const objIds = arr.reduce((a, { id, arr_phi }) => {
        a[id] = a[id] || { id, arr_phi: [] }
        return { ...a, ...{ [id]: { id, arr_phi: a[id].arr_phi.concat(arr_phi) } } }
      }, {})
      result = Object.values(objIds)
    }
    return result
  }

  const convertArr = (data, paramsPhi, dinhDanh) => {
    let markers = [...paramsPhi.hai_chieu[dinhDanh]]
    if (JSON.stringify(data) !== "[]") {
      data.map((val, i) => {
        markers[val.id].phu_phi = val.arr_phi
      })
    }
    markers.map((val, i) => {
      if (val.phu_phi) {
        val.phu_phi.map((x) => {
          x === "" ? delete val.phu_phi : null
        })
      }
    })
    return markers
  }

  const tinhPhiKhiChonGhe = (paramsPhi, paramPhuTro) => {
    let arrNguoiLon = { ...paramPhuTro.hanhKhachNguoiLon }, arrTreEm = { ...paramPhuTro.hanhKhachTreEm };
    let arrPhiNguoiLon = getArrPhi(arrNguoiLon)
    let arrPhiTreEm = getArrPhi(arrTreEm)
    let arrNguoiLonConVert = convertArr(arrPhiNguoiLon, paramsPhi, "nguoi_lon")
    let arrTreEmConVert = convertArr(arrPhiTreEm, paramsPhi, "tre_em")
    let arrResult = {
      ...paramsPhi,
      hai_chieu: {
        ...paramsPhi.hai_chieu,
        nguoi_lon: arrNguoiLonConVert,
        tre_em: arrTreEmConVert,
      }
    }
    dispatch(tinhPhiVeChonGhe(arrResult))
  }

  useEffect(() => {
    smallWidth === 'resize' ? setSmallSize(false) : null
  }, [])

  return (
    <div className="text-danger mb-3">
      <div className="form-floating">
        <Select
          menuPortalTarget={document.body}
          menuPosition={'fixed'}
          blurInputOnSelect={true}
          value={selectedOption}
          options={options}
          name={name}
          onChange={onChangeSelect}
          isRequired
          placeholder={placeholder ? `Vui lòng chọn ${placeholder}` : "Chọn"}
          components={{ ValueContainer: CustomValueContainer }}
          styles={customStyle}
          isClearable={isClearable ? isClearable : false}
          noOptionsMessage={() => 'Không tìm thấy dữ liệu.'}
        />
      </div>
    </div>
  )
}

SelectFieldPhuTro.propTypes = {
  multiple: PropTypes.bool,
  smallWidth: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  error: PropTypes.string,
  showError: PropTypes.bool,
  onSetValue: PropTypes.func,
  onSetText: PropTypes.func,
  onSetError: PropTypes.func,
  onSetShowError: PropTypes.func,
  value: PropTypes.any,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  clearBtn: PropTypes.bool,
  index: PropTypes.number, //vị trí value -> array[index].value
  debounce: PropTypes.number
}

export default SelectFieldPhuTro
