import { AppState } from "../AppState.js"

class MoonMinerService {

    addCheese() {
        // let clickUpgrades = AppState.clickUpgrades
        // let clickMultiplier = 0
        // clickUpgrades.forEach(upgrade => clickMultiplier += (upgrade.multiplier * upgrade.quantity))
        let clickMultiplier = this.calcClickStats()
        console.log(`your click multiplier is ${clickMultiplier}`)
        AppState.cheese += clickMultiplier
    }

    calcClickStats() {
        let clickUpgrades = AppState.clickUpgrades
        let clickStats = AppState.clickStats
        clickStats = 0
        clickUpgrades.forEach(upgrade => clickStats += (upgrade.multiplier * upgrade.quantity))
        return clickStats
    }
}

export const moonMinerService = new MoonMinerService