import { useState } from 'react';
import { Form, Input, Button, Row, Card } from 'antd';
import logo from '../../assets/img/logo.svg';
import httpInstance from '../helpers/http.service';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const layout = {
   labelCol: { span: 24 },
   wrapperCol: { span: 24 },
};

const tailLayout = {
   wrapperCol: { offset: 0, span: 0 },
};

const Login = (props) => {
   const [isLoading, setisLoading] = useState(false);
   // eslint-disable-next-line react/prop-types
   const { history, loginUser } = props;

   const onFinish = (values) => {
     console.log(values);
     console.log(history);
      setisLoading(true);
      const ac = new AbortController();
      httpInstance(history).get('/auth/signin', values)
         .then((res) => {
           console.log(res);
            loginUser(res.data);
            // eslint-disable-next-line react/prop-types
            history.push('/');
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setisLoading(false));
      return () => ac.abort(); // Abort both fetches on unmount
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <Row
         justify="center"
         align="center"
         style={{ height: '100vh', alignItems: 'center' }}
      >
         <Card className="login-card" style={{ width: '300px' }}>
            <div className="content-logo">
               <img className="logo" src={logo} alt="LOGO" />
            </div>

            <Form
               {...layout}
               name="basic"
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
            >
               <Form.Item
                  name="username"
                  rules={[
                     {
                        required: true,
                        message: 'Por favor ingrese su nombre de usuario!',
                     },
                  ]}
               >
                  <Input
                     prefix={<UserOutlined className="site-form-item-icon" />}
                     placeholder="Username"
                  />
               </Form.Item>

               <Form.Item
                  name="password"
                  rules={[
                     {
                        required: true,
                        message: 'Por favor ingrese su contraseña!',
                     },
                  ]}
               >
                  <Input.Password
                     prefix={<LockOutlined className="site-form-item-icon" />}
                     placeholder="Password"
                  />
               </Form.Item>

               <Form.Item {...tailLayout} style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit" loading={isLoading}>
                     Iniciar Sesión
                  </Button>
               </Form.Item>
            </Form>
         </Card>
      </Row>
   );
};

//acceder a redux
function mapStateToProps() {
   return {};
}

//funciones para manipular redux
function mapDispatchToProps(dispatch) {
   return {
      loginUser: (usuario) => {
         dispatch({
            type: 'LOGIN_USER',
            usuario,
         });
      },
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
