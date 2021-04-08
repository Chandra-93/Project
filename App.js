$(document).ready(function () {

    var jsonObj = [];
    $.getJSON("http://jsonplaceholder.typicode.com/users", function (result) {
        $.each(result, function (i, field) {
            jsonObj.push(field);
            appendData(field);
        });
    });

    $("#myInput").on("keyup", function () {
        sortTable();
    });

    function SortByName(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    function SortByEmail(a, b) {
        if (a.email < b.email)
            return -1;
        if (a.email > b.email)
            return 1;
        return 0;
    }

    function SortByUserName(a, b) {
        if (a.username < b.username)
            return -1;
        if (a.username > b.username)
            return 1;
        return 0;
    }

    function appendData(field) {
        markup = "<tr ><td ><p><span class='glyphicon glyphicon-user'></span></p></td><td><table id='internalTable'><tr><td id='Name'>" + field.name + "</td></tr><tr><td id = 'UserName'>" + field.username + "</td></tr></table></td><td id='Email' align='right'><a href='http://jsonplaceholder.typicode.com/posts?userId=" + field.id + "'>" + field.email + "</a></td></tr>";
        tableBody = $("#usersList");
        tableBody.append(markup);
    }


    $('select').change(function () {
        sortTable();
    });

    function sortTable() {
        var id = $("select").val();
        if (id == "Name") {
            jsonObj.sort(SortByName);

        } else if (id == "UserName") {
            jsonObj.sort(SortByUserName);
        } else {
            jsonObj.sort(SortByEmail);
        }

        $("#usersList").empty();
        for (i = 0; i < jsonObj.length; i += 1) {
            appendData(jsonObj[i])
        }
        filter();
        show();
    }

    function show() {
        $('#internalTable  > tbody > tr').each(function () {

            $(this).show();

        });



    }
    function filter() {

        $("#usersList tr").filter(function () {
            var value = $("#myInput").val().toLowerCase();
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

    }
});
