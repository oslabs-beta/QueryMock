# apollos_library
a library built for apollo jest and graphql

You need to open two command terminals.
1) enter the client folder and run npm start
2) enter the server folder and run npm start

This branch is to test the mockData feature.
You only need to open two files:
  1) apollos_library (in client/pages) -> This is simulating our npm package
  2) tracks.js (in client/pages) -> this is where we can do three things:
    a) use the react hook useQuery(TRACKS), which will make it run as if we're not even there
    b) use our apollos_library.mockQuery(Tracks), which will run skipping the popup window
    c) use our apollos_library.mockQuery(Tracks, "p"), which will cause our popup window to deploy.  This section is still being worked on.
