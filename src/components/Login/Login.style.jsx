//Lib imports
import styled from "styled-components"

export const LoginStyled = styled.div`
background-color:  #3A4118;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;    
align-items: center;


   div {
        display: flex;
        flex-direction:column;
    }

    .authorName{
            color: #3A4118;
            font-family: 'Comfortaa', sans-serif;
            font-size:35px;
        }

        .authorSubtitle{
            color: #F06449;
            font-size: 30px;
            margin-top: -5px;

        }


        .nameAndSubtitle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }

    .loginContainer{
        display: flex;
        background: #fffcf2;
        padding: 40px;
        border-radius: 0.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        width: fit-content;
        overflow: hidden;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);


        form {
            display: flex;
            flex-direction: column;
            
        }

        label {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;     
            color: #3A4118;
            font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
            Oxygen, Ubuntu, Cantarell,   sans-serif;
        }

        input {
            margin-bottom: 40px;
            color: #3A4118;
            width: 320px;
            height: 40px;
            border: none;
            padding: 5px 10px;
            background: none;
            border-bottom: 1px solid #3A4118;
            font-size: 14px;
            font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
            Oxygen, Ubuntu, Cantarell,   sans-serif;
        }

        input[type=text]:focus, [type=password]:focus{
            color: #3A4118;
        }


        button {
            color: #fffcf2;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            background: #F06449;
            border-radius: 0.3em;
            border: 1px solid transparent;
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
            font-family: inherit;
            transition: border-color 0.25s;
            font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
            Oxygen, Ubuntu, Cantarell,   sans-serif;
        }

        button:hover{
            background: #c6482e;
            cursor: pointer;
        }
    }


`;
