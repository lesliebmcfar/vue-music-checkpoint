<template>
  
 
  <div class="home"></div>
 <div v-for="song in songs"> </div>
    <h4>Song: {{songs.song}}</h4> 
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="my-tunes"></div>
    <div class="itunes"></div>
  </div> 
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    methods: {
    
      getMusicByArtist(song) {
        this.$mytunes - store.dispatch("getMusicByArtist", { song })
      }
    },
    computed:{
      songs(){
        return this.$store.state.songs()
      }
    }
  }
</script>


<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>