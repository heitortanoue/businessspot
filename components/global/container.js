import Header from "../out/header";

export default function Container ({ children, hideHeader }) {
    return (
        <div className="h-screen overflow-auto">
            <div className="pt-8 container mx-auto">
                {!hideHeader ? <Header/> : null}
                <div className="py-12">
                    { children }
                </div>
            </div>
        </div>
    )
}