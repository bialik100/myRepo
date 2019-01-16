function slugger(...args)
 {
     var str = args.join("-");
      //console.log(str);

      return str;
 }

 module.exports = {slugger};

  //slugger('a','b','c')