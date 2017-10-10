import { Meteor } from 'meteor/meteor';
import Twit from Meteor.npmRequire("twit");
let Twit = Meteor.npmRequire("twit");
let TrendingRegion = Meteor.npmRequire(/trends/place.json);
let twit = null;

Meteor.startup(() => {
  console.log("Server Init");
  twit = twitterAppInit();
  //getTrending({some stuff})
  //
});

function twitterAppInit(){

    let twit = new twit({
      consumer_key:' oQig6td1GiZif0S7u1bW8cEbE',
      consumer_secret:'l8rarzZJUKAuo7JkLGv1QK81w6eRQXxSNJsUvoCAXvFXRhCsQ2',
      access_token:'917107049984610304-E0EojXT6kyRQV5qVVPouq6Ysc18dH8x',
      access_token_secret:'Qu4TYgKCzLEDea15wQ79803LNvmkXGqhDnzY09X3va7Av'

  });

    return twit;

    /*
    function getTrending(params){
      let trending = new TrendingRegion
      twit.post("some stuff", params, function(err, data, response){
        trending.return({
          err:err,
          res:data
        })
      })
      return trending.wait();

    }
    /*

}
