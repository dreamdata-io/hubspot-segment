window.addEventListener('hsvalidatedsubmit', function (e) {
    var form = e.target;
    var email = form.elements["email"].value;

    if (email) {
        analytics.identify(email, {
            email: email
        });
    }
    analytics.track('formSubmit');
}, false);