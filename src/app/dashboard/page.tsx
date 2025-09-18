import { User } from "../page"
import AvatarAmg from "../avatar"
import { Button } from "@/components/ui/button"

type DataType = {
    data:User[]
 
}
export const DashboardPage = (props:DataType)=> {
   
    const renderDashedCards = (count:number) => {
    return Array.from({ length: count }).map((_, index) => (
      <div key={`dashed-${index}`} className=" p-4 rounded-lg border-3 border-dashed border-zinc-400">
                  <svg className="w-10 h-30 mx-auto " fill="none" stroke="currentColor" viewBox="0 0 24 24">
            
          </svg>
        
      </div>
    ))
  }
  





  let statusToDo = props.data.filter(s=>s.status==='to-do' )
  let statusProgres = props.data.filter(s=>s.status==='in-progress' )
  let statusReview = props.data.filter(s=>s.status==='review' )
  let statusComplited = props.data.filter(s=>s.status==='completed' )

    return (
        <>
        <div >
        
       <div className=" grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-4 gap-3  p-8 ">
          <div className="min-w-0">
           
              
              <h2>To do({statusToDo.length}) </h2>
              {statusToDo.map(todo=> {
                
                return <div  key={todo.id} className="flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200 mb-4 p-6 bg-white rounded border border-gray-200 shadow-sm">
                    
                  <h4 className="font-semibold text-gray-800 mb-1">{todo.title}</h4>
                  <p className="text-sm text-gray-600">{todo.description}</p>
                  <div className="pt-6 flex flex-row justify-between ">
                    <Button variant="outline" className="bg-green-500 text-neutral-200 hover:text-blue-700  ">Button</Button>
                    <div className=" *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                      <AvatarAmg/>
                      <AvatarAmg/>
                      <AvatarAmg/>
                    </div>
                  </div>
                </div>
              })}
          </div>
          <div  className=" min-w-0 " >
           
              
              <h2>In Progress({statusProgres.length}) </h2>
              {statusProgres.map(todo=> {
                
                return <div  key={todo.id} className="flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200 mb-4 p-6 bg-white rounded border border-gray-200 shadow-sm">
                    
                    
                  <h4 className="font-semibold text-gray-800 mb-1">{todo.title}</h4>
                  <p className="text-sm text-gray-600">{todo.description}</p>
                  <div className="pt-6 flex flex-row justify-between">
                    <Button variant="outline" className="bg-green-500 text-neutral-200 hover:text-blue-700">Button</Button>
                    <div className=" *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                      <AvatarAmg/>
                      <AvatarAmg/>
                      <AvatarAmg/>
                    </div>

                  </div>
                  
                </div>
                
              })}
              {renderDashedCards(1)}
          </div>
          <div className=" min-w-0" >
           
              
              <h2>Reviw({statusReview.length}) </h2>
              {statusReview.map(todo=> {
                
                return <div  key={todo.id}className="flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200 mb-4 p-6 bg-white rounded border border-gray-200 shadow-sm">
                    
                  <h4 className="font-semibold text-gray-800 mb-1">{todo.title}</h4>
                  <p className="text-sm text-gray-600">{todo.description}</p>
                  <div className="pt-6 flex flex-row justify-between">
                    <Button variant="outline" className="bg-green-500 text-neutral-200 hover:text-blue-700  ">Button</Button>
                        <div className=" *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                      <AvatarAmg/>
                      <AvatarAmg/>
                      <AvatarAmg/>
                    </div>
                  </div>
                </div>
              })}
          </div>
          <div  className=" min-w-0" >
           
              
              <h2>Complited({statusComplited.length}) </h2>
                {statusComplited.map(todo=> (
                  <div key={todo.id} className= "flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200 mb-4 p-6 bg-white rounded border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-800">{todo.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{todo.description}</p>
                      <div className="pt-6">
                        <div className="pt-6 flex flex-row justify-between">
                          <Button variant="outline" className="bg-green-500 text-neutral-200 hover:text-blue-700  " disabled={true}>Button</Button>
                            <div className=" *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                      <AvatarAmg/>
                      <AvatarAmg/>
                      <AvatarAmg/>
                    </div>

                        </div>
                    
                  </div>
                      
                    </div>


                ))}

              
           <div className="grid gap-2">
              {renderDashedCards(2)}
           </div>
            
          </div>
        </div>
      </div>

        </>
    )
}
      