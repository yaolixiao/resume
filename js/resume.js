/*var data = [
 {
 id: 1,
 str: '准备好了吗'
 },
 {
 id: 2,
 str: '接下来'
 },
 {
 id: 3,
 str: '要你好看'
 }
 ];*/
var typeWrite = {
    step: 0,
    duration: 50,
    type: function (options) {
        var _this = this,
            t = null;
        window.clearTimeout(t);

        var defaults = {
            item: null,
            str: '',
            fontSize: '18px',
            callback: null
        };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                defaults[key] = options[key];
            }
        }

        $(defaults.item).html(defaults.str.substring(0, _this.step)).css('fontSize', defaults.fontSize);
        if (_this.step === defaults.str.length) {
            _this.step = 0;
            window.clearTimeout(t);
            if (typeof defaults.callback === 'function') {
                setTimeout(function () {
                    defaults.callback.call($(defaults.item));
                }, 200);
            }
        }
        else {
            _this.step++;
            t = setTimeout(function () {
                _this.type(defaults);
            }, _this.duration);
        }
    }
};

var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var str = '';
var writeOne = {
    item: '.text',
    str: '你眼前的是',
    callback: function () {
        str = '姚力晓';
        this.html(str).addClass('zoomIn').one(animateEnd, animateOne.bind(this));
    }
};

function animateOne() {
    this.removeClass('zoomIn');
    str = '个人简历';
    this.html(str).addClass('bounceInRight').one(animateEnd, animateFour.bind(this));
}

/*function animateTwo() {
    this.removeClass('bounceInRight');
    str = '他';
    this.html(str).css({
        fontSize: '50px',
        animationDuration: '2s'
    }).addClass('zoomOut').one(animateEnd, animateThree.bind(this));
}

function animateThree() {
    this.removeClass('zoomOut').css({
        fontSize: '18px',
        animationDuration: '1s'
    });
    str = '会写JS';
    this.html(str).addClass('zoomIn').one(animateEnd, animateFour.bind(this));
}*/

function animateFour() {
    this.removeClass('zoomIn');
    $('.black-bg').animate({opacity: 0}, 1000, function () {
        $('.black-bg').hide();
        $('.page-box').animate({opacity: 1}, 1000);
        pageTwoAnimate();
        //$('#pagecanvas').animate({opacity: 0.6}, 2000);
    });
}
typeWrite.type(writeOne);

//第二个页求职简历动态效果
function pageTwoAnimate() {
    $('.getwork').addClass('bounceInLeft');
    $('.resume').addClass('bounceInRight').one(animateEnd, function () {
        $('.getwork').removeClass('bounceInLeft');
        $('.resume').removeClass('bounceInRight');

        $('.myresume').show().addClass('bounceInLeft');
        $('.begin-text').show().addClass('bounceInLeft').one(animateEnd, function () {
            $('.begin-text').removeClass('bounceInLeft');
            $('.myresume').removeClass('bounceInLeft').addClass('rubberBand');
            $('.resume-line').show().addClass('bounceInLeft');
            $('.header').show().addClass('zoomIn').one(animateEnd, function () {
                $('.myresume').removeClass('rubberBand');
                $('.resume-line').removeClass('bounceInLeft');
                $('.header').removeClass('zoomIn');
                $('.square1').show().addClass('fadeInUp').one(animateEnd, function () {
                    $('.square1').removeClass('fadeInUp');
                    $('.square3').show().addClass('fadeInUp').one(animateEnd, function () {
                        $('.square3').removeClass('fadeInUp');
                        $('.suqare-text').show().addClass('zoomIn').one(animateEnd, function () {
                            $('.suqare-text').removeClass('zoomIn');
                        });
                    });
                });
            });
        });
    });
}

