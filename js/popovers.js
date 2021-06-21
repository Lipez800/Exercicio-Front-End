	$('#example').popover({
    html : true,
    trigger : 'manual',
    content : function() {
        return '<div class="box">Para denunciar o post click aqui.</div>';
    }
});

$(document).on('mouseover', '#example', function(){
    $('#example').popover('show');
});

$(document).on('mouseleave', '#example', function(){
    $('#example').popover('hide');
});