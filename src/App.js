import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./views/TodoList/index";
import TodoListOld from "./views/TodoList-old/index";
import BlogPage from "./views/BlogPage/index";
import OperateTable from "./views/OperateTable/index";
import { Col, Row } from "antd";
import Navigation from "./views/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todolistold" element={<TodoListOld />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/operatetable" element={<OperateTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
