let coins = 100; 
const coinDisplay = document.getElementById('coin-count');
coinDisplay.textContent = coins;

let heartCount = 0;
const heartDisplay = document.getElementById('heart-count');
const cardButtons = document.querySelectorAll('.card-count');

cardButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        heartCount++;
        heartDisplay.textContent = heartCount;
    });
});

let copyCount = 0;
const copyDisplay = document.getElementById('copy-click');
const copyButtons = document.querySelectorAll('button');
const callLog = document.getElementById("call-log");

// শুরুতেই টাইটেল থাকবে
callLog.innerHTML = "<h3 class='font-bold mb-2'>📞 Call History</h3>";

copyButtons.forEach(btn => {
    // Copy button
    if (btn.querySelector(".copy-count")) {
        btn.addEventListener('click', () => {
            copyCount++;
            copyDisplay.textContent = copyCount;

            const card = btn.closest('.w-full');
            let hotlineNumber = card.querySelector("h1.text-2xl");
            if (!hotlineNumber) {
                hotlineNumber = card.querySelector("h1.text-xl.font-bold.my-5");
            }
            hotlineNumber = hotlineNumber.textContent;
            navigator.clipboard.writeText(hotlineNumber);
        });
    }

    // Call button
    if (btn.querySelector(".call-now")) {
        btn.addEventListener('click', () => {
            if (coins < 20) {
                alert("Not enough coins!");
                return;
            }

            coins -= 20;
            coinDisplay.textContent = coins;

            const card = btn.closest(".w-full");
            let hotlineName = card.querySelector("h1.text-xl");
            if (!hotlineName) {
                hotlineName = card.querySelector("h1.text-2xl");
            }
            hotlineName = hotlineName.textContent;

            let hotlineNumber = card.querySelector("h1.text-2xl");
            if (!hotlineNumber) {
                hotlineNumber = card.querySelector("h1.text-xl.font-bold.my-5");
            }
            hotlineNumber = hotlineNumber.textContent;

            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            alert(`Calling ${hotlineName}\nNumber: ${hotlineNumber}\nTime: ${time}`);

            // কল হিস্টোরি আইটেম বানানো
            const div = document.createElement("div");
            div.className = "flex justify-between items-center py-2 border-b";
            div.innerHTML = `
                <div>
                    <p class="font-bold text-black">${hotlineName}</p>
                    <p class="text-black">${hotlineNumber}</p>
                </div>
                <div class="text-right text-black">${time}</div>
            `;
            callLog.appendChild(div); // নতুন এন্ট্রি শেষে যুক্ত হবে
        });
    }
});

// Clear history
document.getElementById("clear-history").addEventListener("click", () => {
    callLog.innerHTML = "<h3 class='font-bold mb-2'>📞 Call History</h3>";
});
