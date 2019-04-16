<template>
 
<div class="hello">

 
     <!-- <div>

      <b-button right v-on:click="logout" variant="primary">Logout</b-button>
      </div> -->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    
  
</div>
</template>

<script>
import AccountApi from '@/service/Account'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id : this.$session.id(),
     
    }
  },
  methods :{
    logout: function() {
      console.log("--------sample-------");
       console.log(this.$session.id());
      //this.isLoading = true;
    //  id=this.$session.id();
      this.$session.clear();
      this.$session.destroy();
      this.$router.push("/");
      this.$parent.user1=false;
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

    // var seen=true;

    }
  },
  created : function()
  {
     this.$parent.user1=true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
