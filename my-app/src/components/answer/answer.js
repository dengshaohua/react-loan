import React from "react";
import { Button } from "antd";
import axios from "axios";
import "../../mock/mock"
export default function Answer(){
    return (
        <div>
           <Button>下一题</Button>
           <Button>查看答案</Button>
        </div>
    )
}