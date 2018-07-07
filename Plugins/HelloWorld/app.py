from flask import Flask
import requests
import time


app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World! I am a sample plugin'

def register_site(site_name, site_url):
    core_api_url = 'http://core-api:5000/api/plugin-sites/'
    print('register site in core-api: ' + core_api_url)
    resp = requests.post(core_api_url, json={"Name": site_name, "Url": site_url })
    resp.raise_for_status()
    print('site ' + site_url + ' registered under name ' + site_name)
    return

if __name__ == "__main__":
    register_site("Hello World", "http://localhost:5001/")
    app.run(host="0.0.0.0", port=5001,debug=False)