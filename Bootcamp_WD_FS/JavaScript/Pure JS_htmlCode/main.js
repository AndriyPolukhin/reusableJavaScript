function editNodeText(regex, input, helpId, helpMessage) {
    if (!regex.test(input)) {
        if (helpId != null) {
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }
            helpId.appendChild(document.createTextNode(helpMessage));
        }
    } else {
        if (helpId != null) {
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }
        }
    }
}


function isTheFieldEmpty(inputField, helpId) {
    return editNodeText(/^[A-Za-z\,\'-]{1,15}\s?[A-Za-z\.\'\-]{1,15}\s?[A-Za-z\,\' \-]{1,15}/, inputField.value, helpId, "Please enter a valid name");
}
