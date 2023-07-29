## MatrixScript Frontend
#### MatrixScript is a simple and straightforward interpreted command language for calculating linear algebra problems

This version of MatrixScript is written in [Java](https://github.com/JCurran0499/MatrixScript-Backend) found in another repository and serves as an API, fronted by a Node.js React web layer (here). <br/>
Each command is sent by this frontend with its corresponding token (assigned to users) to the API, which responds with the output.
<br/>
<br/>
⭐ The **official MatrixScript documentation** can be found [here](https://github.com/JCurran0499/MatrixScript-Docs/blob/main/docs.md).

### Frontend and Backend Servers

This project is designed to be run with a separate frontend and backend. This repository represents the **frontend**, and below are instructions for setting up and running the frontend server. 
The backend can be found [here](https://github.com/JCurran0499/MatrixScript-Backend).<br/>

### Frontend Port

The frontend will be accessed by users through the internet on the port of your choosing. The default in this repository is port **80**. In order to avoid admin permissions blocks associated with ports lower than 1024, this can be easily changed using the ```.env``` file the project root. Simply change the ```PORT``` value in this file. For example, admin users can run on the default HTTP port 80 or, if you have an SSL certificate, the HTTPS port 443, but non-admin users will be required to change the environment variable to another port.

### Download and Installation

The tools provided to you in this repository are based on Linux OS distributions. 
This can include Amazon Linux, Red Hat, Debian, and more. 
For other servers and virtual machines, the commands may be slightly different.
<br/>
<br/>

### Frontend Setup
#### Requirements
- OS: ``Linux`` (preferred) or ``MacOS`` or ```Windows```
- NodeJS: ```NodeJS v18.4```
- NPM: ```NPM v9.3```

#### Download Project Repo
```
git clone https://github.com/JCurran0499/MatrixScript-Frontend.git
cd MatrixScript-Frontend
```

#### Integrate Backend
IF desired, edit the ```.env``` file, and fill in your backend server's IP address or domain in the `REACT_APP_BACKEND` value. This way, your web app frontend will be able to communicate with your backend. <br/>
This value determines where your frontend reaches out to access your backend.
By default, this value is set to ```http://localhost:4567``` and therefore allows your local frontend to access your backend HTTP port 4567.<br/>
This is the default place for running the backend, and only needs to be changed if you are accessing a backend located elsewhere.
As mentioned above, this file can also be used to change the access port for users on the internet. This is done by changing the `PORT` value.
<br/>
<br/>

#### Install Packages
```
npm install
```

#### Run the Program
```
sudo npm start
```

From here, the MatrixScript UI can be accessed locally on your defined port, at `<server_domain_or_ip>:<server_port>`.
