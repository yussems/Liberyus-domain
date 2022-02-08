import React, { useState } from "react";
import { Card, message } from "antd";
import styles from "../styles/Card.module.css";

function Cards({ data }) {
  const [color, setColor] = useState("");

  return (
    <div className={styles.wrapper}>
      {data.map((element) => {
        const { days, domaninName, id, whereToTake } = element;
        let color = "";
        let warning = "";
        if (days < 15) {
          color = "red";
        }
        if (days > 15 && days < 60) {
          color = "orange";
        }
        if (days > 60) {
          color = "green";
        }
        if (days < 15) {
           message.warning(`${domaninName} süresi az 15 günden az kalmıştır`);
        }
        return (
          <div key={id} className={styles.card}>
            <Card
              headStyle={{ backgroundColor: color }}
              title={domaninName}
              bordered={true}
              style={{ width: 500, height: 200 }}
            >
              <p>
                <span>Domain Adı:</span> {domaninName || "Veri girilmedi"}
              </p>
              <p>
                <span>Kalan Gün:</span> {days || "Veri girilmedi"}
              </p>
              <p>
                <span>Nereden alındı:</span> {whereToTake || "Veri girilmedi"}
              </p>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
