import styles from "./video.module.scss";
import ReactPlayer from "react-player";

const VideoModule = () => {
  return (
    <div>
      <div>
        <video
          src="https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin"
          controls={true}
          style={{
            width: "300px",
          }}
        />
      </div>
      {/* <div>
        <ReactPlayer url="https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin" />
      </div> */}
    </div>
  );
};

export default VideoModule;
