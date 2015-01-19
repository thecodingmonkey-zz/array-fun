module.exports = {
  first: function (array, n) {
    if (n === undefined) {
      return array[0];  // return an element if n isn't specified
    }
    else{
      return array.slice(0, n); // return an array if n is specified (even if one element)
    }
  },

  max: function (array) {
    return array.reduce( function(prev, curr) {
      return (prev < curr) ? curr : prev;  // return greater of two numbers
    } );
  },

  min: function (array) {
    return array.reduce( function(prev, curr) {
      return (prev < curr) ? prev : curr;  // return lesser of two numbers
    } );
  },

  intersection: function () { // this function takes a variable # of parameters

    var args = [].slice.call(arguments);   // get arguments as array
      // http://javascript.info/tutorial/arguments

    return args.reduce(
      function(array1, array2) {
        return array1.filter( function(val, idx, arr) {
          return (array2.some(function(c,i,a) {return c === val;}));
        } );
      }
    );
  },

  difference: function() {
    var args = [].slice.call(arguments);   // get arguments as array
      // http://javascript.info/tutorial/arguments

    return args.reduce(
      function(array1, array2) {
        return array1.filter( function(val, idx, arr) {
          return (array2.every(function(c,i,a) {return c !== val;}));
        } );
      }
    );
  },

  uniq: function() {
    var args = [].slice.call(arguments);   // get arguments as array
      // http://javascript.info/tutorial/arguments

    var flatArray = args.reduce(
      function(array1, array2) {
        return array1.concat(array2);
      }
    );

    return flatArray.filter(function(c,i,a) {
      return (i === a.indexOf(c));
    });
  },

  contains: function(array, target) {
    
    // if there is more than two parameters, it should fail
    if (arguments[2] !== undefined) {
      return false;
    }

    return array.indexOf(target) !== -1;
  }
};