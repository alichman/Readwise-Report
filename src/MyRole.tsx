import './App.css';
import './MyRole.css';

export const MyRole = () => (
  <div className="MyRole">
	<div className="HeadText">
	  <h1>My Role at Readwise</h1>
	  <p>
		  As an Software Developer Intern, I spent my first few weeks tracking down
		  simple bugs, and developed features that full-time engineers didn't have time for.
		  However, as I continuously demonstrated my progress as an engineer,
		  my tasks evolved accordingly.<br/><br/>
		  To show this, here are my largest accomplishments for each month:
	  </p>
	</div>
	  <div className="FlexList">
		  <div>
			  <h1>MAY</h1>
			  <h2>Animation Refactor</h2>
			  <p>The library we were using at the time for gestures
			  and animations was suboptimal, and I was given the task
			  of refactoring our most important gestures in their entirety
			  to use a newer, smoother library.</p>
		  </div>
		  <div>
			  <h1>JUNE</h1>
			  <h2>Android Crash</h2>
			  <p>When an android user tried to update their app, it would
			  consistently crash. This issue had persisted for years, so I
			  was given the chance to attempt to fix it. This one took me
			  a good few days, but the app doesn't crash anymore!</p>
		  </div>
		  <div>
			  <h1>JULY</h1>
			  <h2>User Review Prompts</h2>
			  <p></p>
		  </div>
		  <div>
			  <h1>AUGUST</h1>
			  <h2>External Document Sharing</h2>
			  <p>babungus fungus</p>
		  </div>
	  </div>
  </div>
);