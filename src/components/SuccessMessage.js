import React from 'react';
import styled from "styled-components";

const MessageContainer = styled.div`
  max-width: 400px;
  margin-bottom: 1.45rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid var(--fifth-color);
  border-radius: 3px;
  outline-width: 3px;
  outline-offset: -2px;
  color: var(--fifth-color);
  box-shadow: inset 0 0 2px var(--fifth-color);
  font-size: 12px;
`;

const SuccessMessage = () => {

  return (
    <MessageContainer>
      <h3>Message Success!</h3>
      <div>I make every effort to return all messages! Have a great day!</div>
    </MessageContainer>
  )
}

export default SuccessMessage; 