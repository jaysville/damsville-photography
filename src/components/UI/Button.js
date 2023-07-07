import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #6b323c;
  padding: 10px;
  background-color: ${(props) => (props.sideNav ? "white" : " #e9e9e9")};
  font-size: 20px;
  color: #6b323c;
  width: 190px;
`;
