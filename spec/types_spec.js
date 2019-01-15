describe('data types in javascript', () => {
    describe('strings in js', () => {
        it('can be single-quoted', () => {
            const name = 'Teddy';
            expect(name).toBe("Teddy");

        });

        it('fun with strings', () => {
            const name = "John O'Conner";
            const report = 'She said "Do not do it!" again';
            const report2 = 'She said "Don\'t do it!" again';       
        });

        it('has template strings', () => {
            let name = 'Sue', age = 42;

            const m1 = 'Her name is ' + name + ' and her age is ' + age;

            const m2 = `Her name is ${name} and her age is ${age}`;

            expect(m1).toBe(m2);

        });


    });

    describe('literals and a few actual types', () => {
        it('some examples', () => {
            const v1 = 'tacos';
            expect(typeof v1).toBe('string');
            const v2 = 3.1415927;
            expect(typeof v2).toBe("number");
            let v3 = true;
            expect(typeof v3).toBe("boolean");
            v3 = 'fun'
            expect(typeof v3).toBe("string");
        });

        it('why is var so bad', () => {
            var x = 12;

            if(true){
                var y = 42
            }

            //this is an abomination!!!! It should not leak out of the block
            expect(y).toBe(42); // this should fail

        });
    });
});