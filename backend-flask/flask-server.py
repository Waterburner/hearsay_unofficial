
from flask import Flask, render_template, request, redirect
from flask_mysqldb import MySQL
import yaml

app = Flask(__name__)

#configure db 
db = yaml.safe_load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password'] 
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)

# @app.route("/", methods=['GET', 'POST'])
# def home():
    # return #something

# @app.route("/allmenus")
# def allMenus():

# =================== testing ==================

class AllMenus:
    def __init__(menu, number, id, name):
        menu.id = id
        menu.name = name

@app.route('/', methods=['GET'])
# def index():
    # Fetch form data
    # cur = mysql.connection.cursor()
    # cur.execute("SELECT * FROM menus")
    # menusDetails = cur.fetchall()
    # return render_template('index.html', menusDetails=menusDetails)

def index():
    # Fetch form data
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM menus")
    menusDetails = cur.fetchall()
    
    m1 = menusDetails

    return render_template('index.html', menusDetails=menusDetails, m1=m1)


@app.route("/test")
def test():
    cur = mysql.connection.cursor()
    resultValue = cur.execute("SELECT * FROM menus")
    if resultValue > 0:
        userDetails = cur.fetchall()
        return render_template('users.html', userDetails=userDetails)

# =================== end of testing ==================
        

    # if request.method == 'GET':
        #fetch data
        
        # all_menus_id = [ SELECT menus_id FROM menus; ] in array
        # all_menus_name = [ SELECT menus_name FROM menus; ] in array

        #or
        # all_menus_data = [menus_id[0], menus_name[0], menus_id[1], menus_name[1] … menus_id[n], menus_name[n] ]

        # cur = mysql.connection.cursor()
        # resultValue = cur.execute("SELECT * from menus")
        # if resultValue > 0:
        #     all_menus_data = cur.fetchall()
        #     return #something?

if __name__ == "__main__":
    app.run(debug=True)