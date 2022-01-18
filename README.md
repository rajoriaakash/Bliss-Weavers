# Bliss-Weavers
It is an e-commerce website for supporting and encouraging rural women of India.

This application is being built using MERN.
## Setting up the project in your local environment💻
1. Make sure [Node.js](https://nodejs.org/en/download/) is installed in your system.
2. Fork this repository.
3. Clone the **forked** repository:
5. `git clone https://github.com/rajoriaakash/Bliss-Weavers.git`
7. Make a folder named `config` inside `src`.
8. Create a file named `default.json` inside `config`.
9. Add your MongoDb connection url inside this file as : 
```
{
    "dbURI": "YOUR DB URI",
    "jwtsecret": "your jwt secret",
    "StripeAPIKey": "YOUR STRIPE SECRET API KEY"
}
```
10. Run the app by typing `nodemon` in terminal.