//第三页我的信息动态效果
function pageThreeAnimate() {
    $('.hexagon1').show().addClass('zoomIn').one(animateEnd, function () {
        $('.hexagon1').removeClass('zoomIn')
        $('.hexagon-head').show().addClass('zoomIn').one(animateEnd, function () {
            $('.hexagon-head').removeClass('zoomIn');
            $('.triangle-left').show().addClass('bounceInRight');
            $('.triangle-right').show().addClass('bounceInLeft');
            $('.hexagon2').show().addClass('bounceInRight');
            $('.infromation').show().addClass('bounceInDown').one(animateEnd, function () {
                $('.triangle-left').removeClass('bounceInRight');
                $('.triangle-right').removeClass('bounceInLeft');
                $('.hexagon2').removeClass('bounceInRight');
                $('.infromation').removeClass('bounceInDown');

                $('.hexagon-center').show().addClass('zoomIn');
                $('.hexagon-center-text').show().addClass('bounceInDown').one(animateEnd, function () {
                    $('.hexagon-center').removeClass('zoomIn');
                    $('.hexagon-center-text').removeClass('bounceInDown');

                    $('.hexagon3').show().addClass('zoomIn');
                    $('.hexagon4').show().addClass('zoomIn').one(animateEnd, function () {
                        $('.hexagon3').removeClass('zoomIn');
                        $('.hexagon4').removeClass('zoomIn');

                        $('.hexagon5').show().addClass('rotateIn').one(animateEnd, function () {
                            $('.hexagon5').removeClass('rotateIn')
                        });
                    });
                });
            });
        });
    });
}

//第四页
function pageFourAnimate() {
    $('.page4 .square').css('top','-8rem').animate({top: '-4rem'}, 500, function () {
        $('.work-text').show().addClass('bounceInLeft');
        $('.usedwork').show().addClass('bounceInLeft');
        $('.resume-line-left').show().addClass('bounceInLeft');
        $('.resume-line-right').show().addClass('bounceInRight');
        $('.experience').show().addClass('bounceInRight').one(animateEnd, function () {
            $('.work-text').removeClass('bounceInLeft');
            $('.usedwork').removeClass('bounceInLeft');
            $('.resume-line-left').removeClass('bounceInLeft');
            $('.resume-line-right').removeClass('bounceInRight');
            $('.experience').removeClass('bounceInRight');

            $('.model1').show().addClass('rotateInDownLeft').one(animateEnd, function () {
                $('.model1').removeClass('rotateInDownLeft');
                $('.model2').show().addClass('rotateInDownRight').one(animateEnd, function () {
                    $('.model2').removeClass('rotateInDownRight');
                    $('.model3').show().addClass('rotateInUpLeft').one(animateEnd, function () {
                        $('.model3').removeClass('rotateInUpLeft')
                    });
                });
            });
        });
    });
}

//第五页
function pageFiveAnimate() {
    $('.shape_five1').addClass('zoomIn').one(animateEnd, function () {
        $('.shape_five1').removeClass('zoomIn')
        $('.page5 .major').show().addClass('zoomIn');
        $('.page5 .ability').show().addClass('rotateInDownRight');
        $('.page5 .myability').show().addClass('bounceInLeft').one(animateEnd, function () {
            $('.page5 .major').removeClass('zoomIn');
            $('.page5 .ability').removeClass('rotateInDownRight');
            $('.page5 .myability').removeClass('bounceInLeft');

            $('.ability-box1').show().addClass('zoomIn').one(animateEnd, function () {
                $('.ability-box1').removeClass('zoomIn');

                $('.ability-box1 span').show().addClass('zoomIn');
                $('.ability-box2').show().addClass('fadeInDown');
                $('.ability-box7').show().addClass('fadeInUp').one(animateEnd, function () {
                    $('.ability-box1 span').removeClass('zoomIn');
                    $('.ability-box2').removeClass('fadeInDown');
                    $('.ability-box7').removeClass('fadeInUp');

                    $('.ability-box2 span').show().addClass('zoomIn');
                    $('.ability-box7 span').show().addClass('zoomIn');
                    $('.ability-box3').show().addClass('fadeInLeft');
                    $('.ability-box6').show().addClass('fadeInRight').one(animateEnd, function () {
                        $('.ability-box2 span').removeClass('zoomIn');
                        $('.ability-box7 span').removeClass('zoomIn');
                        $('.ability-box3').removeClass('fadeInLeft');
                        $('.ability-box6').removeClass('fadeInRight');

                        $('.ability-box3 span').show().addClass('zoomIn');
                        $('.ability-box6 span').show().addClass('zoomIn');
                        $('.ability-box4').show().addClass('fadeInRight');
                        $('.ability-box5').show().addClass('fadeInLeft').one(animateEnd, function () {
                            $('.ability-box3 span').removeClass('zoomIn');
                            $('.ability-box6 span').removeClass('zoomIn');
                            $('.ability-box4').removeClass('fadeInRight');
                            $('.ability-box5').removeClass('fadeInLeft');

                            $('.ability-box4 span').show().addClass('zoomIn');
                            $('.ability-box5 span').show().addClass('zoomIn').one(animateEnd, function () {
                                $('.ability-box4 span').removeClass('zoomIn');
                                $('.ability-box5 span').removeClass('zoomIn')
                            });
                        });
                    });
                });
            });
        });
    });
}


