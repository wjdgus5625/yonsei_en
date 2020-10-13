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
		//ticker1();
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
		/* 	timer = setTimeout(function () {
				$('.ticker li:first').animate({
					marginTop: $('.ticker li').height() * -1
				}, 400, function () {
					$(this).detach().appendTo('ul.ticker').removeAttr('style');
				});
				ticker();
			}, 3000); */
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

	/* 	var ticker1 = function () {
			timer = setTimeout(function () {
				$('.ticker1 li:first').animate({
					marginTop: $('.ticker li').height() * -1
				}, 400, function () {
					$(this).detach().appendTo('ul.ticker1').removeAttr('style');
				});
				ticker1();
			}, 3000);
		};
		// 0번 이전 기능
		$(document).on('click', '.prev', function () {
			$('.ticker1 li:last').hide().prependTo($('.ticker1')).slideDown();
			clearTimeout(timer);
			ticker1();
			if ($('#pause').text() == 'Unpause') {
				$('#pause').text('Pause');
			};
		}); // 0번 기능 끝

		//마우스를 올렸을 때 기능 정지
		var tickerover1 = function () {
			$('.ticker1').mouseover(function () {
				clearTimeout(timer);
			});
			$('.ticker1').mouseout(function () {
				ticker1();
			});
		};
		tickerover1();
		//끝
		ticker1(); */
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

$(document).on('click', '.ordering-list button', function () {
	$(this).addClass('on');
	$(this).parent('li').siblings().find('button').removeClass('on');
});