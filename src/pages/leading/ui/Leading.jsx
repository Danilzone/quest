import { Button } from "../../../shared";



export default function Leading() {

    const testFunc = () => {
        console.log("a");
    }

    return (
        <div>
            Leading

            <Button text="asasd" color="green" onClick={testFunc} />
        
        </div>
    );
}