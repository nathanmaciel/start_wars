import {Navigate, Outlet} from 'react-router-dom'
import PageFiller from '../components/page-containers/PageFiller';


export default function ProtectedRoutes(){

    let expireTime: string = sessionStorage.getItem("token") || "0"
    let now = (new Date()).getTime()

    if(parseInt(expireTime) == 0){
        return(
            <Navigate to="/login" replace={true}/>
        )
    }
    if(parseInt(expireTime) > now){
        return(
            <Outlet />
        )
    }

     return(
        <PageFiller type="redirect"/>
    )
}