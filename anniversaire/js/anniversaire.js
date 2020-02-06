$( document ).ready(function() {
    console.log('test')
    
    var global = $('#global')
    var p1= $('#un')
    var p2= $('#deux')
    var p3= $('#trois')
    var p4= $('#quatre')

    console.log(p1)
    p1.on('click', function(){
        p2.show()
    })

    
    p2.on('click', function(){
        p3.show()
    })
    
    p3.on('click', function(){
        p4.show()
    })

    p4.on('click', function(){
        player = document.getElementById('player_audio');
        player.play();
        $('body').css('background-color', 'blue')

        $('p').hide('slow');
        
    })
});