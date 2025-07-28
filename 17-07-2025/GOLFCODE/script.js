document.addEventListener('DOMContentLoaded', function () {
      const navbarToggler = document.getElementById('navbarToggler');
      const navMenu = document.getElementById('navMenu');
      const dropdownToggle = document.getElementById('dropdownToggle');
      const dropdownMenu = document.getElementById('dropdownMenu');

      // Toggle mobile menu
      if (navbarToggler && navMenu) {
        navbarToggler.addEventListener('click', function () {
          navMenu.classList.toggle('active');
        });
      }

      // Toggle dropdown menu
      if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent link from navigating
          dropdownMenu.classList.toggle('active');
        });
      }

      // Close dropdown when clicking outside of it
      document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            if (dropdownMenu.classList.contains('active')) {
                dropdownMenu.classList.remove('active');
            }
        }
        
        // Close mobile nav when a link inside it is clicked
        if (navMenu.classList.contains('active') && !navbarToggler.contains(event.target)) {
             if (event.target.classList.contains('nav-link') || event.target.classList.contains('dropdown-item')) {
                navMenu.classList.remove('active');
             }
        }
      });
    });