// TODO fix linter warnings in the file
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';

import { logout, logoutEvent } from '../utils';

const Header = ({ user }) => {
  // The users email is used to authenticate and check if they are logged in.
  const userIsDefined = !!user && !!user.email;
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const onLogout = eve => {
      logoutEvent(eve, user ? user.url : '/');
    };

    // adds a listener to the storage event to log the user out
    window.addEventListener('storage', onLogout, false);

    return () => {
      window.removeEventListener('storage', onLogout, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNavBarLinks = () => {
    // Depending on if the user is logged in or not, set the correct links in the header
    let links = [
      {
        href: '/test',
        text: 'Test Data',
      },
    ];

    if (userIsDefined) {
      links = [
        {
          href: '/',
          text: 'Connect Data',
          current: true,
        },
        {
          href: '/logout',
          text: 'Logout',
          onClick: logout,
        },
        {
          href: '/dashboard',
          text: user.email,
        },
        ...links,
      ];
    } else {
      links = [
        {
          href: '/login',
          text: 'Login',
        },
        ...links,
      ];
    }

    return links;
  };

  return (
    <header>
      <Navbar color="faded" light expand="md">
        <NavbarBrand
          href="https://1up.health/dev"
          className="mr-auto navbar-logo"
        >
          1upHealth
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {getNavBarLinks().map(({ href, text, current, onClick }) => (
              <NavItem
                key={text}
                onClick={onClick}
                className="nav-item--header"
              >
                <>
                  <Link href={href}>
                    <a className="nav-link">{text}</a>
                  </Link>
                  {current && <span className="sr-only">(current)</span>}
                </>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
      <style jsx>{`
        a.nav-link:not(:hover) {
          color: #007bff;
        }
      `}</style>
      <style global jsx>{`
        .nav-item--header:first-of-type {
          margin-left: 1rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
