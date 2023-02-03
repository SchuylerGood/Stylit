from flask import Flask, request
import json

# Setup flask server
app = Flask(__name__)

# Setup url route which will calculate
# total sum of array.
@app.route('/arraysum', methods = ['POST'])
def sum_of_array():
	print("Made a post request")
	data = request.get_json()
	print("Made a post request")
	print(data)

	# Data variable contains the
	# data from the node server
	
	result = ("thats hot") # calculate the sum

	# Return data in json format
	return json.dumps({"result":result})

if __name__ == "__main__":
	app.run(port=5000)
