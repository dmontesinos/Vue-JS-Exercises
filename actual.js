//Ejercicio 12
Vue.component('card', {
  data: function(){
    return {
      person: {
        name: 'My Name',
        picture: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAY
          AAAAfFcSJAAAADUlEQVR42mM82Mz1HwAFqgJP3gasfwAAAABJRU5ErkJggg==`,
        email: 'me@somerandomdomain.com',
        phone: '+00 00 000 0000',
      }
    };
  },
  props: ['src'],
  template: `
  <div class="card">
    <div>
      <img v-bind:src="person.picture">
    </div>
    <div><h1>{{person.name}}</h1></div>
    <div>{{person.email}}</div>
    <div>{{person.phone}}</div>
  </div>
  `,
})

var vm = new Vue({
  el: "#app",
  template: `
    <div style="display:flex;">
      <card v-bind:personal-data="person"></card>
    </div>
  `,
})
