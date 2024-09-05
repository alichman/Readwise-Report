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
			  <p>
				  Gestures are a part of an app that often go unnoticed if they're good, but considered a
				  critical flaw when they're inconsistent. When I first got started at Readwise, we used
				  a library that worked well on typical devices, but on a slower device, they were nearly
				  unusable.
				  <br/><br/>
				  One of my managers was already starting to work on changing some gestures to
				  use a different, more suitable library. After a few weeks at the company, I was assigned
				  to take over this effort.
				  <br/><br/>
				  This was a fairly direct task, but I've learned much about the process of quality assurance,
				  as well as code quality standards while working on it.
			  </p>
		  </div>
		  <div>
			  <h1>JUNE</h1>
			  <h2>Android Crash</h2>
			  <p>
				  React Native provides a way to update apps without going through playstores. This "Over-The-Air"
				  method is very convenient for bug fixes and quick features, as users would get them automatically.
				  <br/><br/>
				  However, one issue has plagued this feature in Readwise Reader for years - if an Android user manually
				  downloads one of these updates, their app crashes. They could still reopen the updated app, so this
				  issue was deemed more of an annoyance, and wasn't given high priority.
				  <br/><br/>
				  I managed to fix this issue by upgrading one of our libraries that was instantiating multiple times.
				  This was the first of many production-only bugs that I would tackle throughout my internship, making it
				  more challenging and time-consuming to debug and fix. This experience honed my ability to theorize issues
				  without debugging tools, which I've found to be a crucial skill for quality of solutions.
			  </p>
		  </div>
		  <div>
			  <h1>JULY</h1>
			  <h2>User Review Prompts</h2>
			  <p>
				  One of the first things a potential new user checks is app reviews. However, these reviews can be
				  very polarizing, as a user with an average, content opinion rarely puts in the effort to rate the app.
				  This makes an in-app prompt a great way to properly represent the public opinion of the product.
				  <br/><br/>
				  Unlike other tasks, which were often laying around before being assigned to me, this one was designed
				  with me in mind. I was looking forward to work on more back-end features, and this was an exciting
				  feature to develop.
			  </p>
		  </div>
		  <div>
			  <h1>AUGUST</h1>
			  <h2>External Document Sharing</h2>
			  <p>
				  One way of importing documents into Reader is to share them into the app through the phone's built-in
				  sharing panel.
				  <br/><br/>
				  This feature was glitched, however - when a document was shared, it failed to open properly
				  due to timing issues. This occurred only in production builds, much like the Android Crash mentioned
				  earlier. This, paired with the timing-based nature of the issue, ment that there was an easy, suboptimal
				  solution - to put simple delays between different pieces of code that raced against each other. This solution
				  was accepted by another engineer on my team, but as I am an intern, I had the time to dig deeper and search
				  for a more reliable solution.
				  <br/><br/>
				  I believe this task set me apart from the developer that I was at the beginning of my internship, as I too
				  would have been happy with the quick fix. Though this issue took a week of work, it was very satisfying to
				  complete, which also marked a development which I describe further in the Goals section.
			  </p>
		  </div>
	  </div>
  </div>
);