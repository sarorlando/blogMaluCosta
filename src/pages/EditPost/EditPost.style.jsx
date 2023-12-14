//Lib imports
import styled from "styled-components"


export const EditPostStyled = styled.div`
    background-color: #3A4118;;
    font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
    Oxygen, Ubuntu, Cantarell,   sans-serif;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: scroll;
    

    .EditPostContainer{
        display: flex;
        flex-direction: column;
        background: #fffcf2;
        height: fit-content;
        width: fit-content;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .ContainerInput{
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px 0px;
    }
     
    .textContent{
        font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell,   sans-serif;  
        width: 700px;
        min-height: 150px;
        max-height: 400px;
        border: 1px solid rgba(0, 0, 0, 0.0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 15px;
        font-weight: 400;
        overflow: scroll;
        padding: 10px 15px;
    }

    .Label{ 
        color: #3A4118;
    }

    .Input{
        font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell,   sans-serif;  
        font-weight: 400;
        border: 1px solid rgba(0, 0, 0, 0.0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        width: 700px;
    }

    .btnArea{
        width: 100%;
        display: flex;
        gap: 20px;
        justify-content: end;
        padding: 20px 0px 0px 0px;
    }
    
    .btnSave,
    .btnCancel{
        display: flex;
        width: 100px;
        height: 40px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-weight: bold;
        border-radius: 3px;
    }

    .btnSave{
        background: #F06449;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color: #fffcf2;
        border: 1.5px solid rgba(0, 0, 0, 0.0);
    }

    .btnSave:hover{
        cursor: pointer;
        background: #b6412a;
    }

    .btnCancel{
        background: none;
        border: 1.5px solid #3f3e3e;
        color: #3f3e3e;
    }

    .btnCancel:hover{
        cursor: pointer;
        background: #3f3e3e;
        color: #fffcf2;
    }
`;