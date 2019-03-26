# FirestoreConsoleChat
Testing Firebase's Firestore with a console nodejs chat app


## How to use

1) Open the [Firebase Console](https://console.firebase.google.com/) and create a new project
1) Install [NodeJS and npm](https://nodejs.org/en/
2) You'll need a [service account](https://cloud.google.com/compute/docs/authentication)
    
    Go to [IAM & admin > Service accounts in the Cloud Platform Console](https://console.cloud.google.com/iam-admin/serviceaccounts). Generate a new private key and save the JSON file
    
    For this project, I named it serviceAccountKey.json
3) Open a terminal 
    
    ```
    npm install
    node run [your_name] [name_of_who_you_want_to_talk_to]
    ``` 
4) Open another terminal (or call a friend) and swap the argument names