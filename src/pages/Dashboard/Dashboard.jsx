//React
import { useRef, useState } from "react";

import React from 'react';

//Lib imports
import { ArrowRightOnRectangleIcon, PlusIcon, PowerIcon } from "@heroicons/react/24/solid"
import { fetcher } from "../../utils/fetcher";
import { DashboardStyled } from "./DashboardStyled.style";
import FeedAdmin from "../../components/FeedAdmin/FeedAdmin";

import fotoLP from "../../assets/fotoLP.jpg"
import { useUsuario } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

    const { userLogged, setUserLogged, render, setRender } = useUsuario();
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            setUserLogged(false);
            setRender(true);
            navigate('/login');

        } catch (error) {
            console.error(error.message);
            return toast.error(`Failed to login. Username or password invalid`)

        }
    };

    function handleCreatePost(){
        navigate('/createPost');
    }
    return (


        <DashboardStyled>
            <div className="FeedContainer">
                <div className="MenuContainer">

                    <div className="aboutAuthor">

                        <div className="authorFoto">
                            <img src={fotoLP} alt="" />
                        </div>

                        <div className="nameAndSubtitle">
                            <h2 className="authorName">Malu Costa</h2>
                            <h3 className="authorSubtitle">Nutricionista</h3>
                        </div>
                        <p className="bio">
                            Formada em Nutrição pela UFVJM, Malu Costa guia pacientes com paixão por hábitos saudáveis</p>
                    </div>
                    <div className="btnArea">
                        <button className='NewBtn NewPost' onClick={handleCreatePost}>
                            <PlusIcon width={20} />
                            Criar</button>
                        <button className='NewBtn logoutBtn' onClick={handleLogout}>
                            <PowerIcon width={20} />
                            Sair</button>
                    </div>

                </div>
                <FeedAdmin />
            </div>
        </DashboardStyled>

    )

}

export default Dashboard