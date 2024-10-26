import requests

# Define the API endpoint URL
url = "http://localhost:5051/api/getreport"  # Update to your server's URL if different

# JSON data to send in the request
json_data = {
    'userid': 7295004615,
    'What specific skills do you believe are essential for this role at American Express?': 0,
    'Could you provide more details about your experience with data pipelines and how you have implemented them in your past projects?': 0,
    'Could you please share specific techniques or frameworks you have utilized in model training and fine-tuning?': 5,
    'How do you typically handle overfitting when fine-tuning your models?': 0
}

# Send the POST request
response = requests.post(url, json=json_data)

# Print the response from the server
print(response.status_code)  # Status code of the response
print(response.json())       # JSON response from the server, if any
print(response.text) 