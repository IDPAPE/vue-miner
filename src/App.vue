// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { moonMinerService } from './services/MoonMinerService.js';
const appState = computed(()=> AppState)

function addCheese(){
  // console.log('adding cheese')
  moonMinerService.calcClickStats()
  moonMinerService.addCheese()
}

function autoCheese(){
  // console.log('auto cheesing')
  moonMinerService.autoCheese()
}

function upgradePicks(){
  // console.log('upgrading picks')
  moonMinerService.clickUpgrade(0)
}

function upgradeAugurs(){
  // console.log('upgrading augurs')
  moonMinerService.clickUpgrade(1)
}

function upgradeDrones(){
  // console.log('upgrading drones')
  moonMinerService.autoUpgrade(0)
}

function upgradeExcavators(){
  // console.log('upgrading excavators')
  moonMinerService.autoUpgrade(1)
}

const clickStats = computed(()=> {
  let clickUpgrades = AppState.clickUpgrades
        let clickStats = AppState.clickStats
        clickStats = 0
        clickUpgrades.forEach(upgrade => clickStats += (upgrade.multiplier * upgrade.quantity))
        return clickStats
})

const autoStats = computed(()=>{
  let autoUpgrades = AppState.autoUpgrades
        let autoStats = AppState.autoStats
        autoStats = 0
        autoUpgrades.forEach(upgrade => autoStats += (upgrade.multiplier * upgrade.quantity))
        return autoStats
})

setInterval(autoCheese, 1000)
</script>


// HTML
<template>
  <header class="bg-dark text-light p-3">
    <h1>Moon Miner</h1>
  </header>
  <main class="container-fluid background-img">
    
    <section class="row justify-content-center">
      <div class="col-10 text-center">
        <h1 @click="addCheese()"><img class="glowing-moon" src="src/assets/img/cheese-no-bg.png" alt=""></h1>
      </div>
    </section>

    <section class="row justify-content-center">
      <div class="col-2 border border-light bg-dark text-light">
        <h1><i class="mdi mdi-cursor-default"></i> {{ clickStats }}</h1>
      </div>
      <div class="col-4 text-center border border-light bg-dark text-light">
        <h1> {{ AppState.cheese }} 🧀</h1>
      </div>
      <div class="col-2 border border-light bg-dark text-light">
        <h1><i class="mdi mdi-clock"></i> {{ autoStats }}</h1>
      </div>
    </section>

    <section class="row justify-content-center">
      <div class="col-4 border border-light bg-dark text-light">
        <h3>click upgrades here<hr/></h3>
        <h5>Pickaxe - {{ AppState.clickUpgrades[0].quantity }} <button @click="upgradePicks()">Costs: {{ AppState.clickUpgrades[0].price }} | +{{ AppState.clickUpgrades[0].multiplier }} mult</button></h5>
        <h5>Augur - {{ AppState.clickUpgrades[1].quantity }} <button @click="upgradeAugurs()">Costs: {{ AppState.clickUpgrades[1].price }} | +{{ AppState.clickUpgrades[1].multiplier }} mult</button></h5>
      </div>
      <div class="col-4 border border-light bg-dark text-light">
        <h3>auto upgrades here<hr/></h3>
        <h5>Drone - {{ AppState.autoUpgrades[0].quantity }} <button @click="upgradeDrones()">Costs: {{ AppState.autoUpgrades[0].price }} | +{{ AppState.autoUpgrades[0].multiplier }} mult</button></h5>
        <h5>Excavator - {{ AppState.autoUpgrades[1].quantity }} <button @click="upgradeExcavators()">Costs: {{ AppState.autoUpgrades[1].price }} | +{{ AppState.autoUpgrades[1].multiplier }} mult</button></h5>
      </div>

    </section>
    
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

.background-img{
  background-image: url('https://imgs.search.brave.com/KCHbaesg5OVx3eHHi_VQB8Ck_d4GnA8n1C1gu0e1ZOA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS81NC85/MS9xOHNMN2wuanBn');
  background-size: cover;
  background-position: center;
}

.glowing-moon{
  filter: drop-shadow(0 0 10px #FFFFFF);
}
</style>