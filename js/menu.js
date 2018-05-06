
var consulta=window.matchMedia('(max-width:767px)');		
		//escuchamos la variable consulta sin recargar pagina
		consulta.addListener(mediaQuery);

		var $iconMenu=document.getElementById('icon-menu');
		var $menu=document.getElementById('menu');
		
		function toggleMenu() {
			$menu.classList.toggle('activo');
			$iconMenu.classList.toggle('icon-close');

		}		

		function mediaQuery() {
			
			if (consulta.matches) {				
				$iconMenu.addEventListener('touchstart',toggleMenu);
			}else{
				$iconMenu.removeEventListener('touchstart',toggleMenu);				
			}
		}
		//hacemos que la funcion se ejecute al iniciar la pagina
		mediaQuery()
		
		//carga de imagenes  con BeLazy
		var bLazy = new Blazy({
    		selector:'img'
		});
		/*gestos touch*/
		//var $body = document.body;
		//var gestos = new Hammer($body);
		//gestos.on('swipeleft', ocultarMenu);

		//gestos.on('swiperight', mostrarMenu);

		/*fin gestos*/
	