document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('container');
    const textNode = document.createTextNode('Hallo Welt');
    element.appendChild(textNode);
    const childElement = document.createElement('div');
    childElement.textContent = 'Hallo Welt';
    element.appendChild(childElement);
});