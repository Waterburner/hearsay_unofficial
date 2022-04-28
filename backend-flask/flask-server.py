
from flask import Flask, render_template, request, redirect, jsonify
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
# def certainMenu(id):
#     cur = mysql.connection.cursor()
#     cur.execute(f"SELECT * FROM menus WHERE menus_id={id}") # menu_id is variable
#     menusDetails = cur.fetchall()
#     cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={id}")
#     menuName = cur.fetchall()[0][0]
#     cur.execute(f"SELECT * FROM {menuName}")
#     menuItems = cur.fetchall()
#     return render_template('certainMenu.html', menusDetails=menusDetails, menuItems=menuItems) 
def certainMenu(id):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT menus_name FROM menus WHERE menus_id={id}") # menu_id is variable
    choosenMenu = cur.fetchall()
    cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={id}")
    menuName = cur.fetchall()[0][0]
    cur.execute(f"SELECT * FROM {menuName}")
    menuItems = cur.fetchall()

    response = choosenMenu+menuItems
    return jsonify(response) 

# get certain item
@app.route(f"/item_id=<id>+<menu_id>")
def certainItem(id, menu_id):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={menu_id}")
    targetMenu = cur.fetchall()[0][0]
    cur.execute(f"SELECT * FROM {targetMenu} WHERE {targetMenu}_id={id}")
    item = cur.fetchall()
    return render_template('menuItem.html', item=item) 

# =====================================================================
    # NOT WORKING :(

    # END OF NOT WORKING :(
# =====================================================================

@app.route("/deleteitem", methods=['GET','POST'])
@app.route("/deleteItem", methods=['GET','POST'])
def deleteItem():
    if request.method=='POST':
        item = request.form
        itemMenuID = item['menu']
        itemID = item['id']
        cur = mysql.connection.cursor()
        cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={itemMenuID}")
        menuName = cur.fetchall()[0][0]
        cur.execute(f"SELECT {menuName}_name, {menuName}_description FROM {menuName} WHERE {menuName}_id={itemID}")
        itemToDelete = cur.fetchall()[0]
        return redirect(f"/confirmDeletion={itemMenuID}/{itemID}/{menuName}/{itemToDelete[0]}/{itemToDelete[1]}")
    return render_template("deleteItem.html")

    # mysql.connection.commit()
    # cur.close()
    # return redirect(f"/menu_id={itemMenuID}")


@app.route("/confirmDeletion=<itemMenuID>/<itemID>/<menuName>/<itemToDeleteName>/<itemToDeleteDescription>", methods=['GET','POST'])
def confirmDeletion(itemMenuID, itemID, menuName, itemToDeleteName, itemToDeleteDescription):
    if request.method=='POST':
        deletion = request.form
        deletionConfirmation = deletion['confirmation']
        if deletionConfirmation == "1":
           cur = mysql.connection.cursor() 
           cur.execute(f"DELETE FROM {menuName} WHERE ({menuName}_id={itemID})")
           mysql.connection.commit()
           cur.close()
           return redirect(f"/menu_id={itemMenuID}")
        return redirect(f"/menu_id={itemMenuID}")
    return render_template('confirmDeletion.html', itemMenuID=itemMenuID, itemID=itemID, menuName=menuName, itemToDeleteName=itemToDeleteName, itemToDeleteDescription=itemToDeleteDescription)





@app.route("/newitem", methods=['GET','POST'])
@app.route("/newItem", methods=['GET','POST'])
def newItem():
    if request.method=='POST':
        item = request.form
        itemMenuID = item['menu']
        itemName = item['name']
        itemDescription = item['description']
        itemImgLink = item['img-link']
        # itemScanLink = item['scan-link']
        cur = mysql.connection.cursor()
        cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={itemMenuID}")
        menuName = cur.fetchall()[0][0]
        cur.execute(f"INSERT INTO {menuName}({menuName}_name, {menuName}_description, {menuName}_link, {menuName}_belongs_to_id) VALUES('{itemName}', '{itemDescription}', '{itemImgLink}', {itemMenuID})")

        # cur.execute(f"INSERT INTO brunch_menu (`brunch_menu_name`, `brunch_menu_description`, `brunch_menu_link`, `brunch_menu_belongs_to_id`) VALUES ('Texas Omlette', 'Omlette with smoked brisket, tomatoes, topped with avocado, pico, jallapenio', 'https://testing.com/lk', '2')")
        # cur.execute(f"INSERT INTO dinner_menu (dinner_menu_name, dinner_menu_description, dinner_menu_link, dinner_menu_belongs_to_id) VALUES ('testName', 'testDes', 'testLink', 1)")
        mysql.connection.commit()
        cur.close()
        return redirect('/allitems')
    return render_template('newItem.html')

@app.route(f"/allitems")
def allItems():
    cur = mysql.connection.cursor()
    cur.execute("SELECT menus_actual_name FROM menus")
    allMenus = cur.fetchall()
    # for loop to go thrugh allMenus and save all items in allItems
    allItems = []
    for menu in allMenus:
        cur.execute(f"SELECT * FROM {menu[0]}")
        # newItems = cur.fetchall()
        # allItems.append(newItems)
        allItems.append(cur.fetchall())
    return render_template('allItems.html', allMenus=allMenus, allItems=allItems) 




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