function setupContactForm() {
    const form = document.getElementById("feedback-form");
    console.log(form, "ini form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);
        console.log(formProps, "ini form props");

        try {
            const response = await fetch("https://be-2-bandung-25-production.up.railway.app/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formProps),
            });

            const data = await response.json();
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    });
}

// Call the setupContactForm function
setupContactForm();
