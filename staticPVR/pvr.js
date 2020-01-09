function initialisePVR() {

    var list = document.getElementsByClassName("list-card-widget");
    var buttonsList = document.getElementsByClassName("domButtons");
    var index = 0, buttonIndex = 0;
    var buttonSelectedItem = buttonsList[buttonIndex];
    addClassName(list[index],'expanded' );
    addClassName(list[index], 'highlight');

    currentDocument.addEventListener("keydown", function(eventObj) {

        switch(eventObj.keyCode) {
            case 38:
                //up key pressed
                console.log('up key pressed');
                if (index - 1 < 0) {
                    return
                }

                var selectedItem = list[index];
                removeClassName(selectedItem, 'expanded');
                removeClassName(selectedItem, 'highlight');
                index--;
                var selectedItem = list[index];
                addClassName(selectedItem, 'expanded');
                addClassName(selectedItem, 'highlight');
                buttonSelectedItem = buttonsList[index];
                break;
            case 40:
                //down Key pressed
                if(index >= list.length -1) {
                    return
                }

                var selectedItem = list[index];
                removeClassName(selectedItem, 'expanded');
                removeClassName(selectedItem, 'highlight');
                index++;
                var selectedItem = list[index];
                addClassName(selectedItem, 'expanded');
                addClassName(selectedItem, 'highlight');
                buttonSelectedItem = buttonsList[index];
               // alert('down key pressed');
                break;
            case 37:
                //left key pressed
                console.log('left key pressed');
                if (buttonIndex - 1 < 0) {
                    return
                }

                //var selectedItem = buttonSelectedItem[buttonIndex];
                removeClassName(buttonSelectedItem.children[buttonIndex], 'highlight');
                buttonIndex--;
                //var selectedItem = buttonsList[buttonIndex];
                addClassName(buttonSelectedItem.children[buttonIndex], 'highlight');

                break;
            case 39:
                //right Key pressed
                if(buttonIndex >= buttonSelectedItem.children.length -1) {
                    return
                }
                console.log('left key pressed');
                //var selectedItem = buttonsList[buttonIndex];
                removeClassName(buttonSelectedItem.children[buttonIndex], 'highlight');
                buttonIndex++;
                //var selectedItem = buttonsList[buttonIndex];
                addClassName(buttonSelectedItem.children[buttonIndex], 'highlight');

                // alert('down key pressed');
                break;
            case 8:
                  history.back();             
        }
    }, false);

}

this.addClassName = function (element, add) {
    var oldClass = element.className;

    if ((' ' + oldClass + ' ').indexOf(' ' + add + ' ') == -1) {
        if (oldClass != '') add = ' ' + add;
        element.className = oldClass + add;
    }

    return oldClass;
};

this.removeClassName = function (element, remove) {
    var oldClass = element.className;
    var array = element.className.split(' ');

    for (var index in array) {
        if (array[index] == remove) {
            array.splice(index, 1);
            break;
        }
    }

    element.className = array.join(' ');
    return oldClass;
};


this.setExpanded = function (isExpanded) {
    if (isExpanded) {
        this.addClassName(this.cardEl, 'expanded');
    } else {
        this.removeClassName(this.cardEl, 'expanded');
    }
    this.isExpanded = isExpanded;
    return this;
};


/**
 * set this list card as highlighted.  Default is false
 *
 * @param {boolean} true if highlight this card, false otherwise.
 * @return {this} for function chaining
 */
this.setHighlighted = function (isHighlighted) {
    this.setSelectedIndex(0);
    if (isHighlighted) {
        this.addClassName(this.cardEl, 'highlight');
    } else {
        this.removeClassName(this.cardEl, 'highlight');
    }
    return this;
};


function finalisePVR() {
    delete index;
    delete list;

}
