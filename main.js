$(function(){
    /*=================================================
    スマホメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編：ストアサイト（インテリア）」参照
    $('.toggle_btn').on('click', function() {
        if ($('.header').hasClass('open')) {
        $('.header').removeClass('open');
        } else {
        $('.header').addClass('open');
        }
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function() {
        $('.header').removeClass('open');
    });

    // リンクをクリックした時にメニューを閉じる
    $('#navi a').on('click', function() {
        $('.header').removeClass('open');
    });
});