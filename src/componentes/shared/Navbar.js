import { useState } from 'react';
// import { LeftMenu, RightMenu } from './Menu';
import { Drawer, Button, Layout, Row, Grid } from 'antd';
import logo from '../../assets/img/logo.svg';
import { AppstoreOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { Header } = Layout;

const NavBar = (props) => {
   const [visible, setVisible] = useState(false);

   const showDrawer = () => setVisible(true);
   const closeDrawer = () => setVisible(false);
   const { md } = Grid.useBreakpoint();

   const logout = () => {
      props.logoutuser(localStorage.getItem('ROLDAN_APP_RD'));
      localStorage.removeItem('ROLDAN_APP_RD');
      props.history.push('/login/');
   };

   return (
      <Header
         className="header"
         style={{
            paddingLeft: 20,
            paddingRight: 20,
            position: 'fixed',
            zIndex: 1000,
            width: '100%',
         }}
      >
         <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Row>
               <div
                  className="logo"
                  onClick={() => props.history.push('/dashboard/')}
               >
                  <img
                     className="logo"
                     src={logo}
                     alt="LOGO"
                     style={{ width: 50, height: 50 }}
                  />
               </div>
               <LeftMenu {...props} user={props.usuario[0]} />
            </Row>
            {md ? (
               <RightMenu
                  {...props}
                  user={props.usuario[0] && props.usuario[0].username}
                  logout={logout}
               />
            ) : (
               <Button
                  key="btn"
                  className="barsMenu"
                  type="primary"
                  onClick={showDrawer}
                  icon={<AppstoreOutlined />}
               />
            )}
         </Row>
         {!md && (
            <Drawer
               placement="right"
               closable={false}
               onClose={closeDrawer}
               visible={visible}
            >
               <RightMenu
                  theme="light"
                  isInDrawer={true}
                  {...props}
                  user={props.usuario[0] && props.usuario[0].username}
                  logout={logout}
               />
               <LeftMenu
                  theme="light"
                  isInDrawer={true}
                  user={props.usuario[0]}
                  {...props}
               />
            </Drawer>
         )}
      </Header>
   );
};

function mapStateToProps(state) {
   return { usuario: state.usuario };
}

//funciones para manipular redux
const mapDispatchToProps = (dispatch) => ({
   logoutuser: (user) => {
      dispatch({
         type: 'LOGOUT_USER',
         user,
      });
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
