import './App.css';
import './Goals.css';


const GoalsWT2 = () => (
    <div className="Goals">
        <div className="HeadText">
            <h1>My Goals</h1>
            <p>
                A reflection on my perspective at the beginning of the second work term.
            </p>
        </div>
        <div className="FlexListGoals">
            <div>
                <h1>Problem Solving</h1>
                <h2>Tackling next-level projects</h2>
                <p>
                    Following my first work term, I felt satisfied with my performance up to that point. I had certainly been challenged,
                    especially in my ability to learn quickly and develop in a new, complex environment. However, when looking forward to
                    the Fall term, I knew it was time to challenge myself in a new way. Thus, I made it a mission for this term to seek
                    a project that I personally wanted to see developed, and bring it to users myself. Luckily, I've found multiple.<br/><br/>
                    The last three projects in the My Role section were the result of my search for a challenging project. As I've mentioned,
                    I've spent weeks on each one, and they have all been catalysts for my growth as an engineer. In that way, I can certainly
                    consider this goal completed. However, there was more that I've learned through pursuing these projects that have expanded
                    my mentality regarding teamwork.<br/><br/>
                    In September, I was assigned a simple issue - When a user listened to a document while in the homepage of the website, their
                    document's progress bar wasn't moving forward. The CX member who reported the issue assumed it was a glitch, in which the progress
                    bar itself just wasn't updating. As I've mentioned, at the time I was looking for quick issues to hack through to get back into
                    the flow of programming so I thought this would be a quick investigation. After I discovered that it wasn't a bug, and that we
                    entirely lacked Text-to-Speech progress tracking as a feature, I was tempted to punt this fix until later, or hand it off to someone
                    else. However, on my way home that day, I couldn't help thinking about this issue, and how I might go about solving it. The next day,
                    partially driven by this goal, and partly by the growing annoyance and obsession with the issue, I decided to take on this task.<br/><br/>
                    I've later received feedback from my managers, saying that this decision, along with others, resulted in a strengthened trust towards
                    me from other members of the development team. I started getting assigned more difficult issues, particularly in the TTS field.<br/><br/>
                    This feedback made me realize how much of the trust between team members comes from initiative, and not needing to be told what to do,
                    what decisions to make, where to take risks, and crucially, when to ask for help.

                </p>
            </div>
            <div>
                <h1>Technological Literacy</h1>
                <h2>Develop a specialty within the company</h2>
                <p>
                    I spent my first work term at Readwise with the hopes of exploring as much of the codebase as possible. Though it was comforting
                    to revisit code I've seen before, if I spent too long working on a certain area of the app, I felt the need to diversify my work.
                    However, after coming back for a second term I believed I had explored a good amount of the codebase to feel comfortable with any
                    kind of task, and I thought it would be an interesting challenge to become an expert of a certain field.<br/><br/>
                    I didn't see any kind of advantage to this goal at the time, but thought it would be fun, so I went all in on a field I had already
                    been quite interested in - Text to Speech. TTS has been a recurring area of work for me, as it's a very hard feature to get right,
                    and had plenty of bugs easy enough for an intern to practice on. Additionally, after the completion of my first goal
                </p>
            </div>
            <div>
                <h1>Teamwork</h1>
                <h2>Working more with developers and other teams</h2>
                <p>

                </p>
            </div>
            <div>
                <h1>Written Communication</h1>
                <h2>Write clearer PR descriptions and support requests</h2>
                <p>

                </p>
            </div>
            <div>
                <h1>idk</h1>
                <h2>no clue</h2>
                <p>

                </p>
            </div>
        </div>
    </div>
)

