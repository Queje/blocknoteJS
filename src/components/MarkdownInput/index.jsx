import React from 'react';

const MarkdownInput =({title, text, handleSave}) => {
	
	return(
	<>
		<input type="text" onChange = {(e) => title(e.target.value)} />
		<textarea onChange={(e) => text(e.target.value)}/>
		<div className="buttonbox">
			<button className="btn btn-danger" onClick={handleSave}>Save</button>
		</div>
	</>
	)
};	

export default MarkdownInput;