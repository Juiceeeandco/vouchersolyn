body {
  text-align: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  background: #ffeef8;
  padding: 10px;
  margin: 0;
  color: #ff69b4;
}

h1 {
  font-size: 28px;
  margin-top: 20px;
}

p {
  font-size: 18px;
}

.wheel-container {
  margin: 30px auto;
  max-width: 90%;
}

#wheel {
  width: 100%;
  max-width: 300px;
  height: 300px;
  border: 10px dotted #ff69b4;
  border-radius: 50%;
  margin: 0 auto 20px;
  background: conic-gradient(
    #ffb6c1 0% 16.6%, 
    #ffccff 16.6% 33.2%, 
    #ffe4e1 33.2% 49.8%, 
    #ffc0cb 49.8% 66.4%, 
    #ffb3d9 66.4% 83%, 
    #ff99cc 83% 100%
  );
  transition: transform 3s ease-out;
}

button {
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;
  background-color: #ff69b4;
  color: white;
  border: none;
}

button:hover {
  background-color: #e055a2;
}

.visit-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  font-size: 16px;
  background-color: #ffd1dc;
  color: #ff1493;
  padding: 10px 20px;
  border-radius: 20px;
}

.visit-link:hover {
  background-color: #ffb6c1;
}

#result {
  margin-top: 20px;
}

#result img {
  max-width: 90%;
  height: auto;
  border-radius: 12px;
}

