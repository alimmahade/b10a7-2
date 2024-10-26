const Bannar = ({handleCredit}) => {

    return (
        <div>
            <div className="bg-[url('/src/assets/bg-shadow.png')] bg-no-repeat bg-cover h-[500px]">
               <div className="grid gap-6">
               <div className="flex justify-center">
                <img src="/src/assets/banner.png" alt="banar pic" />
                </div>
                <div>
                <h1 className="text-4xl text-center text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-2xl text-gray-400 text-center">Beyond Boundaries Beyond Limits</p>
                </div>
                    <div className="flex justify-center">
                    <button onClick={()=>handleCredit(600000)
                    } className="btn">Clim Free Credit</button>
                    </div>
               </div>

            </div>
        </div>
    );
};

export default Bannar;