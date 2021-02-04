import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import SideBar from './components/SideBar';

const App = () => {
	const [title, setTitle] = React.useState('');
	const [text, setText] = React.useState('');
	const [savedNote, setSavedNote] = React.useState('')

	const getTitle= async(input)=>{
		setTitle(input);
	}
	
	const getText= async(input)=>{
		setText(input);
	}
	
	const loadData=() => {
		const loaded = JSON.parse(localStorage.getItem('bloc'));
		return loaded ? loaded : [{title: "no notes", text: "no notes"}];
	};

	const handleSave = () => {
		const tempload = loadData();
		const note = JSON.stringify([{title: title, text: text},...tempload]);
		localStorage.setItem('bloc', note);	
		const parsednote = loadData();
		setSavedNote(parsednote);
	};

  return(
		<div className="row">
			<SideBar savedNote={savedNote} newTitle={getTitle} newText={getText}/>
			<main className="col-10 p-0 bg-dark">
				<h1>Mon Bloc-Note</h1>
				<div className="display">
					<h2>{title}</h2>
					<NoteDisplay text={text}/>
				</div>
				<div className="inputfield">
					<MarkdownInput title={getTitle} text={getText} handleSave={handleSave}/>
				</div>
			</main>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));