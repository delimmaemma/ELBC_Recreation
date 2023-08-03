import Andrew from '../images/PastorAndrew.png'
import Facebook from '../images/FacebookLogo.png'
import FacebookWhite from '../images/FacebookLogo-White.png'
import Apple from '../images/AppleLogo.png'
import Google from '../images/GooglePlayLogo.jpg'
import Amazon from '../images/AmazonLogo.png'
import AppleBlack from '../images/AppleLogo-Black.jpg'
import GoogleBlack from '../images/GooglePlayLogo-Black.png'
import AmazonBlack from '../images/AmazonLogo-Black.jpg'

export const header = {
    title: 'ELKINS LAKE BAPTIST CHURCH',
    image: FacebookWhite,
    verse: 'Since we live by the Spirit, let us keep in step with the Spirit.',
    reference: 'Galatians 5:25',
}

export const andrew = {
    image: Andrew
}
    
export const slideshow = [{
    slideshow1: {
        id: 1,
        title: 'Wednesday Evening Fellowship Meal',
        time: '5:30pm - 6:00pm',
    },
    slideshow2: {
        id: 2,
        title: "Wednesday Evening Children's & Youth Bible Study",
        subheading: 'Classes grouped by age/grades',
        time: '6:15pm - 7:00pm',
    },
    slideshow3: {
        id: 3,
        title: 'Wednesday Evening Adult Bible Study',
        time: '6:15pm',
    },
    slideshow4: {
        id: 4,
        title: 'Worship Choir Practice',
        time: 'Wednesdays - 7:00pm',
    },
    slideshow5: {
        id: 5,
        title: 'Sunday Morning Bible Study',
        subheading: 'Various Classes grouped by age, life stage, or grade',
        time: '9:00am - 10:00am',
    },
    slideshow6: {
        id: 6,
        title: 'Sunday Morning Worship',
        subheading: 'Corporate, multi-generational, blended Worship',
        time: '10:30am'
    }
}]

export const welcome = {
    header: 'Welcome',
    subheader: "Being God's people in this time and place.",
    paragraph: "We're glad you found us and hope you'll give us a chance to meet you in person. Elkins Lake Baptist Church is a unique group of people trying to be followers of Jesus Christ. Our spiritual heritage is Baptist and we cooperate with many Baptist ministries adn missions, but our members come from a variety of Christian backgrounds. We simply all agree to let God's word in Jesus and Scripture be the guide for our lives.",
    button1: 'LISTEN ONLINE',
    button2: 'CONTACT US TO LEARN MORE'
}

export const media = {
    title: 'Newest Media',
    stream: {
        link: '',
        noStreamMsg: 'There are currently no live streams scheduled.',
        noStreamNote: 'Stay tuned'
    },
    recording: {
        link: '',
        noRecMsg: 'There are currently no recordings available.',
        noRecNote: 'Stay tuned'
    }
}

export const getApp = {
    title: 'Get The App',
    subtitle: 'Stay connected and get the latest content.',
    image1: Apple,
    link1: 'https://itunes.apple.com/us/app/id1535531007?mt=8&uo=4',
    image2: Google,
    link2: 'https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_3BCJGZ&referrer=utm_source%3Dsubsplash%26utm_content%3DeyJoYW5kbGVyIjoiYXBwIiwiYXBwa2V5IjoiM0JDSkdaIn0=',
    image3: Amazon,
    link3: 'http://www.amazon.com/gp/mas/dl/android?p=com.subsplashconsulting.s_3BCJGZ',
    button: {
        text: 'DOWNLOAD THE APP',
        onClick: {
            title: 'Download it on...',
            button1: 'ITUNES APP STORE',
            image1: AppleBlack,
            button2: 'GOOGLE PLAY',
            image2: GoogleBlack,
            button3: 'AMAZON APPSTORE',
            image3: AmazonBlack
        }
    }
}

export const footer = {
    footer1: {
        title: 'About',
        text: "We are an intergenerational body of Christ striving to be God's people in this time and place. Our Mission: Elkins Lake Baptist Church is a body of believers committed to create a safe environment where people can continually encounter, respond to, grow in, and live out the love of God found in Jesus Christ and empowered by the Holy Spirit."
    },
    footer2: {
        title: 'Contact Info',
        phone: '(936) 295-7694',
        location: '206 State Highway 19 Huntsville, TX 77340'
    },
    footer3: {
        title: 'Follow Us',
        image: Facebook,
        link: 'https://www.facebook.com/elkinslakebaptistchurch'
    }
}
