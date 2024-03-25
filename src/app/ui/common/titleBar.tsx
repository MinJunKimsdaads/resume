export default function TitleBar({
    title,
}:{
    title:string
}){
    return(
        <h2 className={`mb-4 text-xl md:text-2xl`}>
            {title}
        </h2>
    )
}