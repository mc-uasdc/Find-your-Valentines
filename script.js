$(".pinkdoor").dblclick(function(){
 $(".pinkdoor").attr("src", "https://m.media-amazon.com/images/M/MV5BZjRiZGI4YzQtNmZkNC00YWQzLTk0YWItMGVmNWJkNTkwMmM5XkEyXkFqcGdeQXVyODMzMTM1MDc@._V1_.jpg");
    });
$(".redDoor").dblclick(function(){
    $(".redDoor").attr("src", "https://i.pinimg.com/originals/97/6e/19/976e19316eb2909a9aa3ab33d67bbd42.jpg");
    });
$("button").click(function(){
    $(".pinkdoor").show();
    $(".redDoor").show();
});