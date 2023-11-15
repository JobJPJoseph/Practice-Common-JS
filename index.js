
// Your code here
const sayHelloTo = require('./send-messages/say-hello-to');
const { message1: msg1, message2: msg2, message3: msg3 } = require('./messages');
const test = require('./send-messages/give-message-to-mrs-potato');

function giveMessageToMrsPotato(message) {
    test(message);
    return null;
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
