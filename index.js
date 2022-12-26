
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
   if (emojiInput.value) {
      myEmojis.push(emojiInput.value)
      emojiInput.value = ""
      renderEmojis()
   }
})

unshiftBtn.addEventListener("click", function(){
   if (emojiInput.value) {
      myEmojis.unshift(emojiInput.value)
      emojiInput.value = ""
      renderEmojis()
   }
})

popBtn.addEventListener("click", function(){
   myEmojis.pop()
   renderEmojis()
})


shiftBtn.addEventListener("click", function(){
   myEmojis.shift()
   renderEmojis()
})











// // 1. Loop through the myEmojis array and log each of them out to the console

// const myEmojis = ["👨‍💻", "⛷", "🍲"]

// //2. Grab the emojiContainer div and store it in a variable. Log it to the console. This will display our emojis
// const emojiContainer = document.getElementById("emoji-container")
// const emojiInput = document.getElementById("emoji-input") //grab the element from the input field
// //4.Hook an event listener up with the button, and log out the input field's value when it's clicked
// const pushBtn = document.getElementById("push-btn")
// //7. Make the unshift button work just as the push button (but with unshifting instead of pushing)
// const unshiftBtn = document.getElementById("unshift-btn")

// //3. Render the updated myEmojis array in the mini-browser.
// function renderEmojis() {
//    emojiContainer.innerHTML = "" //clear away old version of the array before it renders the updated one targeting emoji container
//    for (let i = 0; i < myEmojis.length; i++) {
//       //3. Render the emojis as <span> tags in the emojisContainer <div>
//       // Hints: Use either createElement(), textContent, and append()
//       // or innerHTML and a template string
//       const emoji = document.createElementById('span')
//       emoji.textContent = myEmojis[i]
//       emojiContainer.append(emoji)
//    }
   
// }
// renderEmojis()

// pushBtn.addEventListener("click", function() {
//    //console.log(emojiInput.value)  //the way to fetch out an input that someone types in i.e property wc user input is stored
//    //6. Empty string evaluates to false, non-empty string evaluates to true
//    if (emojiInput.value) {
//       // 5. Push the emoji into the myEmoji's array, and clear the input field
//       // 5. However, if the input value is empty, don't do anything
//       myEmojis.push(emojiInput.value)
//       emojiInput.value = ""
//       renderEmojis() //call the function to render the emojis
//    }
// })



// unshiftBtn.addEventListener("click", function(){
//     if (emojiInput.value) {
//         myEmojis.unshift(emojiInput.value)
//         emojiInput.value = ""
//         renderEmojis()
//     }
// })