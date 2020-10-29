import React,{useState,useEffect} from 'react';
import tours from './data';
import Zaxd from './zaxd';

const App = () => {
   
    const [interest,setInterest] = useState(tours);
    const [isLoading,setIsLoading]=useState(true);
    const [butText,setButText]=useState("Show More");

    const removeTour= (id)=>{
        let newlist= interest.filter((tourr)=>tourr.id!==id);
        setInterest(newlist);
    };

    const moreText=(id)=>{
        let thelist=document.getElementsByClassName("yazi");
        console.log(typeof(thelist[id-1].className));
        if(thelist[id-1].className.includes("active")){
            thelist[id-1].className=thelist[id-1].className.replace(" active","");
            setButText("Show More");
        }else{
            thelist[id-1].className=thelist[id-1].className.replace("yazi","yazi active");
            setButText("Show Less");
        }
    };
    const asd=()=>{
        if(interest.length>0){
            setIsLoading(false);
        }
    };
    useEffect(()=>{
        setTimeout(asd,500);
    },[]);

    if(isLoading){
        return <div className="outerheader">
            Loading ...
        </div>
    }
 
    return ( 
       <div className="outer">
           {interest.length===0 ? <Zaxd />
           :
           <>
            <div className="outerheader">
                <h1>Our Tours</h1>
                <hr/>
           </div>
           {interest.map((etour)=>{
               const {id,img,price,title,description}=etour;
               return(
                    <article key={id}>
                        <img src={img} alt={title}/>
                        <div className="footer">
                        <div className="title">
                                <h4>{title}</h4>
                                <p className="price">{price}</p>
                        </div>
                        <div className="description">
                            <p className="yazi" >
                                {description}
                            </p>
                            <button type="button" className="btn show" onClick={()=>moreText(id)}>{butText}</button>
                         </div>
                        <button className="btn notinterest" onClick={()=>removeTour(id)}>Not Interested</button>
                        </div>
                    </article>
               );
           })}
           </>
           }
       </div>
    );
}

export default App;
