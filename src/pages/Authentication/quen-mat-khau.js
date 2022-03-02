import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap"
//redux
import { useSelector, useDispatch } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { xacNhanQuenMatKhau } from "../../store/actions"

// import images
import profile from "../../assets/images/profile-img.png"
import logo from "assets/images/logo-ThanhHoang.png"

const ForgetPasswordPage = props => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false)
  const [hideMessage, setHideMessage] = useState(true)
  let { error, response } = useSelector(state => ({
    error: state.QuenMatKhau.error,
    response: state.QuenMatKhau.response,
  }))

  function handleValidSubmit(event, values) {
    var params = {
      'loai': "email",
      'gia_tri': values.ten_dang_nhap
    }
    dispatch(xacNhanQuenMatKhau(params))
    setDisabledBtn(true)
    setHideMessage(true)
  }

  useEffect(() => {
    response = {};
  }, [])

  useEffect(() => {
    if (JSON.stringify(response) !== "{}") {
      setMessage(response.message)
      setDisabledBtn(false)
      setHideMessage(false)
    }
  }, [response.id])

  return (
    <React.Fragment>
      <MetaTags>
        <title>{process.env.REACT_APP_TITLE}</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col md={7} xs={12}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Quên mật khẩu</h5>
                        <p>Vui lòng điền thông tin!</p>
                      </div>
                    </Col>
                    <Col md={5} xs={12} className="align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <a href="http://thanhhoang.vn">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title bg-light fix-logo">
                          <img
                            src={logo}
                            alt=""
                            height="34"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className={hideMessage ? "d-none" : null}>
                    {response.status && <Alert color={response.status === 200 ? "success" : "danger"} role="alert">{message}</Alert>}
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                    >
                      <div className="mb-3">
                        <AvField
                          name="ten_dang_nhap"
                          label="Email"
                          value=""
                          className="form-control"
                          placeholder="Nhập email..."
                          type="text"
                          validate={{
                            required: { value: true, errorMessage: "Vui lòng nhập email" },
                            email: { value: true, errorMessage: 'Email không hợp lệ' },
                          }}
                          autoComplete="off"
                        />
                      </div>
                      <Row className="mb-3">
                        <Col className="text-end">
                          <button
                            className="btn btn-primary w-md "
                            type="submit"
                            disabled={disabledBtn}
                          >
                            Gửi yêu cầu
                          </button>
                        </Col>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Trở về trang{" "}
                  <Link to="dang-nhap" className="font-weight-medium text-primary">
                    Đăng nhập
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Thành Hoàng{" "}
                  <i className="mdi mdi-heart text-danger" /> được phát triển bởi <a href="https://trieudo.net" target="_blank">TRIEUDO Co,. Ltd</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
}

export default withRouter(ForgetPasswordPage)