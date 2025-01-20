import React, { useEffect, useState } from "react";
import { Modal, Form, Input, InputNumber, Col, Row, UploadProps, UploadFile } from "antd";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import TextArea from "antd/es/input/TextArea";

type FileType = Parameters<Required<UploadProps>['beforeUpload']>[0];

const CreateModal = ({ open, onClose, onSubmit, onEdit, editingProduct }) => {
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

    const onChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileListImage(newFileList);
    };

    const onChangeProduct: UploadProps['onChange'] = ({ file }) => {
        setFileListProduct([file]);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as FileType);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    return (
        <Modal
            title={editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
            open={open}
            onOk={handleOk}
            onCancel={onClose}
            okText={editingProduct ? "Lưu" : "Thêm"}
            cancelText="Hủy"
            width={1000}
        >
            <Form
                form={form}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="Ảnh trang bìa sản phẩm"
                            name="image"
                        >
                            <ImgCrop rotationSlider>
                                <Upload
                                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    listType="picture-card"
                                    fileList={fileListImage.slice(0, 1)}  // Chỉ cho phép 1 ảnh
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                >
                                    {fileListImage.length < 1 && '+ Upload'}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                        <Form.Item
                            label="Ảnh sản phẩm"
                            name="images"
                        >
                            <ImgCrop rotationSlider>
                                <Upload
                                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    listType="picture-card"
                                    fileList={fileListProduct}  // Chỉ 1 ảnh tại 1 thời điểm
                                    onChange={onChangeProduct}
                                    onPreview={onPreview}
                                >
                                    {fileListProduct.length < 1 && '+ Upload'}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={18}>
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
                                    label="Số lượng"
                                    name="qty"
                                    rules={[{ required: true, message: "Vui lòng nhập số lượng sản phẩm!" }]}
                                >
                                    <InputNumber min={1} placeholder="Nhập số lượng" />
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
                                    <Input placeholder="Nhập danh mục sản phẩm" />
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
                </Row>
            </Form>
        </Modal>
    );
};

export default CreateModal;
