import styled from 'styled-components';

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 16px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 4px;
  font: inherit;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
`;
