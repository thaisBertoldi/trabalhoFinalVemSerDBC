import styled from 'styled-components';
import { Theme } from '../../theme';

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${Theme.margin} 0;
`;

export const DivInputsLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${Theme.margin};
    gap: 30px;
`;

export const DivEye = styled.div`
    position: absolute;
    margin-left: 85%;
    margin-top: -9%;
    color: ${Theme.color.white};
`;