// Code goes here
(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$(document).ready(() => {
  
  console.log('jqury loaded');
  
  $('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeFormJSON();
    
    console.log(data);
    
    let template = new Template(data);
    let signature = template.signature;
    
    document.write(signature);
    
    console.log(signature);

  });
})


