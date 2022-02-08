import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button, Space, message } from "antd";
import { addData, takeData } from "../utils/firestore";
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
  required: "${label} boş bırakılamaz",
  types: {
    number: "${label} is not a valid number!",
  },
};

function AddForm() {
  const [domainName, setDomainName] = useState("");
  const [taken, setTaken] = useState("");
  const [days, setDays] = useState(0);
  const [newPerson, setNewPerson] = useState({});

  const DomainSubmit = (e) => {
    e.preventDefault();
    if (domainName && taken && days) {
      message.success("This is a success message");
      addData(domainName, taken, days).then((item) => setNewPerson(item.id));
      setDays('')
      setDomainName('')
      setNewPerson('')
    }
    
  };
  
 
  return (
    <Form
      onSubmitCapture={DomainSubmit}
      {...layout}
      name="nest-messages"
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Domain Adı"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Alındığı Yer">
        <Input value={taken} onChange={(e) => setTaken(e.target.value)} />
      </Form.Item>
      <Form.Item
        name={["user", "age"]}
        label="Gün "
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber value={days} onChange={(e) => setDays(e)} />
      </Form.Item>

      <Button
        block={true}
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

export default AddForm;
