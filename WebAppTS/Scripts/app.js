var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var User = (function () {
    function User() {
    }
    return User;
})();
var UserList = (function () {
    function UserList() {
        this.users = new Array();
    }
    UserList.prototype.load = function () {
        var _this = this;
        $.getJSON("http://localhost:2643/Home/GetUsers", function (data) {
            _this.users = data;
            alert("данные загружены");
        });
    };
    UserList.prototype.displayUser = function () {
        var table = '<table class="table" >';
        for (var i = 0; i < this.users.length; i++) {
            var tabRow = '<tr>' +
                '<td>' + this.users[i].Id + '</td>' + '<td>' + this.users[i].Name + '</td>' + '<td>' + this.users[i].Age + '</td>' +
                '</tr>';
            table += tabRow;
        }
        table += "</table>";
        $("#content").html(table);
    };
    ;
    return UserList;
})();
window.onload = function () {
    var userlist = new UserList();
    $("#loadbtn").click(function () { userlist.load(); });
    $("#displaybtn").click(function () { userlist.displayUser(); });
};
