import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stats:[]
  },
  mutations: {
   SET_STATS(state, stats){
     state.stats=stats
   }

  },
  actions: {
    get_statistics({commit}){
      const config={
        headers:{
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
        }
      };
       axios.get('http://test.natterbase.com:5050/api/interview/get-statistics', config )
       .then(res=> {
         console.log('from store')
         console.log(res.data)
         let stats= res.data
         commit('SET_STATS', stats)
       })
       .catch(err=>{
         console.log(err)
       })
       
        
     
    }
  }
})
