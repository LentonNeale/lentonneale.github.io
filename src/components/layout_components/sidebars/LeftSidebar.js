// Imports React's useEffect hook for performing side effects in the function component,
// Link component for navigation, and useLocation hook to access the URL's location object.
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, Menu,SubMenu, MenuItem } from 'react-pro-sidebar';
import './sidebar.css'; // Imports CSS file for styling the sidebar.

// Defines a LeftSidebar functional component that accepts 'dynamicLinks' as its props,
// allowing for customizable navigation links to be passed in.
const LeftSidebar = ({ dynamicLinks }) => {
  const location = useLocation(); // Retrieves the location object which represents the current URL.
  const [toggled, setToggled] = React.useState(false);
  // console.log('Left Sidebar - Dynamic Links: ', dynamicLinks);
  // console.log('Left Sidebar - Pathname: '+ location.pathname);

  useEffect(() => {
    // This useEffect hook logs the current dynamicLinks and the pathname
    // whenever the component mounts and anytime the pathname or dynamicLinks change.
  }, [location.pathname, dynamicLinks]); // The hook dependency array includes location.pathname and dynamicLinks, indicating that the effect reruns when either changes.

  return (
    // Renders the sidebar. 'aria-label' is used for accessibility, helping screen readers understand the purpose of the <aside>.
    <aside className='left-sidebar' aria-label="Sidebar Navigation">
      <h1> Left SideBar </h1>
      {/* Maps over 'dynamicLinks' if it exists, creating a Link component for each item.
          This allows for dynamic generation of navigation links based on the 'dynamicLinks' prop.
          The 'active' class is applied to the link matching the current location, styling it as the active link. */}
      {/* <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always"></Sidebar> */}
      <Sidebar>
        <Menu menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
          {dynamicLinks && dynamicLinks.map((link) => (
            <MenuItem key={link.to}>
              <Link to={link.to}> {link.label} </Link>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>


    </aside>
  );
};

export default LeftSidebar; // Exports the LeftSidebar component for use in other parts of the application.
