import styled from "styled-components";

interface ButtonProps {
  $variant?: "secondary";
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.$variant === "secondary" ? "var(--white)" : "var(--dark-blue)"};
  color: ${(props) =>
    props.$variant === "secondary" ? "var(--dark-blue)" : "var(--white)"};
  border: ${(props) =>
    props.$variant === "secondary" ? "2px solid var(--dark-blue)" : "none"};
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 1em;
  font-weight: 700;
  line-height: 19px;
  width: 50%;
  cursor: pointer;
`;

export default Button;
