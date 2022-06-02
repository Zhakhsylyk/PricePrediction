import numpy as np
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS


app = Flask(__name__)
CORS(app, support_credentials=True)
model = pickle.load(open('model.pkl','rb'))

@app.route('/predict',methods=['POST','GET'])
def predict():
    data = request.get_json(force=True)
    inputValues = np.array(data).reshape((1,-1))
    prediction = model.predict(inputValues)
    print(prediction[0])
    return jsonify(str(prediction[0]))

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000, debug=True)

