<template>
  <MainPage/>
  <MovementsPage/>
</template>

<script>
import MainPage from './components/MainPage/MainPage.vue';
import MovementsPage from './components/MovementsPage/MovementsPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    MovementsPage
  }
}
// npm run serve
// npm run build
</script>

<style>
:root {
  --component-background-color: hsl(50, 100%, 90%);
  --component-border: 1px solid hsl(50, 0%, 50%);
  --button-background-color: hsl(50, 95%, 75%);
}

body {
  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  :root {
    font-size: 13px;
  }
}
@media (min-width: 601px) {
  :root {
    font-size: 15px;
  }
}
</style>
