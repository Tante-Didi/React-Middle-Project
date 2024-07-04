const gamesData = [
  {
    id: 1,
    gameName: 'קטאן',
    img: '/public/assets/images/katan.png',
    shortDescription:
      'משחק אסטרטגיה פופולרי שבו משתתפים בונים ישובים, דרכים וערים על אי דמיוני.',
    rules:
      'לשחקנים יש תור שבמהלכו הם יכולים לסחור במשאבים, לבנות ולהשיג נקודות.',
    urlRules:
      'https://www.youtube.com/watch?v=KUNGilPVGb4&ab_channel=MeepleTreeGames%D7%9E%D7%99%D7%A4%D7%9C%D7%98%D7%A8%D7%99%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%A7%D7%95%D7%A4%D7%A1%D7%94',
    minNumberPraticepents: '3',
    maxNumberPraticepents: '4',
    minPlayersAge: '10',
    durationGame: '90 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'בינוני',
    categories: [ "adults"],
  },
  {
    id: 2,
    gameName: 'טליסמן',
    img: 'url/to/image.jpg',
    shortDescription: 'משחק לוח המשלב קסם, פנטזיה והרפתקאות.',
    rules: 'לשחקנים יש משימות, קרבות ואוצרות למצוא במהלך המשחק.',
    urlRules:
      'https://www.youtube.com/watch?v=PsQ5zgsCKbI&ab_channel=MeepleTreeGames%D7%9E%D7%99%D7%A4%D7%9C%D7%98%D7%A8%D7%99%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%A7%D7%95%D7%A4%D7%A1%D7%94',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '6',
    minPlayersAge: '12',
    durationGame: '120 דקות',
    typeGame: 'פנטזיה',
    gameDifficulty: 'בינוני',
    categories: ["adults"],
  },
  {
    id: 3,
    gameName: 'שם-קוד',
    img: '/public/assets/images/shemkod.jpg',
    shortDescription:
      'משחק מילים שבו משתתפים צריכים למצוא מילים מקודדות בעזרת רמזים.',
    rules:
      'שחקנים נותנים רמזים לצוות שלהם כדי למצוא את המילים הנכונות בלוח המשחק.',
    urlRules:
      'https://www.google.com/search?q=%D7%A9%D7%9D-%D7%A7%D7%95%D7%93+%D7%97%D7%95%D7%A7%D7%99%D7%9D+%D7%99%D7%95%D7%98%D7%99%D7%95%D7%99%D7%91&oq=%D7%A9%D7%9D-%D7%A7%D7%95%D7%93+%D7%97%D7%95%D7%A7%D7%99%D7%9D+%D7%99%D7%95%D7%98%D7%99%D7%95%D7%99%D7%91&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKAB0gEJOTY3MWowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:8d69117c,vid:ZZTyUBwagxQ,st:0',

    minNumberPraticepents: '4',
    maxNumberPraticepents: '8',
    minPlayersAge: '14',
    durationGame: '15-30 דקות',
    typeGame: 'מילים',
    gameDifficulty: 'קל',
    categories: ["family", "adults"],
  },
  {
    id: 4,
    gameName: 'מונופול',
    img: '/public/assets/images/monopol.jpg',
    shortDescription: 'משחק קלאסי של קנייה ומכירה של נדל"ן.',
    rules: 'שחקנים קונים ומוכרים נכסים ומנסים להוציא את יריביהם מהמשחק.',
    urlRules:
      'https://www.youtube.com/watch?v=AuWvMgYv03g&ab_channel=GatherTogetherGames',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '6',
    minPlayersAge: '8',
    durationGame: '60-180 דקות',
    typeGame: 'כלכלי',
    gameDifficulty: 'בינוני',
    categories: ["family", "adults"],
  },
  {
    id: 5,
    gameName: 'טאקי',
    img: '/public/assets/images/taki.jpg',
    shortDescription:
      'משחק קלפים פופולרי שבו משתתפים מנסים להיפטר מהקלפים שלהם ראשונים.',
    rules:
      'השחקנים מניחים קלפים על ערימה בהתאם לחוקי המשחק ומטרתם להיפטר מכל הקלפים.',
    urlRules:
      'https://www.youtube.com/watch?v=GWKxgVZy444&ab_channel=%D7%9B%D7%90%D7%9F%7C%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C-%D7%AA%D7%90%D7%92%D7%99%D7%93%D7%94%D7%A9%D7%99%D7%93%D7%95%D7%A8%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '10',
    minPlayersAge: '6',
    durationGame: '20-60 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'קל',
    categories: ["kids", "family", "adults"] ,
  },
  {
    id: 6,
    gameName: 'ספיד',
    img: '/public/assets/images/Speed-card-game.JPG',
    shortDescription:
      'משחק קלפים מהיר שבו המשתתפים צריכים להיפטר מהקלפים שלהם במהירות רבה.',
    rules:
      'המשחק משוחק בשני תורים בו זמנית, והמטרה היא להניח קלפים במהירות גבוהה מהיריב.',
    urlRules:
      'https://www.youtube.com/watch?v=vqtuntlmn6U&ab_channel=wikiHowhttps://www.youtube.com/watch?v=vqtuntlmn6U&ab_channel=wikiHow',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '7',
    durationGame: '5-10 דקות',
    typeGame: 'מהירות',
    gameDifficulty: 'קל',
    categories:["kids", "family", "adults"],
  },
  {
    id: 7,
    gameName: 'מלחמה-משחק-קלפים',
    img: '/public/assets/images/war.JPG',
    shortDescription:
      'משחק קלפים קלאסי שבו משתתפים מתחרים במלחמה של קלפים עם ערך גבוה יותר.',
    rules:
      'המשחק משוחק בשני תורים בו זמנית, כל שחקן שולף קלף והגבוה יותר מנצח.',
    urlRules: 'https://www.youtube.com/watch?v=03s-hH-DE7E&ab_channel=wikiHow',
    numberPraticepents: '2',
    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '4',
    durationGame: '10-20 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'קל',
    categories: ["kids", "family", "adults"],
  },
  {
    id: 8,
    gameName: 'יניב',
    img: '/public/assets/images/yaniv.jpg',
    shortDescription:
      'משחק קלפים ישראלי שבו השחקנים מנסים להיפטר מהקלפים שלהם ולסיים עם הכי מעט נקודות.',
    rules:
      'השחקנים מניחים קלפים על ערימה עם חוקי הנחה מסוימים ומנסים לסיים עם מינימום נקודות.',
    urlRules:
      'https://www.youtube.com/watch?v=8kaDw6lIwek&ab_channel=%D7%9B%D7%90%D7%9F%7C%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C-%D7%AA%D7%90%D7%92%D7%99%D7%93%D7%94%D7%A9%D7%99%D7%93%D7%95%D7%A8%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '5',
    minPlayersAge: '8',
    durationGame: '20-30 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'בינוני',
    categories: [ "family","adults"] 
  },
  {
    id: 9,
    gameName: 'חלומות',
    img: '/public/assets/images/dreams.jpg',
    shortDescription: 'משחק חברתי שבו המשתתפים מספרים סיפורים ודמיון מתפרע.',
    rules:
      'השחקנים צריכים לתאר חלומות ולעורר את הדמיון של השאר בעזרת סיפורים מקוריים.',
    urlRules:
      'https://www.google.com/search?q=jkunu%2C+jueho&oq=jkunu%2C+jueho&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIE0gEJMzU2M2owajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:deb40467,vid:qUdcXK9CWa4,st:0',

    minNumberPraticepents: '3',
    maxNumberPraticepents: '8',
    minPlayersAge: '10',
    durationGame: '30-45 דקות',
    typeGame: 'חברתי',
    gameDifficulty: 'קל',
    categories: ["kids", "family"],
  },
  {
    id: 10,
    gameName: 'חתלתול',
    img: '/public/assets/images/CHATCHAT-TUL.JPG',
    shortDescription:
      'משחק קלפים שבו המשתתפים מנסים להיפטר מקלפי החתלתולים שלהם.',
    rules: 'כל שחקן מניח קלף על הערימה ומנסה להיפטר מכל הקלפים כדי לנצח.',
    urlRules:
      'https://www.google.com/search?q=j%2Cj%2Cuk+jueho&oq=j%2Cj%2Cuk+jueho&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgBGIAEMgoIAhAAGIAEGKIE0gEIMjkxOGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4ff826b9,vid:50d0gypKo-o,st:0',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '6',
    minPlayersAge: '5',
    durationGame: '15-20 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'קל',
    categories: ["kids", "family"],
  },
  {
    id: 11,
    gameName: 'דיקסיט',
    img: '/public/assets/images/dixsit.png',
    shortDescription:
      'משחק קלפים שבו השחקנים מנסים לנחש את הקלף שמתאר את הסיפור שמספר המספר.',
    rules: 'המספר נותן רמז והשחקנים צריכים לנחש איזה קלף מתאים לרמז.',
    urlRules: 'https://www.youtube.com/watch?v=BfZcpWuRu98&ab_channel=hakubia',

    minNumberPraticepents: '3',
    maxNumberPraticepents: '6',
    minPlayersAge: '8',
    durationGame: '30-45 דקות',
    typeGame: 'חברתי',
    gameDifficulty: 'קל',
    categories: ["kids", "family", "adults"] ,
  },
  {
    id: 12,
    gameName: 'טיסה 501',
    img: '/public/assets/images/flight-501.JPG',
    shortDescription: 'משחק הרפתקאות שבו השחקנים מנסים לשרוד במסע טיסה מסוכן.',
    rules: 'המשתתפים צריכים למצוא דרכים לשרוד ולהגיע ליעדם בשלום.',
    urlRules:
      'https://www.youtube.com/watch?v=-pcO36-6S7c&t=706s&ab_channel=%D7%9C%D7%99%D7%90%D7%95%D7%A8%D7%95%D7%99%D7%99%D7%A5-LiorWeitz',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '6',
    minPlayersAge: '10',
    durationGame: '60-90 דקות',
    typeGame: 'הרפתקאות',
    gameDifficulty: 'בינוני',categories: ["family", "adults"],
  },
  {
    id: 13,
    gameName: 'רמיקוב',
    img: '/public/assets/images/rummikub.jpg',
    shortDescription:
      'משחק לוח שבו השחקנים מנסים להיפטר מכל האריחים שלהם בעזרת סדרות ומספרים.',
    rules: 'השחקנים מניחים אריחים בסדרות או בקבוצות ומנסים להיפטר מכל האריחים.',
    urlRules:
      'https://www.youtube.com/watch?v=7V5JCeQ8fEU&ab_channel=KodkodOnline',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '7',
    durationGame: '30-60 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'בינוני',
    categories: ["family", "adults"] ,
  },
  {
    id: 14,
    gameName: 'הרמז',
    img: '/public/assets/images/haremez.jpg',
    shortDescription:
      'משחק חקירה שבו השחקנים מנסים לגלות מי הרוצח, עם איזה כלי נשק ואיפה זה קרה.',
    rules: 'המשתתפים חוקרים רמזים ומשתמשים בהגיון כדי לפתור את התעלומה.',
    urlRules:
      'https://www.youtube.com/watch?v=4rbJCc5E0Mk&ab_channel=%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%94%D7%9B%D7%99%D7%A3-%D7%9C%D7%97%D7%A9%D7%95%D7%91%D7%9E%D7%AA%D7%95%D7%9A%D7%94%D7%A7%D7%95%D7%A4%D7%A1%D7%94FunGames',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '6',
    minPlayersAge: '8',
    durationGame: '45-60 דקות',
    typeGame: 'חקירה',
    gameDifficulty: 'בינוני',
    categories: ["family", "adults"],
  },
  {
    id: 15,
    gameName: 'בלאנקו',
    img: '/public/assets/images/BLANCO.jpg',
    shortDescription: 'משחק קלפים שבו השחקנים מנסים לבנות מילים מהקלפים שלהם.',
    rules: 'כל שחקן מניח קלפים בקטגוריות מסוימות כדי ליצור מילים ולקבל נקודות.',
    urlRules: ' ',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '8',
    durationGame: '20-30 דקות',
    typeGame: 'מילים',
    gameDifficulty: 'קל',
    categories: ["kids", "family"],
  },
  {
    id: 16,
    gameName: 'סט',
    img: '/public/assets/images/SET.png',
    shortDescription:
      'משחק קלפים שבו השחקנים צריכים למצוא סטים של קלפים עם תכונות דומות.',
    rules: 'השחקנים מחפשים ומכריזים על סטים של שלושה קלפים עם תכונות דומות.',
    urlRules:
      'https://www.google.com/search?q=%D7%97%D7%95%D7%A7%D7%99%D7%9D+SET+%D7%9E%D7%A9%D7%97%D7%A7&oq=%D7%97%D7%95%D7%A7%D7%99%D7%9D+SET+%D7%9E%D7%A9%D7%97%D7%A7&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCTQ5MjhqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:cb3f9c59,vid:VxzYveXxF4s,st:0',

    minNumberPraticepents: '1',
    maxNumberPraticepents: '4',
    minPlayersAge: '6',
    durationGame: '20 דקות',
    typeGame: 'חידות',
    gameDifficulty: 'בינוני',
    categories: ["kids"],
  },
  {
    id: 17,
    gameName: 'חתולים-מתפוצצים',
    img: '/public/assets/images/exploding-cats.webp',
    shortDescription:
      'משחק קלפים מטורף שבו השחקנים מנסים להימנע מהתפוצצות חתולים.',
    rules:
      'כל שחקן מניח קלפים ומנסה להימנע מהחתולים המתפוצצים כדי להישאר במשחק.',
    urlRules: 'https://www.youtube.com/watch?v=nBS2C0ggI3Y&ab_channel=hakubia',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '5',
    minPlayersAge: '10',
    durationGame: '15 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'קל',
    categories: ["family", "adults"],
  },
  {
    id: 18,
    gameName: 'טאבו',
    img: '/public/assets/images/TABO.jpg',
    shortDescription:
      'משחק מילים שבו השחקנים צריכים לתאר מילים מסוימות מבלי להשתמש במילים טאבו.',
    rules:
      'המשתתפים נותנים רמזים לצוות שלהם כדי למצוא את המילים הנכונות בלוח המשחק.',
    urlRules: 'https://www.youtube.com/watch?v=s0gp3zbdDes&ab_channel=wikiHow',

    minNumberPraticepents: '4',
    maxNumberPraticepents: '10',
    minPlayersAge: '12',
    durationGame: '30-60 דקות',
    typeGame: 'מילים',
    gameDifficulty: 'בינוני',
    categories: ["family", "adults"],
  },
  {
    id: 19,
    gameName: 'טיקט טו רייד',
    img: '/public/assets/images/ticket-to-ride.jpg',
    shortDescription:
      'משחק אסטרטגיה שבו השחקנים בונים מסלולי רכבת ברחבי העולם.',
    rules: 'השחקנים אוספים קלפים ובונים מסלולי רכבת כדי לקשר בין יעדים.',
    urlRules:
      'https://www.youtube.com/watch?v=4JhFhyvGdik&ab_channel=WatchItPlayed',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '5',
    minPlayersAge: '8',
    durationGame: '30-60 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'בינוני',
    categories: ["family"],
  },
  {
    id: 20,
    gameName: 'פנדמיק',
    img: '/public/assets/images/PANDEMIC.JPG',
    shortDescription: 'משחק שיתוף פעולה שבו השחקנים מנסים לעצור מגפות עולמיות.',
    rules: 'השחקנים עובדים יחד כדי לרפא מחלות ולמנוע התפשטותן ברחבי העולם.',
    urlRules:
      'https://www.youtube.com/watch?v=UbawdIniF0E&ab_channel=%D7%A0%D7%A7%D7%95%D7%93%D7%AA%D7%A0%D7%99%D7%A6%D7%97%D7%95%D7%9F',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '8',
    durationGame: '45 דקות',
    typeGame: 'חברתי',
    gameDifficulty: 'בינוני',
    categories: ["adults"],
  },
  {
    id: 21,
    gameName: 'מנקלה',
    img: '/public/assets/images/mankale.jpg',
    shortDescription:
      'משחק לוח אסטרטגי מסורתי מאפריקה שבו השחקנים מנסים לאסוף כמה שיותר זרעים.',
    rules:
      'השחקנים מעבירים זרעים מחורים בלוח המשחק ומנסים לאסוף אותם בצד שלהם.',
    urlRules:
      'https://www.youtube.com/watch?v=cJGemP_zdf0&ab_channel=%D7%97%D7%95%D7%92%D7%99%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%97%D7%A9%D7%99%D7%91%D7%94%D7%A9%D7%9C%D7%91%D7%95%D7%A8%D7%99%D7%A1',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '6',
    durationGame: '15-30 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'קל',
    categories: ["kids", "family"],
  },
  {
    id: 22,
    gameName: 'סטראטיגו',
    img: '/public/assets/images/stratigo.avif',
    shortDescription:
      'משחק אסטרטגיה שבו השחקנים מנסים לחשוף ולהשמיד את דגל היריב.',
    rules: 'השחקנים מזיזים חלקים על לוח המשחק ומנסים לתפוס את דגל היריב.',
    urlRules:
      'https://www.youtube.com/watch?v=7mdylj01Myk&ab_channel=Hogwa5hGaming',
    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '8',
    durationGame: '45 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'בינוני',
    categories: ["family", "adults"]
  },
  {
    id: 23,
    gameName: 'שחמט',
    img: '/public/assets/images/Chess.JPG',
    shortDescription:
      'משחק לוח קלאסי שבו השחקנים מנסים להשיג את המלך של היריב.',
    rules:
      'השחקנים מזיזים חלקים על לוח המשחק בהתאם לכללים כדי להפיל את המלך של היריב.',
    urlRules: 'https://www.youtube.com/watch?v=6Pqd7UFWr7M&ab_channel=wikiHow',
    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '6',
    durationGame: '30-120 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'גבוה',
    categories: ["family", "adults"],
  },
  {
    id: 24,
    gameName: 'שש-בש',
    img: '/public/assets/images/shesh-besh.webp',
    shortDescription:
      'משחק לוח שבו השחקנים מנסים להזיז את החיילים שלהם ברחבי הלוח ולהוציא אותם.',
    rules: 'השחקנים מגלגלים קוביות ומזיזים את החיילים בהתאם לתוצאות.',
    urlRules:
      'https://www.youtube.com/watch?v=DbVR-XsaRcs&ab_channel=Best-Toys',
    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '6',
    durationGame: '30-60 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'בינוני',
    categories: ["family", "adults"],
  },
  {
    id: 25,
    gameName: 'דמקה',
    img: '/public/assets/images/Damka.JPG',
    shortDescription:
      'משחק לוח שבו השחקנים מנסים לתפוס את כל החיילים של היריב.',
    rules: 'השחקנים מזיזים חיילים בלוח המשבצות ומנסים לתפוס את חיילי היריב.',
    urlRules: 'https://www.youtube.com/watch?v=MOW9k_C4vFU&ab_channel=wikiHow',
    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '6',
    durationGame: '20-30 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'קל',
    ["kids", "family"]
  },
  {
    id: 26,
    gameName: 'משחק-הזיכרון',
    img: '/public/assets/images/memory-cards.webp',
    shortDescription:
      'משחק שבו השחקנים מנסים למצוא זוגות של קלפים תואמים על הלוח.',
    rules: 'השחקנים הופכים קלפים בזוגות ומנסים למצוא התאמות.',
    urlRules: 'https://www.youtube.com/watch?v=1b6R5MePZYg&ab_channel=ADHDSHOP',

    minNumberPraticepents: '1',
    maxNumberPraticepents: '4',
    minPlayersAge: '3',
    durationGame: '10-20 דקות',
    typeGame: 'חידות',
    gameDifficulty: 'קל',
    categories: ['kids', 'family'],
  },
  {
    id: 27,
    gameName: 'סולמות-ונחשים',
    img: '/public/assets/images/snakes-and-ledders.webp',
    shortDescription:
      'משחק לוח שבו השחקנים מנסים להגיע לסוף הלוח בעזרת סולמות ולהימנע מנחשים.',
    rules: 'השחקנים מגלגלים קוביות ומזיזים את החיילים בהתאם לתוצאות.',
    urlRules: 'https://www.youtube.com/watch?v=gWz0IYqSDtk&ab_channel=wikiHow',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '4',
    durationGame: '20-30 דקות',
    typeGame: 'מזל',
    gameDifficulty: 'קל',
    categories: ['kids', 'family'],
  },
  {
    id: 28,
    gameName: 'RACE',
    img: '/public/assets/images/race.jpg',
    shortDescription:
      'משחק מירוצים שבו השחקנים מנסים להגיע לנקודת הסיום ראשונים.',
    rules: 'השחקנים מזיזים את כלי הרכב שלהם בהתאם לקלפים המונחים.',
    urlRules:
      'https://play-smart.co.il/shafir_games_race?aff=GMC&gad_source=1&gclid=CjwKCAjwhIS0BhBqEiwADAUhczQAnn35m1KrrAo4SqIETI6bQXvjygpGHO_gElifFWSHtMRBy0nO6BoCVnwQAvD_BwE',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '6',
    minPlayersAge: '7',
    durationGame: '30-45 דקות',
    typeGame: 'מירוצים',
    gameDifficulty: 'בינוני',
    categories: ['family'],
  },
  {
    id: 29,
    gameName: ' פוקר טקסס הולדם',
    img: '/public/assets/images/poker2.JPG',
    shortDescription:
      'משחק קלפים שבו השחקנים מנסים ליצור ידיים חזקות כדי לנצח ולהרוויח כסף.',
    rules: 'השחקנים מקבלים קלפים ומבצעים מהלכים כדי ליצור ידיים מנצחות.',
    urlRules:
      'https://www.google.com/search?q=%D7%97%D7%95%D7%A7%D7%99+%D7%9E%D7%A9%D7%97%D7%A7+%D7%A4%D7%95%D7%A7%D7%A8+YOUTUBE&sca_esv=2c0e54b2c49c2288&sca_upv=1&sxsrf=ADLYWIJevWxvk_yF36nXbAelyM2WsvbOWw%3A1719776504441&ei=-LSBZtjIGuKL7M8Pk4u-8AQ&ved=0ahUKEwjYpI_dioSHAxXiBfsDHZOFD04Q4dUDCBE&uact=5&oq=%D7%97%D7%95%D7%A7%D7%99+%D7%9E%D7%A9%D7%97%D7%A7+%D7%A4%D7%95%D7%A7%D7%A8+YOUTUBE&gs_lp=Egxnd3Mtd2l6LXNlcnAiIteX15XXp9eZINee16nXl9enINek15XXp9eoIFlPVVRVQkUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjZFVCaBFjJE3ABeAGQAQCYAagBoAHYCKoBAzAuOLgBA8gBAPgBAZgCCaAC5gjCAgoQABiwAxjWBBhHwgIGEAAYFhgewgIFECEYoAHCAgkQIRigARgKGCqYAwCIBgGQBgiSBwMxLjigB6cV&sclient=gws-wiz-serp#fpstate=ive&vld=cid:c38e8c26,vid:J2PBbLiiRoc,st:0',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '10',
    minPlayersAge: '12',
    durationGame: '60-120 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'בינוני',
    categories: ['adults'],
  },
  {
    id: 30,
    gameName: 'סוליטר',
    img: '/public/assets/images/Soliter.JPG',
    shortDescription:
      'משחק קלפים לשחקן אחד שבו המטרה היא לסדר את כל הקלפים בסדר הנכון.',
    rules: 'השחקן מסדר את הקלפים בסדר הנכון בעזרת מהלכים מסוימים.',
    urlRules: 'https://www.youtube.com/watch?v=oAB5fsN2uA8&ab_channel=wikiHow',

    minNumberPraticepents: '1',
    maxNumberPraticepents: '1',
    minPlayersAge: '8',
    durationGame: '10-30 דקות',
    typeGame: 'חידות',
    gameDifficulty: 'בינוני',
    categories: ['adults'],
  },
  {
    id: 31,
    gameName: 'קצפת-לפרצוף',
    img: '/public/assets/images/cream-on-the-face.webp',
    shortDescription:
      'משחק מסיבה שבו השחקנים מסתובבים בקלפים ומנסים להימנע מקצפת בפנים.',
    rules: 'השחקנים מסובבים את המכשיר ומנסים להימנע מלהפעיל את הקצפת.',
    urlRules:
      'https://www.youtube.com/watch?v=TjII0JHtIzk&ab_channel=%D7%90%D7%9C%D7%99%D7%90%D7%9C%D7%99%D7%94%D7%95-%D7%94%D7%A2%D7%A8%D7%95%D7%A5%D7%94%D7%A8%D7%A9%D7%9E%D7%99',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '6',
    durationGame: '15 דקות',
    typeGame: 'מסיבה',
    gameDifficulty: 'קל',
    categories: ['kids', 'family'],
  },
  {
    id: 32,
    gameName: 'מחוץ לקופסא',
    img: '/public/assets/images/out-of-box.JPG',
    shortDescription:
      'משחק חידות שבו השחקנים צריכים למצוא פתרונות יצירתיים לחידות שונות.',
    rules: 'השחקנים פותרים חידות בעזרת חשיבה יצירתית ומחוץ לקופסה.',
    urlRules:
      'https://www.kravitz.co.il/products/%D7%9E%D7%A9%D7%97%D7%A7-%D7%9E%D7%97%D7%95%D7%A5-%D7%9C%D7%A7%D7%95%D7%A4%D7%A1%D7%90?variant=48486783320360&utm_source=google&utm_medium=cpc&utm_campaign=19086444207&utm_content=&utm_term=&gad_source=2&gclid=CjwKCAjwhIS0BhBqEiwADAUhc18IVAP8IPn5jDlapej2s5kj2wkhZZOApv_JyeZj62rSWMG3mrjirxoCWVMQAvD_BwE',

    minNumberPraticepents: '1',
    maxNumberPraticepents: '4',
    minPlayersAge: '8',
    durationGame: '30-45 דקות',
    typeGame: 'חידות',
    gameDifficulty: 'בינוני',
    categories: ['kids', 'family'],
  },
  {
    id: 33,
    gameName: 'שבץ-נא',
    img: '/public/assets/images/Scrabble.jpg',
    shortDescription:
      'משחק מילים שבו השחקנים יוצרים מילים על לוח המשחק בעזרת אריחים.',
    rules: 'השחקנים מניחים אריחים על הלוח ויוצרים מילים כדי לקבל נקודות.',
    urlRules:
      'https://www.youtube.com/watch?v=9mrU1Xdp1F8&ab_channel=TalDegani',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '8',
    durationGame: '30-90 דקות',
    typeGame: 'מילים',
    gameDifficulty: 'בינוני',
    categories: ['family', 'adults'],
  },
  {
    id: 34,
    gameName: 'איקוגניטו',
    img: '/public/assets/images/incognito.jpg',
    shortDescription:
      'משחק תפקידים שבו השחקנים צריכים לגלות מי הם השחקנים האחרים ומה התפקיד שלהם.',
    rules: 'השחקנים משתמשים ברמזים וחוקרים כדי לגלות את זהותם של האחרים.',
    urlRules: ' ',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '5',
    minPlayersAge: '10',
    durationGame: '45-60 דקות',
    typeGame: 'תפקידים',
    gameDifficulty: 'בינוני',
    categories: ['adults'],
  },
  {
    id: 35,
    gameName: 'דומינו',
    img: '/public/assets/images/domino.jpg',
    shortDescription:
      'משחק לוח שבו השחקנים מניחים אריחי דומינו כדי ליצור שרשרת ארוכה.',
    rules: 'השחקנים מניחים אריחים עם מספרים תואמים ומנסים ליצור שרשרת ארוכה.',
    urlRules:
      'https://www.youtube.com/watch?v=jMHJhZlAbdc&ab_channel=TripleSGames',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '4',
    minPlayersAge: '5',
    durationGame: '20-30 דקות',
    typeGame: 'לוח',
    gameDifficulty: 'קל',
    categories: ['kids', 'family'],
  },
  {
    id: 36,
    gameName: 'טאקו, חתול, עז, גבינה, פיצה',
    img: '/public/assets/images/tako-pizza.JPG',
    shortDescription:
      'משחק קלפים מהיר ומצחיק שבו השחקנים מנסים להיפטר מהקלפים שלהם.',
    rules: 'השחקנים מניחים קלפים מהר ומנסים לסיים עם כמה שפחות קלפים.',
    urlRules:
      'https://www.youtube.com/watch?v=5eeK9qAsfxU&ab_channel=IgalsMadToys',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '8',
    minPlayersAge: '8',
    durationGame: '10-20 דקות',
    typeGame: 'קלפים',
    gameDifficulty: 'קל',
    categories: ['kids', 'family', 'adults'],
  },

  {
    id: 37,
    gameName: 'צוללות',
    img: '/public/assets/images/zolelot.jpg',
    shortDescription:
      'משחק לוח שבו השחקנים מנסים להשמיד את כל הצוללות של היריב.',
    rules:
      'השחקנים מניחים צוללות על הלוח ומנסים לנחש את מיקומן של הצוללות של היריב.',
    urlRules: 'https://www.youtube.com/watch?v=RY4nAyRgkLo&ab_channel=wikiHow',

    minNumberPraticepents: '2',
    maxNumberPraticepents: '2',
    minPlayersAge: '6',
    durationGame: '20-30 דקות',
    typeGame: 'אסטרטגיה',
    gameDifficulty: 'קל',
    categories: ['kids', 'family', 'adults'],
  },

  {
    id: 38,
    gameName: 'יאצי',
    img: '/public/assets/images/Yahtzee.jpeg',
    shortDescription:
      'משחק קוביות שבו השחקנים מנסים ליצור קומבינציות מסוימות כדי לקבל נקודות.',
    rules:
      'השחקנים מגלגלים קוביות ויוצרים קומבינציות כדי לקבל את הניקוד הגבוה ביותר.',
    urlRules: 'https://www.youtube.com/watch?v=LEY_E8MRK4o&ab_channel=wikiHow',

    minNumberPraticepents: '1',
    maxNumberPraticepents: '6',
    minPlayersAge: '8',
    durationGame: '30 דקות',
    typeGame: 'קוביות',
    gameDifficulty: 'בינוני',
    categories: ['kids', 'family', 'adults'],
  },
]
