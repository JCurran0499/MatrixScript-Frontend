## MatrixScript Frontend
#### MatrixScript is a simple and straightforward interpreted command language for calculating linear algebra problems

There are two versions of MatrixScript. One is written in [Java](https://github.com/JCurran0499/MatrixScript-Backend) and serves as an API, fronted by a Node.js React web layer (here). The other is in Python (coming soon) and will serve as a Lambda function behind an AWS API Gateway.

### Frontend and Backend Servers

This project is designed to be run on two different servers, a frontend and backend. This repository represents the **frontend**. Below are instructions for setting up and running the frontend server. The backend can be found [here](https://github.com/JCurran0499/MatrixScript-Backend).<br/>
In many cases, especially your local device, it is acceptable to run both servers on the same host. However, it is best practice to set up independent public servers (ex: virtual machines) for this purpose.

### Frontend Port

The frontend will be accessed by users through the internet on the port of your choosing. The default in this repository is port **80**. In order to avoid admin permissions blocks associated with ports lower than 1024, this can be easily changed using the *.env* file the project root. For example, admin users can run on the default HTTP port 80 or, if you have an SSL certificate, the HTTPS port 443, but non-admin users will be required to change the environment variable to another port. Once you've decided on your port, or decided to keep the default port 80, configure your Security Group as such.

### Download and Installation

The download tools provided to you in this repository are based on the Red Hat Linux OS distributions popular with basic AWS EC2 instances, including AWS Linux, CentOS, and Fedora. For other servers and virtual machines, the commands may be slightly different. <br/> <br/>
To check that your OS matches this distribution, run `yum --version` and verify that your OS recognizes the YUM package installer. <br/>
If not, then you must install Git and Java in a way that matches your OS. Once this is done, the project will run on your OS perfectly fine. 
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
git clone https://github.com/JCurran0499/MatrixScript-Frontend.git
```

#### Give .sh Permissions and Install Node
```
cd MatrixScript-Frontend
chmod u+x install.sh
./install.sh
```

#### Check Versions
```
node --version
npm --version
```

#### Integrate Backend
Edit the **.env** file, and fill in your backend server's IP address or domain in the `REACT_APP_BACKEND` value. This way, your web app frontend will be able to communicate with your backend. <br/>
As mentioned above, this file can also be used to change the access port for users on the internet. This is done by changing the `PORT` value.
<br/>
<br/>

#### Run the Program
```
sudo npm start
```

From here, the MatrixScript UI can be accessed on your port, at `<server_domain_or_ip>:<server_port>`.
