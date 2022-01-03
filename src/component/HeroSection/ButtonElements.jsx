import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  margin: 2px 2px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#28A745")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#28A745" : "#01BF71")};
    color: white;
  }
`;
export const ButtonLearn = styled(Link)`
  border-radius: 50px;
  padding: 3px 3px;
  margin: 2px 2px;
  background: ${({ primary }) => (primary ? "#DC3545" : "#c82333")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#c82333" : "#01BF71")};
    color: white;
  }
`;
