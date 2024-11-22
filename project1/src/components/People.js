import '../assets/css/main.css';
export default function People({props}){
    return(
        <div className="maincard">
            
                <div>
                   <img className='profile' src={'https://i.imgur.com/'+props.imageId+'s.jpg'} alt={props.name}/>
                </div>
                <div className='details'>
                    <p>{props.name}</p>
                    <p>{props.profession}</p>
                    <p>{props.accomplishment}</p>
                </div>
            </div>
        
    )
}