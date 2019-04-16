export default {
  logout:function(){
    localStorage.removeItem("username");
   localStorage.removeItem("userid");
   localStorage.removeItem("token");
}   
}