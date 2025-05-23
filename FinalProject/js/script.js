

document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', function () {
    const column = this.parentElement;
    column.classList.toggle('active');


    document.querySelectorAll('.dropdown-column').forEach(other => {
      if (other !== column) {
        other.classList.remove('active');
      }
    });
  });
});


document.addEventListener('click', function (e) {
  const isDropdown = e.target.closest('.dropdown-column');
  if (!isDropdown) {
    document.querySelectorAll('.dropdown-column').forEach(col => {
      col.classList.remove('active');
    });
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });

  // Optional: Hide menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove('show');
    }
  });
}