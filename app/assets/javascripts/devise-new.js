
function showElementAnimation() {

  var elements = [
    document.querySelectorAll('.card-section'),
    document.querySelectorAll('.copy-text'),
    document.querySelectorAll('.body-card'),
    document.querySelectorAll('.body-card-text'),
    document.querySelectorAll('.safe-copy__text'),
    document.querySelectorAll('#nick'),
    document.querySelectorAll('#face'),
    document.querySelectorAll('#everyday'),
    document.querySelectorAll('.reason-section__text'),
    document.querySelectorAll('.reason-cards-top__sectiontop'),
    document.querySelectorAll('.reason-cards-top__section2nd'),
    document.querySelectorAll('.reason-cards-top__section3rd'),
    document.querySelectorAll('.reason-cards-top__section4th'),
    document.querySelectorAll('.support-section'),
    document.querySelectorAll('.footer-copy')];
  // if(!element) return; // 要素がなかったら処理をキャンセル
  // console.log(elements)
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset; //垂直方向のクスロール量
  var windowH = window.innerHeight;  

  elements.forEach(function(element){
    for(var i=0;i<element.length;i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
        // console.log(element)
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  })
  
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

$(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


