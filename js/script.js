window.onload = function () {
  AOS.init({

    disable: function () {
      let desktop = 1280;
      
      return window.innerWidth < desktop;
    } // 1280px 이상일 때 disable
  
  });


  // 메뉴 누를시 스크롤 이동  
  let port_top = $('.portraits').offset().top;
  let about_top = $('.about').offset().top;
  let life_top = $('.life').offset().top;
  let gnbLink = $('.gnb li a');
  let gnbLinkPos = [ port_top, about_top, life_top];
  $.each(gnbLink, function(index, item) {
    $(this).click(function(event){
      event.preventDefault();
      $('html').animate({
        scrollTop : gnbLinkPos[index]
      }, 400);
    });
  });
  
  function makeTop() {
    port_top = $('.portraits').offset().top;
    about_top = $('.about').offset().top;
    life_top = $('.life').offset().top;
    gnbLinkPos = [ port_top, about_top, life_top];
  };
  
  $(window).resize(function(){
    makeTop();
    contact_icon_resize();
  });


  // about slide
  let sw_about;
  let sw_about_obj = {
    loop : true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      1080: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        
      },
      768 : {
        slidesPerView: 2,
        slidesPerGroup: 1,

      }
    }

  };

  sw_about = new Swiper('.sw-about', sw_about_obj);



  // portraits data
  let sw_port_data = [{
      'name': '팔공티',
      'imgurl': 'images/port_pal_003.png',
      'imgurlbefore': 'images/port_pal_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/palgongtea/',
      'git': 'https://github.com/jk92lania/palgongtea',
      'origin': 'http://www.palgongtea.co.kr/',
      'study': '개인',
      'day': '8',
      'info' : '100% 개인 작업하였습니다. 표 작성 및 swiper 배치 등에 대해 배웠습니다.'
    },
    {
      'name': '삼양맛샵',
      'imgurl': 'images/port_deli_003.png',
      'imgurlbefore': 'images/port_deli_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/sydeliciousshop/',
      'git': 'https://github.com/jk92lania/sydeliciousshop',
      'origin': 'https://sydeliciousshop.com/',
      'study': '개인',
      'day': '6',
      'info' : '100% 개인 작업하였습니다. swiper 동작시 이벤트를 추가 하는 방법에 대해 공부하였습니다.'
    },
    {
      'name': '포트폴리오',
      'imgurl': 'images/port_prot_001.png',
      'imgurlbefore': 'images/port_prot_002.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'git': 'https://github.com/jk92lania/portfolio',
      'study': '개인',
      'day': '20',
      'info' : '100% 개인 작업하였습니다. 배운 것을 토대로 제작하였습니다. billboard.js 등을 추가 했습니다.'
    },
    {
      'name': '마시그레이',
      'imgurl': 'images/port_masi_001.png',
      'imgurlbefore': 'images/port_masi_002.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/masigray/',
      'git': 'https://github.com/jk92lania/masigray',
      'origin': 'https://www.masigray.com:5021/main/main.asp',
      'study': '스터디용',
      'day': '4',
      'info' : '현재 수업 진행중입니다.배운 내용을 복습하며 제작하고 있습니다.'
    },
    {
      'name': '생명보험협회',
      'imgurl': 'images/port_klia_002.png',
      'imgurlbefore': 'images/port_klia_005.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/klia/',
      'git': 'https://github.com/jk92lania/klia',
      'origin': 'https://www.klia.or.kr/',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작하였습니다. 원페이지 제작 방법을 배웠습니다.'
    },
    {
      'name': '산청군청',
      'imgurl': 'images/port_san_002.png',
      'imgurlbefore': 'images/port_san_005.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/sancheong/',
      'git': 'https://github.com/jk92lania/sancheong',
      'origin': 'https://www.sancheong.go.kr/www/index.do',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작하였습니다. swiper 변형된 배치에 대해 배웠습니다.'
    },
    {
      'name': '한살림',
      'imgurl': 'images/port_han_002.png',
      'imgurlbefore': 'images/port_han_005.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/hansalim/',
      'git': 'https://github.com/jk92lania/hansalim',
      'origin': 'https://shop.hansalim.or.kr/shopping/spMain.do',
      'study': '스터디용',
      'day': '8',
      'info' : '수업을 들으며 제작하였습니다. 장바구니 계산 및 json 방식에 대해 배웠습니다.'
    },
    {
      'name': '풀무원',
      'imgurl': 'images/port_gre_002.png',
      'imgurlbefore': 'images/port_gre_005.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/greenjuice/',
      'git': 'https://github.com/jk92lania/greenjuice',
      'origin': 'https://greenjuice.pulmuone.com/',
      'study': '스터디용',
      'day': '4',
      'info' : '수업을 들으며 제작하였습니다. js를 이용한 class 추가, 제거 및 slide 제작에 대해 배웠습니다.'
    },
    {
      'name': '부산대학교병원',
      'imgurl': 'images/port_pnuh_002.png',
      'imgurlbefore': 'images/port_pnuh_005.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/pnuh/',
      'git': 'https://github.com/jk92lania/pnuh',
      'origin': 'https://www.pnuh.or.kr/pnuh/main/main.do?rbsIdx=1',
      'study': '스터디용',
      'day': '6',
      'info' : '수업을 들으며 제작하였습니다. 헤더 제작, 슬라이드 더보기 제작하는 방법에 대해 배웠습니다.'
    },
    {
      'name': 'todo - vue',
      'imgurl': 'images/port_vue_003.png',
      'imgurlbefore': 'images/port_vue_004.png',
      'vue': 'vue',
      'pc': 'PC',
      'git': 'https://github.com/jk92lania/todoapp',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작 했습니다. vue를 배우며 제작하였습니다.'
    },
    {
      'name': 'todo - php',
      'imgurl': 'images/port_vue_003.png',
      'imgurlbefore': 'images/port_vue_004.png',
      'vue': 'vue',
      'pc': 'PC',
      'work': 'http://paragon.dothome.co.kr/list',
      'git': 'https://github.com/jk92lania/todo-vue-php',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작 했습니다. vue, php를 배우며 제작하였습니다.'
    },
    {
      'name': 'stx건설 - vue',
      'imgurl': 'images/port_stx_002.png',
      'imgurlbefore': 'images/port_stx_005.png',
      'vue': 'vue',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/stx-demo/',
      'git': 'https://github.com/jk92lania/stx-vue',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작 했습니다. stx건설을 vue로 제작하며 배웠습니다.'
    },
    {
      'name': 'stx건설',
      'imgurl': 'images/port_stx_002.png',
      'imgurlbefore': 'images/port_stx_005.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/stxconst/',
      'git': 'https://github.com/jk92lania/stxconst',
      'origin': 'http://www.stxconst.co.kr/',
      'study': '스터디용',
      'day': '3',
      'info' : '수업을 들으며 제작 했습니다. 헤더 제작 등에 대해 배웠습니다.'
    },
  ];

  let sw_port_total = sw_port_data.length;
  let sw_port_html = '';
  for (let i = 0; i < sw_port_total; i++) {
    let temp_data = sw_port_data[i];
    sw_port_html += '<div class="list">';
    sw_port_html += '<div class="port-box">';

    sw_port_html += '<div class="port-box-img">';
    sw_port_html += `<img src="${temp_data.imgurlbefore}" alt="${temp_data.name}">`
    sw_port_html += `<img src="${temp_data.imgurl}" alt="${temp_data.name}">`
    sw_port_html +='</div>';

    sw_port_html += `<span class="port-box-title">${temp_data.name}</span>`;
    
    sw_port_html += `<span class="port-box-info"><em>${temp_data.day}</em>일 <i>${temp_data.study}</i> 제작</span>`;
    sw_port_html += '<div class="port-box-bt"><ul>';
    if(temp_data.work) {
      sw_port_html += `<li><a href="${temp_data.work}">work</a></li>`;
    }
    if(temp_data.git) {
      sw_port_html += `<li><a href="${temp_data.git}">git</a></li>`;
    }
    if(temp_data.origin) {
      sw_port_html += `<li><a href="${temp_data.origin}">origin</a></li>`;
    }
    
    sw_port_html += '</ul></div>';
    sw_port_html += '</div></div>';
  }
  let sw_port_wrapper = $('.sw-portraits .swiper-wrapper');
  sw_port_wrapper.html(sw_port_html);
  slideAct();

  
  function slideAct(){
    let view = 0; //보이는 슬라이드 개수
    let realInx = []; //현재 페이지
    let swiperArr = []; //슬라이드 배열
    
    //슬라이드 배열 생성
    $(".sw-portraits").each(function(){
        realInx.push(0);
        swiperArr.push(undefined);
    })
	
    //디바이스 체크
    let winWChk = 'pc';
    let winW = window.innerWidth;
    $(window).on('load resize', function (){
        winW = window.innerWidth;
        if(winWChk != 'mo' && winW <= 480){ //모바일 버전으로 전환할 때
            slideList();
            winWChk = 'mo';
        } else if(winWChk != 'pad' && winW <= 1200 && winW > 480){ //패드 버전으로 전환할 때
            slideList();
            winWChk = 'pad';
        }else if(winWChk != 'pc' && winW > 1200){ //PC 버전으로 전환할 때
            slideList();
            winWChk = 'pc';
        }
    }) 

      slideList();
      function slideList(){
          //리스트 초기화
          $('.sw-portraits .list').removeClass('portraits-list-1');
          if ($('.sw-portraits .list').parent().hasClass('swiper-slide')){
            console.log('e');
              $('.sw-portraits .swiper-slide-duplicate').remove();
              $('.sw-portraits .list').unwrap('.swiper-slide');
          }
          
          //보이는 슬라이드 개수 설정
          $(".sw-portraits").each(function(index){
            console.log("innerWidth : " + window.innerWidth);
              if (window.innerWidth > 1200){ //PC 버전
                  view = 8;
              }else if(window.innerWidth > 480){ //pad 버전
                  view = 6;
              }else{ //mobile 버전
                  view = 2;
              }
              
              if(view == 2) {
                $('.sw-portraits .list').addClass('portraits-list-1');
              } 

              //리스트 그룹 생성 (swiper-slide element 추가)
              var num = 0;
              $(this).addClass("sw-portraits-" + index);
              $(".sw-portraits-" + index).find('.list').each(function(i) {
                  $(this).addClass("list"+(Math.floor((i+view)/view)));
                  num = Math.floor((i+view)/view);
              }).promise().done(function(){
                  for (var i = 1; i < num+1; i++) {
                      $(".sw-portraits-" + index).find('.list'+i+'').wrapAll('<div class="swiper-slide"></div>');
                      $(".sw-portraits-" + index).find('.list'+i+'').removeClass('list'+i+'');
                  }
              });
          }).promise().done(function(){
              sliderStart();
          });
      }
      
      function sliderStart(){
          $(".sw-portraits").each(function(index){
              //슬라이드 초기화
              if(swiperArr[index] != undefined) {
                  swiperArr[index].destroy();
                  swiperArr[index] == undefined;
              }

              //슬라이드 실행
              swiperArr[index] = new Swiper('.sw-portraits-' + index + ' .inner', {
                  slidesPerView: 1,
                  initialSlide :Math.floor(realInx[index]/view),
                  resistanceRatio : 0,
                  loop:true,
                  // navigation: {
                  //     nextEl: $('.sw-portraits-' + index).find('.sw-portfolio-next'),
                  //     prevEl: $('.sw-portraits-' + index).find('.sw-portfolio-prev'),
                  // },
                  pagination: {
                    el: ".sw-portraits-pg",
                    clickable: true,
                  },
                  on: {
                      slideChange: function () {
                          realInx[index] = this.realIndex*view
                          console.log(realInx);
                      }
                  },
              });

              //슬라이드 배열 값 추가
              if(swiperArr[index] == undefined) {
                  swiperArr[index] = swiper;
              }
          }); 
      }
  }


  // life slide  
  let sw_life_slide = $('.sw-life .swiper-slide');
  let sw_life_w = $('.sw-life').width();
  $.each(sw_life_slide, function(index, item){
    $(this).find('.life-box').mouseenter(function(){
      sw_life_w = sw_life.width;
      console.log(sw_life_w);
      if(sw_life_w >= 795) {
        perView = 6;
      } else if(sw_life_w >= 420) {
        perView = 3;
      } else {
        perView = 1;
        return;
      }
      

      if(index >= nowSlide && index <= (nowSlide+perView-1)) {
        sw_life_slide.removeClass('sw-life-small-6');
        sw_life_slide.removeClass('sw-life-small-3');
        for(let i = 0; i < perView; i++) {
          if(perView == 6) {
            sw_life_slide.eq(nowSlide+i).addClass('sw-life-small-6');      

          } else if(perView == 3) {
            sw_life_slide.eq(nowSlide+i).addClass('sw-life-small-3');     
          }
        }
      };
      if(perView == 6) {   
        sw_life_slide.removeClass('sw-life-big-6');      
        $(this).parent().addClass('sw-life-big-6');

      } else if(perView == 3) { 
        sw_life_slide.removeClass('sw-life-big-3');      
        $(this).parent().addClass('sw-life-big-3');
      }
      sw_life_slide.find('.life-txt').removeClass('sw-life-txt-active');
      $(this).parent().find('.life-txt').addClass('sw-life-txt-active');
    });
    $(this).find('.life-box').mouseleave(function(){
      sw_life_slide.find('.life-txt').removeClass('sw-life-txt-active');
      sw_life_slide.removeClass('sw-life-small-6');
      sw_life_slide.removeClass('sw-life-big-6');      
      sw_life_slide.removeClass('sw-life-small-3');
      sw_life_slide.removeClass('sw-life-big-3');      
    });
  });


  let nowSlide = 0;
  let perView = 6;
  let sw_life = new Swiper(".sw-life", {
    // loop : true,
    slidesPerView: 1,
    initialSlide : nowSlide,
    // slidesPerGroup: 3,
    spaceBetween: 0,
    pagination: {
      el: ".sw-life-pg",
      clickable: true,
    },
    // touchRatio: 0,//드래그 금지
    on: {
      activeIndexChange: function () {
        nowSlide = this.realIndex; //현재 슬라이드 index 갱신
        
        sw_life_slide.removeClass('sw-life-small-6');
        sw_life_slide.removeClass('sw-life-big-6');
        sw_life_slide.removeClass('sw-life-small-3');
        sw_life_slide.removeClass('sw-life-big-3');
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      420: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  });




  function contact_icon_resize(){
    let win_width = window.innerWidth;
    // console.log(win_width);
    let contact_icon = $('.contact-wrap > a > i');
    if(win_width > 1200) {
      contact_icon.removeClass('fa-5x');
      contact_icon.removeClass('fa-6x');
      contact_icon.addClass('fa-9x');
    } else if(win_width > 480) {
      contact_icon.removeClass('fa-5x');
      contact_icon.removeClass('fa-9x');
      contact_icon.addClass('fa-6x');
    } else {
      contact_icon.removeClass('fa-9x');
      contact_icon.removeClass('fa-6x');
      contact_icon.addClass('fa-5x');

    }
  }


  makeTop();
  contact_icon_resize();

}