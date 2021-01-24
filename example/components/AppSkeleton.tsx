import * as React from 'react';
import Squircle from '../../.';
import { Context } from './Context';

const Window = ({ children }) => {
  const { state } = React.useContext(Context);

  return (
    <Squircle p1={state.P1} p2={state.P2} className="app">
      {children}
    </Squircle>
  );
};

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

const Search = () => {
  const { state } = React.useContext(Context);
  return <Squircle p1={state.P1} p2={state.P2} className="search" />;
};

const WindowControls = () => (
  <div className="window-controls">
    <div className="window-close" />
    <div className="window-minimize" />
    <div className="window-maximize" />
  </div>
);

const Menu = () => {
  const { state } = React.useContext(Context);
  return (
    <div className="menu">
      <Squircle p1={state.P1} p2={state.P2} className="menu-item" />
      <Squircle p1={state.P1} p2={state.P2} className="menu-item" />
      <Squircle p1={state.P1} p2={state.P2} className="menu-item" />
      <Squircle p1={state.P1} p2={state.P2} className="menu-item" />
      <Squircle p1={state.P1} p2={state.P2} className="menu-item" />
    </div>
  );
};

const User = () => {
  const { state } = React.useContext(Context);
  return (
    <div className="user">
      <Squircle p1={state.P1} p2={state.P2} className="user-avatar" />
      <Squircle p1={state.P1} p2={state.P2} className="user-details" />
    </div>
  );
};

const Body = ({ children }) => <div className="body">{children}</div>;

const Banner = () => {
  const { state } = React.useContext(Context);
  return <Squircle p1={state.P1} p2={state.P2} className="banner" />;
};
const Features = ({ children }) => <div className="features">{children}</div>;
const FeaturedItem = () => {
  const { state } = React.useContext(Context);
  return <Squircle p1={state.P1} p2={state.P2} className="featured-item" />;
};
const Category = ({ children }) => <div className="category">{children}</div>;
const Items = ({ children }) => <div className="items">{children}</div>;
const Item = () => {
  const { state } = React.useContext(Context);
  return (
    <div className="item">
      <Squircle p1={state.P1} p2={state.P2} className="item-image" />
      <Squircle p1={state.P1} p2={state.P2} className="item-details" />
    </div>
  );
};

const AppSkeleton = () => {
  return (
    <Window>
      <Sidebar>
        <WindowControls />
        <Search />
        <Menu />
        <User />
      </Sidebar>
      <Body>
        <Banner />
        <Features>
          <FeaturedItem />
          <FeaturedItem />
        </Features>
        <Category>
          <Items>
            <Item />
            <Item />
            <Item />
          </Items>
          <Items>
            <Item />
            <Item />
            <Item />
          </Items>
          <Items>
            <Item />
            <Item />
            <Item />
          </Items>
        </Category>
      </Body>
    </Window>
  );
};

export default AppSkeleton;
