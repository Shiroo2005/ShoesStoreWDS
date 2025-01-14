import { Button, Checkbox, Col, Form, Image, Input, Row } from "antd"
import { useEffect } from "react"
import './style.css'
import { register } from "../../utils/AuthAPI"

const RegisterPage = () => {

    useEffect(() => {
        document.title = "Register Page"
    }, [])

    const handleRegister = async (values) => {
        console.log(values);
        const payload = {
            UserName: values.username,
            Email: values.email,
            Password: values.password,
            ConfirmPassword: values.confirm_password
        }

        const result = await register(payload)
        console.log(result);

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
                <div style={{ padding: '80px' }}>
                    <h2 style={{ fontSize: "48px", fontWeight: "normal" }}>Đăng ký</h2>
                    <p style={{ fontWeight: "400" }}>Đã có tài khoản?&nbsp;<a href="#">Đăng nhập</a></p>
                    <Button type="primary" style={{ marginBlock: "15px", paddingInline: "30px" }}>
                        Google
                    </Button>
                    <br />
                    <b>hoặc đăng ký bằng email</b>



                    <Form name="register"
                        onFinish={handleRegister}
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{ maxWidth: '600px', margin: '0 auto' }}
                    >
                        <Form.Item
                            hasFeedback
                            label="Username"
                            name="username"
                            validateFirst
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên người dùng',
                                },
                                {
                                    min: 4,
                                    message: 'Tên người dùng tối thiểu 4 ký tự'
                                },
                                {
                                    pattern: /^[a-zA-Z0-9]+$/,
                                    message: 'Tên người dùng chỉ được chứa chữ cái và số',
                                },
                            ]}
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
                            hasFeedback
                            validateFirst
                            label="Email"
                            name="email"
                            style={{
                                marginBottom: '10px',
                                borderBottom: '1px solid #cccccc',
                                paddingBottom: '5px',
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email',
                                },
                                {
                                    pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                                    message: 'Email không hợp lệ',
                                },
                            ]}
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
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu',
                                },
                                {
                                    pattern: /^(?=.*[A-Za-z]).{8,}$/,
                                    message: 'Mật khẩu yếu',
                                },
                            ]}

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
                            name="confirm_password"
                            style={{
                                marginBottom: '10px',
                                borderBottom: '1px solid #cccccc',
                                paddingBottom: '5px',
                            }}
                            labelAlign="left"
                            dependencies={['password']}

                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Mật khẩu không khớp'));
                                    },
                                }),
                            ]}
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

                        <Form.Item
                            name="acceptTerms"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Bạn cần đồng ý với điều khoản')),
                                },
                            ]}
                            wrapperCol={24}
                        >
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
        </Row >
    )
}

export default RegisterPage