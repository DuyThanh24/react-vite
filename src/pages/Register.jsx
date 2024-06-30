import { Button, Form, Input, Col, Row, notification, message, Divider } from 'antd';
import { handleRegister } from '../services/api.service';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const cosRegister = await handleRegister(values.fullname, values.email, values.password, values.phone);
        if (cosRegister.data) {
            notification.success({
                message: "Register user",
                description: "Đăng Ký Người Dùng Thành Công"
            });
            navigate("/login");
        } else {
            notification.error({
                message: "Register user error",
                description: JSON.stringify(cosRegister.message)
            });
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify={'center'} style={{ height: '100vh', marginTop:"60px" }}>
            <Col xs={20} md={12}>
                <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> Đăng Ký Tài Khoản</h2>
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Full Name"
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
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
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {/* <Button onClick={
                            () => {console.log ("test:", form.getFieldsValue())}
                        }>
                            Test
                        </Button> */}
                    </Form.Item>
                    <Divider></Divider>
                    <p
                        style={{
                            display: "flex", justifyContent: "center", fontSize: "16px"
                        }}
                    >
                        Đã có tài khoản
                        <Link to={"/login"} style={{ marginLeft: "8px" }}>  Đăng nhập tại đây</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    );
};

export default Register;
