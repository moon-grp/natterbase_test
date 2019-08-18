<template>
  <div class="home">
    this is dashboard
    <h6 v-for="(item, index) in stats " :key="index">{item.amount}</h6>
    <div class="container">
    <h2>Welcome, Lois!</h2>
    <h6>{{ timestamp }}</h6>
        <div class="row">
          <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2"
  >
   <font-awesome-icon icon="user-secret" size="3x" />
    <b-card-text>
      <h1>04</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Insurance Bought</h6>
    </b-card-text>
  </b-card>
          </div>
               <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2"
  >
   <font-awesome-icon icon="user-secret" size="3x" />
    <b-card-text>
      <h1>04</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Insurance Bought</h6>
    </b-card-text>
  </b-card>
          </div>
               <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2"
  >
  <div class="card-body-icon">
   <font-awesome-icon icon="user-secret" size="1x" />
  </div>
    <b-card-text>
      <h1>04</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Insurance Bought</h6>
    </b-card-text>
  </b-card>
          </div>
               <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2"
  >
   <font-awesome-icon icon="mask" size="3x" />
    <b-card-text>
      <h1>04</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Insurance Bought</h6>
    </b-card-text>
  </b-card>
          </div>
</div>
<div>
      <b-card>
        <b-card-text>
      <h4>Insurance Application</h4>
    </b-card-text>
     <b-table striped hover :items="items"></b-table>
      </b-card>
    </div>
    </div>
    
 
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'dashboard',
  components: {
    
  },
   data() {
      return {
        items: [
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
        
        ]
      }
    },
    computed: {
  timestamp: function () {
    return moment().format('LLLL')
  },
  ...mapState([
    'stats'
  ])
},
 async created() {
  const config={
    headers:{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
    }
  };
  try {
     const res= await axios.get('http://test.natterbase.com:5050/api/interview/get-applications', config)
    console.log(res.data)
     
  } catch (error) {
    console.log(error)
  }
   
},
mounted(){
  this.$store.dispatch('get_statistics')
}
}
</script>

<style scoped>
.home{
   background-color:wh;
}
.card-body-icon {
  position: absolute;
  top: -1.25rem;
  right: 0rem;
  opacity: 0.1;
  font-size: 5rem;
}
</style>