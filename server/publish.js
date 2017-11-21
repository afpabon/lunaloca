Meteor.publish("allCategories", function() {
  return Categories.find();
});

Meteor.methods({
})