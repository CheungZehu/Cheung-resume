<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="item in resData">
        <p>{{item.name}}</p>
        <p>{{item.age}}</p>
        <p>{{item.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      resData: []
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.resume();
    })
  },
  methods: {
    resume: function () {
      this.$http.get('./../static/resume.json')
        .then(response => {
          alert(response.body.result);
          this.resData = response.body.result;
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
