//Ejercicio 9
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
