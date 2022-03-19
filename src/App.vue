<template>

 

  <!-- lass="navbar navbar-dark bg-primary" -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/secrets" class="nav-link">Secret</router-link>
        </li>
      </ul>

      <div class="my-2 my-lg-0">
        <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Login</router-link>
        <button   type="button" class="btn btn-outline-success" v-else  @click="logOut">Log Out</button>
        
      </div>
      
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  computed:{
    isLoggedIn(){
      return this.$store.getters.isLoggedIn
    }
    
  },
  methods:{
    logOut(){
      this.$swal({
        title: 'Are you sure?',        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes,Log Out!',
        cancelButtonText: 'No, I want to Stay!',
        reverseButtons: true
      }).then((result)=>{
        if(result.isConfirmed){
          this.$store.commit('logOut')
          this.$router.push('/')
          this.$swal({
            icon:'success',
            title:'Successfully Logged Out'
          })
        }
      })
      
      
      
    }
  }
}
</script>

<style>

</style>
