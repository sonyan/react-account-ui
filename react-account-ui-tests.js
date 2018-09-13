// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by react-account-ui.js.
import { name as packageName } from "meteor/sonynn:react-account-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('react-account-ui - example', function (test) {
  test.equal(packageName, "react-account-ui");
});
