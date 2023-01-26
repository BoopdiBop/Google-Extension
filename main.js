// ideas for highlighter
// wrap the selected text with a span tag and have that default to yellow in css
// user can select the color they wanna highlight in
// user can select if they want to bold/italicize the selected text
// window.getSelection().toString()

// potential features: read highlighted text out loud
// define highlighted words
// 
const isBolded = document.querySelector('')
/*
var range = window.getSelection().getRangeAt(0);
var selectionContents = range.extractContents();
var div = document.createElement("div");
div.style.color = "blue";
div.appendChild(selectionContents);
range.insertNode(div);
*/


document.addEventListener('DOMContentLoaded', () => {
    // press up
    document.addEventListener('mouseup', () => {
        // this is to check if user actually highlighted, not just clicking a button or anything else
        if (window.getSelection()) {
            let range = window.getSelection().getRangeAt(0);
            let content = range.extractContents();
            // console.log('content is: ', content)
            // make a span element <span> </span> 
            let span = document.createElement('span');
            span.style.backgroundColor = 'yellow';
            span.appendChild(content);
            range.insertNode(span);
        } 
    })
})

