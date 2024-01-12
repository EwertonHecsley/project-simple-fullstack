<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const inputEmail = ref('');
const inputPassword = ref('');
const isLoading = ref(false);
const route = useRouter();

const logarUser = async () => {
  try {
    isLoading.value = true;

    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: inputEmail.value, password: inputPassword.value }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      route.push('/logado');
    }

  } catch (error) {
    console.error('Erro ao fazer login:', error);
    route.push('/naoLogado');
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <header>
    <div class="container-cabeca">
      <h1>Sistema</h1>
      <div class="container-login">
        <h1>Área de Login</h1>
        <form @submit.prevent="logarUser">
          <input v-model="inputEmail" type="email" placeholder="Digite seu email">
          <input v-model="inputPassword" type="password" placeholder="Digite sua senha">
          <button :disabled="isLoading" @click="logarUser">Acessar</button>
        </form>
      </div>
    </div>
  </header>
  <main>
    <h1>conteudo</h1>
    <RouterLink class="link-cadastro" to="/cadastro">Não tem cadastro? Clique aqui</RouterLink>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}

.link-cadastro {
  display: flex;
  justify-content: right;
  text-decoration: none;
  color: blue;
}

.container-cabeca {
  border: solid 1px #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-cabeca form {
  display: flex;
  justify-content: space-evenly;
  width: 60%;
}

.container-login {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  padding: 5px;
}

.container-login button {
  width: 20%;
  height: 25px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.container-login button:hover {
  background-color: #0056b3;
}
</style>
