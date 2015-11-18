var fortune = require('./library/fortune').getFortune;

for(var i = 0; i < process.argv[2]; i++){
    fortune();
}