import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useRef, useState } from 'react'
import { fetcher } from '../../utils/fetcher';
import { CreatePostStyled } from './CreatePost.style';

const CreatePost = () => {

    const formRef = useRef();
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let post = { title, subtitle, content }
        try {
            let response = await fetcher.createPost(post);
            console.log('Post adicionado com sucesso', response);
            formRef.current.reset();
            window.location.href = '/blog'
        } catch (error) {
            console.error(error.message);
        }
        return;
    }

    function handleUndo() {
        formRef.current.reset();
        setTitle('');
        setSubtitle('');
        setContent('');
    }

  return (
      <CreatePostStyled>

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
                          autoComplete='off'
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
                          autoComplete='off'
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

      </CreatePostStyled>
  )
}

export default CreatePost