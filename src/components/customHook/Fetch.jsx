import useFetch from "./useFetch";

export default function Fetch(){
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    return(
        <>
        <hr />
            {data && data.slice(0, 10).map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    )
}