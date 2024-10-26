const SelectedP = ({handleTogle, select}) => {
    console.log(select);
    return (
        <div>
            <h1 className="text-4xl">Selected Player({select.length})</h1>
                     <div>
                        {
                            select.map(p=><div className="border rounded-md p-4 m-2 w-full h-[70px] mx-auto" key={p.id}>
                                <div className="flex justify-between items-center"> 
                                    <img className="rounded-full w-10 h-10" src={p.image} alt="" /> 
                                    <p>{p.name}</p> 
                                    <p>{p.role}</p> 
                                    <button>Delete</button>
                                    </div>

                            </div>)
                        }
                     </div>
            <button onClick={()=>handleTogle(true)} className="btn">Add More Player</button>        
        </div>
    );
};

export default SelectedP;