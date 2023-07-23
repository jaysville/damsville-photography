import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Style>
      <h3>Damsville Photography</h3>
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
      <br />
      <p>Crewe, Cheshire UK</p>

      <p>&copy; 2023</p>
      <p>
        Powered by <a href="https://olaotandev.netlify.app">Olaotan Abarowei</a>
      </p>
    </Style>
  );
};

export default Footer;

const Style = styled.footer`
  background-color: #f8f3e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  h3 {
    font-family: "Dancing Script", Sans-serif;
  }
  a {
    text-decoration: underline;
    color: black;
    font-weight: bold;
  }
  svg {
    color: #6b323c;
    margin: auto 15px;
  }
`;
