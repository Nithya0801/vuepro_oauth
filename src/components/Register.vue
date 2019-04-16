<template>
  <div>
  
<!--         
        <div class="form-group">
          <label for="user">UserName</label>
          <input type="text" class="form-control" id="user" required v-model="user.username" name="user">
        </div>
    
        <div class="form-group">
          <label for="pass">Password</label>
          <input type="password" class="form-control" id="pass" required v-model="user.password" name="pass">
        </div>
    
        <button v-on:click="saveCustomer" class="btn btn-success">Register</button>
    </div> -->
    
    <div class="container">

  <header>
    <h2>Registration Form </h2>
 </header>
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
         v-bind:class="{error: $v.user.username.$error, valid: $v.user.username.$dirty && !$v.user.username.$invalid}"
          @input="runValidate"    
        >
        <!--Added 13/04 -->

      <!-- Dirty :   {{$v.user.username.$dirty}}

       NameValidate : {{ $v.user.Username.Namevalidate}} 
                  <div v-if="$v.user.username.$dirty">
                   <p class="error-message" v-if="!$v.user.username.required">Field is required</p>
                   <p class="error-message" v-if="$v.user.username.required && !$v.user.username.Namevalidate">Invalid</p>
              </div> -->

        
        
        
        
        
        
        
        
        </b-form-input>
      </b-form-group>
  <br>
       <b-form-group id="input-group-2" label="Your Password:" label-for="input-2"><br>
        <b-form-input
          id="input-2"
          v-model="user.password"
          type="password"
          required
          placeholder="Enter Password"
          v-bind:class="{error: $v.user.password.$error, valid: $v.user.password.$dirty && !$v.user.password.$invalid}"
        @input="runValidate"     ></b-form-input><br>
      </b-form-group>

  <br>
       <b-button type="submit" variant="primary" @click="saveCustomer">Register</b-button>
      </b-form>
    </template>
    
    </div>
    <div align="left">
    <h5>Constraints!!!</h5>
    
      <ul>
        <li>User Name should contain atleast 3 characters and Numbers not allowed!!!</li>
        <li>Password's first character must be a letter, it must contain at least 4 characters and no more than 15 eg:aBc45DSD_sdf </li>
      </ul>
   
  </div>
    <br><br>
    <div v-if="seen">

     <font color="red"> Already Existing User!!! </font>
    </div>
    <div v-if="cond">
      <font color="red"> Constraints Not matched for UserName </font>
    </div>

    <div v-if="pass">
      <font color="red"> Constraints Not matched for Password </font>
    </div>
  </div>  
</template>

<script>
import AccountApi from '@/service/Account'
import Namevalidate from '@/validate/Namevalidate'
import Uniquevalidate from '@/validate/Uniquevalidate'
import { required,minLength} from "vuelidate/lib/validators";
import Passwordvalidate from '@/validate/Passwordvalidate1'
 export default {
  name: 'HelloWorld',
  data () {
    return {
    user: {
        username: "",
        password: "",
       
      },
      seen:false,
      cond:false,
      pass:false
    }
  },
  validations: {
     user:{
      
       username:{
         Namevalidate,
         required,
         Uniquevalidate
       },

       password:{
         Passwordvalidate
       }
       
     },
    
  },
  methods:{
     runValidate:function(){
        this.$v.user.username.$invalid;
        this.$v.user.password.$invalid;
  },
    saveCustomer() {
      var error;
      this.$v.$touch();
    console.log("*************"+this.$v.$invalid);
   if (this.$v.$invalid){
     error="error";
    console.log("error"+"-----------"+this.$v.user.username.Namevalidate+"-----"+this.$v.user.password.Passwordvalidate);
    if(!this.$v.user.username.Namevalidate)
   this.cond=true;
     else if(!this.$v.user.password.Passwordvalidate)
     {
       this.cond=false;
   this.pass=true;
     }
   else
   this.seen=true;

 
 
   }
   
   else{
      var data = {
        username: this.user.username,
        password: this.user.password
      };
 
      // http
      //   .get("/private")
      //   .then(response => {
      //     this.customer.id = response.status;
      //     console.log(response.data);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
 
    AccountApi.userRegister(data)
    .then(response =>{
      console.log(response.data);
      this.$router.push("/login");
    })
    .catch(e=>{
      console.log(e);
      console.log(response.status);
      seen=true;
    });
     
     this.seen=false,
     this.cond=false,
     this. pass=false
  }
    
  
}
  }

 };
</script>
 