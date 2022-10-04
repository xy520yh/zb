

  // 6. Text animated counter 
  $('.counter-block').appear(function () {
    var $endNum = parseInt(jQuery(this).find('.count-number').text());
    jQuery(this).find('.count-number').countTo({
      from: 0,
      to: $endNum,
      speed: 600,
      refreshInterval: 60,
      formatter: function (value, options) {
        value = value.toFixed(options.decimals);
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return value;
      }
    });
  }, {
    accX: 0,
    accY: 0
  });
 