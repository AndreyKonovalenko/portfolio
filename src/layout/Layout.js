import React from 'React';

const Layout = (props) => {

  return (
    <div>
      <h1>Layout</h1>
      <div>{props.children}</div>
    </div>
  );

}

export default Layout;
