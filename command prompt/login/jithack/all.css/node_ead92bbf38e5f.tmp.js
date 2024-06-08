
@import url('https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

.container{
    max-width: 1200px;
    width: 100%;
    margin: 0px auto ;
}
.btn{
    
   display: inline-block; 
   
}
.btn1{
    border: 1px solid black;
    background-color: transparent;
    color: red;
    padding: 0.8em;
    border-radius: 80px;
    margin: 1em;
    font-weight: 800;

    
}

.bg{
    background-color: rgb(12, 99, 100);
}
.btn1:hover{
    color: green;
}


li{
    list-style: none;

}

a{
    font-size: 2rem;
    text-decoration: none;   
}

p{
    font-size: 1.6rem;    
}

.header{
    
   height: 95vh ; 
   background: url('https://i.pinimg.com/736x/4f/d6/22/4fd622433a21e15d7c12d7e2390f87ad.jpg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
}

.logo{
    color: white;
   
   font-size: 3rem;
}

li a{
    color: white;
    text-decoration: none;

    
}

.logo {
    float: left;
    margin: 1.5em;
}
.navitems{
    float: right;
    margin: 1.5em;
}
.navitem{
    
    display: inline-block;
    padding: 1em;
    margin: 2.5em ;
    font-weight: 600;
    
}

.navbar a:hover{
   color: rgb(56, 241, 241);
   
}
.navbar::after{
    content: "";
    display: block;
    clear: both;
    height:1px;
}

.hcontent h1{
    font-size: 4rem;
    color: white;
    
}
.hcontent{  
   
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}
.hcontent p{
    font-weight: 600;
    font-size: 2rem;
    color: white;
   
}

.showcase{
    
    background-color: #5ae4d8 ;
background-image: linear-gradient(147deg, #5ae4d8 0%, #000000 74%);
}
.row{
    /* border: 2px solid red; */
    height: 350px ;
    width: 60vw;
    display: inline-block;
    margin: 3em;
    background-color:#fff ;
   
    box-shadow: 5px 5px 20px 0px rgb(29, 27, 27);
}
.row1 .imgbox , .row2 .imgbox{
    /* border: 1px solid green; */
    float: left;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    
    /* background-color: pink; */


}
.row1 .textbox , .row2 .textbox{
    float: right;
    width: 50%;
    /* border: 1px solid yellow; */
    height: 100%;
    padding: 1.2em;
    background-color: #6cf5ee ;
    background-image: linear-gradient(315deg, #6cf5ee 0%, #6cf5ee  74%);
}
.imgbox img{
    display: inline-block;
    width: 100%;
    height:100%;
    object-fit: cover;
    object-position: center;
    position: -ms-page;
}
.textbox h1{
   font-size: 2.7rem;
   font-weight: 900;
}
.demo{
    
    margin: 1em;
}
.clang a{
  font-size: 2rem;
  margin: 0.5em;
  font-weight: 900;
  color: rgb(247, 27, 137);
  display: inline-block;
  
}
.ilang a{
    font-size: 2rem;
    margin: 1em;
    font-weight: 900;
    color: rgb(250, 26, 149);
    display: inline-block;
    
  }
  .ilang a:hover{
    color: rgb(37, 130, 236);
}
/* .ilang:focus{
    color: rgb(187, 255, 0);
} */

.clang a:hover{
    color: rgb(20, 98, 172);
}
.footer{

    background-color: #6daddb;
    background-image: linear-gradient(315deg, #6daddb 0%, #313131 74%);;
   /* padding:0.5rem;  */
   text-align: center;
  
   
}
.socialmedia a{
     
     margin:0.5em;
     /* padding-top: 1em; */
     padding-left: 1.5em;
     padding-right: 1.5em;
     text-decoration: none;
     color: black;
     font-size: 1rem;
     margin-bottom: 0px;

}
.socialmedia i{
    margin-top: 0.4em;
    /* padding: 1em; */
}
.pp{
    margin: 0.8em;
    color: rgb(250, 128, 128);
}
/* .kk h1{
    color: red;
} */


.bg{
    /* background-color: #e9bcb7;
background-image: linear-gradient(315deg, #e9bcb7 0%, #29524a 74%); */
background-color: #63d471;
background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
background-color: #a4508b;
background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
background-color: #e9bcb7;
background-image: linear-gradient(315deg, #e9bcb7 0%, #29524a 74%);
background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%, #414141 74%);


}

.logo1{
    float: left;
   font-size: 3rem;
   color: rgb(55, 168, 233);
   margin: 1em;



}

.navitems1{
   
    
    float:right;
}
.navitem1{
    display: inline-block;
    padding: 2em;
    text-align: center;
   margin: 0.8em;
}
.navitems1 a{
  color: white;
  text-decoration:none;
  font-weight: 800;

}
.navitems1 a:hover{
    color:tomato;
}
/* .navbar1{
    box-shadow: 10px 10px 30px 0px rgb(29, 27, 27);
} */
.navbar1::after{
    content: "";
    display: block;
    clear: both;
}
.pages{
    /* border: 2px solid red; */
    /* background-color: #a32a3a;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%); */
  background: url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80');
 
} 
.r{
    /* border: 2px solid red; */
    height:150px ;
    width: 24vw;
    display: inline-block;
    margin: 4em;
    background-color:rgb(231, 196, 196) ;
    box-shadow: 5px 5px 100px 0px rgb(34, 33, 33);
}
.r1{
    float: left;
    width: 25%;
    box-sizing: border-box;

}

.r2{
    float: left;
    width: 25%;
    box-sizing: border-box; 
}
.r3{
    float: left;
    width: 25%;
    box-sizing: border-box; 

}
.r4{
    float:left;
    width: 25%;
    box-sizing: border-box; 
    
    
}
.r5{
    float:left;
    width: 25%;
    box-sizing: border-box; 
    
    
}
.r6{
    float:left;
    width: 25%;
    box-sizing: border-box; 
    
    
}


.r1 .imgc , .r2 .imgc , .r3 .imgc , .r4 .imgc , .r5 .imgc , .r6 .imgc{
    float: left;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    /* border: 2px solid red; */
}
.r1 .ctext , .r2 .ctext  , .r3 .ctext , .r4 .ctext   , .r5 .ctext   , .r6 .ctext {
    float: right;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 1rem;
    color: black;
    box-sizing: border-box;
 
background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);


}
.r1 .ctext h2, .r2 .ctext h2, .r3 .ctext h2 , .r4 .ctext h2 , .r5 .ctext h2  , .r6 .ctext h2 {
    margin-top:2em;
    color: black;
    text-decoration: none;
    font-size: 2.5rem;
}

.r h2:hover{
    color: rgb(231, 74, 74);
}
.imgc img{
    display: inline-block;
    width: 100%;
    height:100%;
    object-fit: cover;
    object-position: center;
}
.pages::after{
    content: "";
    display: block;
    clear: both;
}

/* .r .h2:hover{
  color: red;
} */
 .lkl{
    background-color: #e84393;
    background-image: linear-gradient(315deg, #e84393 0%, #000000 74%);
    box-sizing: border-box;
    
}
.lk{
    background-color: #db7f8e;
background-image: linear-gradient(315deg, #db7f8e 0%, #7b0d1e 74%);
background-color: #42378f;
background-image: linear-gradient(315deg, #42378f 0%, #f53844 74%);
background-color: #6617cb;
background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
background-color: #ee5166;
background-image: linear-gradient(315deg, #ee5166 0%, #f08efc 74%);
background-color: #272822;
background-image: linear-gradient(326deg, #272822 0%, #da2d2d 74%);
background-color: #b2505c;
background-image: linear-gradient(315deg, #b2505c 0%, #4c131a 74%);

}
.main{
    font-size: 4rem;
    padding: 1em ;
    color: rgb(235, 148, 17);
    /* box-shadow:  5px 5px 100px 0px rgb(61, 130, 219);; */

}
.moreinfo a{
    color:rgb(238, 232, 232);
    font-size: 2rem;
    font-weight: 600;
    font-style:'Fira Sans', sans-serif;
    
}
.moreinfo a:hover{
  color: rgb(211, 233, 19);
}
.moreinfo li{
   list-style: disc;
    padding: 1.5em;
    color: cornsilk;
    font-size: 1em;
    /* font-size:1em; */
    /* size: 200px; */
}
.hp{
    font-size: 2.5rem ;
    font-weight: 900;
    margin: 1em;
     margin-right: 1.5em;
    color: rgb(211, 233, 14);
} 
.ding a{
    color: rgb(8, 202, 40);
    
}  
.ding a:hover{
color: rgb(236, 20, 56);
}
.dfg{
    
    background-color: #923cb5;
background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%);
}
.abc{
    background-color: #a4508b;
background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
background-color: #7f5a83;
background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);



}
.pqr{
    /* background-color: #726cf8;
background-image: linear-gradient(315deg, #726cf8 0%, #e975a8 74%);
background-color: #523a78;
background-image: linear-gradient(316deg, #523a78 0%, #ee696b 74%);
background-color: #1fd1f9;
background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%); */
background-color: #e9bcb7;
background-image: linear-gradient(315deg, #e9bcb7 0%, #29524a 74%);
background-color: #7f5a83;
background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);

}
.wer{
   
background-color: #a4508b;
background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);




}
 .po{
     /* border: 2px solid red; */
    
     margin: 3em;
     box-sizing: border-box;
     width: 20%;
     float: left;
 }
 .aa{
     font-size: 2rem;
     display: block;
     box-sizing: border-box;
     margin-top: 0.3em;
     margin-bottom: 0.3em;
     font-weight: 700;
     text-align: left ;
 }
 .ting input{
     display: inline-block;
     box-sizing: border-box;
     font-size:1.6rem ;
     /* color: rgb(230, 138, 18); */
     /* font-weight: 700; */
     
 }
 .ting input:hover{
  color: red;
 }
 
.jk{
    font-size: 2rem;
    font-weight: 700;
}
.hh{
    font-size: 2rem;
    font-weight: 700;
}
.bb{
    /* text-align: center; */
    margin: 1em;
    

    
}
.ting .bb :hover{
    color: rgb(62, 13, 238);
}
.logo:hover{
    color: red;
}
.logo1:hover{
    color: red;
}

.mm{
    font-size:1.2rem;
}
.qq{
    display: block;
    float:right;
    /* border: 2px solid green; */
    width: 55%;
    margin: 3em;
}

.mk:after{
    content:"";
    display:block;
    clear:both;
}
.mk{
   
    background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);

    
}
.qq a ,li{
    color: black;
    /* margin: 1em; */
    padding: 0.5em;
}
.c{
    font-size: 2rem;
    font-weight: 700;
    box-shadow: 5px 5px 100px 0px rgb(16, 224, 252);


}
.c a:hover{
    color: rgb(221, 18, 177);
}
.v{
    margin-left: 2.3em;
   
}

.v a:hover{
    color: red;
}
.c{
    padding: 1em;
}
.new{
    /* border: 2px solid red; */
    margin: 2em;
    /* background-color: #9fa4c4;
background-image: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
background-color: #bdd4e7;
background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%); */
box-shadow:5px 5px 100px 0px rgb(16, 224, 252) ;


}

.cv{
    
   color: rgb(236, 11, 11);
   box-shadow:5px 5px 100px 0px rgb(240, 177, 4) ;
   font-size: 2.5rem;
}
.new p{
    padding: 1em;
    font-weight: 800;
}
.k{
  padding-left: 3em;
  padding-top: 2em;
  color: red;
  font-size: 2.5rem;
  font-weight: 700;
}
.k{
    border-bottom: 2px dashed rgb(19, 18, 18);
    width: 30%;
}

@media (max-width:500px){
    html{
        font-size: 50%;
        box-sizing: border-box;
    }
}
@media (max-width :610px){
    .qq,.po{
        float: none;
       
    }
    .aa , .jk , .hh{
        font-size: 1.5rem;
    }
    .po{
        width: 100%;
    }
    .k{
        width: 60%;
    }
   
}
@media (max-width  :383px){
    .navitem1{
        font-size: 0.5rem;
        /* display: block;
        float: none; */
    }

}
@media (max-width  :310px){
    .navitem1{
        font-size: 0.3em;
        /* display: block;
        float: none; */
    }

}
@media(max-width:605px){
    .navitem{
        font-size: 0.3rem;
        /* display: block; */
        float: none;
        padding:1em;
        margin: 1.5em;

    }
    .navitems{
        margin: 1.5em;
        padding: 1.5em;
        text-align: center;
        position: static;
    }
    .logo{
        font-size: 1.8rem;
    }
}
@media(max-width:920px){
    .imgbox,  .textbox{
        float: none;
        display: block;
    }
    .textbox h1{
        font-size: 2rem;
    }
    .clang a{
        font-size: 1.4rem;
        /* text-align: center; */
    }
    .row{
        height: 250px;
        width: 80vw;
    }
}
@media(max-width:400px){
    .textbox h1{
        font-size:1.8rem ;
    }

}
@media(max-width:920px){
    .textbox h1{
        font-size: 1.8rem;
    }
    .ilang a{
        font-size:1.4rem ;
        /* text-align: center; */

    }
}
@media(max-width:980px){
    .imgc, .ctext{
        /* float: none; */
        box-sizing: border-box;
    }
    .r1 .ctext h2, .r2 .ctext h2, .r3 .ctext h2 , .r4 .ctext h2 , .r5 .ctext h2  , .r6 .ctext h2{
        font-size: 1.1rem;
        text-align: center;
    }
    .r1 .imgc , .r2 .imgc , .r3 .imgc , .r4 .imgc , .r5 .imgc , .r6 .imgc{
        height: 100%;
    }
    .r1 .ctext , .r2 .ctext  , .r3 .ctext , .r4 .ctext   , .r5 .ctext   , .r6 .ctext {
        height: 100%;
    }
    .r{
        height: 75px;
        width:30%;
    }
}
@media(max-width:376px){
    .hcontent h1{
        font-size:3rem;
        margin:2rem;
        padding:0.5rem;
    }
    .hcontent{
        padding: 2rem;
    }
    .hcontent p{
        /* margin-top:2rem; */
        padding-top:2rem;
    }
    
   .container{
    width:100%;
    
   }
   .showcase{
    padding:3rem;
   }
   
   .row{
  
   width:90%;
   margin:auto 0px;
   }
    .header{
        height:75vh;
    }
    .navitems1 a{
        font-size:1rem;
        margin:auto 0px;
        text-align:center;
       
     

    }
    .navitems1{
        text-align:center;
    }
   
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      body {
        background-image: url('your-https://seofiles.s3.amazonaws.com/seo/media/uploads/2018/08/10/placement-officer-or-placement-cell.jpg-image.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: antiquewhite;
    }
    
    /* Add any other styles you need */
    
      
      header {
        background-color: #007bff;
        color: white;
        padding: 20px 0;
        text-align: center;
      }
      
      nav {
        background-color: #f8f9fa;
        padding: 10px 0;
        text-align: center;
      }
      
      nav a {
        text-decoration: none;
        color: #007bff;
        margin: 0 10px;
      }
      
      nav a:hover {
        color: #0056b3;
      }
      
      .hero {
        background-color: #f8f9fa;
        padding: 40px 0;
        text-align: center;
      }
      
      .hero h2 {
        color: #007bff;
      }
      
      .hero img {
        max-width: 100%;
        height: auto;
        margin-top: 20px;
      }
      
      .hero-content {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .services,
      .why-us,
      .cta {
        background-color: #f0f0f0;
        padding: 40px 0;
        text-align: center;
      }
      
      .services h2,
      .why-us h2,
      .cta h2 {
        color: #007bff;
      }
      
      .footer {
        background-color: #343a40;
        color: white;
        padding: 20px 0;
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
      /* Your existing CSS styles */
    
    /* Login Modal */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
      }
      
      .modal-content {
        background-color: #fefefe;
        margin: 10% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
      }
      
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      
      /* Responsive */
      @media screen and (max-width: 600px) {
        .modal-content {
          width: 80%;
        }
      }
      /* Styles for the sign-up modal */
    .modal {
      display: none; /* Hide the modal by default */
      position: fixed; 
      z-index: 1; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%;
      overflow: auto; 
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0,0.4);
    }
    
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto; 
      padding: 20px;
      border: 1px solid #888;
      width: 80%; 
    }
    
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    
    .container {
      margin-bottom: 10px;
    }
    
    label {
      display: inline-block;
      width: 120px;
    }
    
    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      width: calc(100% - 130px);
      padding: 5px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    
    button[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      float: right;
    }
    
    button[type="submit"]:hover {
      background-color: #45a049;
    }
    /* Add your modal CSS styles here */
    
    .popup {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
    }
    
    .popup-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }
    
    .close-popup {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close-popup:hover,
    .close-popup:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    
    
    
  
    
}


