
function func(a){
    var eId = a.getAttribute('eid');
    var eTitle = a.getAttribute('etitle');
    var ePrice = a.getAttribute('eprice');
    var eAuthor = a.getAttribute('eauthor');
    var eYear = a.getAttribute('eyear');

    
    var id = document.getElementById("id");
    var title = document.getElementById("title");
    var price = document.getElementById("price");
    var author = document.getElementById("author");
    var year = document.getElementById("year");

    id.value = eId;
    title.value = eTitle;
    price.value = ePrice;
    author.value = eAuthor;
    year.value = eYear;
}

// $(document).on("click", "#edit", function () {
//     var myBookId = $(this).attr('dat');
//     //console.log(myBookId);
//     $("#usre").val(myBookId)
// });
