import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TaskPage from "./pages/tasks";
import LoginPage from "./pages/login";
import HelpPage from "./pages/help";

const Router = () => {
    return (
        <BrowserRouter>
            <header className="global-head">
                <ul>
                    {/* <li><a href="/">ホーム</a></li>
                    <li><a href="/help">ヘルプ</a></li>
                    <li><a href="/login">ログイン</a></li> */}
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/help">ヘルプ</Link></li>
                    <li><Link to="/login">ログイン</Link></li>
                    <li><span>ログアウト</span></li>
                </ul>
            </header>
            <div>
                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <TaskPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default Router