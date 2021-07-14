<template>
  <div class="header-div">
    <h1><fa icon="boxes"/> Movimientos de cosa 3</h1>
  <div class="total-counter"><h3>Total: 69</h3></div>
  </div>
</template>

<style scoped>
.header-div {
  width: 90%;
  height: 10%;

  margin-block: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.total-counter {
  width: 20%;
  height: 100%;

  border-radius: 25px;

  background-color: var(--button-background-color);
  border: var(--component-border);
  border-width: 2px;
  text-align: center;
}
</style>