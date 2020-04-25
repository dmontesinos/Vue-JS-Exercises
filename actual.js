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
