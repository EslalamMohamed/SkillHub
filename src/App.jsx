import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, Award, BarChart3, BookOpen, Check, CheckCircle2,
  ChevronDown, CircleHelp, Clock3, Code2, Compass, GraduationCap, Heart,
  LayoutDashboard, ListFilter, LockKeyhole, LogIn, Menu, Moon, Play, Search,
  Settings, ShieldCheck, Sparkles, Star, Sun, Users, X, Zap,
} from 'lucide-react';
import { courses, lessons } from './data.js';

const copy = {
  en: {
    home: 'Home', courses: 'Courses', instructors: 'Instructors', pricing: 'Pricing', about: 'About',
    login: 'Log in', start: 'Get started', hero1: 'Learn new skills.', hero2: 'Build a better future.',
    heroText: 'Practical courses, friendly instructors, and projects that help you move forward.',
    search: 'Search courses, skills, or topics...', explore: 'Explore courses', learners: 'Learners', coursesCount: 'Courses', mentors: 'Expert mentors',
    popular: 'Popular courses', popularText: 'Small steps today. A stronger portfolio tomorrow.', viewAll: 'View all courses', all: 'All courses', dev: 'Development', design: 'Design', business: 'Business',
    featured: 'Built for your next chapter', featuredText: 'A focused learning space to build skills you can actually use.',
    continue: 'Continue learning', myLearning: 'My learning', dashboard: 'Dashboard', wishlist: 'Wishlist', certificates: 'Certificates', settings: 'Settings',
    enrolled: 'Enrolled courses', completed: 'Completed', learningTime: 'Learning time', progress: 'Course progress', resume: 'Resume course',
    why: 'Learning that fits real life', whyText: 'Clear lessons, practical exercises, and a little momentum every week.',
    practical: 'Practical projects', practicalText: 'Build work you can show.',
    flexible: 'Learn at your pace', flexibleText: 'Pick up where you left off.',
    certificate: 'Shareable certificates', certificateText: 'Celebrate each milestone.',
    community: 'A supportive community', communityText: 'Make progress together.',
    instructorsTitle: 'Learn from people who do the work', instructorsText: 'Guidance from practitioners who explain the why, not only the how.',
    ready: 'Your next skill starts here.', readyText: 'Choose a course and make this week count.', browse: 'Browse courses', footer: 'Made for curious minds.',
    filter: 'Filter', level: 'Level', anyLevel: 'Any level', beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced',
    details: 'Course details', enroll: 'Enroll now', enrolledMsg: 'You are enrolled!', lessons: 'lessons', hours: 'hours', students: 'students',
    loginTitle: 'Welcome back', loginText: 'Sign in to continue your learning journey.', email: 'Email address', password: 'Password', demo: 'Demo mode — any email and password will work.',
    submit: 'Sign in', close: 'Close', save: 'Save course', saved: 'Saved', lessonTitle: 'Your next lesson', lessonSub: 'React JS — Complete Guide', lessonAction: 'Start lesson',
    empty: 'No courses found. Try another search.', account: 'Demo learner', logout: 'Sign out', language: 'العربية',
  },
  ar: {
    home: 'الرئيسية', courses: 'الكورسات', instructors: 'المدربون', pricing: 'الأسعار', about: 'عن المنصة',
    login: 'تسجيل الدخول', start: 'ابدأ الآن', hero1: 'اتعلم مهارات جديدة.', hero2: 'وابني مستقبلك.',
    heroText: 'كورسات عملية ومدربون متميزون ومشروعات تساعدك تتقدم خطوة حقيقية.',
    search: 'ابحث عن كورس أو مهارة...', explore: 'استكشف الكورسات', learners: 'متعلم', coursesCount: 'كورس', mentors: 'مدرب متخصص',
    popular: 'كورسات مميزة', popularText: 'خطوة صغيرة النهارده، وبورتفوليو أقوى بكرة.', viewAll: 'عرض كل الكورسات', all: 'الكل', dev: 'برمجة', design: 'تصميم', business: 'أعمال',
    featured: 'ابدأ فصل جديد في رحلتك', featuredText: 'مساحة تعلم مركزة لبناء مهارات تقدر تستخدمها فعلًا.',
    continue: 'كمّل تعلمك', myLearning: 'تعلمي', dashboard: 'لوحة التحكم', wishlist: 'المفضلة', certificates: 'الشهادات', settings: 'الإعدادات',
    enrolled: 'كورسات مسجلة', completed: 'مكتمل', learningTime: 'وقت التعلم', progress: 'تقدم الكورس', resume: 'كمّل الكورس',
    why: 'تعلم يناسب حياتك', whyText: 'دروس واضحة وتدريبات عملية وخطوات صغيرة كل أسبوع.',
    practical: 'مشروعات عملية', practicalText: 'ابنِ شغل تقدر تعرضه.',
    flexible: 'اتعلم براحتك', flexibleText: 'كمّل من آخر نقطة وصلت لها.',
    certificate: 'شهادات قابلة للمشاركة', certificateText: 'احتفل بكل إنجاز.',
    community: 'مجتمع بيساعدك', communityText: 'اتقدم مع ناس عندها نفس الهدف.',
    instructorsTitle: 'اتعلم من ناس بتشتغل في المجال', instructorsText: 'خبرة عملية تشرح لك ليه، مش بس إزاي.',
    ready: 'مهارتك الجاية بتبدأ هنا.', readyText: 'اختار كورس وخلي الأسبوع ده مختلف.', browse: 'تصفح الكورسات', footer: 'للناس اللي بتحب تتعلم.',
    filter: 'تصفية', level: 'المستوى', anyLevel: 'كل المستويات', beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم',
    details: 'تفاصيل الكورس', enroll: 'اشترك الآن', enrolledMsg: 'أنت مشترك بالفعل!', lessons: 'درس', hours: 'ساعة', students: 'طالب',
    loginTitle: 'أهلًا بعودتك', loginText: 'سجّل دخولك عشان تكمّل رحلة التعلم.', email: 'البريد الإلكتروني', password: 'كلمة المرور', demo: 'وضع تجريبي — أي بريد وكلمة مرور هيشتغلوا.',
    submit: 'تسجيل الدخول', close: 'إغلاق', save: 'احفظ الكورس', saved: 'اتحفظ', lessonTitle: 'الدرس التالي', lessonSub: 'دليل React JS الشامل', lessonAction: 'ابدأ الدرس',
    empty: 'مفيش كورسات مطابقة. جرّب بحث تاني.', login: 'دخول', account: 'متعلم تجريبي', logout: 'تسجيل الخروج', language: 'English',
  },
};

