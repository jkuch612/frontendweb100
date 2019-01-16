describe('array literals', () => {
    it('has them', () => {
        const things = [];
        expect(things[99]).toBeUndefined();

        things[0] = 1;
        things[1] = 3.4;
        things[2] = things;

        expect(things[0]).toBe(1);
    });

    it('they can be initialized', () => {
        const colors = ['red', 'green', 'orange'];
        expect(colors.length).toBe(3);
        expect(colors[0]).toBe('red');
    });

    it('destructuring arrays', () => {
        const luckyNumbers = [1, 2, 108, 22];

        //const third = luckynumbers[2]
        //const fourth = luckynumbers[3]
        const [, , third, fourth] = luckyNumbers;

        expect(third).toBe(108);
        expect(fourth).toBe(22);
    });
});

describe('object literals', () => {
    it('a simple example', () => {
        const movie = {};

        movie.title = 'Jaws';
        movie.director = 'Spielberg';
        movie.yearReleased = '1977';

        expect(movie.title).toBe('Jaws');
        expect(movie.yearReleased).toBe('1977');
        //this is not defined yet but you can still refer to it
        expect(movie.yaerReleased).toBeUndefined();

        movie.yaerReleased = 1988;

        expect(movie.yaerReleased).toBe(1988);
    });

    it('initializing an object', () => {
        const person = {
            name: {
                first: 'Adam',
                last: 'Driver'
            },
            roles: ['Kylo Ren', 'Ben Solo']
        }

        expect(person.name.last).toBe('Driver');
        expect(person.roles[1]).toBe('Ben Solo');
    });
    it('property access', () => {
        const someObj = { color: 'blue' };

        expect(someObj.color).toBe('blue');
        expect(someObj['color']).toBe('blue');

        const cast = {
            'luke skywalker': 'Mark Hamill',
            'han solo': 'Harrison Ford'
        };

        expect(cast['luke skywalker']).toBe('Mark Hamill');
    });

    it('destructuring an object', () => {
        const book = {
            title: 'Walden',
            author: 'Thoreau',
            price: 22.38
        };

        // const title = book.title;
        // const price = book.price;
        const { title, price: cost } = book;

        expect(title).toBe('Walden');
        expect(cost).toBe(22.38); 
    });
});

describe('functions', () => {
    describe('functions and literals', () => {

        it('creating a function', () => {
            // always returns something - no reurn returns undefined
            function empty(){
                let a = 2;
            }

            expect(empty()).toBeUndefined();

            //named function

            function add(a,b){
                return a+b;
            }

            const answer = add(2,2);
            expect(answer).toBe(4);

            const answer2 = (function (a,b) {return a-b;})(10,2);
            expect(answer2).toBe(8);

            const multiply = function (a,b) {
                return a*b;
            };

            expect(multiply(3,4)).toBe(12);

            //anonymous function with phat arrow
            // single statement needs no curly braces
            const divide = (a,b) => a/b;
            expect(divide(10,2)).toBe(5);

            //multiple lines needs the curly braces - same as lambda expression in c# 
            const formatName = (first, last) =>{
                console.log('About to format a name!');
                return `${last}, ${first}`;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');

        });

        it('quick example of Higher-Order Function', () => {
            function formatName(first,last, wrapper) {
                const fullName = `${last}, ${first}`;
                return wrapper(fullName);
            }

            function addStars(name){
                return `***${name}***`;
            }
            expect(formatName('Luke', 'Skywalker', addStars)).toBe('***Skywalker, Luke***');

            const name = formatName('Jeff','Gonzalez', (n) => '     ' + n);

            expect(name).toBe('     Gonzalez, Jeff');
        });
    });
});