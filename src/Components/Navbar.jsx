
export default function Navbar() {
return (
        <div className="flex justify-between  px-10 py-1">
            <img className="w-[8vw]" src="logosns.png"></img>
            <div className="flex items-center">
                <a href="#" className=" content-center font-medium cursor-pointer mx-6 text-white hover:bg-white hover:rounded-full hover:text-black px-3 h-fit z-10">Life At NITC</a>
                <a href="#" className=" content-center font-medium cursor-pointer mx-6 text-white hover:bg-white hover:rounded-full hover:text-black px-3 h-fit z-10">Activites</a>
                <a href="#" className=" content-center font-medium cursor-pointer mx-6 text-white hover:bg-white hover:rounded-full hover:text-black px-3 h-fit z-10">About US</a>
            </div>

        </div>
    )
}