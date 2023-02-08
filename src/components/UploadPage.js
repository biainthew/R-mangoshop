import React, { useState } from 'react'
import { Button, message, Form, Input, Divider, InputNumber } from 'antd';
import "./UploadPage.scss"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UploadPage() {
    const [imageUrl, setImageUrl] = useState(null);
    const history = useNavigate();
    const onSubmit = (values) => {
        axios.post(``,{
            name: values.name,
            description: values.description,
            seller : values.seller,
            price: values.price,
            imageUrl: imageUrl
        }).then((result)=>{
            console.log(result);
            history('/',{replace:true})
        }).catch((error)=>{
            console.log(error);
            message.error(`에러 발생 ${error}`)
        })
    };
    const onChangeImage = (info) => {
        // if(){
        //     return;
        // }
        // if(){

        // }
    }
  return (
    <div id='upload-container'>
      <Form name='upload-form' onFinish={onSubmit}>
        <Form.Item name="upload" label={<span className='upload-label'>상품사진</span>}>
            <div id='upload-image' onChange={onChangeImage}>
                <img src="/images/icons/camera.png" alt="" />
                <span>이미지를 업로드 해주세요</span>
            </div>
        </Form.Item>
        <Divider/>
        <Form.Item name='seller' rules={[{required:true, message: "판매자명은 필수 입력값 입니다"}]} label={<span className='upload-label'>판매자명</span>}>
            <Input className='upload-name' placeholder='판매자명을 입력해주세요' size='large'/>
        </Form.Item>
        <Divider/>
        <Form.Item name='name' rules={[{required:true, message: "상품명은 필수 입력값 입니다"}]} label={<span className='upload-label'>상품명</span>}>
            <Input className='upload-name' placeholder='상품명을 입력해주세요' size='large'/>
        </Form.Item>
        <Divider/>
        <Form.Item name='price' rules={[{required:true, message: "상품명은 필수 입력값 입니다"}]} label={<span className='upload-label'>판매가</span>}>
            <InputNumber className='upload-price' min={1} size='large'/>
        </Form.Item>
        <Divider/>
        <Form.Item name='description' rules={[{required:true, message: "상품명은 필수 입력값 입니다"}]} label={<span className='upload-label'>상품설명</span>}>
            <Input.TextArea id='product-description' showCount maxLength={300} placeholder="상품 설명을 작성해주세요" size='large'/>
        </Form.Item>
        <Divider/>
        <Form.Item>
            <Button id='submit-button' size='large' htmlType='submit'>상품등록하기</Button>
        </Form.Item>
      </Form>
    </div>
  )
}