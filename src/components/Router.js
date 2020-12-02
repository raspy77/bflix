import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
// 오로지 아루터만 관리하는 컴포넌트
import Home from "../routes/Home";
import Tv from "../routes/Tv";
import Detail from "../routes/Detail";
import Search from "../routes/Search";

export default () => (
  <Router>
    <>
      <Header />
      {/* 기본적으로 스위치가없이 라우터를 배치하면 모든라우터를 탄다.
      Switch를  활용하면 오로지 하나의 라우터만 타게됨 */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={Tv} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
      </Switch>
    </>
  </Router>
);
