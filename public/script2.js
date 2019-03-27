$(function(){
    $("#submit").click(function(){
        valid = true;
        if($("#Name").val() == "" )
        {
            $(".ErrMsg").show();
            valid = false;
        }
        if($("#Pnom").val() == "" )
        {
            $(".ErrMsg").show();
            valid = false;
        }
        if($("#Adress").val() == "" )
        {
            $(".ErrMsg").show();
            valid = false;
        }
        if($("#Tel").val() == "" )
        {
            $(".ErrMsg").show();
            valid = false;
        }
        if($("#NombreCmd").val() == "" )
        {
            $(".ErrMsg").show();
            valid = false;
        }
        if($("#Choix").val() == "")
        {
            $(".ErrMsg").show();
            valid = false;
        }
        if($("#Date").val() == "" )
        {
            $(".ErrMsg").show();
            valid = false;
        }
        
        return valid;
        
    });
});