//第六页
function pageSixAnimate() {
    $('.page6 .major').addClass('flash');
    $('.page6 .ability').addClass('lightSpeedIn');
    $('.page6 .myability').addClass('rotateInUpLeft').one(animateEnd, function () {
        $('.page6 .major').removeClass('flash');
        $('.page6 .ability').removeClass('lightSpeedIn');
        $('.page6 .myability').removeClass('rotateInUpLeft');

        $('.heart-item2').show().addClass('zoomIn').one(animateEnd, function () {
            $('.heart-item2').removeClass('zoomIn');

            $('.heart-item2 span').show().addClass('zoomIn');
            $('.heart-item1').show().addClass('zoomIn').one(animateEnd, function () {
                $('.heart-item2 span').removeClass('zoomIn');
                $('.heart-item1').removeClass('zoomIn');

                $('.heart-item1 span').show().addClass('zoomIn');
                $('.heart-item4').show().addClass('zoomIn').one(animateEnd, function () {
                    $('.heart-item1 span').removeClass('zoomIn');
                    $('.heart-item4').removeClass('zoomIn');

                    $('.heart-item4 span').show().addClass('zoomIn');
                    $('.heart-item6').show().addClass('rotateIn');
                    $('.heart-item3').show().addClass('zoomIn').one(animateEnd, function () {
                        $('.heart-item4 span').removeClass('zoomIn');
                        $('.heart-item6').removeClass('rotateIn');
                        $('.heart-item3').removeClass('zoomIn');

                        $('.heart-item3 span').show().addClass('zoomIn');
                        $('.heart-item6 span').show().addClass('zoomIn');
                        $('.heart-item5').show().addClass('rotateIn').one(animateEnd, function () {
                            $('.heart-item3 span').removeClass('zoomIn');
                            $('.heart-item6 span').removeClass('zoomIn');
                            $('.heart-item5').removeClass('rotateIn');

                            $('.heart-item5 span').show().addClass('zoomIn').one(animateEnd, function () {
                                $('.heart-item5 span').removeClass('zoomIn');
                            });
                        });
                    });
                });
            });
        });
    });
}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    effect: 'coverflow',
    loop: true,
    onTransitionEnd: function (swiper) {
        var curIndex = swiper.activeIndex;
        console.log(curIndex)
        var slides = swiper.slides;
        //curIndex === 2 ? pageTwoAnimate() : void 0;
        curIndex === 2 ? pageThreeAnimate() : void 0;
        curIndex === 3 ? pageFourAnimate() : void 0;
        curIndex === 4 ? pageFiveAnimate() : void 0;
        curIndex === 5 ? pageSixAnimate() : void 0;
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            $(item).find('.hideitem').css('display', 'none');
            if (index === curIndex) {
                if (index === 0) {
                    item.id = 'page' + (slides.length - 2);
                }
                else if (index === slides.length - 1) {
                    item.id = 'page1';
                }
                else {
                    item.id = 'page' + curIndex;
                }
            }
        })
    }
    /*onInit: function(swiper){
     var slides = swiper.slides;
     slides[0].id = 'page1';
     }*/
})


















