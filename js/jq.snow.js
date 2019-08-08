/**
 * js��ҳѩ��Ч��jquery��� 
 * http://my.csdn.net/?ref=toolbar ����
 * @see http://workshop.rs
 */
(function($){
	
	$.fn.snow = function(options){
	
			var $flake 			= $('<div id="snowbox" />').css({'position': 'absolute', 'top': '35px', 'left': '0px'}).html('&#10052;'),//&#10052;
				documentHeight 	= $(document).height()-100,
				documentWidth	= $(document).width()-350,
				defaults		= {
									minSize		: 10,		//ѩ������С�ߴ�
									maxSize		: 20,		//ѩ�������ߴ�
									newOn		: 1000,		//ѩ�����ֵ�Ƶ��
									flakeColor	: "#F00"	//    ����
								},
				options			= $.extend({}, defaults, options);
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
					
			}, options.newOn);
	
	};
	
})(jQuery);