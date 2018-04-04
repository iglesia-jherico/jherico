;(function(){
	class UserLocation{

		static get(callback){

			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude,
						lng: location.coords.longitude
					})
				})
			}else{
				alert("tu navegador esta viejo")
				
		}

		}

			
	}

	const my_Place = {
		lat: -12.070799,
		lng: -76.979722
	}

	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(document.getElementById('mapa'),{
			center: my_Place,
			zoom:15
		}
	
	)

	const marker = new google.maps.Marker({
		map: map,
		position: my_Place,
		title: "Iglesia Jherico",
		visible: true
	})	

	UserLocation.get((coords)=>{
		//calculando la distancia del usuario a la Iglesia
		let origen = new google.maps.LatLng(coords.lat,coords.lng)
		let destino = new google.maps.LatLng(my_Place.lat,my_Place.lng)

		let service = new google.maps.DistanceMatrixService()
		service.getDistanceMatrix({
			origins: [origen],
			destinations:[destino],
			travelMode: google.maps.TravelMode.DRIVING
		},(response,status)=>{
			if(status===google.maps.DistanceMatrixStatus.Ok){
				const duration_element = response.rows[0].elements[0]
				const duration_viaje = duration_element.duration.text
				document.querySelector("#mensaje")
						.innerHTML = "estas a "+duration_viaje
				//console.log(duration_element)
			}

		})
	})	

	})

})()