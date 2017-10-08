import angular from "angular"
import angularMeteor from "angular-meteor"
import template from "./twitter.html"


class TwitterTrending{
  constructor(){
    console-log("Hola mundo")
  }
}

export default angular.module("twitterCtrl",[
  angularMeteor
]).component("TwitterTrending",{
  templateUrl: template,
  controller: ["scope", TwitterTrending]
})
