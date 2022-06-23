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

# get certain menu
# @app.route(f"/menu_id=<id>")
# def certainMenu(id):
#     cur = mysql.connection.cursor()
#     cur.execute(f"SELECT * FROM menus WHERE menus_id={id}") # menu_id is variable
#     menusDetails = cur.fetchall()
#     cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={id}")
#     menuName = cur.fetchall()[0][0]
#     cur.execute(f"SELECT * FROM {menuName}")
#     menuItems = cur.fetchall()
#     return render_template('certainMenu.html', menusDetails=menusDetails, menuItems=menuItems) 


# get certain item
@app.route(f"/item_id=<id>+<menu_id>")
def certainItem(id, menu_id):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={menu_id}")
    targetMenu = cur.fetchall()[0][0]
    cur.execute(f"SELECT * FROM {targetMenu} WHERE {targetMenu}_id={id}")
    item = cur.fetchall()
    # return render_template('menuItem.html', item=item) 
    response = jsonify(item)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

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


# ================== in progress



# ================== end of in progress

# executing db queries
def executeDBQuery(choosenMenu_actual, col_name):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT {choosenMenu_actual}_{col_name} FROM {choosenMenu_actual}")
    data = cur.fetchall()
    return data
# choosen menu
@app.route(f"/menu_id=<id>", methods=["GET"])
def certainMenu(id):
    cur = mysql.connection.cursor()
    response = []

    cur.execute(f"SELECT menus_actual_name FROM menus WHERE menus_id={id}")
    choosenMenu_actual = cur.fetchall()[0][0]
    cur.execute(f"SELECT * FROM {choosenMenu_actual}")

    response.append(executeDBQuery(choosenMenu_actual, "name"))
    response.append(executeDBQuery(choosenMenu_actual, "description"))
    response.append(executeDBQuery(choosenMenu_actual, "link"))
    response.append(executeDBQuery(choosenMenu_actual, "scanLink"))
    api_response = jsonify(response)
    api_response.headers.add('Access-Control-Allow-Origin', '*')
    return api_response
    # response{
    #   [0][id] // id of the menu you chose
    #   [1][choosenMenu]   // name of the menu you chose
    #   [2][item ID]   // ID of the items in the choisen menu
    #   [3][item name] // name of the item in the choosen menu
    #   [4][item description] // description of the item in the choosen menu
    #   [5][item link] // link to img of the item in the choosen menu
    #   [6][item scanLink] // link to 3d scan of the item in the choosen menu
    #   [7][belongs_to_id] // id of the menu to which one item belongs (same as choosen menu)
    # }


# all menus list
@app.route("/allmenus", methods=["GET"])
def allMenus():
    cur = mysql.connection.cursor()
    menu_list = []
    api_response = []
    cur.execute("SELECT menus_name FROM menus")
    menu_list.append(cur.fetchall())

    cur.execute("SELECT menus_id FROM menus")
    menu_list.append(cur.fetchall())

    api_response = jsonify(menu_list)

    # api_response
    api_response.headers.add('Access-Control-Allow-Origin', '*')
    return api_response

# response with name, description, img link and 3d scan link
@app.route("/allitems_detailed", methods=["GET"])
def allitems_detailed():
    cur = mysql.connection.cursor()
    tmp = []
    allItems=[]
    api_response = []
    cur.execute("SELECT menus_actual_name FROM menus")
    allMenus_actual_name=cur.fetchall()
    cur.execute("SELECT menus_name FROM menus")
    for each_menu in allMenus_actual_name:
        tmp = []
        cur.execute(f"SELECT {each_menu[0]}_name from {each_menu[0]}")
        tmp.append(cur.fetchall())
        cur.execute(f"SELECT {each_menu[0]}_description from {each_menu[0]}")
        tmp.append(cur.fetchall())
        cur.execute(f"SELECT {each_menu[0]}_link from {each_menu[0]}")
        tmp.append(cur.fetchall())
        cur.execute(f"SELECT {each_menu[0]}_scanLink from {each_menu[0]}")
        tmp.append(cur.fetchall())
        allItems.append(tmp)
    api_response=jsonify(allItems[0])
    api_response.headers.add('Access-Control-Allow-Origin', '*')
    return api_response


@app.route("/allitems", methods=["GET"])
def allItems_organized():
    cur = mysql.connection.cursor()
    # final response
    allItems_organized = [] 

    # json response
    api_response = []

    itemsID = []
    cur.execute("SELECT menus_id FROM menus")
    allMenusID = cur.fetchall()
    cur.execute("SELECT menus_actual_name FROM menus")
    allMenus_actual_name = cur.fetchall()
    allMenusID_allItems = []
    # allMenusID_allItems.append(allMenusID)
    # all menu items in one array
    for id, menuID in enumerate(allMenusID):
        cur.execute(f"SELECT {allMenus_actual_name[id][0]}_id FROM {allMenus_actual_name[id][0]}")
        items = cur.fetchall()
        itemsID.append(items)
    allMenusID_allItems.append(itemsID)
    allItems_organized = allMenusID_allItems
    api_response = jsonify(allItems_organized)
    api_response.headers.add('Access-Control-Allow-Origin', '*')
    return api_response 
    # response{
    #   [0][menusID],
    #   [1][menusID][itemsID],
    # }


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