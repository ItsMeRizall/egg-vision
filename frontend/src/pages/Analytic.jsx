import React, {useCallback, useState, useRef } from "react";
import Navbar from "../components/NavBar";
import Webcam from "react-webcam";
import Vector from "../assets/Vector.png";
import ButtonCstm from "../components/ButtonCstm";
import Camera from "../assets/camera.svg"

export default function Analytic() {
  const [isShowVideo, setIsShowVideo] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);

  const videoElement = useRef(null);

  // const videoConstraints = {
  //     width: 675,
  //     height: 670,
  //     facingMode: "user"
  // }

  const captureImage = () => {
    const imageSrc = videoElement.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const capture = useCallback(() => {
    const imageSrc = videoElement.current.getScreenshot();
    setCapturedImage(imageSrc);
    console.log("Gambar Di Ambil")
    setIsShowVideo(false)
  }, [videoElement]);

  const retake = useCallback(() => {
    setCapturedImage(null);
    setIsShowVideo(true);
    console.log("Retake Foto");
  }, []);

  const testCam= () => {
    console.log("apaa ya")
  }

  return (
    <>
      <div className="flex flex-col h-screen px-16 py-4 overflow-hidden">
        <Navbar />
        <div className="flex items-center min-h-full text-[#3E0000]">
          <div className="basis-1/2 flex flex-col m-9 relative h-max bg-slate-200 box-border border-[#3E0000] border-2">
            {isShowVideo ? (<Webcam audio={false} ref={videoElement} />) :
            (<img className="w-full h-full object-cover" src={capturedImage} alt="Captured" />)
            }
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <ButtonCstm img={Camera} event={capture} color={"bg-[#3E0000]"} radius={"rounded-full"}/>
            </div>
            {/* <button className="absolute bottom-0 left-0 right-0" onClick={captureImage}>Capture Image</button> */}
          </div>
          <div className="basis-1/2 flex flex-col">
            <div className="flex justify-around">
                <ButtonCstm event={testCam} color={"bg-[#1C8C00] text-white"} radius={"rounded-3xl"} text={"Lanjut"}/>
                <ButtonCstm event={retake} color={"bg-[#004CDF] text-white px-10"} radius={"rounded-3xl"} text={"Ambil Ulang"}/>
            </div>
            <img className="w-[580px] mt-5" src={Vector} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
