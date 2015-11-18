function a() {

var fortunes = ["Fortune 1", "Fortune 2", "Fortune 3", "Fortune 4", "Fortune 5"];
var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

return (randomFortune);
}
module.exports  = {
    getFortune: a
    
};