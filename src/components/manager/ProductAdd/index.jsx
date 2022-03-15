import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
    Form, Input, Button,
    InputNumber, Select, Typography,
    Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { upload } from "../../../api/upload";
import { create } from "../../../api/product";

import './ProductAdd.css'

const layout = {
  	labelCol: { span: 2 },
  	wrapperCol: { span: 8 },
    labelAlign: 'left',
};

const ProductAdd = ({ categories }) => {
    const { Title } = Typography;
    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm();

    useEffect(() => {
        register("title", { required: 'Nhập tên sản phẩm' })
        register("category", { required: 'Chọn danh mục' })
        register("price", { required: 'Yêu cầu nhập giá' })
        register("quantity", {
            required: 'Yêu cầu nhập số lượng',
            min: { value: 10, message: 'Ít nhất 5 sản phẩm ' }
        })
        register("image", { required: 'Chọn ảnh để hiển thi'})
    }, [])
    

    const validateImage = ({ file }) => {
        setError('image', false)
        
        if(file.size > 1024*1024) return setError('image', {
            type: 'fileSize',
            message: 'Dung lượng ảnh quá lớn'
        })

        setValue('image', file)
    }
    
    const onSubmit = async (data) => {
        // upload image
        let formData = new FormData()
        formData.append('file', data.image)

        const imageUpload = await upload(formData)
        
        await create({
            ...data,
            image: imageUpload.data.url,
            categoryId: data.category,
            description: 'csa'
        })
    }

    return (
        <React.Fragment>
            <Title level={2} style={{ marginBottom: '30px' }}>Thêm sản phẩm</Title>
            
            <Form {...layout} onFinish={handleSubmit(onSubmit)} size="large">
                <Form.Item
                    label="Title"
                    validateStatus={errors.title && 'error'}
                    help={errors.title && errors.title.message}
                >
                    <Input 
                        id="title"
                        onChange={(e) => setValue('title', e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Category"
                    validateStatus={errors.category && 'error'}
                    help={errors.category && errors.category.message}
                >
                    <Select 
                        id="category"
                        onChange={value => setValue('category', value)}
                    >
                        <Select.Option value="1">Test</Select.Option>
                        {categories.map((category, index) => {
                            return (
                                <Select.Option key={index} value={category._id}>{category._id}</Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Price"
                    validateStatus={errors.price && 'error'}
                    help={errors.price && errors.price.message}
                >
                    <InputNumber 
                        min={0} id="price"
                        onChange={value => setValue('price', value)}
                    />
                </Form.Item>

                
                <Form.Item
                    label="Quantity"
                    validateStatus={errors.quantity && 'error'}
                    help={errors.quantity && errors.quantity.message}
                >
                    <InputNumber
                        min={0} id="quantity"
                        onChange={value => setValue('quantity', value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Image"
                    validateStatus={errors.image && 'error'}
                    help={errors.image && errors.image.message}
                >
                    <Upload
                        id="image"
                        listType="picture"
                        maxCount={1}
                        beforeUpload={() => false}
                        onChange={value => validateImage(value)}
                    >
                          <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Mô tả">
                    <Input.TextArea style={{ height: 200 }}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
  	)
}

export default ProductAdd;