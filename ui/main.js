// Counter code
var button = document.getElementbyId('counter');
var counter = 0;
button.onclick = function ()    {
        
        // make a request to the counter endpoint
        
        // Capture the rsponse and store it in a variable
        
        // Render the variable in the correct span
        counter = counter + 1;
        var span = document.getElementById('count');
        sppan.innerHTML = counter.toString();
};