. Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 1. getElementById("idName")

নির্দিষ্ট id দিয়ে একটি element খুঁজে বের করে।

দ্রুত কাজ করে, কারণ id সবসময় ইউনিক হওয়া উচিত।

const div = document.getElementById("myDiv");

//getElementsByClassName("className")

নির্দিষ্ট ক্লাসের সব element খুঁজে বের করে।

এটি একটি HTMLCollection রিটার্ন করে (array-এর মতো, কিন্তু পুরোপুরি array না)।

যদি অনেকগুলো element থাকে, index দিয়ে access করতে হয়।
const cards = document.getElementsByClassName("card");
console.log(cards[0]); // প্রথম card


// querySelector("selector")

CSS সিলেক্টরের মতো কাজ করে।

প্রথম যে element মিলে যাবে সেটি রিটার্ন করে।

const firstCard = document.querySelector(".card"); // প্রথম .card

// querySelectorAll("selector")

CSS সিলেক্টরের সাথে মিলে যাওয়া সব element রিটার্ন করে।

এটি একটি NodeList দেয়, যেটা সরাসরি forEach দিয়ে লুপ করা যায়।

const allCards = document.querySelectorAll(".card");
allCards.forEach(card => console.log(card));



2.How do you create and insert a new element into the DOM?
Ans: createElement() দিয়ে নতুন element বানাতে হয়।

textContent / setAttribute দিয়ে কনটেন্ট বা অ্যাট্রিবিউট দিতে হয়।

appendChild() / append() / prepend() / insertBefore() দিয়ে DOM এ বসাতে হয়।

Example:
const div = document.createElement("div"); 
div.textContent = "Hello World!";
document.body.appendChild(div);

3. What is Event Bubbling and how does it work?

Ans:Event Bubbling হলো JavaScript এ ইভেন্ট propagation-এর একটা ধাপ, যেখানে কোনো child element এ ইভেন্ট ঘটলে সেটা প্রথমে সেই element এ কাজ করে, তারপর ধাপে ধাপে তার parent → grandparent হয়ে document পর্যন্ত উপরে উঠতে থাকে।
<div id="parent">
  <button id="child">Click Me</button>
</div>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Bubbling হলো JavaScript এ ইভেন্ট propagation-এর একটা ধাপ, যেখানে কোনো child element এ ইভেন্ট ঘটলে সেটা প্রথমে সেই element এ কাজ করে, তারপর ধাপে ধাপে তার parent → grandparent হয়ে document পর্যন্ত উপরে উঠতে থাকে।

// কিভাবে কাজ করে?

ধরো নিচের HTML আছে:

<div id="parent">
  <button id="child">Click Me</button>
</div>


এখন JS এ event listener বসাই:

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
});

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault()

কোনো element এর ডিফল্ট action বন্ধ করে।

যেমন:

<a> লিঙ্কে ক্লিক করলে সাধারণত অন্য পেজে নিয়ে যায় → সেটা বন্ধ করা যায়।

<form> সাবমিট করলে পেজ reload হয় → সেটা বন্ধ করা যায়।

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault(); // লিঙ্ক আর নতুন পেজে যাবে না
  console.log("Link clicked, but default action stopped!");
});
