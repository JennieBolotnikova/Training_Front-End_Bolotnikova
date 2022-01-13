var DragManager = new function() {

    var dragObject = {};
    var self = this;

    function onMouseDown(e) {
        if (e.which != 1) return; 
        var elem = e.target.closest('.draggable');
        if (!elem) return;
        dragObject.elem = elem;
        // remember the coordinates from which the transfer of the object began
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;
        return false;
    }

    function onMouseMove(e) {
      if (!dragObject.elem) return; // element is not clamped
      if (!dragObject.avatar) { // the element is pressed, but has not yet started to move
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;
            // if the mouse has not moved far enough when pressed
            if (Math.abs(moveX) < 2 && Math.abs(moveY) < 2) {
            return;
            }
            // starting transfer
            // create an avatar
            dragObject.avatar = createAvatar(e); 
            if (!dragObject.avatar) { // cancellation of transfer, you cannot "grab" this part of the element
            dragObject = {};
            return;
            }
            // avatar created successfully
            // create auxiliary properties shiftX / shiftY
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;
            startDrag(e); // show start of transfer
        }
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';
        // opening the basket when crossing the following coordinates
        
        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) { // if the transfer is in progress
            finishDrag(e);
        }
        // transfer either did not start, or completed
        // clear the "transfer state" of the dragObject
        dragObject = {};
    }

    function finishDrag(e) {
        var dropElem = findDroppable(e);
        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {
        // remember the old properties to return to them when canceling the transfer
        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };
        // function to cancel the transfer
        avatar.rollback = function() {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };
        return avatar;
    }

    function startDrag(e) {
        var avatar = dragObject.avatar;
        // initiate start transfer
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    function findDroppable(event) {
        dragObject.avatar.hidden = true;
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        dragObject.avatar.hidden = false;
        if (elem == null) {
            return null;
        }
        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function(dragObject, dropElem) {};
    this.onDragCancel = function(dragObject) {};
};

function getCoords(elem) { 
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
DragManager.onDragCancel = function(dragObject) {
    dragObject.avatar.rollback();
  };
DragManager.onDragEnd = function (dragObject, dropElem) {
    dropElem.classList.add('openBucket');
    setTimeout(function () {
        dropElem.classList.remove('openBucket');
        dragObject.elem.style.display = 'none';
    }, 300);
};