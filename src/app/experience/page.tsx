import TitleBar from "../ui/common/titleBar"
export default function Page(){
    return (
        <div>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                <TitleBar title='경력기술서'></TitleBar>
            </h1>
        </div>
    )
}