console.log("DOM lab ready");







document.getElementById("title").textContent =
    "Lagoon Café · Open now";

document.querySelector(".tagline").textContent =
    "Fresh food by the lagoon since 2010";

const menuItems = document.querySelectorAll(".item");

menuItems.forEach(function(item, index) {
    item.textContent = (index + 1) + ". " + item.textContent;
});

document.getElementById("message").innerHTML =
    "<strong>Welcome!</strong> Today's special is crab curry.";

const nameBox = document.getElementById("name-input");

console.log("Initial name:", nameBox.value);

const specialItem = document.querySelector(".special");
specialItem.classList.add("highlight");

const firstNavLink = document.querySelector(".nav-link");
firstNavLink.classList.add("active");

nameBox.setAttribute("placeholder", "Type your first name");

const hoursHeading = document.getElementById("hours");
hoursHeading.style.color = "crimson";

menuItems.forEach(function(item) {
    console.log(
        item.textContent,
        item.classList.contains("special")
    );
});
