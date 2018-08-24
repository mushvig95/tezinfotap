// click on menu open button

$('.main_nav_menu').click(function(){

    $('.main_nav').css({
                                      'left':'250px',
                                      'filter': 'blur(4px)'
    });
   
    $('.main_content').css({
                                        'left':'250px',
                                        'filter': 'blur(4px)'
    });
    $('.side_menu').css({
                                'left':'0px',
                                'transition-delay':'0s'
                                
    });
    $('body').css({
                                'overflow':'hidden'
        
    });

});  
// click on menu close button
$('.side_menu-heading-close').click(function(){

    $('.main_nav').css({
                                      'left':'0px',
                                      'filter': 'blur(0px)'
    });
   
    $('.main_content').css({
                                        'left':'0px',
                                        'filter': 'blur(0px)'
    });
    $('.side_menu').css({
                                'left':'-100%',
                                'transition-delay':'.2s'
                                
    });
    $('body').css({
                                'overflow':'scroll'
        
    });

});  


// click on searh button
$('.main_nav_search').click(function(){

    $('.main_nav_search').css({
                                'display':'none'
    });
   
    $('.main_nav_close').css({
                                'display':'block'
    });

    $('.hide_on_search').css({
                                'display':'none'
    });
    $('.search_line').css({
                                'display':'block'
    });
    $('.search_line input').css({
                                'width':'90%'
    });
}); 


// click on search-close button
$('.main_nav_close').click(function(){
    $('.search_line input').css({
        'width':'1%'
});

    $('.main_nav_close').css({
                                'display':'none'
    });
   
    $('.main_nav_search').css({
                                'display':'block'
    });
    $('.search_line').css({
                                'display':'none'
    });
    $('.hide_on_search').css({
                                'display':'block'
    });
    
});  


//click on auto showrooms
$('.content3').click(function(){
    $('.content_clicked').css({
                                'right':'0'
    });
   $('.main_content').css({
        'height':'100vh'
});
$('.main_nav').css({
    'z-index':'0'
})
});

//click on back from showrooms
$('.clickback').click(function(){
    $('.content_clicked').css({
                                'right':'-100%'
    });
    $('.main_content').css({
        'height':'auto'
});
$('.main_nav').css({
    'z-index':'10'
});
});

//click on aston-martin 
$('.active_list').click(function(){
    $('.active_info').css({
                            'display':'block',
                            'opacity':'1'
    });
    $('.content_clicked').css({
                            'overflow':'hidden',
                            'filter':'blur(2px)'
    })
});

$('.aston_close').click(function(){
    $('.active_info').css({
                            'display':'none',
                            'opacity':'0'
    });
    $('.content_clicked').css({
                            'overflow':'scroll',
                            'filter':'blur(0px)'
})
});

// click on add add place from side menu

$('.placeadd').click(function(){
    $('.placeadd1').css({
                            'right':'0'
    });
    $('.side_menu').css({
                            'left':'-100%'
    });
    $('.main_content').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'-15',
                            'overflow':'hidden'
    });
    $('.main_nav').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'-15'
    });
});

// go back from add a place
$('.placeadd1_clickback').click(function(){
    $('.placeadd1').css({
                            'right':'-100%'
    });
    
    $('.main_content').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'0',
                            'overflow':'scroll'
    });
    $('.main_nav').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'1'
    });
    $('body').css({
        'overflow':'scroll'
});
});


// click oin feedback from side menu
$('.feedback').click(function(){
    $('.feedback1').css({
                            'right':'0'
    });

    $('.side_menu').css({
                            'left':'-100%'
    });
    $('.main_content').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'-15',
                            'overflow':'hidden'

                           
    });
    $('.main_nav').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'-15'
                            
                            
    });
});

// get back from feedback 
$('.feedback1_clickback').click(function(){
    $('.feedback1').css({
                            'right':'-100%'
    });
    
    $('.main_content').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'0',
                            'overflow':'scroll'
                            
    });
    $('.main_nav').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'1'
    });
    $('body').css({
        'overflow':'scroll'
});
});

// click favorits

$('.favorits').click(function(){
    $('.favorits1').css({
                            'right':'0'
    });

    $('.side_menu').css({
                            'left':'-100%'
    });
    $('.main_content').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'-15',
                            'overflow':'hidden'

                           
    });
    $('.main_nav').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'-15'
                            
                            
    });
});

// get back from favorits

$('.favorits1_clickback').click(function(){
    $('.favorits1').css({
                            'right':'-100%'
    });
    
    $('.main_content').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'0',
                            'overflow':'scroll'
                            
    });
    $('.main_nav').css({
                            'left':'0px',
                            'filter': 'blur(0px)',
                            'z-index':'1'
    });
    $('body').css({
        'overflow':'scroll'
});
});

var preloader = document.getElementById("preloader");
window.addEventListener('load',function(){
    $(".preloader").css({
                            'display':'none'
    });
    $(".main_content").css({
                            'height':'100%'
    });
})






