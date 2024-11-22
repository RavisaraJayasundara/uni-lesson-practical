import {people} from './data';
import People from './People';
export default function Body(){
    return(
        <div>
            <h3>List of Famous People</h3>
            {
            people.map(item=><People props={item}></People>)
        }
        </div>
    );
}