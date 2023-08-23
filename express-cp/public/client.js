$(document).ready(onReady);

function onReady() {
    // as soon as page loads > get list of artists from server
    $.ajax({   
        type: 'GET',  
        url: '/place' 
    }).then( (res) => { // if good response ie 200,201:
       // do something
    }).catch((res) => { // if bad response

    });//end Catch
    
} // end onReady


// TODO: add express:
//     npm init --yes 
//     This will make a package.json
//     Only run if no package.json exists
  
//                express
//   npm install <library>
//     This will install a library to a project
//     Needs package.json to work correctly
  
//   npm start
//     This will start your server
//     Provided you set up the start script in package.json
  
//   npm uninstall <library>
//     Oops, i installed the wrong thing!
  
//   ---
  
//   ctrl + c
//     Stop the server!
  
//   killall node
//     STOP ALL THE NODES









