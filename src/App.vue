<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import { reactive } from 'vue';
import { useAuthStore } from './stores/auth'
import { useTxnStore } from './stores/transaction';

const auth = useAuthStore()
const transaction = useTxnStore()

const data = reactive({
  variable1: "test variable",
  variable2: [1, 2, 3, 4],
  counter: 1
})

const tambahCounter = () => {
  data.counter++
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/pulici.gif" width="125" height="125" />

    <div class="wrapper">
      <Header :text="'Hello Vue'">
        <button @click="tambahCounter"> Counter</button>
        Pedro pedro pedro pedro ped {{ data.counter }}
        <p>
          *racoon dancing*
        </p>
        <template #Header_part1="{ param1 }">
          <h2>{{ param1 }}</h2>

        </template>
      </Header>
      {{ data.variable1 }}
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink v-if="auth.isLoggedIn" to="/">Home</RouterLink>
        <RouterLink v-if="auth.isLoggedIn" to="/about">About</RouterLink>
        <RouterLink v-if="!auth.isLoggedIn" to="/login">Login</RouterLink>
        <RouterLink v-if="auth.isLoggedIn" to="/transaction">Transfer</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  /* background-color: beige;
  color: rebeccapurple; */
  /* background-image: url("https://cdn.7tv.app/emote/63cf54fd75acdcde6164a434/4x.webp");
  background-size: cover; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
