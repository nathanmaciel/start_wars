import React, { Suspense }  from "react";
import { BrowserRouter, Route, Routes, Navigate, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import ProtectedRoutes from "./ProtectedRoutes";
import { createBrowserHistory } from "history";

const history =  createBrowserHistory();

const Login = React.lazy(() => import('../components/page-containers/Login'))
const AllFilms = React.lazy(() => import('../components/page-containers/AllFilms'))
const FilmPage = React.lazy(() => import('../components/page-containers/FilmPage'))


export default function StarRoutes(){
    return(
        <React.Fragment>
            <HistoryRouter history={history}>
                    <Suspense fallback={<h1>carregando</h1>}>
                        <Routes>
                            <Route path="*" element={<Navigate to="/films" replace />} />
                            <Route path="/" element={<Navigate to="/login" replace={true}/>}/>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/films" element={<ProtectedRoutes />}>
                                <Route index element={<AllFilms />}/>
                                <Route path="/films/:id" element={<FilmPage />}/>
                            </Route>
                        </Routes>
                    </Suspense>
            </HistoryRouter>
        </React.Fragment>
    )
}