
const ResultCard = ({ item }) => {

const  addToCollection=(item)=>{
    
  const oldData = JSON.parse(localStorage.getItem('collection')) || []
    
  const newData = [...oldData,item]
  localStorage.setItem('collection',JSON.stringify(newData))
  
 
  }

  return (
    
    
      <div className='w-96 h-96 mb-10  relative   bg-white rounded-xl overflow-hidden ' >
    
          {item.type == 'photo' ? <img className='h-full w-full object-cover' src={item.src} alt="Loading " /> : ""}
          {item.type == 'video' ? <video className='h-full w-full object-cover' autoPlay loop muted src={item.src}></video> : ""}
          {item.type == 'gif' ? <img className='h-full w-full object-cover' src={item.src} alt="loading.." /> : ""}
     


        <div id='bottom' className='  flex justify-between items-center h-[35%] w-[full] p-4 absolute bottom-0 text-white text-xl'>
          <h1 className='capitalize '>        {item.title}
          </h1>
          <button
          onClick={()=>{
            addToCollection(item)
          }} className='bg-cyan-500 cursor-pointer text-white rounded px-3 py-2 font-medium active:scale-90'>Save</button>
        </div>
      </div>
    
  )
}

export default ResultCard