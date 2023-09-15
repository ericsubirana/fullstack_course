export default function Total(props){
    const ex1 = props.parts[0].exercises
    const ex2 = props.parts[1].exercises
    const ex3 = props.parts[2].exercises
    return(
        <div>
            <p>Number of exercises {ex1+ex2+ex3} </p>
        </div>
    )
}