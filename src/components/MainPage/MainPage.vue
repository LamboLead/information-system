<template>
  <div id="main_page">
    <Header/>
    <InsertItem/>
    <SearchBar/>
    <Table/>
  </div>
</template>

<script>

import Header from './Header.vue';
import InsertItem from './InsertItem.vue';
import SearchBar from './SearchBar.vue';
import Table from './Table/Table.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    InsertItem,
    SearchBar,
    Table
  }
}
</script>

<style scoped>
#main_page {
  z-index: 3;
  position: relative;
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
  #main_page {
    width: 95%
  }
}
@media (min-width: 601px) {
  #main_page {
    width: 90%;
  }
}
</style>