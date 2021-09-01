import { Layout } from 'antd';
import NavBar from './shared/NavBar';
import { Route } from 'react-router-dom';
// import Dashboard from './dashboard/Dashboard';
// import Doctor from './personas/Doctor';
// import Paciente from './personas/Paciente';
// import Especialidades from './especialidades/Especialidades';
// import Seguros from './seguros/Seguros';
// import Frecuencia from './frecuencia/Frecuencia';
// import Agendar from './agendar/Agendar';
// import Historial from './consulta/historial/Historial';
// import Recetas from './consulta/recetas/Recetas';
// import Examenes from './consulta/examenes/Examenes';
// import Consulta from './consulta/Consulta';
// import ConsultaAll from './consulta/ConsultaAll';
// import { connect } from 'react-redux';
// import { canView } from './utils/routes';

const { Content } = Layout;

const Home = (props) => {
   const { usuario } = props;

   return (
      <Layout className="layout" style={{ height: '100%' }}>
         <NavBar {...props} />
         <Content style={{ margin: '80px' }}>
            <div>
               <Route path="/" component={Dashboard} exact />
               {usuario[0] && canView(usuario[0].role, 'view_doctor') && (
                  <Route path="/doctor/" component={Doctor} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_paciente') && (
                  <Route path="/paciente/" component={Paciente} />
               )}
               {usuario[0] &&
                  canView(usuario[0].role, 'view_especialidades') && (
                     <Route
                        path="/especialidades/"
                        component={Especialidades}
                     />
                  )}
               {usuario[0] && canView(usuario[0].role, 'view_seguros') && (
                  <Route path="/seguros/" component={Seguros} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_frecuencia') && (
                  <Route path="/frecuencia/" component={Frecuencia} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_agendar') && (
                  <Route path="/agendar/" component={Agendar} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_historial') && (
                  <Route path="/historial/" component={Historial} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_recetas') && (
                  <Route path="/recetas/" component={Recetas} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_examenes') && (
                  <Route path="/examenes/" component={Examenes} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_consulta') && (
                  <Route path="/consulta/" exact component={Consulta} />
               )}
               {usuario[0] && canView(usuario[0].role, 'view_consulta') && (
                  <Route path="/consulta/:consultaId" component={ConsultaAll} />
               )}
            </div>
         </Content>
      </Layout>
   );
};

function mapStateToProps(state) {
   return { usuario: state.usuario };
}

const mapDispatchToProps = (dispatch) => ({
   logoutuser: (user) => {
      dispatch({
         type: 'LOGOUT_USER',
         user,
      });
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
