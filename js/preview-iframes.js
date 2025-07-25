$(document).ready(function () {

    const pIframe = document.getElementById('policyIframe');
    if (pIframe) {
        pIframe.onload = function() {
            // Get the document element of the iframe's content
            const iframeDocument = pIframe.contentWindow.document.documentElement;
            // Calculate the scroll height of the content
            const newHeight = iframeDocument.scrollHeight;
            // Set the iframe's height
            pIframe.style.height = newHeight + 'px';
        };
    }

    const urlParams = new URLSearchParams(window.location.search);
    const prevUrl = urlParams.get('prevId');
    console.log('Looking for preview:', prevUrl);

    let prevId = 404;

    for (var i = 0; i < prev.length; i++) {
        // Convert prevUrl to number for comparison
        if (prev[i].id === parseInt(prevUrl)) {
            console.log('prev Match:', prev[i].title);
            prevId = prev[i];
            document.title = "Preview the Book - Biblical EQ";
            break;
        }
    }

    if (prevId !== 404) {
        $('#title').text('Preview: ' + prevId.title);
        $('#preview').html('<iframe src="html-elem/previews/' + prevId.file + '.htm" id="prevIframe" title="' + prevId.title + '" />');
        document.title = prevId.title + " - Biblical EQ";
        const prevIframe = document.getElementById('prevIframe');
        prevIframe.onload = function() {
            // Get the document element of the iframe's content
            const iframeDocument = prevIframe.contentWindow.document.documentElement;
            // Calculate the scroll height of the content
            const newHeight = iframeDocument.scrollHeight;
            // Set the iframe's height
            prevIframe.style.height = newHeight + 'px';
        };
    } else {
        console.log('preview not found, displaying 404 page');
        $('#title').text('Preview Not Found');
        $('#preview').html('<p>The requested preview could not be found.</p>');
        document.title = "Error 404 - Biblical EQ";
    }
});