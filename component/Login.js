import React, { useState } from "react";
import { Form, Input, Button, Space, message } from "antd";
import { useUserContext } from "../utils/Context";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginEmailandPassword, error, loading, user } = useUserContext();
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    loginEmailandPassword(email, password);
    if (user) {
      router.push("/domain/domain-add");
    }
  };

  const warning = () => {
    if (error) {
      message.warning("Hatalı Kullanıcı Bilgisi");
    }
  };
  return (
    <Form
      onSubmitCapture={handleSubmit}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space>
          <Button onClick={warning} type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default Login;
