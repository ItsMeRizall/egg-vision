import React, { useCallback, useState, useRef, useEffect } from "react";
import Navbar from "../components/NavBar";
import Webcam from "react-webcam";
import Vector from "../assets/Vector.png";
import ButtonCstm from "../components/ButtonCstm";
import Camera from "../assets/camera.svg";
import { useNavigate } from "react-router-dom";

export default function Analytic() {
  const [isShowVideo, setIsShowVideo] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoElement = useRef(null);
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = videoElement.current.getScreenshot();
    setCapturedImage(imageSrc);
    console.log("Gambar Di Ambil");
    setIsShowVideo(false);
  }, [videoElement]);

  const retake = useCallback(() => {
    setCapturedImage(null);
    setIsShowVideo(true);
    console.log("Retake Foto");
  }, []);

  const handleNextClick = () => {
    if (capturedImage) {
      navigate("/result", { state: { imageData: capturedImage } });
    } else {
      alert("Silakan ambil gambar dulu.");
    }
  };

  // useEffect(() => {
  //   const handleFileUpload = () => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const imageData = reader.result;
  //       setCapturedImage(imageData);
  //     };
  //     reader.readAsDataURL(capturedImage);
  //   };

  //   if (capturedImage) {
  //     handleFileUpload();
  //   }
  // }, [capturedImage]);

  return (
    <>
      <div className="flex flex-col h-screen px-16 py-4 overflow-hidden">
        <Navbar />
        <div className="flex items-center min-h-full text-[#3E0000]">
          <div className="basis-1/2 flex flex-col m-9 relative h-max bg-slate-200 box-border border-[#3E0000] border-2">
            {isShowVideo ? (
              <Webcam audio={false} ref={videoElement} screenshotFormat="image/png" />
            ) : (
              <img
                className="w-full h-full object-cover"
                src={capturedImage}
                alt="Captured"
              />
            )}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <ButtonCstm
                img={Camera}
                event={capture}
                color={"bg-[#3E0000]"}
                radius={"rounded-full"}
              />
            </div>
          </div>
          <div className="basis-1/2 flex flex-col">
            <div className="flex justify-around">
              <ButtonCstm
                event={handleNextClick}
                color={"bg-[#1C8C00] text-white"}
                radius={"rounded-3xl"}
                text={"Lanjut"}
              />
              <ButtonCstm
                event={retake}
                color={"bg-[#004CDF] text-white px-10"}
                radius={"rounded-3xl"}
                text={"Ambil Ulang"}
              />
            </div>
            <img className="w-[580px] mt-5" src={Vector} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
