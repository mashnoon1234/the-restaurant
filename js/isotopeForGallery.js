$('.wallpaper-item').isotope({ itemSelector : '.item', layoutModel : 'fitRows'
});
$('.wallpaper-menu ul li').click(function () { $('.wallpaper-menu ul li').removeAttr('id'); $(this).attr('id', 'ectiv');
var selector = $(this).attr('data-filter'); $('.wallpaper-item').isotope({
filter :selector });
});