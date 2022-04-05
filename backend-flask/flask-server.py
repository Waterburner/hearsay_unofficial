
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

@app.route("/")
def home():
    greeting = "<h1>Hearsay API </h1>"
    return greeting

#get all menus
@app.route("/allmenus")
def allMenus():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM menus")
    menusDetails = cur.fetchall()
    return render_template('index.html', menusDetails=menusDetails)
    # returns: 
    # menusDetails[0] - id
    # menusDetails[1] - name of the menu


# get certain menu
@app.route(f"/menu_id=<id>")
def certainMenu(id):
    cur = mysql.connection.cursor()
    # cur.execute(f"SET @menu_id = {id}")
    cur.execute(f"SELECT * FROM menus WHERE menus_id={id}") # menu_id is variable
    menusDetails = cur.fetchall()
    return render_template('index.html', menusDetails=menusDetails) 

# =================== testing ==================

# class AllMenus:
#     def __init__(menu, number, id, name):
#         menu.id = id
#         menu.name = name

# @app.route('/', methods=['GET'])

# def index():
    # Fetch form data
    # cur = mysql.connection.cursor()
    # cur.execute("SELECT * FROM menus")
    # menusDetails = cur.fetchall()
    # return render_template('index.html', menusDetails=menusDetails)

# def index():
#     # Fetch form data
#     cur = mysql.connection.cursor()
#     cur.execute("SELECT * FROM menus")
#     menusDetails = cur.fetchall()
    
#     m1 = menusDetails

#     return render_template('index.html', menusDetails=menusDetails, m1=m1)


# @app.route("/test")
# def test():
#     cur = mysql.connection.cursor()
#     resultValue = cur.execute("SELECT * FROM menus")
#     if resultValue > 0:
#         userDetails = cur.fetchall()
#         return render_template('users.html', userDetails=userDetails)

# =================== end of testing ==================
        


if __name__ == "__main__":
    app.run(debug=True)