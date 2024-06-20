document.getElementById('all-pages').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.page-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});