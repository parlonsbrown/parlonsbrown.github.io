
			const app = new SpeRuntime.Application();
			
			var width = $(window).width()

			if (width > 550){
				app.start('./sceneComputer.json');
			}
			else{
				app.start('./sceneMobile.json');
			}
	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  var firebaseConfig = {
		apiKey: "AIzaSyBiCI_F-OT0KB166g7paNAVyXTPFPR7qQM",
		authDomain: "parlonsbienparlonsbrown.firebaseapp.com",
		projectId: "parlonsbienparlonsbrown",
		storageBucket: "parlonsbienparlonsbrown.appspot.com",
		messagingSenderId: "255610219215",
		appId: "1:255610219215:web:c853d1aeb0e9556f39a5ba",
		measurementId: "G-PLTC13FLV7"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  var db = firebase.firestore();
	  var users = db.collection('users')
		  $.getJSON('//api.ipify.org?format=json',function(d){
		     users.add({date: Date.now() ,ip: d.ip})
		  })
        