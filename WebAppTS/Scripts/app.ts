
class User
{
    Id: Number;
    Name: string;
    Age: Number;
}

class UserList
{
    private users: Array<User> = new Array<User>();
    load(): void {
        $.getJSON("http://localhost:2643/Home/GetUsers",
            (data) => {
                this.users = data;
                alert("данные загружены");
            });
    }

     displayUser(): void {

         var table = '<table class="table" >'

         for (var i = 0; i < this.users.length; i++)
         {
             var tabRow = '<tr>' +
                 '<td>' + this.users[i].Id + '</td>' +'<td>' + this.users[i].Name + '</td>' +'<td>' + this.users[i].Age + '</td>' +
                 '</tr>';
             table += tabRow;
         }

         table += "</table>";
         $("#content").html(table);
    };

}

window.onload =  async () => {
    var userlist: UserList = new UserList();
   $("#loadbtn").click(() => { userlist.load(); });
   $("#displaybtn").click(() => { userlist.displayUser(); }
};