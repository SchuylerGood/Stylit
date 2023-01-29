from flask import Flask, request
import pandas as pd
import numpy as np
import pickle
import json
import requests
#from functions_only_save import make_face_df_save, find_face_shape
from conversion_to_data_frame import *
import os

def select_images(result):
    if result == 'heart':
        image_list = os.listdir('data/pics/heart')
        return image_list
    elif result == 'round':
        image_list = os.listdir('data/pics/round')
        return image_list
    elif result == 'square':
        image_list = os.listdir('data/pics/square')
        return image_list
    elif result == 'oval':
        image_list = os.listdir('data/pics/oval')
        return image_list
    elif result == 'long':
        image_list = os.listdir(r'C:\Users\dylan\Documents\GitHub\qhacks2023\model\data\pics\long')
        return image_list
    else:
        return []

def josnify(list): #converts list to json
    json_list = json.dumps(list) #converts list to json
    return json_list #returns json

# Setup flask server
app = Flask(__name__)

# Setup url route which will calculate
# total sum of array.
@app.route('/arraysum', methods = ['POST'])
def sum_of_array():
	data = request.get_json()
	print(data)
	test_photo = r'C:\Users\dylan\Documents\GitHub\qhacks2023\model\test2.jpg'
	
	df = pd.DataFrame(columns = ['0','1','2','3','4','5','6','7','8','9','10','11',	'12',	'13',	'14',	'15',	'16','17',
                             '18',	'19',	'20',	'21',	'22',	'23',	'24','25',	'26',	'27',	'28',	'29',
                             '30',	'31',	'32',	'33',	'34',	'35',	'36',	'37',	'38',	'39',	'40',	'41',
                             '42',	'43',	'44',	'45',	'46',	'47',	'48',	'49',	'50',	'51',	'52',	'53',
                             '54',	'55',	'56',	'57',	'58',	'59',	'60',	'61',	'62',	'63',	'64',	'65',
                             '66',	'67',	'68',	'69',	'70',	'71',	'72',	'73',	'74',	'75',	'76',	'77',
                             '78',	'79',	'80',	'81',	'82',	'83',	'84',	'85',	'86',	'87',	'88',	'89',
                             '90',	'91',	'92',	'93',	'94',	'95',	'96',	'97',	'98',	'99',	'100',	'101',
                             '102',	'103',	'104',	'105',	'106',	'107',	'108',	'109',	'110',	'111',	'112',	'113',
                             '114',	'115',	'116',	'117',	'118',	'119',	'120',	'121',	'122',	'123',	'124',	'125',
                             '126',	'127',	'128',	'129',	'130',	'131',	'132',	'133',	'134',	'135',	'136',	'137',
                             '138',	'139',	'140',	'141',	'142',	'143','A1','A2','A3','A4','A5','A6','A7','A8','A9',
                            'A10','A11','A12','A13','A14','A15','A16','Width','Height','H_W_Ratio','Jaw_width','J_F_Ratio',
                             'MJ_width','MJ_J_width'])

	style_df = pd.DataFrame()
	style_df = pd.DataFrame(columns = ['face_shape','hair_length','location','filename','score'])
	make_face_df_save(test_photo,2035,df)

	loaded_model = pickle.load(open(r'C:\Users\dylan\Documents\GitHub\qhacks2023\model\mlp_model.sav', 'rb'))
	result = loaded_model.predict(df)
	image_list = select_images(result)
	json_list =josnify(image_list)
	print(json_list)
	output_data = {'photos': json_list}

	# Data variable contains the
	# data from the node server

	# Return data in json format
	return json.dumps(output_data)

if __name__ == "__main__":
	app.run(port=5000)
