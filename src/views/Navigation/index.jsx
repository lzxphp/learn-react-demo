import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const Navigation = () => {
  return (
    <Row>
      <Col>
        <nav>
          <ul>
            <li>
              <Link to="/">待办事项</Link>
            </li>
            <li>
              <Link to="/blogpage">博客页面</Link>
            </li>
            <li>
              <Link to="/operatetable">操作表格</Link>
            </li>
          </ul>
        </nav>
      </Col>
    </Row>
  );
};

export default Navigation;
