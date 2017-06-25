import React,{Component} from 'react';
import ReactSwipe from "react-swipe";
import "./index.less"
export default class Slider extends Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render(){
        let opt={
            continuous: true,
            callback:(index)=>{
                this.setState({index});
            }
        }
        return (
            <div className="wrap">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div><img src={require("./1.jpg")} alt=""/></div>
                    <div><img src={require("./2.jpg")} alt=""/></div>
                    <div><img src={require("./3.jpg")} alt=""/></div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?"cur":""}></li>
                    <li className={this.state.index==1?"cur":""}></li>
                    <li className={this.state.index==2?"cur":""}></li>
                </ul>
            </div>
        )
    }
}
