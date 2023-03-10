import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import * as cocoSsd from '@tensorflow-models/coco-ssd'

const ObjectDetectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetectorContainer = styled.div`
    min-width: 200px;
    height: 500px;
    border: 3px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: cneter;
    position: relative;
`;

const TargetImg = styled.img`
    height: 100%;
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const SelectButton = styled.button`
    padding: 7px 10px;
    border: 2px solid transparent;
    background-color: #fff;
    color: #0a0f22;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    margin-top: 2em;
    cursor: pointer;
    transition: all 260ms ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
`;

const ObjectDetector = (props) => {
    const fileInputRef = useRef()
    const [imgData, setImgData] = useState(null)

    const openFilePicker = () => {
        if (fileInputRef.current) fileInputRef.current.click()
    }

    const readImage = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.onload = () => resolve(fileReader.result)
            fileReader.onerror = () => reject(fileReader.error)
            fileReader.readAsDataURL(file)
        })
    }

    const onSelectImage = async (e) => {
        const file = e.target.files[0]
        const imgData = await readImage(file)

        setImgData(imgData)
    }

    return (
        <ObjectDetectorContainer>
            <DetectorContainer>
                {imgData && <TargetImg src={imgData} />}
            </DetectorContainer>
            <HiddenFileInput type="file" ref={fileInputRef} onChange={onSelectImage} />
            <SelectButton onClick={openFilePicker}>Select Image</SelectButton>
        </ObjectDetectorContainer>
    )
}

export default ObjectDetector
