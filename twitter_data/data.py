import requests
import json

endpoint = "https://api.twitter.com/1.1/tweets/search/fullarchive/dev.json"

headers = {
    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANcgGgEAAAAAdLUDU%2BcPfTdqS5NxYOr%2FXRgvUIw%3DWKaPhwj79pWrpfw8CSPyWpKyIkEI5AlqOZOKDlA5aXeEtgW8Ot",
    "Content-Type": "application/json",
}

data = '{"query": "request for startups", "fromDate": "200603210000"}'

response = requests.post(endpoint, data=data, headers=headers).json()

print(json.dumps(response, indent=2))
