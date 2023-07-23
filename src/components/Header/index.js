import styled from "styled-components";
import Logo from "../../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <HeaderStyle>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          {Links.map(({ name, path }) => {
            return (
              <Link to={path}>
                <NavLink
                  onClick={() => {
                    setActiveLink(path);
                  }}
                  key={name}
                  active={activeLink === path}
                >
                  {name}
                </NavLink>
              </Link>
            );
          })}
        </ul>
      </nav>

      <div>
        <a href="https://www.instagram.com/damsvillephotography/">
          <InstagramIcon />
        </a>

        <a href="/">
          <FacebookIcon />
        </a>
        <a href="mailto:damilolaabby@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <i className="me-3" onClick={props.onToggleSideNav}>
        <MenuIcon />
      </i>
    </HeaderStyle>
  );
};

export default Header;

export const Links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];

const HeaderStyle = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  top: 0;

  z-index: 500;
  a {
    text-decoration: none;
  }
  div {
    transform: translateY(30px);
    svg {
      display: inline-block;
      margin: 15px;
    }
    svg {
      color: #6b323c;
      font-size: 30px;
    }
  }
  i {
    @media (min-width: 850px) {
      display: none;
    }
    transform: translateY(40px);
    svg {
      font-size: 40px;
      color: aliceblue;
      cursor: pointer;
    }
  }
  nav {
    display: flex;
    justify-content: center;
  }
  img {
    width: 200px;
    transform: translateY(-30px);
  }
  @media (max-width: 850px) {
    div,
    nav {
      display: none;
    }
    img {
      width: 150px;
      transform: translateY(-10px) translateX(-20px);
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    transform: translateY(30px);

    font-size: 20px;
    @media (max-width: 740px) {
      font-size: 15px;
    }
    padding-inline-start: 0;
  }
`;

const NavLink = styled.li`
  margin: 15px;
  color: white;

  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #6b323c;
    transition: all 200ms ease-in-out;
  }
  color: ${(props) => props.active && "#6b323c"};
`;
