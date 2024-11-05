import React from "react";

const SinglePostGallery = 
	({ images }) => {
		return (
			<div>
				{images.map((url, index) => (
					<div key={index} style ={{ margin: "25px 0"}}>
						<img 
							src={url}
							alt={`Image ${index + 1}`}
							style={{width: "100%", height: "auto"}}

							 />
						<hr style ={{ height: "3px", background: "light grey",  borderRadius: "6px", border: "none"}} />
		 
					</div>

					))}

			</div>
			)
	};

export default SinglePostGallery;


