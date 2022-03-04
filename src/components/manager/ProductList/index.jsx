import { Table} from 'antd';

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
        }
    ];

    return (
        <Table 
            columns={columns}
            dataSource={products} 
            rowKey={products => products._id}
        />
    )
}

export default ProductList