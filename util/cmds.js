export default [{
    name: "apply",
    description: "أوامر مسؤولين التقديم",
    options: [
      {
        name: "delete_all",
        description: "حذف كل التقديمات  من الداتا وحذف كل الداتا",
        type: 'SUB_COMMAND'
      }, {
        name: "set",
        description: "أنشاء تقديم جديد",
        type: 'SUB_COMMAND',
        options: [
          {
            name: `channel`,
            channelTypes:['GUILD_TEXT'],
            description: `حدد الروم اللوق`,
            required: true,
            type: "CHANNEL",
          },
          {
            name: `name`,
            description: `أسم التقديم`,
            required: true,
            type: "STRING",
          },
          {
            name: `button_name`,
            description: `أسم زرار التقديم`,
            required: true,
            type: "STRING",
          },
          {
            name: `message_content`,
            description: `محتوي رسالة للي بيكون فيه تقديم`,
            required: true,
            type: "STRING",
          },
          {
            name: `button_color`,
            description: `نوع اجابة السؤال الاول`,
            required: true,
            choices:[
              {
                name:`Blue`,value:"1"
              },
              {
                name:`Green`,value:"3"
              },
              {
                name:`Gray`,value:"2"
              },
              {
                name:`Red`,value:"4"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_1`,
            description: "السؤال الاول",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_1`,
            description: `نوع اجابة السؤال الاول`,
            required: true,
            choices:[
              {
                name:`أجابة طويلة`,value:"paragraph"
              },
              {
                name:`أجابة قصيرة`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_2`,
            description: "السؤال الثاني",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_2`,
            description: `نوع اجابة السؤال الثاني`,
            required: true,
            choices:[
              {
                name: `أجابة طويلة`,value:"paragraph"
              },
              {
                name:`أجابة قصيرة`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_3`,
            description: "السؤال الثالث",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_3`,
            description: `نوع اجابة السؤال الثالث`,
            required: true,
            choices:[
              {
                name:`أجابة طويلة`,value:"paragraph"
              },
              {
                name:`أجابة قصيرة`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_4`,
            description: "السؤال الرابع",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_4`,
            description: `نوع اجابة السؤال الرابع`,
            required: true,
            choices:[
              {
                name:`أجابة طويلة`,value:"paragraph"
              },
              {
                name:`أجابة قصيرة`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_5`,
            description: "السؤال الخامس",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_5`,
            description: `نوع اجابة السؤال الخامس`,
            required: true,
            choices:[
              {
                name:`أجابة طويلة`,value:"paragraph"
              },
              {
                name:`أجابة قصيرة`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `image_url`,
            description: "في حال كان عندك صورة لتقديم يمكننك وضع رابط الصورة",
            required: false,
            type: "STRING",
          }
        ]
      }]
  },
]
