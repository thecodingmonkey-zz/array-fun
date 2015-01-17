module.exports = {
  first: function (array, n) {
    if (n === undefined) {
      return array[0];  // return an element if n isn't specified
    }
    else{
      return array.slice(0, n); // return an array if n is specified (even if one element)
    }
  }
};