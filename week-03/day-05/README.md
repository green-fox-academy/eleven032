# XHR

Talking to a server

## Objectives  

 -  Learn how to talk to a server
 -  Make use of async calls
 -  Play with API-s
 -  Progress on weekly project's API

## Outline & Purpose  

| *Input Skills* | *Output Skills* |  
|:---------------|----------------:|  
| HTML, CSS, experience with DOM manipulation | Some experience in work with APIs |  
| Experience with JS building blocks, more complex functions | Experience in creating httpRequests |  
| Little experience with async functions (setTimeout, callbacks) | Understanding AJAX |  
| Little knowledge with object orientation in JS | Experience in DOM manipulation depending request response |  

## Materials & Resources  

### Videos

| Material | Time |
|:---------|-----:|
| [AJAX Tutorial - 1 - Introduction to AJAX](https://www.youtube.com/watch?v=tp3Gw-oWs2k) | 4:45 |
| [AJAX Tutorial - 2 - Some Examples of AJAX](https://www.youtube.com/watch?v=-1RLW7a8Gr4) | 3:43 |
| [Asynchronous JavaScript #2 - AJAX Requests](https://www.youtube.com/watch?v=h0ZUpPiV1ac) | 13:19 |  
| [What is an API](https://www.youtube.com/watch?v=s7wmiS2mSXY) | 3:24 |  
| [JSON and AJAX Tutorial: With Real Examples](https://www.youtube.com/watch?v=rJesac0_Ftw) | 40:44 |

### Reading

| Material |
|:---------|
| [AJAX - Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) |  
| [AJAX - API - Use of XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)(till Submitting forms and uploading files ) |  

### Optional

| Material | Time |
|:---------|-----:|
| [Fetch API by Google developers](https://www.youtube.com/watch?v=g6-ZwZmRncs) | 5:26 |  
| [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) | - |  

## Material Review

 -  XMLHttpRequest
 -  request methods  
 -  `.open`
 -  `.send`
 -  `.setRequestHeader`
 -  `.onreadystatechange`
 -  `.onload`
 -  [status codes](http://www.restapitutorial.com/httpstatuscodes.html) | [status cats](https://http.cat/)
 -  `.readyState`
 -  `.response`
 -  Blocking / non-blocking
 -  Callbacks
 -  XML
 -  JSON
 -  API-s
 -  API keys
 -  Fetch API
 -  [Cross origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Workshop

Please note that hunting for API keys is part of the exercises.

### Example

```javascript
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'https://sheetsu.com/apis/v1.0/7654fbe24554', true); // Also try http://444.hu/feed
httpRequest.send(null);
```

Design of user interface is not important, don't spend more than 5 minutes making it look pretty.

### Tasks

 -  [Giphy API](giphy-api/README.md)
 -  [New York Times API](new-york-times/README.md)
 -  [Star Wars](star-wars/README.md)
 -  [Get Position](get-position/README.md)

<!-- ### Reddit backend communication

Check the documentation of the [Reddit project's backend](https://todo-docs.herokuapp.com/docs/#!/default/todosGET)

 - Try to implement all methods without connecting them to you UI -->

## Individual Workshop Review

Please follow the styleguide: [Our TypeScript styleguide](../../styleguide/typescript.md)

 -  Is the directory structure and the name of the files correct?
 -  Is every file in strict mode?
 -  Is the indentation good in each file?
 -  Is there unnecessary code?
 -  Can you find unnecessary code in comments?
 -  Is there unnecessary code duplication?
 -  Are there unnecessary empty blocks?
 -  Can you spot unused variables?
