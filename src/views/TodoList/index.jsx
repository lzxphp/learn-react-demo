import React, { useState } from "react";
import { Input, Button, List, Space } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import { Col, Row } from "antd";
import './index.css'
const TodoList = () => {
  const navigate = useNavigate ();

  const [listData, setListData] = useState([]);
  const [name, setName] = useState("");
  const [id, setID] = useState(0);

  const today = new Date().toLocaleDateString();

  const handleAdd = () => {
    if (name === "") {
      return;
    }
    setID(id + 1);
    setListData([...listData, { title: name, isDone: false, id ,date: today }]);
    setName("");
  };

  const handleDone = (id) => {
    const newData = listData.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: true };
      }
      return item;
    });
    setListData(newData);
  };

  const handleCancel = (id) => {
    const newData = listData.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: false };
      }
      return item;
    });
    setListData(newData);
  };

  const handleDeleteItem = (id) => {
    setListData(listData.filter((item) => item.id !== id));
  };

  const handleClick = () => {
    navigate('/todolistold');
  }

  return (
    <>
      <Row gutter={10} style={{ marginBottom: "10px" }}>
        <Col span={18}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Basic usage"
          />
        </Col>
        <Col span={6}>
          <Button onClick={handleAdd} type="primary">
            添加
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={18}>
          <List
            bordered
            dataSource={listData}
            renderItem={(item) => (
              <List.Item key={item.id}>
                    <div>
                      {item.title} {item.isDone ? "✅" : ""}
                      {today}
                    </div>
                    <Space>
                      {!item.isDone && (
                        <Button
                          onClick={() => handleDone(item.id)}
                          size="small"
                        >
                          完成
                        </Button>
                      )}
                      {item.isDone && (
                        <Button
                          onClick={() => handleCancel(item.id)}
                          size="small"
                        >
                          取消
                        </Button>
                      )}
                      <Button
                        onClick={() => handleDeleteItem(item.id)}
                        size="small"
                      >
                        删除
                      </Button>
                    </Space>
              </List.Item>
            )}
            footer={
              <div>
                总计：{listData.length} 待完成：
                {listData.filter((item) => !item.isDone).length}
              </div>
            }
          />
        </Col>
      </Row>
      <Link to="/todolistold">前往旧版</Link>
      <Button type="primary" onClick={handleClick}>编程导航方式</Button>
    </>
  );
};

export default TodoList;
