import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom'
import { State } from '../store';

export default function ProtectedRoutes(){

    let expireTime: string = sessionStorage.getItem("token") || "0"
    let now = (new Date()).getTime()

     return(
        parseInt(expireTime) > now? <Outlet /> : <Navigate to="/login" replace={true}/>
    )
}