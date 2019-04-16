import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginComponent from '@/components/LoginComponent'
import Register from '@/components/Register'
import hello from '@/components/HelloWorld'
import sample from '@/components/Sample'
import { isNull } from 'util';
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: LoginComponent
//     },
//     {
//       path: '/register',
//       name : 'Register',
//       component: Register
//     },
//     {
//       path: '/welcome',
//       name : 'Welcome',
//       component: HelloWorld,
//       meta: {
//         requiresAuth: true,
       
//     }
//     }
//   ]
// })

//Added on 12/04

const router = new Router({
  routes:[
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
   },
   {
    path: '/',
    name: 'Sample',
    component: sample,
   },
  {
    path: '/register',
    name : 'Register',
    component: Register
  },
  {
    path: '/welcome',
    name : 'Welcome',
    component: HelloWorld,
    meta: {
      requiresAuth: true,
     
  }
  }
]
})



//My code

// router.beforeEach((to, from, next) => {



// console.log(to.meta.requiresAuth);
// console.log(window.localStorage.getItem('vue-session-key'));
// console.log("------"+window.localStorage.getItem('authUser'));
// var data=JSON.parse(localStorage.getItem("vue-session-key"));
// console.log("******"+data);
// if(to.meta.requiresAuth)
// {
//   console.log("----Auth---");
//   if(data !== null)
//   {
//     console.log("----data not null property---");
//   if(isNull(data.hasOwnProperty("session-id")))
//   {
//     next({name : 'Login'})
//   }
//   else
//   {
//     next()
//   }
// }
//   else
//   {
//   next({
//             path: '/',
//             query: { redirect: '/' }
//           })
//     }
// }
// else if(to.meta.requiresAuth===undefined)
// {
//   console.log("----Auth false---");
//   if(data !== null)
//   {
//   if(data.hasOwnProperty('session-id'))
//   {
//     console.log("----true property---");
//    // window.location.reload();
//   // next({name : 'Welcome'})
//   // this.$router.push("/welcome")

//   next({
//     path: '/welcome',
//     query: { redirect: '/welcome' }
//   })
//    }
    
//   }
// }

// next();
// });



router.beforeEach((to, from, next) => {
  var data = {};
  data = JSON.parse(localStorage.getItem("vue-session-key")) == null ? {} : JSON.parse(localStorage.getItem("vue-session-key"));
  // if(data!=null)
  // console.log('Checking Logging info...', data.access_token);
  // if (to.matched.some(record => record.meta.requiresAuth) &&  data!=null?!data.hasOwnProperty('access_token'):false){
  if (to.matched.some(record => record.meta.requiresAuth) && !data.hasOwnProperty('access_token')) {
    console.log("-----defined ----"+to.fullPath);
          next({
              path: '/',
              query: {
                  redirect: to.fullPath
              }
          });
      } 
    else if(to.meta.requiresAuth===undefined && data!=null && data.hasOwnProperty('access_token'))
    {
      console.log("-----undefined ----"+to.fullPath);
    //   next({
    //     path: '/',
    //     query: {
    //         redirect: to.fullPath
    //     }
    // });

    next({name : 'Welcome'})
  }
  else
  next()

})

export default router;