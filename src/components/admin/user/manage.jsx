import React, { useState } from "react";
import { Table, Button, message } from "antd";
import "./index.css";
import UserTable from "./UserTable";
import { userData } from "./data";

const App = () => {
  const [dataSource, setDataSource] = useState(userData);

  const handleEdit = (data) => {
    message.info(`Edit user: ${data.username}`);
  };

  const handleDelete = (newData) => {
    setDataSource(newData);
    message.success(`Deleted user.`);
  };

  return (
    <div className="container">
      <UserTable data={dataSource} setDataSource={setDataSource} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
