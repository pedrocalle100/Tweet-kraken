Template.trending.helpers({
  'trends': function() {
    console.log('Viewing trends');
    var trend_time = TrendTime.findOne();
    if (typeof trend_time === 'undefined' ||
        Date.now() - trend_time.last_insert_stamp >= 300000) {
      return [{name: "Loading trends..."}];
    }
    return Trends.find();
  },

  'trendtime': function() {
    var trend_time = TrendTime.findOne();
    if (typeof trend_time !== 'undefined') {
      return new Date(trend_time.last_insert_stamp);
    }
  }
});
