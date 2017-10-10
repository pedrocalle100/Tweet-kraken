Meteor.methods({
  trends: function(){
    var trend_time=TrendTime.findOne();
    var trend_age = 300000;

    if(typeof trend_time !== 'undefined'){
      trend_age = Date.now() - trend_time.last_insert_stamp;
      }
  }
  if (trend_age >= 300000){
    getTrends();
  }
});
