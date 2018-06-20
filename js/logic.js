// Filler flair
console.log("So it begins..")

const handleClick = () => {
    // .then(console.log(res))
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    /* Create a new paragraph element, and set it's inner text to the
     const text */
    const newPara = document.createElement("p")
    newPara.innerText = text;
    /* Find the Lorum Id element and append the newPara to it */
    document.getElementById('lorum').append(newPara)
    console.log("We added another <p> lorum text </p> ")
}
// Add to the Document a onClick event listener, defined above!
document.addEventListener("click", handleClick);
