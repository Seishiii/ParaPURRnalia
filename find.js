const search = () =>{
  const searchbox =  document.getElementById("searchBar").value.toLowerCase();
  const storeItems = document.getElementById("yesss")
  const product = document.querySelectorAll(".products")
  const pname = storeItems.getElementsByTagName("p")

  for(var i=0; i < pname.length; i++){
    let match = product[i].getElementsByTagName('p')[0];

    if(match){
      let textValue = match.textContent || match.innerHTML

      if(textValue.toLowerCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}
(function(){
  $('html').addClass('js');
  
  var contactForm = {
    container: $('#contact'),
    config: {
      effect: 'slideToggle',
      speed: 200
    },
    
    init: function(config){
      $.extend(this.config, config);
      
      $('#c-btn').on('click', this.show);
    },
 
    show: function(){
      var cf = contactForm,
          container = cf.container,
          config = cf.config;
                    
 
      if(container.is(':hidden')){
        cf.close.call(container);
        container[config.effect]
        (config.speed);
      }
    },
 
    close: function(){
      var $this = $('#contact'); 
      
      if($this.find('span.close').length) return;
 
      $('<span class=close>-</span>')
        .prependTo(this)
        .on('click', function(){
        $this[contactForm.config.effect](contactForm.config.speed);
      })
    }
  };
 
contactForm.init({
  effect: 'fadeToggle',
  speed: 200
});
})();

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}