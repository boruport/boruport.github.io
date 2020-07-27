var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {

	// ここにjQueryの記述をする
	$(function() {
        $(".main1 .work-1").hover(
            function() {
                $('.main1 .work-1').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-1').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-1').css('background-color', '');
                $('.main1 .work-1').css('transition','0.5s');
            }
        );

        $(".main1 .work-1 video").hover(
            function() {
                $('.main1 .work-1 video').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-1 video').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-1 video').css('transform', '');
                $('.main1 .work-1 video').css('transition','0.5s');
            }
        );

        $(".main1 .work-2").hover(
            function() {
                $('.main1 .work-2').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-2').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-2').css('background-color', '');
                $('.main1 .work-2').css('transition','0.5s');
            }
        );

        $(".main1 .work-2 video").hover(
            function() {
                $('.main1 .work-2 video').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-2 video').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-2 video').css('transform', '');
                $('.main1 .work-2 video').css('transition','0.5s');
            }
        );

        $(".main1 .work-3").hover(
            function() {
                $('.main1 .work-3').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-3').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-3').css('background-color', '');
                $('.main1 .work-3').css('transition','0.5s');
            }
        );

        $(".main1 .work-3 video").hover(
            function() {
                $('.main1 .work-3 video').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-3 video').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-3 video').css('transform', '');
                $('.main1 .work-3 video').css('transition','0.5s');
            }
        );

        $(".main1 .work-4").hover(
            function() {
                $('.main1 .work-4').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-4').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-4').css('background-color', '');
                $('.main1 .work-4').css('transition','0.5s');
            }
        );

        $(".main1 .work-4 video").hover(
            function() {
                $('.main1 .work-4 video').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-4 video').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-4 video').css('transform', '');
                $('.main1 .work-4 video').css('transition','0.5s');
            }
        );

        $(".main1 .work-4").hover(
            function() {
                $('.main1 .work-4').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-4').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-4').css('background-color', '');
                $('.main1 .work-4').css('transition','0.5s');
            }
        );

        $(".main1 .work-5 img").hover(
            function() {
                $('.main1 .work-5 img').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-5 img').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-5 img').css('transform', '');
                $('.main1 .work-5 img').css('transition','0.5s');
            }
        );

        $(".main1 .work-5").hover(
            function() {
                $('.main1 .work-5').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-5').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-5').css('background-color', '');
                $('.main1 .work-5').css('transition','0.5s');
            }
        );

        $(".main1 .work-6 img").hover(
            function() {
                $('.main1 .work-6 img').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-6 img').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-6 img').css('transform', '');
                $('.main1 .work-6 img').css('transition','0.5s');
            }
        );

        $(".main1 .work-6").hover(
            function() {
                $('.main1 .work-6').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-6').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-6').css('background-color', '');
                $('.main1 .work-6').css('transition','0.5s');
            }
        );

        $(".main1 .work-7 img").hover(
            function() {
                $('.main1 .work-7 img').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-7 img').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-7 img').css('transform', '');
                $('.main1 .work-7 img').css('transition','0.5s');
            }
        );

        $(".main1 .work-7").hover(
            function() {
                $('.main1 .work-7').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-7').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-7').css('background-color', '');
                $('.main1 .work-7').css('transition','0.5s');
            }
        );

        $(".main1 .work-8 img").hover(
            function() {
                $('.main1 .work-8 img').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-8 img').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-8 img').css('transform', '');
                $('.main1 .work-8 img').css('transition','0.5s');
            }
        );

        $(".main1 .work-8").hover(
            function() {
                $('.main1 .work-8').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-8').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-8').css('background-color', '');
                $('.main1 .work-8').css('transition','0.5s');
            }
        );

        $(".main1 .work-9 img").hover(
            function() {
                $('.main1 .work-9 img').css('transform', 'scale(0.9,0.9)');
                $('.main1 .work-9 img').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-9 img').css('transform', '');
                $('.main1 .work-9 img').css('transition','0.5s');
            }
        );

        $(".main1 .work-9").hover(
            function() {
                $('.main1 .work-9').css('background-color', 'rgb(20, 40, 255)');
                $('.main1 .work-9').css('transition','0.5s');
            },
            function() {
                $('.main1 .work-9').css('background-color', '');
                $('.main1 .work-9').css('transition','0.5s');
            }
        );

    });
})
document.head.appendChild(script)