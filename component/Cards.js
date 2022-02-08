import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form, Input, InputNumber, message } from "antd";
import styles from "../styles/Card.module.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteDomain } from "../utils/firestore";

function Cards({ data, setRender, render }) {
  const idRef = useRef(null);
  const UpdateRef = useRef(null);
  const [inputState, setinputState] = useState(false);

  const [updatedomainName, setUpdatedomainName] = useState("");
  const [updatedays, setUpdateDays] = useState("");
  const [updateTaken, setUpdateTaken] = useState("");
  let color = "";

  // useEffect(() => {
  //   if (deleten) {
  //     const deleteDoc = deleteDomain(idRef);
  //     setDeleten(false)
  //   }

  //   return () => deleteDoc

  // }, [idRef]);

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

  const handleEdit = (id) => {
    setinputState(!inputState);
    // (item.id === id ? setinputState(!inputState) : null)
    console.log(id)
    // data.map((item) => console.log(item.id));

    // if (updatedomainName && updatedays && updateTaken) {
    //   updateDomain(id, updatedomainName, updatedays, updateTaken);
    // }
  };

  return (
    <div className={styles.wrapper}>
      {data.map((element) => {
        const { days, domaninName, id, whereToTake } = element;

        colorState(days);

        return (
          <div key={id} className={styles.card}>
            <Card
              headStyle={{ backgroundColor: color }}
              title={domaninName}
              bordered={true}
              style={{ width: 500, height: 250 }}
            >
              {inputState ? (
                <Form>
                  <Input></Input>
                  <InputNumber />
                  <Input></Input>
                  <Button>sumbit</Button>
                </Form>
              ) : (
                <>
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
                </>
              )}
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
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
