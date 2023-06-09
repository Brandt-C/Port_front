import { useLocation } from "react-router-dom";


const Story = () => {

    let { state } = useLocation();
    console.log(state)

    return (
        <h1>this will be a story someday!</h1>
    )
}

export default Story;