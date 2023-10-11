import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal} from "antd";

import axios from "axios";
import "../../mock/mockData.js";

const Add = ({handleChildClick, isModalOpen, editData }) => {
  const [users, setUsers] = useState([]);
  const [forms, setForms] = useState(editData);
  console.log(editData);

  // setForms(editData);

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      // 发送表单数据到服务器
      await axios.post("/api/users", values);
    // 关闭弹框 
    handleChildClick()
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    handleChildClick()
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForms((forms) => ({
      ...forms,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="名称"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input  value={forms.name} onChange={handleInputChange}/> 
          </Form.Item>

          <Form.Item
            label="密码 "
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password value={forms.password} onChange={handleInputChange}/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Add;
