//Lib imports
import styled from "styled-components"

export const LandingPageStyled = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');

    display: flex;
    flex-direction: column;



    .navbar{
        position: fixed;
    } 

    .divider{
        margin-top: -100px;
        margin-bottom: -100px;
        z-index: 1;
        background-color: #FAF3DD;
        width: 100vw;
        height: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .ornament{
            height: 200px;
            width: 300px;
        }
    }
    .mainContent{
        
        width: 100vw;
        height: 100vh;
        background-color: #FAF3DD;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
        align-items: center;


        img{
        width: 300px;
        height: 300px;
        border-radius: 100%;
        object-fit: cover;
    }
        .title{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }

        .MaluCosta{
            color: #3A4118;
        }

        .Nutricionista{
            margin-top: -20px;
            color: #F06449;
            font-size: 80px;
        }

        .blog-btn{
            font-size: 20px;
            background-color: #3A4118;
            padding: 5px 30px 10px;
            color: #FAF3DD;
        }

        .blog-btn:hover{
            background-color: #262b10;
        }

    }  

    .about {
        width: 100vw;
        height: 100vh;
        background-color: #FAF3DD;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 60px;
        align-items: center;

        .titleAbout{
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #3A4118;
        }

        .Subtitle{

        }

        .SocialsContainer{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 150px;
            font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
            Oxygen, Ubuntu, Cantarell,   sans-serif;
        }

        .aboutText {
            display: flex;
            flex-direction: row;
            gap: 40px;

            p {
                color: #1f1f1f;
                max-width: 400px;
                font-size: 18px;
                text-align: justify;
            }
        }
        
        
    }

    .bloco{
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }

    .blocoContent{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .blocoContentIcon{
        display: flex;
        flex-direction: row;
        font-size: 14px;
        gap: 5px;
    }

    .blocoContentTitle{
        font-weight: bold;
        font-size: 18px;
        color: #3A4118;
        margin-bottom: 5px;
    }

    

    

    
`;