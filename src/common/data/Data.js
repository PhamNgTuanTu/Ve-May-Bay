const params = {
    "loai_ve": "mot_chieu",
    "loai_dinh_dang": 1,
    "diem_di": "SGN",
    "diem_den": "HAN",
    "ngay_di": "30-12-2021",
    "nguoi_lon": 2,
    "tre_em": 1,
    "em_be": 1
}

const data = {
    vna: {
        hang_cho_mot_chieu: [],
        hang_cho_hai_chieu: []
    },
    bamboo: {
        hang_cho_mot_chieu: [
            {
                ma: 'ECONOMYSAVERMAX',
                mo_ta: 'ECONOMYSAVERMAX'
            },
            {
                ma: 'ECONOMYSAVER',
                mo_ta: 'ECONOMYSAVER'
            },
            {
                ma: 'ECONOMYSMART',
                mo_ta: 'ECONOMYSMART'
            },
            {
                ma: 'ECONOMYFLEX',
                mo_ta: 'ECONOMYFLEX'
            }
        ],
        hang_cho_hai_chieu: []
    },
    vietjet: {
        hang_cho_mot_chieu: [
            {
                ma: 'SkyBoss',
                mo_ta: 'SkyBoss'
            },
            {
                ma: 'Eco',
                mo_ta: 'Eco'
            },
            {
                ma: 'Deluxe',
                mo_ta: 'Deluxe'
            }
        ],
        hang_cho_hai_chieu: []
    },
    mot_chieu: [
        {
            chang_bay: [
                {
                    ma_hang_bay: 'VJ',
                    ma_chuyen_bay: 'VJ162',
                    so_hieu_chuyen_bay: 162,
                    ngay_di: '13-12-2021 16:50:00',
                    ngay_den: '13-12-2021 19:00:00',
                    san_bay_di: {
                        ma_san_bay: 'SGN',
                        ten_san_bay: 'Ho Chi Minh'
                    },
                    san_bay_den: {
                        ma_san_bay: 'HAN',
                        ten_san_bay: 'Ha Noi'
                    },
                    logo: 'http://api.ags99.vn/assets/63c484fe-4e7c-11ec-90fd-0242ac120007_26-11-2021T12:47:49.jpg',
                    ten_hang_bay: 'Vietjet Airlines'
                }
            ],
            ma_du_lich: 'KthFU7X4iyUCm6BcvXdobJW¥QUXXbWvO7m4BNJh9icp4s8ESP95CRj5SYORnfkF6Qp0¥9ZK¥RfXUA¥fpeIKuAOpltyznj¥zjuC5wqP82IaCre0ƒ6hNVbU09pGkCm85zdnQbzQXlCol¥2dT8PlJLJcQlPtDPtbazW4CoJg1YVOBgo¥5eƒdsVompOZ3¥boi1zg1oQZ¥kXrJfVBJhQ4S2XZfuC637AZIdnMJOOKy6kEBeM=',
            so_diem_dung: 1,
            cap_thanh_pho: 'SGN-HAN',
            tong_so_gio_bay: '2:10',
            tuy_chon_gia_ve: [
                {
                    phi_ve: [
                        {
                            mota: 'T1 ECO',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 2985300,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 2790000,
                            khuyen_mai: 0,
                            so_tien_thue: 195300,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 195300
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'FA'
                        },
                        {
                            mota: 'INFANT CHARGE DOM',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: false,
                                em_be: true
                            },
                            tong_thanh_tien: 110000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 10000,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'VAT',
                                    so_tien: 10000
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IF'
                        },
                        {
                            mota: 'Airport Security',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 20000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 20000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Security CHD',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 10000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 10000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Tax Domestic',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 100000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'AirportTax Child Dom',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 50000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 50000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'MSIG Insurance One Way',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 1-3 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 4-10 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insuracne Roud Trip 11-30 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'Management Fee',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 96300,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 90000,
                            khuyen_mai: 0,
                            so_tien_thue: 6300,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 6300
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'MF'
                        }
                    ],
                    ma_dat_cho: 'e8KiFBWXxOVecWqzq7vGYDNuRP6dWqkOCuAm3rpBEqt2fqQh6m5bRVQ0F0bKs7NtaL3RnJcumc1RtPusKHanqLmQzpmb2ƒjvcUV8ƒZuXwkDZIGCntJvGFxCxqnEKgn8C0oNGz0SeFOa0FGW5B812ƒQTcqowFfxUTflh2P2DmhQJpi03CM5DZl4wzEUFBJ4BrkBd8H2wIRItSP6XVe4sJ7Zo2TAwe8MDLApbHjHwCo4iahkQO5lKhu3MOwUKcGV4hyYmmS8iHGmƒnbNuRSbl9wGvScXotTƒCSvM3dhl657WDx7S3Usmn8RZDgnJ7rCOHyYjt3AS5QxƒXpri0QEuK4WySaD4mxgixzvjjQHPj9v0UbViWmXQAcjXtiTeTe2gmk9LW0wwz87j12lKfdDJVLB67GzwLrnI3tAsW5y8¥k00VcmPmWSaCAh3I0zRf1poPF7J5qrMbrJ6FsbPH¥EuoinaF0¥6oEgUVJLMUeLnaFmmDXrqkxdJYo05lNkHyqGA1619OGJmaQ7Roc5iKuPMfgyw==',
                    ve_hop_le: {
                        is_hop_le: true,
                        is_ban_het: false
                    },
                    hang_cho: {
                        ma: 'Y',
                        mo_ta: 'Economy'
                    },
                    ma_dat_ve: {
                        ma: 'T',
                        mo_ta: null
                    },
                    hang_ve: {
                        ma: 'T1_ECO',
                        mo_ta: 'T1 ECO'
                    },
                    loai_ve: {
                        ma: 'Eco',
                        mo_ta: 'Eco'
                    },
                    so_ghe_trong: 230,
                    is_ma_khuyen_mai: false,
                    gia_tien_co_ban: {
                        gia_ve: 2790000,
                        thue: 211600,
                        phi_dich_vu: 370000,
                        tong_cong: 3371600,
                        tien_te: 'VND'
                    },
                    gia_tien: {
                        gia_ve: 5580000,
                        thue: 423200,
                        phi_dich_vu: 740000,
                        tong_cong: 6743200,
                        tien_te: 'VND'
                    }
                },
                {
                    phi_ve: [
                        {
                            mota: 'T1 DLX',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 3208930,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 2999000,
                            khuyen_mai: 0,
                            so_tien_thue: 209930,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 209930
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'FA'
                        },
                        {
                            mota: 'INFANT CHARGE DOM',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: false,
                                em_be: true
                            },
                            tong_thanh_tien: 110000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 10000,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'VAT',
                                    so_tien: 10000
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IF'
                        },
                        {
                            mota: 'Airport Security',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 20000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 20000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Security CHD',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 10000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 10000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Tax Domestic',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 100000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'AirportTax Child Dom',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 50000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 50000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'MSIG Insurance One Way',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 1-3 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 4-10 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insuracne Roud Trip 11-30 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'Management Fee',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 96300,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 90000,
                            khuyen_mai: 0,
                            so_tien_thue: 6300,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 6300
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'MF'
                        }
                    ],
                    ma_dat_cho: 'e8KiFBWXxOVecWqzq7vGYDNuRP6dWqkOCuAm3rpBEqt2fqQh6m5bRVQ0F0bKs7NtaL3RnJcumc1RtPusKHanqLmQzpmb2ƒjvcUV8ƒZuXwkDZIGCntJvGFxCxqnEKgn8CFpms3ULRDvXhejFVywER1Vu0KfxcEuLplq99DVAzX6VeVvHTE8f3vmFAy2Piw3ƒc8¥7lfGKNtxDfxRVI7IZcaD9LRGs4XLXbLZozR¥faYlV76GvCbGpCc23wWTcwHRjJ89IqaRu113aKTLGkAS3MbBfft5V1nxE5qApHeLQrknEy4h7xbq0vhPbcfƒ9fgcr5ngHnPY71CaGGTI1VSlkfCPF¥qdWj5e8TKbF8ghjxBz3hINKcNNYApzxvRF1BinOrLdsO6jw9ƒq971yFPVR7h8mjlxSxNliWjT0zOrU6AaXjchVmbghpRthmUDlEjNM2wJokRN6E6Frky8qBt0Ls¥WxaPoMMa¥Dƒd7YwhvJDMtZRmui¥H6VZQ5K7ƒ9bBYjK1EfAiDepjmJF8xr9eAgiHgmA==',
                    ve_hop_le: {
                        is_hop_le: true,
                        is_ban_het: false
                    },
                    hang_cho: {
                        ma: 'Y',
                        mo_ta: 'Economy'
                    },
                    ma_dat_ve: {
                        ma: 'T',
                        mo_ta: null
                    },
                    hang_ve: {
                        ma: 'T1_DLX',
                        mo_ta: 'T1 DLX'
                    },
                    loai_ve: {
                        ma: 'Deluxe',
                        mo_ta: 'Deluxe'
                    },
                    so_ghe_trong: 230,
                    is_ma_khuyen_mai: false,
                    gia_tien_co_ban: {
                        gia_ve: 2999000,
                        thue: 226230,
                        phi_dich_vu: 370000,
                        tong_cong: 3595230,
                        tien_te: 'VND'
                    },
                    gia_tien: {
                        gia_ve: 5998000,
                        thue: 452460,
                        phi_dich_vu: 740000,
                        tong_cong: 7190460,
                        tien_te: 'VND'
                    }
                }
            ],
            tuy_chon_gia_ve_mac_dinh: {
                phi_ve: [
                    {
                        mota: 'T1 ECO',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 2985300,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 2790000,
                        khuyen_mai: 0,
                        so_tien_thue: 195300,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 195300
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'FA'
                    },
                    {
                        mota: 'INFANT CHARGE DOM',
                        hanh_khach_ap_dung: {
                            tre_em: false,
                            nguoi_lon: false,
                            em_be: true
                        },
                        tong_thanh_tien: 110000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 100000,
                        khuyen_mai: 0,
                        so_tien_thue: 10000,
                        loai_thue_suat: [
                            {
                                ten_thue: 'VAT',
                                so_tien: 10000
                            },
                            {
                                ten_thue: '',
                                so_tien: 0
                            },
                            {
                                ten_thue: '',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IF'
                    },
                    {
                        mota: 'Airport Security',
                        hanh_khach_ap_dung: {
                            tre_em: false,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 20000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 20000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AS'
                    },
                    {
                        mota: 'Airport Security CHD',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: false,
                            em_be: false
                        },
                        tong_thanh_tien: 10000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 10000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AS'
                    },
                    {
                        mota: 'Airport Tax Domestic',
                        hanh_khach_ap_dung: {
                            tre_em: false,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 100000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 100000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AI'
                    },
                    {
                        mota: 'AirportTax Child Dom',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: false,
                            em_be: false
                        },
                        tong_thanh_tien: 50000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 50000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AI'
                    },
                    {
                        mota: 'MSIG Insurance One Way',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'MSIG Insurance Round Trip 1-3 days',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'MSIG Insurance Round Trip 4-10 days',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'MSIG Insuracne Roud Trip 11-30 days',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'Management Fee',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 96300,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 90000,
                        khuyen_mai: 0,
                        so_tien_thue: 6300,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 6300
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'MF'
                    }
                ],
                ma_dat_cho: 'e8KiFBWXxOVecWqzq7vGYDNuRP6dWqkOCuAm3rpBEqt2fqQh6m5bRVQ0F0bKs7NtaL3RnJcumc1RtPusKHanqLmQzpmb2ƒjvcUV8ƒZuXwkDZIGCntJvGFxCxqnEKgn8C0oNGz0SeFOa0FGW5B812ƒQTcqowFfxUTflh2P2DmhQJpi03CM5DZl4wzEUFBJ4BrkBd8H2wIRItSP6XVe4sJ7Zo2TAwe8MDLApbHjHwCo4iahkQO5lKhu3MOwUKcGV4hyYmmS8iHGmƒnbNuRSbl9wGvScXotTƒCSvM3dhl657WDx7S3Usmn8RZDgnJ7rCOHyYjt3AS5QxƒXpri0QEuK4WySaD4mxgixzvjjQHPj9v0UbViWmXQAcjXtiTeTe2gmk9LW0wwz87j12lKfdDJVLB67GzwLrnI3tAsW5y8¥k00VcmPmWSaCAh3I0zRf1poPF7J5qrMbrJ6FsbPH¥EuoinaF0¥6oEgUVJLMUeLnaFmmDXrqkxdJYo05lNkHyqGA1619OGJmaQ7Roc5iKuPMfgyw==',
                ve_hop_le: {
                    is_hop_le: true,
                    is_ban_het: false
                },
                hang_cho: {
                    ma: 'Y',
                    mo_ta: 'Economy'
                },
                ma_dat_ve: {
                    ma: 'T',
                    mo_ta: null
                },
                hang_ve: {
                    ma: 'T1_ECO',
                    mo_ta: 'T1 ECO'
                },
                loai_ve: {
                    ma: 'Eco',
                    mo_ta: 'Eco'
                },
                so_ghe_trong: 230,
                is_ma_khuyen_mai: false,
                gia_tien_co_ban: {
                    gia_ve: 2790000,
                    thue: 211600,
                    phi_dich_vu: 370000,
                    tong_cong: 3371600,
                    tien_te: 'VND'
                },
                gia_tien: {
                    gia_ve: 5580000,
                    thue: 423200,
                    phi_dich_vu: 740000,
                    tong_cong: 6743200,
                    tien_te: 'VND'
                }
            }
        },
        {
            chang_bay: [
                {
                    ma_hang_bay: 'VJ',
                    ma_chuyen_bay: 'VJ626',
                    so_hieu_chuyen_bay: 626,
                    ngay_di: '13-12-2021 17:25:00',
                    ngay_den: '13-12-2021 18:45:00',
                    san_bay_di: {
                        ma_san_bay: 'SGN',
                        ten_san_bay: 'Ho Chi Minh'
                    },
                    san_bay_den: {
                        ma_san_bay: 'DAD',
                        ten_san_bay: 'Da Nang'
                    },
                    logo: 'http://api.ags99.vn/assets/63c484fe-4e7c-11ec-90fd-0242ac120007_26-11-2021T12:47:49.jpg',
                    ten_hang_bay: 'Vietjet Airlines'
                },
                {
                    ma_hang_bay: 'VJ',
                    ma_chuyen_bay: 'VJ508',
                    so_hieu_chuyen_bay: 508,
                    ngay_di: '13-12-2021 20:50:00',
                    ngay_den: '13-12-2021 22:10:00',
                    san_bay_di: {
                        ma_san_bay: 'DAD',
                        ten_san_bay: 'Da Nang'
                    },
                    san_bay_den: {
                        ma_san_bay: 'HAN',
                        ten_san_bay: 'Ha Noi'
                    },
                    logo: 'http://api.ags99.vn/assets/63c484fe-4e7c-11ec-90fd-0242ac120007_26-11-2021T12:47:49.jpg',
                    ten_hang_bay: 'Vietjet Airlines'
                }
            ],
            ma_du_lich: 'KthFU7X4iyUCm6BcvXdobJW¥QUXXbWvO7m4BNJh9icp4s8ESP95CRj5SYORnfkF6Qp0¥9ZK¥RfXUA¥fpeIKuAOpltyznj¥zjuC5wqP82IaCre0ƒ6hNVbU09pGkCm85zdnQbzQXlCol¥2dT8PlJLJcQlPtDPtbazW4CoJg1YVOBiqTJpbeB¥¥U6YbIWSp2C95MgQvbWmLMwADoufhN9ho0JKI9iNGIAy6friW2pmAHLI=',
            so_diem_dung: 2,
            cap_thanh_pho: 'SGN-HAN',
            tong_so_gio_bay: '4:45',
            tuy_chon_gia_ve: [
                {
                    phi_ve: [
                        {
                            mota: 'T1 ECO',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 2985300,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 2790000,
                            khuyen_mai: 0,
                            so_tien_thue: 195300,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 195300
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'FA'
                        },
                        {
                            mota: 'INFANT CHARGE DOM',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: false,
                                em_be: true
                            },
                            tong_thanh_tien: 110000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 10000,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'VAT',
                                    so_tien: 10000
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IF'
                        },
                        {
                            mota: 'Airport Security',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 20000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 20000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Security CHD',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 10000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 10000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Tax Domestic',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 100000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'MSIG Insurance One Way',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 1-3 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 4-10 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insuracne Roud Trip 11-30 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'AirportTax Child Dom',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 50000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 50000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'Management Fee',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 96300,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 90000,
                            khuyen_mai: 0,
                            so_tien_thue: 6300,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 6300
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'MF'
                        }
                    ],
                    ma_dat_cho: 'LVoYBiMeqcF9sq435Ap7AU5p12hMKQpo8cbRrb5X2LEhGDMPjG87hI3Ppj8Z¥K3598FLrD06molBihWlVtiIa0TZBYn41¥gEA7WphAUmckif1mfTsQWZptQRkPyJVRqe7727t8yM5uL9WZkJePUvB54lX35bb3nH1VteWeHKDO9XM6o¥LRgMLJl869OIbZPZEW71ItR6g6eW4qAML4tc1DH¥HBEQdz8dSjMwc99jJƒDQ6Ag5dL1gF8bfl¥0ARGSiKnEX7ddtgIƒlrgcn3Rrn¥qKNO3utFhZ6u8YEH2hAJsH81cƒJ36DsLbOPhq1ceAlAqHHpP3ndM936c2NkwuEBv4jyoI53fjxOnT6LGaTzGmsHRe7ZOjqy8YG9Ak8z5BXvSB0YJcwi¥kOkYGzu9CQjbYJLTkmoZPjglTuAg7koxYRcSgDVYYGhKtfYVoW4jL¥h208ƒqONxoHchotƒ88UTJ1zqzZKSIicfsYiPIzpegip6cZNKxiV5YhjtuQxrƒZ8kPwcmuz1CILuv2MqhYu¥8ye01TSi4Rp4z8kiRAdJEe5obDUWOTXa2k4tHovc90HkZ0',
                    ve_hop_le: {
                        is_hop_le: true,
                        is_ban_het: false
                    },
                    hang_cho: {
                        ma: 'Y',
                        mo_ta: 'Economy'
                    },
                    ma_dat_ve: {
                        ma: 'T',
                        mo_ta: null
                    },
                    hang_ve: {
                        ma: 'T1_ECO',
                        mo_ta: 'T1 ECO'
                    },
                    loai_ve: {
                        ma: 'Eco',
                        mo_ta: 'Eco'
                    },
                    so_ghe_trong: 180,
                    is_ma_khuyen_mai: false,
                    gia_tien_co_ban: {
                        gia_ve: 2790000,
                        thue: 211600,
                        phi_dich_vu: 370000,
                        tong_cong: 3371600,
                        tien_te: 'VND'
                    },
                    gia_tien: {
                        gia_ve: 5580000,
                        thue: 423200,
                        phi_dich_vu: 740000,
                        tong_cong: 6743200,
                        tien_te: 'VND'
                    }
                },
                {
                    phi_ve: [
                        {
                            mota: 'T1 DLX',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 3208930,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 2999000,
                            khuyen_mai: 0,
                            so_tien_thue: 209930,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 209930
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'FA'
                        },
                        {
                            mota: 'INFANT CHARGE DOM',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: false,
                                em_be: true
                            },
                            tong_thanh_tien: 110000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 10000,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'VAT',
                                    so_tien: 10000
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: '',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IF'
                        },
                        {
                            mota: 'Airport Security',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 20000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 20000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Security CHD',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 10000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 10000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AS'
                        },
                        {
                            mota: 'Airport Tax Domestic',
                            hanh_khach_ap_dung: {
                                tre_em: false,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 100000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 100000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'MSIG Insurance One Way',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 1-3 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insurance Round Trip 4-10 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'MSIG Insuracne Roud Trip 11-30 days',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 0,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 0,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'IN'
                        },
                        {
                            mota: 'AirportTax Child Dom',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: false,
                                em_be: false
                            },
                            tong_thanh_tien: 50000,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 50000,
                            khuyen_mai: 0,
                            so_tien_thue: 0,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'AI'
                        },
                        {
                            mota: 'Management Fee',
                            hanh_khach_ap_dung: {
                                tre_em: true,
                                nguoi_lon: true,
                                em_be: false
                            },
                            tong_thanh_tien: 96300,
                            ma_tien_te: 'VND',
                            loai_tien_te: 'Vietnam Dong',
                            so_tien_co_ban: 90000,
                            khuyen_mai: 0,
                            so_tien_thue: 6300,
                            loai_thue_suat: [
                                {
                                    ten_thue: 'Tax 1',
                                    so_tien: 6300
                                },
                                {
                                    ten_thue: 'Tax 2',
                                    so_tien: 0
                                },
                                {
                                    ten_thue: 'Tax 3',
                                    so_tien: 0
                                }
                            ],
                            ma_loai_phi: 'MF'
                        }
                    ],
                    ma_dat_cho: 'LVoYBiMeqcF9sq435Ap7AU5p12hMKQpo8cbRrb5X2LEhGDMPjG87hI3Ppj8Z¥K3598FLrD06molBihWlVtiIa0TZBYn41¥gEA7WphAUmckif1mfTsQWZptQRkPyJVRqe7727t8yM5uL9WZkJePUvB54lX35bb3nH1VteWeHKDO8BXhuvLpxOQfqZep2uGuNSgNadVwloyXeNjLOrAmiOmODg5ƒxtbNKeLqCAG2GY7yShB2cDVg3aƒeREcvtJJ0b5UZSRQ7F6ssbG0nwX5EqNz3P236Cnz5KrQEWQRrz2zH5PZYPPDV8V¥a1zIQCcdwQnrjY0KjRzD18qƒueuYd¥1EP2aNE4TCƒƒyNl4T9akCPibmoepP59aFEYCPoDP¥Nƒ3zzM23HxF6eeU09r4xdvBTDUOiorpBAY7ThtmI0uƒ3zPZ¥SOQqAx5ZwYg9Cf3Qqwa2vOCbqsZbpzCgng08WNnY3uzBwM2N8NigD¥As7DKAVnrgSjOwrcgWGSWXLZzuWeAS6¥lxZ46xmg7b2rKYupB3F1K1wBh7CSzcO9NCT2AIƒIJWwQZJNQSna76ƒ4u5ITRA0',
                    ve_hop_le: {
                        is_hop_le: true,
                        is_ban_het: false
                    },
                    hang_cho: {
                        ma: 'Y',
                        mo_ta: 'Economy'
                    },
                    ma_dat_ve: {
                        ma: 'T',
                        mo_ta: null
                    },
                    hang_ve: {
                        ma: 'T1_DLX',
                        mo_ta: 'T1 DLX'
                    },
                    loai_ve: {
                        ma: 'Deluxe',
                        mo_ta: 'Deluxe'
                    },
                    so_ghe_trong: 180,
                    is_ma_khuyen_mai: false,
                    gia_tien_co_ban: {
                        gia_ve: 2999000,
                        thue: 226230,
                        phi_dich_vu: 370000,
                        tong_cong: 3595230,
                        tien_te: 'VND'
                    },
                    gia_tien: {
                        gia_ve: 5998000,
                        thue: 452460,
                        phi_dich_vu: 740000,
                        tong_cong: 7190460,
                        tien_te: 'VND'
                    }
                }
            ],
            tuy_chon_gia_ve_mac_dinh: {
                phi_ve: [
                    {
                        mota: 'T1 ECO',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 2985300,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 2790000,
                        khuyen_mai: 0,
                        so_tien_thue: 195300,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 195300
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'FA'
                    },
                    {
                        mota: 'INFANT CHARGE DOM',
                        hanh_khach_ap_dung: {
                            tre_em: false,
                            nguoi_lon: false,
                            em_be: true
                        },
                        tong_thanh_tien: 110000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 100000,
                        khuyen_mai: 0,
                        so_tien_thue: 10000,
                        loai_thue_suat: [
                            {
                                ten_thue: 'VAT',
                                so_tien: 10000
                            },
                            {
                                ten_thue: '',
                                so_tien: 0
                            },
                            {
                                ten_thue: '',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IF'
                    },
                    {
                        mota: 'Airport Security',
                        hanh_khach_ap_dung: {
                            tre_em: false,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 20000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 20000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AS'
                    },
                    {
                        mota: 'Airport Security CHD',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: false,
                            em_be: false
                        },
                        tong_thanh_tien: 10000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 10000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AS'
                    },
                    {
                        mota: 'Airport Tax Domestic',
                        hanh_khach_ap_dung: {
                            tre_em: false,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 100000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 100000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AI'
                    },
                    {
                        mota: 'MSIG Insurance One Way',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'MSIG Insurance Round Trip 1-3 days',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'MSIG Insurance Round Trip 4-10 days',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'MSIG Insuracne Roud Trip 11-30 days',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 0,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 0,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'IN'
                    },
                    {
                        mota: 'AirportTax Child Dom',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: false,
                            em_be: false
                        },
                        tong_thanh_tien: 50000,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 50000,
                        khuyen_mai: 0,
                        so_tien_thue: 0,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'AI'
                    },
                    {
                        mota: 'Management Fee',
                        hanh_khach_ap_dung: {
                            tre_em: true,
                            nguoi_lon: true,
                            em_be: false
                        },
                        tong_thanh_tien: 96300,
                        ma_tien_te: 'VND',
                        loai_tien_te: 'Vietnam Dong',
                        so_tien_co_ban: 90000,
                        khuyen_mai: 0,
                        so_tien_thue: 6300,
                        loai_thue_suat: [
                            {
                                ten_thue: 'Tax 1',
                                so_tien: 6300
                            },
                            {
                                ten_thue: 'Tax 2',
                                so_tien: 0
                            },
                            {
                                ten_thue: 'Tax 3',
                                so_tien: 0
                            }
                        ],
                        ma_loai_phi: 'MF'
                    }
                ],
                ma_dat_cho: 'LVoYBiMeqcF9sq435Ap7AU5p12hMKQpo8cbRrb5X2LEhGDMPjG87hI3Ppj8Z¥K3598FLrD06molBihWlVtiIa0TZBYn41¥gEA7WphAUmckif1mfTsQWZptQRkPyJVRqe7727t8yM5uL9WZkJePUvB54lX35bb3nH1VteWeHKDO9XM6o¥LRgMLJl869OIbZPZEW71ItR6g6eW4qAML4tc1DH¥HBEQdz8dSjMwc99jJƒDQ6Ag5dL1gF8bfl¥0ARGSiKnEX7ddtgIƒlrgcn3Rrn¥qKNO3utFhZ6u8YEH2hAJsH81cƒJ36DsLbOPhq1ceAlAqHHpP3ndM936c2NkwuEBv4jyoI53fjxOnT6LGaTzGmsHRe7ZOjqy8YG9Ak8z5BXvSB0YJcwi¥kOkYGzu9CQjbYJLTkmoZPjglTuAg7koxYRcSgDVYYGhKtfYVoW4jL¥h208ƒqONxoHchotƒ88UTJ1zqzZKSIicfsYiPIzpegip6cZNKxiV5YhjtuQxrƒZ8kPwcmuz1CILuv2MqhYu¥8ye01TSi4Rp4z8kiRAdJEe5obDUWOTXa2k4tHovc90HkZ0',
                ve_hop_le: {
                    is_hop_le: true,
                    is_ban_het: false
                },
                hang_cho: {
                    ma: 'Y',
                    mo_ta: 'Economy'
                },
                ma_dat_ve: {
                    ma: 'T',
                    mo_ta: null
                },
                hang_ve: {
                    ma: 'T1_ECO',
                    mo_ta: 'T1 ECO'
                },
                loai_ve: {
                    ma: 'Eco',
                    mo_ta: 'Eco'
                },
                so_ghe_trong: 180,
                is_ma_khuyen_mai: false,
                gia_tien_co_ban: {
                    gia_ve: 2790000,
                    thue: 211600,
                    phi_dich_vu: 370000,
                    tong_cong: 3371600,
                    tien_te: 'VND'
                },
                gia_tien: {
                    gia_ve: 5580000,
                    thue: 423200,
                    phi_dich_vu: 740000,
                    tong_cong: 6743200,
                    tien_te: 'VND'
                }
            }
        },
    ],
    hai_chieu: []
}

