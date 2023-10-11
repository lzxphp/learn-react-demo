import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "../views/TodoList/index";
import TodoListOld from "../views/TodoList-old/index";
import BlogPage from "../views/BlogPage/index";
import OperateTable from "../views/OperateTable/index";

const RouterCom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todolistold" element={<TodoListOld />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/operatetable" element={<OperateTable />} />
      </Routes>
    </>
  );
};

export default RouterCom;
