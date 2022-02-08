import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, InputNumber, message, Modal } from "antd";
import styles from "../styles/Card.module.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteDomain, updateDomain } from "../utils/firestore";
import {} from "antd";

function Cards({ data, setRender, render }) {
  const [inputState, setinputState] = useState(false);

  const [updatedomainName, setUpdatedomainName] = useState("");
  const [updatedays, setUpdateDays] = useState(0);
  const [updateTaken, setUpdateTaken] = useState("");
  const [selectId, setSelectId] = useState("");
  let color = "";

  useEffect(() => {
    data.filter((item) =>
      item.days < 15
        ? message.warning(
            `${item.domaninName} süresi az 15 günden az kalmıştır`
          )
        : null
    );
  }, [data]);

  function colorState(days) {
    if (days < 15) {
      color = "red";
    }
    if (days > 15 && days < 60) {
      color = "orange";
    }
    if (days > 60) {
      color = "green";
    }
  }

  const domainDelete = (id) => {
    data.map((item) => {
      if (item.id === id) {
        deleteDomain(id);
        setRender(!render);
      }
    });
  };

  const handleCancel = () => {
    setinputState(false);
  };

  const handleEdit = (id) => {
    setinputState(!inputState);
    setSelectId(id)
  };

  
  const sumbitEditting = () => {
    if (updatedomainName && updatedays && updateTaken) {
      updateDomain(selectId,updatedomainName,updatedays,updateTaken)
      message.success("This is a success message");

      setUpdateTaken('')
      setUpdateDays(0)
      setUpdatedomainName('')
    }
  }

  return (
    <div className={styles.wrapper}>
      {data.map((element) => {
        const { days, domaninName, id, whereToTake } = element;

        colorState(days);

        return (
          <div key={id} className={styles.card}>
            {inputState ? (
              <Modal
                title="Domain Bilgisi Düzenle"
                visible={inputState}
                onCancel={handleCancel}
                footer={null}
              >
                <Form
                onSubmitCapture={sumbitEditting}
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
                    label="Domain Adı"
                    name="Domain Adı"
                    rules={[
                      {
                        required: true,
                        message: "Boş Bırakılamaz",
                      },
                    ]}
                  >
                    <Input onChange={e=> setUpdatedomainName(e.target.value)} />
                  </Form.Item>

                  <Form.Item
                    label="Alındığı Yer"
                    name="Alındığı Yer"
                    rules={[
                      {
                        required: true,
                        message: "Boş Bırakılamaz",
                      },
                    ]}
                  >
                    <Input  onChange={e=> setUpdateTaken(e.target.value)} />
                  </Form.Item>

                  <Form.Item
                    label="Gün"
                    name="Gün"
                    rules={[
                      {
                        required: true,
                        message: "Boş Bırakılamaz",
                      },
                    ]}
                  >
                    <InputNumber  onChange={e=> setUpdateDays(e)} />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            ) : (
              <>
                <Card
                  headStyle={{ backgroundColor: color }}
                  title={domaninName}
                  bordered={true}
                  style={{ width: 500, height: 250 }}
                >
                  <p>
                    <span>Domain Adı:</span> {domaninName || "Veri girilmedi"}
                  </p>
                  <p>
                    <span>Kalan Gün:</span> {days || "Veri girilmedi"}
                  </p>
                  <p>
                    <span>Nereden alındı:</span>{" "}
                    {whereToTake || "Veri girilmedi"}
                  </p>
                </Card>

                <Card
                  style={{ width: 500, borderTop: "none" }}
                  bodyStyle={{ display: "none" }}
                  actions={[
                    <EditOutlined onClick={() => handleEdit(id)} key="edit" />,
                    <DeleteOutlined
                      onClick={() => domainDelete(id)}
                      key="delete"
                    />,
                  ]}
                ></Card>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