const resApi = {
    action: 'dat-ve-vj',
    code: 'success',
    message: 'Đặt vé thành công3',
    id: '2021-11-24 11 39 43'
}

const selectedChuyenDi = {
    "id": 58,
    "chang_bay": [
        {
            "ma_hang_bay": "QH",
            "id_nhom_chuyen_bay": 1,
            "ma_chuyen_bay": "QH284",
            "so_hieu_chuyen_bay": 284,
            "ngay_di": "30-12-2021 23:00:00",
            "ngay_den": "31-12-2021 01:10:00",
            "san_bay_di": {
                "ma_san_bay": "SGN",
                "ten_san_bay": "SGN"
            },
            "san_bay_den": {
                "ma_san_bay": "HAN",
                "ten_san_bay": "HAN"
            },
            "logo": "http://api.ags99.vn/assets/dba62a9a-4e7c-11ec-8adf-0242ac120007_26-11-2021T12:51:10.png",
            "ten_hang_bay": "Bamboo Airlines"
        }
    ],
    "tong_so_gio_bay": "02:10",
    "so_diem_dung": 1,
    "tuy_chon_gia_ve": [
        {
            "so_ghe_trong": 7,
            "hang_cho": {
                "ma": "ECONOMY",
                "mo_ta": "ECONOMY"
            },
            "loai_ve": {
                "ma": "ECONOMYSAVERMAX",
                "mo_ta": "ECONOMYSAVERMAX"
            },
            "gia_tien_co_ban": {
                "gia_ve": 19000,
                "thue": 154000,
                "tong_cong": 493000,
                "phi_dich_vu": 320000,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 38000,
                "thue": 308000,
                "tong_cong": 986000,
                "phi_dich_vu": 640000,
                "tien_te": "VND"
            },
            "phi_ve": [],
            "thong_tin_dinh_gia": [
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "P1",
                    "gia_ve_co_so": "P1EMFP01",
                    "muc_gia_ve": "EB",
                    "loai_pax": "ADULT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 54337,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 1,
                    "gia_tien_co_ban": {
                        "gia_ve": 19000,
                        "thue": 154000,
                        "tong_cong": 493000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 38000,
                        "thue": 308000,
                        "tong_cong": 986000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSAVERMAX",
                        "mo_ta": "ECONOMYSAVERMAX"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "P1",
                    "gia_ve_co_so": "P1EMFP01",
                    "muc_gia_ve": "EB",
                    "loai_pax": "CHILD",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 54337,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 1,
                    "gia_tien_co_ban": {
                        "gia_ve": 14250,
                        "thue": 94000,
                        "tong_cong": 429000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 28500,
                        "thue": 188000,
                        "tong_cong": 858000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSAVERMAX",
                        "mo_ta": "ECONOMYSAVERMAX"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "P1",
                    "gia_ve_co_so": "P1EMFP01",
                    "muc_gia_ve": "EB",
                    "loai_pax": "INFANT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 54337,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 1,
                    "gia_tien_co_ban": {
                        "gia_ve": 100000,
                        "thue": 10000,
                        "tong_cong": 110000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 200000,
                        "thue": 20000,
                        "tong_cong": 220000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSAVERMAX",
                        "mo_ta": "ECONOMYSAVERMAX"
                    }
                }
            ]
        },
        {
            "so_ghe_trong": 9,
            "hang_cho": {
                "ma": "ECONOMY",
                "mo_ta": "ECONOMY"
            },
            "loai_ve": {
                "ma": "ECONOMYSMART",
                "mo_ta": "ECONOMYSMART"
            },
            "gia_tien_co_ban": {
                "gia_ve": 999000,
                "thue": 252000,
                "tong_cong": 1571000,
                "phi_dich_vu": 320000,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 1998000,
                "thue": 504000,
                "tong_cong": 3142000,
                "phi_dich_vu": 640000,
                "tien_te": "VND"
            },
            "phi_ve": [],
            "thong_tin_dinh_gia": [
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "R",
                    "gia_ve_co_so": "RESF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "ADULT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41771,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 8,
                    "gia_tien_co_ban": {
                        "gia_ve": 999000,
                        "thue": 252000,
                        "tong_cong": 1571000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 1998000,
                        "thue": 504000,
                        "tong_cong": 3142000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSMART",
                        "mo_ta": "ECONOMYSMART"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "R",
                    "gia_ve_co_so": "RESF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "CHILD",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41771,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 8,
                    "gia_tien_co_ban": {
                        "gia_ve": 749250,
                        "thue": 167000,
                        "tong_cong": 1237000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 1498500,
                        "thue": 334000,
                        "tong_cong": 2474000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSMART",
                        "mo_ta": "ECONOMYSMART"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "R",
                    "gia_ve_co_so": "RESF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "INFANT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41771,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 8,
                    "gia_tien_co_ban": {
                        "gia_ve": 100000,
                        "thue": 10000,
                        "tong_cong": 110000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 200000,
                        "thue": 20000,
                        "tong_cong": 220000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSMART",
                        "mo_ta": "ECONOMYSMART"
                    }
                }
            ]
        },
        {
            "so_ghe_trong": 7,
            "hang_cho": {
                "ma": "ECONOMY",
                "mo_ta": "ECONOMY"
            },
            "loai_ve": {
                "ma": "ECONOMYSAVER",
                "mo_ta": "ECONOMYSAVER"
            },
            "gia_tien_co_ban": {
                "gia_ve": 399000,
                "thue": 192000,
                "tong_cong": 911000,
                "phi_dich_vu": 320000,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 798000,
                "thue": 384000,
                "tong_cong": 1822000,
                "phi_dich_vu": 640000,
                "tien_te": "VND"
            },
            "phi_ve": [],
            "thong_tin_dinh_gia": [
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "V",
                    "gia_ve_co_so": "VEOF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "ADULT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41777,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 4,
                    "gia_tien_co_ban": {
                        "gia_ve": 399000,
                        "thue": 192000,
                        "tong_cong": 911000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 798000,
                        "thue": 384000,
                        "tong_cong": 1822000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSAVER",
                        "mo_ta": "ECONOMYSAVER"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "V",
                    "gia_ve_co_so": "VEOF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "CHILD",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41777,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 4,
                    "gia_tien_co_ban": {
                        "gia_ve": 299250,
                        "thue": 122000,
                        "tong_cong": 742000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 598500,
                        "thue": 244000,
                        "tong_cong": 1484000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSAVER",
                        "mo_ta": "ECONOMYSAVER"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "V",
                    "gia_ve_co_so": "VEOF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "INFANT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41777,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 4,
                    "gia_tien_co_ban": {
                        "gia_ve": 100000,
                        "thue": 10000,
                        "tong_cong": 110000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 200000,
                        "thue": 20000,
                        "tong_cong": 220000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYSAVER",
                        "mo_ta": "ECONOMYSAVER"
                    }
                }
            ]
        },
        {
            "so_ghe_trong": 9,
            "hang_cho": {
                "ma": "ECONOMY",
                "mo_ta": "ECONOMY"
            },
            "loai_ve": {
                "ma": "ECONOMYFLEX",
                "mo_ta": "ECONOMYFLEX"
            },
            "gia_tien_co_ban": {
                "gia_ve": 1700000,
                "thue": 322000,
                "tong_cong": 2342000,
                "phi_dich_vu": 320000,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 3400000,
                "thue": 644000,
                "tong_cong": 4684000,
                "phi_dich_vu": 640000,
                "tien_te": "VND"
            },
            "phi_ve": [],
            "thong_tin_dinh_gia": [
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "N",
                    "gia_ve_co_so": "NEFF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "ADULT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41762,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 16,
                    "gia_tien_co_ban": {
                        "gia_ve": 1700000,
                        "thue": 322000,
                        "tong_cong": 2342000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 3400000,
                        "thue": 644000,
                        "tong_cong": 4684000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYFLEX",
                        "mo_ta": "ECONOMYFLEX"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "N",
                    "gia_ve_co_so": "NEFF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "CHILD",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41762,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 16,
                    "gia_tien_co_ban": {
                        "gia_ve": 1275000,
                        "thue": 220000,
                        "tong_cong": 1815000,
                        "phi_dich_vu": 320000,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 2550000,
                        "thue": 440000,
                        "tong_cong": 3630000,
                        "phi_dich_vu": 640000,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYFLEX",
                        "mo_ta": "ECONOMYFLEX"
                    }
                },
                {
                    "is_dei_exists": true,
                    "is_through_flight": false,
                    "trang_thai": "OPEN",
                    "hang_ve": "N",
                    "gia_ve_co_so": "NEFF0",
                    "muc_gia_ve": "EB",
                    "loai_pax": "INFANT",
                    "id_han_che_tra_lai": false,
                    "id_giao_dich_gia_ve": 41762,
                    "id_chuyen_bay": 1,
                    "id_don_vi_dinh_gia": 3,
                    "id_thanh_phan_gia_ve": 16,
                    "gia_tien_co_ban": {
                        "gia_ve": 100000,
                        "thue": 10000,
                        "tong_cong": 110000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "gia_tien": {
                        "gia_ve": 200000,
                        "thue": 20000,
                        "tong_cong": 220000,
                        "phi_dich_vu": 0,
                        "tien_te": "VND"
                    },
                    "loai_ve": {
                        "ma": "ECONOMYFLEX",
                        "mo_ta": "ECONOMYFLEX"
                    }
                }
            ]
        }
    ],
    "tuy_chon_gia_ve_mac_dinh": {
        "so_ghe_trong": 9,
        "hang_cho": {
            "ma": "ECONOMY",
            "mo_ta": "ECONOMY"
        },
        "loai_ve": {
            "ma": "ECONOMYFLEX",
            "mo_ta": "ECONOMYFLEX"
        },
        "gia_tien_co_ban": {
            "gia_ve": 1700000,
            "thue": 322000,
            "tong_cong": 2342000,
            "phi_dich_vu": 320000,
            "tien_te": "VND"
        },
        "gia_tien": {
            "gia_ve": 3400000,
            "thue": 644000,
            "tong_cong": 4684000,
            "phi_dich_vu": 640000,
            "tien_te": "VND"
        },
        "phi_ve": [],
        "thong_tin_dinh_gia": [
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "N",
                "gia_ve_co_so": "NEFF0",
                "muc_gia_ve": "EB",
                "loai_pax": "ADULT",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41762,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 16,
                "gia_tien_co_ban": {
                    "gia_ve": 1700000,
                    "thue": 322000,
                    "tong_cong": 2342000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 3400000,
                    "thue": 644000,
                    "tong_cong": 4684000,
                    "phi_dich_vu": 640000,
                    "tien_te": "VND"
                },
                "loai_ve": {
                    "ma": "ECONOMYFLEX",
                    "mo_ta": "ECONOMYFLEX"
                }
            },
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "N",
                "gia_ve_co_so": "NEFF0",
                "muc_gia_ve": "EB",
                "loai_pax": "CHILD",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41762,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 16,
                "gia_tien_co_ban": {
                    "gia_ve": 1275000,
                    "thue": 220000,
                    "tong_cong": 1815000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 2550000,
                    "thue": 440000,
                    "tong_cong": 3630000,
                    "phi_dich_vu": 640000,
                    "tien_te": "VND"
                },
                "loai_ve": {
                    "ma": "ECONOMYFLEX",
                    "mo_ta": "ECONOMYFLEX"
                }
            },
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "N",
                "gia_ve_co_so": "NEFF0",
                "muc_gia_ve": "EB",
                "loai_pax": "INFANT",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41762,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 16,
                "gia_tien_co_ban": {
                    "gia_ve": 100000,
                    "thue": 10000,
                    "tong_cong": 110000,
                    "phi_dich_vu": 0,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 200000,
                    "thue": 20000,
                    "tong_cong": 220000,
                    "phi_dich_vu": 0,
                    "tien_te": "VND"
                },
                "loai_ve": {
                    "ma": "ECONOMYFLEX",
                    "mo_ta": "ECONOMYFLEX"
                }
            }
        ]
    },
    "so_ghe_trong": 9,
    "hang_cho": {
        "ma": "ECONOMY",
        "mo_ta": "ECONOMY"
    },
    "loai_ve": {
        "ma": "ECONOMYSMART",
        "mo_ta": "ECONOMYSMART"
    },
    "gia_tien_co_ban": {
        "gia_ve": 999000,
        "thue": 252000,
        "tong_cong": 1571000,
        "phi_dich_vu": 320000,
        "tien_te": "VND"
    },
    "gia_tien": {
        "gia_ve": 1998000,
        "thue": 504000,
        "tong_cong": 3142000,
        "phi_dich_vu": 640000,
        "tien_te": "VND"
    },
    "phi_ve": [],
    "thong_tin_dinh_gia": [
        {
            "is_dei_exists": true,
            "is_through_flight": false,
            "trang_thai": "OPEN",
            "hang_ve": "R",
            "gia_ve_co_so": "RESF0",
            "muc_gia_ve": "EB",
            "loai_pax": "ADULT",
            "id_han_che_tra_lai": false,
            "id_giao_dich_gia_ve": 41771,
            "id_chuyen_bay": 1,
            "id_don_vi_dinh_gia": 3,
            "id_thanh_phan_gia_ve": 8,
            "gia_tien_co_ban": {
                "gia_ve": 999000,
                "thue": 252000,
                "tong_cong": 1571000,
                "phi_dich_vu": 320000,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 1998000,
                "thue": 504000,
                "tong_cong": 3142000,
                "phi_dich_vu": 640000,
                "tien_te": "VND"
            },
            "loai_ve": {
                "ma": "ECONOMYSMART",
                "mo_ta": "ECONOMYSMART"
            }
        },
        {
            "is_dei_exists": true,
            "is_through_flight": false,
            "trang_thai": "OPEN",
            "hang_ve": "R",
            "gia_ve_co_so": "RESF0",
            "muc_gia_ve": "EB",
            "loai_pax": "CHILD",
            "id_han_che_tra_lai": false,
            "id_giao_dich_gia_ve": 41771,
            "id_chuyen_bay": 1,
            "id_don_vi_dinh_gia": 3,
            "id_thanh_phan_gia_ve": 8,
            "gia_tien_co_ban": {
                "gia_ve": 749250,
                "thue": 167000,
                "tong_cong": 1237000,
                "phi_dich_vu": 320000,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 1498500,
                "thue": 334000,
                "tong_cong": 2474000,
                "phi_dich_vu": 640000,
                "tien_te": "VND"
            },
            "loai_ve": {
                "ma": "ECONOMYSMART",
                "mo_ta": "ECONOMYSMART"
            }
        },
        {
            "is_dei_exists": true,
            "is_through_flight": false,
            "trang_thai": "OPEN",
            "hang_ve": "R",
            "gia_ve_co_so": "RESF0",
            "muc_gia_ve": "EB",
            "loai_pax": "INFANT",
            "id_han_che_tra_lai": false,
            "id_giao_dich_gia_ve": 41771,
            "id_chuyen_bay": 1,
            "id_don_vi_dinh_gia": 3,
            "id_thanh_phan_gia_ve": 8,
            "gia_tien_co_ban": {
                "gia_ve": 100000,
                "thue": 10000,
                "tong_cong": 110000,
                "phi_dich_vu": 0,
                "tien_te": "VND"
            },
            "gia_tien": {
                "gia_ve": 200000,
                "thue": 20000,
                "tong_cong": 220000,
                "phi_dich_vu": 0,
                "tien_te": "VND"
            },
            "loai_ve": {
                "ma": "ECONOMYSMART",
                "mo_ta": "ECONOMYSMART"
            }
        }
    ]
}

const selectedChuyenVe = {}

const thongTinHanhKhach = {
    "KhachHangNguoiLon": [
        {
            "danh_xung": 1,
            "ho": "PHAM VAN NGUOI",
            "ten": "LON",
            "ho_ten": "PHAM VAN NGUOI LON",
            "ngay_sinh": "",
            "quoc_tich": "VNM",
            "nguoi_di_cung": ""
        },
        {
            "danh_xung": 1,
            "ho": "PHAM VAN NGUOI LON",
            "ten": "2",
            "ho_ten": "PHAM VAN NGUOI LON 2",
            "ngay_sinh": "",
            "quoc_tich": "VNM",
            "nguoi_di_cung": ""
        }
    ],
    "KhachHangTreEm": [
        {
            "danh_xung": 4,
            "ho": "PHAM VAN TRE",
            "ten": "EM",
            "ho_ten": "PHAM VAN TRE EM",
            "ngay_sinh": "2019-12-15T16:59:59.000Z",
            "quoc_tich": "VNM",
            "nguoi_di_cung": ""
        }
    ],
    "KhachHangEmBe": [
        {
            "danh_xung": 6,
            "ho": "PHAM VAN EM",
            "ten": "BE",
            "ho_ten": "PHAM VAN EM BE",
            "ngay_sinh": "2021-12-15T16:59:59.000Z",
            "quoc_tich": "VNM",
            "nguoi_di_cung": 0
        }
    ],
    "danh_xung_lien_he": 1,
    "ho_lien_he": 0,
    "ten_lien_he": 0,
    "ho_ten_lien_he": 0,
    "email_lien_he": "email@gmail.com",
    "sdt_lien_he": "0937329048",
    "dia_chi_lien_he": "Long An",
    "thanh_pho_lien_he": "HP",
    "khu_vuc_lien_he": "VNM"
}

const hanhKhachNguoiLon = [
    {
        "danh_xung": 1,
        "ho": "PHAM VAN NGUOI",
        "ten": "LON",
        "ho_ten": "PHAM VAN NGUOI LON",
        "ngay_sinh": "",
        "quoc_tich": "VNM",
        "nguoi_di_cung": ""
    },
    {
        "danh_xung": 1,
        "ho": "PHAM VAN NGUOI LON",
        "ten": "2",
        "ho_ten": "PHAM VAN NGUOI LON 2",
        "ngay_sinh": "",
        "quoc_tich": "VNM",
        "nguoi_di_cung": ""
    }
]

const hanhKhachTreEm = [
    {
        "danh_xung": 4,
        "ho": "PHAM VAN TRE",
        "ten": "EM",
        "ho_ten": "PHAM VAN TRE EM",
        "ngay_sinh": "2019-12-14T16:59:59.000Z",
        "quoc_tich": "VNM",
        "nguoi_di_cung": ""
    }
]

const hanhKhachEmBe = [
    {
        "danh_xung": 6,
        "ho": "PHAM VAN EM",
        "ten": "BE",
        "ho_ten": "PHAM VAN EM BE",
        "ngay_sinh": "2021-12-14T16:59:59.000Z",
        "quoc_tich": "VNM",
        "nguoi_di_cung": 0
    }
]

const paramsPhiVe = {
    "mot_chieu": {
        "nguoi_lon": [
            {
                "id": 1,
                "ho": "PHAM VAN NGUOI",
                "ten": "LON",
                "danh_xung": 1,
                "ngay_sinh": "",
                "quoc_tich": "VNM",
                "gia_ve": {
                    "gia_ve": 999000,
                    "thue": 252000,
                    "tong_cong": 1571000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                }
            }
        ],
        "tre_em": [
            {
                "id": 2,
                "ho": "PHAM VAN TRE",
                "ten": "EM",
                "danh_xung": 4,
                "ngay_sinh": "22-12-2019",
                "quoc_tich": "VNM",
                "gia_ve": {
                    "gia_ve": 999000,
                    "thue": 252000,
                    "tong_cong": 1571000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                }
            }
        ],
        "em_be": [
            {
                "id": 3,
                "ho": "PHAM VAN EM",
                "ten": "BE",
                "danh_xung": 6,
                "ngay_sinh": "22-12-2021",
                "quoc_tich": "VNM",
                "gia_ve": {
                    "gia_ve": 999000,
                    "thue": 252000,
                    "tong_cong": 1571000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "nguoi_di_cung": 1
            }
        ],
        "phi_ve": [],
        "ma_hang_bay": "QH",
        "chuyen_bay": {
            "id_nhom_chuyen_bay": "1",
            "id_chuyen_bay": "1",
            "so_hieu": "284",
            "ngay_bay": "30-12-2021",
            "ma_diem_di": "SGN",
            "ma_diem_den": "HAN",
            "hang_ve": "ECONOMY",
            "trang_thai": "OPEN",
            "is_through_flight": false,
            "is_dei_exists": true,
            "loai_ve": "R"
        },
        "thong_tin_ve": [
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "R",
                "gia_ve_co_so": "RESF0",
                "muc_gia_ve": "EB",
                "loai_pax": "ADULT",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41771,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 8,
                "gia_tien_co_ban": {
                    "gia_ve": 999000,
                    "thue": 252000,
                    "tong_cong": 1571000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 1998000,
                    "thue": 504000,
                    "tong_cong": 3142000,
                    "phi_dich_vu": 640000,
                    "tien_te": "VND"
                },
                "loai_ve": {
                    "ma": "ECONOMYSMART",
                    "mo_ta": "ECONOMYSMART"
                }
            },
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "R",
                "gia_ve_co_so": "RESF0",
                "muc_gia_ve": "EB",
                "loai_pax": "CHILD",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41771,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 8,
                "gia_tien_co_ban": {
                    "gia_ve": 749250,
                    "thue": 167000,
                    "tong_cong": 1237000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 1498500,
                    "thue": 334000,
                    "tong_cong": 2474000,
                    "phi_dich_vu": 640000,
                    "tien_te": "VND"
                },
                "loai_ve": {
                    "ma": "ECONOMYSMART",
                    "mo_ta": "ECONOMYSMART"
                }
            },
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "R",
                "gia_ve_co_so": "RESF0",
                "muc_gia_ve": "EB",
                "loai_pax": "INFANT",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41771,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 8,
                "gia_tien_co_ban": {
                    "gia_ve": 100000,
                    "thue": 10000,
                    "tong_cong": 110000,
                    "phi_dich_vu": 0,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 200000,
                    "thue": 20000,
                    "tong_cong": 220000,
                    "phi_dich_vu": 0,
                    "tien_te": "VND"
                },
                "loai_ve": {
                    "ma": "ECONOMYSMART",
                    "mo_ta": "ECONOMYSMART"
                }
            }
        ],
        "dat_giu_cho": true
    },
    "is_save": false
}

