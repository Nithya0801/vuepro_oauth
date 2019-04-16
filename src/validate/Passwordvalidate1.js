export default password => {
    if (true === /^[a-zA-Z]\w{3,14}$/.test(password)) {
      return true;
    }
    return false;
  }