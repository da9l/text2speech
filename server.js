var say = require('say');

var text = process.env.TEXT || 'Say hello world to my little friend. Kan du prata svenska?';

say.speak(null, text);