const dataDatVe = {};

const dataChoNgoiVjDi = [];

const dataChoNgoiVjVe = [];

const phiVe = {
    "mot_chieu": {
        "gia_tien": {
            "gia_ve": 2997000,
            "thue": 756000,
            "phi_dich_vu": 0,
            "tong_cong": 4713000,
            "tien_te": "VND"
        },
        "chi_tiet_phi_ve": [
            {
                "id": 1,
                "danh_xung": 1,
                "ho_ten": "PHAM VAN NGUOI LON",
                "quoc_tich": "VNM",
                "ngay_sinh": "",
                "nguoi_di_cung": null,
                "loai_hanh_khach": "ADULT",
                "phi_ve": [
                    {
                        "mo_ta": "ECONOMY",
                        "thanh_tien": 999000,
                        "thue": 252000,
                        "phi_dich_vu": 320000,
                        "ma_loai_phi": "GIA_VE",
                        "tong": 1571000,
                        "tien_te": "VND"
                    }
                ]
            },
            {
                "id": 2,
                "danh_xung": 4,
                "ho_ten": "PHAM VAN TRE EM",
                "quoc_tich": "VNM",
                "ngay_sinh": "22-12-2019",
                "nguoi_di_cung": null,
                "loai_hanh_khach": "CHILD",
                "phi_ve": [
                    {
                        "mo_ta": "ECONOMY",
                        "thanh_tien": 999000,
                        "thue": 252000,
                        "phi_dich_vu": 320000,
                        "ma_loai_phi": "GIA_VE",
                        "tong": 1571000,
                        "tien_te": "VND"
                    }
                ]
            },
            {
                "id": 3,
                "danh_xung": 6,
                "ho_ten": "PHAM VAN EM BE",
                "quoc_tich": "VNM",
                "ngay_sinh": "22-12-2021",
                "nguoi_di_cung": 1,
                "loai_hanh_khach": "INFANT",
                "phi_ve": [
                    {
                        "mo_ta": "ECONOMY",
                        "thanh_tien": 999000,
                        "thue": 252000,
                        "phi_dich_vu": 320000,
                        "ma_loai_phi": "GIA_VE",
                        "tong": 1571000,
                        "tien_te": "VND"
                    }
                ]
            }
        ],
        "chuyen_bay": {
            "id_nhom_chuyen_bay": "1",
            "id_chuyen_bay": "1",
            "so_hieu": "284",
            "ngay_bay": "30-12-2021",
            "ma_diem_di": "SGN",
            "ma_diem_den": "HAN",
            "hang_ve": "ECONOMY",
            "trang_thai": "OPEN",
            "is_through_flight": false,
            "is_dei_exists": true,
            "loai_ve": "R"
        },
        "thong_tin_ve": [
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "R",
                "gia_ve_co_so": "RESF0",
                "muc_gia_ve": "EB",
                "loai_pax": "ADULT",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41771,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 8,
                "gia_tien_co_ban": {
                    "gia_ve": 999000,
                    "thue": 252000,
                    "tong_cong": 1571000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 1998000,
                    "thue": 504000,
                    "tong_cong": 3142000,
                    "phi_dich_vu": 640000,
                    "tien_te": "VND"
                },
                "loai_ve": "ECONOMYSMART",
                "gia_ve_co_ban": 999000,
                "loai_tien": "VND"
            },
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "R",
                "gia_ve_co_so": "RESF0",
                "muc_gia_ve": "EB",
                "loai_pax": "CHILD",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41771,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 8,
                "gia_tien_co_ban": {
                    "gia_ve": 749250,
                    "thue": 167000,
                    "tong_cong": 1237000,
                    "phi_dich_vu": 320000,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 1498500,
                    "thue": 334000,
                    "tong_cong": 2474000,
                    "phi_dich_vu": 640000,
                    "tien_te": "VND"
                },
                "loai_ve": "ECONOMYSMART",
                "gia_ve_co_ban": 749250,
                "loai_tien": "VND"
            },
            {
                "is_dei_exists": true,
                "is_through_flight": false,
                "trang_thai": "OPEN",
                "hang_ve": "R",
                "gia_ve_co_so": "RESF0",
                "muc_gia_ve": "EB",
                "loai_pax": "INFANT",
                "id_han_che_tra_lai": false,
                "id_giao_dich_gia_ve": 41771,
                "id_chuyen_bay": 1,
                "id_don_vi_dinh_gia": 3,
                "id_thanh_phan_gia_ve": 8,
                "gia_tien_co_ban": {
                    "gia_ve": 100000,
                    "thue": 10000,
                    "tong_cong": 110000,
                    "phi_dich_vu": 0,
                    "tien_te": "VND"
                },
                "gia_tien": {
                    "gia_ve": 200000,
                    "thue": 20000,
                    "tong_cong": 220000,
                    "phi_dich_vu": 0,
                    "tien_te": "VND"
                },
                "loai_ve": "ECONOMYSMART",
                "gia_ve_co_ban": 100000,
                "loai_tien": "VND"
            }
        ],
        "dat_giu_cho": true,
        "tong_hanh_khach": 2
    },
    "hai_chieu": {},
    "tong_thanh_tien": 4713000,
    "bao_gia_tinh_phi_id": null,
    "tong_tien_can_thanh_toan": 4713000,
    "tong_hanh_khach": 2
}

