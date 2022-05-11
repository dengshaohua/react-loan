import React,{useState,useEffect} from "react";
import { Button,Modal} from "antd";
import "./index.css"
import axios from "axios";
import "../../mock/mock"

export default function Answer() {

    // const [list, setList]=useState([]);
    // useEffect(() => {
    //     axios.get('/mock').then((res) => {
    //       setList(res.data.data);
    //       console.log(res.data.data, 'Ok')
    //     })
    //   }, []);
    const {isModalVisible,setIsModalVisible} = useState(false);
    const showAnswer=()=>{
        setIsModalVisible(true)
    };
    const handleOk =()=>{
      setIsModalVisible(false)
    };
    const handleCancel=()=>{
      setIsModalVisible(false)
    };
    return (
        <div className="answer-context">
          {/* {
           list.map((item)=>{
             return ( <div className="answer-timu"  key={item.id}>
              <h1 className="first-timu">题目:{item ?item.problem: ''}
              </h1>
              <span>{item.selects?item.selects[0]: ''}</span>
              <span>{item.selects?item.selects[1]: ''}</span>
              <span>{item.selects?item.selects[2]: ''}</span>
              <span>{item.selects?item.selects[3]: ''}</span>
          </div>)
            })[0]
          } */}
          
           {/* 下一题/答案 */}
           <div className="answer-button">
                <Button type="primary"  shape='round'>下一题</Button>
                <Button type="primary"  shape='round' onClick={showAnswer}>查看答案</Button>
           </div> 
           <Modal
            title="Basic Modal" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            cancelText="取消"
            okText="确定" >
              <p>答案：{}</p>
            </Modal>
        </div>
    )
}