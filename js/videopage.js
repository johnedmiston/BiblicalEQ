$(document).ready(function() {
    console.log("videopage.js starting...");
    console.log("Session array length:", session.length);
    console.log("Cards placeholder exists:", $("#cards-plh").length > 0);
    
    // Load the card template
    $.ajax({
        url: "html-elem/cards.html",
        method: "GET",
        success: function(data) {
            console.log("Cards template loaded:", data);
            
            // Set up the template
            $("#cards-plh").html(data);
            var template = $("#cards-plh").children().first();
            console.log("Template found:", template.length > 0);
            
            if (template.length === 0) {
                console.error("No template found in cards.html");
                return;
            }
            
            var originalTemplate = template.clone();
            
            // Clear the container
            $("#cards-plh").empty();
            
            // Generate cards for each session
            for (var c = 0; c < session.length; c++) {
                console.log("Creating card", c, "for:", session[c].title);
                
                var newCard = originalTemplate.clone();
                newCard.addClass("session-" + c);
                
                // Populate the card content
                newCard.find('.card-content').html(
                    '<a class="card-link" href="/watch.html?sessionId=' + c + '" rel="noopener noreferrer">' +
                        '<div class="card-thumb">' +
                            '<img src="/img/thumbnails/' + c + '.png" alt="' + session[c].title + '" />' +
                            '<div class="playbutton"><i class="fa-solid fa-play"></i></div>' +
                        '</div>' +
                        '<div class="card-text">' +
                            '<div class="card-header"><h2>' +
                                session[c].title +
                            '</h2></div>' +
                            '<div class="card-desc"><p>' +
                                session[c].description +
                            '</p></div>' +
                        '</div>' +
                    '</a>'
                );
                
                $("#cards-plh").append(newCard);
            }
            
            console.log("All", session.length, "cards created successfully");
        },
        error: function(xhr, status, error) {
            console.error("Failed to load cards template:");
            console.error("Status:", status);
            console.error("Error:", error);
            console.error("Response:", xhr.responseText);
        }
    });
});
