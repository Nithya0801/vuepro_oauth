<template>
  

<div id="app">

  
    <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#/welcome">Home</b-nav-item>
     
      <b-nav-item href="#/login" v-if="!user1">Signin</b-nav-item>
       <b-nav-item @click="logout" v-if="user1">Logout</b-nav-item>
       <b-nav-item href="#/register" v-if="!user1">Register</b-nav-item>
     <!-- <b-nav-item-dropdown text="User" right>
        
        <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

<!-- Added noww saturday
  <b-navbar-nav right id="check">
   <button type="button"  @click="sample1" v-if="!user1">Signin</button>
    <button type="button" v-if="user1" @click="logout">Logout</button>
  </b-navbar-nav> -->

  </b-navbar>



<!-- <div id="app">
    <b-img src="/static/images/img.jpeg" width="700" height="400" fluid alt="Responsive Image" align="left"/> -->
    <router-view/>
  </div>
 
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
// import NavbarItem from '@/components/NavbarItem.vue';
// import NavbarNav from '@/components/NavbarNav.vue';
// import NavbarCollapse from '@/components/NavbarCollapse.vue';
import hello from'@/components/HelloWorld.vue';
import logerr from'@/components/LoginComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      user1: false,
    };
  },
  components: {
   hello,
   logerr
   },
  methods: {
    sample1()
    {
    
     //  this.user=true;
      //this.$router.push("/login");
      window.location.href="#/login";
    },
    logout() {
      
      this.user1=false;
        console.log("--------sample-------");
       console.log(this.$session.id());
      //this.isLoading = true;
    //  id=this.$session.id();
      this.$session.clear();
      this.$session.destroy();
      this.$router.push("/");
      // AccountApi.logout(this.$session.get("access_token"))
      //   .then(result => {
      //          //   handleSignOutClick();
      //     this.$session.clear();
      //     this.$session.destroy();
      //     this.$router.push("/");
      //    // window.location.href="#/";
      //     window.location.reload();
      //    // this.isLoading = false;

      //   })
      //   .catch(err => {
      //     console.log(err);
      //           //  this.isLoading = false;

      //   });

      //To-do after

     
    },
  
   
  }
  // created : function(){
  //   console.log("-----Firstly callled----");
  //   this.user1=logerr.msg;
  // },
  //   computed :{
      
  //       sample : function(){
  //          console.log("-----computed callled----");
  //           return logerr.msg;
  //       }
  //   }



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
