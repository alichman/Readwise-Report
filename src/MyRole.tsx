import './App.css';
import './MyRole.css';

export const MyRole = ({sem}: { sem: 1 | 2 }) => {
    if (sem === 1) {
        return <div className="MyRole">
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
                        method is very convenient for bug fixes and quick features, as users would get them
                        automatically.
                        <br/><br/>
                        However, one issue has plagued this feature in Readwise Reader for years - if an Android user
                        manually
                        downloads one of these updates, their app crashes. They could still reopen the updated app, so
                        this
                        issue was deemed more of an annoyance, and wasn't given high priority.
                        <br/><br/>
                        I managed to fix this issue by upgrading one of our libraries that was instantiating multiple
                        times.
                        This was the first of many production-only bugs that I would tackle throughout my internship,
                        making
                        it
                        more challenging and time-consuming to debug and fix. This experience honed my ability to
                        theorize
                        issues
                        without debugging tools, which I've found to be a crucial skill for quality of solutions.
                    </p>
                </div>
                <div>
                    <h1>JULY</h1>
                    <h2>User Review Prompts</h2>
                    <p>
                        One of the first things a potential new user checks is app reviews. However, these reviews can
                        be
                        very polarizing, as a user with an average, content opinion rarely puts in the effort to rate
                        the
                        app.
                        This makes an in-app prompt a great way to properly represent the public opinion of the product.
                        <br/><br/>
                        Unlike other tasks, which were often laying around before being assigned to me, this one was
                        designed
                        with me in mind. I was looking forward to work on more back-end features, and this was an
                        exciting
                        feature to develop.
                    </p>
                </div>
                <div>
                    <h1>AUGUST</h1>
                    <h2>External Document Sharing</h2>
                    <p>
                        One way of importing documents into Reader is to share them into the app through the phone's
                        built-in
                        sharing panel.
                        <br/><br/>
                        This feature was glitched, however - when a document was shared, it failed to open properly
                        due to timing issues. This occurred only in production builds, much like the Android Crash
                        mentioned
                        earlier. This, paired with the timing-based nature of the issue, ment that there was an easy,
                        suboptimal
                        solution - to put simple delays between different pieces of code that raced against each other.
                        This
                        solution
                        was accepted by another engineer on my team, but as I am an intern, I had the time to dig deeper
                        and
                        search
                        for a more reliable solution.
                        <br/><br/>
                        I believe this task set me apart from the developer that I was at the beginning of my
                        internship, as
                        I too
                        would have been happy with the quick fix. Though this issue took a week of work, it was very
                        satisfying to
                        complete, which also marked a development which I describe further in the Goals section.
                    </p>
                </div>
            </div>
        </div>
    }

    return <div className="MyRole">
            <div className="HeadText">
                <h1>My Role at Readwise - Second Semester</h1>
                <p>
                    As a returning Software Developer Intern, the expectations for my work had risen,
                    and I was given the opportunity to work on much more difficult and impactful tasks.
                    Through these increasingly large projects, I've gained more hands-on experience with
                    independent development and design.<br/><br/>Here is a summary of my most significant
                    tasks of each month.
                </p>
            </div>
            <div className="FlexList">

                <div>
                    <h1>SEPTEMBER</h1>
                    <h2>Animation refactor - part 2</h2>
                    <p>
                        After having just come back from my vacation, I spent September mostly working
                        on a large amount of quick tasks, to get myself back into the groove of development.
                        However, a very significant issue arose with some sidebar animations, in which closing one
                        would immediately open another, leaving the user in an infinite loop of menus. If you recall,
                        my very first large project was an animation refactor (See Work Term 1, May). As it turns out,
                        another engineer had moved some code around for organization's sake, and removed some crucial parts
                        of my project that prevented this issue.<br/><br/> While I initially was annoyed with this developer,
                        I realized that this code I wrote in May was confusing and overcomplicated. There was no easy way to tell
                        how my code functioned, and so I could completely understand the other engineer's mistake. Moreover, now
                        that I was more aware of the coding style of the company, I realized that if I were to write this project
                        now, I'd do it completely differently. So, I set out to do exactly that.<br/><br/>
                        I spent a few days rewriting the entire animation code in a clearly organized manor, with clear comments
                        and explanations for parts that couldn't be simplified. Revisiting a project from my early days at the company had
                        served as a great indicator of how my understanding of development had changed, and I believe that my code
                        had become a lot more clear and reliable since that time.
                    </p>
                </div>
                <div>
                    <h1>OCTOBER</h1>
                    <h2>Text-to-Speech Progress</h2>
                    <p>
                        Text to Speech is one of our most sought-out and impactful features.
                        As it turns out, it is also one of the more complicated to implement.
                        The generally expected use case of TTS is for a user to be listening
                        to an article and reading along. Thus, a user's progress within the
                        article is based on how far they, or the TTS, has scrolled.<br/><br/>
                        However, it turns out that many users, including myself, prefer to listen
                        to an article on-the-go, and don't read along with the TTS. By consequence,
                        the scroll-based progress does not get updated, and a user can potentially
                        lose their position in the article. After bringing attention to the issue,
                        I was tasked with developing a new method of tracking and translating
                        audio progress to a location within the article.<br/><br/>
                        Like many other issues I've faced, I initially imagined it to be a simple
                        project. However, it took weeks of development, redesign, and consulting with
                        multiple members of the team to finally get a working feature. Though this project
                        helped put into perspective how hard it is to predict the development time of a
                        feature, I can't say that this lesson truly settled until the end of my internship,
                        as I continued to make optimistic estimations for my final two projects.
                    </p>
                </div>
                <div>
                    <h1>NOVEMBER</h1>
                    <h2>Text-to-Speech Custom Pronunciations</h2>
                    <p>Some time in October, I was using our text-to-speech feature to listen to Brandon Sanderson's
                        Dawnshard. Much like many other fantasy novels, Dawnshard had unusual names that
                        TTS often gets wrong. While I usually can muster up the patience to ignore these
                        mispronunciations, I couldn't look past the main characters' names, Rysn and Chiri Chiri,
                        being pronounced as 'Rising' and 'Kairi Kairi'. I started thinking of potential solutions,
                        and a few weeks later, I was given the perfect opportunity to execute it.<br/><br/>
                        In November, I was invited to the company offsite in Curacao. The main event of this offsite was a
                        company-wide hackathon. Every member of the company was to come up with and prototype a feature to
                        introduce to the app within the span of a day. This was the perfect time for me to address the issue
                        that had been bugging me for so long.<br/><br/> I started working at 8 am, and had a working prototype
                        with a fake UI by 9pm. The hackathon had been a thrilling experience, and the presentation was a major
                        success, with many expressing their excitement for a completed version to be put into production. I would
                        spend my spare time at the company fine-tuning this project, and as of late december, it is being used to
                        correct all sorts of weird words!<br/><br/> To me, this project signifies the initiative that I honed
                        through my time at Readwise. I had developed a solution for a large issue simply because I was using the
                        product myself, and ended up committing weeks of development to it. I am very proud of the final result,
                        and the occasional messages I've been receiving from my former coworkers about its success bring me much joy.

                    </p>
                </div>
                <div>
                    <h1>DECEMBER</h1>
                    <h2>Audiobooks</h2>
                    <p>
                        For a while, Readwise has been pushing hard to sign with publishers for distribution rights. With the
                        announcement in August of upcoming audits, the company went all hands on deck to get the requirements met.
                        As you may be able to tell from my previous projects, by now I've solidified my position in the development
                        team as "The TTS guy". Because of this, and my constant consumption of audiobooks, I have been granted full
                        responsibility over the development of Audiobook support, and worked directly with my manager, with the hopes
                        of having working audiobooks that meet the publisher standard before my work term ends. This would be by far my
                        largest project at Readwise.<br/><br/> This project was a testament of the progress I've undergone at Readwise.
                        It challenged me in every way that a project can. With a very clear deadline, starting from scratch on a full-stack
                        project, with issues I've never faced before, such as live decryption, chunking, and all of the memory issues that come
                        with handling large audio files, I was giving it my all every day of my last month as an intern.<br/><br/> In the end,
                        I ended up shipping my end of the project on my second last day, and the entire project was merged about a week later.
                        I am incredibly proud of having accomplished this, and I'm very grateful for the trust Readwise had put in me to complete it.
                    </p>
                </div>
            </div>
        </div>
};