import React from 'react'

import { Spin } from 'antd';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

const LoadingIndicator = () => {
  return (
    <Spin indicator={
        <LoadingOutlined style={{ fontSize: 24 }} spin />
    } />
  )
}

export default LoadingIndicator