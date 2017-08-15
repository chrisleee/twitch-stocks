import styled from 'styled-components';

export const InnerCenteredWrapper = styled.div`
  margin: 0 auto;
  padding: 40px;
  width: auto;
`;

export const Title = styled.div`
  font-size: 2em;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  width: 300px;
`;

export const Button = styled.button`
  // background-color: purple;
  border: 0;
  width: auto;
  cursor: pointer;
  height: 42px;
  float: right;
  padding: 0 20px 0 20px;
`;
export const Footnote = styled.div`
  // background-color: orange;
  text-align:center;
  font-family: Helvetica Neue, Helvetica, Arial;
`;

export const OuterCenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
