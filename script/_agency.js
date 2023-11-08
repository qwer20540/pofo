(($, window, document, undefined)=>{

  class Agency {
    init(){
        this.parallax();   //패럴럭스
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.section9();
        this.section10();
        this.footer();
    }
    parallax(){  //패럴럭스(Parallax)

        let obj = {
            init(){
              this.section2();
              this.section3();
              this.section4();
            },
            section2(){
                const sec2Title    = $('#section2 .title');
                const sec2Col      = $('#section2 .col');
                let   sec2TitleTop = $('#section2 .title').offset().top-$(window).height()-200;
                let   sec2ColTop   = $('#section2 .col').offset().top-$(window).height()-900;
      
              

                $(window).scroll(()=>{
                    // 초기화설정
                    if( $(window).scrollTop() == 0 ){
                        sec2Title.removeClass('addParallax');
                        sec2Col.removeClass('addParallax');
                    }
      
                    // 섹션2타이틀
                    if( $(window).scrollTop() > sec2TitleTop ){
                        sec2Title.addClass('addParallax');
                    }
      
                    if( $(window).scrollTop() > sec2ColTop ){
                        sec2Col.addClass('addParallax');
                    }
                });
    
            },
            section3(){
                const sec3Title    = $('#section3 .title');
                const sec3Col      = $('#section3 .col');
                let   sec3TitleTop = $('#section3 .title').offset().top-$(window).height()-200;
                let   sec3ColTop   = $('#section3 .col').offset().top-$(window).height()-900;
      
                $(window).scroll(()=>{
                    // 초기화설정
                    if( $(window).scrollTop() == 0 ){
                        sec3Title.removeClass('addParallax');
                        sec3Col.removeClass('addParallax');
                    }
      
                    // 섹션3타이틀
                    if( $(window).scrollTop() > sec3TitleTop ){
                        sec3Title.addClass('addParallax');
                    }
      
                    if( $(window).scrollTop() > sec3ColTop ){
                        sec3Col.addClass('addParallax');
                    }
                });
            },
            section4(){
              const sec4Title        = $('#section4 .title');
              const sec4Row1Col      = $('#section4 .row1-col');
              const sec4Row2Col      = $('#section4 .row2-col');
              let   sec4TitleTop     = $('#section4 .title').offset().top-$(window).height()-200;
              let   sec4Row1ColTop   = $('#section4 .row1-col').offset().top-$(window).height()-900;
              let   sec4Row2ColTop   = $('#section4 .row2-col').offset().top-$(window).height()-900;
              let   t1=false;
              let   t2=false;


              $(window).scroll(()=>{
                  // 초기화설정
                  if( $(window).scrollTop() == 0 ){
                      t1=false;
                      t2=false;
                      sec4Title.removeClass('addParallax');

                      sec4Row1Col.removeClass('addParallax');
                      sec4Row2Col.removeClass('addParallax');

                      sec4Row1Col.removeClass('addGallery');
                      sec4Row2Col.removeClass('addGallery');

                  }
    
                  // 섹션3타이틀
                  if( $(window).scrollTop() > sec4TitleTop ){
                      sec4Title.addClass('addParallax');
                  }
    
                  // 갤러리이미지 1행 4개 이미지 칸
                  if( $(window).scrollTop() > sec4Row1ColTop ){
                      if(t1==false){
                        t1=true;
                        sec4Row1Col.addClass('addParallax');
                      }
                  }

                  // 갤러리이미지 2행 4개 이미지 칸
                  if( $(window).scrollTop() > sec4Row2ColTop ){
                      if(t2==false){
                        t2=true;
                        sec4Row2Col.addClass('addParallax');
                      }
                  }

              });
            },
            section5(){
              
            }
        }
        obj.init();



    }
    header(){
      
      // 윈도우 스크롤 탑값이 0이면 높이72 기본 
      // - 추가된 클래스 모두 삭제
      // 헤더.removeClass('addH60');

      // 윈도우 스크롤 탑값이 0이 아니면 높이 60
      // - 추가 클래스 addH60
      // 헤더.addClass('addH60');

      // 스크롤 이벤트 발생하면

      let newTop = $(window).scrollTop();
      let oldTop = newTop;
      let x = '';

      $(window).scroll(function(){
          if( $(window).scrollTop() == 0 ){
              $('#header').removeClass('addH60');
              $('#header').removeClass('addShow');
              $('#header').removeClass('addHide');
          }
          else{
             $('#header').addClass('addH60');

             //위 아래 방향 알아내야 한다.
              newTop = $(window).scrollTop();

                  x = oldTop-newTop > 0 ? 'UP' : 'DOWN';

                  if(x=='UP'){
                      $('#header').addClass('addShow');
                      $('#header').removeClass('addHide');
                  }

                  if(x=='DOWN'){
                      $('#header').addClass('addHide');
                      $('#header').removeClass('addShow');
                  }

             oldTop = newTop;

          }
      });







      //메인버튼 이벤트
      const mainBtn = $('.main-btn');
      const sub = $('.sub');
      const nav = $('#nav');
      const subBtn = $('.sub-btn');
      const subSub = $('.sub-sub');

            //메인메뉴-서브메뉴
            mainBtn.on({
              mouseenter(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });

            nav.on({
              mouseleave(){
                sub.stop().fadeOut(300);
                subSub.stop().fadeOut(300);
              }
            });


            //서브메뉴-서브서브메뉴
            subBtn.on({
              mouseenter(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });


    }
    section1(){
      // 슬라이드 관련된 모든 변수 등록
      const slideWrap = $('.slide-wrap');
      const slideView = $('.slide-view');
      const pageBtn = $('.page-btn');
      let cnt = 0;


      function mainSlide(){
        slideWrap.stop().animate({left: -1903*cnt }, 600, 'easeInOutExpo', function(){
          if(cnt>2){cnt=0}
          if(cnt<0){cnt=2}
          slideWrap.stop().animate({left: -1903*cnt }, 0);
        });
        pageEvent();
      }    


      // 페이지 이벤트 함수
      function pageEvent(){
          pageBtn.removeClass('currentPage');
          pageBtn.eq(cnt>2?0:cnt).addClass('currentPage');
      }

      // 페이지버튼 클릭 이벤트
      // pageBtn.eq(0).on({
      //   click: function(e){
      //       e.preventDefault();
      //       cnt=0;
      //       mainSlide();
      //   }
      // });
      // pageBtn.eq(1).on({
      //   click: function(e){
      //       e.preventDefault();
      //       cnt=1;
      //       mainSlide();
      //   }
      // });
      // pageBtn.eq(2).on({
      //   click: function(e){
      //       e.preventDefault();
      //       cnt=2;
      //       mainSlide();
      //   }
      // });

      // pageBtn.each(function(idx){
      //     pageBtn.eq(idx).on({ //버튼3개중에 어느것 this
      //       click: function(){
      //         cnt = idx;
      //         mainSlide();
      //         console.log(idx);
      //       }
      //     });
      // });
      
      pageBtn.each(function(idx){
        const $this = $(this);
          $this.on({ //버튼3개중에 어느것 this
            click: function(){
              cnt = idx;
              mainSlide();
              console.log(idx);
            }
          });
      });
     
      
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }

      //setInterval(prevCount, 3000);

      // 스와이프(좌우터치 이벤트)
      // 오른족에서 왼쪽으로 터치 : 다음슬라이드   0 >
      // 왼쪽에서 오른족으로  터치 : 이전슬라이드  < 0
      let s = null;///터치 시작 좌표값
      let e = null; //터치 종료 좌표값
      let dS = null; //드래그시작
      let dE = null; //드래그끝
      let mD = null; //마우스다운
      slideView.on({  
          mousedown(event){
            s = event.clientX;
            dS = event.clientX - slideWrap.offset().left-1903;
            mD = true;
          },
          mouseup(event){
            e = event.clientX;
            mD = false;
            if( (s-e) > 0 ){  //시작좌표-종료좌표 > 0 보다 크면 다음슬라이드
              nextCount();
            }
            if( (s-e) < 0 ){  //시작좌표-종료좌표 < 0 보다 작으면 이전슬라이드
              prevCount();
            }
          },
          mousemove(e){  //드래그 앤 드롭(물체를 잡고 끌고(드래그) 그리고 놓기(드롭) 실제로 구현)
            //반드시 마우스 다운(mouseDown)이 이루어져야 실행한다.
            if( mD !== true ){return}  //!mD
            dE = e.clientX;
            slideWrap.css({left: dE - dS });
          }
      });

      


    }
    section2(){

    }
    section3(){

    }
    section4(){

      //갤러리 이미지 배치 부드럽게 하는 애니메이션
      //position: top left 
      const galleryBtn  = $('.gallery-btn');
      const galleryItem = $('.gallery-item');
      const gallery = $('.gallery');
      let   galW = $(window).innerWidth()/4;
      let   galH = galW*0.8125;

      function resizefn(){
          galW = $(window).innerWidth()/4;
          galH = galW*0.8125;
      }

      $(window).resize(function(){
        resizefn();
      });
      resizefn();

      // 갤러리버튼을 클릭하면 해당 이미지 배치를 
      // hide(), show() 메서드를 이용 배치한다.
      //버튼 6개 반복처리
      galleryBtn.each(function(idx){      
          $(this).on({
              click: function(e){
                e.preventDefault();

                galleryItem.removeClass('addParallax');  //패럴럭스 효과 삭제
                galleryItem.removeClass('addGallery');   //줌효과                
                  if(idx==0){ //8개 보이기 ALL
                      gallery.css({height:galH*2});
                      galleryItem.eq(0).show().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                      galleryItem.eq(1).show().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                      galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*2, top:galH*0});
                      galleryItem.eq(3).show().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                      galleryItem.eq(4).show().animate({width:galW, height:galH, left:galW*0, top:galH*1});
                      galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*1, top:galH*1});
                      galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*2, top:galH*1});
                      galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*3, top:galH*1});
                  
  
                      galleryItem.eq(4).removeClass('row1-col');
                      galleryItem.eq(5).removeClass('row1-col');
                      galleryItem.eq(6).removeClass('row1-col');
                      galleryItem.eq(7).removeClass('row1-col');

                      galleryItem.eq(4).removeClass('row2-col');
                      galleryItem.eq(5).removeClass('row2-col');
                      galleryItem.eq(6).removeClass('row2-col');
                      galleryItem.eq(7).removeClass('row2-col');


                  }
                  else if(idx==1){
                    //hide
                    gallery.css({height:galH*2});
                    galleryItem.eq(0).hide().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(3).hide().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                    galleryItem.eq(5).hide().animate({width:galW, height:galH, left:galW*1, top:galH*1});
                    //show
                    galleryItem.eq(1).show().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(4).show().animate({width:galW, height:galH, left:galW*2, top:galH*0});
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                    
                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*0, top:galH*1});

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');
                    galleryItem.eq(6).addClass('row1-col');
                    
                    galleryItem.eq(7).removeClass('row1-col');
                    galleryItem.eq(7).addClass('row2-col');

                  }
                  else if(idx==2){
                    //hide
                    gallery.css({height:galH*2});
                    galleryItem.eq(3).hide().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                    galleryItem.eq(7).hide().animate({width:galW, height:galH, left:galW*3, top:galH*1});
                    //show
                    galleryItem.eq(0).show().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(1).show().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*2, top:galH*0});
                    galleryItem.eq(4).show().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                    
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*0, top:galH*1});
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*1, top:galH*1});

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');

                    galleryItem.eq(5).removeClass('row1-col');
                    galleryItem.eq(6).removeClass('row1-col');

                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');


                  }
                  else if(idx==3){
                    //hide
                    gallery.css({height:galH*1});
                    galleryItem.eq(1).hide().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(6).hide().animate({width:galW, height:galH, left:galW*2, top:galH*1});
                    galleryItem.eq(3).hide().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                    galleryItem.eq(7).hide().animate({width:galW, height:galH, left:galW*3, top:galH*1});
                    //show
                    galleryItem.eq(0).show().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(4).show().animate({width:galW, height:galH, left:galW*2, top:galH*0});
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*3, top:galH*0});
                
                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');
                    galleryItem.eq(5).addClass('row1-col');

                  }
                  else if(idx==4){
                    //hide
                    gallery.css({height:galH*2});
                    galleryItem.eq(0).hide().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(1).hide().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(4).hide().animate({width:galW, height:galH, left:galW*2, top:galH*0});
                    //show
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(3).show().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*2, top:galH*0});                  
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*3, top:galH*0});

                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*0, top:galH*1});

                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(5).addClass('row1-col');
                    galleryItem.eq(6).addClass('row1-col');
                    
                    galleryItem.eq(7).removeClass('row1-col');
                    galleryItem.eq(7).addClass('row2-col');

                  }
                  else if(idx==5){

                    gallery.css({height:galH*1});
                    //hide
                    galleryItem.eq(1).hide().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(2).hide().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(3).hide().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(5).hide().animate({width:galW, height:galH, left:galW*1, top:galH*1});
                    galleryItem.eq(6).hide().animate({width:galW, height:galH, left:galW*2, top:galH*1});
                    //show
                    
                    galleryItem.eq(0).show().animate({width:galW, height:galH, left:galW*0, top:galH*0});
                    galleryItem.eq(4).show().animate({width:galW, height:galH, left:galW*1, top:galH*0});
                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*2, top:galH*0});

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(7).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');
                    galleryItem.eq(7).addClass('row1-col');

                  } //end if

                  galleryItem.addClass('addGallery');                  

              }
          });
      });







    }
    section5(){
        // svg 객체 내부로 인식
        const circle  = $('.circle circle');  
        const number  = $('.number');
        const per     = [0.56, 0.96, 0.78, 0.83]; //90%        
        let   perSize = []; 
        const second  = 3;
        let   size    = [];
        let   piece   = [];
        let   counter = [0,0,0,0]; //누적하는 변수 초기값 없으면 누적안됨
        let   setId   = [];
        let   sec5Top = $('#section5').offset().top-$(window).height()+300;
        let   t       = false;


        $(window).scroll(function(){

            if( $(window).scrollTop() == 0 ){
              t=false;
            } 

            if( $(window).scrollTop() > sec5Top ){
                if(t==false){
                  t=true;
                  svgAni();
                }
            }
            
        });

        function  svgAni(){
            counter = [0,0,0,0];
            $.each(circle, function(idx, obj){

                //1. 전체길이를 구한다.
                size[idx] = obj.getTotalLength();

                //2. 각요소의 전체길이를 대입한다. 
                obj.style.strokeDasharray  = size[idx];
                obj.style.strokeDashoffset = size[idx];

                //3. 각요소의 퍼센트 길이를 구한다.
                //퍼센트 길이 = 전체길이 * 퍼센트
                perSize[idx] = size[idx] * per[idx];

                //4. 토막 예를 들면 1초에 1마디(피스 piece)의 길이 구한다.
                piece[idx] = (perSize[idx]/second)/100;

                //5. 카운트 타이머 구현 함수 1초간격으로 누적 진행 종료
                //5-1. 메인SVG 함수 : 원그래프가 진행
                function mainSvg(){
                  //오프셋길이를 처음 전체길이로 설정하고 - 빼기 카운트 누적 값(90프로를 한마디씩을 뺀다)
                  $(obj).css({ strokeDashoffset: size[idx]-counter[idx] });                  
                  number.eq(idx).text( Math.ceil(counter[idx]/size[idx]*100) + '%' );
                }
/*                 Math.round(); 반올림     엑셀 round()
                Math.floor(); 자리내림수  엑셀 roudDown()
                Math.ceil();  자리올림수  엑셀 roudUp() */

                //5-2. 카운트 타이머 함수
                function countTimer(){
                  counter[idx] += piece[idx];
                  if( counter[idx] >= perSize[idx] ){
                    clearInterval(setId[idx]);
                  }
                  else{
                    mainSvg();
                  }                  
                }

                setId[idx] = setInterval(countTimer, 10);

            });
        }


    }
    section6(){
        
    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){

    }    
    footer(){

    }
  }

  const newAgency =  new Agency();
  newAgency.init();



})(jQuery, window, document);