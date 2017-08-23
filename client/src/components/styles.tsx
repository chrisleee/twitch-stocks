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
  border: 0;
  width: auto;
  cursor: pointer;
  height: 42px;
  float: right;
  padding: 0 20px 0 20px;
`;
export const Footnote = styled.div`
  text-align: center;
  font-family: Helvetica Neue, Helvetica, Arial;
`;

export const OuterCenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1`font-size: 4em;`;

export const PageIntroText = styled.p`font-size: 1.2em;`;

export const Body = styled.div`font-family: Helvetica, Arial;`;

export const FormWrapper = InnerCenteredWrapper.extend`
  font-family: Helvetica Neue, Helvetica, Arial;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Panel = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const RightAlignedHeaderItem = styled.div`
  margin-left: auto;
  padding-right: 10px;
`;

export const RightAlignedHeaderItemLeft = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-width: ${props => (props.width ? props.width : '')};
  padding-left: 10px;
`;
