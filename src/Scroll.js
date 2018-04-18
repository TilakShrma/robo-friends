import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflow: 'scroll', borderTop : '1px solid blue', height : '800px'}}>
			{props.children};
		</div>
	);
};

export default Scroll;