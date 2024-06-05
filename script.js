document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has already given consent
    if (!localStorage.getItem('cookieConsent')) {
        var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'));
        offcanvas.show();
    }

    document.getElementById('essentialCookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'essential');
        var offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasBottom'));
        offcanvas.hide();
    });

    document.getElementById('allowAllCookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'all');
        var offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasBottom'));
        offcanvas.hide();
    });
});
