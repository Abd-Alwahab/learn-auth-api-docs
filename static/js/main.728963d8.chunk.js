(this["webpackJsonplearn-auth-docs"]=this["webpackJsonplearn-auth-docs"]||[]).push([[0],{27:function(e,s,t){},28:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),n=t.n(a),o=t(11),i=t.n(o),r=(t(27),t(3)),d=t(2);t(28);function l(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"header__nav",children:Object(c.jsx)("div",{className:"nav__content",children:Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("h1",{className:"logo",children:"AbdThy"}),Object(c.jsxs)("ul",{className:"list",children:[Object(c.jsx)("li",{className:"item",children:Object(c.jsx)(r.b,{className:"link",to:"/home",children:"Home"})}),Object(c.jsx)("li",{className:"item",children:Object(c.jsx)(r.b,{className:"link",to:"/docs",children:"Docs"})}),Object(c.jsx)("li",{className:"item",children:Object(c.jsx)(r.b,{className:"link",to:"/about",children:"About"})}),Object(c.jsx)("li",{className:"item",children:Object(c.jsx)(r.b,{className:"link",to:"/developer",children:"Developer"})})]})]})})}),Object(c.jsx)("div",{className:"nav_clear"})]})}function j(){return Object(c.jsxs)("div",{className:"about",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"About This Project"}),Object(c.jsx)("p",{className:"dark",children:"This is an open source project, anything in this project is free for anyone who want to use or to contibrute to, it built by abd alwahab who is a full stack developer, this is project is build to help beginners developer to build real world projects base on real backend"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Toos Used in This Project"}),Object(c.jsx)("p",{className:"dark",children:"Tools used in this backend are nodejs as a backend server and mongoDB as a databse and json web token for authinticate users and sendgrid as a mailing service and using cloudinary as an image hosting"})]})]})}var h=t.p+"static/media/abdalwahab.5506f359.png",b=t(5),p=function(){return Object(c.jsx)("div",{className:"preview-profile",children:Object(c.jsx)("div",{className:"preview-profile-header",children:Object(c.jsxs)("div",{className:"preview-profile-header-box",children:[Object(c.jsx)("div",{className:"preview-profile-header-image-container",children:Object(c.jsx)("img",{src:h,alt:"",className:"preview-profile-header-image"})}),Object(c.jsxs)("div",{className:"preview-profile-header-content",children:[Object(c.jsx)("h1",{children:"Abd Alwahab Abdallah"}),Object(c.jsx)("p",{children:"Hi, I\u2019m Abd Alwahab, a Full Stack Software Developer who loves building high performance and scalable products. I recently developed a web app using React , Node , Express and MongoDB that lets user order food online. I\u2019d love to combine my passion for learning and teaching with my software development skills to continue building personalized learning products for people."}),Object(c.jsxs)("div",{className:"preview-profile-header-icons",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/abd-alwahab/",children:Object(c.jsx)(b.g,{color:"#0072b1",size:30})}),Object(c.jsx)("a",{href:"https://github.com/Abd-Alwahab",children:Object(c.jsx)(b.f,{color:"#222",size:30})}),Object(c.jsx)("a",{href:"https://twitter.com/codeWithAbd",children:Object(c.jsx)(b.h,{color:"#00acee",size:30})}),Object(c.jsx)("a",{href:"https://codewithabd.web.app",children:Object(c.jsx)(b.c,{color:"#222",size:30})}),Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UCZz14Hj5YxrWse0lc9Bf1GQ",children:Object(c.jsx)(b.i,{color:"red",size:30})})]})]})]})})})};var m=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"docs_desc dark",children:"This Action that we need to take requires a logged in user."}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"docs_desc",children:"To Verify that the user is logged in then we need to send an http header to the api and this http header contain a valid json web token and this will ensure that the api understand that this is a looged in user."}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"http-header-name"}),Object(c.jsx)("th",{children:"value"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"token"}),Object(c.jsx)("td",{children:"valid json web token"}),Object(c.jsx)("td",{children:"True"})]})]})]})},u=t(12),O=t(21),x=t.n(O),g=t(18);var f=function(e){var s=e.text,t=e.endpoint,n=Object(a.useState)(!1),o=Object(u.a)(n,2),i=o[0],r=o[1];return Object(c.jsxs)("div",{onClick:function(){x()(t),g.b.success("Text Copied",{closeOnClick:!0,autoClose:1200,hideProgressBar:!0,onClose:function(){r(!1)}}),r(!0)},className:"textCopied-parent",children:[Object(c.jsxs)("span",{className:"hilight",children:[s," ",Object(c.jsx)("div",{className:"empty_space"})," ",t,i?Object(c.jsx)(b.d,{size:25,color:"green",className:"icon"}):Object(c.jsx)(b.e,{size:25,color:"#fff",className:"icon"})]}),Object(c.jsx)(g.a,{})]})};var w=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Delete Current User"}),Object(c.jsx)(m,{}),Object(c.jsx)("p",{className:"docs_desc",children:"To delete an existing account, you need to make a delete request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{text:"DELETE",endpoint:"http://localhost:3000/api/v1/users/me"}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"This will make a delete request to the api and it will try to deactivate your account."})]})},_=t.p+"static/media/step_1.03ce01e3.png",N=t.p+"static/media/step_2.430da148.png",v=t.p+"static/media/step_3.a6c4da91.png",y=t.p+"static/media/step_4.fa75a42e.png";var k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"How To Reset a User Password "}),Object(c.jsx)("p",{className:"docs_desc",children:"To add the reset password functionlity, you need to make a post request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{text:" POST",endpoint:"http://localhost:3000/api/v1/users/forgotpassword"}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"This will make a post request to the api and it will try send an email with the reset token for the user , however, In order for this to work then we need to provide some needed info to veryfiy this proccess, IN our case we need only a valid email that we have in our database."}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Property"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Email"}),Object(c.jsx)("td",{children:"True"})]})]}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"You need to send a json object that look like this:"}),Object(c.jsx)("img",{src:_,alt:"forgot password step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"This will try to check for the provided info and if everything is corect then it will send a passwrod reset token to the user email."}),Object(c.jsx)("img",{src:N,alt:"forgot password step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"The user should get an email in his/her email that has the reset password url and they can click on it and that should redirect the user to a password reset page"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"In the password reset page, we need to make a post request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{text:"POST",endpoint:"http://localhost:3000/api/v1/users/resetPassword/:token"}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"however, In order for this thing to work as it should then we need to send along the password reset token that the user recived in their email as a query parameter so the endpoint will look like this"}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"hilight m-m",children:["POST ",Object(c.jsx)("div",{className:"empty_space"})," ","http://localhost:3000/api/v1/users/resetPassword/",Object(c.jsx)("span",{className:"danger",children:"dfklahdlkjshzjksfhsksfkjsfskf"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"so the text that you can see in the red color is the password reset token and it has to be passed as a query parameter, along the token you need to send two more information in the request body to the api"}),Object(c.jsx)("img",{src:v,alt:"forgot password step",className:"docs__img"}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Property"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"password"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"passwordConfirm"}),Object(c.jsx)("td",{children:"True"})]})]}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"If you followed the mentioned steps then you should get a response that look something like this:"}),Object(c.jsx)("img",{src:y,alt:"forgot password step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"If so then that confirmed that the password for the user has been reseted and new json web token was created to log the user in."})]})};var T=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"dark",children:"To get All the users ain the datbase then you must be an admin to perform this action"}),Object(c.jsxs)("div",{className:"note_danger",children:[Object(c.jsx)("div",{className:"note",children:"Note"}),Object(c.jsx)("p",{className:"docs_desc",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["To make any user admin then you need to make this from the database Manualy"," "]}),Object(c.jsx)("li",{children:"Open your mongodb atlas account"}),Object(c.jsx)("li",{children:"Open the user collection in the database list"}),Object(c.jsx)("li",{children:"Click on the edit icon for any user"}),Object(c.jsx)("li",{children:"Change the role property from user to admin"}),Object(c.jsx)("li",{children:"Login again with this spesifc user to apply the changes"})]})})]})]})};var C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Get All Users"}),Object(c.jsx)(T,{}),Object(c.jsx)(m,{}),Object(c.jsx)("p",{className:"docs_desc",children:"To get all the users in our database, you need to make a get request to the following endpoint"}),Object(c.jsx)(f,{text:"GET",endpoint:"http://localhost:3000/api/v1/users/"}),Object(c.jsx)("p",{className:"docs_desc",children:"This will return an array of the users that we have in the database."})]})},S=t.p+"static/media/step_1.cab93635.png",P=t.p+"static/media/step_2.709a534b.png",A=t.p+"static/media/step_3.040964a1.png",I=t.p+"static/media/step_4.d2c9dd45.png",q=[t.p+"static/media/step_5.1eb8f7cc.png",t.p+"static/media/step_6.80852c32.png",t.p+"static/media/step_7.4837c64e.png",t.p+"static/media/step_8.41715121.png",t.p+"static/media/step_9.097ba13b.png",t.p+"static/media/step_10.c514d36e.png",t.p+"static/media/step_11.4233ca38.png",t.p+"static/media/step_12.593aad56.png",t.p+"static/media/step_13.ee1b43b5.png"],z=t(13),D=t.n(z);var U=function(){var e=Object(a.useState)(!1),s=Object(u.a)(e,2),t=s[0],n=s[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),r=i[0],d=i[1],l=Object(a.useState)(!1),j=Object(u.a)(l,2),h=j[0],p=j[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),x=O[0],g=O[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"How To Get Started"}),Object(c.jsxs)("p",{className:"docs_desc",children:["To get started you need to jump over to this"," ",Object(c.jsxs)("a",{href:"https://github.com/Abd-Alwahab/auth-system",className:"m-m",children:[" ","github repo"," "]})," ","and download the project to your local environment or you can use this command"," ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{endpoint:"git clone https://github.com/Abd-Alwahab/auth-system.git"}),Object(c.jsxs)("p",{className:"docs_desc",children:["Now, you have the project localy on your OS, its time for you to open it in your code editor (I use VSCode)",Object(c.jsx)("img",{src:S,alt:"open folder",className:"docs__img"})]}),Object(c.jsxs)("p",{className:"docs_desc",children:["Now, once you open the project in your code editor, we need to run the following command to install some npm packages that we need, so open your terminal in your code editor and run the following command",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{endpoint:"npm install"}),Object(c.jsx)("p",{className:"docs_desc",children:"That will go ahead and add the node_modules folder "}),Object(c.jsx)("img",{src:P,alt:"open folder",className:"docs__img"})]}),Object(c.jsxs)("p",{className:"docs_desc",children:["Once you have the node_modules folder added to your porject, now we need to create a file to store the environment variables that we need in order for our application to run, now if you are wondering why we are using environment variables here, well the answer is very simple its just to store secure and important information",Object(c.jsxs)("p",{className:"docs_desc",children:["To create the environment variables you need to run the follwoing command"," "]}),Object(c.jsx)(f,{endpoint:"touch .env"}),Object(c.jsxs)("p",{className:"docs_desc",children:["That will go ahead and add new file called .env to your project tree"," "]}),Object(c.jsx)("img",{src:A,alt:"open folder",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc",children:"Now We need to add the following environment variables to our file so our application cloud run"}),Object(c.jsxs)("div",{className:"hilight",children:["mongodb_url ",Object(c.jsx)("br",{}),"token_secret",Object(c.jsx)("br",{})," token_date",Object(c.jsx)("br",{}),"email_user ",Object(c.jsx)("br",{}),"email_password ",Object(c.jsx)("br",{}),"cloud_name ",Object(c.jsx)("br",{}),"cloud_api",Object(c.jsx)("br",{}),"cloud_secrit"]}),Object(c.jsx)("img",{src:I,alt:"open folder",className:"docs__img"})]})]}),Object(c.jsxs)("div",{className:"note_danger",children:[Object(c.jsx)("div",{className:"note",children:"Note"}),Object(c.jsx)("p",{className:"docs_desc",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Do not be confuse becuase of the number of the environment variables "}),Object(c.jsx)("li",{children:"Make sure to use the exact same name as shown in the screeshot otherwise thing will not work for you."})]})})]}),Object(c.jsx)("p",{className:"docs_desc",children:"Now let us undersatand what values to add to these environment variables, the first one is mongo_db , its your contection string that you will use to contect your api to mongoDB atlas"}),Object(c.jsxs)("p",{className:"docs_desc",children:["To get you contection string, you need to create an account here and"," ",Object(c.jsx)("a",{href:"https://www.mongodb.com/cloud/atlas",children:"MongoDB Atlas"})," , Once you have your account created then you need to follow these steps to get your contection string"]}),Object(c.jsxs)("div",{className:"steps_container",children:[Object(c.jsx)(D.a,{lazyRender:!0,open:t,transitionTime:900,transitionCloseTime:300,onClosing:function(){n(!1)},onOpening:function(){n(!0)},trigger:Object(c.jsxs)("button",{className:"btn-collaps",children:[Object(c.jsx)("div",{children:t?Object(c.jsx)(b.b,{size:"2em",color:"#fff"}):Object(c.jsx)(b.a,{size:"2em",color:"#fff"})}),Object(c.jsx)("h3",{children:"Show MondoDB Steps"})]}),triggerStyle:{backgroundColor:t?"green":"tomato",color:"#fff",cursor:"pointer",padding:"1rem .6rem",outlineStyle:"none",display:"block",transitionDuration:".5s"},children:q.map((function(e){return Object(c.jsx)("img",{src:e,alt:"mongo steps",className:"docs__img img_step"})}))}),Object(c.jsx)(D.a,{lazyRender:!0,open:h,transitionTime:900,transitionCloseTime:300,onClosing:function(){p(!1)},onOpening:function(){p(!0)},trigger:Object(c.jsxs)("button",{className:"btn-collaps",children:[Object(c.jsx)("div",{children:h?Object(c.jsx)(b.b,{size:"2em",color:"#fff"}):Object(c.jsx)(b.a,{size:"2em",color:"#fff"})}),Object(c.jsx)("h3",{children:h?"Close JSON Web Token Steps":"Show JSON Web Token Steps"})]}),triggerStyle:{backgroundColor:h?"green":"tomato",color:"#fff",cursor:"pointer",padding:"1rem .6rem",outlineStyle:"none",display:"block",transitionDuration:".5s"},children:Object(c.jsxs)("div",{className:"content_container",children:[Object(c.jsxs)("p",{className:"docs_desc",children:["If you followed the mongoDB steps then you should get you conection string , let us move to the next two environment variables, which will be the"," ",Object(c.jsx)("div",{className:"m-s",children:Object(c.jsxs)("div",{className:"dark",children:["token_secret ",Object(c.jsx)("br",{}),"token_date"]})})]}),Object(c.jsxs)("p",{className:"docs_desc",children:["These are very simple once , for the"," ",Object(c.jsx)("span",{className:"dark",children:"token_secret"}),", just give it any long text , juts make sure that is at least ",Object(c.jsx)("span",{className:"dark",children:" 32 charcters"}),", and for the ",Object(c.jsx)("span",{className:"dark",children:" token_date"}),", just give it any number plus the letter d, this will be used for as expire date for the json web token, in my case I used 90d, you can use the same as me."]}),Object(c.jsxs)("p",{className:"docs_desc",children:["Now Let us move to the next once which are:",Object(c.jsx)("div",{className:"m-s",children:Object(c.jsxs)("div",{className:"dark",children:["email_user ",Object(c.jsx)("br",{}),"email_password"]})})]})]})}),Object(c.jsx)(D.a,{lazyRender:!0,open:r,transitionTime:900,transitionCloseTime:300,onClick:function(){return d(!1)},onClosing:function(){d(!1)},onOpening:function(){d(!0)},trigger:Object(c.jsxs)("button",{className:"btn-collaps",children:[Object(c.jsx)("div",{children:r?Object(c.jsx)(b.b,{size:"2em",color:"#fff"}):Object(c.jsx)(b.a,{size:"2em",color:"#fff"})}),Object(c.jsx)("h3",{children:"Show SendGrid Steps"})]}),triggerStyle:{backgroundColor:r?"green":"tomato",color:"#fff",cursor:"pointer",padding:"1rem .6rem",outlineStyle:"none",display:"block",transitionDuration:".5s"},children:Object(c.jsxs)("ol",{className:"sub_list_item",children:[Object(c.jsxs)("li",{children:["Create an Account With ",Object(c.jsx)("a",{href:"https://sendgrid.com/",children:"SendGrid"})," "]}),Object(c.jsx)("li",{children:"Login into your account"}),Object(c.jsxs)("li",{children:["From your dashboard page , Expand The"," ",Object(c.jsx)("span",{className:"dark",children:"Email API "}),"Tap"]}),Object(c.jsxs)("li",{children:["From the Email API Tap, select"," ",Object(c.jsx)("span",{className:"dark",children:" Integration Guide "})]}),Object(c.jsxs)("li",{children:["Now Click on the ",Object(c.jsx)("span",{className:"dark",children:" SMTP Relay "})]}),Object(c.jsxs)("li",{children:["Chosse a name for you key and click create key, this will create an api key for you"," "]}),Object(c.jsx)("li",{children:"Now, you will see username and password "}),Object(c.jsxs)("li",{children:["Copy the user name and the password and use them in the environment variables"," "]}),Object(c.jsxs)("li",{children:["Use the username for the ",Object(c.jsx)("span",{className:"dark",children:"email_user"})," "]}),Object(c.jsxs)("li",{children:["Use the password for the ",Object(c.jsx)("span",{className:"dark",children:"email_password"})," "]})]})}),Object(c.jsx)(D.a,{lazyRender:!0,open:x,transitionTime:900,transitionCloseTime:300,onClick:function(){return g(!1)},onClosing:function(){g(!1)},onOpening:function(){g(!0)},trigger:Object(c.jsxs)("button",{className:"btn-collaps",children:[Object(c.jsx)("div",{children:x?Object(c.jsx)(b.b,{size:"2em",color:"#fff"}):Object(c.jsx)(b.a,{size:"2em",color:"#fff"})}),Object(c.jsx)("h3",{children:"Show Cloudinary Steps"})]}),triggerStyle:{backgroundColor:x?"green":"tomato",color:"#fff",cursor:"pointer",padding:"1rem .6rem",outlineStyle:"none",display:"block",transitionDuration:".5s"},children:Object(c.jsxs)("ol",{className:"sub_list_item",children:[Object(c.jsxs)("li",{children:["Create an Account With ",Object(c.jsx)("a",{href:"https://cloudinary.com",children:"Cloudinary"})," "]}),Object(c.jsx)("li",{children:"Login into your account"}),Object(c.jsxs)("li",{children:["From your dashboard page , You will see the"," ",Object(c.jsx)("span",{className:"dark",children:"Account Details "})," Box"]}),Object(c.jsxs)("li",{children:["Copy the",Object(c.jsx)("span",{className:"dark",children:" Cloud name "})," and use it in the cloud_name environment variable"]}),Object(c.jsxs)("li",{children:["Copy the ",Object(c.jsx)("span",{className:"dark",children:"API Key"})," and past it in the",Object(c.jsx)("span",{className:"dark",children:" cloud_api "})," environment variable"]}),Object(c.jsxs)("li",{children:["Copy the ",Object(c.jsx)("span",{className:"dark",children:"API Secret"})," and past it in the",Object(c.jsx)("span",{className:"dark",children:" cloud_secrit "})," environment variable"]}),Object(c.jsx)("li",{children:"Now, you are done. "})]})}),Object(c.jsxs)("p",{className:"docs_desc",children:["Now , everything should be ok for you, to make sure that everything went ok, just run this command in your terminal",Object(c.jsx)("span",{className:"dark",children:"npm start"})," , you should be able to see this message"," ",Object(c.jsx)("span",{className:"dark",children:"MongoDB database connection established successfully"}),"if not please read the steps and make sure you did everything with me."]})]})]})},F=t.p+"static/media/step_1.749d6b93.png",B=t.p+"static/media/step_2.9a8d6ee7.png";var R=function(){return Object(c.jsxs)("div",{children:[" ",Object(c.jsx)("h2",{children:"How To Login With an Existing Account "}),Object(c.jsx)("p",{className:"docs_desc",children:"To Login for an existing account, you need to make a post request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{text:"POST",endpoint:"http://localhost:3000/api/v1/users/login"}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"This will make a post request to the api and it will try send back json wdeb token, however, In order for this to work then we need to provide some needed info to veryfiy this proccess, IN our case we need only a valid email ad a password"}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Property"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Email"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Password"}),Object(c.jsx)("td",{children:"True"})]})]}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"You need to send a json object that look like this:"}),Object(c.jsx)("img",{src:F,alt:"signup step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"This will try to check for the provided info and if everything is corect then it will return a valid json web token that the user can use to login"}),Object(c.jsx)("img",{src:B,alt:"signup step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"Thats it."})]})},E=t.p+"static/media/step_1.234ed216.png",M=t.p+"static/media/step_2.5820b442.png";var H=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"How To Create a New User "}),Object(c.jsx)("p",{className:"docs_desc",children:"To create ew user i our database, you need to make a post request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{text:"POST",endpoint:"http://localhost:3000/api/v1/users/signup"}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"This will make a post request to the api and it will create a new user, however, In order for this to work then we need to provide some eeded info to create a new user, IN our case we need only a valid email ad a password"}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Property"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Name"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Email"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Password"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Password Confirm"}),Object(c.jsx)("td",{children:"True"})]})]}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"You need to send a json object that look like this:"}),Object(c.jsx)("img",{src:E,alt:"signup step",className:"docs__img"}),Object(c.jsxs)("p",{className:"docs_desc m-s",children:["This will create a new user in our database and also it will return the newly created user"," "]}),Object(c.jsx)("img",{src:M,alt:"signup step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"Thats it, you can create as many users as you want!"})]})};function L(e){var s=e.match;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"sub__nav",children:Object(c.jsxs)("ul",{className:"sub__list",children:[Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/installation"),children:[" ","Installation"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/signup"),children:[" ","Signup"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/login"),children:[" ","Login"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/forgotpassword"),children:[" ","Forgot Password"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/updatepassword"),children:[" ","Update Password"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/updateme"),children:[" ","Update Info"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/deleteme"),children:[" ","Delete Me"]})}),Object(c.jsx)("li",{className:"sub__item",children:Object(c.jsxs)(r.c,{className:"sub__link",to:"".concat(s.path,"/users"),children:[" ","Get Users"]})})]})})})}var G=t.p+"static/media/step_5.3fdc9fe4.png",W=t.p+"static/media/step_6.7702c09f.png";var Y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Update My Password"}),Object(c.jsx)(m,{}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"docs_desc",children:"To Update the password for the currently logged in user, you need to make a PATCH request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{endpoint:" http://localhost:3000/api/v1/users/updateMyPassword",text:"PATCH"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"This will make a patch request to the api and it will try find the user and update his/her password, however, In order for this to work then we need to provide some needed info to veryfiy this proccess, IN our case we need to send three paeaces of information in the request body which are currentPassword, newPassword, passwordConfirm as shown in the tabel below:"}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Property"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"currentPassword"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"newPassword"}),Object(c.jsx)("td",{children:"True"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"passwordConfirm"}),Object(c.jsx)("td",{children:"True"})]})]}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"so you should send a json object that look something like this:"}),Object(c.jsx)("img",{src:G,alt:"forgot password step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc m-s",children:"After you have send your object then the server will try to veryfiy the provided info and if everything is passed it will update the user and send back a json web token to login the user in as shown below."}),Object(c.jsx)("img",{src:W,alt:"forgot password step",className:"docs__img"})]})},J=t.p+"static/media/step_1.6e8d3287.png";var V=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Update My Info"}),Object(c.jsx)(m,{}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"docs_desc",children:"To Update the information for the currently logged in user, you need to make a PATCH request to the following endpoint"}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{text:"PATCH",endpoint:"http://localhost:3000/api/v1/users/me"}),Object(c.jsx)("p",{className:"docs_desc m-m",children:"This will make a patch request to the api and it will try find the user and update his/her information, however, In order for this to work then we need to provide some needed info to veryfiy this proccess, IN our case we need to send three paeaces of information in the request body which are name, email, photo as shown in the tabel below:"}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Property"}),Object(c.jsx)("th",{children:"Required"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"name"}),Object(c.jsx)("td",{children:"false"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"email"}),Object(c.jsx)("td",{children:"false"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"photo"}),Object(c.jsx)("td",{children:"false"})]})]}),Object(c.jsx)("p",{className:"docs_desc",children:"so you should send a json object that has something like these information:"}),Object(c.jsx)("img",{src:J,alt:"forgot password step",className:"docs__img"}),Object(c.jsx)("p",{className:"docs_desc",children:"The server response will be the updated user information and you are done."})]})};function K(e){var s=e.match;return Object(c.jsxs)("div",{className:"docs",children:[Object(c.jsx)(L,{match:s}),Object(c.jsxs)("div",{className:"docs_content",children:[Object(c.jsx)(d.b,{path:"".concat(s.path,"/"),exact:!0,component:U}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/installation"),component:U}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/signup"),component:H}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/login"),component:R}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/forgotpassword"),component:k}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/updatepassword"),component:Y}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/updateme"),component:V}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/deleteme"),component:w}),Object(c.jsx)(d.b,{path:"".concat(s.path,"/users"),component:C})]})]})}var Q=t.p+"static/media/homeBackground.d3295315.png";function Z(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"header__box",children:[Object(c.jsx)("h1",{className:"header__title",children:"Free Authentication API"}),Object(c.jsxs)("p",{className:"header__desc",children:["Build Fully Functionnal Authentication System Utlizing Our Free API"," "]}),Object(c.jsx)(r.b,{to:"/docs",className:"link header__link",children:"Get Started"})]}),Object(c.jsx)("div",{className:"header__img--container",children:Object(c.jsx)("img",{src:Q,alt:"header home",className:"header__img"})})]})}var X=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(r.a,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/home",component:Z}),Object(c.jsx)(d.b,{path:"/about",component:j}),Object(c.jsx)(d.b,{path:"/docs",component:K}),Object(c.jsx)(d.b,{path:"/developer",component:p}),Object(c.jsx)(d.a,{from:"/",to:"/home"})]})]})})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,o=s.getTTFB;t(e),c(e),a(e),n(e),o(e)}))};t(35);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(X,{})}),document.getElementById("root")),$()}},[[36,1,2]]]);
//# sourceMappingURL=main.728963d8.chunk.js.map