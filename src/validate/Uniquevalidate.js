import AccountApi from "@/service/Account";
export default username => {
  return new Promise((resolve, reject) => {
    AccountApi.checkUser(username)
      .then((response) => {
        resolve(response.data)
        this.$emit("call")
      })
      .catch((error) => {
        reject(false)
      })
  });
}
