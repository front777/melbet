
 



  $(document).ready(function() {
      $('#search-inp').on('change', function() {
        var value = $(this).val();
      
        sendDataToGoogleSheet(value);
      });
    });

  function sendDataToGoogleSheet(value) {
      var url
        ='https://script.google.com/macros/s/AKfycbz7Q2dq7mFZoEvwS7WX75HZ-G_gfUmDlYRIFc2Q1oHf-Sg0wA_74gfnrzlSEY5bkvEVIg/exec';
      var data = {
        query: value
      };

      $.ajax({
        url: url,
        data: data,
        type: 'GET',
        dataType: 'jsonp',
        success: function(response) {
          console.log('Значение успешно добавлено в таблицу.');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error('Ошибка при добавлении значения в таблицу:', errorThrown);
        }
      });
    }

      
