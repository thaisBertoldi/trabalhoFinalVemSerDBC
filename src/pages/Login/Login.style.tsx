import styled from 'styled-components';
import { Theme } from '../../theme';

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${Theme.margin};
`;

export const DivInputsLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${Theme.margin};
    gap: 30px;
`;

export const DivEye = styled.div`
    position: absolute;
    margin-left: 90%;
    margin-top: -6%;
    color: ${Theme.color.white};
`;