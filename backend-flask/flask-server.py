from flask import Flask
from flask_mysqldb import MySQL
import yaml

app = Flask(__name__)

#configure db 
db = yaml.safe_load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']


@app.route("/", methods=['GET', 'POST'])
def home():
    return "Hello, I'm flask!"

# Members API Route

# 

@app.route("/members")
def members():
    return {"members": ["member1", "Member2", "Member3"]}



if __name__ == "__main__":
    app.run(debug=True)