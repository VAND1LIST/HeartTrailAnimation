// Select the <body> element
const bodyEl = document.querySelector('body');

// Add an event listener for mouse movement
bodyEl.addEventListener("mousemove", (event) => {  // <-- 'event' needed here
  // Get the mouse position relative to the body
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  // Create a new <span> element for the heart
  const spanEl = document.createElement("span");

  // Position the span at the mouse coordinates
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  // Give the heart a random size between 0px and 100px
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // Add the span to the body so it becomes visible
  bodyEl.appendChild(spanEl);

  // Remove the span after 3 seconds to avoid DOM clutter
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

