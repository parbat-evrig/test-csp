<script>
(function () {

    const inputs = document.querySelectorAll('input');

    inputs.forEach(function (input) {

        input.addEventListener('keyup', function () {

            console.log('Keyup detected on:', input.name || input.id);

            // Demo request (safe payload)
            fetch('https://api.restful-api.dev/collections/products/objects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    field: input.name || input.id || 'unknown',
                    event: 'keyup'
                })
            }).catch(function (e) {
                console.log('Blocked by CSP', e);
            });

        });

    });

})();
</script>