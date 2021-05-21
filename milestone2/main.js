Vue.component('people-list', {
  template: '#people-list',
  props: ['people']
})
Vue.component('person', {
  template: '#person',
  props: ['person']
});
new Vue({
  el: '#app',
  data: {
    people: [
      { name: 'Alberto', surname: 'Bianchi' },
      { name: 'Marco', surname: 'Rossi' },
      { name: 'Luca', surname: 'Verdi' },
    ],
    name: '',
    surname: ''
  },
  methods: {
    addPerson: function() {
      this.people.push({
        name: this.name,
        surname: this.surname
      });
      this.name = '';
      this.surname = '';
    }
  }
});