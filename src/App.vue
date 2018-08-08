<template>
  <div>
    <div class="row">
        <div class="col-12">
          <logo></logo>
        </div>
      </div>
    <div class="container-fluid">
      <div class="container">
        <SearchBar v-on:formSubmit="filtering"></SearchBar>
        <CoinList :coins="coins" :filteration="filteration"></CoinList>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from "./components/Logo"
import { SearchBar} from 'vue-components'
import CoinList from './components/CoinList'

export default {
  name: 'App',
  components: {
    Logo,
    SearchBar,
    CoinList
  },
  data(){
    return{
      coins: [],
      filteration: []
    }
  },
  methods:{
    filtering: function(term){
     
        let result = this.coins.filter( coin => coin.name.toLowerCase().indexOf(term) !== -1);
        this.filteration = result;
     
    }
  },
  created: function(){
     this.$http.get('https://api.coinmarketcap.com/v1/ticker/?limit=20')
      .then(function(res){
        this.coins = res.data;
      });
    }
}
</script>

<style>
  body{
    background-color: #e0dfe2;
    padding: 0px
  }
</style>
