import "./index.css";
import { useState } from "react";
import React from "react";
import { Input, Button, List } from "antd";
import { Col, Row } from "antd";

const TodoList = () => {
  let [listData, setListData] = useState([]);
  let [name, setName] = useState("");
  let [id, setID] = useState("0");

  const handleAdd = () => {
    if (name === "") {
      return;
    }
    setID(id + 1);
    setListData([...listData, { title: name, isDone: false, id: id }]);
    // 输入后 清除原有数据
    setName("");
  };
  function handleDone(id) {
    const newData = listData.map((c, i) => {
      if (c.id === id) {
        c.isDone = true;
      }
      return c;
    });
    setListData(newData);
  }

  function handleCancel(id) {
    const newData = listData.map((c, i) => {
      if (c.id === id) {
        c.isDone = false;
      }
      return c;
    });
    setListData(newData);
  }

  function handleDeleteItem(id) {
    // filter 需要return返回
    setListData(
      listData.filter((item) => {
        return item.id !== id;
      })
    );
  }
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Basic usage"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <Button onClick={handleAdd} type="primary">
            添加
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
          <List
            bordered
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
                {item.title} {item.isDone ? "✅" : ""}
                {!item.isDone && (
                  <Button onClick={handleDone} >
                    完成
                  </Button>
                )}
                {item.isDone && (
                  <Button
                    onClick={handleCancel}
                    
                  >
                    取消
                  </Button>
                )}
                <Button onClick={handleDeleteItem}>删除</Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default TodoList;
