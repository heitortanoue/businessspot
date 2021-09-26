import Image from "next/image"
import Logo from "/public/logos/logobusinessspot_full _combranco.svg"
import Link from "next/link"

export default function Header({}) {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="w-1/3">
                <Link passHref href="/"><div className="cursor-pointer"><Image unsized="true" src={Logo} alt="Logo"/></div></Link>
            </div>
            <div className="flex flex-1 text-lg w-1/3 justify-around">
                <div>Sobre nós</div>
                <div>Serviços</div>
                <div>Preços</div>
            </div>
            <div className="w-1/3 flex justify-end">
                <div className="bg-primary py-1 px-4 w-min flex items-center gap-5 rounded-lg">
                    Login
                    <i className="fas fa-long-arrow-alt-right text-white"></i>
                </div>
            </div>
        </div>
    )
}