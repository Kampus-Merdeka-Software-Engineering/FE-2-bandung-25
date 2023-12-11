const url = "https://be-2-bandung-25-production.up.railway.app/feedback"; // Mengubah action form

function postFeedback(event) {
    event.preventDefault();

    const formData = {
        nama: document.getElementById("name").value,
        email: document.getElementById("email").value,
        feedback: document.getElementById("feedback").value,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert("Sukses mengirim feedback");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("feedback").value = "";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

document.getElementById("feedback").addEventListener("submit", (event) => postFeedback(event));