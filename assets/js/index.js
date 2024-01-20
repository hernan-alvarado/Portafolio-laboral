
window.onload = function () {
	let primerGrafico = {
		animationEnabled: false,
		title: {
			text: "Nivel de dominio de lenguajes de programación y software",
			fontColor: "rgb(44, 34, 34, 0.800)",
		},
		axisY: {
			tickThickness: 0,
			lineThickness: 0,
			valueFormatString: " ",
			includeZero: false,
			gridThickness: 0,
		},
		data: [
			{
				type: "bar",
				indexLabelFontSize: 15,
				toolTipContent: "{indexLabel}",
				dataPoints: [
					{ y: 40, label: " ", indexLabel: "Git & GitHub" },
					{ y: 40, label: " ", indexLabel: "SQL/Postgres" },
					{ y: 45, label: " ", indexLabel: "Java Script" },
					{ y: 60, label: " ", indexLabel: "HTML" },
					{ y: 50, label: " ", indexLabel: "CSS" },
				],
			},
		],
	};

	$("#graficoUno").CanvasJSChart(primerGrafico);

	let segundoGrafico = {
		animationEnabled: false,
		title: {
			text: "Frameworks y librerías",
			fontColor: "rgb(44, 34, 34, 0.800)",
		},
		axisY: {
			tickThickness: 0,
			lineThickness: 0,
			valueFormatString: " ",
			includeZero: false,
			gridThickness: 0,
		},
		data: [
			{
				type: "bar",
				indexLabelFontSize: 15,
				toolTipContent: "{indexLabel}",
				dataPoints: [
					{ y: 35, label: " ", indexLabel: "ExpressJS" },
					{ y: 40, label: " ", indexLabel: "NodeJS" },
					{ y: 40, label: " ", indexLabel: "HandlebarsJS" },
					{ y: 40, label: " ", indexLabel: "jQuery UI" },
					{ y: 50, label: " ", indexLabel: "jQuery" },
					{ y: 50, label: " ", indexLabel: "CanvasJS" },
					{ y: 70, label: " ", indexLabel: "Bootstrap" },
				],
			},
		],
	};

	$("#graficoDos").CanvasJSChart(segundoGrafico);
};


const swiper = new Swiper(".mySwiper", {
	cssMode: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
  });