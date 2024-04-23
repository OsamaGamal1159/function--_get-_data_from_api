

const getData=(apilink)=>{
return new Promise((resolved,rejected)=>{
    let myRequest=new XMLHttpRequest();
    myRequest.onload=function(){
    if(this.readyState===4 && this.status===200){
        resolved(JSON.parse(this.responseText));
    }else{
        rejected(Error("Not Data Found"));
    }
    }
        myRequest.open("GET",apilink);
        myRequest.send();
})
};

getData("https://api.github.com/users/elzerowebschool/repos")
.then((resolve)=>console.log(resolve));