import React, { useEffect, useState } from "react";
import { Table, Space, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import "../../mock/mockData.js";
import Add from "./add.jsx"

const OperateTable = () => {
  const [users, setUsers] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate= async (record) => {
    setIsModalOpen(true);
    setEditData(record)
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "地区",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleUpdate(record)}>
            修改
          </Button>
          <Button type="primary" onClick={() => deleteUser(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleEdit = () => {
    setIsModalOpen(false);
  };

  const handleChildClick = () => {
    setIsModalOpen(false);
    fetchUsers()
  };
  
  return (
    <>  
      <Button type="primary" onClick={showModal}>
        新增
      </Button>
      <Table rowKey="id" columns={columns} dataSource={users} />
      <Add isModalOpen={isModalOpen} editData={editData} handleChildClick={handleChildClick}></Add>
    </>
  );
};
export default OperateTable;
