import Part from "./Part.js"

export default function Content(props) {
    const part1 = props.parts[0]
    const part2 = props.parts[1]
    const part3 = props.parts[2]

    return (
        <div>
            <Part title={part1.name} exercises={part1.exercises}/>
            <Part title={part2.name} exercises={part2.exercises}/>
            <Part title={part3.name} exercises={part3.exercises}/>
        </div>
    )
}