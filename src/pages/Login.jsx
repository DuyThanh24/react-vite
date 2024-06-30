
import { Button, Checkbox, Col, Divider, Form, Input, Row, message, notification } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogin } from '../services/api.service';
import { useState } from 'react';


const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState (false)
    const onFinish = async (values) => {
        setLoading(true);
        const resLogin = await handleLogin(values.email, values.password);
        console.log(">>> testLogin:", resLogin);
        if (resLogin.data) {
            message.success("Bạn đăng nhâp thành công")
            navigate ("/")
        } else (
            notification.error({
                message: "Eror Login",
                description: JSON.stringify(resLogin.message)
            })
        )
        setLoading(false);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row style={{ height: '100vh' }} justify={'center'} align={'middle'}>
                <Col xs={20} md={14}>
                    <fieldset style={{
                        padding: "20px",
                        borderRadius: "12px",
                    }}>
                        <legend style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            padding: "10px"
                        }}
                        >  Đăng Nhập</legend>
                        <Form
                            // form={form}
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        // pattern: new RegExp("/\S+@\S+\.\S+/"),
                                        message: 'Email không được để trống',
                                    },
                                    {
                                        type: 'email',
                                        message: "Email không đúng định dạng"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Button loading={loading} type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    <>
                                        <Link style={{ fontSize: "18px" }} to={"/"}> Go to homepage <ArrowRightOutlined /></Link>
                                    </>
                                </div>
                            </Form.Item>
                        </Form>
                        <Divider></Divider>
                        <p
                            style={{
                                display: "flex", justifyContent: "center", fontSize: "16px"
                            }}
                        >
                            Chưa có tài khoản ?
                            <Link to={"/register"} style={{ marginLeft: "8px" }}>  Đăng ký tại đây</Link>
                        </p>
                    </fieldset>
                </Col>
            </Row>
        </>
    )
}

export default Login;