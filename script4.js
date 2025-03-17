document.addEventListener("DOMContentLoaded", function () {
    const voteButtons = document.querySelectorAll(".vote");
    let hasVoted = false;
    let activePopup = null;
    
    voteButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (hasVoted) {
                alert("You have already voted. You cannot vote again.");
                return;
            }
            
            if (activePopup) {
                document.body.removeChild(activePopup);
            }
            
            const candidateName = this.parentElement.querySelector(".mladeets").innerText;
            
            // Create confirmation popup
            const confirmationBox = document.createElement("div");
            confirmationBox.classList.add("confirmation-box");
            confirmationBox.innerHTML = `
                <div class="confirmation-content">
                    <p>Do you want to vote for <strong>${candidateName}</strong>?</p>
                    <div class="confirmation-buttons">
                        <button class="confirm-vote">✅</button>
                        <button class="cancel-vote">❌</button>
                    </div>
                </div>
            `;
            document.body.appendChild(confirmationBox);
            activePopup = confirmationBox;
            
            // Handle confirmation
            confirmationBox.querySelector(".confirm-vote").addEventListener("click", function () {
                hasVoted = true;
                voteButtons.forEach(btn => btn.disabled = true);
                document.body.removeChild(confirmationBox);
                activePopup = null;
                
                const successBox = document.createElement("div");
                successBox.classList.add("success-box");
                successBox.innerHTML = `
                    <div class="success-content">
                        <p>✅ Your vote has been successfully cast for <strong>${candidateName}</strong>!</p>
                        <div class="success-button-container">
                            <button class="close-success">OK</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(successBox);
                activePopup = successBox;
                
                // Handle success close
                successBox.querySelector(".close-success").addEventListener("click", function () {
                    document.body.removeChild(successBox);
                    activePopup = null;
                });
            });
            
            // Handle cancellation
            confirmationBox.querySelector(".cancel-vote").addEventListener("click", function () {
                document.body.removeChild(confirmationBox);
                activePopup = null;
            });
        });
    });
});

// CSS styles for confirmation and success boxes
const style = document.createElement("style");
style.innerHTML = `
.confirmation-box, .success-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFCB8F;
    padding: 25px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
    border-radius: 12px;
    text-align: center;
    z-index: 1000;
    width: 300px;
}
.confirmation-content p, .success-content p {
    font-size: 18px;
    color: #5A3E2B;
}
.confirmation-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
}
.success-button-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
.confirmation-buttons button, .close-success {
    font-size: 50px;
    background: none;
    border: none;
    cursor: pointer;
}
.confirmation-buttons button:hover, .close-success:hover {
    transform: scale(1.2);
}
.close-success {
    font-size: 18px;
    padding: 8px 16px;
    background-color: #FFE5C7;
    border-radius: 8px;
    color: #5A3E2B;
    font-weight: bold;
}`;
document.head.appendChild(style);
