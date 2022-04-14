


// function search()
// {
//     let val=document.getElementById("search").value;
//     console.log(val)
//     fetch(`http://www.omdbapi.com/?t=${val}&apikey=1a9b4ff2`)
//    .then(function(res){
//     res.json().then(function(res){
//         console.log(res)
//     })
//     })
// }
function jai()
{
    let val=document.getElementById("search").value;
     console.log(val)
     fetch(`https://www.omdbapi.com/?t=${val}&apikey=1a9b4ff2`)
     .then(function(res){
      res.json().then(function(res){
        //   console.log(res)
          let arr=[];
          arr.push(res)
          console.log(arr)
          display(arr)
      })
      })
     .catch(function(err){
          console.log(err)
          console.log("hello")
      })
}

function display(res)
{
    document.getElementById("container").innerHTML="";
    res.forEach(function(ele,ind,arr){
        let box=document.createElement("div");
        let img1=document.createElement("img");
        img1.src= `${ele.Poster}`;
        let title=document.createElement("p");
        title.innerText=` ${ele.Title}`;
        let rel=document.createElement("p");
        rel.innerText= ` Release: ${ele.Released}`;
        let act=document.createElement("p");
        act.innerText= `Actors: ${ele.Actors}`;
        let award=document.createElement("p");
        award.innerText= ` Awards: ${ele.Awards}`;
        let boxof=document.createElement("p");
        boxof.innerText= `Collection:${ele.BoxOffice}`;
        let gen=document.createElement("p");
        gen.innerText= `Genere: ${ele.Genre}`;
        let year=document.createElement("p");
        year.innerText= `Year: ${ele.Year}`;
        let imdb=document.createElement("p");
        imdb.innerText= `IMdb ${ele.imdbRating}`;
        console.log(ele.imdbRating > 8.5)
        if(ele.imdbRating >=8.5)
        {
            var boxi= document.createElement("div");
            let recom=document.createElement("p");
            recom.innerText="Recomended!"
            boxi.style.height="30px"
            boxi.style.width="100px"
            boxi.style.background="green";
            boxi.style.margin="auto"
            boxi.append(recom);
            box.append(img1,title,rel,act,award,boxof,gen,year,imdb,boxi);
        }
        else
        {
         box.append(img1,title,rel,act,award,boxof,gen,year,imdb);
        }
        console.log(res[0].Error)
        if(res[0].Error=='Movie not found!')
        {
            let box1=document.createElement("div");
            box1.style.height="500px";
            box1.style.width="500px";
            let image1=document.createElement("img");
            image1.src="https://media3.giphy.com/media/WQOIEQRgiK722l3PQT/giphy.gif?cid=ecf05e47lqlktmmcmybex8ceibipnsco5rnd6na6tbnw010b&rid=giphy.gif&ct=g";
            image1.style.width="100%";
            image1.style.height="100%";
            box1.append(image1);
            document.getElementById("container").style.marginLeft="35%"
            document.getElementById("container").append(box1)

        }
        else
        {
            document.getElementById("container").style.marginLeft="38%"
            document.getElementById("container").append(box)
        }
    })
}

