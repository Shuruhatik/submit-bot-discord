import Database from "st.db";
import {Client,MessageEmbed} from 'discord.js';
import DiscordModal from 'discord-modal';
const questions_db = new Database({path:"./util/questions.yml"})
const users_applys_db = new Database({path:"./util/users_applys.yml"})

export default async function(client,interaction,config) {
  if(interaction.isButton()){
    if(interaction.customId.startsWith('apply_')){
       if(await questions_db.has({key:interaction.customId}) != true) return await interaction.reply({content:`:x: هذا التقديم لم يعد متاح`,ephemeral:true})
       if(await users_applys_db.has({key:`apply_${interaction.user.id}_${interaction.customId}`}) == true) return await interaction.reply({content:`:x: لقد قومت بالتقديم بالفعل انت!`,ephemeral:true})
       let data = await questions_db.get({key:interaction.customId})
       let components = []
       data.questions.forEach((question,i) =>{
         components.push(new DiscordModal.TextInputField()
          .setLabel(question.label)
          .setStyle(question.type)
          .setPlaceholder("أجب عن السؤال هنا")
          .setCustomId((i)+"_"+(Math.random() + 1).toString(36).substring(7))
          .setMax(2000)
          .setRequired(true))
       })
       let textinput = new DiscordModal.TextInput()
         .setCustomId("opentextinput-"+interaction.customId)
         .setTitle(data.name)
         .addComponents(...components)
      client.TextInputs.open(interaction, textinput)
      await users_applys_db.set({
        key:`time_${interaction.user.id}`,
        value:new Date()
      })
    }
  }
  if(interaction.isCommand()){
     let args = [];
     for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        if (option.options) {
          option.options.forEach((x) => {
            if (x.value) args.push(x.value);
          });
        }
      } else if (option.value) args.push(option.value);
    }
     if(interaction.commandName == "apply"){
       if(config.owernid != interaction.user.id) return  await interaction.reply({content:`:x: ليس لديك صلاحيات القيام بهذا الامر`,ephemeral:true}) 
        if(args[0] == "delete_all"){
          await questions_db.overwrite("")
          await users_applys_db.overwrite("")
          await interaction.reply({
            content:`✅ تم التنفيذ تم إلغاء جميع التقديمات وحذف جميع البيانات الخاص بيهم بنجاح`,
            ephemeral:true
          }) 
        }
        if(args[0] == "set"){
          let channellogId = args[1]
          let name = args[2]
          let button_name = args[3]
          let message_content = args[4]
          let button_color = +args[5]
          let questions = []
          for (let i = 1; i < 6; i++) {
            questions.push({
              label:interaction.options.getString("question_name_"+i),
              type:interaction.options.getString("question_type_"+i)
            })
          }
          let custom_id = 'apply_'+(Math.random() + 1).toString(36).substring(7)
          await questions_db.set({
            key:custom_id,value:{questions,name,channellogId}
          })
          await interaction.reply({
            content:`✅ تم التنفيذ`,
            ephemeral:true
          }) 
          await interaction.channel.send({
            content:message_content.replaceAll("<br>","\n"),
            files:interaction.options.getString("image_url") ? [interaction.options.getString("image_url")] : [],
            components: [{
             type: 1, components: [
                { 
                type: 2, style: button_color ? button_color : 2,
                 custom_id,
                 label: button_name
               }
           ]}
         ]
      })
      }
     }
   }
}