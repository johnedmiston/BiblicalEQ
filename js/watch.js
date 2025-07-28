$(document).ready(function () {
    // Select the iframe element
    const iframe = $('.watch iframe');

    const urlParams = new URLSearchParams(window.location.search);
    const sessionUrl = urlParams.get('sessionId');
    console.log('Looking for session:', sessionUrl);

    let sessionId = 404;

    for (var i = 0; i < session.length; i++) {
        // Convert sessionUrl to number for comparison
        if (session[i].id === parseInt(sessionUrl)) {
            console.log('Session Match:', session[i].title);
            sessionId = session[i];
            document.title = session[i].title + " - Biblical EQ";
            var sessionAud = 'aud/session_' + (i + 1) + '.mp3';
            break;
        }
    }

    if (sessionId !== 404) {
        iframe.attr('src', sessionId.vidUrl); // Set the iframe src
        $('#title').html('<h1>' + sessionId.title + '</h1>');
        $('#description').html('<p>' + sessionId.description + '</p>');
        if (sessionId.id !== 10) {
        $('#audio-dl').html('<h2>Download Audio Version for Free</h2><a href="' + sessionAud + '" rel="noopener noreferrer" download><i class="fa-solid fa-cloud-arrow-down"></i><br>Download Audio</a>');
        }  
        // Dispatch the custom event to load the CSS after setting the src
        document.dispatchEvent(loadCSSEvent);
    } else {
        console.log('Session not found, displaying 404 page');
        $('#title').html('<h1>Session Not Found</h1>');
        $('#description').html('<p>The requested session could not be found.</p>');
        document.title = "Biblical EQ";
    }
    // Load the card template
    $.ajax({
        url: "html-elem/cards.html",
        method: "GET",
        success: function(data) {
            console.log("Cards template loaded:", data);
            
            // Set up the template
            $("#next-videos").html(data);
            var template = $("#next-videos").children().first();
            console.log("Template found:", template.length > 0);
            
            if (template.length === 0) {
                console.error("No template found in cards.html");
                return;
            }

            var originalTemplate = template.clone();
            
            // Clear the container
            $("#next-videos").empty();
            function createCard(card) {
                var cardNum = card
                console.log("Creating card", cardNum, "for:", session[cardNum].title);

                var newCard = originalTemplate.clone();
                newCard.addClass("session-" + cardNum);
                
                // Populate the card content
                newCard.find('.card-content').html(
                    '<a class="card-link" href="watch.html?sessionId=' + cardNum + '" rel="noopener noreferrer">' +
                        '<div class="card-thumb">' +
                            '<img src="img/thumbnails/' + cardNum + '.png" alt="' + session[cardNum].title + '" />' +
                            '<div class="playbutton"><i class="fa-solid fa-play"></i></div>' +
                        '</div>' +
                        '<div class="card-text">' +
                            '<div class="card-header"><h2>' +
                                session[cardNum].title +
                            '</h2></div>' +
                        '</div>' +
                    '</a>'
                );
                $("#next-videos").append(newCard);
            };
            
            // Generate cards for each session
            if (parseInt(sessionUrl) == session.length - 1) {
                $("#play-title").html('Watch the Series again');
                for (var i = 0; i < (session.length - 1); i++) {
                    createCard(i);
                }
            } else {
                for (var c = 0; c < session.length; c++) {
                    if (c > parseInt(sessionUrl)) {
                        createCard(c);
                    } else {
                        $("#play-title").html('Next in the Series');
                        console.log("Skipping card", c, "due to sessionUrl:", sessionUrl);
                    }
                }
                console.log("All", session.length, "cards created successfully");
            };
        },
        error: function(xhr, status, error) {
            console.error("Failed to load cards template:");
            console.error("Status:", status);
            console.error("Error:", error);
            console.error("Response:", xhr.responseText);
        }
    });
});
