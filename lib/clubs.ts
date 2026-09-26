export type ClubStatus = "active" | "coming"

export type Club = {
  id: string
  published: boolean
  name: string
  status: ClubStatus
  location?: string
  images?: string[]
  amenities?: string[]
  hours?: string
  bookingUrl?: string
  faq?: { q: string; a: string }[]
}

/** Only clubs with published: true may appear on the site. Currently none. */
export const clubs: Club[] = []

export function publishedClubs() {
  return clubs.filter((club) => club.published)
}

export function getClub(id: string) {
  return publishedClubs().find((club) => club.id === id)
}

export function generalFaq(locale: "he" | "en") {
  if (locale === "en") {
    return [
      {
        q: "Is PadelTech already open?",
        a: "Our first club is coming soon. Bookings open with the club — leave your place on the list, or use the live booking link when it is published.",
      },
      {
        q: "Does choosing a region mean a club is planned there?",
        a: "Choosing a region expresses interest only. It does not indicate that a club is planned in that area.",
      },
      {
        q: "Is a group inquiry a booking?",
        a: "Sending an inquiry is not a reservation or a confirmation of availability.",
      },
      {
        q: "How are property proposals reviewed?",
        a: "Each proposal is reviewed on its planning, operational and commercial merits.",
      },
    ]
  }

  return [
      {
        q: "האם PADELTECH כבר פתוח?",
        a: "המועדון הראשון בדרך. ההזמנות נפתחות עם המועדון — שומרים מקום ברשימה, או עוברים למערכת ההזמנות כשהיא תפורסם.",
      },
    {
      q: "האם בחירת אזור אומרת שצפוי סניף במקום?",
      a: "בחירת אזור מביעה התעניינות ואינה מעידה על פתיחת מועדון מתוכננת בו.",
    },
    {
      q: "האם פנייה קבוצתית היא הזמנה?",
      a: "שליחת הפנייה אינה הזמנה או אישור זמינות.",
    },
    {
      q: "איך בוחנים הצעת נכס?",
      a: "כל הצעה תיבחן לגופה מבחינה תכנונית, תפעולית וכלכלית.",
    },
  ]
}
