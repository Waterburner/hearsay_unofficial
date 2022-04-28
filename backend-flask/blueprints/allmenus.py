from flask import Blueprint

allmenus = Blueprint('allmenus', __name__)

@allmenus.route("/allmenus")
def allMenus():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM menus")
    menusDetails = cur.fetchall()
    return render_template('../index.html', menusDetails=menusDetails)
    # returns: 
    # menusDetails[0] - id
    # menusDetails[1] - name of the menu