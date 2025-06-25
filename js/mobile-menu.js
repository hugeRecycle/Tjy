// 移动端菜单控制
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const menuBox = document.querySelector('.header-box .menu-box');
    
    if (!mobileMenuToggle || !menuBox) {
        return; // 如果元素不存在，直接返回
    }
    
    // 打开/关闭移动端菜单
    mobileMenuToggle.addEventListener('click', function() {
        if (menuBox.classList.contains('active')) {
            closeMobileMenu();
        } else {
            mobileMenuToggle.classList.add('active');
            menuBox.classList.add('active');
            document.body.classList.add('menu-open');
        }
    });
    
    // 关闭移动端菜单
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        menuBox.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // 点击菜单项后关闭菜单
    const menuLinks = menuBox.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // 点击菜单背景关闭菜单
    menuBox.addEventListener('click', function(e) {
        if (e.target === menuBox) {
            closeMobileMenu();
        }
    });
    
    // ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuBox.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}); 