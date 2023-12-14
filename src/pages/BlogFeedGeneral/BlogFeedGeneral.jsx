import React from 'react'
import PostsBlog from '../../components/postsBlog/PostsBlog'
import { BlogFeedGeneraldStyled } from './BlogFeedGeneral.style'
import fotoLP from "../../assets/fotoLP.jpg"

const BlogFeedGeneral = () => {

  return (
    <BlogFeedGeneraldStyled>
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

        </div>
        <PostsBlog />
      </div>
    </BlogFeedGeneraldStyled>
  )
}

export default BlogFeedGeneral