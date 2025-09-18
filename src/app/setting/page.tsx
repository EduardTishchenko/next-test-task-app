import { Button } from "@/components/ui/button";


export default  function Setting () {
    return(
        <div className=" ">
        <div className="w-screen  ">

            <div className="pl-">
                <div className="grid w-1/2  ml-8 ">
                      <span>Name</span>
                <input
                 className=" p-2 border bg-white border-gray-300 rounded"
                type='text'
                placeholder="User Random"

                />
                 <span>Pssword</span>
                <input
                 className="w-full p-2 border bg-white border-gray-300 rounded"
                type="password"
                placeholder="Enter Password"

                />

                </div>
             
              
            </div>
            <div className="pt-8 ">
                <Button className="ml-180  bg-green-600 px-30 py-6 text-sm">Save</Button>
            </div>
            
            
        
        </div>
            
        </div>
    )
}