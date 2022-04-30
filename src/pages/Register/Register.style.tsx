import styled from 'styled-components';
import { Theme } from '../../theme';

export const DivEyeRegister = styled.div`

  position: absolute;
  font-size: 20px;
  right: 30px;
  bottom: 41%;
  color: ${Theme.color.white};

  @media (max-width: 700px) {
    bottom: 41%;
  }
  @media (max-width: 480px) {
    bottom: 43%;
  }
  @media (max-width: 380px) {
    visibility: hidden;
  }
`;