// 푸터 
// 바로가기
$(document).on('click', '.shortcut-link .btn-toggle', function (e) {
	e.preventDefault();
	$(this).toggleClass('on').siblings('.btn-toggle').removeClass('on');
	$('.familysite-list > li').removeClass('active');
}).on('click', '.btn-shortcut-close', function (e) {
	$(this).closest('.shortcut-content').prev('.btn-toggle').removeClass('on').focus();
});