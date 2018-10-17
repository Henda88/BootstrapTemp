
/*********************** appel api ****************/

$.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (api) {


    console.log(api);

    for (i = 0; i < api.data.length; i++) {
        $("<img>").attr("src", "http://" + api.data[i].imagePath).appendTo("#item");
        $('#item').append('<h3><strong>' + api.data[i].label + '</strong></h3><br>');
        $('#item').append('<p>' + api.data[i].description + '</p><br>');

        var servdescription = api.data[i].Services;
        for (var j = 0; j < servdescription.length; j++) {
          
            $('#item').append('<h5>' + servdescription[j].label_service+ '</h5>');
         
            $('#item').append('<p>' + servdescription[j].description_service+ '</p>');
      
        }
     }

})


