<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>DOM learning</title>
    <style>
        .bg-black {
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>

<body class="bg-black">
    <div>
        <h1 id="title" class="heading">DOM learning<span style="display: none;"> test text</span></h1>
        <p>Lorem ipsum dolor sit amat connecter.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amat.</p>
        <input type="password" name="" id="">
    </div>
    <ul>
        <li class="list-item">one</li>
        <li class="list-item">two</li>
        <li class="list-item">three</li>
        <li class="list-item">four</li>
    </ul>
</body>

</html>

<!-- Dom Manipulation -- Document Object Model Manipulation -->
<!-- document.innerText  -- This is only show content jo document me dikhta hai wahi show hota hai  -->

<!-- document.innerContent  -- This show content jo document me dikhta hai and hide wah show hota hai  -->

<!-- document.innerHTML  -- This show All Content with class and id so more  -->


<!-- Dom Selector -->
<!-- document.getElementById('idName') // Dom Manipulation By id -->

<!-- document.getElementsByClassName('className') // Dom Manipulation By className  -->
<!-- This return HTMLCollection() // This is not a Array -->
<!-- HTMLCollection() To convert the Array // Array.from(nameHTMLCollection) -->


<!-- querySelector() And querySelectorAll() -->
<!-- The querySelector() method returns the first element that matches a CSS selector. -->
<!-- To return all matches (not only the first), use the querySelectorAll() instead. -->
<!-- Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid. -->
<!-- querySelectorAll() // return karta NodeList jo pura array nahi hota hai -->
<!-- NodeList // accessing by NodeList Name[0]; // accessing -->
