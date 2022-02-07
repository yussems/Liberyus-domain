import React, { useState } from "react";
import { Card } from "antd";
import styles from "../styles/Card.module.css";

function Cards({ data }) {
    const [color, setColor] = useState(data.days);


    return (
    <div className={styles.wrapper}>



      {data.map((element) => {
        const { days, domaninName, id, whereToTake } = element;

        return (
          <div key={id} className={styles.card}>
            <Card
              headStyle={{ backgroundColor: "red" }}
              title="Domain"
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
