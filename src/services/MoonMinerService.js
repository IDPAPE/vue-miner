import { AppState } from "../AppState.js"

class MoonMinerService {

    addCheese() {
        // let clickUpgrades = AppState.clickUpgrades
        // let clickMultiplier = 0
        // clickUpgrades.forEach(upgrade => clickMultiplier += (upgrade.multiplier * upgrade.quantity))
        let clickMultiplier = this.calcClickStats()
        // console.log(`your click multiplier is ${clickMultiplier}`)
        AppState.cheese += clickMultiplier
    }

    autoCheese() {
        let autoMultiplier = this.calcAutoStats()
        // console.log(`your auto multiplier is ${autoMultiplier}`)
        AppState.cheese += autoMultiplier
    }

    calcClickStats() {
        let clickUpgrades = AppState.clickUpgrades
        let clickStats = AppState.clickStats
        clickStats = 0
        clickUpgrades.forEach(upgrade => clickStats += (upgrade.multiplier * upgrade.quantity))
        return clickStats
    }

    calcAutoStats() {
        let autoUpgrades = AppState.autoUpgrades
        let autoStats = AppState.autoStats
        autoStats = 0
        autoUpgrades.forEach(upgrade => autoStats += (upgrade.multiplier * upgrade.quantity))
        return autoStats
    }

    clickUpgrade(index) {
        let upgrade = AppState.clickUpgrades[index]
        if (AppState.cheese < upgrade.price) return
        upgrade.quantity++
        AppState.cheese -= upgrade.price
    }

    autoUpgrade(index) {
        let upgrade = AppState.autoUpgrades[index]
        if (AppState.cheese < upgrade.price) return
        upgrade.quantity++
        AppState.cheese -= upgrade.price
    }
}

export const moonMinerService = new MoonMinerService