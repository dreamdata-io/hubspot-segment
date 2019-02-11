window.addEventListener('hsvalidatedsubmit', function (e) {
    var form = e.target;
    var email = form.elements["email"].value;

    if (email) {
        analytics.identify(email, {
            email: email
        });
    }

    // Track the event and include values from the form to our event props
    analytics.track('formSubmit');

}, false);