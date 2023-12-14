//Lib imports
import styled from "styled-components"

export const FeedAdminStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3A4118;
    
    .postMenu{
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 10px
    }

    .titleContainer{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .postContainer{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;;
        margin-bottom: 20px;
        border-radius: 10px;
        width: 680px;
        margin-top: 20px;
        gap: 20px;
        height: fit-content;
        background-color: #fffcf2;
        
    }
`;