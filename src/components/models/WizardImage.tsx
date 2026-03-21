import React from 'react'
import Image from 'next/image'
// import imge from "../../../public/IMG2.jpg"
import imge from "../../../public/IMG3.jpg"

const Wizard = () => {
    return (
        <div className="absolute top-1/2 left-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 z-10">

            {/* CERCLE PLUS GRAND */}
            <div className="
                relative
                w-48 h-48
                sm:w-56 sm:h-56
                md:w-64 md:h-64
                lg:w-72 lg:h-72
                xl:w-64 xl:h-64
                rounded-full
                overflow-hidden
                border-4 border-accent/40
                shadow-glass-inset
                profile__perfil
            ">

                <Image
                    src={imge || "/placeholder.svg"}
                    alt="profile-image"
                    fill
                    priority
                    sizes="
                        (max-width: 640px) 12rem,
                        (max-width: 768px) 14rem,
                        (max-width: 1024px) 16rem,
                        (max-width: 1280px) 18rem,
                        20rem
                    "

                    className="
                        object-cover
                        object-[50%_15%]
                        scale-98
                    "
                />

            </div>
        </div>
    )
}

export default Wizard