//Ejercicio 15
Vue.component('magic-input', {
  props: ['values'],
  data: function(){
    return {
      magicText: '',
    };
  },
  created: function() {
    this.magicText = this.value.replace(/./g,
        x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
  },
  watch: {
    value: function() {
      this.magicText = this.value.replace(/./g,
          x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
    },
    magicText: function(){
      this.$emit('input', this.magicText.replace(/./g,
          x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()));
    }
  },

  template: `
  <input v-model="magicText">
  `,
});

var vm = new Vue({
  el: "#app",
  data: { text: "Prueba" },
  template: `
  <div>
    <magic-input v-model="text"></magic-input>
    <input v-model="text">
    {{text}}
  </div>
  `,
})
