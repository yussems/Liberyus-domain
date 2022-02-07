import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 30,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  
};

function AddForm() {
  return (
    <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
      <Form.Item
        name={["user", "name"]}
        label="Domain Adı"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "email"]} label="Alındığı Yer">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "age"]} label="Kaç Gün Kaldı">
        <InputNumber />
      </Form.Item>

      <Button block={true} type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddForm;
