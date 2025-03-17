document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitBtn");
    const popupModal = document.getElementById("popupModal");
    const popupMessage = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");

    // Ensure modal is hidden on load
    popupModal.style.display = "none";

    function showModal(message, shouldRedirect = false) {
        popupMessage.innerText = message;
        popupModal.style.display = "flex";

        // If redirect is required, change behavior of closePopup button
        if (shouldRedirect) {
            closePopup.onclick = function () {
                window.location.href = "index1.html"; // Redirect after closing modal
            };
        } else {
            closePopup.onclick = function () {
                popupModal.style.display = "none"; // Just close modal
            };
        }
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        const aadhaar = document.getElementById("aadhaar").value.trim();
        const pan = document.getElementById("pan").value.trim();

        if (aadhaar === "" || pan === "") {
            showModal("Please fill in all fields.", false); // No redirect
        } else {
            showModal("Voter credentials submitted successfully!", true);
        }
    });
});
