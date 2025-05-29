document.addEventListener('DOMContentLoaded', function() {
    const voltarBtn = document.getElementById('voltarBtn');
    
    voltarBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
