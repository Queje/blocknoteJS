import React from 'react';

const MarkdownInput =({title, text}) => (
	<>
		<input type="text" onChange = {(e) => title(e.target.value)} />
		<input type="textarea" onChange={(e) => text(e.target.value)}/>
		<button className="btn btn-danger">Save</button>
	</>
);	

export default MarkdownInput;