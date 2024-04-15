import { AppState } from "../AppState.js"

class MoonMinerService {

    addCheese() {
        let clickUpgrades = AppState.clickUpgrades
        let clickMultiplier = 0
        clickUpgrades.forEach(upgrade => clickMultiplier += (upgrade.multiplier * upgrade.quantity))
        console.log(`your click multiplier is ${clickMultiplier}`)
        AppState.cheese += clickMultiplier
    }
}

export const moonMinerService = new MoonMinerService