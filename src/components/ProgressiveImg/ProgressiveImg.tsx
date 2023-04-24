import React, { useState } from "react";
import "./ProgressiveImg.css";

type ProgressiveImgProps = {
	src: string;
	alt?: string;
	fallback: string;
};

const ProgressiveImg = ({ src, alt, fallback }: ProgressiveImgProps) => {
	const [imgLoaded, setLoaded] = useState(false);

	const handleImgLoaded = () => setLoaded(true);

	return (
		<picture className="progressive-img">
			<img src={fallback} className={` ${imgLoaded ? "hidden" : "visible"} progressive-img__fallback`} alt={alt} />
			<img
				src={src}
				className={` ${!imgLoaded ? "hidden" : "visible"} progressive-img__large`}
				loading="lazy"
				alt={alt}
				onLoad={handleImgLoaded}
			/>
		</picture>
	);
};

export default ProgressiveImg;
