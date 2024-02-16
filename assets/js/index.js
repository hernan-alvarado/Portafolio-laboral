

window.onload = function () {
	CanvasJS.addColorSet("aprendizajeTecnologias",
			[//colorSet Array
			"#DCA978",
			"#DCA978",
			"#DCA978",
			"#DCA978",
			"#DCA978",
			"silver",
			"silver",
			"silver",
			"silver",
			"gold",
			"gold"
			]);
		
/* agregar leyenda con color bronce a básico
color plateado a intermedio
color oro a avanzado */

		let chart = new CanvasJS.Chart("graficoDos", {
		colorSet: "aprendizajeTecnologias",
		animationEnabled: false,
		backgroundColor: "#00356B",
		legend:{
			fontSize: "13",
			fontColor: "#fffffe"
		},
		axisX: {
			labelFontColor: "#fffffe",
			labelFontFamily: "Inter Variable",

		},
		axisY: {
			lineThickness: 2,
			includeZero: true,
			gridThickness: 0,	
			labelFormatter: function(e){
				return  e.value + "%" ;
			}	
		},
		data: [
			{
				axisXType: "primary", 
				type: "bar",
				indexLabelPlacement: "inside",
				indexLabelFontSize: 16,
				indexLabelFontColor: "#fffffe",
				dataPoints: [
					{ y: 35, label: "ExpressJS"},
					{ y: 40, label: "Git"},
					{ y: 40, label: "SQL/Postgres"},
					{ y: 40, label: "NodeJS" },
					{ y: 40, label: "HandlebarsJS"},
					{ y: 50, label: "jQuery"},
					{ y: 50, label: "CanvasJS"},
					{ y: 50, label: "CSS"},
					{ y: 60, label: "HTML"},
					{ y: 70, label: "Bootstrap"},
				]
				
			}
		]
	});
	chart.render();
}

const swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 4000,
	  },
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
});




