import Navbar from './Navbar';
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Layout</h1>
      <div>{props.children}</div>
    </div>
  );
}
export default Layout;
