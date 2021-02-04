import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';

const App = () => {
	const [titleCopy, setTitleCopy] = React.useState('');
	const [textCopy, setTextCopy] = React.useState('');

	const getTitleCopy= async(input)=>{
		setTitleCopy(input);
	}

	const getTextCopy= async(input)=>{
		setTextCopy(input);
	}
	
	console.log("c'est la copie dans APP du titre:"+titleCopy);
	console.log("c'est la copie dans APP du texte:"+textCopy);
		
  return(
		<main>
			<h1>Mon Bloc-Note</h1>
			<div className="display">
				<h2>{titleCopy}</h2>
				<NoteDisplay text={textCopy}/>
			</div>
			<div className="inputfield">
				<MarkdownInput title={getTitleCopy} text={getTextCopy}/>
			</div>
		</main>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));