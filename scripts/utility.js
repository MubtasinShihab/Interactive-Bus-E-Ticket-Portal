// hides a section using id
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// unhide a section using id
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// sets a bg-color on click or other events
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

// removes a bg-color on click or other events
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');
}



// changes text-color on click or other events
function setTextColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('text-[#03071280]');
    element.classList.add('text-white');
}

// changes text-color on click or other events
function removeTextColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('text-white');
    element.classList.add('text-[#03071280]');
}



// gets inner text / gets the value of text element
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// gets inner text number / gets the numerical value of text element
function getElementTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}

// set inner text / sets the value of text element
function setElementTextValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}