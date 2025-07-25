document.addEventListener("footerLoaded", function() {//let's put this in a function, YOLO.
    var yearCreated = 2025; //change this to the year the website was first published on a public web server.
    var owners = [
        'Cybermissions, All Rights Reserved'
    ]; 
    //change the string values above to the legal name of the copyright holder, a legal name. Also add ', All Rights Reserved' if all the rights are legally reserved. Add as many as you want to.
    /* example:
    var owners = [
        'John Doe', 
        'Glen Matthews, All Rights Reserved', 
        'McDonald\'s Corporation', 
        'McDonald\'s Corporation, All Rights Reserved'
    ];
    This indicates 4 copyright holders. Each will have their own copyright on the site.
    */
    //the rest of this is behind-the-scenes stuff. Please do not modify.
    var ownerNum = owners.length; //declare a variable with how many copyright holders there are.

    var date = new Date(); //pull the current date
    var year = date.getFullYear(); //this gets the full year from the current date

    console.log('the current year is: ' + year); //shows current year in console
    console.log('the copyright year is: ' + yearCreated);// shows year created in console
    console.log('the number of copyright owners is: ' + ownerNum); //shows number of copyright owners in console

    var copyid = document.querySelector('.footer #copy'); //snag the copyright on the DOM
    var copyright = '' //declare copyright var to a string
    for(let i = 0; i < ownerNum; i++){ //for every copyright holder
        if(year > yearCreated){ //decide if an origin year needs to be added in with the current year.
            copyright += '<p>&copy;' + yearCreated + '-' + year + ' ' + owners[i] + '</p>'; //this has an origin year.
        } else {
            copyright += '<p>&copy;' + year + ' ' + owners[i] + '</p>'; //the origin year is this year so no origin year.
        };
    };
    copyid.innerHTML = copyright; //display all copyright holders in the HTML
});