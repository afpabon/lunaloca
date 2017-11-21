Template.products.created = function() {
  Meteor.subscribe('allCategories');
}

Template.products.helpers({
  getNewVarietyCategories: function() {
    return Categories.find({IsNew: true, IsFeatured: true}).fetch();
  },
  getVarietyCategories: function() {
    return Categories.find({IsNew: false, IsFeatured: true}).fetch();
  }
});