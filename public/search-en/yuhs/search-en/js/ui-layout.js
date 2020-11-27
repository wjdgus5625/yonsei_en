// 푸터 
// 바로가기
$(document).on('click', '.shortcut-link .btn-toggle', function (e) {
	e.preventDefault();
	$(this).toggleClass('on').siblings('.btn-toggle').removeClass('on');
	$('.familysite-list > li').removeClass('active');
}).on('click', '.btn-shortcut-close', function (e) {
	$(this).closest('.shortcut-content').prev('.btn-toggle').removeClass('on').focus();
});

$(window).on('load resize', function () {
	$('.search-keyword-wrap').css({
		'max-height': _mode === 'tablet' || _mode === 'mobile' ? '100px' : '140px',
		'overflow': 'hidden'
	})
});

$(document).on('keydown focus click', '.searching', function (e) {
	$('.doctor-one-wrap').not('.slick-initialized').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		adaptiveHeight: true
	});

	scrollbar();
	$('.popup .popup-cont').mCustomScrollbar({
		scrollInertia: 300
	});
});