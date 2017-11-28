var express = require('express')
var server = express
import Vue from 'vue'
import App from './App'
import Store from './mytunes-store'
import $ from "jquery"

Vue.use(Vuex)
server.use(cors({}))
export default new Vuex.Store({

})

//server on 3000
//public on 8080
//middlewear

// export default new Vuex.Store({
   state:{ 
     songs: [
         {
             song: "",
             artist: "",
             album: "",
             price: ""
         }
     ]
    } 
    /*  mutations:{


   }
     actions:{

        
    }
 */

// })
// middlewear
// server.use(cors({}))
// need: routes
// getMyTunes(get)
//add song to listy(POST)
//updateRank(PUT)
// delete (delete)