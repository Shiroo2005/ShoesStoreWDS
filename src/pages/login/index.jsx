import { Button, Checkbox, Col, Form, Image, Input, notification, Row } from "antd"
import { useEffect } from "react"
import { login } from "../../utils/AuthAPI"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login Account"
    }, [])

    const handleLogin = async (values) => {
        const result = await login(values)
        if (result.status) {
            notification.error({
                message: "Đăng nhập thất bại",
                description: result?.data.message
            })
        }
        else {
            notification.success({
                message: "Đăng nhập thành công"
            }
            )
            navigate('/')
            // if (values.RememberMe) {
            //     localStorage.setItem("access_token", result.accesstoken),
            //     localStorage.setItem("refresh_token", result.refreshtoken)
            // }
        }


    }

    return (
        <Row gutter={16} style={{
            margin: "0px 40px 0 40px",
            height: "100vh"
        }}>
            {/* Cột ảnh bên trái */}
            <Col span={11}>
                <Image src="./img/RegisterOrLogin.png" alt="Register"
                    preview={false}
                    style={{ paddingTop: "20px", objectFit: 'contain', width: "100%", height: "90%" }} />
            </Col>

            {/* Cột form đăng ký bên phải */}
            <Col span={13}>
                <div style={{ padding: '100px' }}>
                    <h2 style={{ fontSize: "48px", fontWeight: "normal" }}>Đăng nhập</h2>
                    <p style={{ fontWeight: "400" }}>Chưa có tài khoản?&nbsp;<a href="/register">Đăng ký</a></p>
                    <Button type="primary" style={{ marginBlock: "15px", paddingInline: "30px" }}>
                        Google
                    </Button>
                    <br />
                    <b>hoặc đăng nhập bằng email</b>



                    <Form name="register"
                        onFinish={handleLogin}
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{ maxWidth: '600px', margin: '0 auto' }}
                    >
                        <Form.Item
                            label="Username or email"
                            name="UserNameOrEmail"
                            style={{
                                marginBottom: '10px',
                                borderBottom: '1px solid #cccccc',
                                paddingBottom: '5px',
                                marginTop: '20px',
                            }}
                            labelAlign="left"
                        >
                            <Input
                                placeholder="Enter your username"
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="Password"
                            style={{
                                marginBottom: '10px',
                                borderBottom: '1px solid #cccccc',
                                paddingBottom: '5px',
                            }}
                            labelAlign="left"

                        >
                            <Input.Password
                                placeholder="Enter your password"
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={24} name="RememberMe" valuePropName="checked">
                            <Checkbox style={{ color: "#FF5733" }}>
                                <b>Remember me</b>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={24}>
                            <Button className="warning-button" htmlType="submit" block
                                style={{ paddingBlock: "20px" }}
                            >
                                <h3>Đăng nhập</h3>
                            </Button>
                        </Form.Item>
                    </Form>


                </div>
            </Col>
        </Row>
    )
}

export default RegisterPage