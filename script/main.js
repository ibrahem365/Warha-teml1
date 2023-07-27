
  $('.faq').click(function () {
    $(this).find('.para-div').slideToggle(300);
    $(this).toggleClass('open');
    $('.para-div').not($(this).find('.para-div')).slideUp(300);
    $('.faq').not(this).removeClass('open'); 
})

$('.selected-price').click(function (e) {
  e.stopPropagation();
  $(this).find('.price-list').slideToggle(200);
  $(this).toggleClass('open');
})

$('body').click(function () {
  $('.price-list').slideUp(200);
})

$('.price-list li').click(function () {
  var text = $(this).text();
  $('.before-price').text(text);
})

$('.btn2-link-sec1').click(function (e) {
e.preventDefault();
e.stopPropagation();
  $('.video-popup').toggleClass('open');
})

$('.overlay').click(function () {
    $('.video-popup').removeClass('open');
  })

$('.video-popup').click(function (e) {
  e.stopPropagation();
  })

  $('.exit-icon').click(function () {
    $('.video-popup').removeClass('open');
  })

  $("body").on("click", '.price-icon', function(){
    $(this).addClass("price-icon-border");

		$(this).siblings('.price-icon ').removeClass("price-icon-border");
    $('.price-content3').removeClass('marked-content');

		$('.price-content3[data-id="'+$(this).data('id')+'"]').addClass('marked-content');
	});

  $('.bottom-card-contents').click(function () {
    $(this).find('.price-ul-div ul').slideToggle(300);
    $(this).toggleClass('open');
})

  $('.header-btn-menu').click(function (e) {
    e.stopPropagation();
    $('header .links').slideToggle(300);
    $('header').toggleClass('open');
})

$('body').click(function () {
  $('.header-btn-menu-container').slideUp(300);
})

// $("header .links ul .li-item").on("click", function (e) {
//   e.preventDefault(), e.stopPropagation()
//   $(this).parents('li').siblings().find('.sub-menu').slideUp(300);
//   $(this).next("ul.sub-menu").slideToggle(300)
// });
var width = $(window).width();
  if (width < 992){
$('.almost-price').click(function (e) {
  e.preventDefault(), e.stopPropagation();
  $(this).find('.sub-menu').toggleClass('open');
  $(this).parents('li').siblings().find('.sub-menu').removeClass('open');
})
}