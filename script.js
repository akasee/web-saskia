
const valentines = document.querySelector('.valentines');

valentines.addEventListener('click', function() {
    const surat = this.querySelector('.card');
    
    surat.classList.toggle('moving-up');
});
