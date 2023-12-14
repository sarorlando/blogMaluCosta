//Lib imports
import styled from "styled-components"

export const DashboardStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
    background-color: #3A4118;
    
    font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
    Oxygen, Ubuntu, Cantarell,   sans-serif;

    .FeedContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
        
    }
    .MenuContainer{
        
    }
    .aboutAuthor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding: 20px;
        gap: 10px;

        .authorFoto img {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        object-fit: cover;
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

        }
        .bio {
            text-align: center;
            font-size: 14px;
        }
    }

    .MenuContainer{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 300px;
        height: fit-content;
        background-color: #fffcf2;
        border-radius: 10px;
    }


    .btnArea {
        background-color: #F06449;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        border-radius: 0px 0px 10px 10px;
    }

    .NewBtn  {
        height: 60px;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border: none;
        width: 50%;
        color: white;
        font-weight: bolder;
        background-color: rgba(0, 0, 0, 0.0);
        font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
    Oxygen, Ubuntu, Cantarell,   sans-serif;
    }

    .NewPost{
     border-radius: 0px 0px 0px 10px;
    }
    .logoutBtn{
     border-radius: 0px 0px 10px 0px;
    }


    .NewBtn:hover{
        background-color: #b63920;
        cursor: pointer;
    }

    h1 {
      font-size: var(--fs-300);
      display: block;
      margin: 20px;
      color: white !important;
    }

   div {
        display: flex;
        flex-direction:column;
    }

  

    
`