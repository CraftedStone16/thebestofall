const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NTY5MzIwNzM0NzgyOTE0NTkx.XLu7UQ.UgM4ZpNVg0jNNJSG5mdZpz1cPPk');

var prefix = "$"

client.on('ready', () => {
  console.log('Ready!')
});

client.on('message', async message => {
  if (message.author.id === '571143737355534336') return;
  if (message.channel.id === '568902221538787343') return;
  if (message.channel.id === '568902288551182366') return;
  if (message.channel.id === '568902547599786004') return;
  if (message.channel.id === '568922127382741034') return;
  if (message.channel.id === '568895593443885058') return;
  if (message.channel.id === '568895343253520521') return;
  if (message.channel.id === '569318723174006784') return;
  if (message.channel.id === '568894579873415183') return;
  if (message.channel.id === '571064835639476251') return;
  if (message.channel.id === '568894579873415183') return;
  if (message.channel.type === 'dm') return;
  message.delete()
  let verify = message.guild.roles.find(role => role.name === 'Verified')
  let forward = message.guild.roles.find(role => role.name === 'Forwards Candidate')
  let backward = message.guild.roles.find(role => role.name === 'Backwards Candidate')
  let forwards = message.guild.roles.find(role => role.name === 'Forwards')
  let backwards = message.guild.roles.find(role => role.name === 'Backwards')
  let rightc = message.guild.roles.find(role => role.name === 'Right Candidate')
  let leftc = message.guild.roles.find(role => role.name === 'Left Candidate')
  let right = message.guild.roles.find(role => role.name === 'Right')
  let left = message.guild.roles.find(role => role.name === 'Left')
  let pass5 = message.guild.roles.find(role => role.name === 'pass5')
  let pass15 = message.guild.roles.find(role => role.name === 'pass15')
  let pass25 = message.guild.roles.find(role => role.name === 'pass25')
  let pass35 = message.guild.roles.find(role => role.name === 'pass35')
  let shaft1 = message.guild.roles.find(role => role.name === 'Shaft 1')
  let shaft2 = message.guild.roles.find(role => role.name === 'Shaft 2')
  let shaft3 = message.guild.roles.find(role => role.name === 'Shaft 3')
  let shaft4 = message.guild.roles.find(role => role.name === 'Shaft 4')
  let shaft5 = message.guild.roles.find(role => role.name === 'Shaft 5')
  let shaft6 = message.guild.roles.find(role => role.name === 'Shaft 6')
  let shaft7 = message.guild.roles.find(role => role.name === 'Shaft 7')
  let shaft8 = message.guild.roles.find(role => role.name === 'Shaft 8')
  let shaft9 = message.guild.roles.find(role => role.name === 'Shaft 9')
  let shaft10 = message.guild.roles.find(role => role.name === 'Shaft 10')
  let passshaft10 = message.guild.roles.find(role => role.name === 'Shaft 10+')
  let shaft11 = message.guild.roles.find(role => role.name === 'Shaft 11')
  let shaft12 = message.guild.roles.find(role => role.name === 'Shaft 12')
  let shaft13 = message.guild.roles.find(role => role.name === 'Shaft 13')
  let shaft14 = message.guild.roles.find(role => role.name === 'Shaft 14')
  let shaft15 = message.guild.roles.find(role => role.name === 'Shaft 15')
  let shaft16 = message.guild.roles.find(role => role.name === 'Shaft 16')
  let shaft17 = message.guild.roles.find(role => role.name === 'Shaft 17')
  let shaft18 = message.guild.roles.find(role => role.name === 'Shaft 18')
  let shaft19 = message.guild.roles.find(role => role.name === 'Shaft 19')
  let shaft20 = message.guild.roles.find(role => role.name === 'Shaft 20')
  let passshaft20 = message.guild.roles.find(role => role.name === 'Shaft 20+')
  let shaft21 = message.guild.roles.find(role => role.name === 'Shaft 21')
  let shaft22 = message.guild.roles.find(role => role.name === 'Shaft 22')
  let shaft23 = message.guild.roles.find(role => role.name === 'Shaft 23')
  let shaft24 = message.guild.roles.find(role => role.name === 'Shaft 24')
  let shaft25 = message.guild.roles.find(role => role.name === 'Shaft 25')
  let shaft26 = message.guild.roles.find(role => role.name === 'Shaft 26')
  let shaft27 = message.guild.roles.find(role => role.name === 'Shaft 27')
  let shaft28 = message.guild.roles.find(role => role.name === 'Shaft 28')
  let shaft29 = message.guild.roles.find(role => role.name === 'Shaft 29')
  let shaft30 = message.guild.roles.find(role => role.name === 'Shaft 30')
  let passshaft30 = message.guild.roles.find(role => role.name === 'Shaft 30+')
  let shaft31 = message.guild.roles.find(role => role.name === 'Shaft 31')
  let shaft32 = message.guild.roles.find(role => role.name === 'Shaft 32')
  let shaft33 = message.guild.roles.find(role => role.name === 'Shaft 33')
  let shaft34 = message.guild.roles.find(role => role.name === 'Shaft 34')
  let shaft35 = message.guild.roles.find(role => role.name === 'Shaft 35')
  let shaft36 = message.guild.roles.find(role => role.name === 'Shaft 36')
  let shaft37 = message.guild.roles.find(role => role.name === 'Shaft 37')
  let shaft38 = message.guild.roles.find(role => role.name === 'Shaft 38')
  let shaft39 = message.guild.roles.find(role => role.name === 'Shaft 39')
  let shaft40 = message.guild.roles.find(role => role.name === 'Shaft 40')
  let passshaft40 = message.guild.roles.find(role => role.name === 'Shaft 40+')
  let shaft41 = message.guild.roles.find(role => role.name === 'Shaft 41')
  let shaft42 = message.guild.roles.find(role => role.name === 'Shaft 42')
  let shaft43 = message.guild.roles.find(role => role.name === 'Shaft 43')
  let shaft44 = message.guild.roles.find(role => role.name === 'Shaft 44')
  let shaft45 = message.guild.roles.find(role => role.name === 'Shaft 45')
  let shaft46 = message.guild.roles.find(role => role.name === 'Shaft 46')
  let shaft47 = message.guild.roles.find(role => role.name === 'Shaft 47')
  let shaft48 = message.guild.roles.find(role => role.name === 'Shaft 48')
  let shaft49 = message.guild.roles.find(role => role.name === 'Shaft 49')
  let shaft50 = message.guild.roles.find(role => role.name === 'Shaft 50')
  let top = message.guild.roles.find(role => role.name === 'Reached the Top')

  if (message.content === 'agree') {
    message.member.addRole(verify)
    message.member.addRole(shaft1)
    message.member.send('Thanks for verifying, we hope enjoy the server, if you want to invite other friends then you are welcome to!')
  }
 // Shaft 1
  if (message.content === (prefix + '68')) {
    if (message.channel.id !== '568922332077228045') return;
    message.member.removeRole(shaft1)
    message.member.addRole(shaft2)
  }
 // Shaft 2
  if (message.content === (prefix + 'macadamia')) {
    if (message.channel.id !== '568922379368005645') return;
    message.member.removeRole(shaft2)
    message.member.addRole(shaft3)
  }
 // Shaft 3
  if (message.content === (prefix + '418')) {
    if (message.channel.id !== '568922468035592222') return;
    message.member.removeRole(shaft3)
    message.member.addRole(shaft4)
  }
 // Shaft 4
  if (message.content === (prefix + 'china')) {
    if (message.channel.id !== '568922526873550898') return;
    message.member.removeRole(shaft4)
    message.member.addRole(shaft5)
  }
 // Shaft 5
  if (message.content === (prefix + 'pass5')) {
    if (message.channel.id !== '569025877023784973') return;
    if (message.member.roles.has(pass5.id)) {
      message.member.removeRole(shaft5)
      message.member.addRole(shaft6)
    } else return message.author.send('Failed to advance you to the next shaft, make sure you have enough invites!');
  }
 // Shaft 6
  if (message.content === (prefix + 'ton')) {
    if (message.channel.id !== '569025933466402836') return;
    message.member.removeRole(shaft6)
    message.member.addRole(shaft7)
  }
 // Shaft 7
  if (message.content === (prefix + 'snowwhiteandthesevendwarfs')) {
    if (message.channel.id !== '569026032858955777') return;
    message.member.removeRole(shaft7)
    message.member.addRole(shaft8)
  }
 // Shaft 8
  if (message.content === (prefix + 'hotincleveland')) {
    if (message.channel.id !== '569026173892427836') return;
    message.member.removeRole(shaft8)
    message.member.addRole(shaft9)
  }
 // Shaft 9
  if (message.content === (prefix + 'silence')) {
    if (message.channel.id !== '569026293757116426') return;
    message.member.removeRole(shaft9)
    message.member.addRole(shaft10)
  }
 // Shaft 10 a
  if (message.content === (prefix + 'right')) {
    if (message.channel.id !== '569026340737515535') return;
    message.member.removeRole(shaft10)
    message.member.addRole(rightc)
  }
 // Shaft 10 b
  if (message.content === (prefix + 'left')) {
    if (message.channel.id !== '569026340737515535') return;
    message.member.removeRole(shaft10)
    message.member.addRole(leftc)
  }
 // Right
  if (message.content === (prefix + 'indiana')) {
    if (message.channel.id !== '569026456852627478') return;
    message.member.removeRole(rightc)
    message.member.addRole(shaft11)
    message.member.addRole(right)
    message.member.addRole(passshaft10)
  }
 // Left
  if (message.content === (prefix + 'nevada')) {
    if (message.channel.id !== '569026420442136596') return;
    message.member.removeRole(leftc)
    message.member.addRole(shaft11)
    message.member.addRole(left)
    message.member.addRole(passshaft10)
  }
 // Shaft 11
  if (message.content === (prefix + 'ticket-creation')) {
    if (message.channel.id !== '569027053379387393') return;
    message.member.removeRole(shaft11)
    message.member.addRole(shaft12)
  }
 // Shaft 12
  if (message.content === (prefix + 'floaty')) {
    if (message.channel.id !== '569027107930505217') return;
    message.member.removeRole(shaft12)
    message.member.addRole(shaft13)
  }
 // Shaft 13
  if (message.content === (prefix + 'forzahorizon4')) {
    if (message.channel.id !== '569027214142603264') return;
    message.member.removeRole(shaft13)
    message.member.addRole(shaft14)
  }
 // Shaft 14
  if (message.content === (prefix + 'ceah')) {
    if (message.channel.id !== '569027265820622848') return;
    message.member.removeRole(shaft14)
    message.member.addRole(shaft15)
  }
 // Shaft 15
 if (message.content === (prefix + 'pass15')) {
   if (message.channel.id !== '569027311966355473') return;
   if (message.member.roles.has(pass15.id)) {
     message.member.removeRole(shaft15)
     message.member.addRole(shaft16)
   } else return message.author.send('Failed to advance you to the next shaft, make sure you have enough invites!');
 }
 // Shaft 16
  if (message.content === (prefix + 'feburary92019')) {
    if (message.channel.id !== '569027359462916117') return;
    message.member.removeRole(shaft16)
    message.member.addRole(shaft17)
  }
 // Shaft 17
  if (message.content === (prefix + 'fivesixninezerotwosevenfouronenineonesixzerooneeighttwoeightzerofour')) {
    if (message.channel.id !== '569027419160182804') return;
    message.member.removeRole(shaft17)
    message.member.addRole(shaft18)
  }
 // Shaft 18
  if (message.content === (prefix + 'ariver')) {
    if (message.channel.id !== '569027472918839307') return;
    message.member.removeRole(shaft18)
    message.member.addRole(shaft19)
  }
 // Shaft 19
  if (message.content === (prefix + 'plutonium')) {
    if (message.channel.id !== '569027571694567443') return;
    message.member.removeRole(shaft19)
    message.member.addRole(shaft20)
  }
 // Shaft 20 a
 if (message.content === (prefix + 'forwards')) {
   if (message.channel.id !== '569027617299365891') return;
   message.member.removeRole(shaft20)
   message.member.addRole(forward)
 }
 // Shaft 20 b
 if (message.content === (prefix + 'backwards')) {
   if (message.channel.id !== '569027617299365891') return;
   message.member.removeRole(shaft20)
   message.member.addRole(backward)
 }
 // Forwards
 if (message.content === (prefix + '23')) {
   if (message.channel.id !== '569628779735941123') return;
   message.member.removeRole(forward)
   message.member.addRole(shaft21)
   message.member.addRole(forwards)
   message.member.addRole(passshaft20)
 }
 // Backwards
 if (message.content === (prefix + '21')) {
   if (message.channel.id !== '569628835461464065') return;
   message.member.removeRole(backward)
   message.member.addRole(shaft21)
   message.member.addRole(backwards)
   message.member.addRole(passshaft20)
 }
 // Shaft 21
  if (message.content === (prefix + 'thegoldengirls')) {
    if (message.channel.id !== '569629001216294912') return;
    message.member.removeRole(shaft21)
    message.member.addRole(shaft22)
  }
 // Shaft 22
  if (message.content === (prefix + '22')) {
    if (message.channel.id !== '569629059395485697') return;
    message.member.removeRole(shaft22)
    message.member.addRole(shaft23)
  }
 // Shaft 23
  if (message.content === (prefix + '13colonies')) {
    if (message.channel.id !== '569643483804074015') return;
    message.member.removeRole(shaft23)
    message.member.addRole(shaft24)
  }
 // Shaft 24
  if (message.content === (prefix + 'subway')) {
    if (message.channel.id !== '569643555681730620') return;
    message.member.removeRole(shaft24)
    message.member.addRole(shaft25)
  }
 // Shaft 25
 if (message.content === (prefix + 'pass25')) {
   if (message.channel.id !== '569643918153482292') return;
   if (message.member.roles.has(pass25.id)) {
     message.member.removeRole(shaft25)
     message.member.addRole(shaft26)
   } else return message.author.send('Failed to advance you to the next shaft, make sure you have enough invites!');
 }
 // Shaft 26
  if (message.content === (prefix + '{answer}')) {
    if (message.channel.id !== '569644711837696000') return;
    message.member.removeRole(shaft26)
    message.member.addRole(shaft27)
  }
 // Shaft 27
  if (message.content === (prefix + 'starspangledbanner')) {
    if (message.channel.id !== '569644815088877587') return;
    message.member.removeRole(shaft27)
    message.member.addRole(shaft28)
  }
 // Shaft 28
  if (message.content === (prefix + 'adspotlight')) {
    if (message.channel.id !== '569644899994173450') return;
    message.member.removeRole(shaft28)
    message.member.addRole(shaft29)
  }
 // Shaft 29
  if (message.content === (prefix + 'donkey')) {
    if (message.channel.id !== '569644996945248256') return;
    message.member.removeRole(shaft29)
    message.member.addRole(shaft30)
    message.member.addRole(passshaft30)
  }
 // Shaft 30
  if (message.content === (prefix + '=21')) {
    if (message.channel.id !== '569645071151005706') return;
    message.member.removeRole(shaft30)
    message.member.addRole(shaft31)
    // message.member.addRole(passshaft30)
  }
 // Shaft 31
  if (message.content === (prefix + 'swiftor')) {
    if (message.channel.id !== '569648744870445076') return;
    message.member.removeRole(shaft31)
    message.member.addRole(shaft32)
  }
 // Shaft 32
  if (message.content === (prefix + 'minecraft')) {
    if (message.channel.id !== '569648971094556718') return;
    message.member.removeRole(shaft32)
    message.member.addRole(shaft33)
  }
 // Shaft 33
  if (message.content === (prefix + 'everyoneping')) {
    if (message.channel.id !== '569649157829165066') return;
    message.member.removeRole(shaft33)
    message.member.addRole(shaft34)
  }
 // Shaft 34
  if (message.content === (prefix + 'anationalanthem')) {
    if (message.channel.id !== '569953706640932929') return;
    message.member.removeRole(shaft34)
    message.member.addRole(shaft35)
  }
 // Shaft 35
 if (message.content === (prefix + 'pass35')) {
   if (message.channel.id !== '569953785347178506') return;
   if (message.member.roles.has(pass35.id)) {
     message.member.removeRole(shaft35)
     message.member.addRole(shaft36)
   } else return message.author.send('Failed to advance you to the next shaft, make sure you have enough invites!');
 }
 // Shaft 36
  if (message.content === (prefix + 'unitedkingdom')) {
    if (message.channel.id !== '569955187851001877') return;
    message.member.removeRole(shaft36)
    message.member.addRole(shaft37)
  }
 // Shaft 37
  if (message.content === (prefix + 'fortnitebattleroyale')) {
    if (message.channel.id !== '569955233577304075') return;
    message.member.removeRole(shaft37)
    message.member.addRole(shaft38)
  }
 // Shaft 38
  if (message.content === (prefix + '399')) {
    if (message.channel.id !== '569955394663743499') return;
    message.member.removeRole(shaft38)
    message.member.addRole(shaft39)
  }
 // Shaft 39
  if (message.content === (prefix + 'may2019')) {
    if (message.channel.id !== '569955459352625172') return;
    message.member.removeRole(shaft39)
    message.member.addRole(shaft40)
  }
 // Shaft 40
  if (message.content === (prefix + 'triassic')) {
    if (message.channel.id !== '569957082015596595') return;
    message.member.removeRole(shaft40)
    message.member.addRole(shaft41)
    message.member.addRole(passshaft40)
  }
 // Shaft 41
  if (message.content === (prefix + 'georgewbush')) {
    if (message.channel.id !== '569957137632198666') return;
    message.member.removeRole(shaft41)
    message.member.addRole(shaft42)
  }
 // Shaft 42
  if (message.content === (prefix + 'lamborghini')) {
    if (message.channel.id !== '569957193630089256') return;
    message.member.removeRole(shaft42)
    message.member.addRole(shaft43)
  }
 // Shaft 43
  if (message.content === (prefix + 'fiat')) {
    if (message.channel.id !== '569957387671306241') return;
    message.member.removeRole(shaft43)
    message.member.addRole(shaft44)
  }
 // Shaft 44
  if (message.content === (prefix + 'norbit')) {
    if (message.channel.id !== '569957433724633090') return;
    message.member.removeRole(shaft44)
    message.member.addRole(shaft45)
  }
 // Shaft 45
  if (message.content === (prefix + 'backward')) {
    if (message.channel.id !== '569957466725679129') return;
    message.member.removeRole(shaft45)
    message.member.addRole(shaft46)
  }
 // Shaft 46
  if (message.content === (prefix + 'fisger')) {
    if (message.channel.id !== '569957872360882176') return;
    message.member.removeRole(shaft46)
    message.member.addRole(shaft47)
  }
 // Shaft 47
  if (message.content === (prefix + 'dragonadvertisingmoderation')) {
    if (message.channel.id !== '569957927490945034') return;
    message.member.removeRole(shaft47)
    message.member.addRole(shaft48)
  }
 // Shaft 48
  if (message.content === (prefix + 'gladysknight')) {
    if (message.channel.id !== '569958924804030465') return;
    message.member.removeRole(shaft48)
    message.member.addRole(shaft49)
  }
 // Shaft 49
  if (message.content === (prefix + 'elevator')) {
    if (message.channel.id !== '569958995792625674') return;
    message.member.removeRole(shaft49)
    message.member.addRole(shaft50)
  }
 // Shaft 50
  if (message.content === (prefix + 'yes')) {
    if (message.channel.id !== '569959067079147530') return;
    message.member.removeRole(shaft49)
    message.member.removeRole(shaft50)
    message.member.addRole(top)
  }
});
