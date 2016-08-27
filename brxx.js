AutoForm.hooks({
  'brxx-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      IonKeyboard.close();
	   console.log('brxx-new-form');
      Router.go('brxx.show', {_id: result});
    }
  }
});

Template.br.onRendered(function () {
  	Meteor.call('myaddress', Geolocation.latLng(), function(error, result) {
   	  console.log(result);
	  Session.set('myaddress', result);  	
  	});

});


Template.br.helpers({
  bdLocation: function () {
    var latLng = Geolocation.latLng();

    latLng=GPS.gcj_encrypt(latLng.lat,latLng.lng);

    latLng=GPS.bd_encrypt(latLng.lat,latLng.lng);

    return latLng.lng + "," + latLng.lat;
  },
  gaddress: function() { return Session.get('gaddress'); }
});
// 11111111111111111111111111111111111111111111111111111111111111