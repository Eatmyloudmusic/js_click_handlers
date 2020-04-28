const color_box = document.querySelector("#color_box");
// JS for the gray button
const gray_button = document.querySelector("#gray_button");
gray_button.addEventListener("click", function () {
    color_box.className = "gray";
})
// JS for the blue button
const blue_button = document.querySelector("#blue_button");
blue_button.addEventListener("click", function () {
    color_box.className = "blue";
})
/* TODO 1
*
* Add the JS for the pink button
*
*/
let count = 0;
const countspan = document.querySelector("#countspan");
const counter_button = document.querySelector("#counter_button");
counter_button.addEventListener("click", function () {
    /* TODO 2
    *
    * Fill in this function so that it increments
    * (adds one to) the variable named count,
    * then updates the inner text of "countspan"
    * to show the current value of "count".
    */
})
const even_or_odd_button = document.querySelector("#even_or_odd_button");
even_or_odd_button.addEventListener("click", function () {
    /* TODO 3
    *
    * Fill in this function so that it shows an
    * alert dialog stating whether the count variable
    * (from part 2, above) is even or odd.
    */
})



// // If you open that index.html file in your web browser, you will 
// see three numbered sections.

// // Clicking on the "blue" and "gray" buttons in section 1 will 
// change the color of the square. The other buttons on the page don't 
// do anything …yet.

// // You will need to add HTML, CSS, and JS to make these buttons 
// work.

// // Comments have been added to point you in the right direction.

// // Edwin_the_duck.jpg

// // Edwin the Duck Says: Even for small projects, its a good idea to 
// use best practices and separate your HTML, CSS, and JS files. This 
// will become even more important in larger projects.

