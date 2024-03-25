import TitleBar from "./ui/common/titleBar";

export default async function Page(){
  return (
    <div>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        <TitleBar title='기본정보'></TitleBar>
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        
      </div>
    </div>
  )
}