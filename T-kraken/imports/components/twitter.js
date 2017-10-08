import angular from "angular"
import angularMeteor from "angular-meteor"
import template from "./twitter.html"


class twitterTrending{
  constructor(){
    console-log("Hola mundo")
  }
}

export default angular.module("twitterCtrl",[
  angularMeteor
]).component("twitterTrending",{
  templateUrl: template,
  controller: ["scope", twitterTrending]
})
