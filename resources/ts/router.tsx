import React, { useEffect } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    RouterProps,
    RouteProps,
    Redirect
} from "react-router-dom";
import TaskPage from "./pages/tasks";
import LoginPage from "./pages/login";
import HelpPage from "./pages/help";
import { useLogout, useUser } from "./pages/queries/AuthQuery";
import { useAuth } from "./hooks/AuthContext";

import axios from "axios";


const Router = () => {

    const logout = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();

    // useEffectはレンダーの際に実行される関数
    useEffect(() => {
        if(authUser) {
            setIsAuth(true);
        }
    }, [authUser]);

    const GuardRoute = (props: RouteProps) => {
        if(!isAuth) return <Redirect to="/login" />
            return <Route {...props} />
    }

    const LoginRoute = (props: RouteProps) => {
        if(!isAuth) return <Redirect to="/" />
            return <Route {...props} />
    }

    const navigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/help">ヘルプ</Link></li>
                <li onClick={(() => logout.mutate())} ><span>ログアウト</span></li>
            </ul>
        </header>
    );

    const loginNavigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/help">ヘルプ</Link></li>
                <li><Link to="/login">ログイン</Link></li>
            </ul>
        </header>
    );

  


    return (
        <BrowserRouter>
                { isAuth ? navigation : loginNavigation }
            <div>
                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <LoginRoute path="/login">
                        <LoginPage />
                    </LoginRoute>
                    <GuardRoute path="/">
                        <TaskPage />
                    </GuardRoute>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default Router