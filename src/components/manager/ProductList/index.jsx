import { Table, Button } from 'antd';
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
			title: 'Action',
			dataIndex: 'action',
			render: (text, record) => {
                return (
                    <Button type="primary" danger>Delete</Button>
                )
            }
		}
    ];

    return (
        <Table 
            columns={columns}
            dataSource={products} 
            rowKey={products => products._id}
            pagination={false}
        />
    )
}

export default ProductList