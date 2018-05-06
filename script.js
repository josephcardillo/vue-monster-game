new Vue ({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    randomAttack: function() {
      let attack = Math.random() * 100;
      attack.floor;
      this.playerHealth = this.playerHealth - attack;
      return playerHealth;
    }
  }
})
