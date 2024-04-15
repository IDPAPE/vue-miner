// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
const appState = computed(()=> AppState)

let cheese = ref(0)

function addCheese(){
  console.log('adding cheese')
  cheese.value ++
}

</script>


// HTML
<template>
  <header class="bg-dark text-light p-3">
    <h1>Moon Miner</h1>
  </header>
  <main class="container-fluid">
    
    <section class="row">
      <div class="col-10 text-center">
        <h1>🌕</h1>
      </div>
    </section>

    <section class="row justify-content-center">
      <div class="col-3">
        <h1>click stats here</h1>
      </div>
      <div class="col-6">
        <h1>cheese count here</h1>
      </div>
      <div class="col-3">
        <h1>auto stats here</h1>
      </div>
    </section>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

</style>