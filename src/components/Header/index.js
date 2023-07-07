import styled from "styled-components";
import Logo from "../../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  return (
    <HeaderStyle>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <div>
        <InstagramIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>
      <i className="me-3" onClick={props.onToggleSideNav}>
        <MenuIcon />
      </i>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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
    li {
      margin: 15px;
      color: white;
      transition: all 200ms ease-in-out;
      cursor: pointer;
      &:hover {
        color: #6b323c;
      }
    }
  }
`;
