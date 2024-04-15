import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,


  cheese: 0,
  clickStats: 0,
  autoStats: 0,


  clickUpgrades: [
    new Upgrade({
      name: 'Pickaxe',
      price: 1,
      quantity: 1,
      multiplier: 1
    }),
    new Upgrade({
      name: 'Augur',
      price: 2,
      quantity: 0,
      multiplier: 2
    })
  ],

  autoUpgrades: [
    new Upgrade({
      name: 'Drone',
      price: 5,
      quantity: 0,
      multiplier: 5
    }),
    new Upgrade({
      name: 'Excavator',
      price: 10,
      quantity: 0,
      multiplier: 10
    })
  ]

})
