<template>
  <div >
        
        
        <!-- <div class="form-group">
          <label for="user">UserName</label>
          <input type="text" class="form-control" id="user" required v-model="user.username"  name="user">
        </div>
    
        <div class="form-group">
          <label for="pass">Password</label>
          <input type="password" class="form-control" id="pass" required v-model="user.password" name="pass">
        </div>
    
        <button v-on:click="checkCustomer" class="btn btn-success">Login</button> -->
 


<div class="container">

  <header>
    <h2>Sign Up Form </h2>
 </header>
  
  <div id="app" class="signup">
  
  </div>
  
  <template id="signup-form">
      <b-form>
       <b-form-group
        id="input-group-1"
        label="UserName:"
        label-for="input-1"
       
      ><br>
        <b-form-input
          id="input-1"
          v-model="user.username"
          type="text"
          required
          placeholder="Enter Username"
         
        ></b-form-input>
      </b-form-group>
  <br>
       <b-form-group id="input-group-2" label="Your Password:" label-for="input-2"><br>
        <b-form-input
          id="input-2"
          v-model="user.password"
          type="password"
          required
          placeholder="Enter Password"
        ></b-form-input><br>
      </b-form-group>

  <br>
       <b-button type="submit" variant="primary" v-on:click="checkCustomer">Submit</b-button>
      </b-form>
    </template>
  
   
    

    <nav>
      <br>
      <br>
          <router-link class="btn btn-primary" to="/register">Create an Account Here!!!</router-link>
    </nav>
</div>
    <div v-if="error">

      <br><br>
     <h3><font color='red'> Unauthorised User</font></h3>
    </div>

   
  </div>

</template>

<script>

import AccountApi from '@/service/Account'
import { mdbInput, mdbBtn } from 'mdbvue';
 export default {
  name: 'HelloWorld',
   components: {
      mdbInput,
      mdbBtn
    },
  data () {
    return {
    user: {
        username: "",
        password: "",
       
      },
      error : false,
      
    };
  },
  methods:{
    checkCustomer() {
          
    AccountApi.userLogin(this.user)
      .then(response => {
        this.$session.start();
       this.error=false;
        this.$session.set("access_token", response.data.access_token);
       // this.$session.set("refresh_token", response.data.refresh_token);
        this.$session.set("username", this.user.username);
        this.$router.replace(this.$route.query.redirect || "/welcome");
       
        console.log(response.data.access_token);
       // console.log(response.data.refresh_token);
       
        console.log(this.user.username+"\t"+this.msg+"\t"+this.$parent.user1);
        this.$parent.user1=true;
        console.log("------\t"+this.$parent.user1);
      })
      .catch(err => {
        console.log(err);
        this.error=true;
       
        this.$parent.user1=false;
       });
    
      
  }
  }
 };


</script>