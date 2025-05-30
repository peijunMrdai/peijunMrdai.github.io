// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 终端模拟器效果
function animateTerminal() {
    const terminalBody = document.querySelector('.terminal-body');
    if (!terminalBody) return;
    
    const terminalCommands = [
        { command: 'cat about_me.txt', output: '嵌入式系统专家 | 10年经验 | 物联网架构师' },
        { command: 'skills --list', output: 'C/C++ | RTOS | ARM | 低功耗设计 | 物联网协议' },
        { command: 'contact --email', output: 'peijun.dai@example.com' }
    ];
    
    let html = '';
    let delay = 0;
    
    terminalCommands.forEach((item) => {
        html += `
            <div style="animation-delay: ${delay}s" class="terminal-line">
                <span class="terminal-prompt">$ </span>
                <span class="terminal-command">${item.command}</span>
            </div>
            <div style="animation-delay: ${delay + 0.5}s" class="terminal-line terminal-output">
                ${item.output}
            </div>
        `;
        delay += 1.5;
    });
    
    terminalBody.innerHTML = html;
}

// 页面加载后执行
window.addEventListener('load', animateTerminal);