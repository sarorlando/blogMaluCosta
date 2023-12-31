const BASE_URL = "https://malu-costa-api.onrender.com"

//Objeto fetcher
export const fetcher = {
    async createPost(_post) {
        try {
            const response = await fetch(`${BASE_URL}/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_post)
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao fazer publicação.');
            }
        } catch (error) {
            throw new Error(`Erro ao enviar dados para o servidor: ${error.message}`);
        }
    },

    async getPosts() {
        try {
            const response = await fetch(`${BASE_URL}/post`, {
                method: 'GET',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao carregar posts');
            }

        } catch (error) {
            throw new Error(`Erro ao obter dados do servidor: ${error.message}`);
        }

    },
    async getPostById(_id) {
        try {
            const response = await fetch(`${BASE_URL}/post/${_id}`, {
                method: 'GET',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao carregar post');
            }

        } catch (error) {
            throw new Error(`Erro ao obter dados do servidor: ${error.message}`);
        }
    },

    async deletePost(_id) {
        try {
            const response = await fetch(`${BASE_URL}/post/${_id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao excluir post');
            }

        } catch (error) {
            throw new Error(`Erro ao excluir dados do servidor: ${error.message}`);
        }
    },

    async updatePost(_post) {
        console.log(_post);
        console.log(JSON.stringify(_post));

        try {
            const response = await fetch(`${BASE_URL}/post`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_post)
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao atualizar post');
            }

        } catch (error) {
            throw new Error(`Erro ao atualizar dados no servidor: ${error.message}`);
        }
    },

    async getUser() {
        try {
            const response = await fetch(`${BASE_URL}/user`, {
                method: 'GET',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao buscar usuário');
            }

        } catch (error) {
            throw new Error(`Erro ao obter dados do servidor: ${error.message}`);
        }
    },



};

