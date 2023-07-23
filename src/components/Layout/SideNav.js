import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import { Links } from "../Header";

const SideNav = (props) => {
  return (
    <Style>
      <i onClick={props.onToggleSideNav}>
        <CloseIcon />
      </i>
      <ul>
        {Links.map(({ name, path }) => {
          return (
            <Link key={path} to={path}>
              <li>{name}</li>
            </Link>
          );
        })}
      </ul>
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
      <div className="mt-5">
        <Link to="/contact">
          <Button sideNav={true}>Book Now</Button>
        </Link>
      </div>
    </Style>
  );
};
export default SideNav;
const Style = styled.div`
  background-color: white;
  z-index: 5000;
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* @media (max-width: 850px) {
    display: none;
  } */
  i {
    position: absolute;
    top: 40px;
    right: 30px;
    svg {
      font-size: 35px;
      cursor: pointer;
    }
  }
  a {
    color: black;
  }
  ul {
    padding-inline-start: 0;
    list-style-type: none;
    font-size: 30px;
    margin-bottom: 150px;
    li {
      transition: all 200ms ease-in-out;
      cursor: pointer;
      font-family: "Roboto", sans-serif;
      &:hover {
        color: #6b323c;
      }
    }
  }
  svg {
    margin: 10px;
  }
`;
