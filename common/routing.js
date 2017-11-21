if (Meteor.isClient) {
  Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'index',
  });

  Router.map(function () {

    this.route('welcome');

    this.route('myaccount');

    this.route('checkout');

    this.route('login');

    this.route('register');

    this.route('products');

    this.route('about');

    this.route('contact');

    this.route('home', {
      path: '/',
      action: function() {
        Router.go('welcome');
      }
    });

    this.configure({
      layoutTemplate: 'index'
    });
  });
}
