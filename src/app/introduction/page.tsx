import TitleBar from "../ui/common/titleBar"
export default function Page(){
    return (
        <div>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                <TitleBar title='자기소개'></TitleBar>
            </h1>
        </div>
    )
}