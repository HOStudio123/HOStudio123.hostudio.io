document.querySelector('.click-effect-container').addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    const maxDimension = Math.max(this.clientWidth, this.clientHeight);
    ripple.style.width = ripple.style.height = maxDimension + 'px';

    const rect = this.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

    ripple.addEventListener('animationend', function() {
        ripple.remove();
    });
});
