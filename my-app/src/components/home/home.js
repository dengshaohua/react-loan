import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Home() {
    return (
        <div id="home">
            <Link to={"/answer"}>
                <Button className="item">开始答题</Button>
            </Link> 
        </div>
    )
}