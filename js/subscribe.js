function setupContactForm() {
    const form = document.getElementById("subscribe");
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);


        try {
            const response = await fetch("https://be-2-bandung-25-production.up.railway.app/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formProps),
            });

            const data = await response.json();

        } catch (error) {
            console.error("Error:", error);
        }
    });
}

// Call the setupContactForm function
setupContactForm();
