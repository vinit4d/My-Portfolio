import Icon from './icon'
export default function theHeader(){
  
    return(
      
        <>
           <div className="flex justify-end space-x-3 px-3  w-full">
  <div>Skills</div>
  <div className="flex text-red-600 ">Projects 
  <Icon />
  {/* <img src="/assets/icons/Group.svg" className="w-8 p-1"/> */}
  </div>
  <div>Contact me</div>
  </div>
   
</>
    )
}