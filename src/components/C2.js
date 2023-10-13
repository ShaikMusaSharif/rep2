import {Component} from "react";
import C3 from './C3';
class C2 extends Component{
    constructor(){
        super();
        console.log("Iam constructor");
        this.state = {brand : "nike",toggle:true}
    }
    static getDerivedStateFromProps(){
        console.log("Iam derivedStateFromProps method");
        return null;
    }
    componentDidMount(){
        console.log("Iam componentDidMount method");
    }
    shouldComponentUpdate(){
        console.log("I am shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("Iam getSnapshotBeforeUpdate method");
        return null;
    }
    componentDidUpdate(){
        console.log("Iam componentDidUpdate method");
    }
    render(){
        console.log("Iam render Method");
        return(
            <div>
                <h1>Lifecycle methods</h1>
                <p>{this.state.brand}</p>
                <button onClick={()=>{this.setState({brand:"adidas"})}}>Click</button>
                {
                    (this.state.toggle)?<C3/>:null
                }
                <button onClick={()=>{this.setState({toggle:false})}}>Unmount</button>
            </div>
        )
    }
}
export default C2;