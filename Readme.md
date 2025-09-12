JavaScript DOM & Events – Quick Notes
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
 getElementById("idName")

নির্দিষ্ট id দিয়ে একটি element খুঁজে বের করে।

সবসময় ইউনিক id হওয়া উচিত।

সবচেয়ে দ্রুত কাজ করে।

const div = document.getElementById("myDiv");

🔹 getElementsByClassName("className")

নির্দিষ্ট ক্লাসের সব element খুঁজে বের করে।

HTMLCollection রিটার্ন করে (array-এর মতো, কিন্তু পুরোপুরি array না)।

Index দিয়ে access করতে হয়।

const cards = document.getElementsByClassName("card");
console.log(cards[0]); // প্রথম card

🔹 querySelector("selector")

CSS সিলেক্টরের মতো কাজ করে।

প্রথম যে element মিলে যাবে সেটি রিটার্ন করে।

const firstCard = document.querySelector(".card"); // প্রথম .card

🔹 querySelectorAll("selector")

CSS সিলেক্টরের সাথে মিলে যাওয়া সব element রিটার্ন করে।

NodeList দেয়, যেটা সরাসরি forEach দিয়ে লুপ করা যায়।

const allCards = document.querySelectorAll(".card");
allCards.forEach(card => console.log(card));

2. How do you create and insert a new element into the DOM?

createElement() দিয়ে নতুন element তৈরি করা হয়।
 textContent / setAttribute() দিয়ে কনটেন্ট বা অ্যাট্রিবিউট বসানো হয়।
 appendChild() / append() / prepend() / insertBefore() দিয়ে DOM-এ যোগ করা হয়।

const div = document.createElement("div"); 
div.textContent = "Hello World!";
document.body.appendChild(div);

3. What is Event Bubbling and how does it work?

Event Bubbling হলো JavaScript-এ event propagation-এর একটি ধাপ।
কোনো child element এ ইভেন্ট ঘটলে সেটি প্রথমে child → parent → grandparent → document পর্যন্ত উপরে উঠতে থাকে।

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
});


উপরের কোডে child এ ক্লিক করলে প্রথমে Child Clicked, তারপর Parent Clicked লগ হবে।

4. What is Event Delegation in JavaScript? Why is it useful?

 Event Delegation হলো এমন একটি টেকনিক যেখানে parent element-এ একটি event listener বসানো হয়, আর সেটি event bubbling-এর মাধ্যমে child element-গুলোর event handle করতে পারে।

এটা তখন কাজে লাগে যখন অনেকগুলো child element-এর জন্য আলাদা আলাদা event listener বসাতে চাই না।

<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

document.getElementById("menu").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});


 শুধু ul#menu তে listener বসালেই সব li child element-এর event কাজ করবে।

5. Difference between preventDefault() and stopPropagation()
 preventDefault()

 কোনো element-এর ডিফল্ট action বন্ধ করে।

<a> লিঙ্কে ক্লিক করলে নতুন পেজে যাওয়া বন্ধ করা যায়।

<form> সাবমিট করলে reload হওয়া বন্ধ করা যায়।

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link clicked, but default action stopped!");
});

🔹 stopPropagation()

 Event bubbling বন্ধ করে দেয়। অর্থাৎ, ইভেন্ট উপরে parent element এ আর যাবে না।

document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Child Clicked, but won’t bubble up!");
});
