import React, { useState } from "react";
import { Table, Input, Popconfirm, Form, Typography, Tag, Button, Select, Image, InputNumber, SelectProps } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const predefinedCategories = ['giay', 'dep', 'abc', 'xyz'];
let options: SelectProps['options'] = predefinedCategories.map((category) => ({
    value: category,
    label: category,
}));

export default function ProductTable({ data, setDataSource, onEdit, onDelete }) {
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState("");
    const [count, setCount] = useState(data.length + 1);

    const isEditing = (record) => record.name === editingKey;

    const edit = (record) => {
        form.setFieldsValue({ ...record });
        setEditingKey(record.name);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const save = async (name) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => name === item.name);

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
            name: `Product ${count}`,
            price: 0,
            description: "New Description",
            brand: "Brand",
            categoryIds: [`${count}`],
            size: [{ size: "M", stock: 0 }],
            image: "https://placehold.co/600x400",
        };
        const updatedData = [...data, newData];
        setDataSource(updatedData);
        setCount(count + 1);
    };

    const handleDelete = (name) => {
        const newData = data.filter((item) => item.name !== name);
        setDataSource(newData);
        onDelete(newData);
    };

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            editable: true,
            render: (image) => (
                <Image
                    width={64}
                    src={image}
                    alt="Product"
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            editable: false,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            editable: true,
            render: (price) => `${price}`,
        },
        {

            title: "Description",
            dataIndex: "description",
            key: "description",
            editable: true,
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
            editable: true,
        },
        {
            title: "Category",
            dataIndex: "categoryIds",
            key: "categoryIds",
            editable: true,
            render: (categoryIds, record) => (
                <div>
                    {categoryIds.map((item) => (
                        <Tag key={item}>
                            {item}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: "Size",
            dataIndex: "size",
            key: "size",
            editable: true,
            render: (size) => (
                <div>
                    {size.map((item) => (
                        <Tag key={item.size}>
                            {item.size}: {item.stock}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.name)}
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
                            onConfirm={() => handleDelete(record.name)}
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
                inputType: col.dataIndex === "price" ? "number" : "text",
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
        switch (dataIndex) {
            case "description":
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
                                <Input.TextArea rows={4} />
                            </Form.Item>
                        ) : (
                            children
                        )}
                    </td>
                );
            case "categoryIds":
                return (
                    <td {...restProps}>
                        {editing ? (
                            <Form.Item
                                name={dataIndex}
                                style={{ margin: 0 }}
                                rules={[
                                    {
                                        required: true,
                                        message: `Please select ${title}!`,
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue={record.categoryIds}
                                    onBlur={(event) => {
                                        const newCategory = (event.target as HTMLInputElement).value.trim();
                                        if (newCategory && !record.categoryIds.includes(newCategory)) {
                                            record.categoryIds.push(newCategory);
                                            setDataSource([...data]);
                                        }
                                    }}
                                    mode="multiple"
                                    options={options}
                                />

                            </Form.Item>
                        ) : (
                            <div>
                                {record.categoryIds.map((item) => (
                                    <Tag key={item}>
                                        {item}
                                    </Tag>
                                ))}
                            </div>
                        )}
                    </td>
                );
            case "size":
                return (
                    <td {...restProps}>
                        {editing ? (
                            <Form.List
                                name={dataIndex}
                                rules={[
                                    {
                                        validator: async (_, sizes) => {
                                            if (!sizes || sizes.length < 1) {
                                                return Promise.reject(new Error("At least one size"));
                                            }
                                        },
                                    },
                                ]}
                            >
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Form.Item
                                                {...restField}
                                                label="Size"
                                                style={{ marginBottom: 0 }}
                                                key={key}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Missing size or stock!",
                                                    },
                                                ]}
                                            >
                                                <Input.Group compact>
                                                    <Form.Item
                                                        noStyle
                                                        name={[name, "size"]}
                                                        fieldKey={[name, "size"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Missing size!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input style={{ width: "30%" }} placeholder="Size" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        noStyle
                                                        name={[name, "stock"]}
                                                        fieldKey={[name, "stock"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Missing stock!",
                                                            },
                                                        ]}
                                                    >
                                                        <InputNumber style={{ width: "30%" }} min={0} placeholder="Stock" />
                                                    </Form.Item>
                                                    <MinusCircleOutlined
                                                        style={{ marginLeft: "8px" }}
                                                        onClick={() => remove(name)}
                                                    />
                                                </Input.Group>
                                            </Form.Item>
                                        ))}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                icon={<PlusOutlined />}
                                            >
                                                Add Size
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        ) : (
                            <div>
                                {record.size.map((item) => (
                                    <Tag key={item.size}>
                                        {item.size}: {item.stock}
                                    </Tag>
                                ))}
                            </div>
                        )}
                    </td>
                );
            case "image":
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
                                <Input type="url" placeholder="Image URL" />
                            </Form.Item>
                        ) : (
                            <Image width={64} src={record[dataIndex]} alt="Product" />
                        )}
                    </td>
                );
            default:
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
                                {inputType === "number" ? <InputNumber /> : <Input />}
                            </Form.Item>
                        ) : (
                            children
                        )}
                    </td>
                );
        }
    };

    return (
        <>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{ marginBottom: 16 }}
            >
                Add a product
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
                    pagination={{
                        onChange: cancel

                    }}
                />
            </Form>
        </>
    );
}
