import './App.css';
import './Goals.css';

export const Goals = () => (
    <div className="Goals">
        <div className="HeadText">
            <h1>My Goals</h1>
            <p>
                A reflection on my perspective at the beginning of the work term.
            </p>
        </div>
        <div className="FlexList">
            <div>
                <h1>Critical Thinking</h1>
                <h2>Exploring the difference between personal and professional programming projects.</h2>
                <p>
                    I've made a variety of personal and educational projects in the past few years,
                    with varying code quality. When I was putting together my Resume and Cover Letter for this work term,
                    I reviewed some of my old work and found it to be messy and confusing.<br/>
                    With this in mind, I've decided to put effort into exploring code formats and standards.
                    <br/><br/>
                    What I've learned was that the true difference was simple, but held significant implications -
                    The difference between presonal and professional code is that you are not the only one reading it.
                    A function in a personal project has only one standard - it must work. But that's not the case with
                    code that will be adapted and optimized by programmers that you might never even meet. Shared code like
                    this must be perfectly clear on its intended behaviour and the logic used to achieve it. This leaves "hacky"
                    solutions to be very frowned upon, even if they're an optimal solution in terms of results.
                    <br/><br/>
                    There was on task in particular that gave me a proper understanding of this principle.
                    One of my first large tasks, as previously mentioned, was refactoring a gesture handler to use a more powerful
                    animation library. My initial solution was acceptable, and passed testing and review. However, in late August,
                    another engineer was adjusting related logic, and ran into some of my confusing code. He made changes that he
                    didn't fully understand, and didn't bother testing some things. The result was my old project being completely broken.
                    I decided to dedicate a full day not just fixing the glitch, but completely changing the logic flow to be clear,
                    and as a result even found some improvements to implement.
                    <br/><br/>
                    This understanding of how clear code helps not just myself, but other engineers, is something I'll be sure
                    to consider with every function I write in the future, and is certainly one of the most valuable lessons I've
                    learned at Readwise.
                </p>
            </div>
            <div>
                <h1>Communication</h1>
                <h2>Learning to work in a team of engineers.</h2>
                <p>
                    I have always wondered how a development team can split and combine their workload when working on the same issue.
                    As I've always developed alone, I couldn't imagine the level of communication required to share my thinking with
                    someone else. I did, however, imagine it to be an absolute necessity for the creation of a large application.
                    <br/><br/>
                    I've found the reality to be quite interesting - Developers at Readwise, for the most part, still develop specific
                    features alone. A typical team discussion would involve implementation requirements, potential approaches, and other
                    helpful details, but development is still a personal process.
                    <br/><br/>
                    I've had a few chances to work together with another engineer on one specific issue, and the experience would
                    typically involve back-and-forth updates about our own progress and discoveries, rather than joint development.
                    I really enjoyed this form of teamwork. Describing exact processes is too unreliable, but with this kind of communication,
                    it's easy to narrow down the true source of a bug, and it's always possible to merge two solutions into one.
                    <br/><br/>
                    Over all, I really appreciated the ability to work on my own, and describe findings, instead of theories, and I hope to apply
                    this method of communication to upcoming scholarly projects.
                </p>
            </div>
            <div>
                <h1>Technological Literacy</h1>
                <h2>Proficiency in new languages</h2>
                <p>
                    The primary purpose of an internship is to develop as a programmer, and there is no clearer goal than to learn
                    more languages, and to discover more intricacies to languages one already knows. When I received my job offer at Readwise,
                    I was tasked with learning React, React Native, and javascript fundamentals before my starting date. As I did so, I found
                    myself fascinated by the concept of React, and set a goal to learn this language in depth throughout my internship.
                    <br/><br/>
                    About a week into my internship, however, I've confirmed an assumption I had for a while - that fundamentally, programming
                    languages are mostly the same. The idea of manipulating data in a way that we understand is universal, and any new
                    programming language is going to emulate existing, popular languages with its syntax. I found this very convenient,
                    as it allowed me to quickly apply my previous experience from languages such as python, C and Java, despite React being
                    as unique as it is.
                    <br/><br/>
                    This isn't to say, however, that there was nothing for me to learn. The very fact that there are many languages suggests
                    that each one has its strengths. These strengths reflect the intended approach to specific solutions that the language
                    was designed to tackle, as well as the logical process the programmer must use.
                    <br/><br/>
                    I've mentioned the unique nature of React multiple times, but what is it that I found amazing?<br/>
                    A typical JavaScript site re-renders a page with every frame. This is a lot of work, and can be optimized, but
                    is fundamentally an imperfect approach. React, on the other hand, is made entirely to only refresh the things that need to
                    be refreshed, when they need to be refreshed. This greatly changes to problem-solving approaches to different solutions,
                    and introduces new challenges to get everything refreshed on time.<br/>This leads to my next goal - Efficiency.
                </p>
            </div>
            <div>
                <h1>Critical Thinking</h1>
                <h2>Efficient programming</h2>
                <p>babungus fungus</p>
            </div>
            <div>
                <h1>AUGUST</h1>
                <h2>External Document Sharing</h2>
                <p>babungus fungus</p>
            </div>
        </div>
    </div>
)