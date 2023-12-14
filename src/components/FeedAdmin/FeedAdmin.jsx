import React, { useEffect, useState } from 'react'
import { fetcher } from '../../utils/fetcher';
import { FeedAdminStyled } from './FeedAdmin.style';
import { PencilSquareIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useUsuario } from '../../context/UsuarioContext';



const FeedAdmin = () => {

    const [posts, setPosts] = useState([]);
    const { render, setRender } = useUsuario();

    useEffect(() => {
        async function fetchPosts() {
            try {
                const dadosPosts = await fetcher.getPosts();
                setPosts(dadosPosts);
            } catch (error) {
                console.log("error");
            }
        }
        fetchPosts();
    }, []);

    useEffect(() => {
        if(render){
            async function fetchPosts() {
                try {
                    const dadosPosts = await fetcher.getPosts();
                    setPosts(dadosPosts);
                } catch (error) {
                    console.log("error");
                }
            }
            fetchPosts();
            setRender(false);
        }
    }, [render]);

    const handleDelete = async (id) => {
        try {
            let response = await fetcher.deletePost(id);
            console.log('Lembrete excluído com sucesso!', response);
            setRender(true);
        } catch (error) {
            console.error(error.message);
        }

    };


    return (
        <FeedAdminStyled >
            {
                posts.length === 0 ? (

                    <p>Ainda não foram feitos posts.</p>
                ) : (
                    posts.map((post) => {
                        let postData = new Date(Number(post.created_at));
                        let postActualData = `${postData.getDate()}/${postData.getMonth() + 1}/${postData.getFullYear()} às ${postData.getHours()}:${postData.getMinutes()}`;
                        return (
                            <div className='postContainer'>
                                
                                <div className='titleContainer'>
                                    <p className='postTitle'>{post.title}</p>
                                    <p className='postSubtitle'>{post.subtitle}</p>
                                </div>
                                <div>
                                    <p className='postContent'> {post.content} </p>
                                </div>
                                <div>
                                    <p className='postDate'><span className='strong'>Postado em:</span> {postActualData}</p>
                                </div>
                                <div className='postMenu'>
                                    <Link 
                                        to = {`/editPost?id=${post.id}`}>
                                        <PencilSquareIcon width={20} />
                                    </Link>


                                    <a href="#" className='delete-btn' onClick={(event) => {
                                        if (!confirm("Tem certeza que deseja excluir esse post?")){
                                            event.preventDefault();
                                        } else {
                                            handleDelete(post.id);
                                        }
                                    }}>
                                        <TrashIcon width={20} />
                                    </a>

                                </div>
                            </div>
                        )
                    })
                )
            }

        </FeedAdminStyled>
    )
}

export default FeedAdmin
