const fizzBuzzer = require('../fizzBuzzer');

const expect = require('chai').expect;

describe('fizzBuzzer', function(){

    it('should return "fizz-buzz" for nums divisible by 15', function(){
        const expected = 'fizz-buzz';
        const inputs = [15, 30, 45, 60];
        inputs.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(expected);
        });
    });

    it('should return "buzz" for nums divisble by 5', function(){
        const expected = 'buzz';
        const inputs = [5, 10, 20, 25, 35, 40];
        inputs.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(expected);
        });
    });

    it('should return "fizz" for nums divisible by 3', function(){
        const expected = 'fizz';
        const inputs = [3, 6, 9, 12, 18, 21];
        inputs.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(expected);
        });
    });

    it('should return num if not divisible by 3, 5, 15', function(){
        const inputs = [1, 2, 4, 7, 11, 13];
        inputs.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(input);
        });
    });

    it('should raise error if arg not a number', function(){
        const inputs = ['1', '200', false];

        inputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });

});