<template>
  <div class="container">
    <h2>ACCOUNT SETTINGS</h2>
  <div>
    <b-card class="container">
      <b-card-text>
        <h6>personal Information</h6>
      </b-card-text>
      <b-card-text>
        <h6>use this page to update your contact information and change passowrd</h6>
      </b-card-text>
      <b-card-text>
        <h4  type="file">upload new profile image </h4>
        <h6>Maximum size to upload is 600kb of PNG,JPEG,JPG</h6>
       
      </b-card-text>
      <div class="row">
       <div class="col-md-4">
    <label for="ex1">Email Address</label>
    <input class="form-control" id="ex1" type="email">
       </div>
  </div>
  <div class="row">
     <div class="col-md-3">
    <label for="fn">Full Name</label>
    <input class="form-control" id="fn" type="text">
       </div>
       <div class="col-md-3">
    <label for="un">User Name</label>
    <input class="form-control" id="un" type="text">
       </div>
        <div class="col-md-3">
    <label for="bd">Birth Date</label>
    <input class="form-control" id="bd" type="text">
       </div>
  </div>
   <div class="row">
       <b-button squared >save changes</b-button>
       </div>
 <hr>
  <div class="row">
     <div class="col-md-3">
    <label for="fn">Current Password</label>
    <input class="form-control" id="fn" type="text">
       </div>
       <div class="col-md-3">
    <label for="un">New Password</label>
    <input class="form-control" id="un" type="text">
       </div>
        <div class="col-md-3">
    <label for="bd">Confirm Password</label>
    <input class="form-control" id="bd" type="text">
       </div>
  </div>
   <div class="row">
       <b-button squared >save changes</b-button>
       </div>
         

    
    </b-card>

    <!-- second card -->

    <b-card class="container">
      <b-card-text>
        <h6>Change State of Residence</h6>
      </b-card-text>
      <div class="row">
       <div class="col-md-4">
    <label for="ex1">Current State</label>
    <input class="form-control" id="ex1" type="text">
       </div>
  </div>
    <div class="row">
     <div class="col-md-3">
    <label for="fn">new State of Residence</label>
    <input class="form-control" id="fn" type="text">
       </div>
       <div class="col-md-3">
    <label for="un">What LGA do You Live In</label>
    <input class="form-control" id="un" type="text">
       </div>
        <div class="col-md-3">
    <label for="bd">Federal Constituency</label>
    <input class="form-control" id="bd" type="text">
       </div>
  </div>
    <div class="row">
     <div class="col-md-3">
    <label for="fn">Senetorial District</label>
    <input class="form-control" id="fn" type="text">
       </div>
       <div class="col-md-3">
    <label for="un">State Constituency</label>
    <input class="form-control" id="un" type="text">
       </div>
     
  </div>
        <div class="row">
       <b-button squared >save changes</b-button>
       </div>
   
    </b-card>





  </div>
  </div>
</template>


<script>
export default {
  name:'accountsettings',
  data(){
    return{
       form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
    }
  }
}
</script>

<style scoped>

</style>