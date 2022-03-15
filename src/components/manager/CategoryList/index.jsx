import { Table, Button } from 'antd';
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
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
            dataSource={categories} 
            rowKey={categories => categories._id}
            pagination={false}
        />
    )
}

export default CategoryList