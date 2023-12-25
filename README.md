# Summarizer
React-flask webapp which uses huggingface🤗 summarizer model in the Backend.

## How to run:

### BackEnd
1. Creating a Virtual Enviornment
```
For Mac : 
python3 -m venv venv

For windows :
python -m venv <path>
```
2. Activate the enviornment
```
For Mac : 
source venv/bin/activate

For windows :
.\<env-name>\Scripts\activate
```
3. Install packages
```
pip3 install Flask transformers
```
4. Running Backend
```
python3 server.py
```
Now the server will be running on http://localhost:9874

### FrontEnd
1. Installing dependencies
```
npm install
```
This line will install all the packages in the package.json file.
2. Run
```
npm start
```
The Client is running on http://localhost:3000

🌸 The webapp is running successfully 🌸
