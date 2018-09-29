/*******************************************************************************
  설  명 : 메인페이지 javascript
  작성자 : 송영석
  작성일 : 2012-05-25(금)
  문서 CharSet : EUC-KR
*******************************************************************************/
var popupzone_start = false;
var timer1;
var timer2;
var banner_line_max_cnt = 0;
var start_check = 'Y';
var current_num = 0;
var rotate_time = 5000;
var banner_time = 3000;
var main_start = 1;
var main_max = 0;
var main_banner = '';
var check_cnt = 0;
var check_max_cnt = 0;

/*******************************************************************************
  설  명 : 문서 로딩시 처리
*******************************************************************************/
  jQuery(document).ready(function() {
    setTimeout( "rotate_title()", rotate_time );
    //main_banner = setTimeout( "main_img_banner()", banner_time );

      // 처음 default 팝업 출력
      jQuery('.image_popupzone_0').css("display", "block");
      jQuery('#number_popupzone_0').addClass("popupzone_tab_over");
      timer = setTimeout("popupzone_slide()",3000);

      // 마우스오버시 번호에 css변경 및 해당 이미지 display 변경
      jQuery('.popupzone_tab_out').each(function(index){
        jQuery(this).mouseover(function(){
          clearTimeout(timer);
          clearTimeout(timer2);
        });
        jQuery(this).mouseout(function(){
          timer = setTimeout("popupzone_slide()",3000);
        });
        jQuery('#number_popupzone_'+index).mouseover(function(){

          jQuery('#number_popupzone_'+index).removeClass().addClass("popupzone_tab_over");
          jQuery('.image_popupzone_'+index).css("display", "block");
            for( var i=0; i < jQuery('#popuplist_count').val(); i++){
              if( i != index){
                jQuery('.image_popupzone_'+i).css("display", "none");
                jQuery('#number_popupzone_'+i).removeClass().addClass("popupzone_tab_out");
              }
            }

          }).mouseout(function(){
          jQuery('#number_popupzone_'+index).removeClass().addClass("popupzone_tab_out");
          jQuery(this).addClass("popupzone_tab_over");
        });
      });

      jQuery('.btn_img').each(function(index) {
        main_max += 1;
      });

      // 메인페이지 이미지
      jQuery('.btn_img').each(function(index) {
        jQuery('.main_img:eq(0)').css( {"display":"block"} );
        jQuery('.btn_img:eq(0)').css( {"-ms-filter":"alpha(opacity=70)"} );
        jQuery('.btn_img:eq(0)').css( {"filter":"alpha(opacity=70)"} );
        jQuery('.btn_img:eq(0)').css( {"opacity":"0.7"} );

        base_url1 = jQuery('#quick_lecture').attr("href");
        base_url2 = jQuery('#quick_lecture_guide').attr("href");
        base_url3 = jQuery('#quick_location').attr("href");

        jQuery(this).click(function() {
          jQuery(this).css( {"cursor":"pointer"} );

          for( j = 0; j < 3; j++ ) {
            $(".quickmenu_position" + ( j + 1 ) ).css("display", "none");
          }
          $(".quickmenu_position" + ( index + 1 ) ).css("display", "block");
          i = index;
          comcd_array = Array('SIMC01', 'SIMC02', 'SNWOMEN');

          jQuery('.main_img').each(function(index) {
            if( i == index ) {
              jQuery('.btn_img:eq('+index+')').animate( {opacity:0.5 }, 0 ).animate( {opacity:0.7 }, {duration:400, queue:false} );
              jQuery('.btn_img:eq('+index+')').css( {"-ms-filter":"alpha(opacity=70)"} );
              jQuery('.btn_img:eq('+index+')').css( {"filter":"alpha(opacity=70)"} );
              jQuery('.btn_img:eq('+index+')').css( {"opacity":"0.7"} );
              jQuery('.main_img:eq('+index+')').css( {"display":"block"} );
              /*
              if( comcd_array[index] == undefined ) {
                jQuery('#quick_lecture').attr("href", "javascript:alert('서비스 준비중입니다.')" );
                jQuery('#quick_lecture_guide').attr("href", "javascript:alert('서비스 준비중입니다.')" );
                jQuery('#quick_location').attr("href", "javascript:alert('서비스 준비중입니다.')" );
              } else {
                jQuery('#quick_lecture').attr("href", base_url1 + comcd_array[ index ] );
                jQuery('#quick_lecture_guide').attr("href", base_url2 + comcd_array[ index ] );
                jQuery('#quick_location').attr("href", base_url3 + '1/' + comcd_array[ index ] );
             		jQuery("#quick_location").attr("href", "/service/searchroad/" + comcd_array[index]).text("찾아오시는길").css("background","url(/images/btn/btn_quick_05.png) no-repeat 50% 50%");
                jQuery("#quick_mypage").text("신청현황").css("background","url(/images/btn/btn_quick_06.png) no-repeat 50% 50%");
              }
              */
            } else {
              jQuery('.btn_img:eq('+index+')').animate( {opacity:0.8 }, 0 ).animate( {opacity:1 }, {duration:400, queue:false} );
              jQuery('.btn_img:eq('+index+')').css( {"-ms-filter":"alpha(opacity=100)"} );
              jQuery('.btn_img:eq('+index+')').css( {"filter":"alpha(opacity=100)"} );
              jQuery('.btn_img:eq('+index+')').css( {"opacity":"1"} );
              jQuery('.main_img:eq('+index+')').css( {"display":"none"} );
            }
          });
        });
      });

//여기부터임

	  jQuery('#btn_main01').click(function(){
		//메인좌측버튼
		jQuery('#btn_main01').removeClass().addClass("btn_main01_on");
		jQuery('#btn_main02').removeClass().addClass("btn_main02");
		jQuery('#btn_main03').removeClass().addClass("btn_main03");
		
		//메인이미지
		jQuery('.main_img:eq(0)').css( {"display":"block"} );
		jQuery('.main_img:eq(1)').css( {"display":"none"} );
		jQuery('.main_img:eq(2)').css( {"display":"none"} );

		//퀵서비스
		$(".quickmenu_position1").css("display", "block");
		$(".quickmenu_position2").css("display", "none");
		$(".quickmenu_position3").css("display", "none");
	  });
	  jQuery('#btn_main02').click(function(){
		jQuery('#btn_main02').removeClass().addClass("btn_main02_on");
		jQuery('#btn_main01').removeClass().addClass("btn_main01");
		jQuery('#btn_main03').removeClass().addClass("btn_main03");

		jQuery('.main_img:eq(0)').css( {"display":"none"} );
		jQuery('.main_img:eq(1)').css( {"display":"block"} );
		jQuery('.main_img:eq(2)').css( {"display":"none"} );

		$(".quickmenu_position1").css("display", "none");
		$(".quickmenu_position2").css("display", "block");
		$(".quickmenu_position3").css("display", "none");
	  });
	  jQuery('#btn_main03').click(function(){
		jQuery('#btn_main03').removeClass().addClass("btn_main03_on");
		jQuery('#btn_main02').removeClass().addClass("btn_main02");
		jQuery('#btn_main01').removeClass().addClass("btn_main01");

		jQuery('.main_img:eq(0)').css( {"display":"none"} );
		jQuery('.main_img:eq(1)').css( {"display":"none"} );
		jQuery('.main_img:eq(2)').css( {"display":"block"} );

		$(".quickmenu_position1").css("display", "none");
		$(".quickmenu_position2").css("display", "none");
		$(".quickmenu_position3").css("display", "block");
	  });

//여기까지임

      jQuery(".top_main_img").mouseover(function(){
        start_check = 'N';
      }).mouseout(function(){
        start_check = 'Y';
      });

      main_banner = setTimeout( "main_img_banner()", banner_time );
      main_banner;

    });

  function main_img_banner()
  {
    if( start_check == 'Y' ){
      if( main_max == main_start ){
        main_start = 0;
      }
  
      jQuery('.btn_img:eq('+main_start+')').click();
      main_start += 1;
    }
    main_banner = setTimeout( "main_img_banner()", banner_time );
    main_banner;
  }

  function rotate_title()
  {
    jQuery(".mimg li:eq(" + current_num + ")")
      .animate( {opacity:0 }, {duration:1000, queue:true} )
      .removeClass("on")
      .addClass("off")
      .animate( {opacity:1 }, {duration:0, queue:true} );

    if( current_num == 2 ) current_num = 0;
    else current_num++;

    jQuery(".mimg li:eq(" + current_num + ")")
      .animate( {opacity:0 }, {duration:0, queue:true} )
      .removeClass("off")
      .addClass("on")
      .animate( {opacity:1 }, {duration:1000, queue:true} );

    setTimeout( "rotate_title()", rotate_time );
  }

  function popupzone_slide()
  {

    jQuery('#banner_sub_li_start').click(function(){
      start_check = 'Y';
    });
    jQuery('#banner_sub_li_pause').click(function(){
      start_check = 'N';
    });

    if( start_check == 'Y' ) {
      if( banner_line_max_cnt-1 == check_cnt ){
        check_cnt = 0;
      }

      if( check_max_cnt-1 > 0 && check_cnt == 0 ){
        jQuery('#banner_sub_li_down').click();
        check_max_cnt -= 1;
      } else {
        jQuery('#banner_sub_li_up').click();
        check_max_cnt += 1;
        check_cnt += 1;
      }
    }
    timer2 = setTimeout("popupzone_slide()",3000);
    var num = -1;
    for( var i=0; i < jQuery('#popuplist_count').val(); i++){
      if( jQuery(".image_popupzone_" + i ).css("display") == 'block' ) {
        num = i + 1;
     }
    }

    if( num > -1 ) {
      if( num >= jQuery('#popuplist_count').val() ) num = 0;
      for( var i=0; i < jQuery('#popuplist_count').val(); i++){
        if( num == i ) {
          jQuery(".image_popupzone_" + i ).css("display", "block" );
          jQuery('#number_popupzone_' + i ).removeClass().addClass("popupzone_tab_over");
        } else {
          jQuery(".image_popupzone_" + i ).css("display", "none" );
          jQuery('#number_popupzone_' + i ).removeClass().addClass("popupzone_tab_out");
        }
      }
    }

      timer2;

  }

  function login_ajax()
  {
    var now = new Date();
    var nowTime = now.getFullYear() + '' + (now.getMonth()+1) + '' + now.getDate() + '' + now.getHours() + '' + now.getMinutes() + '' + now.getSeconds();
    var url = jQuery("#URL").val() + '/member/process';

    jQuery.ajaxSetup({cache:false});
    //jQuery.get( jQuery('#URL').val() + "/main/index/" + nowTime, function(data) {} );

    if( jQuery(":input:checkbox")[0].checked )
      checked = '1';
    else
      checked = '';

    jQuery.post( url,
                {
                  "process_check":"LOGIN",
                  "ajax":"1",
                  "memid":jQuery('#member_id').val(),
                  "mempw":jQuery('#member_pw').val(),
                  "saveid":checked
                },
                function( data ) {
                  jQuery("#ajax_ret").val( data );
                }
    )
    .success( function() {
      if( jQuery('#ajax_ret').val() == 'ok' ) {
        document.location.href = jQuery('#URL').val();
      } else if ( jQuery('#ajax_ret').val() == 'not' ) {
        alert("본인인증이 되지 않은 회원입니다.\n\n깨끗하고 안전한 인터넷 서비스 이용을 위해 본인인증 작업을 진행해야만 서비스를 이용하실 수 있습니다.");
        document.location.href = jQuery('#form_member_login').attr("URL") + '/member/authchange';
      } else {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.\n\n확인 후 다시 시도해 주십시오.');
        jQuery("#member_pw").val('');
        jQuery("#member_id").val('');
        document.getElementById('member_id').focus();
      }
    })
    .error( function() {
      alert('서버와의 통신이 원할하지 않습니다.\n\n잠시후에 다시 시도해 주시기 바랍니다.');
    })
  }

