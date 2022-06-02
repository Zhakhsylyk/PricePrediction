import requests

url = 'http://localhost:5000/predict'
data=[]

r = requests.post(url,data)
print(r.json())