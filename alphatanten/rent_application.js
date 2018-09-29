/*******************************************************************************
  설  명 : 시설예약 일정현황 javascript
  작성자 : 인덕교
  작성일 : 2012-02-08(수)
  문서 CharSet : EUC-KR
*******************************************************************************/
var select_group_sport = 'Y';

/*******************************************************************************
  설  명 : 문서 로딩시 처리
*******************************************************************************/
  jQuery(document).ready(
    function() {
    	
      $(".btn_rent_login").each( function( index ) {
    	  $(this).click( function( event ) {
    		  var result = confirm( "※ 해당 시설을 예약하기 위해서는 로그인이 필요합니다.\n\n    로그인 페이지로 이동하시겠습니까?" );
    		  
    		  if( ! result ) {
    			  event.preventDefault();
    		  } 
    		  
    	  });
    	  
      });

      jQuery(".category_li_over").click(
        function() {
          document.location.href = jQuery(this).children("a").attr("href");
        }
      );
      jQuery(".category_li_out").click(
        function() {
          document.location.href = jQuery(this).children("a").attr("href");
        }
      );
      jQuery(".rent_btn_calendar_view").click(
        function() {
          document.location.href = jQuery(this).children("a").attr("href");
        }
      );
      jQuery(".rent_btn_calendar_view_on").click(
        function() {
          document.location.href = jQuery(this).children("a").attr("href");
        }
      );
      jQuery(".rent_btn_daylist_view").click(
        function() {
          document.location.href = jQuery(this).children("a").attr("href");
        }
      );
      jQuery(".rent_btn_daylist_view_on").click(
        function() {
          document.location.href = jQuery(this).children("a").attr("href");
        }
      );
      if( jQuery("#btn_reservation_able_check").val() == 'Y' ) {
        jQuery(".reserve_application_li").click(
          function() {
            document.location.href = jQuery(this).children("a").attr("href");
          }
        ).css("cursor", "pointer");
      }
      
     jQuery('#select_group_sport').click(function() {
        select_group_sport = jQuery('#select_group_sport').val();
        jQuery('.rent_daylist_table_sports').css("display", "block");
        jQuery('.rent_daylist_table_events').css("display", "none");
       
      });
      
      jQuery('#select_group_notsport').click(function() {  
        select_group_sport = jQuery('#select_group_notsport').val();  
        jQuery('.rent_daylist_table_events').css("display", "block");
        jQuery('.rent_daylist_table_sports').css("display", "none");
        
      });
      
      
      
        jQuery('.rent_daylist_table_sports').find("td a").each( function( index ) {
          
          jQuery(this).click(function() { 

            var reservation_cnt = jQuery(this).attr('href').length-1;
            var reservation_link = jQuery(this).attr('href').substr(0, reservation_cnt) + select_group_sport ;
            
            jQuery(this).attr('href',reservation_link);

          });
          
        });
         
        jQuery('.rent_daylist_table_events').find("td a").each( function( index ) {
          
          jQuery(this).click(function() { 

            var reservation_cnt = jQuery(this).attr('href').length-1;
            var reservation_link = jQuery(this).attr('href').substr(0, reservation_cnt) + select_group_sport ;
            
            jQuery(this).attr('href',reservation_link);

          });
          
        });
            
    }
  );
