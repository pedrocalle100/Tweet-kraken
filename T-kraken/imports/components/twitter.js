import angular from "angular"
import angularMeteor from "angular-meteor"
import template from "./twitter.html"


getTrends = function(){
  return function(){
    console.log('getting top trendings');
    Twit.get('trends/place', {id:'1'},
      Meteor.bindEnviorment(function(err, trend_data, response){
        Trends.remove({});
        TrendTime.remove({});
        TrendTime.insert({last_insert_stamp: Date.parse(trend_data[0].as_of)});
        console.log('Insert: '+trend_data[0].as_of);
      })
    );
  };
};


export default angular.module("twitterCtrl",[
  angularMeteor
]).component("twitterTrending",{
  templateUrl: template,
  controller: ["scope", twitterTrending]
})
