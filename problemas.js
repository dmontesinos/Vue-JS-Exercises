//Ejercicio 1
var vm = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  template: '<div>{{counter}}</div>',
});

setInterval(() => vm.counter++, 1000);



//Ejercicio 2
var vm = new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0,
  },
  methods: {
    add: function() {
      return parseFloat(this.a) + parseFloat(this.b);
    }
  },
  template: `<div>
    <input v-model="a">
    <input v-model="b">
    {{ add() }}
    </div>
  `,
  //Nota1: {{ interpolacion }}
  //Nota2: Todo el contenido de template va dentro de 1 elemento raíz!
  //Nota3: v-model -> two way  // v-bind -> one way
});

//Ejercicio 3
var vm = new Vue({
  el: '#app',
  data: {
    visibilidad: true,
  },
  template: `<div>
    <button v-if="visibilidad == true" v-on:click="visibilidad=false"> Click me! </button>
    </div>
  `,
})



//Ejercicio 4
var vm = new Vue({
  el: '#app',
  data: {
    texto: "",
  },
  watch: {
    texto: function(){
      if(this.texto.length >= 5){
        this.texto = ""
      }
    }
  },
  template: `<div>
    <input v-model="texto"> {{texto}}
    </div>
  `,
})

//Ejercicio 5
var vm = new Vue({
  el: '#app',
  data: {
    texto: '',
    estilo: '',
  },
  //Nota: v-on:keydown -> apretar tecla, v-on:keyup -> soltar tecla
  template: `<div>
    <input
      v-model="texto"
      v-bind:style="estilo"
      v-on:keydown="estilo = 'background-color: red'"
      v-on:keyup="estilo = 'background-color: white'"
    >
    </div>
  `,
})


//Ejercicio 6
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

//Ejercicio 7
var vm = new Vue({
  el: '#app',
  data: {
    a: false,
    b: false,
    c: false,
    d: false,
  },
  watch:{
    a: function() {
      this.b = this.a;
    },
    b: function() {
      this.c = this.b;
    },
    c: function() {
      this.d = this.c;
    }
  },

  template: `<div>
      <input v-model="a" type=checkbox> {{a}} {{b}} {{c}} {{d}}
    </div>
  `,
})

//Ejercicio 8
/* Hay que añadirlo al index.html
<style>
table { border-collapse: collapse; }
table th,td { border: 1px solid black; }
</style>
*/

var vm = new Vue({
  el: '#app',
  data: {
    personas: [
      { name: 'Jaime Sommers', phone: '311-555-2368' },
      { name: 'Ghostbusters', phone: '55-2368' },
      { name: 'Mr. Plow', phone: '636-555-3226' },
      { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
      { name: 'The A-Team', phone: '555-6162' },
    ]
  },

  template: `<div>
  <table>
    <tr>
      <th>Name</th>
      <th>Phone number</th>
    </tr>
    <tr v-for="persona in personas">
      <td>{{persona.name}}</td>
      <td>{{persona.phone}}</td>
    </tr>
  </table>
    </div>
  `,
})

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

//Ejercicio 10
var vm = new Vue({
  el: '#app',
  data: {
    personas: [
      { name: 'Jaime Sommers', phone: '311-555-2368' },
      { name: 'Ghostbusters', phone: '55-2368' },
      { name: 'Mr. Plow', phone: '636-555-3226' },
      { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
      { name: 'The A-Team', phone: '555-6162' },
    ],

  },
  methods: {
    eliminarElemento: function(index) {
      this.personas.splice(index,1);
    }
  },

  template: `<div>
  <table>
    <tr>
      <th>Name</th>
      <th>Phone number</th>
      <th>Delete</th>
    </tr>
    <tr v-for="(persona, index) in personas">
      <td>{{persona.name}}</td>
      <td>{{persona.phone}}</td>
      <td><button v-on:click="eliminarElemento(index)">Delete</button></td>
    </tr>
  </table>
    </div>
  `,
})
