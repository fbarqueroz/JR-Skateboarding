// Sidebar Toggle
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Acordeon
const acordeon = document.querySelectorAll('.acordeon-button');

for (let i = 0; i < acordeon.length; i++){
    acordeon[i].addEventListener('click', (event)=>{
        event.preventDefault();
        const elemento = event.currentTarget;
        let info = elemento.nextElementSibling;
        if (info.style.display == "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    })
}
