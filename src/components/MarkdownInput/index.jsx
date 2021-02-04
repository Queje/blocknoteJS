import React from 'react';

const MarkdownInput =({title, text}) => (
	<>
		<input type="text" onChange = {(e) => title(e.target.value)} />
		<input type="textarea" onChange={(e) => text(e.target.value)}/>
	</>
);	

export default MarkdownInput;