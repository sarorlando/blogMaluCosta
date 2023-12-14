import React from 'react'
import { useRef, useState, useEffect } from "react";
import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { fetcher } from "../../utils/fetcher";
import { EditPostStyled } from './EditPost.style';
import { useNavigate } from 'react-router-dom';
const EditPost = () => {


    const queryString = window.location.search;

    const queryId = queryString.substring(1);
    const [idPost, id] = queryId.split('=');

    console.log(id);

    const formRef = useRef();
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        let post = { title, subtitle, content, id }
        console.log(post);
        try {
            let response = await fetcher.updatePost(post);
            console.log('Post adicionado com sucesso', response);
            formRef.current.reset();
            navigate('/blog');
        } catch (error) {
            console.error(error.message);
        }
        return;
    }

    useEffect(() => {
        async function fetchPost() {
            if (id) {
                try {
                    let response = await fetcher.getPostById(id);
                    setTitle(response[0].title);
                    setSubtitle(response[0].subtitle);
                    setContent(response[0].content);
                } catch (error) {
                    console.error('Falha ao carregar post', error);
                }
            }
        }
        fetchPost();
    }, [id]);

    function handleUndo() {
        formRef.current.reset();
        setTitle('');
        setSubtitle('');
        setContent('');
    }
    return (
        <EditPostStyled>

            <div className='EditPostContainer'>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className='ContainerInput'>
                        <label
                            className='Label'
                            htmlFor="titulo">Título</label>
                        <input className='Input'
                            type="text"
                            name="titulo"
                            id="titulo"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            pattern='.*\S.*'>
                        </input>
                    </div>
                    <div className='ContainerInput'>
                        <label
                            className='Label'
                            htmlFor="subtitulo">Subtítulo</label>
                        <input className='Input'
                            type="text"
                            name="subtitulo"
                            id="subtitulo"
                            required
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            pattern='.*\S.*'>
                        </input>
                    </div>
                    <div className='ContainerInput'>
                        <label 
                            className='Label'
                            htmlFor="conteudo">Conteúdo</label>
                        <textarea
                            className='textContent'
                            type="text"
                            name="conteudo"
                            id="conteudo"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            pattern='.*\S.*'>
                        </textarea>
                    </div>
                    <div className='btnArea'>
                        <button
                            className='btnCancel'
                            onClick={handleUndo}>
                            <XMarkIcon width={20} />
                            Cancelar
                        </button>
                        <button
                        className='btnSave'
                        type='submit'>
                            <PaperAirplaneIcon width={20} />
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

        </EditPostStyled>
    )
}

export default EditPost