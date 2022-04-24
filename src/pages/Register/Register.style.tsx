import styled from 'styled-components';

export const DivLabelFile = styled.div`
  width: 100%;

  input[type="file"] {
    display: none;
  }

  label {
    width: 1000px;
    background-color: #156ebe;
    padding: 5px;
    font-size: 14px;
    color: #fff;
    border: none;
    border-bottom: 2px solid #25292a;
  }
`;