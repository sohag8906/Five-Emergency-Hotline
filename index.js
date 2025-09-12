
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

copyButtons.forEach(btn => {
    
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

    
    if (btn.querySelector(".call-now")) {
        btn.addEventListener('click', () => {
            if (coins < 20) {
                alert("Not enough coins!");
                return;
            }

            coins -= 20;
            coinDisplay.textContent = coins;

            const card = btn.closest(".w-full");
            const hotlineName = card.querySelector("h1.text-xl").textContent;

            let hotlineNumber = card.querySelector("h1.text-2xl");
            if (!hotlineNumber) {
                hotlineNumber = card.querySelector("h1.text-xl.font-bold.my-5");
            }
            hotlineNumber = hotlineNumber.textContent;

            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            
            alert(`Calling ${hotlineName}\nNumber: ${hotlineNumber}\nTime: ${time}`);

            
            const div = document.createElement("div");
            div.className = "flex justify-between items-center py-2 border-b";
            div.innerHTML = `
                <div>
                    <p class="font-bold text-black">${hotlineName}</p>
                    <p class="text-black">${hotlineNumber}</p>
                </div>
                <div class="text-right text-black">${time}</div>
            `;
            callLog.prepend(div);
        });
    }
});

let coins = 100;
const coinDisplay = document.getElementById('coin-count');
coinDisplay.textContent = coins;


document.getElementById("clear-history").addEventListener("click", () => {
    callLog.innerHTML = "<h3>📞 Call History</h3>";
});


