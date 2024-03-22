// content.js

// Create a button element
const button = document.createElement("button");
button.innerText = "SUMit"; // Button text

// Style the button
button.style.position = "fixed";
button.style.top = "10px"; // Adjust top position as needed
button.style.right = "10px"; // Adjust right position as needed
button.style.zIndex = "9999"; // Ensure the button appears above other elements
button.style.padding = "10px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.background = "#007bff"; // Button background color
button.style.color = "#fff"; // Button text color
button.style.cursor = "pointer";

// Append button to the body
document.body.appendChild(button);

// Function to extract text from the page
function extractText() {
  // Get all the text nodes within the body
  const textNodes = document.body.querySelectorAll("*");

  let text = "";

  // Iterate through each text node and concatenate the text content
  textNodes.forEach((node) => {
    if (
      node.nodeType === Node.TEXT_NODE &&
      node.parentNode.tagName !== "SCRIPT"
    ) {
      text += node.textContent + " ";
    }
  });

  return text.trim(); // Trim any leading or trailing whitespace
}

// Add click event listener to the button
button.addEventListener("click", () => {
  const articleText = extractText(); // Get the text of the article
  console.log(articleText); // Log the article text to the console
});
