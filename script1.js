document.addEventListener("DOMContentLoaded", function () {
    const verifyButton = document.getElementById("verifyBtn");
    const popupModal = document.getElementById("popupModal");
    const popupMessage = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");

    function showModal(message) {
        popupMessage.innerText = message;
        popupModal.style.display = "flex";
    }

    closePopup.addEventListener("click", function () {
        popupModal.style.display = "none";
    });

    verifyButton.addEventListener("click", function () {
        showModal("✅ Fingerprint has matched. The Voter is above 18 years of age.");
    });
});
