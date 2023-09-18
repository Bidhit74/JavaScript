<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM manipulation</title>
</head>

<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
<script>
    const addLanguage = (languageName) => {
        let li = document.createElement('li');
        li.innerHTML = `${languageName}`;
        document.querySelector('.language').appendChild(li);
    }
    addLanguage('Python');
    addLanguage('TypeScript');
    addLanguage('Python');

    // Best approach

    function addOptiLanguage(languageName) {
        let li = document.createElement('li');
        // let addText = document.createTextNode(languageName);
        // li.appendChild(addText);
        li.appendChild(document.createTextNode(languageName));
        document.querySelector('.language').appendChild(li);
    }
    addOptiLanguage('TypeScript');

    // Edit code
    // const secondLanguage = document.querySelector('li:nth-child(2)');
    // // secondLanguage.innerHTML = 'Edit';
    // // best approach
    // let newLi = document.createElement('li');
    // // newLi.textContent = "TypeScript";
    // newLi.textContent = "TypeScript";
    // secondLanguage.replaceWith(newLi)

    // Or
    // //edit
    // const firstLang = document.querySelector("li:first-child")
    // firstLang.outerHTML = '<li>TypeScript</li>';

    // //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove();


</script>

</html>
