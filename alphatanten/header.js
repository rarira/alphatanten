var start_check = true;
var prev_menu = -1;
var banner_start_num = 0;
var banner_line_max_cnt = 0;
var banner_max_cnt = 0;
var banner_line_cnt = 0;
var img_on = '';
var img_off = '';
var img_length = '';
var img = '';
var img_path = '';
var check_cnt = 0;
var check_max_cnt = 0;

  ///////////////////////////////////////////* �������� ��� START *///////////////////////////////////////////
  $(function() {
      var f_nBnrCnt = 0; // jQBanner�� ����ؼ� ȭ�鿡 ��µǴ� ���ʼ�
  
      $.f_varBanner = {
          defaults: {
              /* ���������� ���̴� ���� */
              objScr: null,   // ��ũ�� ����
              objBtn: null, // ��ư ����
              objTimer: null, // Ÿ�̸�
              nOrderNo: 999, // ���� ���õ� ���̾�
              nOrderNoBtn: -1, // ��ư ���ý� ���̾�
  
              /* �ʱ⼼���� ������  �ʼ� ���� */
              nWidth: 0, // ���� ��ũ�� ���� ��
              nHeight: 0, // ���� ��ũ�� ���� ����
              nCount: 0, // ���� ��ũ�� ������ �����ִ� ���̾��� ��
              isActType: "none",  // ���� �׼� Ÿ�� none,left,right,up,down,fade,page
  
              /* �ʱ⼼���� ������  �ɼ� ���� */
              isShuffle: "N", // ���� ���̾���� ���� ���� Y:����,N:������
              isBtnAct: "mouseover",  // ��ư �۵���� mouseover,click
              isBtnType: "img", // ��ư Ÿ�� img,li           
              nStartUp: 300, // ��ŸƮ �� ù ���̾��� FadeIn �ӵ�
              nDelay: 5000, // ������
              nSpeed: 500, // �׼ǽ��� �ӵ�
              nSpeedFade: 300, // ���̵� ���� �׼ǿ��� ��ư �۵��� �ӵ��� ������ [�ǵ��� ����]
              isStartFade:"Y", // ��ŸƮ FadeIn ȿ�� ���� [���α׷����� ��ũ���� Display:block ó���� ��� ���]
              isStartDelay:"N" // ��ŸƮ�� �����̸� ������ ���� [���ſ� �������� ��� �����̸� ������ �ʱ�ȭ]
          }
      };
  
      $.fn.jQBanner = function(defaults){
  	    var config = $.extend({}, $.f_varBanner.defaults, defaults);
          var isIEChk = jsBrowserCheck();
  
          config.objScr = "#"+this.attr("id")+" .clsBannerScreen";
          config.objBtn = "#"+this.attr("id")+" .clsBannerButton";
          
          if (config.isStartDelay=="Y" && isIEChk==true) {
              /* ��ŸƮ ������ ó�� */
              if (f_nBnrCnt>=0 && f_nBnrCnt<=3) {
                  setTimeout( function(){jsBanInit(config)}, f_nBnrCnt*100);
              } else if (f_nBnrCnt>3 && f_nBnrCnt<=6) {
                  setTimeout( function(){jsBanInit(config)}, f_nBnrCnt*200);
              } else if (f_nBnrCnt>6 && f_nBnrCnt<=10) {
                  setTimeout( function(){jsBanInit(config)}, f_nBnrCnt*300);
              } else if (f_nBnrCnt>10) {
                  setTimeout( function(){jsBanInit(config)}, 400);
              }
              f_nBnrCnt++;
          } else {
              jsBanInit(config);
          }
  
          return this;
      };
  
      function jsBanInit(config) {
          var nPosFix;
  
          /* ���� ��ũ�� CSS ���� */
          $(config.objScr).css({'position':'relative','height':config.nHeight+'px','width':config.nWidth+'px','overflow':'hidden'});
          
          /* ù ���̾� ���� */
          config.nOrderNo = (config.nOrderNo==999) ? Math.floor(Math.random() * config.nCount):config.nOrderNo-1;
  
          /* �׼� Ÿ�Կ� ���� �ʱ� ���� */
          if (config.isActType == "left") {
              $(config.objScr+" div").each(function(i){
                  nPosFix = (config.nOrderNo==i)?0:config.nWidth;
                  $(this).css({'position':'absolute','top':'0','left':(-1*nPosFix)+'px'});
                  if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                      $(this).fadeIn(config.nStartUp);
                  }
                  $(this).attr("divno",i);
              });
          } else if (config.isActType == "right") {
              $(config.objScr+" div").each(function(i){
                  nPosFix = (config.nOrderNo==i)?0:config.nWidth;             
                  $(this).css({'position':'absolute','top':'0','left':nPosFix+'px'});
                  if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                      $(this).fadeIn(config.nStartUp);
                  }
                  $(this).attr("divno",i);
              });
          } else if (config.isActType == "up") {
              $(config.objScr+" div").each(function(i){
                  nPosFix = (config.nOrderNo==i)?0:config.nHeight;
                  $(this).css({'position':'absolute','top':(-1*nPosFix)+'px','left':'0'});
                  if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                      $(this).fadeIn(config.nStartUp);
                  }
                  $(this).attr("divno",i);
              });
          } else if (config.isActType == "down") {
              $(config.objScr+" div").each(function(i){
                  nPosFix = (config.nOrderNo==i)?0:config.nHeight;
                  $(this).css({'position':'absolute','top':nPosFix+'px','left':'0'});
                  if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                      $(this).fadeIn(config.nStartUp);
                  }
                  $(this).attr("divno",i);
              });
          } else if (config.isActType == "fade") {
              $(config.objScr+" div").each(function(i){
                  if (config.nOrderNo==i) {
                      nPosFix = 0;
                      if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                          $(this).fadeIn(config.nStartUp);
                      }
                  } else {
                      nPosFix = config.nWidth;
                  }
                  $(this).css({'position':'absolute','top':'0','left':nPosFix+'px'});
                  $(this).attr("divno",i);
              });
          } else if (config.isActType == "page") {
              $(config.objScr+" div").each(function(i){
                  nPosFix = (config.nOrderNo==i)?0:config.nHeight;
                  $(this).css({'position':'absolute','top':nPosFix+'px','left':'0'});
                  if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                      $(this).fadeIn(config.nStartUp);
                  }
                  $(this).attr("divno",i);
              });
          } else if (config.isActType == "none") {
              $(config.objScr+" div").each(function(i){
                  if (config.nOrderNo==i) {
                      nPosFix = 0;
                      if (!(config.nOrderNo==i && config.isStartFade=="N")) {
                          $(this).fadeIn(config.nStartUp);
                      }
                  } else {
                      nPosFix = config.nWidth;
                  }
                  $(this).css({'position':'absolute','top':'0','left':nPosFix+'px'});
                  $(this).attr("divno",i);
              });
          }
  
          /* ��ư ���� ���� */
          $(config.objBtn+" "+config.isBtnType).each(function(i){ $(this).attr("btnno",i); $(this).css("cursor","hand") });
  
          /* ��ư ���ε� */
          jsBanBtnBind(config);
          
          /* ��ũ�� pause ���ε� */
          jsScrPauseBind(config);
  
          /* ��ũ�� pause ���ε� */
          jsScrPauseBind2(config);
  
          /* ���� Ÿ�̸� ��� �� �׼� ����!!!! */
          if (config.isActType != "none" && config.isActType != "page") {
              config.objTimer = setTimeout( function(){jsBanTimer(config)}, config.nDelay);
          }
      };
  
      /* ��� Ÿ�̸� */
      function jsBanTimer(config) {
          /* ��ư �׼� ������ �ʱ�ȭ */
          config.nOrderNoBtn = -1;
  
          jsBanAction(config);
          config.objTimer = setTimeout( function(){jsBanTimer(config)}, config.nDelay);
      };
  
      /* ��� �׼� ó�� */
      function jsBanAction(config) {
          var nPageSel;
          var nSpeed = config.nSpeed;
          var nDivNoSel = config.nOrderNo;
          var nOrderNext = (config.nOrderNo+1)%(config.nCount);
  
          /* 'page' �׼��� ��� ���������� ���� */
          if (config.isActType == "page") {
              var nOrderMinus = config.nOrderNoBtn-config.nOrderNo;
              nPageSel = (nOrderMinus==1 || (nOrderMinus==(config.nCount-1)*-1)) ? 1 : 0;
          }   
  
          if (config.nOrderNoBtn >= 0) {
              config.nOrderNo = config.nOrderNoBtn;
              nOrderNext = config.nOrderNoBtn;
              nSpeed = (config.isActType=="fade" || config.isActType=="page" || config.isActType=="none") ? config.nSpeedFade : 0;
          } else {
              config.nOrderNo = ((config.nCount-1)==config.nOrderNo) ? nOrderNext : config.nOrderNo+1;
          }
  
          var nDivNoNext = nOrderNext;
  
          var objSelObj = $(config.objScr+" div[divno='"+nDivNoSel+"']");
          var objNextObj = $(config.objScr+" div[divno='"+nDivNoNext+"']");
  
          /* �׼ǿ� ���� ��ư ���� */
          if (config.isActType != "page") {
              jsBanBtnRO(config,nOrderNext);
          }
  
          /* ���� ��ũ�� ���̾���� ���� ó�� */
          if (config.isActType == "left") {
              objNextObj.css('left',(config.nWidth)+'px');
              objSelObj.animate({'left':(-1*config.nWidth)+'px'},nSpeed);
              objNextObj.animate({'left':'0'},nSpeed);
          } else if (config.isActType == "right") {
              objNextObj.css('left',(-1*config.nWidth)+'px');
              objSelObj.animate({'left':config.nWidth+'px'},nSpeed);
              objNextObj.animate({'left':'0'},nSpeed);
          } else if (config.isActType == "up") {
              objNextObj.css('top',config.nHeight+'px');
              objSelObj.animate({'top':(-1*config.nHeight)+'px'},nSpeed);
              objNextObj.animate({'top':'0'},nSpeed);
          } else if (config.isActType == "down") {
              objNextObj.css('top',(-1*config.nHeight)+'px');
              objSelObj.animate({'top':config.nHeight+'px'},nSpeed);
              objNextObj.animate({'top':'0'},nSpeed);
          } else if (config.isActType == "fade") {
              objSelObj.css({'left':config.nWidth+'px','display':'none'});
              objNextObj.css('left','0');
              objNextObj.fadeIn(nSpeed);
          } else if (config.isActType == "page") {
              if (nPageSel == 0) {
                  objNextObj.css({'top':'0','left':config.nWidth+'px'});
                  objSelObj.animate({'left':(-1*config.nWidth)+'px'},nSpeed);
                  objNextObj.animate({'left':'0'},nSpeed);
              } else if (nPageSel == 1) {
                  objNextObj.css({'top':'0','left':(-1*config.nWidth)+'px'});
                  objSelObj.animate({'left':config.nWidth+'px'},nSpeed);
                  objNextObj.animate({'left':'0'},nSpeed);
              }
          } else if (config.isActType == "none") {
              objSelObj.css({'left':config.nWidth+'px','display':'none'});
              objNextObj.css('left','0');
              objNextObj.fadeIn(nSpeed);
          }
      }
  
      /* ��ũ�� pause ���ε� */
      function jsScrPauseBind(config) {
          /* ��ũ���� ���� ó�� */
          $(config.objScr).mouseover(function(){
              clearTimeout(config.objTimer);
          });
          $(config.objScr).mouseout(function(){
              if (config.isActType != "none" && config.isActType != "page") {
                  config.objTimer = setTimeout( function(){jsBanTimer(config)}, config.nDelay);
              }
          });     
      }
  
      /* ��ũ�� pause ���ε� */
      function jsScrPauseBind2(config) {
          /* ��ũ���� ���� ó�� */
          $("#banner_button").click( function(){
            if( $(this).attr("class") == 'banner_play' ) {
              jQuery(this).removeClass().addClass("banner_pause");
              if (config.isActType != "none" && config.isActType != "page") {
                  config.objTimer = setTimeout( function(){jsBanTimer(config)}, config.nDelay);
              }
            } else {
              jQuery(this).removeClass().addClass("banner_play");
              clearTimeout(config.objTimer);
            }
          });
      }
  
      /* ��ư ���ε� */
      function jsBanBtnBind(config) {
          /* �ʱ� ��ư ���� */
          if (config.isActType != "page") {
              jsBanBtnRO(config,config.nOrderNo);
          }
          
          /* ��ư�� ���� ���콺 ������ ��� ó�� */
          if (config.isBtnAct=="mouseover") {
              /* ��ư�� ���� ó�� */
              $(config.objBtn+" "+config.isBtnType).mouseover(function(){
                  var nImgNo = $(this).attr("btnno");
  
                  if (config.isActType != "none" && config.isActType != "page") {
                      clearTimeout(config.objTimer);
                  }
  
                  if (config.isActType == "page") {
                      if (nImgNo == 0) {
                          config.nOrderNoBtn = ((config.nOrderNo-1)<0) ? config.nCount-1 : config.nOrderNo-1;
                      } if (nImgNo == 1) {
                          config.nOrderNoBtn = ((config.nOrderNo+1)==config.nCount) ? (config.nOrderNo+1)%config.nCount : config.nOrderNo+1;
                      }
                      jsBanBtnRO(config,nImgNo);
                  } else {
                      config.nOrderNoBtn = parseInt(nImgNo);
                  }
  
                  jsBanAction(config);
              });
              $(config.objBtn+" "+config.isBtnType).mouseout(function(){
                  if (config.isActType != "none" && config.isActType != "page") {
                      config.objTimer = setTimeout( function(){jsBanTimer(config)}, config.nDelay);
                  }
              });
  
          /* ��ư�� ���� Ŭ���� ��� ó�� */
          } else if (config.isBtnAct=="click") {
              $(config.objBtn+" "+config.isBtnType).click(function(){
                  var nImgNo = $(this).attr("btnno");
                  
                  if (config.isActType != "none" && config.isActType != "page") {
                      clearTimeout(config.objTimer);
                  }
  
                  if (config.isActType == "page") {
                      if (nImgNo == 0) {
                          config.nOrderNoBtn = ((config.nOrderNo-1)<0) ? config.nCount-1 : config.nOrderNo-1;
                      } if (nImgNo == 1) {
                          config.nOrderNoBtn = ((config.nOrderNo+1)==config.nCount) ? (config.nOrderNo+1)%config.nCount : config.nOrderNo+1;
                      }
                      jsBanBtnRO(config,nImgNo);
                  } else {
                      config.nOrderNoBtn = parseInt(nImgNo);
                  }
                  
                  jsBanAction(config);
  
                  if (config.isActType != "none" && config.isActType != "page") {
                      config.objTimer = setTimeout( function(){jsBanTimer(config)}, config.nDelay);
                  }
              });
          }
      };
  
      /* ��ư �ѿ��� ó�� */
      function jsBanBtnRO (config,nSel) {
          if (config.isBtnType=="img") {
              $(config.objBtn+" img").each(function(i){
                  if (nSel==i) {
                      $(this).attr("src",$(this).attr("oversrc"));
                  } else {
                      $(this).attr("src",$(this).attr("outsrc"));
                  }
              });
              
          } else if (config.isBtnType=="li") {
              $(config.objBtn+" li").each(function(i){
                  if (nSel==i) {
                      $(this).attr("class",$(this).attr("overclass"));
                  } else {
                      $(this).attr("class",$(this).attr("outclass"));
                  }
              });
              
          }
      }
  
      /* IE üũ */
      function jsBrowserCheck() {
          appname = navigator.appName;
          useragent = navigator.userAgent;
      
          if(appname == "Microsoft Internet Explorer") appname = "IE";
          IE55 = (useragent.indexOf('MSIE 5.5')>0);  //5.5 ����
          IE6 = (useragent.indexOf('MSIE 6')>0);     //6.0 ����
          IE7 = (useragent.indexOf('MSIE 7')>0);     //7.0 ����
          IE8 = (useragent.indexOf('MSIE 8')>0);     //8.0 ����
      
          if(appname=="IE" && IE55 || IE6 || IE7 || IE8){
              return true
          }else{
              return false; 
          }
      }   
  });
  ///////////////////////////////////////////* �������� ��� END *///////////////////////////////////////////

  jQuery(document).ready( function() {

		$("#btn_lecture_totallist").click( function(event) {
			event.preventDefault();

			window.open($(this).attr("href"), 'totallist', 'scrollbars=yes,toolbar=no,resizable=yes,width=800,height=600,left=0,top=0' );
		});

    jQuery(".quickmenu_position li").each( function( index ) {
      jQuery(".quickmenu_position li:eq(" + index + ")").mouseover( function() {
          show_animate( jQuery( this ) );
        });
    });

    /*jQuery(".category_li_over").click(
      function() {
        document.location.href = jQuery(this).children("a").attr("href");
      }
    );
    jQuery(".category_li_out").click(
      function() {
        document.location.href = jQuery(this).children("a").attr("href");
      }
    );*/
    jQuery(".mainmenu").each( function( ) {
      //jQuery(".mainmenu:eq(" + 0 + ")").children("a").attr("href", jQuery("#top_link_url").val() );
    });

    jQuery(".menu").each( function( index ) {

      jQuery(".menu:eq(" + index + ")")
        .mouseover( function() {
          if( prev_menu != -1 )
            hide_menu( jQuery( ".mainmenu:eq(" + prev_menu + ")" ) );
          show_menu( jQuery( ".mainmenu:eq(" + index + ")" ) );

          prev_menu = index;
        })
        .focus( function() {
          if( prev_menu != -1 )
            hide_menu( jQuery( ".mainmenu:eq(" + prev_menu + ")" ) );
          show_menu( jQuery( ".mainmenu:eq(" + index + ")" ) );

          prev_menu = index;
        })
        .mouseout( function() {
          hide_menu( jQuery( ".mainmenu:eq(" + index + ")" ) );
        });
    });

    jQuery(".menu_last").each( function( index ) {

      jQuery(".menu_last:eq(" + index + ")")
        .mouseover( function() {
          show_menu( jQuery( ".mainmenu_last:eq(" + index + ")" ) );
        })
        .focus( function() {
          show_menu( jQuery( ".mainmenu_last:eq(" + index + ")" ) );
        })
        .mouseout( function() {
          hide_menu( jQuery( ".mainmenu_last:eq(" + index + ")" ) );
        });
    });

    jQuery(".gnbSub").each( function( index ) {
      jQuery(".gnbSub:eq(" + index + ")")
        .mouseover( function() {
          if( prev_menu != -1 )
            hide_menu( jQuery( ".mainmenu:eq(" + prev_menu + ")" ) );
          show_menu( jQuery( ".mainmenu:eq(" + index + ")" ) );

          prev_menu = index;
        })
        .focus( function() {
          if( prev_menu != -1 )
            hide_menu( jQuery( ".mainmenu:eq(" + prev_menu + ")" ) );
          show_menu( jQuery( ".mainmenu:eq(" + index + ")" ) );

          prev_menu = index;
        })
        .mouseout( function() {
          hide_menu( jQuery( ".mainmenu:eq(" + index + ")" ) );

          prev_menu = -1;
        });
    });

    jQuery(".gnbSub_last").each( function( index ) {

      jQuery(".gnbSub_last:eq(" + index + ")")
        .mouseover( function() {
          show_menu( jQuery( ".mainmenu_last:eq(" + index + ")" ) );
        })
        .focus( function() {
          show_menu( jQuery( ".mainmenu_last:eq(" + index + ")" ) );
        })
        .mouseout( function() {
          hide_menu( jQuery( ".mainmenu_last:eq(" + index + ")" ) );
        });
    });


    jQuery(".main_service").each( function( index ) {
      jQuery(".main_service:eq(" + index + ")").mouseover( function() {
          show_animate( jQuery( this ) );
        });
    });

    jQuery("#tnb_li_fontplus").click( function() {
      zoomIn();
    });

    jQuery("#tnb_li_fontminus").click( function() {
      zoomOut();
    });


    if( jQuery("#duplicate_ipid").css("height") != undefined ) {
    	jQuery("#duplicate_ipid").css("height", $(document).height() + "px");

	    jQuery(".btn_duplicate_ipid a").click( function() {
				document.location.reload();
			});
		}

    jQuery("#banner_prev").click( function() {
      jQuery(".footer_banner_li:eq(" + banner_start_num + ")")
        .animate( { "margin-left":"-=155px" }, 500 );

      if( parseInt( jQuery("#banner_total_count").val() ) - 2 > banner_start_num )
        banner_start_num++;

    });

    jQuery("#banner_next").click( function() {
      jQuery(".footer_banner_li:eq(" + ( banner_start_num - 1 ) + ")")
        .animate( { "margin-left":"+=155px" }, 500 );

      if( banner_start_num  > 0 )
        banner_start_num--;

    });

    banner_line_max_cnt = parseInt(jQuery('#banner_total_count').val()-5);
    check_max_cnt = parseInt(jQuery('#banner_total_count').val()-5);

    jQuery(".footer_banner_li").mouseover(function(){
      start_check = 'N';
    }).mouseout(function(){
      start_check = 'Y';
    });

    jQuery("#banner_prev").mouseover(function(){
      start_check = 'N';
    }).mouseout(function(){
      start_check = 'Y';
    });

    jQuery("#banner_next").mouseover(function(){
      start_check = 'N';
    }).mouseout(function(){
      start_check = 'Y';
    });

    timer = setTimeout("banner_slide()",2000);
    timer;

    if( $("#duplicate_ipid").css("height") != undefined ) {
    	$("#duplicate_ipid").css("height", $(document).height() + "px");

	    $(".btn_duplicate_ipid a").click( function() {
				document.location.reload();
			});
		}


  });

  function banner_slide()
  {
    if( start_check == 'Y' ) {
      if( banner_line_max_cnt-1 == check_cnt ){
        check_cnt = 0;
      }

      if( check_max_cnt-1 > 0 && check_cnt == 0 ){
        jQuery('#banner_prev').click();
        check_max_cnt -= 1;
      } else {
        jQuery('#banner_next').click();
        check_max_cnt += 1;
        check_cnt += 1;
      }
    }
    timer = setTimeout("banner_slide()",2000);
    timer;
  }
  
  
  function show_menu(obj)
  {
    obj.attr("class", obj.attr("class") + " hover" );
    if( obj.find("div").css("display") != "block" ) {
      obj.find("div").css("display", "block");
    }
  }

  function hide_menu(obj)
  {
    obj.attr("class", obj.attr("class").replace(/hover/gi,"") );
    obj.find("div").css("display", "none");
  }

  function show_menu_on(obj)
  {
    obj.attr("class", obj.attr("class") + " hover" );
  }

  function hide_menu_off(obj)
  {
    obj.attr("class", obj.attr("class").replace(/hover/gi,"") );
  }

  function show_animate(obj)
  {
    obj.animate( {opacity:0.3 }, 0 )
    .animate( {opacity:1 }, {duration:600, queue:false} );
  }

