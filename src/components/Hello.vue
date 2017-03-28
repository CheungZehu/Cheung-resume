<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h2>{{$store.state.status}}</h2>
    <ul>
      <li v-for="item in $store.state.result">
        <p>{{item.name}}</p>
        <p>{{item.age}}</p>
        <p>{{item.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      resData: []
    }
  },
  mounted: function () {
    this.getData();
    // this.$store.commit('getData')
    // this.$store.dispatch('getData')

  },
  methods: {
    // ...mapMutations([
    //   'getData'
    // ])
    ...mapActions([
      'getData'
    ])
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