export const Goals = ({wt}:{wt: 1|2}) => {

    if (wt === 2) {
        return GoalsWT2()
    }

    return <div className="Goals">
        <div className="HeadText">
            <h1>My Goals</h1>
            <p>
                A reflection on my perspective at the beginning of my journey with Readwise.
            </p>
        </div>
        <div className="FlexListGoals">
            <div>
                <h1>Critical Thinking</h1>
                <h2>Exploring the difference between personal and professional programming projects.</h2>
                <p>
                    I've made a variety of personal and educational projects in the past few years,
                    with varying code quality. When I was putting together my Resume and Cover Letter for this work
                    term,
                    I reviewed some of my old work and found it to be messy and confusing.<br/>
                    With this in mind, I've decided to put effort into exploring code formats and standards.
                    <br/><br/>
                    What I've learned was that the true difference was simple, but held significant implications -
                    The difference between presonal and professional code is that you are not the only one reading it.
                    A function in a personal project has only one standard - it must work. But that's not the case with
                    code that will be adapted and optimized by programmers that you might never even meet. Shared code
                    like
                    this must be perfectly clear on its intended behaviour and the logic used to achieve it. This leaves
                    "hacky"
                    solutions to be very frowned upon, even if they're an optimal solution in terms of results.
                    <br/><br/>
                    There was on task in particular that gave me a proper understanding of this principle.
                    One of my first large tasks, as previously mentioned, was refactoring a gesture handler to use a
                    more powerful
                    animation library. My initial solution was acceptable, and passed testing and review. However, in
                    late August,
                    another engineer was adjusting related logic, and ran into some of my confusing code. He made
                    changes that he
                    didn't fully understand, and didn't bother testing some things. The result was my old project being
                    completely broken.
                    I decided to dedicate a full day not just fixing the glitch, but completely changing the logic flow
                    to be clear,
                    and as a result even found some improvements to implement.
                    <br/><br/>
                    This understanding of how clear code helps not just myself, but other engineers, is something I'll
                    be sure
                    to consider with every function I write in the future, and is certainly one of the most valuable
                    lessons I've
                    learned at Readwise.
                </p>
            </div>
            <div>
                <h1>Communication</h1>
                <h2>Learning to work in a team of engineers.</h2>
                <p>
                    I have always wondered how a development team can split and combine their workload when working on
                    the same issue.
                    As I've always developed alone, I couldn't imagine the level of communication required to share my
                    thinking with
                    someone else. I did, however, imagine it to be an absolute necessity for the creation of a large
                    application.
                    <br/><br/>
                    I've found the reality to be quite interesting - Developers at Readwise, for the most part, still
                    develop specific
                    features alone. A typical team discussion would involve implementation requirements, potential
                    approaches, and other
                    helpful details, but development is still a personal process.
                    <br/><br/>
                    I've had a few chances to work together with another engineer on one specific issue, and the
                    experience would
                    typically involve back-and-forth updates about our own progress and discoveries, rather than joint
                    development.
                    I really enjoyed this form of teamwork. Describing exact processes is too unreliable, but with this
                    kind of communication,
                    it's easy to narrow down the true source of a bug, and it's always possible to merge two solutions
                    into one.
                    <br/><br/>
                    Over all, I really appreciated the ability to work on my own, and describe findings, instead of
                    theories, and I hope to apply
                    this method of communication to upcoming scholarly projects.
                </p>
            </div>
            <div>
                <h1>Technological Literacy</h1>
                <h2>Proficiency in new languages</h2>
                <p>
                    The primary purpose of an internship is to develop as a programmer, and there is no clearer goal
                    than to learn
                    more languages, and to discover more intricacies to languages one already knows. When I received my
                    job offer at Readwise,
                    I was tasked with learning React, React Native, and javascript fundamentals before my starting date.
                    As I did so, I found
                    myself fascinated by the concept of React, and set a goal to learn this language in depth throughout
                    my internship.
                    <br/><br/>
                    About a week into my internship, however, I've confirmed an assumption I had for a while - that
                    fundamentally, programming
                    languages are mostly the same. The idea of manipulating data in a way that we understand is
                    universal, and any new
                    programming language is going to emulate existing, popular languages with its syntax. I found this
                    very convenient,
                    as it allowed me to quickly apply my previous experience from languages such as python, C and Java,
                    despite React being
                    as unique as it is.
                    <br/><br/>
                    This isn't to say, however, that there was nothing for me to learn. The very fact that there are
                    many languages suggests
                    that each one has its strengths. These strengths reflect the intended approach to specific solutions
                    that the language
                    was designed to tackle, as well as the logical process the programmer must use.
                    <br/><br/>
                    I've mentioned the unique nature of React multiple times, but what is it that I found amazing?<br/>
                    A typical JavaScript site re-renders a page with every frame. This is a lot of work, and can be
                    optimized, but
                    is fundamentally an imperfect approach. React, on the other hand, is made entirely to only refresh
                    the things that need to
                    be refreshed, when they need to be refreshed. This greatly changes to problem-solving approaches to
                    different solutions,
                    and introduces new challenges to get everything refreshed on time.<br/>This leads to my next goal -
                    Efficiency.
                </p>
            </div>
            <div>
                <h1>Critical Thinking</h1>
                <h2>Efficient Programming</h2>
                <p>
                    Much of my experience as a programmer comes from C. C is a very direct language, that does exactly
                    what you ask without
                    much flare, and because of this, efficiency in programs is crucial. I've seen myself make good
                    strides in writing
                    optimized programs, but I was eager to see what it took to optimize something as large as a full
                    application.
                    <br/><br/>
                    Little did I know that my tasks had nothing to do with optimization. As mentioned in the previous
                    goal, React is,
                    at its core, an already-optimized language. Since I mostly worked on front-end tasks, I hadn't had
                    to deal
                    with algorithms and intense programs. The only times I had to deal with performance optimizations
                    had been
                    when I did something very wrong and not React-friendly, and this was a matter of learning the
                    language, rather than
                    critical thinking.
                    <br/><br/>
                    Similarly to the previous goal, however, I did end up learning a few things that I didn't expect.
                    One said thing was just how far applying something basic consistently could improve overall code
                    quality.
                    Putting time into considering render dependencies, function parameters, global states and logic flow
                    can
                    take an unreliable, inefficient piece of hacked code, and make it a great tool for your app and your
                    team.
                </p>
            </div>
            <div>
                <h1>Professional Behvaiour</h1>
                <h2>Personal Organization and Time Management</h2>
                <p>
                    When working on personal projects at home, with little to no deadlines, I often faced the temptation
                    to take
                    poorly timed breaks, get distracted from work, or outright forget what I was working on. This was,
                    understandably,
                    a serious concern for me as I got started at Readwise. In fact, it was why I sook an in-person
                    position, as it would
                    put pressure on me to work consistently. My fifth goal was to work on my ability to work
                    consistently and deliver
                    bug fixes and features on a regular basis.
                    <br/><br/>
                    The measurement I set for this goal was 'The amount of pull requests I deliver within a day on
                    average'. I now know just how
                    flawed of a measurement that is.
                    <br/><br/>
                    My conviction in this idea of consistent shipping was strengthened by first week of the internship.
                    I was still being
                    tested on my initial skill, and was given very simple bugs, in which most of the work was in finding
                    the issue in the
                    code base, rather than write meaningful code. As such, at the end of each day I had 3 pull requests
                    ready for review.
                    My confidence was through the roof, until I hit my first week-long task.
                    <br/><br/>
                    What I discovered was that there can very well be a one-line solution to an issue, and it still take
                    ages to find.
                    When working on some bugs, particularly with production crashes, the biggest piece of progress one
                    can achieve is to
                    reach a new step of understanding of the issue. Simply understanding the cause can be a grueling
                    task with many
                    red herrings.
                    <br/><br/>
                    It is due to tasks like these that I've learned that progress cannot really be quantified as easily
                    in this field.
                    Every task will take its own amount of time, and as long as time and effort is being dedicated to
                    something useful,
                    progress is being made.
                </p>
            </div>
        </div>
    </div>
}
