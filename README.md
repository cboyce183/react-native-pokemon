### POKEREACT NATIVE

React native is a framework for building dedicated iOS && android apps in a single
application in a very similar way to react web apps. There are a few differences
between react native code and regular react code, but they are visually minor.
The main difference arises in the fact react native does not render HTML, rather
its own 'version' of it using 'Text' and 'View' components. I won't go into gory detail
here, but reading up on this on the link below would be a good starting point to
understanding the differences:

https://facebook.github.io/react-native/docs/tutorial.html

I also found this guys video series very helpful:

https://www.youtube.com/watch?v=mkualZPRZCs&t=690s

To set up react native on your system follow the instructions here:

https://facebook.github.io/react-native/docs/getting-started.html

NOTE: follow the instructions for 'Building Projects with Native Code' and choose
the macOS + iOS options for this project. If you are working with Linux/Windows,
you are on your own. Apps should be cross compatible between android and iOS, but
there may be some differences in implementation. This app is built around iOS since
it is fairly simple to set up for iOS when coding on macOS.

Once you can get an example app up and running on the simulator, all you need to
do to run this pokedex is install dependencies on NPM (hopefully...)

The server is there just to bypass the pokeapi limit as we have done before. Its a simple
koa server hosting the api info, with all the standard dependencies. But you can make your own
server or modify the fetch request to access the API directly if you want to!

### For this Pokedex App...

To run the app on the simulator, make sure the server is running first so the
relevant information can be gained. If you decide to use the API directly, it
shouldn't be too hard to figure out where things change in the code.

To run server, open a terminal inside AwesomeProject folder and 'npm install',
then type:

```
node --harmony server/app.js
```
--> (or nodemon if you have that setup).

Then type:

```
react-native run-ios
```

If you have setup correctly, the build should begin. The build may take a couple of mins.

NOTE: an internet connection is required to render the sprites, but not for basic functionality
of the app. The pokemon info is served locally in the API created in server in order to bypass
the IP access limit enforced by the pokemon API.

—Charles Boyce
