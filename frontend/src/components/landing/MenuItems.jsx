const MenuItems = () => (
  <>
    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item">
      <a href="index.html">Home</a>
    </li>
    <li className="menu-item menu-item-has-children">
      <a href="#lessons">Lessons</a>
      <ul className="sub-menu">
        <li className="menu-item"><a href="#alphabet">Alphabet</a></li>
        <li className="menu-item menu-item-has-children">
          <a href="#numbers">Numbers</a>
          <ul className="sub-menu">
            <li className="menu-item"><a href="#basic-numbers">Basic Numbers</a></li>
            <li className="menu-item"><a href="#advanced-numbers">Advanced Numbers</a></li>
            <li className="menu-item"><a href="#counting-games">Counting Games</a></li>
            <li className="menu-item"><a href="#number-activities">Number Activities</a></li>
          </ul>
        </li>
        <li className="menu-item"><a href="#common-phrases">Common Phrases</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children">
      <a href="#activities">Activities</a>
      <ul className="sub-menu">
        <li className="menu-item"><a href="#interactive-games">Interactive Games</a></li>
        <li className="menu-item"><a href="#practice-exercises">Practice Exercises</a></li>
        <li className="menu-item"><a href="#flashcards">Flashcards</a></li>
        <li className="menu-item"><a href="#story-time">Story Time</a></li>
        <li className="menu-item"><a href="#songs">Songs & Rhymes</a></li>
        <li className="menu-item"><a href="#quizzes">Fun Quizzes</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children">
      <a href="#resources">Resources</a>
      <ul className="sub-menu">
        <li className="menu-item menu-item-has-children">
          <a href="#parent-guide">Parent Guide</a>
          <ul className="sub-menu">
            <li className="menu-item"><a href="#getting-started">Getting Started</a></li>
            <li className="menu-item"><a href="#teaching-tips">Teaching Tips</a></li>
            <li className="menu-item"><a href="#progress-tracking">Progress Tracking</a></li>
            <li className="menu-item"><a href="#faqs">FAQs</a></li>
          </ul>
        </li>
        <li className="menu-item"><a href="#video-tutorials">Video Tutorials</a></li>
        <li className="menu-item"><a href="#printable-materials">Printable Materials</a></li>
        <li className="menu-item"><a href="#community">Community</a></li>
        <li className="menu-item"><a href="#support">Support</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children">
      <a href="#progress">My Progress</a>
      <ul className="sub-menu">
        <li className="menu-item"><a href="#dashboard">Dashboard</a></li>
        <li className="menu-item"><a href="#achievements">Achievements</a></li>
        <li className="menu-item"><a href="#certificates">Certificates</a></li>
        <li className="menu-item"><a href="#learning-path">Learning Path</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children">
      <a href="#about">About</a>
      <ul className="sub-menu">
        <li className="menu-item"><a href="#our-mission">Our Mission</a></li>
        <li className="menu-item"><a href="#team">Team</a></li>
        <li className="menu-item"><a href="#testimonials">Testimonials</a></li>
        <li className="menu-item"><a href="#blog">Blog</a></li>
      </ul>
    </li>
    <li className="menu-item"><a href="#contact">Contact</a></li>
  </>
);

export default MenuItems;
