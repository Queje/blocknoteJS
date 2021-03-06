import React from 'react';

const SideBar = ({savedNote, newTitle, newText, handleClick}) => {

	const handleNewNote = () => {
		newTitle("nouvelle note");
		newText("nouvelle note");
	}

	return (
		<aside className="col-2 p-0 bg-dark">
			<nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start">
				<div className="collapse navbar-collapse">
					<ul className="flex-md-column flex-row navbar-nav w-100 justify-content-center">
						<li className="nav-item">
								<button className="btn btn-danger" onClick={handleNewNote}>ajouter une note</button>
						</li>
						<div className="list">
						{(savedNote) &&
							<section> 
								{
									savedNote.map((note, index) => (
										<li key={index} onClick={() => handleClick(index)}>{note.title}, {note.text}</li>
									))
								}
							</section>
						}
						</div>
					</ul>
				</div>
			</nav>
		</aside>
	);
}

export default SideBar;
