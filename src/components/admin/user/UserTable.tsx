import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button, Select, Tag } from "antd";
const { Option } = Select;

export default function UserTable({ data, setDataSource, onEdit, onDelete }) {
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState("");
    const [count, setCount] = useState(data.length + 1);

    const isEditing = (record) => record.email === editingKey;

    const edit = (record) => {
        form.setFieldsValue({ ...record });
        setEditingKey(record.email);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const save = async (email) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => email === item.email);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setDataSource(newData);
                onEdit(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setDataSource(newData);
                onEdit(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    const handleAdd = () => {
        const newData = {
            email: `new${count}@example.com`,
            username: `User ${count}`,
            address: "New Address",
            role: "user",
        };
        const updatedData = [...data, newData];
        setDataSource(updatedData);
        setCount(count + 1);
    };

    const handleDelete = (email) => {
        const newData = data.filter((item) => item.email !== email);
        setDataSource(newData);
        onDelete(newData);
    };

    const columns = [
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            editable: false,
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
            editable: true,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            editable: true,
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            editable: true,
            render: (role) => {
                return (
                    <Tag color={role === "admin" ? "red" : "blue"}>{role.toUpperCase()}</Tag>
                );
            },
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.email)}
                            style={{ marginRight: 8 }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <>
                        <Typography.Link
                            disabled={editingKey !== ""}
                            onClick={() => edit(record)}
                            style={{ marginRight: 8 }}
                        >
                            Edit
                        </Typography.Link>
                        <Popconfirm
                            title="Are you sure to delete?"
                            onConfirm={() => handleDelete(record.email)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    </>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === "address" ? "text" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === "number" ? <InputNumber /> : (dataIndex === "role" ?
            <Select defaultValue={record[dataIndex]} style={{ width: 120 }}>
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
            </Select>
            : <Input />);
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                            {
                                required: true,
                                message: `Please input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    return (
        <>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{ marginBottom: 16 }}
            >
                Add a row
            </Button>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    rowKey="email"
                    pagination={{ onChange: cancel }}
                    scroll={{ y: 55 * 8 }}
                />
            </Form>
        </>
    );
}
