import React from "react";

const SinglePostGallery = 
	({ images }) => {
		return (
			<div>
				{images.map((url, index) => (
					<div key={index} style ={{ width: "300px"}}>
						<img 
							src={url}
							alt={`Image ${index + 1}`}
							style={{width: "100%", height: "auto"}}

							 />
					</div>


					))}

			</div>
			)
	};

export default SinglePostGallery;


