
const interests = {
    criminal: {
        navigation: { route: 'interests', params: { value: 'criminal' } },
        title: `משפט פלילי`,
        content: [
            {
                type: '',
                text: `תחום המשפט הפלילי עוסק בחקירה והעמדה לדין בגין עבירות פליליות. חשוב לדעת שההליך הפלילי מתחלק למספר שלבים שכל אחד מהם עומד בפני עצמו ודורש מומחיות נפרדת, שכן ניהול נכון של כל אחד מהם יכול להוביל לסגירת החקירה, סגירת התיק הפלילי ולזיכוי.`,

            },
            {
                type: 'underline',
                text: `שלב החשד הראשוני – הוא השלב בו נפתח ההליך הפלילי, והוא יכול להתחיל, בין היתר, בתשאול "תמים" ברחוב ששוטר החליט לבצע; בחיפוש על גופו של אדם, ברכבו או בביתו; במידע מודיעיני שהתקבל במשטרה או הפעלת "סוכנים" שלה; ובתלונה שהגיש אדם אחר. `,

            },
            {
                type: '',
                text: `למרבה הצער, פעמים רבות שוטרים מבצעים תשאולים וחיפושים על אדם ללא כל חשד, על בסיס דעות קדומות וגזעניות, ומבלי להסביר לו את זכויותיו בהתאם לדין. לעיתים המשטרה מבצעת חיפוש ברכב של אדם, בביתו או במכשיר הסלולארי שלו מבלי שיש לה חשד ברמה גבוהה מספיק לעשות זאת, או תוך פגיעה חריגה בזכויותיו. מידע מודיעיני שהתקבל במשטרה עשוי להיות מופרך, ישן, לא מפורט ולא מדויק מספיק כדי להצדיק פעולות חקירה. תלונה למשטרה בנושא פעוט יכולה לשמש כתירוץ עבורה לבצע פעולות מרחיקות לכת. `,

            },
            {
                type: '',
                text: `עורך דין פלילי מנוסה יודע לזהות פגמים בהתנהלות המשטרה שעשויים להוביל לפסילת ראיות, ביטול הודאות, סגירת תיק החקירה ואף לזיכוי. `,

            },
            {
                type: 'underline',
                text: `שלב החקירה – נוגע להליכי מעצר, חקירות גלויות "וסמויות", גביית עדויות ואיסוף הראיות על ידי המשטרה.`,

            },
            {
                type: '',
                text: `זהו השלב החשוב ביותר בהליך, כי היכולת של עו"ד פלילי להשפיע בו על תוצאות ההליך היא הגבוהה ביותר ! ייעוץ נכון של עורך דין פלילי לפני ובמהלך החקירה עשוי להיות ההבדל בין סגירת התיק לבין כתב אישום, בין זיכוי לבין הרשעה, ובין חופש לבין מעצר ומאסר.`,

            },
            {
                type: '',
                text: `חקירה פלילית היא מעמד מלחיץ, בו נאלץ נחקר לקבל עשרות החלטות שונות, שכל אחת מהן עשויה להיות בעלת חשיבות מכרעת להמשך ההליך – החל מההחלטה אם להשיב לשאלות החוקרים או לשמור על זכות השתיקה ועד להחלטות בעניין הסכמה או סירוב לחיפושים, ביצוע בדיקות פוליגרף, האם וכיצד לגשת לעימותים עם מגיש התלונה וכיו"ב. `,

            },
            {
                type: '',
                text: `בעבירות חמורות ובהליכי מעצר, המשטרה עושה שימוש בשיטות חקירה לא שגרתיות במטרה להתיש, להוציא מחשודים התבטאויות "מפלילות" ולדלות הודאה בעבירות. עורך דין פלילי מקצועי תפקידו לא רק לתת ללקוח ייעוץ כיצד לנהוג בחקירה, אלא גם להפיג את הלחץ והחששות מההליך ולוודא שלא פוגעים בזכויותיו ושלא מנצלים את המצב שבו הוא נמצא כדי לפגוע בו.`,
            },
            {
                type: 'underline',
                text: `שלב האישום והמשפט – לאחר שמסתיימת חקירת המשטרה, עובר תיק החקירה לטיפולה של התביעה אשר מחליטה אם לסגור את התיק נגד החשוד או להגיש כתב אישום ולנהל כנגדו משפט. בשלב זה, התביעה רשאית (ולפעמים אף חייבת) לאפשר לחשוד ולעורך הדין שלו לטעון מדוע אין להגיש כנגדו כתב אישום, ובמקרים מסוימים היא גם רשאית להגיע להסדרים מותנים והסדרי טיעון מקלים.`,

            },
            {
                type: '',
                text: `אם הוגש כתב אישום ולא ניתן לגרום לביטולו או לסיים את ההליך בהסכמה, לא תיוותר ברירה אלא לנהל את ההליך המשפטי עד תום. ניהול משפט היא מהמיומנויות המורכבות והחשובות ביותר של עורך דין פלילי. עורך דין פלילי טוב חייב להכיר את החוקים והפסיקה הרלוונטיים לעבירות שמיוחסות לנאשם, להיות יסודי ולהכיר את כל פרטי החקירה, לדעת לגבש אסטרטגיה נכונה לניהול ההליך, להיות מיומן בחקירת עדים, שוטרים, מומחים פורנזיים וכיו"ב וחשוב מכל – לדעת לבצע את עבודתו ולהציג את עמדתו בצורה משכנעת בפני בית המשפט.`,
            },

        ],
        image: {
            source: { uri: 'https://en-law.tau.ac.il/sites/law-english.tau.ac.il/files/styles/reaserch_main_image_580_x_330/public/Taubenschlag.jpg?itok=b2trEod4' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין פלילי אור פרים`
    },
    military: {
        navigation: { route: 'interests', params: { value: 'military' } },
        title: `משפט צבאי`,
        content: [
            {
                type: '',
                text: `מערכת המשפט הצבאי חלה על חיילים וקצינים בשירות חובה, בקבע ובשירות מילואים פעיל, והיא שונה מאוד ונפרדת מזו שחלה על אזרחים.`,
            },
            {
                type: '',
                text: `לצד קיומן של עבירות צבאיות ייחודיות כמו עריקות, שימוש בלתי חוקי בנשק, הטלת מום וכדומה, מערכת המשפט הצבאי אמונה גם על אכיפת הדין הפלילי הכללי בצה"ל, ולעיתים רבות היא מחמירה הרבה יותר מהמערכת האזרחית. הדוגמה המוכרת והמובהקת ביותר לכך נוגעת לעבירות שימוש בסמים קלים – בעוד שאזרח שנתפס עם כמות קטנה של קנאביס לשימוש עצמי לרוב ישוחרר לאחר חקירה קצרה (אם בכלל ייחקר), חייל שנתפס עם כמות זהה עשוי להיות נתון למעצר, לחקירה על ידי המשטרה הצבאית החוקרת (מצ"ח) שעשויה להימשך שעות רבות, ואף להעמדה לדין פלילי בפני בית דין צבאי.`,
            },
            {
                type: '',
                text: `חשוב להדגיש שמדובר בדוגמה אחת בלבד, ומעבר לעבירות סמים צה"ל נוקט במדיניות שונה ומחמירה גם ביחס לעבירות אחרות כמו עבירות אלימות, גניבה, מרמה, עבירות מין ועוד. `,
            },
            {
                type: '',
                text: `בנוסף, החקירות בצה"ל מנוהלות לרוב על ידי חיילים בשירות חובה, בגילאים 18-21, שפעמים רבות אין להם את הניסיון הנדרש כדי לנהל חקירה באופן ראוי והוגן ולעיתים הם מושפעים ממניעים פסולים שונים כמו רצון להרשים את חבריהם או מפקדיהם באמצעות השגת הודאה, או רצון לסיים את החקירה במהרה כדי לצאת הביתה מוקדם. נסיבות אלה מהוות כר פורה לפגיעה והפרת זכויותיהם של החיילים הנחקרים.`,
            },
            {
                type: '',
                text: `באותו אופן, גם מתקן הכליאה הצבאי מנוהל בפועל על ידי חיילים צעירים בשירות חובה, חסרי ניסיון, אשר נדרשים לפקח ולהיות אחראים לחיילים העצורים בתקופות הקשות והמלחיצות בחייהם.`,
            },
            {
                type: '',
                text: `עורך דין צבאי טוב חייב להיות מודע לכל הדקויות הללו על מנת לספק את הייעוץ הטוב ביותר ובאותה עת לדאוג לשלומו של החייל ולשמירה על זכויותיו.`,
            },
            {
                type: '',
                text: `לצד האמור, במערכת המשפט הצבאי קיימים מנגנונים רבים שמטיבים עם חיילים לעומת אזרחים שעומדים לדין, כמו קיומן של עבירות שלא נושאות רישום פלילי, עבירות שניתן לקבל עבורן רישום פלילי מופחת בלבד, "הסדרי הקפאה" וכדומה.`,
            },
            {
                type: '',
                text: `עורך דין צבאי מנוסה מכיר את המנגנונים הללו ויודע לעשות בהם שימוש נכון כדי להשיג לחייל שהוא מייצג את התוצאה הטובה ביותר עבורו ולדאוג לעתידו.`,
            },
            {
                type: 'bold',
                text: `עורך דין צבאי אור פרים שימש כתובע בפרקליטות הצבאית במשך כ- 6 שנים, טיפל במאות תיקים צבאיים-פליליים ומכיר את מערכת המשפט הצבאי מבפנים.`,
            },
        ],
        image: {
            source: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Defense.gov_News_Photo_030522-D-9880W-118.jpg/800px-Defense.gov_News_Photo_030522-D-9880W-118.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין צבאי אור פרים`
    },
    traffic: {
        navigation: { route: 'interests', params: { value: 'traffic' } },
        title: `תעבורה`,
        content: [
            {
                type: '',
                text: `דיני התעבורה עוסקים בקשת רחבה של עבירות. לרוב, מדובר בעבירות קלות ונפוצות כמו אי-עצירה בתמרור עצור, נהיגה במהירות מופרזת ושימוש בטלפון הנייד, שבעקבותיהן נשלח לנהג דו"ח לתשלום קנס וקבלת "נקודות".`
            },
            {
                type: '',
                text: `כמעט כל נהג מכיר את שיטת הניקוד של משרד הרישוי, אולם נהגים רבים שמקבלים דו"ח עבור ביצוע עבירה קלה משלמים את הקנס הנקוב בדו"ח מבלי לחשוב פעמיים – לפעמים כי אין להם נקודות קודמות ולפעמים כי הם חושבים שאין להם ברירה ריאלית אחרת. מדובר בטעות קשה, שעשויה לעלות לנהג בזמן יקר, בכסף רב ולעיתים גם ברישיון הנהיגה.`
            },
            {
                type: '',
                text: `לעיתים רבות, נשלחים לנהג מספר דוחות תנועה בדואר פער של מספר ימים אחד מהשני, עבור ביצוע אותה עבירה יום אחר יום באותו כביש. דוגמה נוספת היא מצב שבו שוטר תנועה נותן לנהג מספר דוחות אירוע אחד, שכל אחד מהם כולל עבירה נפרדת. במצב אלה, עבור כל דו"ח תנועה נפרד יצבור אותו נהג נקודות, אשר ביחד יכולות לחייב אותו לעשות קורס נהיגה מונעת או להוביל לשלילת רישיונו.`
            },
            {
                type: '',
                text: `עורך דין תעבורה יכול לגרום לריכוז של הדוחות הללו כך שהנהג יקבל נקודות בודדות, כאילו קיבל דו"ח אחד בלבד!`
            },
            {
                type: '',
                text: `גם במצב של דו"ח תנועה בודד, רשאי כל אדם לבקש להישפט ולהוכיח את חפותו, או להציג את הנסיבות הרלוונטיות ואת הסיבה לביצוע העבירה, ובכך לשנות את סעיף העבירה ולהפחית את כמות הנקודות שהיא נושאת בצידה.`
            },
            {
                type: '',
                text: `לצד האמור, חשוב לציין שתחום התעבורה עוסק גם בעבירות חמורות מאוד כגון הפקרה, גרימת מוות ברשלנות והריגה. מדובר בעבירות שנחקרות על ידי משטרת ישראל באופן מעמיק ויסודי, כמו כל עבירה פלילית אחרת, והטיפול בהן מצריך ידע וניסיון מעמיק בתחום הפלילי "הרגיל", מעבר למומחיות בתחום התעבורה.`
            },
        ],
        image: {
            source: { uri: 'https://www.b144.co.il/__dynamicMedia/4202_0_0.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין פלילי אור פרים`

    },
    civilLitigation: {
        navigation: { route: 'interests', params: { value: 'civilLitigation' } },
        title: `ליטיגציה אזרחית`,
        content: [
            {
                type: '',
                text: `תחום הליטיגציה האזרחית עוסק בניהול הכולל של סכסוכים ותביעות משפטיות, החל משלב ההכנה ואיסוף הראיות, עריכת מכתבי התראה וניהול משא ומתן וכלה בניהול התביעה בפני הערכאה השיפוטית עד למתן פסק דין והגשת ערעורים במידת הצורך.`
            },
            {
                type: '',
                text: `ניהול הליך אזרחי דורש יכולות תכנון מקדים ובניית אסטרטגיה, יסודיות, יצירתיות וחשוב מכל – יכולת להופיע בפני בית המשפט ולהציג באופן משכנע את עמדת הלקוח.`
            },
            {
                type: '',
                text: `למשרדנו ניסיון רב בניהול מגוון סכסוכים אזרחיים, לרבות תביעות חוזיות-כספיות, תביעות לשון הרע, צווי הגנה וצווים למניעת הטרדה מאיימת, תביעות בגין איחור במסירת דירה וליקויי בנייה, תביעות פינוי וסילוק יד, הסגת גבול, צוואות וירושות ועוד.`
            },
        ],
        image: {
            source: { uri: 'https://everydaypower.com/wp-content/uploads/2020/01/Lawyer-Quotes-About-Justice-For-All.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין אור פרים`
    },
    realEstate: {
        navigation: { route: 'interests', params: { value: 'realEstate' } },
        title: `דיני מקרקעין`,
        content: [
            {
                type: '',
                text: `תחום המקרקעין הוא מהתחומים הרחבים והמורכבים ביותר במערכת המשפט, ויש לו נגיעה ונקודות ממשק עם כמעט כל תחום משפטי אחר, לרבות דיני נישואין וגירושין, דיני ירושה, דיני חוזים, דיני תאגידים, דיני מיסים, משפט מנהלי, משפט פלילי ועוד.`
            },
            {
                type: '',
                text: `העיסוק בתחום המקרקעין דורש מקצועיות, יסודיות ויכולת עבודה מול גורמים מסחריים ובירוקרטיים כגון רשות המסים, עיריות וועדות לתכנון ובניה, רשם המקרקעין, רשות מקרקעי ישראל, בנקים, חברות בנייה ויזמות ועוד.`
            },
            {
                type: 'list',
                text: `משרדנו מעניק שירות משפטי במספר תתי-תחומים בדיני המקרקעין:`,
                items: [
                    `רכישת ומכירת דירות.`,
                    `תביעות נגד קבלנים בגין ליקויי בנייה, איחור במסירת דירה וכיו"ב.`,
                    `סכסוכים כספיים על רקע הסכמי מכר.`,
                    `סכסוכים אזרחיים בין שכנים.`,
                    `תביעות הסגת גבול, פינוי וסילוק יד.`,
                    `ייעוץ וייצוג בהליכים פליליים במקרקעין - עבירות בניה ושימוש ללא היתר, אי ציות לצו הריסה וכדומה.`,
                    `ייעוץ וייצוג בהליכים מנהליים במקרקעין – צווי הריסה, צווי הפסקת עבודה, בטיחות בעבודה וכדומה.`,
                ]
            },
        ],
        image: {
            source: { uri: 'https://hopkinsfirm.com/wp-content/uploads/2020/02/qtq80-4kP9Yb-scaled-1-1536x1024.jpeg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין אור פרים`
    },
}

const services = {
    criminal: {
        navigation: { route: 'office', params: { value: 'criminal' } },
        title: `עורך דין פלילי`,
        content: [
            {
                type: '',
                text: `עו"ד פלילי אור פרים בעל ניסיון מוכח של שנים רבות בניהול הליכים פליליים סבוכים ומורכבים בהצלחה רבה, במגוון סוגי עבירות – עבירות סמים, אלימות, רכוש, נשק, תכנון ובניה, עבירות מין ועוד.`

            },
            {
                type: 'list',
                text: `עו"ד פרים מטפל בכל תיקי המשרד באופן אישי, ומעניק ייעוץ, ליווי וייצוג מלא בהליך הפלילי על כל רבדיו:`,

                items: [
                    `ייעוץ לפני ובמהלך החקירה`,
                    `ייצוג בהליכי מעצר`,
                    `שימוע לפני הגשת כתבי אישום`,
                    `בקשה לביטול או עיכוב כתב אישום`,
                    `כריתת הסדרים מותנים והסדרי טיעון`,
                    `ניהול משפט (הוכחות)`,
                    `טיפול בערעורים`,
                    `מחיקת רישום פלילי`,
                    `שינוי עילת סגירת תיק פלילי`,
                    `ייצוג בוועדה לעיון בעונש`,
                    `עתירות אסירים`,
                    `בקשות חנינה`,
                ]

            },
            {
                type: 'underline',
                text: `עו"ד פלילי בחיפה ובצפון`

            },
            {
                type: '',
                text: `לשופטים שונים יש דעות ותפיסות עולם שונות ביחס לחומרת עבירות, להתנהלות של המשטרה בשלבי החקירה ובמעצר, ליכולת של אדם להשתקם ועוד. בנוסף, קיימים הבדלים מהותיים בענישה בין מחוזות שיפוט שונים - עונש שנחשב "קל" במחוז תל אביב עשוי להיחשב עונש חמור וקשה במחוז הצפון. לכן, בעת בחירת עורך דין פלילי, יש חשיבות רבה מאוד למחוז השיפוט שבו עורך הדין מייצג באופן תדיר.`

            },
            {
                type: 'boldBySign',
                text: `&מחוז חיפה& מורכב מבית המשפט המחוזי בחיפה, ותחתיו בתי משפט השלום בחיפה, בקריות, בעכו ובחדרה. אם נפתח כנגדך הליך פלילי באחד מבתי המשפט הללו, מומלץ לפנות לעורך דין פלילי מחיפה והסביבה.`

            },
            {
                type: 'boldBySign',
                text: `&מחוז צפון& מורכב מבית המשפט המחוזי בנצרת, ותחתיו בתי משפט השלום בנצרת, טבריה, בית-שאן, עפולה, קרית שמונה, צפת, קצרין ומסעדה. אם נפתח כנגדך הליך פלילי באחד מבתי המשפט הללו, מומלץ לפנות לעורך דין פלילי מהצפון והסביבה.`

            },
            {
                type: 'bold',
                text: `לעורך דין פלילי אור פרים ניסיון רב בהופעה בבתי משפט במחוזות חיפה וצפון. משרדנו ממוקם ברחוב הפלי"ם 2 בחיפה (צמוד לבית המשפט), ומעניק שירותי עו"ד פלילי בחיפה ובצפון באופן שוטף.`

            },
        ],
        image: {
            source: {
                uri: 'https://jus-tice.co.il/wp-content/uploads/2019/03/criminal-lawyer.jpg'
            },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין פלילי אור פרים`
    },
    military: {
        navigation: { route: 'office', params: { value: 'military' } },
        title: `עורך דין צבאי`,
        content: [
            {
                type: '',
                text: `עורך דין צבאי אור פרים שירת במשך כ- 6 שנים כתובע פלילי בפרקליטות הצבאית, מחוז צפון וחיל-הים, והשלים את השירות בדרגת סרן. במסגרת תפקידו כתובע, סיפק עו"ד פרים ליווי וייעוץ משפטי שוטף למצ"ח חיפה - בסיס החקירות הגדול באזור הצפון, וניהל מאות תיקים צבאיים-פליליים, לרבות תיקים תקדימיים ותקשורתיים.`
            },
            {
                type: '',
                text: `לעורך דין צבאי אור פרים ניסיון רב והיכרות רבת שנים עם מערכת המשפט הצבאית, גופי החקירה, הפרקליטות ובתי הדין הצבאיים.`
            },
            {
                type: 'list',
                text: `המשרד מעניק שירותי עורך דין צבאי בכל סוגי העבירות הצבאיות והפליליות:`,
                items: [
                    `עריקות והיעדר מן השירות שלא ברשות`,
                    `עבירות סמים`,
                    `הטלת מום, זיוף ימי מחלה (גימלים) והיתחלות`,
                    `עבירות במסמכים צבאיים`,
                    `עבירות רכוש`,
                    `שימוש בלתי חוקי בנשק`,
                    `הוצאת נשק מרשות הצבא`,
                    `עבירות מין ופגיעה בפרטיות`,
                ]
            },
        ],
        image: {
            source: {
                uri: 'https://oriti.co.il/wp-content/uploads/2014/02/Fotolia_45118991_XS-2.jpg'
            },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין צבאי אור פרים`
    },
    traffic: {
        navigation: { route: 'office', params: { value: 'traffic' } },
        title: `עורך דין תעבורה`,
        content: [
            {
                type: '',
                text: `עורך דין פלילי אור פרים מעניק ייעוץ וייצוג משפטי בכל סוגי עבירות התעבורה, החל בעבירות קלות כמו אי-עצירה בתמרור עצור, נהיגה במהירות מופרזת ושימוש בטלפון הנייד וכלה בתאונות דרכים ועבירות חמורות כמו נהיגה תחת השפעה (סמים ואלכוהול), הפקרה, גרם מוות ברשלנות והריגה.`
            },
            {
                type: '',
                text: `בנוסף, המשרד מטפל בביטול פסילת רישיון נהיגה, ייצוג מול רשות הרישוי, ייצוג מול המכון הרפואי לבטיחות בדרכים (המלב"ד) וכיו"ב.`
            },
        ],
        image: {
            source: { uri: 'https://rkellerlaw.com/wp-content/uploads/2020/01/traffic-ticket-lawyer-traffic-accident.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין פלילי אור פרים`

    },
    civilLitigation: {
        navigation: { route: 'office', params: { value: 'civilLitigation' } },
        title: `עורך דין אזרחי`,
        content: [
            {
                type: '',
                text: `משרדנו מטפל במגוון רחב של סכסוכים אזרחיים, לרבות תביעות חוזיות-כספיות, צווי הגנה וצווים למניעת הטרדה מאיימת, תביעות בגין איחור במסירת דירה וליקויי בנייה, תביעות פינוי וסילוק יד, הסגת גבול, צוואות וירושות ועוד.`
            },
            {
                type: '',
                text: `עו"ד פרים שימש במשך שנים כליטיגטור הראשי במשרד עורכי-דין ותיק בחיפה העוסק בתחומי המשפט המסחרי, האזרחי, המקרקעין ותכנון ובניה. בתקופה זו, ניהל עו"ד פרים בהצלחה תביעות בסך עשרות מיליוני שקלים והליכים כנגד הגופים הגדולים והחזקים במשק.`
            },
            {
                type: '',
                text: `לעו"ד אור פרים תואר ראשון ותואר שני במשפטים מאוניברסיטת חיפה וכן תואר שני במנהל עסקים (MBA) מהטכניון, והוא בעל הידע, הניסיון והכלים לטפל בכל סכסוך אזרחי, כספי ומשפטי.`
            },
        ],
        image: {
            source: { uri: 'https://thelawportal.co.il/wp-content/uploads/2021/07/%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%9C%D7%9C%D7%90-%D7%A9%D7%9D-17.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין אור פרים`
    },
    defamation: {
        navigation: { route: 'office', params: { value: 'defamation' } },
        title: `תביעות לשון הרע`,
        content: [
            {
                type: '',
                text: `חוק איסור לשון הרע הוא חוק ייחודי, אשר מאפשר לכל אדם לנהל במקביל תביעה כספית והליך פלילי "פרטי" (קובלנה פלילית) כנגד מי שהוציא את דיבתו.`
            },
            {
                type: 'boldBySign',
                text: `זאת ועוד, החוק מאפשר לנפגע לקבל פיצוי, ללא הוכחת נזק, בסך של עד כ- 71,500 ₪. ואם הוכיח שהנתבע פרסם את לשון הרע במטרה לגרום לו נזק, &זכאי התובע לקבל פיצוי, ללא הוכחת נזק, בסך של עד כ- 143,000 ₪ !&`
            },
            {
                type: '',
                text: `הליכי לשון הרע תפסו תאוצה בשנים האחרונות בעקבות התפתחות האינטרנט והרשתות החברתיות, ובתי המשפט החלו להחמיר את הענישה ואת גובה הפיצויים שהם פוסקים בגין פרסום לשון הרע, בפרט ברשתות חברתיות כמו פייסבוק, whatsapp, אינסטגרם וכדומה.`
            },
            {
                type: '',
                text: `עורך דין אור פרים בעל ניסיון רב בניהול הליכי לשון הרע ומומחיות הן בתחום הפלילי והן בתחום האזרחי. במרוצת השנים, ייצג עו"ד פרים בתיקי לשון הרע בין היתר קומיקאי מפורסם מאזור הצפון, ידוענים יוצאי "האח הגדול", אנשי ציבור ואנשי תקשורת מאזור חיפה והסביבה.`
            },
        ],
        image: {
            source: { uri: 'https://www.shlomiweinberg.co.il/wp-content/uploads/2019/06/diba1-1030x625.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין אור פרים`
    },
    victimsCrime: {
        navigation: { route: 'office', params: { value: 'victimsCrime' } },
        title: `ליווי וייצוג נפגעי עבירה`,
        content: [
            {
                type: '',
                text: `חוק זכויות נפגעי עבירה מקנה זכויות במסגרת ההליך פלילי לכל מי שנפגע באופן ישיר מעבירה פלילית, וכן לבני משפחה של קורבן עבירת המתה, אשר הולכות ומתעצמות בהתאם לחומרת העבירה.`
            },
            {
                type: '',
                text: `מדובר בזכויות לא מבוטלות, החל מקבלת מידע בסיסי על התקדמות ההליך והגנה מהחשוד או הנאשם, דרך זכויות לשמור על פרטיות הנפגע ולמסור עדות "בדלתיים סגורות", ועד לזכות להביע עמדה, זכות להגיש השגות על החלטות של המדינה בעניין הסדרי טיעון עם נאשמים, זכות להציג עמדה במסגרת טיעונים לעונש של נאשם שהורשע בביצוע העבירה ועוד.`
            },
            {
                type: '',
                text: `בנוסף לזכויות שמקנה החוק, זכאי נפגע עבירה לנקוט בצעדים נוספים מכוח חוקים ודינים אחרים, כגון הוצאת צו למניעת הטרדה מאיימת, הגשת עתירה כנגד החלטות של רשויות החקירה והתביעה ועוד.`
            },
            {
                type: '',
                text: `חשוב לציין כי פעמים רבות, הפרקליט שמנהל את התיק הפלילי מטעם המדינה מציג בפני נפגעי העבירה את זכויותיהם ומאפשר להם לממש אותן באופן הוגן וראוי.`
            },
            {
                type: '',
                text: `יחד עם זאת, צריך לזכור שהאינטרס של הפרקליטות אינו זהה לאינטרס של נפגע העבירה, לדוגמה כאשר הפרקליטות סבורה שעדיף להגיש כתב אישום בעבירה קלה יותר כדי להגדיל את סיכויי ההרשעה או שעדיף להגיע להסדר טיעון מקל עם העבריין כדי לחסוך בזמן שיפוטי של ניהול ההליך.`
            },
            {
                type: '',
                text: `בנוסף, מאחר שפרקליטים לא מייצגים את נפגע העבירה אלא את המדינה, לעיתים רבות אין להם את הזמן או היכולת להסביר את כל שלבי ההליך הפלילי ולהכין את נפגע העבירה לכל אחד מהם, ופעמים רבות הם מנועים מלשאול את נפגע העבירה שאלות או להתייחס לאירוע הפגיעה עצמו כי הדבר עשוי לעכב או לפגוע ביכולתם לנהל את ההליך הפלילי כנגד הנאשם.`
            },
            {
                type: '',
                text: `עורך דין שמייצג נפגע עבירה דואג אך ורק לאינטרסים של נפגע העבירה, מלווה אותו לכל אורך ההליך הפלילי, מסביר כנדרש את כל שלביו ומכין אותו לקראת כל אחד מהם ומסייע לנפגע לממש את כל אחד מזכויותיו באופן שמיטיב עמו. בנוסף, עורך הדין שמייצג את נפגע העבירה יכול לפעול לפסיקת פיצויים במסגרת ההליך הפלילי, ולהגדלת הפיצויים שנפסקים לנפגע העבירה במסגרת ערעורים.`
            },
            {
                type: '',
                text: `משרדנו מעניק ליווי וייצוג משפטי מלא לנפגעי עבירה לאורך כל שלבי ההליך הפלילי, לרבות ליווי וסיוע בהגשת התלונה במשטרה, מתן ייעוץ בשלבי החקירה וההליך הפלילי, קיום הקשר עם גורמי התביעה ומימוש הזכויות מול גורמי התביעה, גורמי האכיפה ומול בית המשפט.`
            },
        ],
        image: {
            source: { uri: 'https://veredshai.co.il/wp-content/uploads/2021/07/%D7%A4%D7%A9%D7%A2-1024x654.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין אור פרים`
    },
    realEstate: {
        navigation: { route: 'office', params: { value: 'realEstate' } },
        title: `יצוג ברכישת ומכירת דירה`,
        content: [
            {
                type: '',
                text: `רכישת דירה היא לרוב העסקה החשובה ביותר בחייהם של בני זוג, בה הם משקיעים את מרב כספם ולעיתים רבות גם נוטלים הלוואה לטווח ארוך (משכנתא). לכן, בחירת אנשי המקצוע הנכונים שילוו את הליך הרכישה או המכירה באופן אישי, מקצועי ויסודי, עשוי לחסוך עוגמת נפש רבה ונזקים בשווי מאות אלפי שקלים ויותר.`
            },
            {
                type: '',
                text: `לעורך דין אור פרים ניסיון שלא יסולא בפז בטיפול וייצוג בעסקאות מכר, אותו צבר במשך שנים רבות בעת שעבד במשרד עורכי דין ותיק המתמחה בתחום המקרקעין ותכנון ובנייה ומייצג את אחד מחברות הבניה הגדולות והוותיקות באזור הצפון.`
            },
            {
                type: '',
                text: `משרדנו מעניק שירות משפטי מקיף בעסקאות רכישה ומכירה של דירות, החל  מייעוץ לפני ובעת שלב המשא ומתן, ניסוח הסכמי המכר, ליווי בהליכי נטילת משכנתא, טיפול בהעברת ורישום הזכויות בלשכת הרישום (הטאבו) ודיווח לרשויות המיסוי בהתאם לדין.`
            },
        ],
        image: {
            source: { uri: 'https://farbman-law.com/wp-content/uploads/2020/09/2-1.jpg' },
            style: { width: 500, height: 400, }
        },
        contactUsTitle: `לקביעת פגישה עם עורך דין אור פרים`
    },
}

const about = {
    about: {
        content: [
            {
                type: '',
                text: `אור פרים, משרד עורכי דין מתמחה בתחום המשפט הפלילי על כל רבדיו, וחרת על דגלו להעניק שירות אישי, יסודי, מקצועי ובלתי מתפשר לכל לקוחותיו.`
            },
            {
                type: '',
                text: `המשרד מספק ייעוץ משפטי וייצוג בכל סוגי העבירות הפליליות ובפני כל הערכאות השיפוטיות, לרבות בית משפט השלום, בית משפט לעניינים מקומיים, בית דין צבאי, בית משפט מחוזי ובית המשפט העליון.`
            },
            {
                type: '',
                text: `המשרד מלווה את לקוחותיו בכל שלבי ההליך הפלילי, החל מייעוץ לפני ובמהלך החקירה, ייצוג בהליכי מעצר, שימוע לפני הגשת כתבי אישום, בקשות לביטול הליכים, הסדרים מותנים והסדרי טיעון, ניהול הוכחות וחקירת עדים, טיעונים לעונש וערעורים. כמו כן, עוסק המשרד גם בהליכים שלאחר סיום התיק הפלילי, כגון ייצוג בועדות לעיון בעונש, עתירות אסירים, בקשות חנינה וכדומה.`
            },
            {
                type: 'underline',
                text: `עורך הדין אור פרים`
            },
            {
                type: 'backgroundimage',
                image: { source: require('./assets/image_2.jpg'), style: { height: '100%', width: '100%', paddingHorizontal: 25, opacity: 0.8 } },
                content: [
                    `עורך דין אור פרים בעל ניסיון של מעל עשור בניהול תיקים פליליים, מסחריים ואזרחיים סבוכים ומורכבים בפני ערכאות שיפוטיות מגוונות.`,
                    `לעורך דין פרים תואר ראשון ותואר שני במשפטים מאוניברסיטת חיפה, עם התמחות בתורת השפיטה וניהול ההליך הפלילי. בנוסף, השלים עו"ד פרים לימודי תואר שני נוסף במנהל עסקים בטכניון.`,
                    `עם השלמת לימודי התואר הראשון במשפטים בשנת 2011, התגייס עו"ד פרים לפרקליטות הצבאית, שם שירת במשך 6 שנים כתובע פלילי בפרקליטות צפון וחיל-הים, תפקיד אותו סיים בדרגת סרן. במסגרת עבודתו כתובע, ניהל עו"ד פרים מאות תיקים פליליים, לרבות תיקי סמים, אלימות, שוד, נשק ותיקי עבירות מין כגון אינוס, מעשים מגונים, הטרדה מינית, פגיעה בפרטיות ועוד.`,
                    `לאחר שחרורו מהפרקליטות הצבאית, שימש עו"ד פרים במשך מעל 4 שנים כליטיגטור הראשי במשרד עורכי-דין ותיק בחיפה העוסק בתחומי המשפט המסחרי, האזרחי, המקרקעין ותכנון ובניה. בתקופה זו, ניהל עו"ד פרים בהצלחה תביעות בסך עשרות מיליוני שקלים והליכים כנגד הגופים הגדולים והחזקים במשק.`,
                    `הניסיון העשיר והידע הרחב שצבר עו"ד פרים לאורך השנים מאפשרים לו לבחון כל תיק מנקודות מבט ייחודיות ולהשיג את התוצאות הטובות ביותר עבור לקוחותיו.`,
                ]
            },
        ],
    }
}

export { interests, services, about }