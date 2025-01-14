import { Button, Checkbox, Col, Form, Image, Input, Row } from "antd"
import { useEffect } from "react"

const RegisterPage = () => {

    useEffect(() => {
        document.title = "Register Page"
    }, [])

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
                    <h2 style={{ fontSize: "48px", fontWeight: "normal" }}>Đăng ký</h2>
                    <p style={{ fontWeight: "400" }}>Đã có tài khoản?&nbsp;<a href="#">Đăng nhập</a></p>
                    <Button type="primary" style={{ marginBlock: "15px", paddingInline: "30px" }}>
                        Google
                    </Button>
                    <br />
                    <b>hoặc đăng ký bằng email</b>



                    <Form name="register"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{ maxWidth: '600px', margin: '0 auto' }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
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
                            label="Email"
                            name="email"
                            style={{
                                marginBottom: '10px',
                                borderBottom: '1px solid #cccccc',
                                paddingBottom: '5px',
                            }}
                            labelAlign="left"

                        >
                            <Input
                                placeholder="Enter your email"
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
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

                        <Form.Item
                            label="Confirm Password"
                            name="confirm-password"
                            style={{
                                marginBottom: '10px',
                                borderBottom: '1px solid #cccccc',
                                paddingBottom: '5px',
                            }}
                            labelAlign="left"

                        >
                            <Input.Password
                                placeholder="Enter your confirm password"
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                            />
                        </Form.Item>

                        <Form.Item wrapperCol={24}>
                            <Checkbox>
                                Tôi đã đồng ý với <a style={{ color: "#FFC300" }} href="">Điều khoản và chính sách quyền riêng tư</a>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={24}>
                            <Button className="warning-button" htmlType="submit" block
                                style={{ paddingBlock: "20px" }}
                            >
                                <h3>Đăng ký</h3>
                            </Button>
                        </Form.Item>
                    </Form>


                </div>
            </Col>
        </Row>
    )
}

export default RegisterPage