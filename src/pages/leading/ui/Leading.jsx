import { Button } from "../../../shared";
import {Header} from "../../../widgets";


export default function Leading() {

    const testFunc = () => {
        console.log("a");
    }

    return (
        <div>
            Leading
            <Header />
            <Button text="asasd" color="green" onClick={testFunc} />
        
        </div>
    );
}