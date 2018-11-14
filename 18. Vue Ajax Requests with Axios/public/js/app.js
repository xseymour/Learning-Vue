const app = new Vue({
    el: '#root',

    data: {
      skills: []
    },

    mounted() {
      //Make an ajax request to our server
      axios.get('skills')
        // .then(response => console.log(response.data));
        .then(response => this.skills = response.data);
    }
});