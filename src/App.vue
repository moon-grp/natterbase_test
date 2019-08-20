<template>
  <div id="app">
    <div>
      <div class="container">
  <b-navbar toggleable="lg" type="light" class="nav_bg">
    
    <b-navbar-brand href="#" class="nav_brd">
         <font-awesome-icon class="card_icn" icon="crop-alt" size="2x" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item> <router-link to="/dashboard">Dashboard </router-link></b-nav-item>
        <b-nav-item href="#" >Buy Insurance</b-nav-item>
        <b-nav-item > <router-link to="/settings"> Account Settings </router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <h3><b-badge >LD</b-badge></h3>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          
          <template slot="button-content">Lois Durrello</template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
      </div>
</div>



















    <router-view/>
  </div>
</template>

<style>
#app{
  background-color: azure;
  height: 100%;
}
.nav_bg{
  background-color:white;
}
.nav_brd{
  padding: 20px;
}
.badge{
  height: 40px;
  margin: 2px;
  width: 40px;
  text-align: center;
}
</style>
