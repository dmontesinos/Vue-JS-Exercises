//Ejercicio 9
var vm = new Vue({
  el: '#app',
  data: {
    estado: 0,
  },

  watch: {
    estado: function() {
      if(this.estado == 3){
        this.estado = 0;
      }
    }
  },
  template: `<div>
    <div style="display: inline-block; width:30px;">
    <div v-if="estado == 0 || estado == 1" style="height: 30px; background-color: indianRed"></div>
    <div v-if="estado == 2" style="height: 30px; background-color: red"></div>
    <div v-if="estado == 0 || estado == 2" style="height: 30px; background-color: khaki"></div>
    <div v-if="estado == 1" style="height: 30px; background-color: yellow"></div>
    <div v-if="estado == 1 || estado == 2" style="height: 30px; background-color: seagreen"></div>
    <div v-if="estado == 0" style="height: 30px; background-color: green"></div>
    <button v-on:click="estado++"> Switch! </button>
    </div>
  </div>
  `,
})
