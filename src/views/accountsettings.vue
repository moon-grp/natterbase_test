<template>
  <div class="container">
    <h2 class="txt_tp">ACCOUNT SETTINGS</h2>
  <div>
    <b-card class="container card_s">
      <b-card-text>
        <h6 style="margin-left:30px; margin-top:20px; font-size:1rem">Personal Information</h6>
      </b-card-text>
      <b-card-text>
        <h6>Use this page to update your contact information and change password</h6>
      </b-card-text>
      <b-card-text>
       <a href="#"> <h4 style="margin-left:60px" type="file">Upload new profile image </h4> </a>
        <h6 style="margin-left:60px; font-size:10px; margin-bottom:40px">Maximum size to upload is 600kb of PNG,JPEG,JPG</h6>
       
      </b-card-text>
      <div class="row txt_f">
       <div class="col-md-4">
    <label for="ex1">Email Address</label>
    <input class="form-control " id="ex1" type="email" readonly placeholder="amarachuku@gmail.com">
       </div>
  </div>
  <div class="row txt_f">
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
    <input class="form-control" id="bd"  readonly placeholder="07/15/1990">
       </div>
  </div>
   <div class="row ">
       <b-button squared class="btn_s" >save changes</b-button>
       </div>
 <hr>
  <div class="row txt_f">
     <div class="col-md-3">
    <label for="fn">Current Password</label>
    <input class="form-control" id="fn" type="password">
       </div>
       <div class="col-md-3">
    <label for="un">New Password</label>
    <input class="form-control" id="un" type="password">
       </div>
        <div class="col-md-3">
    <label for="bd">Confirm Password</label>
    <input class="form-control" id="bd" type="password">
       </div>
  </div>
   <div class="row ">
       <b-button class="btn_s" squared >save changes</b-button>
       </div>
         

    
    </b-card>

    <!-- second card -->

    <b-card class="container card_s">
      <b-card-text>
        <h6>Change State of Residence</h6>
      </b-card-text>
      <div class="row txt_f">
       <div class="col-md-4">
    <label for="ex1">Current State</label>
    <input class="form-control" id="ex1" type="text">
       </div>
  </div>
    <div class="row txt_f">
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
    <div class="row txt_f">
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
       <b-button squared class="btn_s" >save changes</b-button>
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
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

.container{
   font-family: 'Oswald', sans-serif;
}

.txt_f{
   margin-bottom: 30px
}

.btn_s{
   margin-left: 12px;
   height: 60px;
   width: 200px;
    margin-bottom: 30px;
    font-family: 'Oswald', sans-serif;
}

.card_s{
   margin-bottom: 100px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);   
}

.txt_tp{
   margin-top:30px;
   margin-bottom: 30px;
}

 

</style>