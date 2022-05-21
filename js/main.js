/**
 * Gets the correct height for the accordion content
 * @param {HTMLelement} accordion The accordion
 * @returns {Number} height The accordion content's height in px value
 */

const getContentHeight = (accordion) => {
    const accordionInner = accordion.querySelector(".accordion_inner");
    //Get the height
    if (accordion.classList.contains("is-open")) return 0;
    return accordionInner.getBoundingClientRect().height;
};

/**
 * Updates the accordion
 * @param {HTMLelement} accordion The accordion
 * @param {Number} height px value of height to update
 */

const updateAccordion = (accordion, height) => {
    const accordionContent = accordion.querySelector(".accordion_content");

    accordion.classList.toggle("is-open");
    accordionContent.style.height = `${height}px`;
};

//Where staff happens
const accordionContainer = document.querySelector(".accordion-container");

accordionContainer.addEventListener("click", (e) => {
    const accordionHeader = e.target.closest(".accordion_header");
    if (!accordionHeader) return;

    const accordion = accordionHeader.parentElement;
    const height = getContentHeight(accordion);

    //Update the accordion
    updateAccordion(accordion, height);
});
