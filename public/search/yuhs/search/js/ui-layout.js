$(document).ready(function () {
	//연관검색어 영역
	$('.click-area').click(function () {
		$(this).next('.item-list-box').addClass('on');
	});
	$(".btn-close-keyword").click(function () {
		$(this).parents().removeClass("on");
	});

	$(window).on('load', function () {
		ticker();
	});


	var ticker = function () {
		timer = setTimeout(function () {
			$('.ticker').each(function () {
				var $this = $(this);
				$this.find('li:first').animate({
					marginTop: $('.ticker li').height() * -1
				}, 400, function () {
					$(this).detach().appendTo($this).removeAttr('style');
				});
			});
			ticker();
		}, 3000);
	};
	// 0번 이전 기능
	$(document).on('click', '.prev', function () {
		$('.ticker li:last').hide().prependTo($('.ticker')).slideDown();
		clearTimeout(timer);
		ticker();
		if ($('#pause').text() == 'Unpause') {
			$('#pause').text('Pause');
		};
	}); // 0번 기능 끝

	//마우스를 올렸을 때 기능 정지
	var tickerover = function () {
		$('.ticker').mouseover(function () {
			clearTimeout(timer);
		});
		$('.ticker').mouseout(function () {
			ticker();
		});
	};
	tickerover();
	//끝
	ticker();
});

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
		'max-height': _mode === 'pc' ? '140px' : '100px',
		'overflow': 'hidden'
	})
});