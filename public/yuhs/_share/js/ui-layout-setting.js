// 자동 배포 테스트 중

/* 
	본 JS는 퍼블리싱 편의를 위해 
	중복되는 공통 레이아웃 영역을 로드할 목적으로 작성된 문서입니다.
	서버 언어로 레이아웃을 구성하게되면 오류를 유발하는 코드이오니
	Back-End 개발시 이 파일을 반드시 삭제해 주세요 :)
*/

if (window.location.hostname == 'pms.inseq.co.kr') {
	$.getScript('../../_res/yuhs/_share/js/ui-git-path.js', function () {});
}

$(function () {
	$('#header').load('../_guide/_inc-header.html', function () {
		if ($.isFunction(window.lnbSetting)) lnbSetting();
		if ($.isFunction(window.gitPath)) gitPath();
	});
	$('#breadcrumb').load('../_guide/_inc-breadcrumb.html', function () {
		// if ($.isFunction(window.breadcrumb)) breadcrumb();
	});
	$('#footer').load('../_guide/_inc-footer.html', function () {
		if ($.isFunction(window.scrollbar)) scrollbar();
		if ($.isFunction(window.gitPath)) gitPath();
	});
});