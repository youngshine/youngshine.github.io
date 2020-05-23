/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	/* Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});
*/

/* I added 2020-5 */
		// 一开始没有滚动的时候，出现在视窗中的图片也会加载
		start();

		// 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
		var clock; //函数节流
		$(window).on('scroll',function(){
				if(clock){
						clearTimeout(clock);
				}
				clock = setTimeout(function(){
						start()
				},200)
		})

		function start(){
			$('a img').not('[data-isLoading]').each(function () {
				if (isShow($(this))) {
						loadImg($(this));
				}
			})
		}

		// 判断图片是否出现在视窗的函数
		function isShow($node){
			return $node.offset().top <= $(window).height()+$(window).scrollTop();
		}		

		// 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
		function loadImg($img){
			$img.attr('src', $img.attr('data-src'));

			// 已经加载的图片，我给它设置一个属性，值为1，作为标识
			// 弄这个的初衷是因为，每次滚动的时候，所有的图片都会遍历一遍，这样有点浪费，所以做个标识，滚动的时候只遍历哪些还没有加载的图片
			$img.attr('data-isLoading',1);
		}


		// 微信浏览器内点击放大图片
		$('a img').on('click',function(e){
			console.log(e.target)
			if(!e.target.src) return
			var thumbUrl = e.target.src
			var imgUrl = thumbUrl.replace('/thumbs','/fulls');
			WeixinJSBridge.invoke('imagePreview', {  
				'current' : imgUrl,  
				'urls'    : [imgUrl]  
			});
		})
});