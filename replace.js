walk(document.body);

function walk(node) {
    var child, next;

    switch (node.nodeType) {
        // Element
        case 1:
        // Document
        case 9:
        // Document fragment
        case 11:
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        // Text node
        case 3:
            // Ignore scripts
            if (node.parentElement.tagName.toLowerCase() !== 'script') {
                handleText(node);
            }
            break;
    }
}

function handleText(textNode) {
    var value = textNode.nodeValue;

    value = value.replace(/\b(N|n)omad/g, function(match, part, offset, string) {
        // m(110) - 7 = g(103)
        return String.fromCharCode(part.charCodeAt(0) - 7) + 'obshite';
    });

    value = value.replace(/\b(M|m)inimalist/g, function(match, part, offset, string) {
        // m(109) - 6 = g(103)
        return String.fromCharCode(part.charCodeAt(0) - 6) + 'obshite';
    });

    textNode.nodeValue = value;
}
