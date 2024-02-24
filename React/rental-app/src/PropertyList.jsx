import './PropertyList.css'
import Property from './Property'



export default function PropertyList({properties}){
    
    return(
    <div className="PropertyList">
        {properties.map(property => {return <Property key={property.id} {...property} />})}
    </div>
      
    )
}