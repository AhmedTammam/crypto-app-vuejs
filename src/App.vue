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
        <CoinsList :coins="coins" :filteration="filteration"></CoinsList>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from "./components/Logo"
import SearchBar from 'search-bar-form'
import CoinsList from 'coin-list-table'


export default {
  name: 'App',
  components: {
    SearchBar,
    CoinsList,
    Logo
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
