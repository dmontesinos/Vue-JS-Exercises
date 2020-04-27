//Ejercicio 11
Vue.component('words-to-list', {
  data: function(){
    return {
      palabrasSeparadas: "",
    }
  },
  props: ['words'], //Coge el tag/atributo del html
  template: `
  <div>
    <ul v-for="palabra in palabrasSeparadas">
      <li>{{palabra}}</li>
    </ul>
  </div>
  `,
  created: function() { //Se ejecuta al crear una nueva instancia del componente.
    //Prueba que demuestra que es un vinculo reactivo (se modifica el tag desde
    // fuera del propio html).  //this.words = this.words += ' hola';
    this.palabrasSeparadas = this.words.split(' ');
  },
})

var vm = new Vue({
  el: "#app",
  template: `
    <words-to-list words="Lorem ipsum dolor sit amet"></words-to-list>
  `,
})