/*************************************************************************
/ Ŭ�� ũ�� ����                                                         /
*************************************************************************/
  if (typeof(COMMON_JS) == 'undefined') { // �ѹ��� ����
    var COMMON_JS = true;

    // ��Ű �Է�
    function set_cookie(name, value, expirehours, domain)
    {
      var today = new Date();

      today.setTime(today.getTime() + (60*60*1000*expirehours));
      document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
      if (domain) {
        document.cookie += "domain=" + domain + ";";
      }
    }

    // ��Ű ����
    function get_cookie(name)
    {
    var find_sw = false;
    var start, end;
    var i = 0;

      for (i=0; i<= document.cookie.length; i++) {
        start = i;
        end = start + name.length;

        if(document.cookie.substring(start, end) == name) {
          find_sw = true;
          break;
        }
      }

      if (find_sw == true) {
        start = end + 1;
        end = document.cookie.indexOf(";", start);

        if(end < start)
          end = document.cookie.length;

        return document.cookie.substring(start, end);
      }
      return "";
    }

    // ��Ű ����
    function delete_cookie(name)
    {
      var today = new Date();

      today.setTime(today.getTime() - 1);
      var value = get_cookie(name);

      if(value != "")
        document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
    }
  }

  function getFontSize()
  {
    var fontSize = parseInt(get_cookie("ck_fontsize")); // ��Ʈũ�� ����
    if (isNaN(fontSize)) { fontSize = 12; }
      return fontSize;
  }

  function scaleFont(val)
  {

    var fontSize = getFontSize();
    var fontSizeSave = fontSize;

    if (val > 0) {
      if (fontSize <= 24) {
        fontSize = fontSize + val;
      }
    } else {
      if (fontSize > 12) {
        fontSize = fontSize + val;
      }
    }

    if (fontSize != fontSizeSave) {
      drawFont(fontSize);
    }

    set_cookie("ck_fontsize", fontSize, 30);
  }

  function drawFont(fontSize)
  {
    if (!fontSize) {
      fontSize = getFontSize();
    }

/*
    var subject=document.getElementById("Side");
    var content=document.getElementById("footer_body");
    var comment=document.getElementById("container_wrap");
    var wr_subject=document.getElementById("Side");
    var wr_content=document.getElementById("footer_body");

    if (comment) {  // ���� �߰� �Ǿ������ �۾�ũ�� ��ȭ
      var commentDiv = comment.getElementsByTagName("div");
      var commentDiv2 = comment.getElementsByTagName("ul");
      var commentDiv3 = comment.getElementsByTagName("p");
      var commentDiv4 = comment.getElementsByTagName("select");
      var commentDiv5 = comment.getElementsByTagName("td");

      var lineHeight = fontSize+Math.round(1.1*fontSize);
    }
*/
    var commentDiv = jQuery("#wrapAll div");
    var commentDiv2 = jQuery("#wrapAll ul");
    var commentDiv3 = jQuery("#wrapAll p");
    var commentDiv4 = jQuery("#wrapAll select");
    var commentDiv5 = jQuery("#wrapAll th");
    var commentDiv6 = jQuery("#wrapAll td");

    var lineHeight = fontSize+Math.round(1.1*fontSize);

    fontSize = fontSize + "px";

  /*
    if (subject)
      subject.style.fontSize=fontSize;

    if (content)
      content.style.fontSize=fontSize;

    if (wr_subject)
      wr_subject.style.fontSize=fontSize;

    if (wr_content)
      wr_content.style.fontSize=fontSize;
*/
    if (commentDiv) {
      for (i=0;i<commentDiv.length;i++) {
        commentDiv[i].style.fontSize=fontSize;
      }
    }
    if (commentDiv2) {
      for (i=0;i<commentDiv2.length;i++) {
        commentDiv2[i].style.fontSize=fontSize;
      }
    }
    if (commentDiv3) {
      for (i=0;i<commentDiv3.length;i++) {
        commentDiv3[i].style.fontSize=fontSize;
      }
    }
    if (commentDiv4) {
      for (i=0;i<commentDiv4.length;i++) {
        commentDiv4[i].style.fontSize=fontSize;
      }
    }
    if (commentDiv5) {
      for (i=0;i<commentDiv5.length;i++) {
        commentDiv5[i].style.fontSize=fontSize;
      }
    }
    if (commentDiv6) {
      for (i=0;i<commentDiv6.length;i++) {
        commentDiv6[i].style.fontSize=fontSize;
      }
    }

  }

  delete_cookie("ck_fontsize");

    /*����,�ƿ�*/

 var nowZoom = 100; //
 var maxZoom = 200; // ?(5)
 var minZoom = 80; //

 function zoomIn() {
  if (nowZoom < maxZoom) {
   nowZoom += 10; //25%
  } else {
   return;
  }

  iframe = window.frames[0].document;
  iframe.body.style.zoom = nowZoom + "%";
  document.body.style.zoom = nowZoom + "%";
 }


 function zoomOut() {
  if (nowZoom> minZoom) {
   nowZoom -= 10; //25%
  } else {
   return;
  }

  iframe = window.frames[0].document;
  iframe.body.style.zoom = nowZoom + "%";
  document.body.style.zoom = nowZoom + "%";
 }
