const stones = document.querySelectorAll('div');

for (let stone of stones) {
    dragElement(stone);
}

document.addEventListener('mousedown', () => drag = false);
document.addEventListener('mousemove', () => drag = true);
document.addEventListener('mouseup', (elmnt) => {
    console.log(drag ? 'drag' : 'click');

    if (drag === false) {
        elmnt.toElement.classList.toggle('non-draggable');
    }
});

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        document.onmouseup = closeDragElement;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        if (elmnt.classList.length > 1) {
            return;
        }

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement(e) {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
