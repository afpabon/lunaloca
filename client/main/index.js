Template.index.helpers({
  thisArray: function() {
    return [this];
  },
  getCartTotal: function() {
    return '$120.500';
  }
});

Template.index.events({
  'click .link-my-account' : function (e, t) {
    setTimeout(function () {
      Router.go('myaccount');
    }, 10);
  },
  'click .link-checkout' : function (e, t) {
    setTimeout(function () {
      Router.go('checkout');
    }, 10);
  },
  'click .link-login' : function (e, t) {
    setTimeout(function () {
      Router.go('login');
    }, 10);
  },
  'click .link-register' : function (e, t) {
    setTimeout(function () {
      Router.go('register');
    }, 10);
  },
  'click .link-index' : function (e, t) {
    setTimeout(function () {
      Router.go('welcome');
    }, 10);
  },
  'click .link-products' : function (e, t) {
    setTimeout(function () {
      Router.go('products');
    }, 10);
  },
  'click .link-about' : function (e, t) {
    setTimeout(function () {
      Router.go('about');
    }, 10);
  },
  'click .link-contact' : function (e, t) {
    setTimeout(function () {
      Router.go('contact');
    }, 10);
  },
})