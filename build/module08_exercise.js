"use strict";
var AllGreetings;
(function (AllGreetings) {
    let Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    let GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
// returnGreeting('Hello');                     // Returns error
// Greetings.returnGreeting('Bonjour');         // OK
// GreetingsWithLength.returnGreeting('Hola');
// AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
// AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK
var greet = AllGreetings.Greetings;
var greet2 = AllGreetings.GreetingsWithLength;
greet.returnGreeting('Bonjour');
greet2.returnGreeting('Hola');
