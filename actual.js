//Ejercicio 14
Vue.component('color-selector', {
  data: function(){
    return {
      red: 0,
      green: 0,
      blue: 0,
      hexColor: "#ffffff",
    };
  },
  methods: {
    RGBtoHex: function(valor){
      var hex = parseInt(valor, 10).toString(16);

      if(hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    },
    colorEnHex: function() {
      this.hexColor = "#" + this.RGBtoHex(this.red) + this.RGBtoHex(this.green) + this.RGBtoHex(this.blue);
      return this.hexColor;
    },
  },
  template: `
  <div style="border:solid; display:flex;">
  <div v-bind:style="'background-color:'+this.hexColor+'; width:110px; height:110px;'"></div>
    <div style="display:flex; flex-direction:column; padding:10px;">
      <div>R: <input type="range" min=0 max=255 v-model="red" v-on:click="$emit('color', colorEnHex())"> red value</div>
      <div>G: <input type="range" min=0 max=255 v-model="green" v-on:click="$emit('color', colorEnHex())"> green value</div>
      <div>B: <input type="range" min=0 max=255 v-model="blue" v-on:click="$emit('color', colorEnHex())"> blue value</div>
    </div>
  </div>
  `,
});
var vm = new Vue({
  el: "#app",
  data: { color: null },
  template: `
  <div style="border:solid red; display:flex;">
    <color-selector v-on:color="color = $event"></color-selector>
    <div v-bind:style="'color:' + color">TEXT</div>
  </div>
  `,
})
