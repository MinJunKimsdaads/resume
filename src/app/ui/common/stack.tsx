export default function Stack({
    lang,
    logo,
    color,
}:{
    lang:string;
    logo:string;
    color:string;
}){
    return (
        <>
            <img src={`https://img.shields.io/badge/${lang}?style=flat-square&logo=${logo}&logoColor=${color}`}></img>
        </>
    )
}