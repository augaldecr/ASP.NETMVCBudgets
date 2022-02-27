function inicializeTransactionsForm(urlGetCategories) {
    $("#TipoOperacionId").change(async function () {
        const selectedValue = $(this).val();

        const response = await fetch(urlGetCategories, {
            method: 'POST',
            body: selectedValue,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        const options =
            json.map(category => `<option value=${category.value}>${category.text}</option>`);
        $("#CategoriaId").html(options);
    })
}