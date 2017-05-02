//to add sass file
require('../sass/style.scss');



//sample constructor function.....
function MyMath(){
 
}
MyMath.prototype = {
    add:function(){
        var result=0;
        for(var i=0; i < arguments.length;i++){
            result += arguments[i]; 
        }
        return result;
    },
    subtract:function(one,two){
        return (one - two);
    }
}
/* sample ES6 class */
class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration
  sayName() {
    ChromeSamples.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

  // We will look at static and subclassed methods shortly
}
export {MyMath,Polygon};