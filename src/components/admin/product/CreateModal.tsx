import React, { useEffect, useState } from "react";
import { Modal, Form, Input, InputNumber, Col, Row, UploadProps, UploadFile, Space, Button, Select, notification, message } from "antd";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { createProductAPI } from "../../../utils/ProductAPI";

type FileType = Parameters<Required<UploadProps>['beforeUpload']>[0];

const CreateModal = ({ open, onClose, onSubmit, onEdit, editingProduct, categories }) => {
    useEffect(() => {
        if (editingProduct) {
            form.setFieldsValue({
                ...editingProduct,
            });
        } else {
            form.resetFields();
        }
    }, [editingProduct]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (editingProduct) {
                onEdit(values);
            } else {
                onSubmit(values);
            }
            onClose();
        } catch (error) {
            console.log("Validation Failed:", error);
        }
    };

    const [form] = Form.useForm();
    const [fileListImage, setFileListImage] = useState<UploadFile[]>([]);
    const [fileListProduct, setFileListProduct] = useState<UploadFile[]>([]);

    const onChangeImage: UploadProps['onChange'] = ({ fileList }) => {
        setFileListImage(fileList);
    };

    const onChangeProduct: UploadProps['onChange'] = ({ fileList }) => {
        setFileListProduct(fileList);
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const onPreview = async (file) => {

        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
    };

    const handleCreate = async (values) => {
        const formData = new FormData();
        console.log(values);

        formData.append("Name", values.name)
        formData.append("Price", values.price)
        formData.append("Description", values.description)
        formData.append("Brand", values.brand)
        formData.append("CategoryIds", values.categoryIds)
        if (values?.image?.file?.originFileObj) formData.append("Files", values.image.file.originFileObj)
        if (values?.image?.fileList?.length) formData.append("Files", values.image.fileList[0].originFileObj)



        formData.append("Size", "[" + values.size?.map((item) => { return item.first }) + "]")
        formData.append("Quantity", "[" + values.size?.map((item) => { return item.last }) + "]")

        const result = await createProductAPI(formData)
        if (result.message) {
            message.success("Create success")
            open = false
        } else message.error("Thêm ảnh và size")

    }

    return (
        <Modal
            title={editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
            open={open}
            onOk={() => form.submit()}
            onCancel={onClose}
            okText={editingProduct ? "Lưu" : "Thêm"}
            cancelText="Hủy"
            width={1000}
        >
            <Form
                form={form}
                onFinish={handleCreate}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="Ảnh trang bìa sản phẩm"
                            name="image"
                        >
                            <Upload
                                listType="picture-card"
                                fileList={fileListImage.slice(0, 1)}  // Chỉ cho phép 1 ảnh
                                onChange={onChangeImage}
                                onPreview={onPreview}
                            >
                                {fileListImage.length < 1 && '+ Upload'}
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            label="Ảnh sản phẩm"
                            name="images"
                        >
                            <Upload
                                listType="picture-card"
                                fileList={fileListProduct}  // Chỉ 1 ảnh tại 1 thời điểm
                                onChange={onChangeProduct}
                                onPreview={onPreview}
                            >
                                {fileListProduct.length < 1 && '+ Upload'}
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item
                                    label="Tên sản phẩm"
                                    name="name"
                                    rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
                                >
                                    <Input placeholder="Nhập tên sản phẩm" />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="Giá tiền"
                                    name="price"
                                    rules={[
                                        { required: true, message: "Vui lòng nhập giá tiền!" },
                                        { pattern: /^[0-9]+$/, message: "Giá phải là số!" },
                                    ]}
                                >
                                    <InputNumber min={1} placeholder="Nhập giá tiền" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item
                                    label="Brand"
                                    name="brand"
                                    rules={[{ required: true, message: "Vui lòng nhập brand sản phẩm!" }]}
                                >
                                    <Input placeholder="Nhập brand" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Danh mục"
                                    name="categoryIds"
                                >
                                    <Select
                                        options={categories.map((item) => { return { value: item.id, label: item.name, key: item.id } })}
                                    />

                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={24}>
                            <Form.Item
                                label="Mô tả"
                                name="description"
                                rules={[{ required: true, message: "Vui lòng nhập mô tả sản phẩm!" }]}
                            >
                                <TextArea rows={4} placeholder="Nhập mô tả" />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Số lượng kích thước">
                            <Form.List
                                name="size">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'first']}
                                                    rules={[{ required: true, message: 'Missing first name' }]}
                                                >
                                                    <InputNumber placeholder="Size" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'last']}
                                                    rules={[{ required: true, message: 'Missing last name' }]}
                                                >
                                                    <InputNumber placeholder="Last Name" />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed"
                                                style={{ width: '130px', height: '30px' }}
                                                onClick={() => add()} block icon={<PlusOutlined />}>
                                                thêm
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default CreateModal;