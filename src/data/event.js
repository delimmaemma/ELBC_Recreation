import Church from '../images/FrontOfChurch.png'
import Bible from '../images/HandHoldingBible.jpg'
import Splash from '../images/Splash.jpg'
import Ladies from '../images/SummerLadies.jpg'
import ELSAM from '../images/ELSAM.jpg'
import Calendar from '../images/calendar.png'
import Clock from '../images/Clock.png'
import Register from '../images/Register.png'
import Email from '../images/Email.png'
import Phone from '../images/PhoneIcon.jpg'
import Location from '../images/Location.jpg'

export const event = {
    dateIcon: Calendar,
    timeIcon: Clock,
}

export const elsam = { //Black register button with register icon
    image: ELSAM,
    subtitle: 'Elkins Lake Senior Adult Ministry Meeting',
    note: 'Register for Lunch RSVP',
    registerIcon: Register,
    buttonTitle: 'Register now'
}

export const bibleStudy = { //Light grey button with no icon
    image: Church,
    subtitle: 'Bible Study',
    buttonTitle: 'Church Website', //OnClick -> Link: '/'
    emailIcon: Email,
    email: 'office@elbc.org',
    phoneIcon: Phone,
    phone: '(936) 295-7694'
}

export const worship = { //Light grey button no icon
    image: Bible,
    subtitle: 'Worship',
    note: 'Intergenerational Worship Service',
    buttonTitle: 'Church Website',
    locationIcon: Location,
    locationAddress: '206 TX-19',
    locationCity: 'Huntsville, TX 77340',
    locationMessage: 'Get directions', //OnClick -> navigate('https://www.google.com/maps/place/30%C2%B041'17.9%22N+95%C2%B031'54.1%22W/@30.68831,-95.531685,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.68831!4d-95.531685?entry=ttu')
    emailIcon: Email,
    email: 'office@elbc.org',
    phoneIcon: Phone,
    phone: '(936) 295-7694'
}

export const splash = { //No button
    image: Splash,
    subtitle: 'Water Play for all Ages',
    note: 'Bring your self, your bathing suit, sunscreen, and a towl.',
    note2: 'There will be plenty to do for any age person'
}

export const ladies = { //Black register button with register icon
    image: Ladies,
    subtitle: 'August Gardening',
    note: 'Plant seeds or sprouts in painted pots',
    registerIcon: Register,
    buttonTitle: 'Register now'
}