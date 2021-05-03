
			const app = new SpeRuntime.Application();
			
			var width = $(window).width()

			if (width > 550){
				app.start('./sceneComputer.json');
			}
			else{
				app.start('./sceneMobile.json');
			}
			
        