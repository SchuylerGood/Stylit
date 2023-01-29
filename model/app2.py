from flask import Flask, request
import pandas as pd
import numpy as np
import pickle
import json
import requests
#from functions_only_save import make_face_df_save, find_face_shape
from conversion_to_data_frame import *
import os
from PIL import Image
import base64
import firebase_admin
from firebase_admin import credentials
#from firebase_admin import storage
from google.cloud import storage
from google.oauth2.credentials import Credentials
import google.auth.credentials
import datetime


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
        image_list = os.listdir('data/pics/long')
        return image_list
    else:
        return []

def josnify(list): #converts list to json
    json_list = json.dumps(list) #converts list to json
    return json_list #returns json

def get_image():
    img_data = 'ZmlsZTovLy92YXIvbW9iaWxlL0NvbnRhaW5lcnMvRGF0YS9BcHBsaWNhdGlvbi9BMTk3QzJFOC1BQTk2LTQ4NUYtOUU0OS1DMjc1NDk0MDg1QjQvTGlicmFyeS9DYWNoZXMvRXhwb25lbnRFeHBlcmllbmNlRGF0YS8lMjU0MGFub255bW91cyUyNTJGcGhvbmVBcHAtMzdhZjM1ZmQtYzY1ZS00ZDIwLWJiNzItYmE0ZDU0NGExZTI4L0ltYWdlUGlja2VyLzg1NTg5MkZBLTk3RTctNDc5NC1CMTEwLUE2QjBGMjYxODIzMS5qcGc='
    image_data = base64.b64decode(img_data)
    print(image_data)
    with open("image.jpg", "wb") as f:
        f.write(image_data)
        print(f)
        img = Image.open(image_data)
        img.save('image.jpg', 'JPEG')
        f.close()
    

cred = credentials.Certificate(r"C:\Users\qayse\OneDrive\Desktop\qhacks2023\model\fir-auth-5ed49-firebase-adminsdk-5nhpk-befb7469dc.json")
# Fetch the service account key JSON file contents

# Initialize the app with a service account, granting admin privileges
app = firebase_admin.initialize_app(cred, {
    'storageBucket': '<gs://fir-auth-5ed49.appspot.com>.appspot.com',
}, name='storage')

buckets = storage.bucket(app="QHacks2023 Project")
blob = buckets.blob("<gs://fir-auth-5ed49.appspot.com/tempImages/Image-name>")

print(blob.generate_signed_url(datetime.timedelta(seconds=300), method='GET'))
#get_image()
test_photo = 'image.jpg'
#test_photo = r'C:\Users\qayse\OneDrive\Desktop\qhacks2023\model\test2.jpg'
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

loaded_model = pickle.load(open('mlp_model.sav', 'rb'))
result = loaded_model.predict(df)
image_list = select_images(result)
json_list =josnify(image_list)
print(json_list)
output_data = {'photos': json_list}

headers = {'content-type': 'application/json'}
response = requests.post('http://localhost:3000/data', data=json.dumps(output_data), headers=headers)