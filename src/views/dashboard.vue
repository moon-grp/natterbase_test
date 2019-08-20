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
    class="mb-2"
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
    class="mb-2"
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
    class="mb-2"
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
    class="mb-2"
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
        <b-td>{{stats.statistics.totalInsuranceAmount}}</b-td>
        <b-td>22</b-td>
        <b-td>43</b-td>
        <b-td>22</b-td>
        <b-td>43</b-td>
        <b-td>22</b-td>
        <b-td>more action</b-td>
        
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
     /*   items: [
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
          { sn: 40, insurance_type: 'Dickerson', amount: 'Macdonald', date:'2019', status:'completed', action:'make a claim' },
        
        ],
*/      fields:[
              'age',
              'sex'
          ]     
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

.table_s{
  margin-top:50px
}
</style>