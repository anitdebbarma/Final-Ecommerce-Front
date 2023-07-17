import styled, { css } from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.disabled ? "lightgray" : "#24a0ed")};
  color: ${(props) => (props.disabled ? "black" : "#fff")};
  font-size: 0.9rem;
  padding: 0.8rem;
  transition: all 0.5s;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "lightgray"
        : props.hoverStyle?.backgroundColor || "#707070"};
    color: ${(props) =>
      props.disabled ? "black" : props.hoverStyle?.color || "#fff"};
    ${(props) =>
      props.hoverStyle &&
      css`
        transition: background-color 0.3s, color 0.3s;
      `};
  }
`;
