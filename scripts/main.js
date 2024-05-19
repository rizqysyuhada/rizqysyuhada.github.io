// clear form before ubloaad

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};