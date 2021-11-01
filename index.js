const receivesAFunction = callback => callback();
function returnsANamedFunction() {
    const namedFunction = () => console.log("ABC");
    return namedFunction;
}
const returnsAnAnonymousFunction = () => function() {console.log("Anonymous Function")};