const dataPhuTroVjChuyenDi = {}

const paramsPhiVeBb = {}

const phiVeBb = [];

const arrSeatMotChieu = []

const arrSeatHaiChieu = []

const arrPhuTroMotChieu = {}

const arrPhuTroHaiChieu = {}

const arrBaoHiemMotChieu = []

const dataPhuTroBbChuyenDi = {
    "id_nhom_chuyen_bay": 2,
    "id_phan_doan": 2,
    "ma_nha_cung_cap": "QH",
    "so_hieu": 284,
    "ngay_bay": "2021-12-30Z",
    "diem_di": "SGN",
    "diem_den": "HAN",
    "hang_cabin": "ECONOMY",
    "tinh_trang_chuyen_bay": "OPEN",
    "is_dei_exists": true,
    "ngay_tao": "2021-12-21T08:37:45Z",
    "hang_gia_ve": "R",
    "danh_sach_phu_tro": [
        {
            "ma_dich_vu": "INSR",
            "ten_dich_vu": "INSURANCE",
            "loai_dich_vu": "INSURANCE",
            "is_bundle": false,
            "id_phan_doan": 2,
            "hanh_khach": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "",
                        "ten_thue": "",
                        "loai_thue": "",
                        "gia_thue": null,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 60000,
                        "tien_te": "VND"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "",
                        "ten_thue": "",
                        "loai_thue": "",
                        "gia_thue": null,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 60000,
                        "tien_te": "VND"
                    }
                },
                {
                    "loai_khach": "INFANT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "",
                        "ten_thue": "",
                        "loai_thue": "",
                        "gia_thue": null,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 60000,
                        "tien_te": "VND"
                    }
                }
            ],
            "chi_tiet_phan_doan": {
                "id_phan_doan": 2,
                "so_luong_co_san": -1
            }
        },
        {
            "ma_dich_vu": "PRCI",
            "ten_dich_vu": "Priority at checkin and boarding",
            "loai_dich_vu": "PRIORITY",
            "is_bundle": false,
            "id_phan_doan": 2,
            "hanh_khach": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 10000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 100000,
                        "tien_te": "VND"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 10000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 100000,
                        "tien_te": "VND"
                    }
                }
            ],
            "chi_tiet_phan_doan": {
                "id_phan_doan": 2,
                "so_luong_co_san": -1
            }
        },
        {
            "ma_dich_vu": "VOUC",
            "ten_dich_vu": "Business Lounge",
            "loai_dich_vu": "VOUCHER",
            "is_bundle": false,
            "id_phan_doan": 2,
            "hanh_khach": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 39000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 386000,
                        "tien_te": "VND"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 39000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 386000,
                        "tien_te": "VND"
                    }
                }
            ],
            "chi_tiet_phan_doan": {
                "id_phan_doan": 2,
                "so_luong_co_san": -1
            }
        }
    ]
}

