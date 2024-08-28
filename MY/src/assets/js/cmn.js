

// age
$(function() {
  var flg_check=localStorage.getItem('flg_check');
  var flg_age=localStorage.getItem('flg_age');
//  var flg_cookie=localStorage.getItem('flg_cookie');
  var flg_age_s=sessionStorage.getItem('flg_age');
//  var flg_cookie_s=sessionStorage.getItem('flg_cookie');

// 年齢確認終わってなかったらageにリダイレクト
  if((!flg_age&&!flg_age_s) && location.pathname.indexOf('age.html') == -1 ){
      console.log( location.pathname );
    $('body').hide();
    if ( location.pathname.indexOf('/restaurant') !== -1 ) {
        window.location.href = "../age.html";
    } else if (location.pathname.indexOf('/selected_sake') !== -1) {
        window.location.href = "../age.html";
    } else if (location.pathname.indexOf('/why_seafood_sake') !== -1) {
        window.location.href = "../age.html";
    }
    else {
        window.location.href = "age.html";
    }
  }

// cookie確認終わってなかったらcookieにリダイレクト
/*
  else if((flg_age||flg_age_s) && (!flg_cookie&&!flg_cookie_s) && location.pathname.indexOf('cookie.html') == -1 ){
    $('body').hide();
    window.location.href = "cookie.html";
  }
*/
  else if((flg_age||flg_age_s) && location.pathname.indexOf('age.html') != -1 ){
    $('body').hide();
    window.location.href = "index.html";
  }
/*
  else if((flg_cookie||flg_cookie_s) && location.pathname.indexOf('cookie.html') != -1 ){
    $('body').hide();
    window.location.href = "index.html";
  }
*/

  if(flg_check){
    $('.checkbox input:checkbox').prop('checked',true);
  }
  $('.checkbox input:checkbox').change(function(){
    if($(this).prop('checked')){
      localStorage.setItem('flg_check',1);
      flg_check=true;
    }
    else{
      localStorage.removeItem('flg_check');
      flg_check=false;
    }
  });

  $('.btn_age').click(function(){
    if(flg_check){
      localStorage.setItem('flg_age',1);
    }
    else{
      sessionStorage.setItem('flg_age',1);
      localStorage.removeItem('flg_age');
    }
  });

  $('.clear_age').click(function(){
      sessionStorage.removeItem('flg_age');
      localStorage.removeItem('flg_age');
  });

/*
  $('.btn_cookie').click(function(){
    if(flg_check){
      localStorage.setItem('flg_cookie',1);
    }
    else{
      sessionStorage.setItem('flg_cookie',1);
      localStorage.removeItem('flg_cookie');
    }
  });
*/
  $('.modal_close').click(function(){
    $('.modal').stop(true,false).fadeOut(300);
  });
  $('.modal_open').click(function(){
    $('.modal').stop(true,false).fadeIn(300);
  });
});
