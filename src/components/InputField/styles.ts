import styled from "styled-components";

export const InputWrapper = styled.div<{
    isError?: boolean;
  }>`
  position: relative;
  border: ${(props) => (props.isError ? "1px solid #ff3333" : "1px solid #302f2f")}};
  border-radius: 30px;
  padding: 15px 20px;
  width: 100%;
  background: ${(props) => (props.isError ? "#ffedf0" : "none")};
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  background: none;
`;
