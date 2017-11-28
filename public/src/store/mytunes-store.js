import vue from 'vue'
import vuex from 'vuex'

import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: [],
    songs: [
      {
      song: "",
       artist: "",
       album: "",
     price: ""
    }
    ]
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    addToMyTunes({ commit, dispatch }, song) {
      this.addToMyTunes = function (song) {
        playlist.songs.push(song);
        commit(setResults, data)
        //this will post to your server adding a new track to your tunes
      }
    }
  },
  removeTrack({ commit, dispatch }, track) {
    this.removeTrack = function (song) {
      playlist.songs.forEach(function (song, index) {
        if (song.id == id) {
          playlist.songs.splice(index, 1);
          commit(setResults, data)
        }
      })
    }
    //Removes track from the database with delete
  },

  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        commit('setResults', data)
      })
    },
    getMyTunes({ commit, dispatch }) {
      this.createPlaylist = function (name) {
        if (getPlaylist(name) != undefined) { //Short circuit if exists
          return;
        }
        var playlist = new Playlist(name);
        playlist.push(playlist);
        commit(setResults, data)
      }
      //this should send a get request to your server to return the list of saved tunes
    },

   
    // promoteTrack({ commit, dispatch }, track) {
    //this should increase the position / upvotes and downvotes on the track
    // }
    // demoteTrack({ commit, dispatch }, track) {
    //this should decrease the position / upvotes and downvotes on the track
    // }

  }
})

export default store
