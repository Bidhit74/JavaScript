<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom manipulation </title>
</head>

<body style="background-color: #212121; color: #fff;">
    <h2>Bidhit Chaudhary</h3>
</body>
<script>
    const div = document.createElement("div");
    console.log(div);
    div.className = 'container';
    div.id = 'myId';
    // div.innerHTML = 'Bidhit Kumar';
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    const addText = document.createTextNode('Bidhit Kumar');
    div.appendChild(addText);

    document.body.appendChild(addText);

</script>

</html>
