import styled from "styled-components";
import { Theme } from "../../theme";


export const UserFormAdmin = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    gap: 15px;
    padding-bottom: ${Theme.padding};
    justify-content: center;
`;

export const AdminCenter = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;