<template>
    <TheHeader v-if="showHeader" />

    <br>

    <tab>tab 1</tab>
    <tab>tab 2</tab>

    <div>
      Conteúdo 1
    </div>

    <div>
      Conteúdo 2
    </div>

    <br>

    <div v-show="showName">
      Nome: {{ firstName }} <br>
      Sobrenome: {{ lastName }}
    </div>

    <br>

    <div v-if="accessLevel === 'admin'">Usuário Admin</div>
    <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
    <div v-else>User</div>

    <img
        alt="Vue logo"
        src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        TheHeader
    },
    data() {
        return {
            showHeader: true,
            firstName: 'Evan',
            lastName:  'You',
            showName: true,
            accessLevel: 'admin'
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>