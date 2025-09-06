import React from 'react'
import Image from 'next/image'
import imge from "../../../public/profile311.jpg"

const Wizard = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
                            rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset">
                <Image 
                    src={imge || "/placeholder.svg"} 
                    alt="profile-image" 
                    fill
                    sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}

export default Wizard;