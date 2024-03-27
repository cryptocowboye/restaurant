export default function removeContent () {
    const div = document.querySelector('#content');
    div.innerHTML = '';
    return;
}