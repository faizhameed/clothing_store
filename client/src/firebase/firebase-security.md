### Firebase security Notes

```
service cloud.firestore {
  match /databases/{database}/documents {
  match /users/{userId}{
  allow read: if request.auth != null&&request.auth.uid==userId
  }
  }
}
```

get allows users to fetch specific data individually
list allow users to get entire collection
change allow read to allow get

```
service cloud.firestore {
  match /databases/{database}/documents {
  match /users/{userId}{
  allow get: if request.auth != null&&request.auth.uid==userId
  }
  }
}
```

if I wanted to enable create if they are authenticated

```
service cloud.firestore {
  match /databases/{database}/documents {
  match /users/{userId}{
  allow get,create: if request.auth != null&&request.auth.uid==userId
  }
  }
}
```

if I wanted to update then we can write both update and create together as write

````
service cloud.firestore {
  match /databases/{database}/documents {
  match /users/{userId}{
  allow get,write: if request.auth != null&&request.auth.uid==userId
  }
  }
}```
````
