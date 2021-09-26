import Header from "../out/header";

export default function Container ({ children }) {
    return (
        <div className="flex w-full">
            <div className="pt-8 container mx-auto">
                <Header/>
                <div className="py-12">
                    { children }
                </div>
            </div>
        </div>
    )
}