# Watchables

I wanted to play around and learn how watchable values worked, so wrote a simple example

```javascript
let watchable = new JonnyCode.Watchable(0);

// Add Handler1
watchable.addHandler(handler1);
// Handler1 log = 1
watchable.value += 1;

// Add Handler2
watchable.addHandler(handler2);
// Handler1 log = 2 
// Handler2 log = 2 
watchable.value += 1;

// Remove Handler1
watchable.removeHandler(handler1);
// Handler2 log = 3 
watchable.value += 1;

function handler1(value) {
    console.log("handler1:", value);
}

function handler2(value) {
    console.log("handler2:", value);
}
```

To get this running use the following commnds:

+ `npm install` - To install the dependencies
+ `npm run build` - To copy the files to the bin folder and run tsc
+ `npm run server` - To start the server and open the browser