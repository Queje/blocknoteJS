import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ({text}) => {
	console.log("depuis NoteDisplay"+text)
	const converter = new Showdown.Converter();
	const content = converter.makeHtml(text);

	return(
		<div dangerouslySetInnerHTML={{ __html: content }} />
	)
};

export default NoteDisplay;