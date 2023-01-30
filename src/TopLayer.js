import React from 'react';

function TopLayer({topLayer, fadeInClass, currentTrait}) {
	return (
		<div>
			<img alt={`Chris as a ${currentTrait.description}`} className={fadeInClass ? 'image-top-layer-enter': 'image-top-layer-exit'} style={topLayer} src={currentTrait.image} />
		</div>
	);
}

export default TopLayer;