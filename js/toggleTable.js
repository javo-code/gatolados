document.addEventListener('DOMContentLoaded', function () {
    const toggleTablesButton = document.getElementById('toggleTablesButton');
    const table1 = document.querySelector('.table1');
    const table2 = document.querySelector('.table2');

    toggleTablesButton.addEventListener('click', function () {
        if (table1.style.display === 'none') {
            table1.style.display = 'table';
            table2.style.display = 'none';
            toggleTablesButton.textContent = 'Ver Resumido';
            localStorage.setItem('visibleTable', 'table1');
        } else {
            table1.style.display = 'none';
            table2.style.display = 'table';
            toggleTablesButton.textContent = 'Ver más Detalles';
            localStorage.setItem('visibleTable', 'table2');
        }
    });

    const visibleTable = localStorage.getItem('visibleTable');
    if (visibleTable === 'table1') {
        table1.style.display = 'table';
        table2.style.display = 'none';
        toggleTablesButton.textContent = 'Resumido';
    } else {
        table1.style.display = 'none';
        table2.style.display = 'table';
        toggleTablesButton.textContent = 'Mostrar dDetalles';
    }
});
