import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html',
})
export class CommandsPage {

  Commands = [
  {
     commandName: {name:  'Do not be rude in Speech(3:159)'}
  }, 
  {
    commandName: {name:  'Restrain Anger(3:134)'}
  },
  {
    commandName: {name:  'Be Good to Others(4:36)'}
  },
  {
    commandName: {name:  'Do not be arrogant(7:13)'}
  },
  {
    commandName: {name:  'Forgive others for their mistakes(7:199)'}
  },
  {
    commandName: {name:  'Speak to People Mildly(20:44)'}
  },
  {
    commandName: {name:  'Lower your voice(31:19)'}
  },
  {
    commandName: {name:  'Do not ridicule others(49:11)'}
  },
  {
    commandName: {name:  'Be Dutiful To Parents(17:23)'}
  },
  {
    commandName: {name:  'Do not say a word of Disrespect to Parents(17:23)'}
  },
  {
    commandName: {name:  'Do not enter parents private Room Without asking permission(24:58)'}
  },
  {
    commandName: {name:  'Write down the Debt(2:282)'}
  },
  {
    commandName: {name:  'Do not follow anyone blindly(2:170'}
  },
  {
    commandName: {name:  'Grant more time to repay if the debtor is in hard time(2:280)'}
  },
  {
    commandName: {name:  'Don’t consume interest(2:275)'}
  },
  {
    commandName: {name:  'Do not engage in Bribery(2:188)'}
  },
  {
    commandName: {name:  'Do not break the Promise(2:177)'}
  },
  {
    commandName: {name:  'Keep the Trust(2:283)'}
  },
  {
    commandName: {name:  'Do not mix the truth with Falsehood(2:42)'}
  },
  {
    commandName: {name:  'Judge with Justice between People(4:58)'}
  },
  {
    commandName: {name:  'Stand out firmly for Justice(4:135)'}
  },
  {
    commandName: {name:  'Wealth of the dead should be distributed among his family members(4:7)'}
  },
  {
    commandName: {name:  'Women also have the right for inheritance(4:7)'}
  },
  {
    commandName: {name:  'Do not devour the property of Orphans(4:10)'}
  },
  {
    commandName: {name:  'Protect Orphans(2:220)'}
  },
  {
    commandName: {name:  'Do not consume one another’s wealth unjustly(4:29)'}
  },
  {
    commandName: {name:  'Try for settlement between people(49:9)'}
  },
  {
    commandName: {name:  'Avoid Suspicion(49:12)'}
  },
  {
    commandName: {name:  'Do not spy and backbite(2:283)'}
  },
  {
    commandName: {name:  'Do not spy OR backbite(49:12)'}
  },
  {
    commandName: {name:  'Spend wealth in charity(57:7)'}
  },
  {
    commandName: {name:  'Encourage Feeding Poor(107:3)'}
  },
  {
    commandName: {name:  'Help those in need by finding them(2:273)'}
  },
  {
    commandName: {name:  'Do not spend money Extravagantly(17:29)'}
  },
  {
    commandName: {name:  'Do not invalidate Charity with reminders(2:264)'}
  },
  {
    commandName: {name:  'Honor Guests(51:26)'}
  },
  {
    commandName: {name:  'Order Righteousness to people only after practicing it yourself(2:44)'}
  },
  {
    commandName: {name:  'Do not commit abuse on the Earth(2:60)'}
  },
  {
    commandName: {name:  'Do not prevent people from Mosque(2:114)'}
  },
  {
    commandName: {name:  'Fight only with those who fight you(2:190)'}
  },
  {
    commandName: {name:  'Keep the Etiquettes of War(2:191)'}
  },
  {
    commandName: {name:  'Do not turn back in Battle(8:15)'}
  },
  {
    commandName: {name:  'No Compulsion in Religion(2:256)'}
  },
  {
    commandName: {name:  'Believe in All PROPHETS(2:285)'}
  },
  {
    commandName: {name:  'Do not have sexual intercourse during Menstrual Period(2:222)'}
  },
  {
    commandName: {name:  'Breast Feed Your Children for two complete years(2:233)'}
  },
  {
    commandName: {name:  'Do not even approach Unlawful Sexual intercourse(17:32)'}
  },
  {
    commandName: {name:  'Choose Rulers by their Merit(2:247)'}
  },
  {
    commandName: {name:  'Do not burden a person beyond his scope(2:286)'}
  },
  {
    commandName: {name:  'Do not become divided(3:103)'}
  },
  {
    commandName: {name:  'Think deeply about the wonders and Creation of this Universe(3:191)'}
  },
  {
    commandName: {name:  'Men and Women have equal Rewards for their deeds(3:195)'}
  },
  {
    commandName: {name:  'Do not marry those in your Blood Relation(4:23)'}
  },
  {
    commandName: {name:  'Family Should be Led by Men(4:34)'}
  },
  {
    commandName: {name:  'Do not be Miserly(Stingy)'}
  },
  {
    commandName: {name:  'Do not Keep Envy(4:54)'}
  },
  {
    commandName: {name:  'Do not Kill each Other(4:92)'}
  },
  {
    commandName: {name:  'Do not be an Advocate for Deceit(4:105)'}
  },
  {
    commandName: {name:  'Do not Cooperate in Sin and Aggression(5:2)'}
  },
  {
    commandName: {name:  'Cooperate in Righteousness(5:2)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Be Just(5:8)'}
  },
  {
    commandName: {name:  'Punish for Crime in an exemplary….***fill it(5:38)'}
  },
  {
    commandName: {name:  'Strive against sinful and unlawful acts(5:63)'}
  },
  {
    commandName: {name:  'Dead Animals, Blood, The Flesh of Swine are prohibited(5:3)'}
  },
  {
    commandName: {name:  'Avoid intoxicants and Alcohol(5:90)'}
  },
  {
    commandName: {name:  'Do not Gamble(5:90)'}
  },
  {
    commandName: {name:  'Do not insult others Deities(6:108)'}
  },
  {
    commandName: {name:  'Do not reduce weight or measure to cheat people(6:152)'}
  },
  {
    commandName: {name:  'Eat and drink, But be not Excessive(7:31)'}
  },
  {
    commandName: {name:  'Wear Good Clothes during prayer times(7:31)'}
  },
  {
    commandName: {name:  'Protect and help those who seek protection(9:6)'}
  },
  {
    commandName: {name:  'Keep Purity(9:108)'}
  },
  {
    commandName: {name:  'Never give up hope of Allahs Mercy(12:87)'}
  },
  {
    commandName: {name:  'Allah will forgive those who have gone wrong out of ignorance(16:119)'}
  },
  {
    commandName: {name:  'Invitation To God should be with Wisdom and Good Instruction(16:125)'}
  },
  {
    commandName: {name:  'No One Will Bear Other Sins(17:15)'}
  },
  {
    commandName: {name:  'Do not Kill Your Children for fear of Poverty(17:31)'}
  },
  {
    commandName: {name:  'Do not pursue that of which you have no knowledge(17:36)'}
  },
  {
    commandName: {name:  'Keep Aloof From What is Vain(23:3)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },
  {
    commandName: {name:  'Having majority is not a criterion of Truth(6:116)'}
  },


         

];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandsPage');
    
  }

}
