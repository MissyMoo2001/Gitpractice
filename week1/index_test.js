var expect = chai.expect;

describe('function', function() {
    describe('test', function() {
        it('should concatenate the two parameters', function() {
            var x = test('Hola', 7);
            expect(x).to.equal('Hola7');
        })

        it('should throw an error if first parameter is not a string', function() {
            expect (function(){
                test(4,4);
            }).to.throw(Error);
        })

    })
})