/*
 * Pega um tweet aleatório do grande bot sábio do twitter @hax0rson
 */

var Twitter = require('ntwitter');

var twitter = new Twitter({
  consumer_key: 'euEYzsSOz8BGal66eUwZWoHFu',
  consumer_secret: 'jcYUgOELNqurChfjqlMR24Wustv6uizfBgEwgHhWRAKbHWYSSm',
  access_token_key: '53946176-woxhsqRcwCoksBrHyvej7mweJIiLPgJoEapaKuvyk',
  access_token_secret: 'amMFIiDJEsRnBq1gkkD6tDSonZOWTy4c5JlAqLsju4'
});

var twit = function(bot, data, nick, args, end) {
	
	bot.message('Confie no sábio!');
	
	twitter.search('hax0rson', {result_type:'mixed', count:4}, function(err, data) {
		if(err){
			bot.message(err);
			end();
		}
		bot.message(data);
		end();
	});
	
};                     

exports.run = twit;