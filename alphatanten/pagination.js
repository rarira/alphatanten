/*******************************************************************************
  ��  �� : ����¡ó�� javascript
  �ۼ��� : �ۿ���
  �ۼ��� : 2011-11-22(ȭ)
  ���� CharSet : EUC-KR
*******************************************************************************/

/*******************************************************************************
  ��  �� : ���� �ε��� ó��
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
