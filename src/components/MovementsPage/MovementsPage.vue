<template>
  <div id="movements_page">
    <Header/>
    <InsertMovement/>
    <Table/>
  </div>
</template>

<script>
import Header from './Header.vue';
import InsertMovement from './InsertMovement.vue';
import Table from './Table/Table.vue';

export default {
  name: 'MovementsPage',
  components: {
    Header,
    InsertMovement,
    Table
  }
}
</script>

<style scoped>
#movements_page {
  z-index: 2;
  position: absolute;
  top: 0;

  height: 100%;
  margin-inline: auto;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;

  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
}

@media (max-width: 600px) {
  #movements_page {
    width: 95%
  }
}
@media (min-width: 601px) {
  #movements_page {
    width: 90%;
  }
}
</style>