<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | Manipulation</title>
</head>

<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <!-- this is a comment -->
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);
    // console.log(parent.children[1]);
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //     console.log(parent.children[i].innerHTML);
    //     parent.children[0].style.color = 'red';
    // }
    // parent.children[0].style.background = 'orange';
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    // const oneDay = document.querySelector('.day');
    // console.log(oneDay);
    // console.log(oneDay.parentElement);
    // console.log(oneDay.nextElementSibling);

    console.log("NODES: ", parent.childNodes);
</script>

</html>