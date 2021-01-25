import * as React from 'react';
import { SquircleMask } from '../../.';

const Window = ({ children }) => {
  return (
    <SquircleMask c={1} className="app">
      {children}
    </SquircleMask>
  );
};

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

const Search = () => {
  return <SquircleMask c={8} className="search" />;
};

const WindowControls = () => (
  <div className="window-controls">
    <div className="window-close" />
    <div className="window-minimize" />
    <div className="window-maximize" />
  </div>
);

const Menu = () => {
  return (
    <div className="menu">
      <SquircleMask c={8} className="menu-item" />
      <SquircleMask c={8} className="menu-item" />
      <SquircleMask c={8} className="menu-item" />
      <SquircleMask c={8} className="menu-item" />
      <SquircleMask c={8} className="menu-item" />
    </div>
  );
};

const User = () => {
  return (
    <div className="user">
      <SquircleMask c={8} className="user-avatar" />
      <SquircleMask c={8} className="user-details" />
    </div>
  );
};

const Body = ({ children }) => <div className="body">{children}</div>;

const Banner = () => {
  return <SquircleMask c={2} className="banner" />;
};
const Features = ({ children }) => <div className="features">{children}</div>;
const FeaturedItem = () => {
  return <SquircleMask c={3} className="featured-item" />;
};
const Category = ({ children }) => <div className="category">{children}</div>;
const Items = ({ children }) => <div className="items">{children}</div>;
const Item = () => {
  return (
    <div className="item">
      <SquircleMask c={7} className="item-image" />
      <SquircleMask c={7} className="item-details" />
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
