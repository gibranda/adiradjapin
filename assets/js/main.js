$( function() {

	smoothScroll(500);
	price();
	priceLoad();

});

function smoothScroll(durasi) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, durasi);
		}
	});
}

function price() {
	$('.pricing-container .btn-list').click( function() {
		$('.pricing-wrap').addClass('slideMode');
		$('.json-container').show();
	});

	$('.json-return').click( function() {
		$('.pricing-wrap').removeClass('slideMode');
		$('.json-container').hide(800);
	});
}


function priceLoad() {
	$.ajaxSetup({ cache: true });

	$('.pricing-container label').click( function() {
		var $this = $(this),
			spinner = '<div class="loader">Loading... </div>',
			url = $this.find('.list-data').data('url'), 
			title = $this.find('strong').text();

		$('.json-load').html(spinner).load(url);
		$('.json-title').text(title);
	});
}