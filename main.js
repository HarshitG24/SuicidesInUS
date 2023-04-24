const scroller = scrollama();

function handleStepEnter(response) {
  const { element, direction, index } = response;
  console.log(response);

  
  const paragraphs = document.querySelectorAll(".viz-text");
  
  // Deactivate all paragraphs
  paragraphs.forEach((paragraph) => {
    paragraph.classList.remove("active");
  });

  // Activate the current paragraph
  // const activeParagraph = element.querySelector(".viz-text");
  
  element.classList.add("active");

  // Move on to the next step after all paragraphs are scrolled through
  if (direction === "down" && element.nextElementSibling) {
    scroller.disable();
    element.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      scroller.enable();
      element.classList.remove("active");
      element.nextElementSibling.classList.add("active");
    }, 300);
  }
}

function init() {
  scroller
    .setup({
      step: ".viz-text",
      offset: 0.5,
      debug: false,
    })
    .onStepEnter(handleStepEnter);
}

init();