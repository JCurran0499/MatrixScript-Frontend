## MatrixScript Frontend
#### MatrixScript is a simple and straightforward interpreted command language for calculating linear algebra problems

There are two versions of MatrixScript. One is written in [Java](https://github.com/JCurran0499/MatrixScript-Backend) and serves as an API, fronted by a Node.js React web layer (here). The other is in Python (coming soon) and will serve as a Lambda function behind an AWS API Gateway.

### Frontend and Backend Servers

This project is designed to be run on two different servers, a frontend and backend. This repository represents the *frontend*. Below are instructions for setting up and running the frontend server. In many cases, especially your local device, it is acceptable to run both on the same host. However, it is best practice to set up independent public servers (ex: virtual machines) for this purpose. <br/> <br/>
The frontend will be accessed by users through the internet on HTTP port 80, and the backend will be accessed exclusively by the frontend on port 4567. Configure your Security Groups as such.

### Download and Installation

The download tools provided to you in this repository are based on the Red Hat Linux OS distributions popular with basic AWS EC2 instances, including AWS Linux, CentOS, and Fedora. For other servers and virtual machines, the commands may be slightly different. <br/> <br/>
To check that your OS matches this distribution, run `yum --version` and verify that your OS recognizes the YUM package installer. <br/>
If not, then you must install Git and Java in a way that matches your OS. Once this is done, the project will run on your OS perfectly fine. 
<br/>
<br/>

### Backend Setup
#### Download Git
```
sudo yum install git
git --version
```

#### Download Project Repo
```
git clone https://github.com/JCurran0499/MatrixScript.git
```

#### Give .sh Permissions and Install Java
```
cd MatrixScript
chmod u+x backend/start.sh
chmod u+x install_backend.sh
./install_backend.sh
```

#### Check Version
```
java --version
```

#### Allow Frontend CORS Permissions
Use `cd backend` to enter the backend directory. From here, edit the **.env** file, and fill in your front server's IP address or domain in the `FRONTEND` value. This way, your web app backend will be able send CORS permissions to your frontend.
<br/>
<br/>

#### Run the Program
```
cd backend
./start.sh
```

From here, the MatrixScript API can be accessed on port 4567, at `<server_domain_or_ip>:4567`.
<br/>
<br/>
### Frontend Setup
#### Download Git
```
sudo yum install git
git --version
```

#### Download Project Repo
```
git clone https://github.com/JCurran0499/MatrixScript.git
```

#### Give .sh Permissions and Install Node
```
cd MatrixScript
chmod u+x install_frontend.sh
./install_frontend.sh
```

#### Check Versions
```
node --version
npm --version
```

#### Integrate Backend
Use `cd frontend` to enter the frontend directory. From here, edit the **.env** file, and fill in your backend server's IP address or domain in the `REACT_APP_BACKEND` value. This way, your web app frontend will be able to communicate with your backend.
<br/>
<br/>

#### Run the Program
```
cd frontend
sudo npm start
```

From here, the MatrixScript UI can be accessed on your standard HTTP port, at `<server_domain_or_ip>`.
