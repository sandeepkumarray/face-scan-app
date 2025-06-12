
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');

    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      icon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
    };

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      setTheme('dark');
      toggle.checked = true;
    } else {
      setTheme('light');
      toggle.checked = false;
    }

    toggle?.addEventListener('change', () => {
      if (toggle.checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });

    function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('collapsed');
    }