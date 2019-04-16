export default name => {
    if (true === /^[a-zA-Z]{3,10}$/.test(name)) {
      return true;
    }
    return false;
  }