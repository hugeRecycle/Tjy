/**
 * 移动端汉堡菜单功能
 * 适用于所有页面的移动端导航菜单交互
 */
$(function(){
    // 移动端菜单交互
    $('.menu-toggle').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.menu-box').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
    
    // 点击菜单项关闭菜单
    $('.menu-box a').click(function() {
        $('.menu-toggle').removeClass('active');
        $('.menu-box').removeClass('active');
        $('body').removeClass('menu-open');
    });
    
    // 点击页面其他区域关闭菜单
    $(document).click(function(e) {
        if (!$(e.target).closest('.menu-box, .menu-toggle').length) {
            $('.menu-toggle').removeClass('active');
            $('.menu-box').removeClass('active');
            $('body').removeClass('menu-open');
        }
    });
    
    // 阻止菜单内部点击事件冒泡
    $('.menu-box').click(function(e) {
        e.stopPropagation();
    });
}); 