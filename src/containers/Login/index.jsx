import { Form, Input, Button } from 'antd';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import "./Login.css"


const Login = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    register("name", {required: true})
    register("password", {required: true})
  }, [])

  const handleChangeValue = (name, value) => {
    setValue(name, value);
  };

  return (
    <div className='login'>
      <div className="login__container">
        <Form
          name="login"
          autoComplete="off"
          onFinish={handleSubmit(data => console.log(data))}
        >
          <h3 className='login__title'>Login</h3>

          <Form.Item label="Username" wrapperCol={{ offset: 1 }}>
            <Input onChange={e => handleChangeValue('name', e.target.value)}/>
            
            {errors.name &&
              <div className="ant-form-item-explain-error">{errors.name.type && 'bat buoc phai nhap'}</div>
            }
          </Form.Item>

          <Form.Item label="Password" wrapperCol={{ offset: 1 }}>
            <Input.Password onChange={e => handleChangeValue('password', e.target.value)}/>
            {errors.password && <div className="ant-form-item-explain-error">{errors.password.type && 'bat buoc phai nhap'}</div>}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login