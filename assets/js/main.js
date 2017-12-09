$( function() {

	smoothScroll(500);
	price();
	priceLoad();
	testimonial();

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


function testimonial() {
	$('.testi-button').click(function() {
		var $this = $(this),
			position = $this.parent().children().index($this);

		$('.testi-unit').removeClass('active').eq(position).addClass('active');
		$('.testi-button').removeClass('active').eq(position).addClass('active');
	});

	$('.testi-control-next, .testi-control-prev').click(function() {
		var $this = $(this),
			active = $('.testi-wrap').find('.active'),
			position = $('.testi-wrap').children().index(active),
			num = $('.testi-unit').length;

		if ($this.hasClass('testi-control-next')) 
		{
			if (position < num -1) 
			{
				$('.active').removeClass('active').next().addClass('active');
			}
			else 
			{
				$('.testi-unit').removeClass('active').first().addClass('active');
				$('.testi-button').removeClass('active').first().addClass('active');
			}
		}
		else 
		{
			if (position === 0) 
			{
				$('.testi-unit').removeClass('active').last().addClass('active');
				$('.testi-button').removeClass('active').last().addClass('active');
			}
			else 
			{
				$('.active').removeClass('active').prev().addClass('active');
			}
		}
	});
}