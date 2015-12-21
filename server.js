var say = require('say');

var text = process.env.TEXT || 'Say hello world to my little friend';

say.speak(null, text);
