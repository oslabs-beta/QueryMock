<h1><b>APOLLO'S LIBRARY</b></h1>
<p>Apollo's Library is built for developers who are using Apollo, GraphQl, and React.</p>
<p>We currently have two books in our library</p>
    1)  mockQuery -> Which is a function that provides mock data for front end developers when the backend is not set up.
    2) [FILL IN INFO HERE]
<br>
<br>
<br>
<h1><b>INSTALLATION</b></h1>
<h2>Downloading The Package</h2>
<p>To begin, fork this repo and then use the following code where you can acess it in your project file.</p>

$ <code> git clone https://github.com/oslabs-beta/apollos_library.git</code>

<p>It has some dependencies, so be sure to go to the file and enter:</p>

$ <code> npm install</code>
<br>
<br>


<h1><b>USING APOLLO'S LIBRARY</b></h1>

<h2><b>TOOL #1:</b> The mockQuery() Method</h2>
<h3><b>DESCRIPTION:</b></h3> <p>mockQuery is a temparey useQuery replacement, that provides mock data for front end development especially when the backend or schema have not been created.  The mockQuery method will provide you data so that you can visualize your front end code.

The idea is that while the backend is under construction, you would replace useQuery with mockQuery(), so that when your database is set up, you can swap them back and already know how everything will render on the page.</p>

<h3><b>Importing The Method</b></h3>
In every page that you are running a GraphQl search and using the useQuery method, import Apollo's Library in the top of the page</p>

<code>import al from '[your file path]/Apollos_Library'</code>

<h3><b>Implementing the Method</b></h3>
<p>Wherever you are using the useQuery method, replace it like we do in the following code:

original code<br>
<code>
  const { data } = <s>use</s>Query(gqlSearch)<br>
  ... do something with your data
</code>
<br>
<br>
replaced code<br>
<code>
  const { data } = <u>al.mockQuery(gqlSearch, Arg2, Arg3, Arg4)</u><br>
  ... do something with your data
</code>
<br>
<br>
<p>If you have a query that uses variables, then you would do the following to your code
<br>
original code<br>
<code>
  const { loading, error, data } = <s>use</s>Query(GET_TRACK, {variables: { variableGoesHere }}, [optional additional arguements here])
  <br>...do something with your data
</code>
<br>
<br>
replaced code<br>
<code>
  const { loading, error, data } = <u>al.mockQuery(GET_TRACK, {variables: { trackId }})</u>
  ...do something with your data
</code>
<br>

<h3><b>The Parameters</b>: <i>mockQuery(gql, obj, num, string)</i></h3>

1) The first paremeter must be a gql search, the same type of search used for Apollo's useQuery method. Here is link to the documentation for how those queries are constructed (https://www.apollographql.com/docs/react/data/queries/);

    Entering only 1 parameter will return mock/dummy data in string format.  If you're looking for different data types then see the functionality of the flag parameter


*The remaining arguements are optional and can be entered in any order or left out.*

2) Enter an integer for the number of times you want your data duplicated.  You will receive an array with 1 object if you don't specifiy.  *please note that if you enter 1 or 0 then your data will return to you as an object.  If you enter anything greater than 1, your data will be returned to you as objects in an array.

3) The object is for variables that you want to pass into your GraphQL query.  See this link for more info on using it with useQuery: https://www.apollographql.com/docs/react/data/queries/#caching-query-results.

4) The flag can be either:
  - <code>'error'</code> - This will return an error so that you can test how your site will render with an error.
  
  - <code>'loading'</code> - This will return 'loading' so that you can test how your site will render while loading.
  
  - <code>'insert'</code> - (for personalize) A pop up window will appear with input boxes so that you can either enter the exact data you want to be displayed or you can choose a data type by placing a tilsde in front of specific words.
  <br>
  <br>
  Using the "insert" flag will cause a popup window to appear where you can personalize the data.  If you don't want to come up with your own data, then look at some key words that you can use in order to populate your page with specific data:<br>
  <br>
      Data Type Key Words:
    - to enter an <code>int</code> type:
      - <code>~int</code>
    
    - To enter a <code>float</code> type:
      - <code>~float</code>
    
    - To enter a block of text then enter the <code>~text</code> followed by how many characters you want.  The following example will return text with 15 characters, 75 characters, and 345 characthers
      - <code>~text15</code>
      - <code>~text75</code>
      - <code>~text345</code>

    - To enter an <code>address</code> type:
      - <code>~address</code>

    - To enter a <code>phone</code> number type:
      - <code>~phone</code>

    - To enter a <code>photo</code> url then type:
      - <code>~photo</code>

<br>
<h3><b>Sesssion Storage</b></h3>
The data will stay in your session storage until you close the browser.  Once you have your mock data set, then you can remove the flag arguement and keep on working on your page with the mock data provided.
<br>
<br>
<br>
<br>
<br>
<br>
<h2><b>TOOL #2:</b> [enterinfo]</h2>
<h3><b>DESCRIPTION:</b></h3> <p>[enter info</p>

<h3><b>[instructions]</b></h3>
[enter info]</p>

<code>[enter code]</code>

<h3><b>Implementing the Method</b></h3>
<p>[instructions]

[code tags]<br>
<code>
  [code goes here]
</code>
<br>
<br>