function Logo() {
  return <a className="brand" href="#home" aria-label="SkillHub home"><span className="brand-mark"><GraduationCap size={22} /></span><span>Skill<span>Hub</span></span></a>;
}

function CourseArt({ course, large = false }) {
  return <div className={`course-art art-${course.color}${large ? ' art-large' : ''}`} aria-hidden="true">
    <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
    <span className="art-symbol">{course.icon}</span><span className="art-code">{course.category.toUpperCase()} / 0{course.id}</span>
  </div>;
}

function CourseCard({ course, t, onOpen, saved, onSave, enrolled, isArabic }) {
  return <article className="course-card">
    <div className="course-card-art"><CourseArt course={course} />
      <button className={`icon-button save-button ${saved ? 'is-saved' : ''}`} onClick={() => onSave(course.id)} aria-label={saved ? t.saved : t.save}><Heart size={17} fill={saved ? 'currentColor' : 'none'} /></button>
      {course.id === 1 && <span className="course-badge"><Sparkles size={12} /> Best seller</span>}
    </div>
    <div className="course-card-body">
      <div className="course-meta"><span>{course.category}</span><span className="level-dot">·</span><span>{course.level}</span></div>
      <button className="course-title" onClick={() => onOpen(course)}>{isArabic ? course.titleAr : course.title}</button>
      <p className="instructor-line">with {course.instructor}</p>
      <div className="course-stats"><span><Star size={14} fill="currentColor" /> {course.rating}</span><span><Users size={14} /> {course.students}</span><span><Clock3 size={14} /> {course.hours}h</span></div>
      <div className="course-card-bottom"><div className="price"><strong>${course.price}</strong><del>${course.oldPrice}</del></div><button className="text-action" onClick={() => onOpen(course)}>{enrolled ? t.continue : t.details}<ArrowRight size={15} /></button></div>
    </div>
  </article>;
}

