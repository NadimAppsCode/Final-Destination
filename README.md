# Final-Destination Environment Setup ::>>

    Install nodejs/npm from here : https://nodejs.org/en/
    check if installation is successful: npm -version
    
    Install Ionic
      Ionic comes with a convenient command line utility to start, build, and package Ionic apps.
      To install it, simply run:
             npm install -g ionic
     
    Install Cordova
      To install it, simply run:
             npm install -g cordova
             
    Install the Android SDK : http://www.androiddocs.com/sdk/installing/index.html
                          
    Install git from : https://git-scm.com/download/win
    Make a new folder: "Islamic Projects"
    go to the folder: "Islamic Projects"
    right click on mouse and select "git bash here"
    run this command : git clone https://github.com/Jay-Send/Final-Destination.git
    Install Visual Studio Code from here : https://code.visualstudio.com/download
    Navigate to Root folder of project : Final Destination
    open Command prompt and run this cmnd: code..
    Now the whole project will open in Visual Studio, go to the Pages under Package explorer 
    
    
    #HOW TO RUN THE PROJECT : 
    In Visual Studio Code , go to View -> Integrated Terminal
    At the bottom You will see Terminal , run commands there
    
    Run On Chrome Browser :
     Go to your project Root folder by cd command Like : cd "Folder Name"
     Check the contents of that folder by dir command Like : dir
     Run these commands : 
          npm install
          ionic serve -l
          
    Run On Android device :
     Go to your project Root folder by cd command Like : cd "Folder Name"
     Check the contents of that folder by dir command Like : dir
     Run these commands : 
          npm install
          ionic cordova platform add android
          ionic cordova run android --device 
          
     Package.json : You will find all the Package/Config versions in this file      
     
    
    
    
