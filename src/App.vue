// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { moonMinerService } from './services/MoonMinerService.js';
const appState = computed(()=> AppState)

function addCheese(){
  console.log('adding cheese')
  moonMinerService.calcClickStats()
  moonMinerService.addCheese()
}

const clickStats = computed(()=> {
  let clickUpgrades = AppState.clickUpgrades
        let clickStats = AppState.clickStats
        clickStats = 0
        clickUpgrades.forEach(upgrade => clickStats += (upgrade.multiplier * upgrade.quantity))
        return clickStats
})

</script>


// HTML
<template>
  <header class="bg-dark text-light p-3">
    <h1>Moon Miner</h1>
  </header>
  <main class="container-fluid">
    
    <section class="row justify-content-center">
      <div class="col-10 text-center">
        <h1 @click="addCheese()">🌕</h1>
      </div>
    </section>

    <section class="row justify-content-center">
      <div class="col-2 border border-dark">
        <h1><i class="mdi mdi-cursor-default"></i> {{ clickStats }}</h1>
      </div>
      <div class="col-5 text-center border border-dark">
        <h1> {{ AppState.cheese }} 🧀</h1>
      </div>
      <div class="col-2 border border-dark">
        <h1>auto stats here</h1>
      </div>
    </section>

    <section class="row justify-content=center">
      <div class="col-6 border border-dark">
        <h1>click upgrades here</h1>
      </div>
      <div class="col-6 border border-dark">
        <h1>auto upgrades here</h1>
      </div>

    </section>
    
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

</style>