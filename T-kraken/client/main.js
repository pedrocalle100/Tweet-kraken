import angular from "angular"
import angularMeteor from "angular-meteor"
import twitter from "../imports/components/twitter"

angular.module("twitterapp",[
  angularMeteor,
  twitter.name
])
