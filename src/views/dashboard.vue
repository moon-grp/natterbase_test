<template>
  <div class="home">
    <div class="container">
      <div class="txt_tp">
    <h2 >Welcome, Lois!</h2>
    <h6>{{ timestamp }}</h6>
      </div>
        <div class="row">
          <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2 card_s"
  >
   <font-awesome-icon class="card_icn" icon="shield-alt" size="2x" />
    <b-card-text>
      <h1>{{stats.statistics.totalInsurancesBought}}</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Insurance Bought</h6>
    </b-card-text>
  </b-card>
          </div>
               <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2 card_s"
  >
   <font-awesome-icon class="card_icn" icon="shield-alt" size="2x" />
    <b-card-text>
      <h1>₦{{stats.statistics.totalInsuranceAmount}}</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Amount of Insurance</h6>
    </b-card-text>
  </b-card>
          </div>
               <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2 card_s"
  >
  <div>
   <font-awesome-icon class="card_icn" icon="clipboard-list" size="2x" />
  </div>
    <b-card-text>
      <h1>{{stats.statistics.totalInsuranceClaims}}</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Insurance Claim</h6>
    </b-card-text>
  </b-card>
          </div>
  <div class="col-sm">
  <b-card
    style="max-width: 20rem;"
    class="mb-2 card_s"
  >
   <font-awesome-icon class="card_icn" icon="clipboard-list" size="2x" />
    <b-card-text>
      <h1>{{stats.statistics.totalInsurancesBought}}</h1>
    </b-card-text>
   <b-card-text>
      <h6>Total Amount of Claim</h6>
    </b-card-text>
  </b-card>
          </div>
</div>
<div>
      <b-card class="table_s">
        <b-card-text>
      <h4>Insurance Application</h4>
    </b-card-text>
  
     <b-table-simple responsive>
            <b-thead >
                <b-tr>
        <b-th >S.N</b-th>
        <b-th >Insurance Type</b-th>
        <b-th >Amount</b-th>
        <b-th >Date</b-th>
         <b-th >Status</b-th>
        <b-th >Action</b-th>
      </b-tr>
            </b-thead>
              <b-tbody>
        <b-td > 1 </b-td>
        <b-td>{{application.applications[0].insuranceType}}</b-td>
        <b-td>{{application.applications[0].amount}}</b-td>
        <b-td>{{application.applications[0].createdDate}}</b-td>
        <b-td>{{application.applications[0].complete}}</b-td>
        <b-td><b-btn>Make a claim</b-btn></b-td>
        <b-td>more action</b-td>
        <b-tr>
           <b-td > 2 </b-td>
        <b-td>{{application.applications[1].insuranceType}}</b-td>
        <b-td>{{application.applications[1].amount}}</b-td>
        <b-td>{{application.applications[1].createdDate}}</b-td>
        <b-td>{{application.applications[1].complete}}</b-td>
        <b-td><b-btn>Complete Process</b-btn></b-td>
        <b-td>more action</b-td>
        </b-tr>
        <b-tr>
              <b-td > 3 </b-td>
        <b-td>{{application.applications[2].insuranceType}}</b-td>
        <b-td>{{application.applications[2].amount}}</b-td>
        <b-td>{{application.applications[2].createdDate}}</b-td>
        <b-td>{{application.applications[2].complete}}</b-td>
        <b-td><b-btn>Make a Claim</b-btn></b-td>
        <b-td>more action</b-td>
        </b-tr>
        <b-tr>
           <b-td > 4 </b-td>
        <b-td>{{application.applications[3].insuranceType}}</b-td>
        <b-td>{{application.applications[3].amount}}</b-td>
        <b-td>{{application.applications[3].createdDate}}</b-td>
        <b-td>{{application.applications[3].complete}}</b-td>
        <b-td><b-btn>Complete Process</b-btn></b-td>
        <b-td>more action</b-td>
        </b-tr>
              </b-tbody>
       </b-table-simple>
     
      </b-card>
    </div>
    </div>
    
 
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import {mapState} from 'vuex'
var currencyFormatter = require('currency-formatter')


export default {
  name: 'dashboard',
  components: {
    
  },
   data() {
      return {
        
      }
    },
    computed: {
  timestamp: function () {
    return moment().format('LLLL')
  },
  ...mapState([
    'stats',
    'application'
  ]),
  insure(){
    return 
this.secure= currencyFormatter.format( stats.statistics.totalInsuranceAmount, { code: 'USD' })
  }
  
},
mounted(){
  this.$store.dispatch('get_statistics')
 
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

.container{
   font-family: 'Oswald', sans-serif;
}
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

.txt_tp{
   margin-top:30px;
   margin-bottom: 30px;
}

.card_icn{
  margin-top: 10px;
  margin-bottom: 10px;

}

.card_s{
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);  
    background-color: whitesmoke 
}

.table_s{
  margin-top:50px;
  margin-bottom: 50px;
}
</style>