/*******************************************************************************
  설  명 : 페이징처리 javascript
  작성자 : 송영석
  작성일 : 2011-11-22(화)
  문서 CharSet : EUC-KR
*******************************************************************************/

/*******************************************************************************
  설  명 : 문서 로딩시 처리
*******************************************************************************/
  jQuery(document).ready(

    function() {

      jQuery(".pagination li").each(
        function( index ) {
          jQuery(this)
          .click(
            function() {
//              if( jQuery(this).children('a').attr('href').length > 0 )
              if( jQuery(this).children().length > 0 )
                document.location.href = jQuery(this).children('a').attr('href');
            }
          )
          .mouseover(
            function() {
//              jQuery(this).css('cursor', 'pointer');
            }
          );
        }
      );

  } );