function Modal({ children, onClose, wide = false }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><section className={`modal-panel${wide ? ' modal-wide' : ''}`} onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
    <button className="icon-button modal-close" onClick={onClose} aria-label="Close"><X size={19} /></button>{children}
  </section></div>;
}

function readStoredValue(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch {
    return fallback;
  }
}

export default function App() {
  const [language, setLanguage] = useState(() => readStoredValue('skillhub-language', 'en'));
  const [dark, setDark] = useState(() => readStoredValue('skillhub-dark-mode', true));
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('Any level');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [savedCourses, setSavedCourses] = useState(() => readStoredValue('skillhub-saved-courses', [3]));
  const [enrolledCourses, setEnrolledCourses] = useState(() => readStoredValue('skillhub-enrolled-courses', [1, 4]));
  const [toast, setToast] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = copy[language];
  const isArabic = language === 'ar';

  useEffect(() => {
    window.localStorage.setItem('skillhub-language', JSON.stringify(language));
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem('skillhub-dark-mode', JSON.stringify(dark));
  }, [dark]);

  useEffect(() => {
    window.localStorage.setItem('skillhub-saved-courses', JSON.stringify(savedCourses));
  }, [savedCourses]);

  useEffect(() => {
    window.localStorage.setItem('skillhub-enrolled-courses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const filteredCourses = useMemo(() => courses.filter((course) => {
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || `${course.title} ${course.titleAr} ${course.category} ${course.instructor}`.toLowerCase().includes(term);
    const matchesCategory = category === 'All' || course.category === category;
    const matchesLevel = level === 'Any level' || course.level === level;
    return matchesSearch && matchesCategory && matchesLevel;
  }), [search, category, level]);

  function notify(message) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2400);
  }

  function toggleSaved(id) {
    setSavedCourses((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function enroll(id) {
    setEnrolledCourses((current) => current.includes(id) ? current : [...current, id]);
    setSelectedCourse(null);
    notify(t.enrolledMsg);
  }

  function openCourses() {
    setActiveTab('courses');
    setCategory('All');
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  }

  function handleLogin(event) {
    event.preventDefault();
    setLoggedIn(true);
    setLoginOpen(false);
    setEmail('');
    setPassword('');
    notify(isArabic ? 'أهلًا بيك في SkillHub!' : 'Welcome to SkillHub!');
  }

  const shownCourses = activeTab === 'wishlist' ? filteredCourses.filter((course) => savedCourses.includes(course.id)) : activeTab === 'myLearning' ? filteredCourses.filter((course) => enrolledCourses.includes(course.id)) : filteredCourses;

  return <div className={`app-shell ${dark ? 'theme-dark' : 'theme-light'}`} dir={isArabic ? 'rtl' : 'ltr'}>
    <header className="site-header">
      <div className="header-inner"><Logo />
        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`}>
          <a className={activeTab === 'home' ? 'nav-active' : ''} href="#home" onClick={() => { setActiveTab('home'); setMobileMenu(false); }}>{t.home}</a>
          <a className={activeTab === 'courses' ? 'nav-active' : ''} href="#courses" onClick={() => { setActiveTab('courses'); setMobileMenu(false); }}>{t.courses}</a>
          <a href="#instructors" onClick={() => setMobileMenu(false)}>{t.instructors}</a>
          <a href="#pricing" onClick={() => setMobileMenu(false)}>{t.pricing}</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>{t.about}</a>
        </nav>
        <div className="header-actions">
          <button className="language-button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')}>{t.language}</button>
          <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          {loggedIn ? <button className="user-chip" onClick={() => { setLoggedIn(false); notify(t.logout); }}><span className="avatar">E</span><span>{t.account}</span><ChevronDown size={14} /></button> : <button className="login-button" onClick={() => setLoginOpen(true)}>{t.login}</button>}
          <button className="primary-button header-cta" onClick={openCourses}>{t.start}<ArrowRight size={15} /></button>
          <button className="icon-button menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
    </header>

    <main>
      <section className="hero-section" id="home">
        <div className="hero-grid"><div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Learn at your own pace <ArrowDownRight size={14} /></div>
          <h1>{t.hero1}<br /><span>{t.hero2}</span></h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-search"><Search size={19} /><input value={search} onChange={(event) => { setSearch(event.target.value); setActiveTab('courses'); }} placeholder={t.search} aria-label={t.search} /><button onClick={openCourses} aria-label={t.explore}><ArrowRight size={18} /></button></div>
          <div className="hero-proof"><div className="avatar-stack"><span>MA</span><span>NF</span><span>OS</span><span>+2k</span></div><div><div className="proof-stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><span>4.9/5</span></div><p>Loved by learners building real skills</p></div></div>
        </div>
        <div className="hero-visual"><div className="visual-glow" /><div className="visual-main-card"><div className="visual-top"><span className="window-dots"><i /><i /><i /></span><span className="visual-label"><span className="live-dot" /> YOUR LEARNING SPACE</span><span className="visual-menu">•••</span></div>
          <div className="visual-course"><div className="visual-course-icon"><Code2 size={29} /></div><div className="visual-course-text"><span>YOUR NEXT CHAPTER</span><strong>Frontend development</strong><small>Build something worth sharing.</small></div><span className="visual-arrow"><ArrowRight size={18} /></span></div>
          <div className="visual-progress-label"><span>Weekly progress</span><strong>72%</strong></div><div className="progress-track"><span style={{ width: '72%' }} /></div>
          <div className="visual-bottom"><div className="mini-stat"><span className="mini-stat-icon purple"><BookOpen size={16} /></span><div><strong>08</strong><small>Lessons done</small></div></div><div className="mini-stat"><span className="mini-stat-icon green"><Zap size={16} /></span><div><strong>04 days</strong><small>Learning streak</small></div></div></div>
          <div className="floating-note note-top"><span className="note-icon"><Check size={15} /></span><div><strong>Nice progress!</strong><small>One step at a time.</small></div></div>
          <div className="floating-note note-bottom"><span className="note-icon note-award"><Award size={17} /></span><div><strong>Keep going</strong><small>Your next milestone is close</small></div></div>
        </div><div className="visual-side-label"><span>01</span><span className="side-line" /><span>LEARN · BUILD · GROW</span></div></div></div>
        <div className="hero-stats"><div><strong>12k<span>+</span></strong><span>{t.learners}</span></div><div><strong>80<span>+</span></strong><span>{t.coursesCount}</span></div><div><strong>24<span>+</span></strong><span>{t.mentors}</span></div><div className="stats-note"><ShieldCheck size={17} /><span>Learn with a plan, not pressure.</span></div></div>
      </section>

      <section className="section courses-section" id="courses">
        <div className="section-heading"><div><span className="section-kicker">THE COURSE LIBRARY</span><h2>{activeTab === 'wishlist' ? t.wishlist : activeTab === 'myLearning' ? t.myLearning : t.popular}</h2><p>{t.popularText}</p></div><button className="outline-button" onClick={() => { setActiveTab('courses'); setCategory('All'); }}>{t.viewAll}<ArrowRight size={16} /></button></div>
        <div className="course-toolbar"><div className="category-tabs">
          {[['All', t.all], ['Development', t.dev], ['Design', t.design], ['Business', t.business]].map(([value, label]) => <button key={value} className={category === value ? 'category-active' : ''} onClick={() => { setCategory(value); setActiveTab('courses'); }}>{label}</button>)}
        </div><div className="toolbar-right"><label className="course-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={isArabic ? 'ابحث...' : 'Search library'} /></label><button className={`filter-button ${showFilters ? 'filter-active' : ''}`} onClick={() => setShowFilters(!showFilters)}><ListFilter size={16} />{t.filter}<ChevronDown size={14} /></button></div></div>
        {showFilters && <div className="filter-panel"><label>{t.level}<select value={level} onChange={(event) => setLevel(event.target.value)}><option>Any level</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><button className="clear-filters" onClick={() => { setLevel('Any level'); setCategory('All'); setSearch(''); }}>{isArabic ? 'مسح الفلاتر' : 'Clear filters'}</button></div>}
        {shownCourses.length ? <div className="course-grid">{shownCourses.map((course) => <CourseCard key={course.id} course={course} t={t} onOpen={setSelectedCourse} saved={savedCourses.includes(course.id)} onSave={toggleSaved} enrolled={enrolledCourses.includes(course.id)} isArabic={isArabic} />)}</div> : <div className="empty-state"><Compass size={28} /><strong>{t.empty}</strong><button className="outline-button" onClick={() => { setSearch(''); setCategory('All'); setLevel('Any level'); setActiveTab('courses'); }}>{t.viewAll}</button></div>}
        <div className="catalog-bottom"><span>Showing <strong>{shownCourses.length}</strong> of {courses.length} sample courses</span><button className="text-action" onClick={() => { setSearch(''); setCategory('All'); setLevel('Any level'); }}>{isArabic ? 'عرض الكل' : 'Reset library'}<ArrowRight size={15} /></button></div>
      </section>

      <section className="learning-section" id="about"><div className="learning-copy"><span className="section-kicker">A BETTER WAY TO LEARN</span><h2>{t.why}</h2><p>{t.whyText}</p><div className="feature-list"><div className="feature-row"><span className="feature-icon feature-purple"><Code2 size={20} /></span><div><strong>{t.practical}</strong><p>{t.practicalText}</p></div><CheckCircle2 className="feature-check" size={18} /></div><div className="feature-row"><span className="feature-icon feature-blue"><Clock3 size={20} /></span><div><strong>{t.flexible}</strong><p>{t.flexibleText}</p></div><CheckCircle2 className="feature-check" size={18} /></div><div className="feature-row"><span className="feature-icon feature-orange"><Award size={20} /></span><div><strong>{t.certificate}</strong><p>{t.certificateText}</p></div><CheckCircle2 className="feature-check" size={18} /></div></div></div>
        <div className="dashboard-preview"><div className="preview-header"><div className="preview-user"><span className="avatar">E</span><div><strong>{isArabic ? 'أهلًا، إسلام 👋' : 'Welcome back, Eslam 👋'}</strong><small>{isArabic ? 'دي رحلتك للتعلم' : 'Here is your learning journey'}</small></div></div><span className="preview-pill"><span className="live-dot" /> ON TRACK</span></div><div className="preview-stats"><div><span><BookOpen size={15} /></span><small>Enrolled</small><strong>{enrolledCourses.length.toString().padStart(2, '0')}</strong></div><div><span><Award size={15} /></span><small>Completed</small><strong>01</strong></div><div><span><Clock3 size={15} /></span><small>Learning time</small><strong>12h</strong></div></div><div className="preview-course-heading"><strong>{t.continue}</strong><button onClick={() => { setActiveTab('myLearning'); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}>{isArabic ? 'الكل' : 'See all'}<ArrowRight size={13} /></button></div>
          {courses.filter((course) => enrolledCourses.includes(course.id)).slice(0, 2).map((course, index) => <div className="preview-course" key={course.id}><div className={`preview-course-thumb thumb-${course.color}`}>{course.icon}</div><div className="preview-course-info"><strong>{course.title}</strong><small>{index === 0 ? '68%' : '24%'} completed</small><div className="progress-track small-track"><span style={{ width: index === 0 ? '68%' : '24%' }} /></div></div><button className="round-play" onClick={() => setSelectedCourse(course)} aria-label={t.resume}><Play size={14} fill="currentColor" /></button></div>)}
          <div className="preview-footer"><span><Sparkles size={15} /> Small progress adds up.</span><span className="preview-week">THIS WEEK <strong>+3.5h</strong></span></div>
        </div></section>

      <section className="instructors-section" id="instructors"><div className="section-heading"><div><span className="section-kicker">PEOPLE BEHIND THE LESSONS</span><h2>{t.instructorsTitle}</h2><p>{t.instructorsText}</p></div><div className="instructor-arrows"><button className="icon-button" onClick={() => notify(isArabic ? 'قريبًا: المزيد من المدربين' : 'More instructors coming soon')} aria-label="Previous instructors"><ArrowRight className="flip-icon" size={18} /></button><button className="icon-button" onClick={() => notify(isArabic ? 'قريبًا: المزيد من المدربين' : 'More instructors coming soon')} aria-label="Next instructors"><ArrowRight size={18} /></button></div></div>
        <div className="instructor-grid"><article className="instructor-card"><div className="instructor-avatar instructor-one">MA</div><div><strong>Mina Adel</strong><span>Frontend Engineer</span></div><span className="instructor-rating"><Star size={13} fill="currentColor" /> 4.9</span></article><article className="instructor-card"><div className="instructor-avatar instructor-two">NF</div><div><strong>Nour Hassan</strong><span>JavaScript Developer</span></div><span className="instructor-rating"><Star size={13} fill="currentColor" /> 4.8</span></article><article className="instructor-card"><div className="instructor-avatar instructor-three">SF</div><div><strong>Salma Fathy</strong><span>Product Designer</span></div><span className="instructor-rating"><Star size={13} fill="currentColor" /> 4.9</span></article></div></section>

      <section className="cta-section" id="pricing"><div className="cta-orb cta-orb-one" /><div className="cta-orb cta-orb-two" /><div className="cta-content"><span className="section-kicker">YOUR NEXT CHAPTER</span><h2>{t.ready}</h2><p>{t.readyText}</p><button className="primary-button cta-button" onClick={openCourses}>{t.browse}<ArrowRight size={17} /></button><div className="cta-trust"><span><Check size={14} /> Learn at your pace</span><span><Check size={14} /> Practical lessons</span><span><Check size={14} /> Progress you can see</span></div></div><div className="cta-decoration"><div className="cta-icon-circle"><GraduationCap size={44} /></div><div className="cta-float cta-float-one"><Sparkles size={18} /> Keep growing</div><div className="cta-float cta-float-two"><BarChart3 size={18} /> Skill up weekly</div></div></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Logo /><p>{t.footer}<br />Build skills that move you forward.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#courses" onClick={openCourses}>{t.courses}</a><a href="#instructors">{t.instructors}</a><a href="#pricing">{t.pricing}</a></div><div><strong>Learning</strong><a href="#about">How it works</a><a href="#courses">Popular courses</a><a href="#about">Our approach</a></div><div><strong>Help & support</strong><button onClick={() => notify('Support center — demo preview')}>Help center</button><button onClick={() => notify('Contact: hello@skillhub.demo')}>Contact us</button><button onClick={() => notify('Privacy page — demo preview')}>Privacy</button></div></div></div><div className="footer-bottom"><span>© 2026 SkillHub. Demo learning platform.</span><span>Designed with care <Heart size={13} fill="currentColor" /></span></div></footer>

    {selectedCourse && <Modal onClose={() => setSelectedCourse(null)} wide><div className="course-detail"><CourseArt course={selectedCourse} large /><div className="detail-content"><div className="course-meta"><span>{selectedCourse.category}</span><span>·</span><span>{selectedCourse.level}</span></div><h2>{isArabic ? selectedCourse.titleAr : selectedCourse.title}</h2><p className="detail-description">{isArabic ? selectedCourse.descriptionAr : selectedCourse.description}</p><div className="detail-stats"><span><Star size={16} fill="currentColor" /> {selectedCourse.rating} rating</span><span><Users size={16} /> {selectedCourse.students} {t.students}</span><span><Clock3 size={16} /> {selectedCourse.hours} {t.hours}</span></div><div className="detail-instructor"><span className="avatar">{selectedCourse.instructor.split(' ').map((word) => word[0]).join('')}</span><div><small>Course instructor</small><strong>{selectedCourse.instructor}</strong></div></div><div className="detail-includes"><strong>What you'll get</strong>{['Project-based lessons', 'Lifetime access in this demo', 'Course notes and exercises'].map((item) => <span key={item}><CheckCircle2 size={15} /> {item}</span>)}</div><div className="detail-bottom"><div className="price"><strong>${selectedCourse.price}</strong><del>${selectedCourse.oldPrice}</del></div><button className="primary-button" onClick={() => enroll(selectedCourse.id)}>{enrolledCourses.includes(selectedCourse.id) ? t.continue : t.enroll}<ArrowRight size={16} /></button></div></div></div></Modal>}

    {loginOpen && <Modal onClose={() => setLoginOpen(false)}><div className="login-modal"><div className="login-mark"><GraduationCap size={25} /></div><span className="section-kicker">SKILLHUB ACCOUNT</span><h2>{t.loginTitle}</h2><p>{t.loginText}</p><form onSubmit={handleLogin}><label>{t.email}<span className="form-input"><LogIn size={16} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></span></label><label>{t.password}<span className="form-input"><LockKeyhole size={16} /><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" required minLength={4} /></span></label><button className="primary-button login-submit" type="submit">{t.submit}<ArrowRight size={16} /></button></form><div className="demo-note"><CircleHelp size={15} /> {t.demo}</div></div></Modal>}
    {toast && <div className="toast-message"><CheckCircle2 size={18} />{toast}</div>}
  </div>;
}
