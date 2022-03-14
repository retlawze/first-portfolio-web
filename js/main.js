$(document).ready(function () {
	$('.menu a').each(function (index, elemento) {
		$(this).css({
			top: '-200px',
		});
		$(this).animate(
			{
				top: '0',
			},
			500 + index * 250
		);
	});

	var sobreMi = $('#sobremi').offset().top,
		trabajos = $('#trabajos').offset().top,
		conocimientos = $('#conocimientos').offset().top,
		contacto = $('#contacto').offset().top;

	$('#btn-sobremi').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 75,
			}, 
			500
		);
	});

	$('#btn-trabajos').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 550,
			},
			500
		);
	});

	$('#btn-conocimientos').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 1175,
			},
			500
		);
	});

	$('#btn-contacto').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 1850,
			},
			500
		);
	});
});