const dataHanhLyBbChuyenDi = {
    "id_nhom_chuyen_bay": 1,
    "id_phan_doan": 1,
    "ma_nha_cung_cap": "QH",
    "so_hieu": 284,
    "ngay_bay": "2021-12-30Z",
    "diem_di": "SGN",
    "diem_den": "HAN",
    "hang_cabin": "ECONOMY",
    "tinh_trang_chuyen_bay": "OPEN",
    "is_dei_exists": true,
    "ngay_tao": "2021-12-23T03:08:05Z",
    "hang_gia_ve": "R",
    "dich_vu_phu_tro": [
        {
            "ma_dich_vu": "XBAG",
            "ten_dich_vu": "5KG XBAG",
            "tu_khoa_dich_vu": "XBAG",
            "ma_thanh_toan": "AD",
            "rfic_code": "C",
            "rfic_sub_code": "011",
            "phuong_thuc_tinh_phi": "OC",
            "mo_ta_ma_phu": "EXCESS BAGGAGE",
            "tieu_chuan_hanh_ly_mien_phi": false,
            "id_phan_doan": 1,
            "id_phan_doan_phu_tro": 1,
            "chi_tiet_goi_hanh_ly": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 7000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 70000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 5,
                        "phu_cap_can_nang": 25,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 7000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 70000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 5,
                        "phu_cap_can_nang": 25,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                }
            ]
        },
        {
            "ma_dich_vu": "XBAG",
            "ten_dich_vu": "10KG XBAG",
            "tu_khoa_dich_vu": "XBAG",
            "ma_thanh_toan": "AD",
            "rfic_code": "C",
            "rfic_sub_code": "02S",
            "phuong_thuc_tinh_phi": "OC",
            "mo_ta_ma_phu": "EXCESS BAGGAGE",
            "tieu_chuan_hanh_ly_mien_phi": false,
            "id_phan_doan": 1,
            "id_phan_doan_phu_tro": 1,
            "chi_tiet_goi_hanh_ly": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 12000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 120000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 10,
                        "phu_cap_can_nang": 30,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 12000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 120000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 10,
                        "phu_cap_can_nang": 30,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                }
            ]
        },
        {
            "ma_dich_vu": "XBAG",
            "ten_dich_vu": "15KG XBAG",
            "tu_khoa_dich_vu": "XBAG",
            "ma_thanh_toan": "AD",
            "rfic_code": "C",
            "rfic_sub_code": "0C1",
            "phuong_thuc_tinh_phi": "OC",
            "mo_ta_ma_phu": "EXCESS BAGGAGE",
            "tieu_chuan_hanh_ly_mien_phi": false,
            "id_phan_doan": 1,
            "id_phan_doan_phu_tro": 1,
            "chi_tiet_goi_hanh_ly": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 16000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 155000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 15,
                        "phu_cap_can_nang": 35,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 16000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 155000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 15,
                        "phu_cap_can_nang": 35,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                }
            ]
        },
        {
            "ma_dich_vu": "XBAG",
            "ten_dich_vu": "20KG XBAG",
            "tu_khoa_dich_vu": "XBAG",
            "ma_thanh_toan": "AD",
            "rfic_code": "C",
            "rfic_sub_code": "0C2",
            "phuong_thuc_tinh_phi": "OC",
            "mo_ta_ma_phu": "EXCESS BAGGAGE",
            "tieu_chuan_hanh_ly_mien_phi": false,
            "id_phan_doan": 1,
            "id_phan_doan_phu_tro": 1,
            "chi_tiet_goi_hanh_ly": [
                {
                    "loai_khach": "ADULT",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 18000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 180000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 20,
                        "phu_cap_can_nang": 40,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                },
                {
                    "loai_khach": "CHILD",
                    "so_luong": 1,
                    "thue": {
                        "ma_thue": "UE",
                        "ten_thue": "Value Added Tax",
                        "loai_thue": "VAT",
                        "gia_thue": 18000,
                        "tien_te": ""
                    },
                    "phi": {
                        "gia_tien": 180000,
                        "tien_te": "VND"
                    },
                    "chi_tiet": {
                        "trong_luong_them": 20,
                        "phu_cap_can_nang": 40,
                        "trong_luong_toi_da_moi_tui": 32,
                        "trong_luong_toi_da_cho_phep": 0,
                        "phu_cap_kien_toi_da": 0,
                        "kien_thua": 0,
                        "kien": 0,
                        "don_vi": "Kg"
                    }
                }
            ]
        }
    ]
}

const dataChoNgoiBbChuyenDi = []

export {
    arrSeatMotChieu,
    arrSeatHaiChieu,
    arrPhuTroMotChieu,
    arrPhuTroHaiChieu,
    dataPhuTroVjChuyenDi,
    phiVeBb,
    paramsPhiVeBb,
    dataChoNgoiBbChuyenDi,
    phiVe,
    dataChoNgoiVjDi,
    dataChoNgoiVjVe,
    paramsPhiVe,
    dataDatVe,
    params,
    data,
    resApi,
    selectedChuyenDi,
    selectedChuyenVe,
    thongTinHanhKhach,
    hanhKhachNguoiLon,
    hanhKhachTreEm,
    hanhKhachEmBe,
    arrBaoHiemMotChieu,
    dataPhuTroBbChuyenDi,
    dataHanhLyBbChuyenDi
}