import React, { useEffect, useState } from 'react'
import { fetcher } from '../../utils/fetcher';
import { PostsBlogStyled } from './PostsBlog.style';




const PostsBlog = () => {

    const [posts, setPosts] = useState([]);

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


  return (
      <PostsBlogStyled >

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
                   </div>
                )
            })
        )
    }

      </PostsBlogStyled>
  )
}

export default PostsBlog
