//load file
import {MyMath} from '../../src/js/script.js';

var obj;
beforeAll(function(){
    obj = new MyMath();
})
    
describe('My math', function() {

	it('should calculate sum the two values', function() {
        
        expect(obj.add(1,2)).toBe(3);
    });
    it('should calculate subtract', function() {
        
        expect(obj.subtract(2,1)).toBe(1);
    });

});


