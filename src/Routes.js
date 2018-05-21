import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import HomeService from './components/home/HomeService';
import Ingresos from './components/ingresos/IngresoContainer';
import Gastos from './components/gastos/GastosContainer';
import Caja from './components/caja/TableContainer';
import Cliente from './components/cliente/TableCliente';
import Resumen from './components/resumen/Resumen';
import ManageIngresoPage from './components/ingresos/ManageIngresoPage';
import ManageGastoPage from './components/gastos/ManageGastoPage';
import LoginContainer from "./components/login/LoginContainer";
import SignUpContainer from "./components/signup/SignUpContainer";
import PrivateRoute from "./PrivateRoute";
//import IngresoFormContainer from "./components/ingresos/IngresoFormContainer";
//import GastosFormConnect from "./components/gastos/GastoFormConnect";






const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/servicios" component={HomeService} />
        <PrivateRoute exact path="/ingresos" component={Ingresos} />
        <PrivateRoute exact path="/gastos" component={Gastos} />
        <PrivateRoute path="/gastos/:key" component={ManageGastoPage} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <PrivateRoute path="/caja" component={Caja} />
        <PrivateRoute path="/resumen" component={Resumen} />
        <PrivateRoute path="/ingresos/:key" component={ManageIngresoPage} />
         <PrivateRoute path="/clientes" component={Cliente} />


    </Switch>
);

export default Routes
