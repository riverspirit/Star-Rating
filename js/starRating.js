$(document).ready(function(){
    var ratingValue = 3,
    alreadyRated = false,
    itemReference = 0; // product id or something associated with the rating
    
    $(".rateButton").click(function(){
        if (!alreadyRated)
        {
            ratingValue = getRatingValue($(this).attr("id"));
            alreadyRated = true;
            saveRating();
        }
    });
    
    
    $(".rateButton").mouseover(function(){
        if (!alreadyRated)
        {
            var mouseOverRatingValue = getRatingValue($(this).attr("id"));
            addStar(mouseOverRatingValue);
        }
    });

    
    $(".rateButton").mouseout(function(){
        if (!alreadyRated)
        {
            addStar(ratingValue);
        }
    });
    
    
    function addStar(rating) {
        for (var i=5; i>=1; i--)
        {
            if (i<=rating)
            {
                $("#rateBtn"+i).removeClass("unrated").addClass("rated");
            }
            else
            {
                $("#rateBtn"+i).removeClass("rated").addClass("unrated");
            }
        }
    }


    function getRatingValue(starId) {
        switch (starId)
        {
            case 'rateBtn1': { return 1;}
            case 'rateBtn2': { return 2;}
            case 'rateBtn3': { return 3;}
            case 'rateBtn4': { return 4;}
            case 'rateBtn5': { return 5;}
        }
    }
    
    function saveRating() {
        $("#starRating").append("<span id='ratingStatus'>Thank you for rating.</span>");
        $(".rated").css("background", "url('images/alreadyRated.png')");
    }
    
    
});