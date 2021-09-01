import { Menu, Grid } from 'antd';
import { canView } from '../utils/permisos';

const { SubMenu, Item } = Menu;

export const LeftMenu = ({
   theme = 'dark',
   isInDrawer = false,
   user,
   ...props
}) => {
   const { md } = Grid.useBreakpoint();
   return (
      <Menu
         theme={theme}
         mode={md ? 'horizontal' : 'inline'}
         style={isInDrawer || md ? { display: 'block' } : { display: 'none' }}
      >
         <Item key={1} onClick={() => props.history.push('/dashboard/')}>
            Dashboard
         </Item>
         {user && canView(user.role, 'view_doctor') && (
            <Item key={2} onClick={() => props.history.push('/doctor/')}>
               Doctores
            </Item>
         )}
         {user && canView(user.role, 'view_especialidades') && (
            <Item
               key={3}
               onClick={() => props.history.push('/especialidades/')}
            >
               Especialidades
            </Item>
         )}
         {user && canView(user.role, 'view_paciente') && (
            <Item key={4} onClick={() => props.history.push('/paciente/')}>
               Pacientes
            </Item>
         )}
         {user && canView(user.role, 'view_frecuencia') && (
            <Item key={5} onClick={() => props.history.push('/frecuencia/')}>
               Frecuencias
            </Item>
         )}
         {user && canView(user.role, 'view_seguros') && (
            <Item key={6} onClick={() => props.history.push('/seguros/')}>
               Seguros
            </Item>
         )}
         {user && (
            <SubMenu title={'Consulta'}>
               {user && canView(user.role, 'view_consulta') && (
                  <Item
                     key={8}
                     onClick={() => props.history.push('/consulta/')}
                  >
                     Consulta
                  </Item>
               )}
               {user && canView(user.role, 'view_examenes') && (
                  <Item
                     key={9}
                     onClick={() => props.history.push('/examenes/')}
                  >
                     Examenes
                  </Item>
               )}
               {user && canView(user.role, 'view_historial') && (
                  <Item
                     key={10}
                     onClick={() => props.history.push('/historial/')}
                  >
                     Historial
                  </Item>
               )}
               {user && canView(user.role, 'view_recetas') && (
                  <Item
                     key={11}
                     onClick={() => props.history.push('/recetas/')}
                  >
                     Recetas
                  </Item>
               )}
            </SubMenu>
         )}
         {user && canView(user.role, 'view_agendar') && (
            <Item key={7} onClick={() => props.history.push('/agendar/')}>
               Agendar
            </Item>
         )}
      </Menu>
   );
};

export const RightMenu = ({
   user,
   logout,
   theme = 'dark',
   isInDrawer = false,
   ...props
}) => {
   const { md } = Grid.useBreakpoint();
   return (
      <Menu
         {...props}
         theme={theme}
         mode={md ? 'horizontal' : 'inline'}
         style={isInDrawer || md ? { display: 'block' } : { display: 'none' }}
      >
         {user ? (
            md ? (
               <Item key={5} onClick={logout}>
                  Cerrar Sesión
               </Item>
            ) : (
               <SubMenu title={user.name}>
                  <Item key="cerrar" onClick={logout}>
                     Cerrar sesión
                  </Item>
               </SubMenu>
            )
         ) : (
            <Item key="iniciar">Iniciar sesión</Item>
         )}
      </Menu>
   );
};
