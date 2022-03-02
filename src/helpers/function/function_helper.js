import moment from "moment"
const titleCase = (str) => {
    var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr
}

const formatDate = (datetime) => {
    return moment(new Date(datetime)).format('DD/MM/YYYY HH:mm')
}

const getDate = (datetime, format = "", resultFormat = "") => {
    var day, month, year, date = '', result = ''
    if (format != "") {  //Đưa về định dạng chuẩn
        day = getDay(datetime, format)
        month = getMonth(datetime, format)
        year = getYear(datetime, format)
        date = new Date(year, month, day);
    } else {  //datetime đúng định dạng chuẩn
        date = new Date(datetime);
    }
    if (resultFormat != "") {
        result = moment(date).format(resultFormat)
    } else {
        result = moment(date).format('DD/MM/YYYY')
    }
    return result
}

const getDay = (datetime, format = "") => {
    if (format != "") {
        return moment(datetime, format).date()
    } else {
        return moment(new Date(datetime)).date()
    }
}

const getMonth = (datetime, format = '') => {
    if (format != "") {
        return moment(datetime, format).month()
    } else {
        return moment(new Date(datetime)).month()
    }
}

const getYear = (datetime, format = '') => {
    if (format != "") {
        return moment(datetime, format).year()
    } else {
        return moment(new Date(datetime)).year()
    }
}

const getHours = (datetime, format = '') => {
    if (format != "") {
        return moment(datetime, format).format('HH:mm')
    } else {
        return moment(new Date(datetime)).format('HH:mm')
    }
}

const compareDate = (datetime1, datetime2, format) => {
    var message = '='
    var date1 = moment(datetime1, format).date()
    var month1 = moment(datetime1, format).month()
    var year1 = moment(datetime1, format).year()
    var date2 = moment(datetime2, format).date()
    var month2 = moment(datetime2, format).month()
    var year2 = moment(datetime2, format).year()
    var newDate1 = moment(new Date(year1, month1, date1)).format('YYYY-MM-DD')
    var newDate2 = moment(new Date(year2, month2, date2)).format('YYYY-MM-DD')
    newDate1 < newDate2 ? message = '<' : (newDate1 > newDate2 ? message = '>' : message = '=')
    return message
}

const validateSelect = (name, data, error, funcShowError) => {
    var invalid = false;
    if (data[name] === 0 || data[name] === "") {
        funcShowError(true)
        invalid = true
    }
    return invalid
}

const validateSelectNguoiLon = (name1, name2, data, funcShowError) => {
    var invalid = false;
    if (data[name2] > data[name1]) {
        funcShowError(true)
        invalid = true
    }
    return invalid
}

const validateTotalPerSon = (name1, name2, data, funcShowError) => {
    var invalid = false;
    if (data[name2] + data[name1] > 10) {
        funcShowError(true)
        invalid = true
    }
    return invalid
}

const validateDateTime = (name, error, funcShowError) => {
    var invalid = false;
    if (error[name] !== "") {
        funcShowError(true)
        invalid = true
    }
    return invalid
}

const updateNgayDiHople = (ngay_di, format, setParams) => {
    //update 00:00:00  ngày hôm sau
    var date = moment(ngay_di, format).date()
    var month = moment(ngay_di, format).month()
    var year = moment(ngay_di, format).year()
    var newDate = moment(new Date(year, month, date, 0, 0, 0)).format('DD-MM-YYYY HH:ss:mm')
    setParams(preState => ({ ...preState, ['ngay_di']: newDate }))
}

const sumValue = array => array.reduce((a, b) => a + b, 0)
const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

const getNameSeat = (name) => {
    var nameSeat = "";
    if (name !== "") {
        //cắt chuỗi với ký tữ -
        const arString = name.split('-');
        // lấy phần tử cuối 
        nameSeat = arString.slice(-1)[0];
    }
    return nameSeat;
}

const updateTTHK = (thongTin, thongTinLienHe) => {
    var data = {
        danh_xung: thongTin.danh_xung,
        ho: thongTin.ho,
        ten: thongTin.ten,
        ngay_sinh: thongTin.ngay_sinh === "" ? "" : moment(thongTin.ngay_sinh).format("DD-MM-YYYY"),
        quoc_tich: thongTin.quoc_tich,
        thanh_pho: thongTinLienHe.thanh_pho_lien_he,
        quoc_gia: thongTinLienHe.khu_vuc_lien_he,
        dien_thoai: thongTinLienHe.sdt_lien_he,
        email: thongTinLienHe.email_lien_he,
        dia_chi: thongTinLienHe.dia_chi_lien_he,
        em_be: [],
    }
    return data
}

const updateTTHKTreEm = (thongTin, thongTinLienHe) => {
    var data = {
        danh_xung: thongTin.danh_xung,
        ho: thongTin.ho,
        ten: thongTin.ten,
        ngay_sinh: thongTin.ngay_sinh === "" ? "" : moment(thongTin.ngay_sinh).format("DD-MM-YYYY"),
        quoc_tich: thongTin.quoc_tich,
        thanh_pho: thongTinLienHe.thanh_pho_lien_he,
        quoc_gia: thongTinLienHe.khu_vuc_lien_he,
        dien_thoai: thongTinLienHe.sdt_lien_he,
        email: thongTinLienHe.email_lien_he,
        dia_chi: thongTinLienHe.dia_chi_lien_he,
        em_be: [],
    }
    return data
}

const createDataHanhKhachCoEmBe = (arr, dataForm) => {
    let id = 0
    if (dataForm && dataForm.length > 0) {
        dataForm.map((value) => {
            id = value.nguoi_di_cung
            arr[id]["thong_tin_hanh_khach"].em_be.push(
                {
                    danh_xung: value.danh_xung,
                    ho: value.ho,
                    ten: value.ten,
                    ngay_sinh: moment(value.ngay_sinh).format("DD-MM-YYYY"),
                }
            )
        })
    }
    return arr
}

const createData = (dataNguoiLon, dataTreEm, dataChuyenBay) => {
    let arr = []
    dataNguoiLon.map((value, index) => {
        arr.push({
            ma_dat_cho: dataChuyenBay.ma_dat_cho ? dataChuyenBay.ma_dat_cho : null,
            hanh_khach_id: index + 1
        })
    })
    dataTreEm.map((value) => {
        arr.push({
            ma_dat_cho: dataChuyenBay.ma_dat_cho ? dataChuyenBay.ma_dat_cho : null,
            hanh_khach_id: dataNguoiLon.length + 1
        })
    })
    return arr
}

const getHoTen = (hoTen) => {
    let data = { ho: "", ten: "" }
    if (hoTen !== "") {
        const arString = hoTen.split(' ');
        let arrHo = []
        for (let i = 0; i < arString.length - 1; i++) {
            arrHo.push(arString[i])
        }
        data = { ho: arrHo.join(' '), ten: arString.slice(-1)[0] }
    }
    return data
}

export {
    titleCase, getDay, getMonth, getYear,
    formatDate, getDate, getHours, compareDate,
    validateSelect, validateDateTime, updateNgayDiHople,
    sumValue, moneyFormat, validateSelectNguoiLon,
    validateTotalPerSon, getNameSeat, updateTTHK,
    updateTTHKTreEm, createDataHanhKhachCoEmBe, createData,
    getHoTen
}