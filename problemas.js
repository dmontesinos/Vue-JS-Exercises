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
