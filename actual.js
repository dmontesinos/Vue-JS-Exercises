var vm = new Vue({
  el: '#app',
  data: {
    cantidadRojo: 0,
    estilo: "",
    visibilidad: "",
  },
  watch: {
    cantidadRojo: function() {
      this.estilo = 'color: hsl(0, '+this.cantidadRojo+'%, 50%)'

      if(this.cantidadRojo >= 70){
        this.visibilidad = "true";
      } else {
        this.visibilidad = "false";
      }
    },
  },
  template: `<div>
    <div v-bind:style="estilo"> AM I RED? </div>
    <input v-model="cantidadRojo" type="range" min="1" max="100">
    <div v-if="visibilidad == 'true'"> YES! </div>
    </div>
  `,
})
