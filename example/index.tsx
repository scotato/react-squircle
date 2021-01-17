import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Squircle from '../.';

const P1 = 4;
const P2 = 16;

const Window = ({ children }) => (
  <Squircle p1={P1} p2={P2} className="app">
    {children}
  </Squircle>
);

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

const Search = () => <Squircle p1={P1} p2={P2} className="search" />;

const WindowControls = () => (
  <div className="window-controls">
    <div className="window-close" />
    <div className="window-minimize" />
    <div className="window-maximize" />
  </div>
);

const Menu = () => (
  <div className="menu">
    <Squircle p1={P1} p2={P2} className="menu-item" />
    <Squircle p1={P1} p2={P2} className="menu-item" />
    <Squircle p1={P1} p2={P2} className="menu-item" />
    <Squircle p1={P1} p2={P2} className="menu-item" />
    <Squircle p1={P1} p2={P2} className="menu-item" />
  </div>
);

const User = () => (
  <div className="user">
    <Squircle p1={P1} p2={P2} className="user-avatar" />
    <Squircle p1={P1} p2={P2} className="user-details" />
  </div>
);

const Body = ({ children }) => <div className="body">{children}</div>;

const Banner = () => <Squircle p1={P1} p2={P2} className="banner" />;
const Features = ({ children }) => <div className="features">{children}</div>;
const FeaturedItem = () => (
  <Squircle p1={P1} p2={P2} className="featured-item" />
);
const Category = ({ children }) => <div className="category">{children}</div>;
const Items = ({ children }) => <div className="items">{children}</div>;
const Item = () => (
  <div className="item">
    <Squircle p1={P1} p2={P2} className="item-image" />
    <Squircle p1={P1} p2={P2} className="item-details" />
  </div>
);

const App = () => {
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

ReactDOM.render(<App />, document.getElementById('root'));
