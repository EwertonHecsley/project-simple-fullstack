<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import axios from '../axios';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

async function salvarUsuario(event) {
    event.preventDefault();

    try {
        const response = await axios.post('/user', {
            name: name.value,
            email: email.value,
            password: password.value
        });
        router.push('/');
        console.log(response);
    } catch (error) {
        console.error('Erro ao salvar usuário.', error.response.data);
    }
}

</script>

<template>
    <h1>Cadastro de usuário</h1>
    <main>
        <div class="container-form">
            <form>
                <label for="#nome">Nome: </label>
                <input v-model="name" type="text" name="nome" id="#nome">
                <label for="#email">Email: </label>
                <input v-model="email" type="email" name="nome" id="#email">
                <label for="#senha">Senha: </label>
                <input v-model="password" type="password" name="nome" id="#senha">
                <button @click="salvarUsuario" type="submit">Salvar</button>
            </form>
        </div>
    </main>
</template>

<style>
* {
    background-color: #fff;
}

h1 {
    text-align: center;
}

.container-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-form input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
}

.container-form button {
    width: 200px;
    height: 40px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.container-form button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.container-form button:hover:enabled {
    background-color: #0056b3;
}
</style>